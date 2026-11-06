#!/usr/bin/env python3
"""optimize-images.py: build site/assets from the master images in source/assets.

source/assets keeps the full-resolution masters. This writes web-sized copies to
site/assets with the same file names and formats, so no page or data file changes. Large PNGs also get a .webp copy; build-site.mjs
points references at it (source/ keeps the .png names).

Sizing: each image is resized to twice the largest size it is displayed at
(scripts/image-display-sizes.json, measured in a browser at 1440 and 390 px wide),
never below a floor and never upscaled. Images not seen in that measurement (for
example lightbox or state-only images) get a conservative cap.

    python3 scripts/optimize-images.py        (needs Pillow: pip install Pillow)
"""
import json, os, shutil, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, OUT = os.path.join(ROOT, 'source', 'assets'), os.path.join(ROOT, 'site', 'assets')
seen = json.load(open(os.path.join(ROOT, 'scripts', 'image-display-sizes.json')))
SMALL = ('/icons/', '/logos/', 'certifications/', 'ICON', 'icon', 'logo', 'LOGO', 'badge')

def target(rel, natural):
    small = any(k in rel for k in SMALL)
    floor, cap = (256, 512) if small else (800, 1920)
    shown = seen.get('assets/' + rel)
    want = max(2 * shown, floor) if shown else cap
    return min(natural, want)

before = after = 0
webp = {}  # 'assets/x.png' -> 'assets/x.webp' when WebP is much smaller; build-site.mjs rewrites references
for dp, _, files in os.walk(SRC):
    for n in files:
        src = os.path.join(dp, n); rel = os.path.relpath(src, SRC).replace(os.sep, '/'); dst = os.path.join(OUT, rel)
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        size = os.path.getsize(src); before += size
        if not n.lower().endswith(('.png', '.jpg', '.jpeg')):
            shutil.copyfile(src, dst); after += size; continue
        im = ImageOps.exif_transpose(Image.open(src))
        t = target(rel, max(im.size))
        if max(im.size) > t:
            im.thumbnail((t, t), Image.LANCZOS)
        tmp = dst + '.tmp'
        if n.lower().endswith('.png'):
            im.save(tmp, 'PNG', optimize=True)
        else:
            im.convert('RGB').save(tmp, 'JPEG', quality=82, optimize=True, progressive=True)
        if os.path.getsize(tmp) < size * 0.95:
            os.replace(tmp, dst)
        else:
            os.remove(tmp); shutil.copyfile(src, dst)
        after += os.path.getsize(dst)
        if n.lower().endswith('.png') and os.path.getsize(dst) > 150_000:
            w = os.path.splitext(dst)[0] + '.webp'
            im.save(w, 'WEBP', quality=82, method=5)
            if os.path.getsize(w) < os.path.getsize(dst) * 0.7:
                webp['assets/' + rel] = 'assets/' + os.path.splitext(rel)[0].replace(os.sep, '/') + '.webp'
                after += os.path.getsize(w)
            else:
                os.remove(w)
json.dump(webp, open(os.path.join(OUT, 'webp-map.json'), 'w'), indent=1, sort_keys=True)
print(f'{len(webp)} PNGs also written as WebP. site/assets: {before/1048576:.1f} MB of masters -> {after/1048576:.1f} MB written')
