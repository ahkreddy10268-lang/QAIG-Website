/* QAIG responsive preview. Renders the current page inside real-width frames so every breakpoint can be checked.
   Driven by each page's "viewport" tweak. Inner frames carry ?qvp=1 and never open the preview themselves. */
(function () {
  if (window.QAIGViewport) return;
  var SIZES = { "Desktop · 1440": [1440, 900], "Laptop · 1280": [1280, 800], "Tablet · 834": [834, 1112], "Mobile · 390": [390, 844] };
  var ALL = ["Desktop · 1440", "Laptop · 1280", "Tablet · 834", "Mobile · 390"];
  var inner = /[?&]qvp=1(&|$)/.test(location.search);
  var root = null, mode = "Auto", frames = {};
  function src() { var u = new URL(location.href); u.searchParams.set("qvp", "1"); u.hash = ""; return u.toString(); }
  function frame(key) {
    if (frames[key]) return frames[key];
    var box = document.createElement("div"), cap = document.createElement("div"), clip = document.createElement("div"), f = document.createElement("iframe");
    box.style.cssText = "flex:none;display:flex;flex-direction:column;gap:10px";
    cap.style.cssText = "display:flex;justify-content:space-between;gap:12px;font:500 11px/1 'IBM Plex Mono',ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#8fa3b8";
    cap.innerHTML = "<span style='color:#00d4ff'>" + key.split(" · ")[0] + "</span><span>" + SIZES[key][0] + " px</span>";
    clip.style.cssText = "position:relative;overflow:hidden;border:1px solid #1f2b3a;border-radius:10px;background:#05080e;box-shadow:0 20px 60px rgba(0,0,0,.5)";
    f.src = src(); f.title = key + " preview"; f.setAttribute("loading", "eager");
    f.style.cssText = "position:absolute;left:0;top:0;border:0;display:block;transform-origin:0 0;background:#05080e";
    clip.appendChild(f); box.appendChild(cap); box.appendChild(clip);
    return (frames[key] = { box: box, clip: clip, f: f, key: key });
  }
  function layout() {
    if (!root) return;
    var stage = root.lastChild, keys = mode === "All screens" ? ALL : [mode];
    var aw = window.innerWidth - 48, ah = window.innerHeight - 56 - 48 - 22, gap = 28;
    var s = 1;
    if (keys.length === 1) { s = Math.min(1, aw / SIZES[keys[0]][0]); }
    else { var tw = keys.reduce(function (a, k) { return a + SIZES[k][0]; }, 0); s = Math.max(0.22, Math.min(0.6, (aw - gap * (keys.length - 1)) / tw)); }
    stage.style.justifyContent = keys.length === 1 && s === 1 ? "center" : "flex-start";
    stage.innerHTML = "";
    keys.forEach(function (k) {
      var fr = frame(k), w = SIZES[k][0], h = keys.length === 1 ? Math.max(320, ah / s) : Math.max(SIZES[k][1], ah / s);
      fr.f.style.width = w + "px"; fr.f.style.height = h + "px"; fr.f.style.transform = "scale(" + s + ")";
      fr.clip.style.width = Math.round(w * s) + "px"; fr.clip.style.height = Math.round(h * s) + "px";
      stage.appendChild(fr.box);
    });
    root.firstChild.querySelector("[data-l]").textContent = keys.length === 1 ? keys[0] + (s < 1 ? " · shown at " + Math.round(s * 100) + "%" : " · actual size") : "All screens · shown at " + Math.round(s * 100) + "%";
  }
  function open() {
    if (!root) {
      root = document.createElement("div"); root.id = "qvp-root";
      root.style.cssText = "position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;background:radial-gradient(ellipse 60% 50% at 50% 0%,rgba(0,212,255,.06),transparent 70%),#03060b;cursor:auto";
      var bar = document.createElement("div");
      bar.style.cssText = "flex:none;display:flex;align-items:center;justify-content:space-between;gap:16px;height:56px;padding:0 24px;border-bottom:1px solid #1a2431;font:500 11px/1 'IBM Plex Mono',ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:#8fa3b8";
      bar.innerHTML = "<span style='display:flex;align-items:center;gap:10px'><span style='width:7px;height:7px;border-radius:50%;background:#00d4ff;box-shadow:0 0 10px #00d4ff'></span>Responsive preview</span><span data-l style='color:#e6edf5'></span><span>Set Viewport to Auto to exit</span>";
      var stage = document.createElement("div");
      stage.style.cssText = "flex:1;min-height:0;display:flex;align-items:flex-start;gap:28px;padding:24px;overflow:auto";
      root.appendChild(bar); root.appendChild(stage);
      var st = document.createElement("style"); st.id = "qvp-style"; st.textContent = "#qvp-root,#qvp-root *{cursor:auto!important}#qcur-root{display:none!important}";
      document.head.appendChild(st);
      document.body.appendChild(root);
      window.addEventListener("resize", layout);
    }
    document.documentElement.style.overflow = "hidden";
    layout();
  }
  function close() {
    if (!root) return;
    window.removeEventListener("resize", layout);
    root.remove(); root = null; frames = {};
    var st = document.getElementById("qvp-style"); if (st) st.remove();
    document.documentElement.style.overflow = "";
  }
  window.QAIGViewport = {
    inner: inner,
    apply: function (m) {
      if (inner) return;
      m = m || "Auto";
      if (m !== "All screens" && !SIZES[m]) m = "Auto";
      if (m === mode && (m === "Auto" || root)) return;
      mode = m;
      if (m === "Auto") close(); else open();
    }
  };
})();
