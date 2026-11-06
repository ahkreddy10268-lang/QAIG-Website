#!/usr/bin/env node
/*
 * build-site.mjs: regenerate the deployable site/ from the canonical source/.
 *
 * site/ pages are self-unpacking bundles produced by the design tool's exporter
 * (runtime, React, fonts and shared components embedded in each page). That
 * exporter is not part of this repository, so this script rebuilds site/ from:
 *
 *   1. the pristine export at the baseline commit (scripts/export-baseline.json),
 *      where source/ and site/ are known to be in sync, and
 *   2. every change made to source/ since that commit:
 *      - files embedded verbatim (shared .dc.html components, qaig-*.js data and
 *        behaviour scripts) are replaced whole in each bundle's manifest;
 *      - page edits are replayed onto the bundled page template hunk by hunk.
 *        Each changed block must be found exactly once in the template, or the
 *        build stops with an error (it never guesses);
 *   3. build-time additions: page metadata from source/qaig-seo.json, the dark
 *      loading screen (no flash between pages), the 404 page, robots.txt and
 *      sitemap.xml.
 *
 * Plain files (qaig-*.js, _ds/, assets/logos/logos.js) are copied to site/.
 * Raster images in site/assets are produced by scripts/optimize-images.py.
 *
 * Usage:  node scripts/build-site.mjs            build site/
 *         node scripts/build-site.mjs --check    build in memory, report, write nothing
 * No dependencies beyond Node 18+ and git.
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'source');
const OUT = path.join(ROOT, 'site');
const CHECK = process.argv.includes('--check');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/export-baseline.json'), 'utf8'));
const BASE = cfg.commit;
const seo = JSON.parse(fs.readFileSync(path.join(SRC, 'qaig-seo.json'), 'utf8'));

const git = args => execFileSync('git', args, { cwd: ROOT, maxBuffer: 1 << 30 });
const atBase = rel => git(['show', `${BASE}:${rel}`]);
const lsBase = dir => git(['ls-tree', '-r', '--name-only', BASE, dir]).toString().split('\n').filter(Boolean);
const sha = b => crypto.createHash('sha1').update(b).digest('hex');
const UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const log = (...a) => console.log(...a);
let failures = 0;
const fail = msg => { failures++; console.error('ERROR ' + msg); };

// ---------- 1. Index baseline source files by content, so bundle entries can be traced back ----------
const baseSourceFiles = lsBase('source').filter(f => /\.(html|js|css)$/.test(f) && !f.startsWith('source/docs/'));
const byHash = new Map(); // sha(content) -> relative path inside source/
for (const f of baseSourceFiles) byHash.set(sha(atBase(f)), f.slice('source/'.length));
// Raster masters in source/assets, by content (to recognise images embedded in bundles)
const assetByHash = new Map();
(function walk(d) { for (const n of fs.readdirSync(d)) { const f = path.join(d, n); if (fs.statSync(f).isDirectory()) walk(f); else if (/\.(png|jpe?g)$/i.test(n)) assetByHash.set(sha(fs.readFileSync(f)), path.relative(SRC, f)); } })(path.join(SRC, 'assets'));
const baseSrcText = rel => atBase('source/' + rel).toString();
const curSrcText = rel => fs.readFileSync(path.join(SRC, rel), 'utf8');

// ---------- 2. Line-hunk replay ----------
// The exporter rewrites camelCase attributes in page markup (onClick -> sc-camel-on-click)
// with the same rule the runtime uses (dc-runtime encodeCamelAttrs).
const encodeCamel = x => x.replace(/(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g, (_, sp, n, eq) => sp + 'sc-camel-' + n.replace(/[A-Z]/g, c => '-' + c.toLowerCase()) + eq);

function lineDiff(a, b) {
  // Myers-style LCS on lines, returns hunks [{a0,a1,b0,b1}] (half-open) in a and b.
  const A = a.split('\n'), B = b.split('\n');
  let s = 0; while (s < A.length && s < B.length && A[s] === B[s]) s++;
  let ea = A.length, eb = B.length; while (ea > s && eb > s && A[ea - 1] === B[eb - 1]) { ea--; eb--; }
  const a2 = A.slice(s, ea), b2 = B.slice(s, eb), n = a2.length, m = b2.length;
  if (n * m > 4e7) return { A, B, hunks: [{ a0: s, a1: ea, b0: s, b1: eb }] };
  const L = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = a2[i] === b2[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const hunks = []; let i = 0, j = 0, cur = null;
  const open = () => { if (!cur) cur = { a0: s + i, b0: s + j }; };
  const close = () => { if (cur) { cur.a1 = s + i; cur.b1 = s + j; hunks.push(cur); cur = null; } };
  while (i < n || j < m) {
    if (i < n && j < m && a2[i] === b2[j]) { close(); i++; j++; }
    else if (j < m && (i === n || L[i][j + 1] >= L[i + 1][j])) { open(); j++; }
    else { open(); i++; }
  }
  close();
  return { A, B, hunks };
}

function countOf(hay, needle) { let c = 0, i = -1; while ((i = hay.indexOf(needle, i + 1)) !== -1) { c++; if (c > 1) break; } return c; }

function replayOnto(template, baseText, curText, label, pathToUuid) {
  if (baseText === curText) return template;
  const { A, B, hunks } = lineDiff(baseText, curText);
  // Apply from the end so earlier offsets stay valid.
  for (const h of hunks.reverse()) {
    let a0 = h.a0, a1 = h.a1, b0 = h.b0, b1 = h.b1, done = false;
    for (let ctx = 0; ctx <= 6 && !done; ctx++) {
      const oldBlock = A.slice(a0, a1).join('\n'), newBlock = B.slice(b0, b1).join('\n');
      const variants = [x => x, encodeCamel];
      for (const v of variants) {
        const sub = x => { let y = v(x); for (const [p, u] of pathToUuid) y = y.split(p).join(u); return y; };
        for (const tf of [v, sub]) {
          const o = tf(oldBlock);
          if (!o) continue; // pure insertion needs context
          if (countOf(template, o) === 1) { template = template.replace(o, () => tf(newBlock)); done = true; break; }
        }
        if (done) break;
      }
      // widen the block by one line of shared context on each side
      if (a0 > 0 && b0 > 0) { a0--; b0--; }
      if (a1 < A.length && b1 < B.length) { a1++; b1++; }
    }
    if (!done) fail(`${label}: could not place a change at source line ${h.a0 + 1} uniquely in the bundled template`);
  }
  return template;
}

// ---------- 3. Bundle read/write ----------
const SECT = t => new RegExp(`(<script type="__bundler/${t}">)([\\s\\S]*?)(</script>)`);
function readBundle(html) {
  const get = t => { const m = html.match(SECT(t)); return m ? m[2] : null; };
  return { html, manifest: JSON.parse(get('manifest')), ext: JSON.parse(get('ext_resources') || '[]'), template: JSON.parse(get('template')) };
}
function entryBytes(e) { let b = Buffer.from(e.data, 'base64'); return e.compressed ? zlib.gunzipSync(b) : b; }
function setEntry(e, buf) { e.data = (e.compressed ? zlib.gzipSync(buf, { level: 9 }) : buf).toString('base64'); }
function writeBundle(b) {
  let h = b.html;
  h = h.replace(SECT('manifest'), (_, a, __, c) => a + JSON.stringify(b.manifest) + c);
  h = h.replace(SECT('template'), (_, a, __, c) => a + JSON.stringify(b.template).replace(/<\//g, '\\u003c/') + c);
  return h;
}

// ---------- 4. Build-time additions ----------
const BG = '#05080e';
const NO_FLASH = `<style id="qaig-no-flash">html,body{background:${BG}}x-dc{display:none!important}</style>`;
function metaTags(page, { forShell }) {
  const m = seo.pages[page] || {}; const site = seo.site;
  const title = m.title ? `${m.title}${m.title === site.name ? '' : ' · ' + site.name}` : site.name;
  const url = site.url.replace(/\/$/, '') + '/' + encodeURI(page === '404.html' ? '' : page);
  const tags = [
    `<title>${esc(title)}</title>`,
    m.description ? `<meta name="description" content="${esc(m.description)}">` : '',
    m.noindex ? '<meta name="robots" content="noindex">' : '',
    `<meta name="theme-color" content="${BG}">`,
    '<meta name="color-scheme" content="dark">',
    '<link rel="icon" href="/favicon.ico" sizes="any">',
    '<link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
  ];
  if (forShell && !m.noindex && page !== '404.html') tags.push(
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(site.name)}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    m.description ? `<meta property="og:description" content="${esc(m.description)}">` : '',
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(site.url.replace(/\/$/, '') + '/' + site.ogImage)}">`,
    '<meta name="twitter:card" content="summary_large_image">');
  return tags.filter(Boolean).join('\n  ');
}
function addMeta(page, b, extraHead = '') {
  // Shell (what crawlers and link previews read before JavaScript runs)
  let h = b.html;
  h = h.replace(/<html[^>]*>/, `<html lang="${seo.site.lang}">`);
  h = h.replace(/<title>[^<]*<\/title>\s*/, '');
  h = h.replace(/(<meta name="viewport"[^>]*>)/, `$1\n  ${extraHead}${metaTags(page, { forShell: true })}`);
  // Loading shell: dark, no thumbnail or "Unpacking..." label (was a cream flash between pages)
  h = h.replace('body { background: #faf9f5;', `html, body { background: ${BG};`);
  h = h.replace(/(#__bundler_thumbnail \{[^}]*?background: )#faf9f5;/, `$1${BG};`);
  if (!h.includes('#__bundler_loading, #__bundler_thumbnail svg')) h = h.replace('#__bundler_placeholder {', '#__bundler_loading, #__bundler_thumbnail svg { display: none !important; }\n    #__bundler_placeholder {');
  b.html = h;
  // Template (the document that replaces the shell once unpacked)
  let t = b.template.replace(/<style id="qaig-no-flash">[^<]*<\/style>/, '');
  t = t.replace(/<html[^>]*>/, `<html lang="${seo.site.lang}">`);
  const head = t.match(/<head[^>]*>/i); const i = head.index + head[0].length;
  t = t.slice(0, i) + NO_FLASH + extraHead + metaTags(page, { forShell: false }) + t.slice(i);
  b.template = t;
}

// WebP copies of large PNGs (written by optimize-images.py); references are rewritten in the output only
const webpMap = (() => { const f = path.join(OUT, 'assets', 'webp-map.json'); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}; })();
const toWebp = text => { for (const [png, webp] of Object.entries(webpMap)) text = text.split(png).join(webp); return text; };

