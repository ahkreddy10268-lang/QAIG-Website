/* QAIG animated motifs for application and capability cards. QAIG_MOTIF(React, text, reduced) picks a motif from the card text.
   SVG + SMIL, 160×100 viewBox, cyan line language. Concept illustrations only. */
(function () {
  if (window.QAIG_MOTIF) return;
  var C = "#00d4ff", B = "#4084ff", A = "#ffb84d", W = "rgba(232,240,248,.55)";
  var RULES = [
    ["heart", /cardi|heart|clinical|emergency|screening|electrophys/i],
    ["contour", /gravit|geophys|survey|explor|subsurface|navigation|inertial/i],
    ["wave", /\brf\b|radio|microwave|antenna|spectrum|emc|electromagnetic|field reading|reception/i],
    ["chain", /repeater|long-distance|long distance|segment|long-haul|beyond single/i],
    ["store", /memory|store|storage|retriev|synchronis|hold/i],
    ["random", /random|entropy|monte carlo|gaming|lotter/i],
    ["key", /\bkey|token|otp|one-time|identity|password/i],
    ["scan", /scan|inventory|code|certificate|url|discover|exposure|audit|vulnerab|assessment|bill of materials/i],
    ["roadmap", /migrat|roadmap|plan|prioriti|monitor|readiness|timeline|assurance|compliance|regulat/i],
    ["shield", /protect|secur|defen|government|quantum-safe|encrypt|confidential|eavesdrop|trust/i],
    ["circuit", /circuit|algorithm|simulat|qubit|learning|tutorial|classroom|noise|encoding|optimis/i],
    ["chart", /financ|risk|benchmark|pricing|transaction|portfolio|statistic|result/i],
    ["network", /network|node|link|site|topolog|internet|telecom|fibre|traffic|cloud/i],
    ["atom", /atom|sens|magnet|rubidium|laser|optical|photon|entangle/i],
    ["layers", /.*/]
  ];
  function pick(t) { for (var i = 0; i < RULES.length; i++) if (RULES[i][1].test(t)) return RULES[i][0]; return "layers"; }
  window.QAIG_MOTIF_KEY = pick;
  /* One motif per card within a list: take the first matching rule not already used, then any unused motif. */
  window.QAIG_MOTIF_UNIQUE = function (texts) {
    var used = {}, all = ["network", "shield", "chart", "atom", "layers", "circuit", "roadmap", "wave", "store", "scan", "key", "random", "chain", "contour", "heart"];
    return texts.map(function (t) { var k = null;
      for (var i = 0; i < RULES.length && !k; i++) if (RULES[i][1].test(t || "") && !used[RULES[i][0]] && RULES[i][0] !== "layers") k = RULES[i][0];
      if (!k) for (var j = 0; j < all.length && !k; j++) if (!used[all[j]]) k = all[j];
      used[k] = 1; return k; });
  };
  window.QAIG_MOTIF = function (R, text, rm, forced) {
    var e = R.createElement, k = forced || pick(text || "");
    function an(attr, values, dur, extra) { return rm ? null : e("animate", Object.assign({ attributeName: attr, values: values, dur: dur, repeatCount: "indefinite" }, extra || {})); }
    function mv(path, dur, begin) { return rm ? null : e("animateMotion", { path: path, dur: dur, begin: begin || "0s", repeatCount: "indefinite" }); }
    function rot(from, to, dur) { return rm ? null : e("animateTransform", { attributeName: "transform", type: "rotate", from: from, to: to, dur: dur, repeatCount: "indefinite" }); }
    var L = { fill: "none", stroke: C, strokeWidth: 1.2, vectorEffect: "non-scaling-stroke" }, Lf = Object.assign({}, L, { stroke: "rgba(0,212,255,.3)" });
    var kids = [];
    switch (k) {
      case "heart":
        kids.push(e("path", Object.assign({}, Lf, { d: "M0 60 H160" })));
        kids.push(e("path", Object.assign({}, L, { d: "M0 60 H40 L48 60 L54 40 L60 78 L66 22 L72 66 L78 60 H110 L116 52 L122 60 H160", strokeDasharray: "320", strokeDashoffset: "320" }), an("stroke-dashoffset", "320;0;0", "2.4s", { keyTimes: "0;.7;1" })));
        kids.push(e("circle", { cx: 66, cy: 22, r: 3, fill: C }, an("r", "2;5;2", "1.2s")));
        break;
      case "contour":
        for (var i = 0; i < 5; i++) kids.push(e("ellipse", Object.assign({}, i % 2 ? Lf : L, { cx: 80, cy: 52, rx: 14 + i * 13, ry: 8 + i * 8 }), an("rx", (14 + i * 13) + ";" + (17 + i * 13) + ";" + (14 + i * 13), (3 + i * .4) + "s")));
        kids.push(e("path", Object.assign({}, L, { d: "M140 16 V44 M134 38 L140 44 L146 38", stroke: W })));
        break;
      case "wave":
        kids.push(e("path", Object.assign({}, L, { d: "M0 50 Q10 30 20 50 T40 50 T60 50 T80 50 T100 50 T120 50 T140 50 T160 50" }), rm ? null : e("animateTransform", { attributeName: "transform", type: "translate", values: "0 0;-40 0", dur: "1.6s", repeatCount: "indefinite" })));
        kids.push(e("circle", Object.assign({}, Lf, { cx: 128, cy: 50, r: 16 })));
        kids.push(e("circle", { cx: 128, cy: 50, r: 4, fill: C }, an("opacity", ".4;1;.4", "1.6s")));
        break;
      case "chain":
        [20, 60, 100, 140].forEach(function (x, j) { kids.push(e("rect", Object.assign({}, L, { x: x - 6, y: 54, width: 12, height: 12, stroke: j === 0 || j === 3 ? W : C }))); });
        [[20, 60], [60, 100], [100, 140]].forEach(function (s, j) { kids.push(e("path", Object.assign({}, L, { d: "M" + s[0] + " 54 Q" + (s[0] + s[1]) / 2 + " 30 " + s[1] + " 54", opacity: 0 }), an("opacity", "0;1;1;0", "3s", { begin: (j * .3) + "s", keyTimes: "0;.2;.8;1" }))); });
        kids.push(e("path", Object.assign({}, L, { d: "M20 54 Q80 0 140 54", stroke: A, opacity: 0 }), an("opacity", "0;0;1;0", "3s", { keyTimes: "0;.55;.8;1" })));
        break;
      case "store":
        kids.push(e("rect", Object.assign({}, L, { x: 58, y: 30, width: 44, height: 40, rx: 8 })));
        for (var a = 0; a < 6; a++) kids.push(e("circle", { cx: 66 + (a % 3) * 14, cy: 42 + Math.floor(a / 3) * 16, r: 2, fill: C }, an("opacity", ".2;1;1;.2", "3s", { keyTimes: "0;.35;.65;1" })));
        kids.push(e("circle", { r: 3.5, fill: C }, mv("M0 50 H58 M102 50 H160", "3s"), an("opacity", "1;1;0;0;1;1", "3s", { keyTimes: "0;.3;.33;.66;.7;1" })));
        break;
      case "random":
        for (var y = 0; y < 3; y++) for (var x = 0; x < 6; x++) { var on = ((x * 7 + y * 3) % 5) > 1; kids.push(e("text", { x: 22 + x * 22, y: 34 + y * 22, fill: on ? C : W, fontFamily: "IBM Plex Mono, monospace", fontSize: 13, textAnchor: "middle" }, (x + y) % 2 ? "1" : "0", an("opacity", on ? "1;.2;1" : ".3;1;.3", (0.8 + ((x * 3 + y) % 5) * .3) + "s"))); }
        break;
      case "key":
        kids.push(e("circle", Object.assign({}, L, { cx: 40, cy: 50, r: 14 })));
        kids.push(e("path", Object.assign({}, L, { d: "M54 50 H120 M108 50 V62 M120 50 V60" })));
        for (var b = 0; b < 4; b++) kids.push(e("rect", { x: 60 + b * 14, y: 36, width: 8, height: 6, fill: C }, an("opacity", "0;1;0", "1.8s", { begin: (b * .25) + "s" })));
        kids.push(e("circle", { cx: 40, cy: 50, r: 4, fill: C }, an("r", "3;5;3", "1.8s")));
        break;
      case "scan":
        for (var r2 = 0; r2 < 3; r2++) for (var c2 = 0; c2 < 5; c2++) { var hot = (r2 === 1 && c2 === 3) || (r2 === 2 && c2 === 1); kids.push(e("rect", Object.assign({}, hot ? Object.assign({}, L, { stroke: A }) : Lf, { x: 22 + c2 * 24, y: 20 + r2 * 22, width: 16, height: 14, rx: 2 }), hot ? an("stroke-opacity", ".3;1;.3", "2.4s") : null)); }
        kids.push(e("rect", { x: 14, y: 14, width: 2, height: 72, fill: C }, rm ? null : e("animate", { attributeName: "x", values: "14;146;14", dur: "3.2s", repeatCount: "indefinite" })));
        break;
      case "roadmap":
        kids.push(e("path", Object.assign({}, Lf, { d: "M14 70 C50 70 50 30 86 30 S122 60 146 30" })));
        kids.push(e("path", Object.assign({}, L, { d: "M14 70 C50 70 50 30 86 30 S122 60 146 30", strokeDasharray: "170", strokeDashoffset: "170" }), an("stroke-dashoffset", "170;0;0", "3.2s", { keyTimes: "0;.8;1" })));
        [[14, 70], [86, 30], [146, 30]].forEach(function (p, j) { kids.push(e("circle", { cx: p[0], cy: p[1], r: 4, fill: j === 2 ? A : C })); });
        break;
      case "shield":
        kids.push(e("path", Object.assign({}, L, { d: "M80 16 L106 26 V50 C106 66 94 78 80 84 C66 78 54 66 54 50 V26 Z" })));
        kids.push(e("path", Object.assign({}, L, { d: "M70 50 L78 58 L92 42", strokeDasharray: "36", strokeDashoffset: "36" }), an("stroke-dashoffset", "36;0;0;36", "2.6s", { keyTimes: "0;.3;.85;1" })));
        kids.push(e("path", Object.assign({}, Lf, { d: "M80 10 L112 22 V50 C112 70 98 84 80 92 C62 84 48 70 48 50 V22 Z" }), an("stroke-opacity", ".1;.6;.1", "2.6s")));
        break;
      case "circuit":
        [32, 50, 68].forEach(function (y2) { kids.push(e("path", Object.assign({}, Lf, { d: "M10 " + y2 + " H150" }))); });
        kids.push(e("rect", Object.assign({}, L, { x: 36, y: 24, width: 16, height: 16, fill: "#05080e" })));
        kids.push(e("path", Object.assign({}, L, { d: "M84 32 V68" }))); kids.push(e("circle", { cx: 84, cy: 32, r: 3, fill: C })); kids.push(e("circle", Object.assign({}, L, { cx: 84, cy: 68, r: 6 })));
        kids.push(e("rect", Object.assign({}, L, { x: 112, y: 42, width: 16, height: 16, fill: "#05080e" })));
        kids.push(e("rect", { x: 10, y: 20, width: 2, height: 60, fill: C }, rm ? null : e("animate", { attributeName: "x", values: "10;150", dur: "2.8s", repeatCount: "indefinite" })));
        break;
      case "chart":
        [0, 1, 2, 3, 4, 5].forEach(function (j) { var h = [22, 40, 30, 56, 44, 64][j]; kids.push(e("rect", { x: 20 + j * 22, y: 86 - h, width: 12, height: h, fill: j === 5 ? C : "rgba(0,212,255,.35)" }, an("height", h + ";" + (h * .7) + ";" + h, (2 + j * .3) + "s"), an("y", (86 - h) + ";" + (86 - h * .7) + ";" + (86 - h), (2 + j * .3) + "s"))); });
        kids.push(e("path", Object.assign({}, Lf, { d: "M10 86 H150" })));
        break;
      case "network":
        var N = [[24, 30], [70, 18], [120, 34], [44, 72], [100, 76], [140, 64]], E = [[0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5], [1, 4]];
        E.forEach(function (g) { kids.push(e("path", Object.assign({}, Lf, { d: "M" + N[g[0]] + " L" + N[g[1]] }))); });
        E.slice(0, 4).forEach(function (g, j) { kids.push(e("circle", { r: 2.5, fill: C }, mv("M" + N[g[0]] + " L" + N[g[1]], (1.6 + j * .4) + "s"))); });
        N.forEach(function (p) { kids.push(e("circle", Object.assign({}, L, { cx: p[0], cy: p[1], r: 5, fill: "#05080e" }))); });
        break;
      case "atom":
        kids.push(e("g", null, e("ellipse", Object.assign({}, L, { cx: 80, cy: 50, rx: 40, ry: 12 })), rot("0 80 50", "360 80 50", "8s")));
        kids.push(e("g", null, e("ellipse", Object.assign({}, Lf, { cx: 80, cy: 50, rx: 40, ry: 12, transform: "rotate(60 80 50)" })), rot("0 80 50", "-360 80 50", "11s")));
        kids.push(e("g", null, e("ellipse", Object.assign({}, Lf, { cx: 80, cy: 50, rx: 40, ry: 12, transform: "rotate(-60 80 50)" }))));
        kids.push(e("circle", { cx: 80, cy: 50, r: 5, fill: C }, an("r", "4;6;4", "2s")));
        kids.push(e("circle", { r: 3, fill: B }, mv("M120 50 A40 12 0 1 1 40 50 A40 12 0 1 1 120 50", "3s")));
        break;
      default:
        [0, 1, 2].forEach(function (j) { kids.push(e("path", Object.assign({}, j === 1 ? L : Lf, { d: "M30 " + (66 - j * 16) + " L80 " + (78 - j * 16) + " L130 " + (66 - j * 16) + " L80 " + (54 - j * 16) + " Z" }))); });
        kids.push(e("circle", { cx: 80, cy: 46, r: 3, fill: C }, an("cy", "62;30;62", "3s")));
    }
    return e("svg", { viewBox: "0 0 160 100", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", "aria-hidden": "true", focusable: "false", style: { display: "block", overflow: "visible" } }, kids);
  };
})();
