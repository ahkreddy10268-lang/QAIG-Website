/* QAIG page transitions: "Quantum Light Sweep". Final version for this multi-page site.
   Every navigation is a full document load, so nothing can animate across both pages. The reliable pattern is:
   - Click: navigate immediately (no timers, no locks). The outgoing content dims for 100ms while the browser loads the next page.
   - Arrival: ONE cyan sweep across the content area (~220ms, 260ms for enquiry links), starting on the first frame. It never hides
     or delays content, so it cannot stall, restart or flash. The page reveals with its own entrance, sped up to start at once.
   - Back/Forward/refresh never animate. Reduced motion: no sweep, no movement.
   window.QAIG_GO(href, kind?) navigates. Internal .dc.html links are intercepted automatically. */
(function () {
  if (window.QAIG_GO) return;
  try { var cs = document.currentScript, cbase = cs && /^(https?|file):/.test(cs.src || "") ? cs.src.replace(/[^\/?#]*([?#].*)?$/, "") : ""; if (!window.__qcurFx && !document.querySelector("script[data-qcur]")) { var qs = document.createElement("script"); qs.src = cbase + "qaig-cursor.js"; qs.setAttribute("data-qcur", ""); (document.head || document.documentElement).appendChild(qs); } } catch (e) {}
  var KEY = "qaig-arrive", doc = document.documentElement, SWEEP = "cubic-bezier(.45,0,.2,1)";
  var rm = false; try { rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var NAV = "[data-qtr-nav]", NO_NAV = /customer.?portal|portal.?states/i.test(decodeURIComponent(location.pathname));

  var st = document.createElement("style");
  st.textContent =
    /* Site-wide: the design system's .frame corner brackets are retired. Kept here so any reintroduced .frame stays bracket-free. */
    ".frame::before,.frame::after{content:none!important;display:none!important}" +
    "html.qtr-arrived .qrise{animation-delay:0s!important;animation-duration:.3s!important}html.qtr-arrived .qrv-on [data-rv],html.qtr-arrived.qrv-on [data-rv]{transition-duration:.3s!important}" +
    "html.qtr-out " + NAV + " ~ *,html.qtr-out.qtr-nonav #dc-root{opacity:.35;transform:translateY(-4px);transition:opacity 100ms ease-out,transform 100ms ease-out}";
  (document.head || doc).appendChild(st);
  if (NO_NAV) doc.classList.add("qtr-nonav");

  /* Tag the navbar's outermost wrapper (the node whose siblings are the page content). */
  function tag() { if (NO_NAV) return; var h = document.querySelector("header"); if (!h) return; var e = h; while (e.parentElement && e.parentElement.children.length < 2 && e.parentElement.id !== "dc-root") e = e.parentElement; if (e === h || e.hasAttribute("data-qtr-nav")) return; var o = document.querySelector(NAV); if (o) o.removeAttribute("data-qtr-nav"); e.setAttribute("data-qtr-nav", ""); }
  tag();
  try { var mo = new MutationObserver(tag); mo.observe(doc, { childList: true, subtree: true }); setTimeout(function () { mo.disconnect(); }, 4000); } catch (e) {}

  function navBottom() { try { var h = document.querySelector("header"); if (h) return Math.max(0, Math.round(h.getBoundingClientRect().bottom)); } catch (e) {} return NO_NAV ? 0 : 84; }

  /* One continuous pass of the light trace across the content area. Non-blocking, removes itself. */
  function sweep(strong) {
    if (rm || !Element.prototype.animate) return;
    var el = document.createElement("div");
    el.setAttribute("aria-hidden", "true");
    el.style.cssText = "position:fixed;left:0;right:0;bottom:0;top:" + navBottom() + "px;z-index:40;overflow:hidden;pointer-events:none;contain:strict";
    var gw = strong ? "48vw" : "30vw";
    el.innerHTML = '<div data-h style="position:absolute;left:0;top:0;bottom:0;width:0;will-change:transform">' +
      '<div style="position:absolute;top:0;bottom:0;right:0;width:' + gw + ';background:linear-gradient(90deg,transparent,rgba(0,140,255,' + (strong ? '.10' : '.06') + ') 55%,rgba(0,212,255,' + (strong ? '.22' : '.14') + '));-webkit-mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent);mask-image:linear-gradient(180deg,transparent,#000 18%,#000 82%,transparent)"></div>' +
      '<div style="position:absolute;top:0;bottom:0;right:0;width:' + gw + ';background:repeating-linear-gradient(90deg,rgba(127,233,255,.14) 0 1px,transparent 1px 9px);-webkit-mask-image:linear-gradient(90deg,transparent,#000);mask-image:linear-gradient(90deg,transparent,#000)"></div>' +
      '<div style="position:absolute;top:0;bottom:0;left:-1px;width:2px;background:linear-gradient(180deg,transparent,#00d4ff 14%,#bdf5ff 50%,#00d4ff 86%,transparent);box-shadow:0 0 18px 2px rgba(0,212,255,.55),0 0 44px 6px rgba(0,140,255,.26)"></div>' +
      (strong ? '<div style="position:absolute;top:0;bottom:0;left:-44px;width:1px;background:linear-gradient(180deg,transparent,rgba(0,212,255,.7) 20%,rgba(0,212,255,.7) 80%,transparent)"></div>' : "") + "</div>";
    doc.appendChild(el);
    var W = el.clientWidth || innerWidth, a = el.firstChild.animate(
      [{ transform: "translateX(-40px)", opacity: 1 }, { transform: "translateX(" + Math.round(W * 0.85) + "px)", opacity: 1, offset: 0.8 }, { transform: "translateX(" + (W + 60) + "px)", opacity: 0 }],
      { duration: strong ? 260 : 220, easing: SWEEP, fill: "forwards" });
    var kill = function () { try { el.remove(); } catch (e) {} };
    a.onfinish = kill; a.oncancel = kill;
  }

  function isEnq(href) { try { var p = decodeURIComponent(new URL(href, location.href).pathname); var r = (window.QAIG_NAV && window.QAIG_NAV.routes && window.QAIG_NAV.routes.enquiry) || ""; return /enquiry|discuss your requirement/i.test(p) || (r && p.indexOf(r) >= 0); } catch (e) { return false; } }
  window.QAIG_IS_ENQ = isEnq;
  function go(href, kind) {
    if (!href || href === "#") return;
    if (window.QAIG_ENQUIRE && isEnq(href) && !isEnq(location.href)) { window.QAIG_ENQUIRE({ href: href }); return; }
    try { var su = new URL(href, location.href); if (su.pathname === location.pathname && su.search === location.search) { window.location.href = href; return; } } catch (e) {}
    var strong = kind === "enquiry" || /enquiry/i.test(decodeURIComponent(href));
    try { sessionStorage.setItem(KEY, strong ? "s" : "n"); } catch (e) {}
    if (!rm) { tag(); doc.classList.add("qtr-out"); }
    window.location.href = href;
  }
  window.QAIG_GO = go;

  /* Arrival: runs once per click-initiated navigation. Content is not hidden. */
  var arrive = null; try { arrive = sessionStorage.getItem(KEY); sessionStorage.removeItem(KEY); } catch (e) {}
  var nt = ""; try { var pe = performance.getEntriesByType("navigation")[0]; nt = pe ? pe.type : ""; } catch (e) {}
  if (arrive && nt !== "back_forward" && nt !== "reload") {
    doc.classList.add("qtr-arrived");
    var fire = function () { sweep(arrive === "s"); };
    if (document.body) requestAnimationFrame(fire); else document.addEventListener("DOMContentLoaded", fire, { once: true });
  }

  window.addEventListener("pageshow", function (e) { if (e.persisted) doc.classList.remove("qtr-out"); });

  document.addEventListener("click", function (ev) {
    if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
    var el = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
    if (!el || el.target === "_blank" || el.hasAttribute("download")) return;
    var href = el.getAttribute("href");
    if (!href || href.charAt(0) === "#" || /^(mailto:|tel:|https?:|javascript:)/i.test(href)) return;
    if (!/\.dc\.html/i.test(href)) return;
    try { var u = new URL(href, location.href); if (u.pathname === location.pathname && u.search === location.search) return; } catch (e) {}
    ev.preventDefault(); go(href);
  }, true);
})();