// ---------- 5. Build ----------
const basePages = lsBase('site').filter(f => /^site\/[^/]+\.dc\.html$/.test(f)).map(f => f.slice(5));
const outputs = new Map(); // relative path in site/ -> Buffer|string
const curAssets = p => { const f = path.join(OUT, p); return fs.existsSync(f) ? fs.readFileSync(f) : null; };

for (const page of basePages) {
  if (!fs.existsSync(path.join(SRC, page))) { fail(`${page}: missing from source/`); continue; }
  const b = readBundle(atBase('site/' + page).toString());
  let replacedEntries = 0, replacedImgs = 0;
  const pathToUuid = new Map();
  for (const [uuid, e] of Object.entries(b.manifest)) {
    const buf = entryBytes(e);
    const rel = byHash.get(sha(buf));
    if (rel) {
      const now = Buffer.from(curSrcText(rel));
      if (!now.equals(buf)) { setEntry(e, now); replacedEntries++; }
      continue;
    }
    if (/^image\//.test(e.mime)) {
      // embedded image: use the optimised copy from site/assets if it is the same picture
      const assetRel = assetByHash.get(sha(buf));
      if (assetRel) { pathToUuid.set(assetRel, uuid); const opt = curAssets(assetRel); if (opt && opt.length < buf.length) { setEntry(e, opt); replacedImgs++; } }
    }
  }
  b.template = toWebp(replayOnto(b.template, baseSrcText(page), curSrcText(page), page, pathToUuid));
  for (const e of Object.values(b.manifest)) if (/html|javascript/.test(e.mime)) { const t = entryBytes(e).toString(); const w = toWebp(t); if (w !== t) setEntry(e, Buffer.from(w)); }
  addMeta(page, b);
  outputs.set(page, writeBundle(b));
  log(`page  ${page.padEnd(34)} embedded files updated: ${replacedEntries}, images: ${replacedImgs}`);
}

