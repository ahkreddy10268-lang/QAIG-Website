/* QAIG Mini 3D viewer. window.QAIG_MINI3D(host, { kind: "q-cluster-mini" | "qntsim-mini", label, reducedMotion, onFail }) -> Promise<{ setView, setAuto, destroy }>.
   A rounded-box model of the Mini hardware, drag to rotate. three.js core only (no addons). */
(function () {
  var THREE_URL = "https://unpkg.com/three@0.160.0/build/three.module.js";
  var VIEWS = { hero: [-0.62, 0.32], front: [0, 0.08], side: [-1.5707, 0.08], top: [-0.4, 1.25], back: [3.1416, 0.2] };
  function canvasTex(T, w, h, draw) { var c = document.createElement("canvas"); c.width = w; c.height = h; var x = c.getContext("2d"); draw(x, w, h); var t = new T.CanvasTexture(c); t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8; return t; }
  function roundRect(x, X, Y, W, H, r) { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + W, Y, X + W, Y + H, r); x.arcTo(X + W, Y + H, X, Y + H, r); x.arcTo(X, Y + H, X, Y, r); x.arcTo(X, Y, X + W, Y, r); x.closePath(); }
  function softwareGL() { try { var c = document.createElement("canvas"), gl = c.getContext("webgl2") || c.getContext("webgl"); if (!gl) return true; var ext = gl.getExtension("WEBGL_debug_renderer_info"), r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : ""; var lose = gl.getExtension("WEBGL_lose_context"); if (lose) lose.loseContext(); return /swiftshader|llvmpipe|software|basic render/i.test(r); } catch (e) { return true; } }
  window.QAIG_MINI3D = function (host, opts) {
    opts = opts || {};
    if (softwareGL() || /[?&]no3d\b/.test(location.search)) { if (opts.onFail) opts.onFail(); return Promise.reject(new Error("3D unavailable")); }
    return import(THREE_URL).then(function (T) {
      var qc = opts.kind !== "qntsim-mini";
      var W = 1.0, D = qc ? 0.68 : 0.66, H = qc ? 0.46 : 0.44, R = 0.15, B = 0.045;
      var renderer;
      try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" }); } catch (e) { if (opts.onFail) opts.onFail(); throw e; }
      renderer.setPixelRatio(Math.min(1.5, window.devicePixelRatio || 1));
      renderer.outputColorSpace = T.SRGBColorSpace; renderer.toneMapping = T.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
      var cv = renderer.domElement; cv.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:pan-y;cursor:grab;outline:none";
      cv.setAttribute("aria-hidden", "true");
      var old = host.querySelector("canvas"); if (old) old.remove();
      host.appendChild(cv);
      var scene = new T.Scene();
      var cam = new T.PerspectiveCamera(28, 1, 0.1, 50);
      /* Studio environment for reflections, built from emissive panels. */
      var pm = new T.PMREMGenerator(renderer), env = new T.Scene();
      env.add(new T.Mesh(new T.BoxGeometry(20, 20, 20), new T.MeshBasicMaterial({ color: 0x05080e, side: T.BackSide })));
      var panel = function (c, w, h, p, r) { var m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ color: c, side: T.DoubleSide })); m.position.set(p[0], p[1], p[2]); m.lookAt(0, 0, 0); if (r) m.rotateZ(r); env.add(m); };
      panel(0xffffff, 6, 1.4, [0, 6, 2]); panel(0x9fdfff, 1.2, 6, [-6, 1.5, 1]); panel(0x00d4ff, 1, 5, [6, 1, -2]); panel(0xffffff, 3, 2, [2, 2, 6]);
      scene.environment = pm.fromScene(env, 0.04).texture;
      scene.add(new T.AmbientLight(0xffffff, 0.15));
      var key = new T.DirectionalLight(0xffffff, 1.2); key.position.set(2, 4, 3); scene.add(key);
      var rim = new T.PointLight(0x00d4ff, 6, 6, 1.6); rim.position.set(-1.4, 0.8, -1.6); scene.add(rim);
      var rim2 = new T.PointLight(0x2a7bff, 3, 6, 1.6); rim2.position.set(1.6, 0.2, -1.2); scene.add(rim2);
      var g = new T.Group(); scene.add(g);
      /* Body: rounded rectangle footprint, extruded with a soft bevel. */
      var s = new T.Shape(), w2 = W / 2 - B, d2 = D / 2 - B, r = R - B;
      s.moveTo(-w2 + r, -d2); s.lineTo(w2 - r, -d2); s.quadraticCurveTo(w2, -d2, w2, -d2 + r); s.lineTo(w2, d2 - r); s.quadraticCurveTo(w2, d2, w2 - r, d2); s.lineTo(-w2 + r, d2); s.quadraticCurveTo(-w2, d2, -w2, d2 - r); s.lineTo(-w2, -d2 + r); s.quadraticCurveTo(-w2, -d2, -w2 + r, -d2);
      var geo = new T.ExtrudeGeometry(s, { depth: H - 2 * B, bevelEnabled: true, bevelThickness: B, bevelSize: B, bevelSegments: 8, curveSegments: 28 });
      geo.rotateX(-Math.PI / 2); geo.translate(0, -(H - 2 * B) / 2, 0); geo.computeVertexNormals();
      var mat = new T.MeshPhysicalMaterial({ color: 0x15171b, roughness: 0.5, metalness: 0.15, clearcoat: 0.5, clearcoatRoughness: 0.4, envMapIntensity: 0.9 });
      var body = new T.Mesh(geo, mat); g.add(body);
      var decal = function (tex, w, h, pos, rot) { var m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false })); m.position.set(pos[0], pos[1], pos[2]); m.rotation.set(rot[0], rot[1], rot[2]); g.add(m); return m; };
      /* Top: company mark. */
      new T.TextureLoader().load("assets/quantum-logo-white.png", function (t) { t.colorSpace = T.SRGBColorSpace; t.anisotropy = 8; var lw = 0.3; decal(t, lw, lw * 1706 / 2368, [0, H / 2 + 0.002, -0.02], [-Math.PI / 2, 0, 0]); });
      /* Front: product name and the vent slot. */
      var label = opts.label || (qc ? "Qcluster-Mini" : "QNTSim-Mini");
      var front = canvasTex(T, 1024, 440, function (x, cw, ch) {
        x.fillStyle = "rgba(0,0,0,.92)"; roundRect(x, qc ? 40 : 300, qc ? 40 : 150, qc ? 520 : 660, 12, 6); x.fill();
        x.fillStyle = "rgba(255,255,255,.08)"; x.fillRect(qc ? 46 : 306, qc ? 53 : 163, qc ? 508 : 648, 2);
        x.font = "500 92px 'Inter', 'Helvetica Neue', Arial, sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
        var gr = x.createLinearGradient(0, 210, 0, 320); gr.addColorStop(0, "#d9dde3"); gr.addColorStop(1, "#8c939c"); x.fillStyle = gr;
        x.fillText(label, qc ? cw * 0.42 : cw * 0.56, qc ? 270 : 300);
      });
      decal(front, W - 0.16, (W - 0.16) * 440 / 1024, [0, -0.02, D / 2 + 0.002], [0, 0, 0]);
      /* Side: port and status light (Q-Cluster Mini render shows both on the right side). */
      var side = canvasTex(T, 512, 256, function (x) {
        if (qc) { x.fillStyle = "#050607"; roundRect(x, 130, 120, 120, 46, 22); x.fill(); x.strokeStyle = "rgba(255,255,255,.18)"; x.lineWidth = 3; x.stroke(); x.fillStyle = "#30343a"; roundRect(x, 156, 138, 68, 10, 5); x.fill(); }
        var lx = qc ? 330 : 256, ly = qc ? 110 : 120; var rg = x.createRadialGradient(lx, ly, 2, lx, ly, 40); rg.addColorStop(0, "rgba(190,245,255,1)"); rg.addColorStop(0.25, "rgba(0,212,255,.95)"); rg.addColorStop(1, "rgba(0,212,255,0)"); x.fillStyle = rg; x.beginPath(); x.arc(lx, ly, 40, 0, Math.PI * 2); x.fill();
      });
      var sideM = decal(side, D - 0.2, (D - 0.2) / 2, [W / 2 + 0.002, -0.04, 0], [0, Math.PI / 2, 0]);
      /* Ground: soft shadow and a cyan halo. */
      var shadow = canvasTex(T, 256, 256, function (x) { var rg = x.createRadialGradient(128, 128, 10, 128, 128, 128); rg.addColorStop(0, "rgba(0,0,0,.85)"); rg.addColorStop(0.55, "rgba(0,0,0,.35)"); rg.addColorStop(1, "rgba(0,0,0,0)"); x.fillStyle = rg; x.fillRect(0, 0, 256, 256); });
      var sh = new T.Mesh(new T.PlaneGeometry(W * 1.7, D * 1.9), new T.MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false })); sh.rotation.x = -Math.PI / 2; sh.position.y = -H / 2 - 0.001; g.add(sh);
      var halo = canvasTex(T, 512, 512, function (x) { x.strokeStyle = "rgba(0,212,255,.9)"; x.lineWidth = 3; x.beginPath(); x.ellipse(256, 256, 236, 236, 0, 0, Math.PI * 2); x.stroke(); var rg = x.createRadialGradient(256, 256, 120, 256, 256, 256); rg.addColorStop(0, "rgba(0,212,255,0)"); rg.addColorStop(0.85, "rgba(0,212,255,.12)"); rg.addColorStop(1, "rgba(0,212,255,0)"); x.fillStyle = rg; x.fillRect(0, 0, 512, 512); });
      var ring = new T.Mesh(new T.PlaneGeometry(1.9, 1.9), new T.MeshBasicMaterial({ map: halo, transparent: true, depthWrite: false, blending: T.AdditiveBlending, opacity: 0.55, toneMapped: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = -H / 2 - 0.004; scene.add(ring);
      /* Interaction state. */
      var slowAvg = 0, rm = !!opts.reducedMotion, yaw = VIEWS.hero[0], pitch = VIEWS.hero[1], tYaw = yaw, tPitch = pitch, vel = 0, drag = false, lx = 0, ly = 0, auto = !rm, idleT = 0, raf = 0, alive = true, last = performance.now(), visible = true;
      var down = function (e) { drag = true; lx = e.clientX; ly = e.clientY; vel = 0; cv.style.cursor = "grabbing"; try { cv.setPointerCapture(e.pointerId); } catch (er) {} };
      var kick = function () { if (!raf && alive) loop(); };
      var move = function (e) { if (!drag) return; kick(); var dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; tYaw += dx * 0.009; vel = dx * 0.009; tPitch = Math.max(-0.1, Math.min(1.3, tPitch + dy * 0.006)); idleT = 0; };
      var up = function () { drag = false; cv.style.cursor = "grab"; };
      cv.addEventListener("pointerdown", down); cv.addEventListener("pointermove", move); cv.addEventListener("pointerup", up); cv.addEventListener("pointercancel", up);
      var size = function () { var w = host.clientWidth || 600, h = host.clientHeight || 500; renderer.setSize(w, h, false); cam.aspect = w / h; var dist = w / h < 0.9 ? 4.4 : 3.5; cam.position.set(0, 0.55, dist); cam.lookAt(0, -0.02, 0); cam.updateProjectionMatrix(); };
      var ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(size) : null; if (ro) ro.observe(host); else window.addEventListener("resize", size); size();
      var io = typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible && !raf) loop(); }) : null; if (io) io.observe(host);
      function loop() {
        raf = 0; if (!alive || !visible) return;
        var now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now;
        if (!drag) { if (Math.abs(vel) > 0.0004) { tYaw += vel; vel *= 0.93; } idleT += dt; if (auto && idleT > 2.5) tYaw += dt * 0.32; }
        yaw += (tYaw - yaw) * Math.min(1, dt * 9); pitch += (tPitch - pitch) * Math.min(1, dt * 7);
        g.rotation.set(0, yaw, 0); g.rotation.x = pitch * 0.55; g.position.y = rm ? 0 : Math.sin(now / 1400) * 0.012;
        ring.material.opacity = 0.45 + (rm ? 0 : Math.sin(now / 900) * 0.1);
        var t0 = performance.now(); renderer.render(scene, cam); var ft = performance.now() - t0; slowAvg = slowAvg * 0.9 + ft * 0.1;
        /* Slow GPU (software rendering): stop idle motion and render only on interaction. */
        if (slowAvg > 28 && auto) { auto = false; rm = true; }
        var moving = drag || Math.abs(vel) > 0.0004 || Math.abs(tYaw - yaw) > 0.0005 || Math.abs(tPitch - pitch) > 0.0005 || (auto && !rm) || !rm;
        if (moving) raf = slowAvg > 28 ? setTimeout(function () { requestAnimationFrame(loop); }, 60) : requestAnimationFrame(loop);
      }
      loop();
      if (opts.onReady) try { opts.onReady(); } catch (e) {}
      return {
        setView: function (n) { var v = VIEWS[n]; if (!v) return; var base = Math.round((tYaw - v[0]) / (Math.PI * 2)) * Math.PI * 2; tYaw = base + v[0]; tPitch = v[1]; vel = 0; idleT = -4; if (opts.reducedMotion) { yaw = tYaw; pitch = tPitch; } kick(); },
        setAuto: function (b) { auto = !!b && !rm; },
        destroy: function () { alive = false; cancelAnimationFrame(raf); if (ro) ro.disconnect(); if (io) io.disconnect(); cv.removeEventListener("pointerdown", down); renderer.dispose(); pm.dispose(); try { cv.remove(); } catch (e) {} }
      };
    }).catch(function (e) { if (opts.onFail) opts.onFail(e); throw e; });
  };
})();
