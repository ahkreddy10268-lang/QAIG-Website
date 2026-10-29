/* QAIG product-page hero illustrations. Each product has its own concept, distinct from the directory card artwork in qaig-product-ill.js.
   QAIG_HERO(canvas, key, { reduced }) -> { destroy() } */
(function () {
  if (window.QAIG_HERO) return;
  var C = "0,212,255", B = "64,132,255", A = "255,184,77", Wt = "232,240,248";
  function rg(c, a) { return "rgba(" + c + "," + (a < 0 ? 0 : a > 1 ? 1 : a).toFixed(3) + ")"; }
  function hash(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  var CW = 1e4; function mono(ctx, px, w) { px = CW < 440 ? Math.max(11, px + 1) : Math.max(12, px + 2); ctx.font = (w || 500) + " " + px + "px 'IBM Plex Mono', ui-monospace, monospace"; }
  var REG = {};

  /* Q-Forte: discover exposure → protected channel → quantum randomness */
  REG["q-forte"] = function (ctx, W, H, t, m) {
    var hz = W >= H * 1.05, L = hz ? W : H, S = hz ? H : W;
    function P(u, v) { var px = m.x * 10, py = m.y * 8; return hz ? [u * W + px * (1 - u), H * 0.5 + v + py] : [W * 0.5 + v + px, u * H + py * (1 - u)]; }
    var hot = m.in ? (hz ? (m.x + 1) / 2 : (m.y + 1) / 2) : -1, zone = hot < 0 ? -1 : hot < 0.36 ? 0 : hot < 0.66 ? 1 : 2;
    var em = [zone === 0 ? 1 : 0.7, zone === 1 ? 1 : 0.7, zone === 2 ? 1 : 0.7];
    /* A: asset constellation with a scanning sweep */
    var ca = P(0.17, 0), r = Math.min(S * 0.3, L * 0.14), sw = (t * 0.9) % 6.2832, nodes = [];
    for (var i = 0; i < 16; i++) { var an = hash(i) * 6.2832, rr = r * (0.25 + 0.75 * Math.sqrt(hash(i + 40))); nodes.push([ca[0] + Math.cos(an) * rr, ca[1] + Math.sin(an) * rr, an, i % 5 === 2]); }
    ctx.lineWidth = 1;
    for (i = 0; i < nodes.length; i++) for (var j = i + 1; j < nodes.length; j++) { var d = Math.hypot(nodes[i][0] - nodes[j][0], nodes[i][1] - nodes[j][1]); if (d < r * 0.62) { ctx.strokeStyle = rg(C, 0.16 * em[0] * (1 - d / (r * 0.62)) + 0.04); ctx.beginPath(); ctx.moveTo(nodes[i][0], nodes[i][1]); ctx.lineTo(nodes[j][0], nodes[j][1]); ctx.stroke(); } }
    ctx.strokeStyle = rg(C, 0.22 * em[0]); ctx.beginPath(); ctx.arc(ca[0], ca[1], r * 1.08, 0, 6.2832); ctx.stroke();
    var g = ctx.createConicGradient ? ctx.createConicGradient(sw - 0.9, ca[0], ca[1]) : null;
    if (g) { g.addColorStop(0, rg(C, 0)); g.addColorStop(0.14, rg(C, 0.18 * em[0])); g.addColorStop(0.145, rg(C, 0)); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(ca[0], ca[1], r * 1.08, 0, 6.2832); ctx.fill(); }
    for (i = 0; i < nodes.length; i++) {
      var n = nodes[i], ang = ((n[2] - sw) % 6.2832 + 6.2832) % 6.2832, lit = Math.max(0, 1 - ang / 1.6);
      if (n[3]) { var col = lit > 0.05 ? A : C; ctx.fillStyle = rg(col, 0.5 + 0.5 * lit); ctx.beginPath(); ctx.arc(n[0], n[1], 3.4, 0, 6.2832); ctx.fill(); if (lit > 0.05) { ctx.strokeStyle = rg(A, lit * 0.8); ctx.beginPath(); ctx.arc(n[0], n[1], 6 + 8 * (1 - lit), 0, 6.2832); ctx.stroke(); } }
      else { ctx.fillStyle = rg(Wt, 0.35 + 0.5 * lit); ctx.fillRect(n[0] - 1.5, n[1] - 1.5, 3, 3); }
    }
    /* B: open path becomes a sleeve */
    var u0 = 0.31, u1 = 0.4, u2 = 0.64, gap = Math.max(10, S * 0.055);
    ctx.strokeStyle = rg(C, 0.18); ctx.setLineDash([3, 5]); ctx.beginPath(); var a0 = P(u0, 0), a1 = P(u1, 0); ctx.moveTo(a0[0], a0[1]); ctx.lineTo(a1[0], a1[1]); ctx.stroke(); ctx.setLineDash([]);
    [-1, 1].forEach(function (sg) { ctx.strokeStyle = rg(C, 0.55 * em[1]); ctx.lineWidth = 1.25; ctx.beginPath(); var p = P(u1 + 0.02, sg * gap * 0.35), q = P(u1 + 0.05, sg * gap), z = P(u2 - 0.03, sg * gap), zc = P(u2, sg * gap), ze = P(u2 + 0.01, sg * gap * 0.35); ctx.moveTo(p[0], p[1]); ctx.quadraticCurveTo(P(u1 + 0.02, sg * gap)[0], P(u1 + 0.02, sg * gap)[1], q[0], q[1]); ctx.lineTo(z[0], z[1]); ctx.quadraticCurveTo(zc[0], zc[1], ze[0], ze[1]); ctx.stroke(); });
    var tb = P((u1 + u2) / 2, 0), tg = hz ? ctx.createLinearGradient(P(u1, 0)[0], 0, P(u2, 0)[0], 0) : ctx.createLinearGradient(0, P(u1, 0)[1], 0, P(u2, 0)[1]);
    tg.addColorStop(0, rg(C, 0)); tg.addColorStop(0.5, rg(C, 0.08 * em[1])); tg.addColorStop(1, rg(C, 0)); ctx.fillStyle = tg;
    var q0 = P(u1 + 0.05, -gap), q1 = P(u2 - 0.03, gap); ctx.fillRect(Math.min(q0[0], q1[0]), Math.min(q0[1], q1[1]), Math.abs(q1[0] - q0[0]), Math.abs(q1[1] - q0[1]));
    ctx.lineWidth = 1;
    for (i = 0; i < 9; i++) {
      var u = (t * 0.07 + i / 9) % 1, uu = u0 + u * (0.78 - u0), p = P(uu, 0), inS = uu > u1 + 0.04 && uu < u2;
      if (uu < u1 + 0.04) { ctx.fillStyle = rg(Wt, 0.6); ctx.fillRect(p[0] - 3, p[1] - 1, 6, 2); }
      else if (inS) { ctx.save(); ctx.translate(p[0], p[1]); ctx.rotate(t * 2 + i); ctx.strokeStyle = rg(C, 0.9 * em[1]); ctx.strokeRect(-3.5, -3.5, 7, 7); ctx.restore(); }
      else { ctx.fillStyle = rg(C, 0.9); ctx.beginPath(); ctx.arc(p[0], p[1], 2.6, 0, 6.2832); ctx.fill(); ctx.strokeStyle = rg(B, 0.7); ctx.beginPath(); ctx.arc(p[0], p[1], 5.5, 0, 6.2832); ctx.stroke(); }
    }
    /* C: quantum random field */
    var cc = P(0.84, 0), cs = Math.min(S * 0.44, L * 0.2), nC = 9, cell = cs / nC, tick = Math.floor(t * 6);
    for (var y = 0; y < nC; y++) for (var x = 0; x < nC; x++) {
      var dx = x - (nC - 1) / 2, dy = y - (nC - 1) / 2; if (dx * dx + dy * dy > (nC / 2) * (nC / 2)) continue;
      var v = hash(x * 31 + y * 17 + tick * 7.3), on = v > 0.5, px = cc[0] - cs / 2 + x * cell, py = cc[1] - cs / 2 + y * cell;
      ctx.fillStyle = on ? rg(C, (0.25 + 0.6 * v) * em[2]) : rg(B, 0.08); ctx.fillRect(px + 1.5, py + 1.5, cell - 3, cell - 3);
    }
    ctx.strokeStyle = rg(C, 0.3 * em[2]); ctx.beginPath(); ctx.arc(cc[0], cc[1], cs * 0.62, 0, 6.2832); ctx.stroke();
    ctx.strokeStyle = rg(C, 0.12); ctx.beginPath(); ctx.arc(cc[0], cc[1], cs * 0.62 + 6 + 3 * Math.sin(t * 2), 0, 6.2832); ctx.stroke();
    /* labels */
    var labs = [[0.17, "Discover", "Chec-Q AI"], [0.52, "Protect", "Q-Sleeve"], [0.84, "Randomise", "QuRNG"]], off = hz ? Math.min(S * 0.36, L * 0.16) + 22 : Math.min(S * 0.36, 120);
    ctx.textAlign = hz ? "center" : "left"; ctx.textBaseline = "middle";
    labs.forEach(function (l, k) { var p = hz ? P(l[0], off) : P(l[0], 0); var lx = hz ? p[0] : W * 0.5 + off * 0.95, ly = hz ? p[1] : p[1];
      if (!hz) { lx = Math.min(W - 92, lx); }
      mono(ctx, 10); ctx.fillStyle = rg(C, em[k] > 0.9 ? 1 : 0.75); ctx.fillText(l[1].toUpperCase(), lx, ly - 9);
      ctx.font = "600 14px " + (window.__qf || "sans-serif"); ctx.fillStyle = rg(Wt, em[k] > 0.9 ? 1 : 0.78); ctx.fillText(l[2], lx, ly + 9); });
  };

  /* Q-Cluster: a running circuit, and ideal versus noise-affected outcomes */
  REG["q-cluster"] = function (ctx, W, H, t, m) {
    var hz = W >= H * 1.05, noise = m.in ? Math.max(0, Math.min(1, (m.x + 1) / 2)) * 0.7 : 0.18 + 0.16 * Math.sin(t * 0.5);
    var cx0, cx1, cy0, cy1, hx0, hx1, hy0, hy1;
    if (hz) { cx0 = W * 0.06; cx1 = W * 0.56; cy0 = H * 0.24; cy1 = H * 0.7; hx0 = W * 0.64; hx1 = W * 0.95; hy0 = H * 0.2; hy1 = H * 0.72; }
    else { cx0 = W * 0.08; cx1 = W * 0.92; cy0 = H * 0.1; cy1 = H * 0.4; hx0 = W * 0.1; hx1 = W * 0.92; hy0 = H * 0.52; hy1 = H * 0.84; }
    var nq = 3, wy = [], cyc = (t * 0.16) % 1, cur = cx0 + (cx1 - cx0) * cyc;
    for (var q = 0; q < nq; q++) wy.push(cy0 + (cy1 - cy0) * q / (nq - 1));
    ctx.lineWidth = 1;
    mono(ctx, 10); ctx.textAlign = "right"; ctx.textBaseline = "middle";
    for (q = 0; q < nq; q++) {
      ctx.strokeStyle = rg(C, 0.28); ctx.beginPath();
      for (var x = cx0; x <= cx1; x += 4) { var j = noise * 2.2 * Math.sin(x * 0.21 + t * 6 + q * 2) * (x < cur ? 1 : 0.2); x === cx0 ? ctx.moveTo(x, wy[q] + j) : ctx.lineTo(x, wy[q] + j); }
      ctx.stroke(); ctx.fillStyle = rg(Wt, 0.55); ctx.fillText("q" + q, cx0 - 8, wy[q]);
    }
    var gates = [[0.12, 0, "H"], [0.34, [0, 1]], [0.56, [1, 2]], [0.78, 2, "RZ"], [0.78, 0, "X"]], gs = Math.max(18, Math.min(30, (cy1 - cy0) * 0.22));
    gates.forEach(function (gd) {
      var gx = cx0 + (cx1 - cx0) * gd[0], past = cur > gx, a = past ? 1 : 0.45, flash = Math.max(0, 1 - Math.abs(cur - gx) / 30);
      if (Array.isArray(gd[1])) { var y0 = wy[gd[1][0]], y1 = wy[gd[1][1]]; ctx.strokeStyle = rg(C, a); ctx.beginPath(); ctx.moveTo(gx, y0); ctx.lineTo(gx, y1); ctx.stroke(); ctx.fillStyle = rg(C, a); ctx.beginPath(); ctx.arc(gx, y0, 4, 0, 6.2832); ctx.fill(); ctx.beginPath(); ctx.arc(gx, y1, 8, 0, 6.2832); ctx.stroke(); ctx.beginPath(); ctx.moveTo(gx - 8, y1); ctx.lineTo(gx + 8, y1); ctx.moveTo(gx, y1 - 8); ctx.lineTo(gx, y1 + 8); ctx.stroke(); }
      else { var gy = wy[gd[1]]; ctx.fillStyle = "rgba(6,12,20,.95)"; ctx.fillRect(gx - gs / 2, gy - gs / 2, gs, gs); ctx.strokeStyle = rg(C, a); ctx.strokeRect(gx - gs / 2, gy - gs / 2, gs, gs); if (flash > 0) { ctx.fillStyle = rg(C, flash * 0.25); ctx.fillRect(gx - gs / 2, gy - gs / 2, gs, gs); } mono(ctx, 10, 600); ctx.textAlign = "center"; ctx.fillStyle = rg(Wt, 0.6 + 0.4 * a); ctx.fillText(gd[2], gx, gy + 0.5); }
    });
    ctx.strokeStyle = rg(C, 0.5); ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(cur, cy0 - 18); ctx.lineTo(cur, cy1 + 18); ctx.stroke(); ctx.setLineDash([]);
    /* histogram: ideal outline vs noisy fill */
    var ideal = [0.5, 0, 0, 0, 0, 0, 0, 0.5], nb = 8, bw = (hx1 - hx0) / nb, hh = hy1 - hy0, labs = ["000", "001", "010", "011", "100", "101", "110", "111"];
    ctx.strokeStyle = rg(C, 0.18); ctx.beginPath(); ctx.moveTo(hx0, hy1); ctx.lineTo(hx1, hy1); ctx.stroke();
    for (var b = 0; b < nb; b++) {
      var jit = 0.04 * noise * Math.sin(t * 3 + b * 1.7), pn = Math.max(0, ideal[b] * (1 - noise) + noise / nb + jit), bx = hx0 + b * bw + bw * 0.18, w = bw * 0.64;
      ctx.fillStyle = rg(C, 0.55); ctx.fillRect(bx, hy1 - pn * hh * 1.6, w, pn * hh * 1.6);
      if (ideal[b] > 0) { ctx.strokeStyle = rg(Wt, 0.7); ctx.setLineDash([3, 3]); ctx.strokeRect(bx - 2, hy1 - ideal[b] * hh * 1.6, w + 4, ideal[b] * hh * 1.6); ctx.setLineDash([]); }
      if (bw > 26) { mono(ctx, 9); ctx.textAlign = "center"; ctx.fillStyle = rg(Wt, 0.5); ctx.fillText("|" + labs[b] + "⟩", bx + w / 2, hy1 + 14); }
    }
    mono(ctx, 10); ctx.textAlign = "left"; ctx.fillStyle = rg(Wt, 0.7); var lw = ctx.measureText("- - IDEAL").width, lw2 = ctx.measureText("■ WITH NOISE").width, lgx = Math.max(4, Math.min(hx0, W - lw - lw2 - 20)), two = lgx + lw + 16 + lw2 <= W - 4;
    ctx.fillText("- - IDEAL", lgx, two ? hy0 - 22 : hy0 - 38);
    ctx.fillStyle = rg(C, 0.9); ctx.fillText("■ WITH NOISE", two ? lgx + lw + 16 : lgx, hy0 - 22);
    var sy = hy1 + (bw > 26 ? 36 : 24); ctx.strokeStyle = rg(C, 0.25); ctx.beginPath(); ctx.moveTo(hx0, sy); ctx.lineTo(hx1, sy); ctx.stroke();
    ctx.fillStyle = rg(C, 1); ctx.beginPath(); ctx.arc(hx0 + (hx1 - hx0) * (noise / 0.7), sy, 4.5, 0, 6.2832); ctx.fill();
    ctx.fillStyle = rg(Wt, 0.5); ctx.textAlign = "left"; ctx.fillText("NOISE", hx0, sy + 16); ctx.textAlign = "right"; ctx.fillText(m.in ? "MOVE TO ADJUST" : "", hx1, sy + 16);
  };


  function lab(ctx, txt, x, y, al, c) { mono(ctx, 10); ctx.fillStyle = rg(c || Wt, al == null ? 0.6 : al); ctx.fillText(txt, x, y); }
  function dot(ctx, x, y, r, c, a) { ctx.fillStyle = rg(c, a); ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill(); }
  function ring(ctx, x, y, r, c, a, lw) { ctx.strokeStyle = rg(c, a); ctx.lineWidth = lw || 1; ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.stroke(); }

  /* Chec-Q AI: a lattice of assets, a discovery wave reveals relationships and a few exposure points */
  REG["chec-q-ai"] = function (ctx, W, H, t, m) {
    var cols = W < 520 ? 9 : 13, rows = Math.max(6, Math.round(cols * H / W)), sx = W / (cols + 1), sy = H / (rows + 1), cx = W / 2 + m.x * W * 0.3, cy = H / 2 + m.y * H * 0.3;
    var R = ((t * 0.18) % 1) * Math.hypot(W, H) * 0.75, pts = [];
    for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) { var k = j * cols + i, x = sx * (i + 1) + (j % 2 ? sx / 2 : 0) + (hash(k) - 0.5) * sx * 0.4, y = sy * (j + 1) + (hash(k + 99) - 0.5) * sy * 0.4; pts.push([x, y, hash(k + 7) > 0.93, Math.hypot(x - cx, y - cy)]); }
    ctx.lineWidth = 1;
    for (var a = 0; a < pts.length; a++) { var p = pts[a], seen = p[3] < R; for (var b = a + 1; b < pts.length; b++) { var q = pts[b], d = Math.hypot(p[0] - q[0], p[1] - q[1]); if (d < sx * 1.25 && hash(a * 13 + b) > 0.55) { ctx.strokeStyle = rg(C, seen && q[3] < R ? 0.28 : 0.05); ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke(); } } }
    ring(ctx, cx, cy, R, C, 0.35 * (1 - R / (Math.hypot(W, H) * 0.75)));
    pts.forEach(function (p) { var seen = p[3] < R, fresh = Math.max(0, 1 - Math.abs(p[3] - R) / 40);
      if (p[2] && seen) { dot(ctx, p[0], p[1], 4, A, 0.95); ring(ctx, p[0], p[1], 9 + 3 * Math.sin(t * 3), A, 0.6); }
      else { ctx.fillStyle = rg(seen ? C : Wt, seen ? 0.55 + fresh * 0.45 : 0.18); ctx.fillRect(p[0] - 2, p[1] - 2, 4, 4); } });
    ctx.textAlign = "left"; ctx.textBaseline = "middle"; dot(ctx, 16, H - 34, 4, A, 1); lab(ctx, "POTENTIAL EXPOSURE", 26, H - 34, 0.75);
  };

  /* Q-Sleeve: open paths gain a protective sleeve as it slides along them */
  REG["q-sleeve"] = function (ctx, W, H, t, m) {
    var lanes = 3, x0 = W * 0.08, x1 = W * 0.92, ext = m.in ? (m.x + 1) / 2 : 0.5 + 0.35 * Math.sin(t * 0.4), sx0 = x0 + (x1 - x0) * 0.18, sx1 = sx0 + (x1 - sx0) * (0.15 + 0.85 * ext);
    for (var l = 0; l < lanes; l++) {
      var y = H * (0.3 + 0.2 * l), g = Math.max(9, H * 0.035);
      ctx.strokeStyle = rg(Wt, 0.14); ctx.setLineDash([3, 6]); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = rg(C, 0.07); ctx.fillRect(sx0, y - g, sx1 - sx0, g * 2);
      ctx.strokeStyle = rg(C, 0.6); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(sx0, y - g); ctx.lineTo(sx1, y - g); ctx.moveTo(sx0, y + g); ctx.lineTo(sx1, y + g); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(sx1, y, g * 0.35, g, 0, 0, 6.2832); ctx.stroke(); ctx.beginPath(); ctx.ellipse(sx0, y, g * 0.35, g, 0, 0, 6.2832); ctx.strokeStyle = rg(C, 0.3); ctx.stroke(); ctx.lineWidth = 1;
      for (var i = 0; i < 7; i++) { var u = (t * (0.06 + l * 0.012) + i / 7 + l * 0.13) % 1, x = x0 + u * (x1 - x0), inS = x > sx0 && x < sx1;
        if (inS) { ctx.save(); ctx.translate(x, y); ctx.rotate(0.785); ctx.strokeStyle = rg(C, 0.95); ctx.strokeRect(-3, -3, 6, 6); ctx.restore(); }
        else { ctx.fillStyle = rg(Wt, 0.55); ctx.fillRect(x - 4, y - 1, 8, 2); } }
      ring(ctx, x0, y, 5, Wt, 0.5); ring(ctx, x1, y, 5, Wt, 0.5);
    }
    ctx.textBaseline = "middle"; ctx.textAlign = "left"; lab(ctx, "OPEN PATH", x0, H * 0.14); ctx.textAlign = "right"; lab(ctx, "QUANTUM-SAFE CHANNEL", x1, H * 0.14, 0.9, C);
  };

  /* QuRNG: qubits in superposition are measured into a stream of random bits */
  REG["qurng"] = function (ctx, W, H, t, m) {
    var n = 6, hz = W > 520, qx = hz ? W * 0.16 : W * 0.5, top = H * 0.14, gap = (H * 0.72) / (n - 1), tick = Math.floor(t * 4), ph = (t * 4) % 1;
    ctx.textBaseline = "middle";
    for (var i = 0; i < n; i++) {
      var y = hz ? top + gap * i : H * 0.12, x = hz ? qx : W * (0.12 + 0.152 * i), r = Math.min(16, gap * 0.32), a = t * (1.3 + hash(i) * 1.2) + i;
      ring(ctx, x, y, r, C, 0.45); ctx.strokeStyle = rg(C, 0.15); ctx.beginPath(); ctx.ellipse(x, y, r, r * 0.3, 0, 0, 6.2832); ctx.stroke();
      ctx.strokeStyle = rg(Wt, 0.85); ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * r * 0.9, y + Math.sin(a) * r * 0.5 - Math.sin(a * 0.7) * r * 0.5); ctx.stroke();
      if (hz) { ctx.strokeStyle = rg(C, 0.18); ctx.beginPath(); ctx.moveTo(x + r + 6, y); ctx.lineTo(W * 0.34, y); ctx.stroke(); ctx.strokeStyle = rg(C, 0.6); ctx.strokeRect(W * 0.34, y - 9, 18, 18); ctx.beginPath(); ctx.arc(W * 0.34 + 9, y + 4, 6, 3.4, 6.0); ctx.moveTo(W * 0.34 + 9, y + 4); ctx.lineTo(W * 0.34 + 14, y - 5); ctx.stroke(); }
    }
    var bx0 = hz ? W * 0.42 : W * 0.08, bx1 = W * 0.94, by0 = hz ? H * 0.12 : H * 0.28, by1 = H * 0.86, cw = 13, ch = 18, cols = Math.floor((bx1 - bx0) / cw), rows = Math.floor((by1 - by0) / ch);
    mono(ctx, 11); ctx.textAlign = "center";
    for (var rr = 0; rr < rows; rr++) for (var c = 0; c < cols; c++) { var age = rr, v = hash(c * 7.1 + (tick - rr) * 3.3) > 0.5 ? "1" : "0", fresh = rr === 0 ? 1 - ph : 0, near = m.in ? Math.max(0, 1 - Math.hypot((bx0 + c * cw) - (m.x + 1) / 2 * W, (by0 + rr * ch) - (m.y + 1) / 2 * H) / 90) : 0;
      ctx.fillStyle = rg(v === "1" ? C : Wt, Math.max(0.06, 0.75 - age / rows * 0.7) + fresh * 0.25 + near * 0.4); ctx.fillText(v, bx0 + c * cw + cw / 2, by0 + rr * ch + (rr === 0 ? -ph * 4 : 0)); }
    ctx.textAlign = "left"; lab(ctx, hz ? "MEASURE" : "", W * 0.3, H * 0.94, 0.5); lab(ctx, "RANDOM BITS", bx0, H * 0.94, 0.75, C);
  };

  /* QubitIQ: a scattered problem space resolves into branching algorithmic paths and a recommendation */
  REG["qubitiq"] = function (ctx, W, H, t, m) {
    var cyc = (t * 0.12) % 1, grow = Math.min(1, cyc * 1.6), cx = W * 0.3, cy = H * 0.5, R = Math.min(W * 0.2, H * 0.32);
    for (var i = 0; i < 70; i++) { var a = hash(i) * 6.2832, d = Math.sqrt(hash(i + 3)) * R, tgt = grow > 0.2 ? 0.25 : 1, x = cx + Math.cos(a + t * 0.05) * d * (tgt + (1 - tgt) * (1 - grow)), y = cy + Math.sin(a + t * 0.05) * d * (tgt + (1 - tgt) * (1 - grow)); ctx.fillStyle = rg(Wt, 0.25 + 0.4 * hash(i + 9)); ctx.fillRect(x - 1.2, y - 1.2, 2.4, 2.4); }
    ring(ctx, cx, cy, R * 1.05, C, 0.15); ring(ctx, cx, cy, 10, C, 0.9); dot(ctx, cx, cy, 4, C, 1);
    var ends = [0.2, 0.36, 0.5, 0.64, 0.8], best = 2 + Math.round(m.in ? m.y * 1.5 : 0), ex = W * 0.86;
    ends.forEach(function (e, k) { var ey = H * e, mx = W * 0.58, my = cy + (ey - cy) * 0.55, on = k === best, prog = Math.max(0, Math.min(1, grow * 1.4 - k * 0.08));
      ctx.strokeStyle = rg(on ? C : B, on ? 0.8 : 0.22); ctx.lineWidth = on ? 1.6 : 1; ctx.beginPath(); ctx.moveTo(cx + 12, cy);
      var steps = 24; for (var s = 1; s <= steps * prog; s++) { var u = s / steps, x = (1 - u) * (1 - u) * (cx + 12) + 2 * (1 - u) * u * mx + u * u * ex, y = (1 - u) * (1 - u) * cy + 2 * (1 - u) * u * my + u * u * ey; ctx.lineTo(x, y); } ctx.stroke(); ctx.lineWidth = 1;
      if (prog >= 1) { ctx.strokeStyle = rg(on ? C : Wt, on ? 0.95 : 0.3); ctx.strokeRect(ex - 2, ey - 9, 40, 18); for (var g = 0; g < 3; g++) { ctx.fillStyle = rg(on ? C : Wt, on ? 0.8 : 0.3); ctx.fillRect(ex + 4 + g * 12, ey - 4, 7, 8); } } });
    ctx.textBaseline = "middle"; ctx.textAlign = "left"; lab(ctx, "PROBLEM SPACE", cx - R, H * 0.1); lab(ctx, (W < 440 ? "BEST PATH" : "RECOMMENDED PATH"), ex - 70, H * 0.1, 0.9, C);
  };

  /* EPS-QKD: a central source emits photon pairs to two parties who build matching key bits */
  REG["eps-qkd"] = function (ctx, W, H, t, m) {
    var cx = W / 2, cy = H * 0.42, xa = W * 0.1, xb = W * 0.9, per = 1.4, n = 4, keyLen = 16, done = Math.floor(t * 2.2) % (keyLen + 6);
    ring(ctx, cx, cy, 22, C, 0.8, 1.4); ring(ctx, cx, cy, 32 + 4 * Math.sin(t * 3), C, 0.2); dot(ctx, cx, cy, 5, C, 1);
    ctx.strokeStyle = rg(C, 0.15); ctx.beginPath(); ctx.moveTo(xa, cy); ctx.lineTo(xb, cy); ctx.stroke();
    for (var i = 0; i < n; i++) { var u = ((t / per) + i / n) % 1, d = u * (cx - xa - 30), ang = hash(Math.floor(t / per + i / n) * 5 + i) * 3.1416;
      [-1, 1].forEach(function (s) { var x = cx + s * (30 + d), al = 1 - u * 0.4; dot(ctx, x, cy, 3.2, C, al); ctx.strokeStyle = rg(Wt, al * 0.8); ctx.beginPath(); ctx.moveTo(x - Math.cos(ang) * 8, cy - Math.sin(ang) * 8); ctx.lineTo(x + Math.cos(ang) * 8, cy + Math.sin(ang) * 8); ctx.stroke(); });
      ctx.strokeStyle = rg(C, 0.12 * (1 - u)); ctx.setLineDash([2, 4]); ctx.beginPath(); ctx.moveTo(cx - 30 - d, cy); ctx.quadraticCurveTo(cx, cy - 60 - d * 0.2, cx + 30 + d, cy); ctx.stroke(); ctx.setLineDash([]); }
    [[xa, "ALICE"], [xb, "BOB"]].forEach(function (p, k) { ctx.strokeStyle = rg(Wt, 0.7); ctx.strokeRect(p[0] - 12, cy - 16, 24, 32); ctx.textAlign = "center"; ctx.textBaseline = "middle"; lab(ctx, p[1], p[0], cy - 32, 0.75);
      var kx = k ? xb - 8 * 8 : xa - 12, cw = 9; mono(ctx, 11); for (var b = 0; b < Math.min(done, keyLen); b++) { ctx.fillStyle = rg(C, 0.85); ctx.textAlign = "left"; ctx.fillText(hash(b * 3.7) > 0.5 ? "1" : "0", (k ? xb + 12 - (Math.min(keyLen, 8)) * cw : xa - 12) + (b % 8) * cw, cy + 44 + Math.floor(b / 8) * 16); } });
    ctx.textAlign = "center"; lab(ctx, "ENTANGLED PAIR SOURCE", cx, cy + 50, 0.6); lab(ctx, "SHARED KEY", W / 2, H * 0.86, done >= keyLen ? 0.95 : 0.35, C);
  };

  /* Q-Memory: a light pulse enters a vapour cell, is held as atomic excitation, then released */
  REG["q-memory"] = function (ctx, W, H, t, m) {
    var cyc = (t * 0.22) % 1, cy = H * 0.48, c0 = W * 0.36, c1 = W * 0.64, ch = Math.min(H * 0.32, 120), stored = cyc > 0.32 && cyc < 0.62, s = cyc < 0.32 ? cyc / 0.32 : cyc > 0.62 ? (cyc - 0.62) / 0.38 : 0;
    ctx.strokeStyle = rg(C, 0.55); ctx.lineWidth = 1.2; var rr = ch / 2; ctx.beginPath(); ctx.moveTo(c0 + rr, cy - rr); ctx.lineTo(c1 - rr, cy - rr); ctx.arc(c1 - rr, cy, rr, -1.5708, 1.5708); ctx.lineTo(c0 + rr, cy + rr); ctx.arc(c0 + rr, cy, rr, 1.5708, 4.7124); ctx.stroke(); ctx.lineWidth = 1;
    for (var i = 0; i < 46; i++) { var ax = c0 + rr * 0.5 + hash(i) * (c1 - c0 - rr), ay = cy + (hash(i + 50) - 0.5) * ch * 0.8, glow = stored ? 0.4 + 0.5 * Math.sin(t * 5 + i) * 0.5 + 0.3 : cyc < 0.32 ? Math.max(0, (cyc - 0.2) * 4) * 0.5 : 0.08; dot(ctx, ax + Math.sin(t + i) * 2, ay, 2, stored ? C : Wt, Math.max(0.12, glow)); }
    function pulse(xc, amp, width) { ctx.strokeStyle = rg(C, 0.9); ctx.lineWidth = 1.4; ctx.beginPath(); for (var x = xc - width; x <= xc + width; x += 2) { var e = Math.exp(-Math.pow((x - xc) / (width * 0.45), 2)), y = cy + Math.sin((x - xc) * 0.35 - t * 10) * amp * e; x === xc - width ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); ctx.lineWidth = 1; }
    ctx.strokeStyle = rg(C, 0.12); ctx.beginPath(); ctx.moveTo(W * 0.04, cy); ctx.lineTo(W * 0.96, cy); ctx.stroke();
    if (cyc < 0.32) { var xin = W * 0.06 + s * (c0 + (c1 - c0) * 0.4 - W * 0.06), sq = xin > c0 ? 0.5 : 1; pulse(xin, ch * 0.28 * (xin > c0 ? 1 - (xin - c0) / (c1 - c0) : 1), 60 * sq); }
    if (cyc > 0.62) pulse(c0 + (c1 - c0) * 0.6 + s * (W * 0.96 - c1), ch * 0.26, 60);
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; lab(ctx, "LIGHT IN", W * 0.12, cy - ch * 0.7, cyc < 0.32 ? 0.9 : 0.4); lab(ctx, "STORED", (c0 + c1) / 2, cy + ch * 0.75, stored ? 0.95 : 0.35, C); lab(ctx, "RELEASED", W * 0.86, cy - ch * 0.7, cyc > 0.62 ? 0.9 : 0.4);
  };

  /* QNTSim: an interactive network; entanglement travels between nodes and the cursor gently moves them */
  REG["qntsim"] = function (ctx, W, H, t, m) {
    var N = W < 520 ? 9 : 12, P = [], mx = (m.x + 1) / 2 * W, my = (m.y + 1) / 2 * H;
    for (var i = 0; i < N; i++) { var x = W * (0.1 + 0.8 * hash(i * 3 + 1)), y = H * (0.14 + 0.72 * hash(i * 5 + 2)); x += Math.sin(t * 0.4 + i) * 6; y += Math.cos(t * 0.35 + i) * 6; if (m.in) { var d = Math.hypot(x - mx, y - my); if (d < 140 && d > 0) { x += (x - mx) / d * (140 - d) * 0.18; y += (y - my) / d * (140 - d) * 0.18; } } P.push([x, y]); }
    var E = []; for (i = 0; i < N; i++) { var best = [], k; for (k = 0; k < N; k++) if (k !== i) best.push([Math.hypot(P[i][0] - P[k][0], P[i][1] - P[k][1]), k]); best.sort(function (a, b) { return a[0] - b[0]; }); for (k = 0; k < 2; k++) if (i < best[k][1]) E.push([i, best[k][1]]); }
    var hov = -1; if (m.in) P.forEach(function (p, i) { if (Math.hypot(p[0] - mx, p[1] - my) < 30) hov = i; });
    E.forEach(function (e, j) { var a = P[e[0]], b = P[e[1]], lit = hov === e[0] || hov === e[1]; ctx.strokeStyle = rg(C, lit ? 0.75 : 0.2); ctx.lineWidth = lit ? 1.5 : 1; ctx.beginPath(); ctx.moveTo(a[0], a[1]); ctx.lineTo(b[0], b[1]); ctx.stroke(); ctx.lineWidth = 1;
      var u = (t * 0.5 + hash(j) ) % 1; if (hash(j + 40) > 0.4) { dot(ctx, a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, 2.4, C, 0.9); dot(ctx, b[0] + (a[0] - b[0]) * u, b[1] + (a[1] - b[1]) * u, 2.4, B, 0.9); } });
    P.forEach(function (p, i) { var on = i === hov; ctx.fillStyle = "rgba(4,9,16,.95)"; ctx.beginPath(); ctx.arc(p[0], p[1], on ? 11 : 8, 0, 6.2832); ctx.fill(); ring(ctx, p[0], p[1], on ? 11 : 8, C, on ? 1 : 0.7, 1.2); dot(ctx, p[0], p[1], 2.6, i % 4 === 0 ? A : C, 1); });
    ctx.textAlign = "left"; ctx.textBaseline = "middle"; dot(ctx, 16, H - 30, 3, A, 1); lab(ctx, "MEMORY NODE", 26, H - 30, 0.65); dot(ctx, 130, H - 30, 3, C, 1); lab(ctx, "ENTANGLEMENT", 140, H - 30, 0.65);
  };

  /* Quantum Repeater: short segments entangle, then swap into one long link */
  REG["quantum-repeater"] = function (ctx, W, H, t, m) {
    var n = 5, x0 = W * 0.07, x1 = W * 0.93, y = H * 0.56, cyc = (t * 0.14) % 1, xs = [];
    for (var i = 0; i < n; i++) xs.push(x0 + (x1 - x0) * i / (n - 1));
    ctx.strokeStyle = rg(Wt, 0.12); ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    function arc(a, b, al, lift) { ctx.strokeStyle = rg(C, al); ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(xs[a], y); ctx.quadraticCurveTo((xs[a] + xs[b]) / 2, y - lift, xs[b], y); ctx.stroke(); ctx.lineWidth = 1; }
    var segH = H * 0.12;
    for (i = 0; i < n - 1; i++) { var on = Math.max(0, Math.min(1, (cyc - i * 0.06) * 6)); if (cyc < 0.55) arc(i, i + 1, on * 0.8, segH); }
    if (cyc >= 0.4 && cyc < 0.75) { var f = Math.min(1, (cyc - 0.4) * 6); arc(0, 2, f * 0.85, segH * 2); arc(2, 4, f * 0.85, segH * 2); }
    if (cyc >= 0.62) { var g = Math.min(1, (cyc - 0.62) * 5); arc(0, 4, g * 0.95, segH * 3.6); }
    xs.forEach(function (x, i) { var end = i === 0 || i === n - 1; ctx.fillStyle = "rgba(4,9,16,.95)"; ctx.fillRect(x - 10, y - 10, 20, 20); ctx.strokeStyle = rg(end ? Wt : C, 0.85); ctx.strokeRect(x - 10, y - 10, 20, 20); if (!end) dot(ctx, x, y, 3, C, 0.6 + 0.4 * Math.sin(t * 3 + i)); });
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; lab(ctx, "NODE A", xs[0], y + 28, 0.7); lab(ctx, "NODE B", xs[n - 1], y + 28, 0.7); if (W > 520) lab(ctx, "REPEATER", xs[2], y + 28, 0.55, C);
    lab(ctx, cyc < 0.4 ? "ENTANGLE SEGMENTS" : cyc < 0.62 ? "SWAP" : "END-TO-END LINK", W / 2, H * 0.12, 0.85, C);
  };

  /* Q-Biosensor: a weak magnetic source, field lines reaching an atomic sensing cell, and the optical readout */
  REG["q-biosensor"] = function (ctx, W, H, t, m) {
    var sx = W * 0.24, sy = H * 0.42, cx = W * 0.68, cy = H * 0.42, beat = Math.pow(Math.max(0, Math.sin(t * 2.4)), 12), amp = 0.4 + 0.6 * beat;
    for (var k = 1; k <= 5; k++) { var r = k * Math.min(W, H) * 0.06; ctx.strokeStyle = rg(B, (0.28 - k * 0.04) * amp + 0.04); ctx.beginPath(); ctx.ellipse(sx, sy - r * 0.6, r * 0.7, r * 0.6, 0, 0, 6.2832); ctx.stroke(); ctx.beginPath(); ctx.ellipse(sx, sy + r * 0.6, r * 0.7, r * 0.6, 0, 0, 6.2832); ctx.stroke(); }
    dot(ctx, sx, sy, 5, B, 0.8); ring(ctx, sx, sy, 12 + beat * 8, B, 0.4 * beat + 0.1);
    var cr = Math.min(W, H) * 0.13; ring(ctx, cx, cy, cr, C, 0.7, 1.2);
    for (var i = 0; i < 14; i++) { var a = hash(i) * 6.2832, d = Math.sqrt(hash(i + 20)) * cr * 0.8, ax = cx + Math.cos(a) * d, ay = cy + Math.sin(a) * d, pr = t * (2 + beat * 3) + i; dot(ctx, ax, ay, 1.8, C, 0.8); ctx.strokeStyle = rg(C, 0.5); ctx.beginPath(); ctx.ellipse(ax, ay, 6, 2.2, pr, 0, 6.2832); ctx.stroke(); }
    ctx.strokeStyle = rg(A, 0.5); ctx.beginPath(); ctx.moveTo(cx - cr * 1.8, cy); ctx.lineTo(cx + cr * 1.8, cy); ctx.stroke();
    var ty = H * 0.82, tx0 = W * 0.1, tx1 = W * 0.9; ctx.strokeStyle = rg(C, 0.15); ctx.beginPath(); ctx.moveTo(tx0, ty); ctx.lineTo(tx1, ty); ctx.stroke();
    ctx.strokeStyle = rg(C, 0.85); ctx.lineWidth = 1.3; ctx.beginPath(); for (var x = tx0; x <= tx1; x += 2) { var u = (x - tx0) / (tx1 - tx0), ph = (u * 3 - t * 0.38) % 1, v = Math.exp(-Math.pow(((ph + 1) % 1 - 0.5) * 18, 2)); var yy = ty - v * H * 0.08 - Math.sin(u * 60 + t * 4) * 1.2; x === tx0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy); } ctx.stroke(); ctx.lineWidth = 1;
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; lab(ctx, W < 480 ? "WEAK FIELD" : "WEAK MAGNETIC SIGNAL", sx, H * 0.1, 0.7); lab(ctx, "ATOMIC SENSOR", cx, H * 0.1, 0.85, C); ctx.textAlign = "left"; lab(ctx, "OPTICAL READOUT", tx0, ty + 18, 0.6);
  };

  /* Quantum Gravimeter: atoms split, fall on two paths and recombine into interference fringes */
  REG["quantum-gravimeter"] = function (ctx, W, H, t, m) {
    var cx = W * 0.5, y0 = H * 0.12, y1 = H * 0.72, sp = Math.min(W * 0.22, 140), cyc = (t * 0.2) % 1, pulses = [y0, (y0 + y1) / 2, y1];
    pulses.forEach(function (py, k) { var fl = Math.max(0, 1 - Math.abs(cyc - k * 0.45) * 8); ctx.fillStyle = rg(C, 0.05 + fl * 0.25); ctx.fillRect(W * 0.12, py - 3, W * 0.76, 6); ctx.textAlign = "left"; ctx.textBaseline = "middle"; if (W > 520) lab(ctx, ["SPLIT", "MIRROR", "RECOMBINE"][k], W * 0.12, py - 14, 0.55, C); });
    function pathPt(u, side) { var y = y0 + (y1 - y0) * u * u * 0.4 + (y1 - y0) * u * 0.6, off = (u < 0.5 ? u * 2 : (1 - u) * 2) * sp * side; return [cx + off, y]; }
    [-1, 1].forEach(function (s) { ctx.strokeStyle = rg(C, 0.45); ctx.beginPath(); for (var u = 0; u <= 1.001; u += 0.02) { var p = pathPt(u, s); u === 0 ? ctx.moveTo(p[0], p[1]) : ctx.lineTo(p[0], p[1]); } ctx.stroke(); });
    var u = Math.min(1, cyc / 0.9); [-1, 1].forEach(function (s) { var p = pathPt(u, s); for (var i = 0; i < 10; i++) dot(ctx, p[0] + (hash(i + s * 9) - 0.5) * 10, p[1] + (hash(i + 30) - 0.5) * 10, 1.6, C, 0.85); });
    var fy = H * 0.86, ph = m.in ? m.x * 3 : Math.sin(t * 0.6) * 1.5; for (var x = W * 0.2; x < W * 0.8; x += 3) { var v = 0.5 + 0.5 * Math.cos((x - cx) * 0.08 + ph); ctx.fillStyle = rg(C, v * (cyc > 0.85 ? 0.9 : 0.35)); ctx.fillRect(x, fy - 10, 2, 20); }
    ctx.strokeStyle = rg(Wt, 0.5); ctx.beginPath(); ctx.moveTo(W * 0.92, H * 0.3); ctx.lineTo(W * 0.92, H * 0.55); ctx.lineTo(W * 0.92 - 5, H * 0.5); ctx.moveTo(W * 0.92, H * 0.55); ctx.lineTo(W * 0.92 + 5, H * 0.5); ctx.stroke(); ctx.textAlign = "center"; lab(ctx, "g", W * 0.92, H * 0.26, 0.7); lab(ctx, "INTERFERENCE", cx, fy + 24, 0.6);
  };

  /* Rydberg Sensor: an RF field meets an atomic sensing region; its spectral line splits in response */
  REG["rydberg-sensor"] = function (ctx, W, H, t, m) {
    var hz = W > 560, ax = hz ? W * 0.44 : W * 0.5, ay = hz ? H * 0.5 : H * 0.36, ar = Math.min(W, H) * (hz ? 0.17 : 0.14), field = m.in ? 0.25 + 0.75 * (1 - (m.y + 1) / 2) : 0.55 + 0.35 * Math.sin(t * 0.5);
    for (var k = 0; k < 7; k++) { var rr = ((t * 50 + k * 40) % 280); ctx.strokeStyle = rg(B, 0.35 * (1 - rr / 280) * field); ctx.beginPath(); ctx.arc(ax - ar - 300, ay, rr + 300 - 280 + ar, -0.5, 0.5); ctx.stroke(); }
    ctx.strokeStyle = rg(A, 0.6); ctx.beginPath(); ctx.moveTo(ax - ar * 1.6, ay - 4); ctx.lineTo(ax + ar * 1.6, ay - 4); ctx.stroke(); ctx.strokeStyle = rg(C, 0.6); ctx.beginPath(); ctx.moveTo(ax + ar * 1.6, ay + 4); ctx.lineTo(ax - ar * 1.6, ay + 4); ctx.stroke();
    ring(ctx, ax, ay, ar, C, 0.6, 1.2);
    for (var i = 0; i < 6; i++) { var a = hash(i) * 6.2832, d = hash(i + 4) * ar * 0.55, px = ax + Math.cos(a) * d, py = ay + Math.sin(a) * d, orr = 6 + field * 10 * hash(i + 8); dot(ctx, px, py, 2, Wt, 0.9); ctx.strokeStyle = rg(C, 0.35); ctx.beginPath(); ctx.ellipse(px, py, orr, orr * 0.55, t * 0.8 + i, 0, 6.2832); ctx.stroke(); }
    var gx0 = hz ? W * 0.7 : W * 0.12, gx1 = hz ? W * 0.95 : W * 0.88, gy = hz ? H * 0.66 : H * 0.84, gh = hz ? H * 0.32 : H * 0.18, split = field * (gx1 - gx0) * 0.18;
    ctx.strokeStyle = rg(C, 0.15); ctx.beginPath(); ctx.moveTo(gx0, gy); ctx.lineTo(gx1, gy); ctx.stroke();
    ctx.strokeStyle = rg(C, 0.9); ctx.lineWidth = 1.3; ctx.beginPath(); var mid = (gx0 + gx1) / 2; for (var x = gx0; x <= gx1; x += 2) { var w = (gx1 - gx0) * 0.05, v = Math.exp(-Math.pow((x - mid + split) / w, 2)) + Math.exp(-Math.pow((x - mid - split) / w, 2)); var yy = gy - v * gh * 0.8; x === gx0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy); } ctx.stroke(); ctx.lineWidth = 1;
    ctx.textAlign = "center"; ctx.textBaseline = "middle"; lab(ctx, "RF FIELD", hz ? W * 0.1 : W * 0.15, H * 0.1, 0.7, B); lab(ctx, "RYDBERG ATOMS", ax, ay + ar + 20, 0.85, C); lab(ctx, "OPTICAL RESPONSE", mid, gy + 18, 0.6);
  };

  window.QAIG_HERO = function (cv, key, o) {
    var draw = REG[key]; if (!draw) return { destroy: function () {} };
    var ctx = cv.getContext("2d"), W = 1, H = 1, dpr = 1, t = 0, last = 0, raf = 0, vis = true, rm = !!(o && o.reduced);
    var m = { x: 0, y: 0, tx: 0, ty: 0, in: false };
    try { window.__qf = getComputedStyle(cv).fontFamily; } catch (e) {}
    if (!ctx.__qclamp) { ctx.__qclamp = true; var ft = ctx.fillText.bind(ctx); ctx.fillText = function (s, x, y, mw) { var w = ctx.measureText(s).width, al = ctx.textAlign, l = al === "center" ? x - w / 2 : al === "right" || al === "end" ? x - w : x, d = 0; if (l < 6) d = 6 - l; else if (l + w > W - 6) d = W - 6 - l - w; return mw === undefined ? ft(s, x + d, y) : ft(s, x + d, y, mw); }; }
    function frame() { CW = W; ctx.clearRect(0, 0, W, H); draw(ctx, W, H, t, m); }
    function size() { var r = cv.parentNode.getBoundingClientRect(); dpr = Math.min(2, window.devicePixelRatio || 1); W = Math.max(1, r.width); H = Math.max(1, r.height); cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); frame(); }
    function step(now) { raf = 0; if (!vis || rm) return; var dt = Math.min(0.05, (now - (last || now)) / 1000); last = now; t += dt; m.x += (m.tx - m.x) * 0.08; m.y += (m.ty - m.y) * 0.08; frame(); raf = requestAnimationFrame(step); }
    function kick() { if (rm) { m.x = m.tx; m.y = m.ty; frame(); } else if (!raf && vis) { last = 0; raf = requestAnimationFrame(step); } }
    function mv(e) { var r = cv.getBoundingClientRect(); m.tx = ((e.clientX - r.left) / r.width - 0.5) * 2; m.ty = ((e.clientY - r.top) / r.height - 0.5) * 2; m.in = true; kick(); }
    function lv() { m.tx = 0; m.ty = 0; m.in = false; kick(); }
    cv.addEventListener("pointermove", mv); cv.addEventListener("pointerleave", lv);
    var ro = new ResizeObserver(size); ro.observe(cv.parentNode);
    var io = new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }); io.observe(cv);
    if (rm) t = 2.2;
    size(); kick();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(frame);
    return { destroy: function () { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); cv.removeEventListener("pointermove", mv); cv.removeEventListener("pointerleave", lv); } };
  };
})();