// 404 page: the approved System States design, opened on its 404 state, served for any unknown URL.
{
  const page = seo.notFound.from;
  if (outputs.has(page)) {
    const b = readBundle(outputs.get(page));
    b.template = b.template.replace(/<title>[^<]*<\/title>/g, '');
    b.html = b.html.replace(/<title>[^<]*<\/title>\s*/g, '').replace(/<link rel="canonical"[^>]*>\s*/g, '').replace(/<meta (property="og:[^"]+"|name="twitter:card")[^>]*>\s*/g, '').replace(/<meta name="description"[^>]*>\s*/g, '');
    // <base href="/"> so relative assets resolve at any depth
    const base = '<base href="/">';
    b.html = b.html.replace(/(<meta name="viewport"[^>]*>)/, `$1\n  ${base}${metaTags('404.html', { forShell: true })}`);
    const head = b.template.match(/<head[^>]*>/i); const i = head.index + head[0].length;
    b.template = b.template.slice(0, i) + base + `<title>${esc(seo.notFound.title)} · ${esc(seo.site.name)}</title><meta name="robots" content="noindex">` + b.template.slice(i);
    outputs.set('404.html', writeBundle(b));
    log('page  404.html (from ' + page + ')');
  } else fail('404 source page not built: ' + page);
}

// Plain files mirrored from source/ (only those the baseline export also shipped as files)
for (const f of lsBase('site')) {
  const rel = f.slice(5);
  if (rel.endsWith('.dc.html') || rel === 'index.html' || rel === 'README.md' || rel.startsWith('assets/') && /\.(png|jpe?g)$/i.test(rel)) continue;
  const src = path.join(SRC, rel);
  if (fs.existsSync(src)) outputs.set(rel, rel.endsWith('.js') ? toWebp(fs.readFileSync(src, 'utf8')) : fs.readFileSync(src));
}
// Root files that only exist in source/public (favicons)
for (const n of fs.existsSync(path.join(SRC, 'public')) ? fs.readdirSync(path.join(SRC, 'public')) : []) outputs.set(n, fs.readFileSync(path.join(SRC, 'public', n)));
// index.html: redirect to Home with the same metadata
outputs.set('index.html', `<!DOCTYPE html>\n<html lang="${seo.site.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">\n  ${metaTags(seo.home, { forShell: true })}\n  <meta http-equiv="refresh" content="0;url=${encodeURI(seo.home)}"><style>html,body{margin:0;background:${BG};color:#7fe9ff;font:16px system-ui}body{padding:32px}a{color:#00d4ff}</style></head>\n<body><p>Opening the site… <a href="${encodeURI(seo.home)}">Open the Home page</a></p></body></html>\n`);
// robots.txt and sitemap.xml
const siteUrl = seo.site.url.replace(/\/$/, '');
const listed = basePages.filter(p => !(seo.pages[p] || {}).noindex && !(seo.excluded || []).includes(p));
outputs.set('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
outputs.set('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${listed.map(p => `  <url><loc>${siteUrl}/${encodeURI(p)}</loc></url>`).join('\n')}\n</urlset>\n`);
// Pages kept in source/ for design reference but not deployed
outputs.set('.vercelignore', (seo.excluded || []).map(p => `/${p}`).join('\n') + '\nREADME.md\n');

if (failures) { console.error(`\n${failures} error(s). site/ was not written.`); process.exit(1); }
if (CHECK) { log(`\ncheck passed: ${outputs.size} files would be written.`); process.exit(0); }
for (const [rel, data] of outputs) { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); }
log(`\nwrote ${outputs.size} files to site/`);
