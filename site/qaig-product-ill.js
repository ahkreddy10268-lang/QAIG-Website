/* QAIG product concept illustrations (shared). Usage: window.QAIG_PILL(React, title, reducedMotion) returns an animated SVG element. */
window.QAIG_PILL = function (React, title, rm) {

    const e = React.createElement, B = "var(--brand)", L = "var(--border-strong)", T = "var(--faint)", FG = "var(--foreground-2)", SF = "var(--surface-2)", W = "#bdf5ff";
    const an = (key, p) => rm ? null : e("animate", { key, repeatCount: "indefinite", ...p });
    const mot = (key, path, dur, begin, extra) => rm ? null : e("animateMotion", { key, path, dur, begin: (begin ? "-" + begin : "0s"), repeatCount: "indefinite", ...(extra || {}) });
    const lab = (key, x, y, s, anchor) => e("text", { key, x, y, fill: "var(--muted)", fontSize: 12, textAnchor: anchor || "start", style: { fontFamily: "var(--font-mono)", letterSpacing: "0.14em" } }, s);
    const dot = (key, r, fill, m) => e("circle", { key, r, fill, opacity: rm ? 0 : 1 }, m);
    const ln = (key, x1, y1, x2, y2, s, o) => e("line", { key, x1, y1, x2, y2, stroke: s || L, ...(o || {}) });
    let k = [];
    switch (title) {
      case "Chec-Q AI": { const fl = [3, 10, 13, 20]; k = [...Array.from({ length: 24 }, (_, i) => { const cx = 30 + (i % 8) * 34, cy = 22 + Math.floor(i / 8) * 30, f = fl.includes(i); return e("rect", { key: "k" + i, x: cx, y: cy, width: 24, height: 18, rx: 3, fill: f ? "rgba(0,212,255,.14)" : "none", stroke: f ? B : L }, f ? an("a", { attributeName: "stroke-opacity", values: ".3;1;.3", dur: "2.4s", begin: (i % 4) * 0.3 + "s" }) : null); }),
        ln("sc", 26, 14, 26, 112, W, { strokeOpacity: rm ? 0 : 0.8 }, null), rm ? null : e("line", { key: "sc2", x1: 26, y1: 14, x2: 26, y2: 112, stroke: W, strokeWidth: 1.5 }, an("a", { attributeName: "x1", values: "26;298;26", dur: "4s" }), an("b", { attributeName: "x2", values: "26;298;26", dur: "4s" })),
        lab("t1", 30, 132, "CRYPTO INVENTORY"), lab("t2", 296, 132, "AT RISK", "end")]; break; }
      case "Q-Sleeve": k = [e("rect", { key: "a", x: 14, y: 46, width: 40, height: 40, rx: 6, fill: SF, stroke: FG }), e("rect", { key: "b", x: 266, y: 46, width: 40, height: 40, rx: 6, fill: SF, stroke: FG }),
        ln("n1", 54, 30, 266, 30, T, { strokeDasharray: "2 6" }), ln("n2", 54, 104, 266, 104, T, { strokeDasharray: "2 6" }),
        e("rect", { key: "sl", x: 58, y: 52, width: 204, height: 28, rx: 14, fill: "rgba(0,212,255,.06)", stroke: B }), ln("c", 70, 66, 250, 66, B, { strokeOpacity: 0.35, strokeDasharray: "3 4" }),
        ...[0, 1, 2].map((i) => e("rect", { key: "p" + i, x: -7, y: -5, width: 14, height: 10, rx: 2, fill: B, opacity: rm ? 0 : 1 }, mot("m", "M66 66 H254", "3s", i + "s"))),
        lab("t1", 34, 102, "SITE A", "middle"), lab("t2", 286, 102, "SITE B", "middle"), lab("t3", 160, 24, "PUBLIC NETWORK", "middle"), lab("t4", 160, 126, "QUANTUM-SAFE TUNNEL", "middle")]; break;
      case "QuRNG": k = [e("circle", { key: "s", cx: 36, cy: 78, r: 10, fill: "rgba(0,212,255,.12)", stroke: B }), ln("b1", 46, 78, 160, 78, B, { strokeOpacity: 0.5 }), ln("b2", 160, 78, 268, 78, L), ln("b3", 160, 78, 160, 22, L),
        e("rect", { key: "bs", x: 150, y: 68, width: 20, height: 20, fill: SF, stroke: FG, transform: "rotate(45 160 78)" }),
        e("rect", { key: "d0", x: 268, y: 66, width: 26, height: 24, rx: 4, fill: B, fillOpacity: 0.15, stroke: B }, an("a", { attributeName: "fill-opacity", values: ".1;.9;.1;.1;.1;.9;.1;.9;.1;.1", dur: "5s" })),
        e("rect", { key: "d1", x: 148, y: 4, width: 24, height: 18, rx: 4, fill: B, fillOpacity: 0.15, stroke: B }, an("a", { attributeName: "fill-opacity", values: ".1;.1;.9;.1;.9;.1;.1;.1;.9;.1", dur: "5s" })),
        dot("ph", 3, W, mot("m", "M46 78 H160", "0.5s")), lab("t0", 281, 104, "0", "middle"), lab("t1", 186, 16, "1"),
        e("text", { key: "bits", x: 36, y: 128, fill: FG, fontSize: 12.5, style: { fontFamily: "var(--font-mono)", letterSpacing: "0.3em" } }, "0 1 1 0 1 0 0 1 1 0")]; break;
      case "Q-Cluster": { const N = [[60, 40], [130, 40], [200, 40], [60, 100], [130, 100], [200, 100]], Ed = [[0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [1, 4], [2, 5]];
        k = [...Ed.map(([a, b], i) => ln("e" + i, N[a][0], N[a][1], N[b][0], N[b][1])), ...N.map(([x, y], i) => e("rect", { key: "n" + i, x: x - 15, y: y - 11, width: 30, height: 22, rx: 4, fill: SF, stroke: i === 4 ? B : FG })),
          dot("p1", 3, B, mot("m", "M60 40 H200 V100 H60 Z", "4s")), e("path", { key: "cl", d: "M252 84 a14 14 0 0 1 4 -27 a20 20 0 0 1 38 4 a12 12 0 0 1 2 23 Z", fill: "none", stroke: B }), ln("lk", 215, 70, 250, 70, B, { strokeDasharray: "3 4" }),
          lab("t1", 130, 132, "LOCAL NODES", "middle"), lab("t2", 274, 104, "CLOUD", "middle")]; break; }
      case "QubitIQ": { const cols = [[40, [40, 70, 100]], [100, [28, 58, 88, 118]], [160, [40, 70, 100]]]; const nodes = cols.flatMap(([x, ys]) => ys.map((y) => [x, y]));
        k = [...cols.slice(0, 2).flatMap(([x, ys], ci) => ys.flatMap((y, a) => cols[ci + 1][1].map((y2, b) => ln("w" + ci + a + b, x, y, cols[ci + 1][0], y2, L, { strokeOpacity: 0.6 })))),
          ...nodes.map(([x, y], i) => e("circle", { key: "n" + i, cx: x, cy: y, r: 5, fill: SF, stroke: FG }, an("a", { attributeName: "stroke", values: "var(--foreground-2);#00d4ff;var(--foreground-2)", dur: "2.4s", begin: (i % 4) * 0.4 + "s" }))),
          ln("ar", 176, 70, 206, 70, B), e("circle", { key: "bl", cx: 254, cy: 70, r: 40, fill: "rgba(0,212,255,.04)", stroke: L }), e("ellipse", { key: "eq", cx: 254, cy: 70, rx: 40, ry: 11, fill: "none", stroke: L, strokeDasharray: "2 3" }),
          e("g", { key: "v" }, ln("vl", 254, 70, 276, 42, B, { strokeWidth: 2 }), e("circle", { cx: 276, cy: 42, r: 4, fill: B }), rm ? null : e("animateTransform", { attributeName: "transform", type: "rotate", values: "0 254 70;360 254 70", dur: "7s", repeatCount: "indefinite" })),
          lab("t1", 100, 140, "AI MODEL", "middle"), lab("t2", 254, 132, "QUBIT LOGIC", "middle")]; break; }
      case "EPS-QKD": k = [ln("ab", 34, 72, 286, 72, L), e("path", { key: "en", d: "M40 60 Q160 6 280 60", fill: "none", stroke: B, strokeOpacity: 0.45, strokeDasharray: "3 4" }),
        e("circle", { key: "src", cx: 160, cy: 72, r: 12, fill: "rgba(0,212,255,.14)", stroke: B }, an("a", { attributeName: "r", values: "11;14;11", dur: "1.6s" })),
        e("rect", { key: "A", x: 14, y: 58, width: 28, height: 28, rx: 5, fill: SF, stroke: FG }), e("rect", { key: "Bb", x: 278, y: 58, width: 28, height: 28, rx: 5, fill: SF, stroke: FG }),
        dot("p1", 3.5, B, mot("m", "M160 72 H42", "1.6s")), dot("p2", 3.5, W, mot("m", "M160 72 H278", "1.6s")),
        lab("t1", 28, 104, "ALICE", "middle"), lab("t2", 292, 104, "BOB", "middle"), lab("t3", 160, 104, "PAIR SOURCE", "middle"), lab("t4", 160, 128, "SHARED KEY", "middle")]; break;
      case "Q-Memory": k = [ln("in", 20, 70, 300, 70, L), e("rect", { key: "cell", x: 126, y: 40, width: 68, height: 60, rx: 10, fill: "rgba(0,212,255,.06)", stroke: B }),
        e("circle", { key: "rg", cx: 160, cy: 70, r: 10, fill: "none", stroke: B }, an("a", { attributeName: "r", values: "8;22;8", dur: "3s" }), an("b", { attributeName: "stroke-opacity", values: "1;.15;1", dur: "3s" })),
        dot("ph", 4, W, mot("m", "M20 70 H300", "4s", "0s", { keyPoints: "0;0.5;0.5;1", keyTimes: "0;0.35;0.7;1", calcMode: "linear" })),
        lab("t1", 60, 58, "WRITE", "middle"), lab("t2", 160, 120, "STORE", "middle"), lab("t3", 260, 58, "READ", "middle")]; break;
      case "QNTSim": { const N = [[40, 50], [100, 26], [110, 86], [180, 50], [230, 96], [260, 30], [290, 74]], Ed = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 5], [3, 4], [4, 6], [5, 6], [2, 4]];
        k = [...Ed.map(([a, b], i) => ln("e" + i, N[a][0], N[a][1], N[b][0], N[b][1])), ...N.map(([x, y], i) => e("circle", { key: "n" + i, cx: x, cy: y, r: 5, fill: SF, stroke: i === 0 || i === 6 ? B : FG })),
          dot("p1", 3, B, mot("m", "M40 50 L100 26 L180 50 L260 30 L290 74", "3.5s")), dot("p2", 3, W, mot("m", "M40 50 L110 86 L230 96 L290 74", "3.5s", "1.75s")),
          ln("tl", 30, 124, 300, 124, L), ...Array.from({ length: 10 }, (_, i) => ln("tk" + i, 30 + i * 30, 120, 30 + i * 30, 128, T)),
          e("line", { key: "ph", x1: 30, y1: 114, x2: 30, y2: 132, stroke: B, strokeWidth: 2 }, an("a", { attributeName: "x1", values: "30;300", dur: "3.5s" }), an("b", { attributeName: "x2", values: "30;300", dur: "3.5s" })),
          lab("t1", 30, 144, "SIMULATED TIME")]; break; }
      case "Quantum Repeater": k = [ln("l", 30, 92, 290, 92, L), ...[[30, "A"], [160, "R"], [290, "B"]].map(([x, s], i) => e("g", { key: "n" + i }, e("rect", { x: x - 12, y: 80, width: 24, height: 24, rx: 5, fill: SF, stroke: i === 1 ? B : FG }), e("text", { x, y: 96, fill: FG, fontSize: 12, textAnchor: "middle", style: { fontFamily: "var(--font-mono)" } }, s))),
        e("path", { key: "a1", d: "M30 78 Q95 40 160 78", fill: "none", stroke: B, strokeDasharray: "3 4" }), e("path", { key: "a2", d: "M160 78 Q225 40 290 78", fill: "none", stroke: B, strokeDasharray: "3 4" }),
        e("path", { key: "a3", d: "M30 76 Q160 -4 290 76", fill: "none", stroke: W, strokeWidth: 1.5, opacity: rm ? 0.6 : 0 }, an("a", { attributeName: "opacity", values: "0;0;1;1;0", keyTimes: "0;.45;.6;.9;1", dur: "4s" })),
        lab("t1", 95, 124, "SEGMENT", "middle"), lab("t2", 225, 124, "SEGMENT", "middle"), lab("t3", 160, 22, "ENTANGLEMENT SWAP", "middle")]; break;
      case "Q-Biosensor": k = [ln("sf", 20, 112, 300, 112, FG), ...Array.from({ length: 14 }, (_, i) => e("circle", { key: "d" + i, cx: 30 + i * 20, cy: 122, r: 1.6, fill: B, opacity: 0.6 })),
        e("g", { key: "mol" }, ...[0, 1, 2].map((i) => { const cx = 70 + i * 26, cy = 66 + (i % 2) * 14; return e("polygon", { key: i, points: [0, 1, 2, 3, 4, 5].map((j) => { const a = Math.PI / 3 * j; return (cx + 13 * Math.cos(a)).toFixed(1) + "," + (cy + 13 * Math.sin(a)).toFixed(1); }).join(" "), fill: "rgba(0,212,255,.05)", stroke: FG }); }), rm ? null : e("animateTransform", { attributeName: "transform", type: "translate", values: "0 -8;0 6;0 -8", dur: "4s", repeatCount: "indefinite" })),
        e("polyline", { key: "sg", points: Array.from({ length: 30 }, (_, i) => { const x = 190 + i * 4, g = Math.exp(-((i - 15) ** 2) / 12); return x + "," + (80 - 44 * g + 2 * Math.sin(i * 2)).toFixed(1); }).join(" "), fill: "none", stroke: B, strokeWidth: 1.5 }, an("a", { attributeName: "stroke-opacity", values: ".25;1;.25", dur: "4s" })),
        lab("t1", 96, 30, "MOLECULE", "middle"), lab("t2", 250, 30, "SIGNAL", "middle"), lab("t3", 20, 142, "SENSOR SURFACE")]; break;
      case "Quantum Gravimeter": k = [...[36, 70, 104].map((y, i) => e("line", { key: "lz" + i, x1: 70, y1: y, x2: 250, y2: y, stroke: B, strokeOpacity: 0.2 }, an("a", { attributeName: "stroke-opacity", values: ".15;.9;.15", dur: "2.4s", begin: i * 0.6 + "s" }))),
        e("g", { key: "cloud" }, ...Array.from({ length: 16 }, (_, i) => e("circle", { key: i, cx: 160 + 9 * Math.cos(i * 2.4) * (i % 3 + 1) / 2, cy: 18 + 6 * Math.sin(i * 1.7) * (i % 2 + 1) / 2, r: 1.8, fill: W })), rm ? null : e("animateTransform", { attributeName: "transform", type: "translate", values: "0 0;0 96", keyTimes: "0;1", keySplines: ".55 0 1 .45", calcMode: "spline", dur: "2.4s", repeatCount: "indefinite" })),
        ln("g1", 286, 30, 286, 110, FG), e("path", { key: "g2", d: "M280 102 L286 112 L292 102", fill: "none", stroke: FG }), e("text", { key: "g3", x: 296, y: 74, fill: FG, fontSize: 12, style: { fontStyle: "italic" } }, "g"),
        lab("t1", 70, 124, "LASER PULSES"), lab("t2", 250, 144, "FREE-FALLING ATOMS", "end")]; break;
      case "Rydberg Sensor": { let d = "M310 70"; for (let x = 310; x >= 170; x -= 2) d += " L" + x + " " + (70 + 12 * Math.sin((310 - x) / 14)).toFixed(1);
        k = [e("circle", { key: "orb", cx: 100, cy: 70, r: 52, fill: "rgba(0,212,255,.03)", stroke: L, strokeDasharray: "3 4" }), e("circle", { key: "nu", cx: 100, cy: 70, r: 5, fill: B }),
          e("g", { key: "el" }, e("circle", { cx: 152, cy: 70, r: 4, fill: W }), rm ? null : e("animateTransform", { attributeName: "transform", type: "rotate", values: "0 100 70;360 100 70", dur: "6s", repeatCount: "indefinite" })),
          e("path", { key: "rf", d, fill: "none", stroke: B, strokeWidth: 1.4, strokeDasharray: "8 6" }, an("a", { attributeName: "stroke-dashoffset", values: "0;28", dur: "1s" })),
          lab("t1", 100, 140, "RYDBERG ATOM", "middle"), lab("t2", 260, 40, "RF FIELD", "middle")]; break; }
      default: { let d = "M84 75"; for (let x = 84; x <= 210; x += 2) d += " L" + x + " " + (75 + 7 * Math.sin((x - 84) / 14 * Math.PI)).toFixed(1);
        k = [e("rect", { key: "dio", x: 20, y: 58, width: 64, height: 34, rx: 6, fill: "rgba(0,212,255,.08)", stroke: B }), ln("cb", 84, 75, 220, 75, B, { strokeOpacity: 0.3 }),
          e("path", { key: "sw", d, fill: "none", stroke: B, strokeWidth: 1.3, strokeDasharray: "5 5" }, an("a", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1s" })),
          e("g", { key: "gr", transform: "rotate(-30 226 75)" }, e("rect", { x: 220, y: 44, width: 12, height: 62, rx: 2, fill: SF, stroke: FG })),
          ln("out", 232, 72, 306, 30, B, { strokeWidth: 2 }), e("line", { key: "op", x1: 232, y1: 72, x2: 306, y2: 30, stroke: W, strokeWidth: 2, strokeDasharray: "12 26", strokeOpacity: rm ? 0 : 1 }, an("a", { attributeName: "stroke-dashoffset", values: "0;-38", dur: "1s" })),
          lab("t1", 52, 110, "DIODE", "middle"), lab("t2", 150, 52, "CAVITY", "middle"), lab("t3", 226, 124, "GRATING", "middle"), lab("t4", 306, 22, "OUTPUT", "end")]; }
    }
    return e("svg", { viewBox: "0 0 320 150", preserveAspectRatio: "xMidYMid meet", role: "img", "aria-label": title + " concept illustration", style: { display: "block", width: "100%", height: "100%" } }, k);
  
};
