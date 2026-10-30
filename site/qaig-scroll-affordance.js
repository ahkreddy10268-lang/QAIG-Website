/* QAIG: makes every horizontal scroller self-evident — edge fades show there is more content, and a one-time peek on first view. */
(function () {
  if (window.__qaigScrollAffordance) return; window.__qaigScrollAffordance = true;
  var reduce = false; try { reduce = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  var tracked = new WeakSet(), ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(function (es) { es.forEach(function (x) { var t = x.target; upd(tracked.has(t) ? t : t.parentElement); }); }) : null;
  var io = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(function (es) {
    es.forEach(function (x) { var el = x.target; if (!x.isIntersecting || el.__qPeeked || el.__qTouched || reduce) return; el.__qPeeked = true; io.unobserve(el);
      if (el.scrollLeft > 2 || el.scrollWidth - el.clientWidth < 8) return;
      var snap = el.style.scrollSnapType; el.style.scrollSnapType = "none";
      el.scrollTo({ left: 56, behavior: "smooth" });
      setTimeout(function () { el.scrollTo({ left: 0, behavior: "smooth" }); setTimeout(function () { el.style.scrollSnapType = snap; }, 500); }, 520);
    });
  }, { threshold: 0.6 }) : null;
  function upd(el) {
    var max = el.scrollWidth - el.clientWidth;
    if (max < 4) { el.style.webkitMaskImage = ""; el.style.maskImage = ""; return; }
    var l = el.scrollLeft > 4, r = el.scrollLeft < max - 4;
    var g = "linear-gradient(90deg," + (l ? "transparent 0,#000 40px" : "#000 0") + "," + (r ? "#000 calc(100% - 56px),transparent 100%" : "#000 100%") + ")";
    el.style.webkitMaskImage = g; el.style.maskImage = g;
  }
  function scan() {
    var list = document.querySelectorAll('[style*="overflow-x"],.qscroll');
    for (var i = 0; i < list.length; i++) { var el = list[i], cs = getComputedStyle(el).overflowX;
      if (cs !== "auto" && cs !== "scroll") continue;
      if (!tracked.has(el)) { tracked.add(el);
        el.addEventListener("scroll", function () { upd(this); }, { passive: true });
        ["pointerdown", "touchstart", "wheel"].forEach(function (t) { el.addEventListener(t, function () { this.__qTouched = true; }, { passive: true }); });
        ro && ro.observe(el); ro && el.firstElementChild && ro.observe(el.firstElementChild); io && io.observe(el); }
      upd(el);
    }
  }
  var t = 0; function later() { clearTimeout(t); t = setTimeout(scan, 250); }
  function start() { scan(); new MutationObserver(later).observe(document.body, { childList: true, subtree: true }); window.addEventListener("resize", later); window.addEventListener("load", later); setTimeout(scan, 1500); setTimeout(scan, 4000); }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start) : start();
})();
