/* QAIG cursor interaction layer. Extends the existing QAIG cursor (#qcur-root); never adds a second follower.
   - Pages that already mount the cursor (Home, Company, Laser, Resources) keep their own motion; this layer only adds contexts.
   - Pages without it get the same Home cursor (ring, dot, label) mounted once.
   Attributes: data-cursor="Label" (contextual cue), data-magnet (primary CTAs, a few px pull + click ripple), data-glow (pointer-following card light).
   Off on touch / coarse pointers, prefers-reduced-motion, and the Customer Portal app screens. */
(function () {
  if (window.__qcurFx) return; window.__qcurFx = 1;
  var mq = function (q) { try { return window.matchMedia(q).matches; } catch (e) { return false; } };
  var FINE = mq("(pointer: fine)") && mq("(hover: hover)"), RM = mq("(prefers-reduced-motion: reduce)");
  var path = decodeURIComponent(location.pathname || "");
  if (!FINE || RM || /Portal/.test(path) || document.documentElement.hasAttribute("data-no-cursor")) return;
  var MONO = "font:500 9px/1 'IBM Plex Mono',ui-monospace,monospace;letter-spacing:.16em;text-transform:uppercase";

  function mountCursor() {
    if (document.getElementById("qcur-root")) return;
    var st = document.createElement("style"); st.id = "qcur-style"; st.textContent = "html.qcur,html.qcur *{cursor:none!important}html.qcur input,html.qcur textarea,html.qcur select{cursor:text!important}html.qcur select{cursor:pointer!important}";
    document.head.appendChild(st);
    var root = document.createElement("div"); root.id = "qcur-root"; root.setAttribute("aria-hidden", "true"); root.setAttribute("data-fx-mounted", "");
    root.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;z-index:2147483000;pointer-events:none;opacity:0;transition:opacity .25s";
    root.innerHTML = '<div data-k="ring" style="position:absolute;left:-18px;top:-18px;width:36px;height:36px;border-radius:50%;border:1px solid rgba(0,212,255,.7);background:rgba(0,212,255,0);transition:transform .35s cubic-bezier(.22,1,.36,1),background .3s,border-color .3s;will-change:transform"></div>'
      + '<svg data-k="focus" width="48" height="48" viewBox="0 0 48 48" style="position:absolute;left:-24px;top:-24px;opacity:0;transform:scale(.7);transition:opacity .2s,transform .3s;color:#e6edf5"><path d="M1 10V1h9M38 1h9v9M47 38v9h-9M10 47H1v-9" fill="none" stroke="currentColor" stroke-width="1"/></svg>'
      + '<span data-k="label" style="position:absolute;left:0;top:0;transform:translate(-50%,-50%);white-space:nowrap;opacity:0;transition:opacity .2s;color:#02131a;' + MONO + '"></span>'
      + '<div data-k="dot" style="position:absolute;left:-3px;top:-3px;width:6px;height:6px;border-radius:50%;background:#00d4ff;box-shadow:0 0 10px rgba(0,212,255,.8);transition:transform .18s"></div>';
    document.body.appendChild(root); document.documentElement.classList.add("qcur");
    var K = {}; ["ring", "focus", "label", "dot"].forEach(function (k) { K[k] = root.querySelector('[data-k="' + k + '"]'); });
    var x = -100, y = -100, rx = -100, ry = -100, raf = 0, mode = "-";
    function set(m, lab) { var key = m + "|" + (lab || ""); if (key === mode) return; mode = key; var big = m === "label", lk = m === "link";
      K.ring.style.transform = big ? "scale(" + (lab && lab.length > 6 ? 2.6 : 2.1) + ")" : lk ? "scale(1.45)" : m === "media" ? "scale(0)" : "scale(1)";
      K.ring.style.background = big ? "rgba(0,212,255,.92)" : lk ? "rgba(0,212,255,.1)" : "rgba(0,212,255,0)";
      K.label.textContent = big ? lab : ""; K.label.style.opacity = big ? "1" : "0";
      K.focus.style.opacity = m === "media" ? "1" : "0"; K.focus.style.transform = m === "media" ? "scale(1)" : "scale(.7)";
      K.dot.style.transform = big ? "scale(0)" : "scale(1)"; }
    function ctx(t) { if (!t || !t.closest) return [""]; if (t.closest('input,textarea,[contenteditable="true"]')) return ["text"];
      var c = t.closest("[data-cursor]"), a = t.closest('a,button,[role="button"],[role="tab"],select,label,summary');
      if (c && c.getAttribute("data-cursor") && (!a || c.contains(a) || a.contains(c))) return ["label", c.getAttribute("data-cursor")];
      if (a) return ["link"]; if (t.closest("img,video,figure")) return ["media"]; return [""]; }
    function tick() { raf = 0; rx += (x - rx) * 0.2; ry += (y - ry) * 0.2; K.dot.style.left = (x - rx - 3) + "px"; K.dot.style.top = (y - ry - 3) + "px"; root.style.transform = "translate3d(" + rx.toFixed(1) + "px," + ry.toFixed(1) + "px,0)"; if (Math.abs(x - rx) + Math.abs(y - ry) > 0.3) raf = requestAnimationFrame(tick); }
    window.addEventListener("mousemove", function (ev) { x = ev.clientX; y = ev.clientY; if (rx < -50) { rx = x; ry = y; } root.style.opacity = "1"; if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
    document.addEventListener("mouseover", function (ev) { var r = ctx(ev.target); root.style.visibility = r[0] === "text" ? "hidden" : "visible"; set(r[0] === "text" ? "" : r[0], r[1]); });
    document.documentElement.addEventListener("mouseleave", function () { root.style.opacity = "0"; });
    window.addEventListener("mousedown", function () { K.ring.style.transform += " scale(.85)"; });
    window.addEventListener("mouseup", function () { var m = mode; mode = "-"; var p = m.split("|"); set(p[0], p[1]); });
    window.addEventListener("pagehide", function () { set("", ""); });
  }

  /* Contextual label for page cursors that do not render data-cursor labels themselves (Company, Laser, Resources). */
  var tag = null;
  function tagFor(root) { if (tag && tag.parentNode === root) return tag; if (root.hasAttribute("data-fx-mounted") || root.querySelector('[data-k="label"]')) return null;
    tag = document.createElement("span"); tag.style.cssText = "position:absolute;left:24px;top:-26px;white-space:nowrap;padding:5px 7px 4px;border-radius:4px;background:#00d4ff;color:#02131a;opacity:0;transform:translateY(4px);transition:opacity .2s,transform .25s cubic-bezier(.22,1,.36,1);" + MONO; root.appendChild(tag); return tag; }
  function labelOf(t) { var c = t && t.closest ? t.closest("[data-cursor]") : null; return c ? c.getAttribute("data-cursor") || "" : ""; }
  document.addEventListener("mouseover", function (ev) { var root = document.getElementById("qcur-root"); if (!root) return; var g = tagFor(root); if (!g) return; var l = labelOf(ev.target);
    if (l) { g.textContent = l; g.style.opacity = "1"; g.style.transform = "translateY(0)"; } else { g.style.opacity = "0"; g.style.transform = "translateY(4px)"; } });

  /* Magnetic primary CTAs. Offset is measured against the element's resting box, so the pull cannot make the target leave its own hover area. */
  var mags = [], cur = null, mraf = 0;
  function magTick() { mraf = 0; var live = false;
    mags = mags.filter(function (el) { var tx = el === cur ? el.__tx : 0, ty = el === cur ? el.__ty : 0; el.__mx += (tx - el.__mx) * 0.18; el.__my += (ty - el.__my) * 0.18;
      if (el !== cur && Math.abs(el.__mx) + Math.abs(el.__my) < 0.05) { el.style.translate = ""; return false; }
      el.style.translate = el.__mx.toFixed(2) + "px " + el.__my.toFixed(2) + "px"; live = true; return true; });
    if (live) mraf = requestAnimationFrame(magTick); }
  function magKick() { if (!mraf) mraf = requestAnimationFrame(magTick); }

  /* Card light: one layer per card, painted under the card's content (isolation + negative z-index). */
  var glow = null;
  function layer(el) { var l = el.__qglow; if (l) return l; l = document.createElement("span"); l.setAttribute("aria-hidden", "true");
    l.style.cssText = "position:absolute;inset:0;z-index:-1;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s;background:radial-gradient(320px circle at var(--qgx,50%) var(--qgy,50%),rgba(0,212,255,.11),rgba(0,212,255,.03) 45%,transparent 70%)";
    if (getComputedStyle(el).position === "static") el.style.position = "relative"; el.style.isolation = "isolate"; el.insertBefore(l, el.firstChild); el.__qglow = l; return l; }

  window.addEventListener("mousemove", function (ev) { var t = ev.target;
    var m = t && t.closest ? t.closest("[data-magnet]") : null;
    if (m && mags.indexOf(m) < 0) { m.__mx = 0; m.__my = 0; mags.push(m); }
    if (m !== cur) { cur = m; magKick(); }
    if (m) { var r = m.getBoundingClientRect(), bx = r.left - m.__mx, by = r.top - m.__my; var dx = (ev.clientX - (bx + r.width / 2)) / (r.width / 2), dy = (ev.clientY - (by + r.height / 2)) / (r.height / 2);
      m.__tx = Math.max(-1, Math.min(1, dx)) * 6; m.__ty = Math.max(-1, Math.min(1, dy)) * 4; magKick(); }
    var g = t && t.closest ? t.closest("[data-glow]") : null;
    if (g !== glow) { if (glow && glow.__qglow) glow.__qglow.style.opacity = "0"; glow = g; if (g) layer(g).style.opacity = "1"; }
    if (glow) { var b = glow.getBoundingClientRect(); glow.style.setProperty("--qgx", (ev.clientX - b.left).toFixed(0) + "px"); glow.style.setProperty("--qgy", (ev.clientY - b.top).toFixed(0) + "px"); }
  }, { passive: true });
  document.documentElement.addEventListener("mouseleave", function () { cur = null; magKick(); if (glow && glow.__qglow) glow.__qglow.style.opacity = "0"; glow = null; });

  /* Signature: one thin orbital ring from the click point, primary CTAs only. */
  document.addEventListener("click", function (ev) { var m = ev.target && ev.target.closest ? ev.target.closest("[data-magnet]") : null; if (!m || !Element.prototype.animate) return;
    var o = document.createElement("span"); o.setAttribute("aria-hidden", "true");
    o.style.cssText = "position:fixed;left:" + (ev.clientX - 6) + "px;top:" + (ev.clientY - 6) + "px;width:12px;height:12px;border-radius:50%;border:1px solid rgba(0,212,255,.85);pointer-events:none;z-index:2147482999";
    document.body.appendChild(o); var a = o.animate([{ transform: "scale(1)", opacity: 0.9 }, { transform: "scale(9)", opacity: 0 }], { duration: 650, easing: "cubic-bezier(.22,1,.36,1)" }); a.onfinish = function () { o.remove(); };
  }, true);

  var start = function () { setTimeout(mountCursor, 1400); };
  if (document.readyState === "complete") start(); else window.addEventListener("load", start);
})();
