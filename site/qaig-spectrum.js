/* QAIG Portfolio Spectrum — the All Products hero instrument.
   Five domain lanes on one spectral axis; each product is a peak. A tuning beam follows the pointer (or auto-scans when idle);
   peaks near the beam rise and the focused one is reported through onFocus. Click or Enter picks it.
   QAIG_SPECTRUM(canvas, { lanes:[{code,label}], items:[{title,code,rnd}], reduced, onFocus(i), onPick(i) }) -> { set(i), destroy() } */
(function () {
  window.QAIG_SPECTRUM = function (cv, o) {
    const ctx = cv.getContext("2d"), lanes = o.lanes, items = o.items, rm = !!o.reduced;
    let W = 0, H = 0, dpr = 1, raf = 0, vis = true, px = null, beam = 0.5, tgt = 0.5, foc = -1, lastMove = 0, t0 = performance.now(), hoverAmp = [];
    const N = lanes.length, PAD = 28;
    // product x positions: evenly within lane
    const pos = items.map((it, i) => {
      const li = lanes.findIndex((l) => l.code === it.code), inLane = items.filter((x) => x.code === it.code), k = inLane.indexOf(it), n = inLane.length;
      return (li + (k + 1) / (n + 1)) / N;
    });
    items.forEach((_, i) => (hoverAmp[i] = 0));
    const X = (u) => PAD + u * (W - PAD * 2);
    const size = () => { const r = cv.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1); W = Math.max(1, r.width); H = Math.max(1, r.height); cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    const nearest = (u) => { let b = -1, d = 1e9; pos.forEach((p, i) => { const dd = Math.abs(p - u); if (dd < d) { d = dd; b = i; } }); return b; };
    const css = (n, f) => getComputedStyle(cv).getPropertyValue(n).trim() || f;
    const C = { brand: css("--brand", "#00d4ff"), warn: css("--warning", "#f5b44a"), fg: css("--foreground", "#e6edf5"), mut: css("--muted", "#8a99ad"), faint: css("--faint", "#5b6b80"), line: "rgba(140,170,200,.14)" };
    const draw = (now) => {
      raf = 0; const t = rm ? 0 : (now - t0) / 1000;
      if (!rm && px == null && now - lastMove > 2200) tgt = 0.5 + 0.46 * Math.sin(t * 0.22);
      beam += (tgt - beam) * (rm ? 1 : 0.08);
      const f = nearest(beam); if (f !== foc) { foc = f; o.onFocus && o.onFocus(f); }
      ctx.clearRect(0, 0, W, H);
      const base = H - 54, top = 34, amp = base - top - 40;
      // lanes
      ctx.font = "500 11px " + (css("--font-mono", "monospace"));
      lanes.forEach((l, i) => { const x0 = X(i / N), x1 = X((i + 1) / N), on = pos[foc] >= i / N && pos[foc] < (i + 1) / N;
        if (on) { const g = ctx.createLinearGradient(0, top, 0, base); g.addColorStop(0, "rgba(0,212,255,0)"); g.addColorStop(1, "rgba(0,212,255,.07)"); ctx.fillStyle = g; ctx.fillRect(x0, top, x1 - x0, base - top); }
        if (i) { ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.setLineDash([2, 5]); ctx.beginPath(); ctx.moveTo(x0, top); ctx.lineTo(x0, base + 30); ctx.stroke(); ctx.setLineDash([]); }
        ctx.fillStyle = on ? C.brand : C.faint; ctx.textAlign = "center"; ctx.fillText(String(i + 1).padStart(2, "0") + " · " + l.code, (x0 + x1) / 2, base + 30); });
      // baseline
      ctx.strokeStyle = "rgba(140,170,200,.28)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(0), base); ctx.lineTo(X(1), base); ctx.stroke();
      for (let k = 0; k <= 40; k++) { const x = X(k / 40); ctx.beginPath(); ctx.moveTo(x, base); ctx.lineTo(x, base + (k % 5 ? 3 : 7)); ctx.stroke(); }
      // peak heights
      const hts = pos.map((p, i) => { const d = Math.abs(p - beam), near = Math.exp(-(d * d) / (2 * 0.035 * 0.035)); hoverAmp[i] += ((i === foc ? 1 : near * 0.6) - hoverAmp[i]) * (rm ? 1 : 0.12); return (items[i].rnd ? 0.32 : 0.42) + 0.58 * hoverAmp[i]; });
      const sig = 0.011 * (W / 1000 < 0.7 ? 1.35 : 1);
      const yAt = (u) => { let y = 0; pos.forEach((p, i) => { const d = u - p; y += hts[i] * Math.exp(-(d * d) / (2 * sig * sig)); }); y += 0.025 * Math.sin(u * 90 + t * 3) + 0.015 * Math.sin(u * 211 - t * 5); return base - Math.max(0, y) * amp; };
      // fill + curve
      ctx.beginPath(); ctx.moveTo(X(0), base); for (let x = 0; x <= W - PAD * 2; x += 2) { const u = x / (W - PAD * 2); ctx.lineTo(X(u), yAt(u)); } ctx.lineTo(X(1), base); ctx.closePath();
      const gf = ctx.createLinearGradient(0, top, 0, base); gf.addColorStop(0, "rgba(0,212,255,.22)"); gf.addColorStop(1, "rgba(0,212,255,0)"); ctx.fillStyle = gf; ctx.fill();
      ctx.beginPath(); for (let x = 0; x <= W - PAD * 2; x += 2) { const u = x / (W - PAD * 2); x ? ctx.lineTo(X(u), yAt(u)) : ctx.moveTo(X(u), yAt(u)); }
      ctx.strokeStyle = C.brand; ctx.lineWidth = 1.6; ctx.shadowColor = "rgba(0,212,255,.6)"; ctx.shadowBlur = 8; ctx.stroke(); ctx.shadowBlur = 0;
      // markers + labels
      ctx.font = "600 12.5px " + css("--font-sans", "sans-serif");
      pos.forEach((p, i) => { const x = X(p), y = base - hts[i] * amp - 0.0 * amp, on = i === foc, col = items[i].rnd ? C.warn : C.brand;
        ctx.strokeStyle = on ? col : "rgba(140,170,200,.25)"; ctx.setLineDash(items[i].rnd ? [3, 4] : []); ctx.beginPath(); ctx.moveTo(x, y + 8); ctx.lineTo(x, base); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.arc(x, y, on ? 5 : 3, 0, 7); ctx.fillStyle = on ? col : "rgba(5,8,14,1)"; ctx.fill(); ctx.lineWidth = 1.2; ctx.strokeStyle = col; ctx.stroke();
        if (on) { ctx.beginPath(); ctx.arc(x, y, 11 + (rm ? 0 : 3 * Math.sin(t * 4)), 0, 7); ctx.strokeStyle = items[i].rnd ? "rgba(245,180,74,.35)" : "rgba(0,212,255,.35)"; ctx.stroke(); }
        const show = on || hoverAmp[i] > 0.35 || W > 1000;
        if (show) { ctx.globalAlpha = on ? 1 : Math.min(1, 0.35 + hoverAmp[i]); ctx.fillStyle = on ? C.fg : C.mut; ctx.textAlign = "center"; const lx = Math.max(PAD + 30, Math.min(W - PAD - 30, x));
          ctx.save(); if (!on && W > 1000) { ctx.translate(lx, y - 14); ctx.rotate(-Math.PI / 5); ctx.textAlign = "left"; ctx.font = "500 11.5px " + css("--font-sans", "sans-serif"); ctx.fillText(items[i].title, 0, 0); } else { ctx.fillText(items[i].title + (items[i].rnd ? "  · R&D" : ""), lx, y - 18); } ctx.restore(); ctx.globalAlpha = 1; } });
      // beam
      const bx = X(beam); const gb = ctx.createLinearGradient(bx - 40, 0, bx + 40, 0); gb.addColorStop(0, "rgba(0,212,255,0)"); gb.addColorStop(0.5, "rgba(0,212,255,.10)"); gb.addColorStop(1, "rgba(0,212,255,0)");
      ctx.fillStyle = gb; ctx.fillRect(bx - 40, top - 14, 80, base - top + 14); ctx.strokeStyle = "rgba(0,212,255,.75)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(bx, top - 14); ctx.lineTo(bx, base); ctx.stroke();
      ctx.fillStyle = C.brand; ctx.beginPath(); ctx.moveTo(bx - 5, top - 20); ctx.lineTo(bx + 5, top - 20); ctx.lineTo(bx, top - 13); ctx.closePath(); ctx.fill();
      if (!rm && vis && document.visibilityState !== "hidden") raf = requestAnimationFrame(draw);
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const uOf = (ev) => { const r = cv.getBoundingClientRect(); return Math.max(0, Math.min(1, (ev.clientX - r.left - PAD) / (r.width - PAD * 2))); };
    const mv = (ev) => { px = uOf(ev); tgt = pos[nearest(px)] * 0.35 + px * 0.65; lastMove = performance.now(); kick(); };
    const lv = () => { px = null; lastMove = performance.now(); };
    const ck = (ev) => { const i = nearest(uOf(ev)); tgt = pos[i]; kick(); o.onPick && o.onPick(i); };
    size(); kick();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { size(); kick(); }) : null; ro && ro.observe(cv);
    const io = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([en]) => { vis = en.isIntersecting; if (vis) kick(); }) : null; io && io.observe(cv);
    cv.addEventListener("pointermove", mv); cv.addEventListener("pointerleave", lv); cv.addEventListener("click", ck);
    return {
      set(i) { if (i < 0 || i >= items.length) return; tgt = pos[i]; px = pos[i]; lastMove = performance.now() + 4000; if (rm) beam = tgt; kick(); setTimeout(() => { px = null; }, 50); },
      destroy() { cancelAnimationFrame(raf); ro && ro.disconnect(); io && io.disconnect(); cv.removeEventListener("pointermove", mv); cv.removeEventListener("pointerleave", lv); cv.removeEventListener("click", ck); }
    };
  };
})();
