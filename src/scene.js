// ===== Three.js Scene (Casino + Flames) =====

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function createScene(container) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  } catch (e) {
    console.error('WebGL renderer unavailable:', e);
    if (container) {
      container.innerHTML = '<div class="webgl-fallback" '
        + 'style="color:#ffd700;font-family:Orbitron,sans-serif;text-align:center;padding:32px;margin:24px;'
        + 'border:2px solid #7b2d8e;border-radius:18px;background:rgba(26,0,37,0.88);">'
        + '<h2>WebGL unavailable</h2>'
        + '<p style="color:#9980aa;margin-top:8px;">This game requires a browser with WebGL support. '
        + 'Try a recent Chrome, Firefox, or Edge.</p>'
        + '</div>';
    }
    // Return a sentinel so callers can short-circuit cleanly without throwing.
    return null;
  }
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.6;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0418);
  scene.fog = new THREE.FogExp2(0x0d0418, 0.028);

  // === NIGHT SKYBOX (procedural: stars, moon, neon horizon) ===
  // One sphere + one shader: gradient sky, a hash-based star field that
  // twinkles, a soft glowing moon, and a magenta/purple horizon band so the
  // machine sits against a neon-lit casino night instead of a flat void.
  const skyGeo = new THREE.SphereGeometry(40, 48, 48);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    fog: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x1e0b3d) },
      bottomColor: { value: new THREE.Color(0x0d0418) },
      moonColor: { value: new THREE.Color(0xfff2c9) },
      time: { value: 0.0 },
    },
    vertexShader: `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 moonColor;
      uniform float time;
      varying vec3 vWorldPosition;

      float hash21(vec2 p) {
        p = fract(p * vec2(234.34, 435.345));
        p += dot(p, p + 34.23);
        return fract(p.x * p.y);
      }

      void main() {
        vec3 dir = normalize(vWorldPosition);
        float h = dir.y;

        // Vertical gradient (deep purple up top, near-black at the bottom).
        float t = pow(max(h, 0.0), 0.6);
        vec3 col = mix(bottomColor, topColor, t);

        // Neon horizon band — magenta glow hugging the floor line.
        float band = exp(-abs(h) * 12.0) * 0.35 + exp(-abs(h - 0.03) * 40.0) * 0.18;
        col += vec3(0.55, 0.22, 0.75) * band;

        // Star field (upper hemisphere only, hash-based so it's stable and
        // cheap — no texture needed). Each star twinkles on its own phase.
        if (h > 0.03) {
          vec2 uv = vec2(atan(dir.z, dir.x), asin(dir.y)) * 26.0;
          vec2 id = floor(uv);
          float rnd = hash21(id);
          float rnd2 = hash21(id + vec2(17.0, 7.0));
          if (rnd > 0.82) {
            vec2 f = fract(uv) - 0.5;
            float d = length(f);
            float tw = 0.55 + 0.45 * sin(time * (1.0 + rnd2 * 3.0) + rnd2 * 40.0);
            float star = smoothstep(0.20, 0.02, d) * tw * (0.35 + 0.75 * rnd2);
            col += vec3(1.0, 0.95, 0.88) * star;
          }
        }

        // Moon with a soft halo, upper-left of the back wall.
        vec3 moonDir = normalize(vec3(0.45, 0.52, -0.73));
        float md = dot(dir, moonDir);
        float disc = smoothstep(0.9955, 0.9980, md);
        float glow = exp((md - 1.0) * 70.0);
        col += moonColor * disc * 1.5;
        col += vec3(0.85, 0.78, 0.95) * glow * 0.30;

        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const skybox = new THREE.Mesh(skyGeo, skyMat);
  scene.add(skybox);

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(8, 6, 9);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0.6, -0.5);
  controls.enableDamping = true; controls.dampingFactor = 0.08;
  controls.minDistance = 4; controls.maxDistance = 20;
  controls.maxPolarAngle = Math.PI / 2.0; controls.minPolarAngle = Math.PI / 7;
  controls.update();

  // === LIGHTS ===
  scene.add(new THREE.AmbientLight(0x8855cc, 1.4));
  const sun = new THREE.DirectionalLight(0xffeedd, 2.2);
  sun.position.set(5, 10, 4); sun.castShadow = true;
  sun.shadow.mapSize.width = 1024; sun.shadow.mapSize.height = 1024;
  scene.add(sun);
  const fp = new THREE.DirectionalLight(0xddaaff, 1.2);
  fp.position.set(-4, 5, -3); scene.add(fp);
  const fc = new THREE.DirectionalLight(0x44eeff, 0.8);
  fc.position.set(5, 3, -4); scene.add(fc);
  const spot = new THREE.SpotLight(0xffdd88, 1.2, 15, Math.PI / 5, 0.5, 1);
  spot.position.set(0, 7, 2); spot.target.position.set(0, 0, -0.5);
  scene.add(spot); scene.add(spot.target);
  const pSpot = new THREE.SpotLight(0xddaaff, 0.8, 12, Math.PI / 4, 0.5, 1);
  pSpot.position.set(-2, 6, -1); pSpot.target.position.set(0, 0.3, 0);
  scene.add(pSpot); scene.add(pSpot.target);

  // === BACK WALL SPOTLIGHTS (illuminate wall decorations) ===
  const wallSpotLeft = new THREE.SpotLight(0xffd700, 1.5, 10, Math.PI / 6, 0.6, 1);
  wallSpotLeft.position.set(-2, 5, -4); wallSpotLeft.target.position.set(-2, 1.5, -3);
  scene.add(wallSpotLeft); scene.add(wallSpotLeft.target);
  const wallSpotRight = new THREE.SpotLight(0xffd700, 1.5, 10, Math.PI / 6, 0.6, 1);
  wallSpotRight.position.set(2, 5, -4); wallSpotRight.target.position.set(2, 1.5, -3);
  scene.add(wallSpotRight); scene.add(wallSpotRight.target);
  const wallSpotCenter = new THREE.SpotLight(0xffffff, 1.0, 10, Math.PI / 8, 0.4, 1);
  wallSpotCenter.position.set(0, 6, -3); wallSpotCenter.target.position.set(0, 1.5, -3);
  scene.add(wallSpotCenter); scene.add(wallSpotCenter.target);

  // Point lights near wall for local glow
  const wallGlowLeft = new THREE.PointLight(0xffd700, 0.6, 4);
  wallGlowLeft.position.set(-2.5, 2.0, -2.5); scene.add(wallGlowLeft);
  const wallGlowRight = new THREE.PointLight(0xffd700, 0.6, 4);
  wallGlowRight.position.set(2.5, 2.0, -2.5); scene.add(wallGlowRight);
  const wallGlowCenter = new THREE.PointLight(0xffaa44, 0.5, 5);
  wallGlowCenter.position.set(0, 2.5, -2.5);  scene.add(wallGlowCenter);

  // A single pooled particle field keeps the room alive without creating a
  // mesh per sparkle. Important events briefly amplify the same glow so wins
  // feel like the whole arcade noticed them.
  const eventGlow = new THREE.PointLight(0xff4fd8, 0.35, 7);
  eventGlow.position.set(0, 2.4, 0.8);
  scene.add(eventGlow);
  const eventPulse = { strength: 0, color: new THREE.Color(0xff4fd8) };

  // === GOILDEN PILLARS WITH TORCH FLAMES ===
  const flameData = [];
  const pillarPositions = [[-6, 4], [6, 4], [-6, -2], [6, -2], [-6, -5], [6, -5]];

  pillarPositions.forEach(([px, pz]) => {
    // Pillar body (golden casino style)
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x886633, roughness: 0.25, metalness: 0.85,
      emissive: 0x553300, emissiveIntensity: 0.1,
    });
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 3.5, 8), pillarMat);
    pillar.position.set(px, 1.75, pz); pillar.castShadow = true;
    scene.add(pillar);

    // Capital (golden ornate top)
    const capMat = new THREE.MeshStandardMaterial({
      color: 0xddaa33, roughness: 0.15, metalness: 0.9,
      emissive: 0xaa7700, emissiveIntensity: 0.3,
    });
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.35, 0.25, 8), capMat);
    cap.position.set(px, 3.6, pz);
    scene.add(cap);
    // Base
    const baseCap = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.42, 0.15, 8), capMat);
    baseCap.position.set(px, 0.05, pz);
    scene.add(baseCap);

    // === FLAME on top (torch style) ===
    // Torch holder
    const torchMat = new THREE.MeshStandardMaterial({ color: 0x664422, roughness: 0.7, metalness: 0.6 });
    const torch = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.06, 0.3, 6), torchMat);
    torch.position.set(px, 3.85, pz);
    scene.add(torch);

    // Outer flame (orange glow)
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xff6600, emissive: 0xff4400, emissiveIntensity: 2.5,
      transparent: true, opacity: 0.7,
    });
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.5, 6), flameMat.clone());
    flame.position.set(px, 4.15, pz);
    scene.add(flame);

    // Inner flame (bright yellow-white)
    const innerFlameMat = new THREE.MeshStandardMaterial({
      color: 0xffee44, emissive: 0xffff88, emissiveIntensity: 4.0,
      transparent: true, opacity: 0.85,
    });
    const innerFlame = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.3, 6), innerFlameMat.clone());
    innerFlame.position.set(px, 4.1, pz);
    scene.add(innerFlame);

    // Core (white-hot)
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
    const core = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.12, 4), coreMat.clone());
    core.position.set(px, 4.05, pz);
    scene.add(core);

    // Point light for flame (warm, bright)
    const flameLight = new THREE.PointLight(0xff6600, 1.0, 5);
    flameLight.position.set(px, 4.2, pz);
    scene.add(flameLight);

    // Store for animation
    flameData.push({
      outer: flame,
      inner: innerFlame,
      core,
      light: flameLight,
      baseY: 4.15,
      phase: Math.random() * Math.PI * 2,
      pos: { x: px, z: pz },
    });
  });

  // === FLOATING CASINO LIGHTS (ceiling pendant style) ===
  const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffcc44, transparent: true, opacity: 0.2 });
  const lanterns = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 5.5 + Math.random() * 2.5;
    const height = 3.0 + Math.random() * 2.0;
    const lx = Math.cos(angle) * radius;
    const lz = Math.sin(angle) * radius - 1;
    const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), lanternMat);
    lantern.position.set(lx, height, lz);
    scene.add(lantern);
    // Glow light
    const glow = new THREE.PointLight(0xffcc44, 0.15, 2.0);
    glow.position.copy(lantern.position);
    scene.add(glow);
    lanterns.push({ mesh: lantern, light: glow, angle, radius, baseHeight: height, phase: Math.random() * Math.PI * 2 });
  }

  // === BACKGROUND STARS / SPARKLES ===
  const starMat = new THREE.PointsMaterial({
    color: 0xddbbff, size: 0.04, transparent: true, opacity: 0.6,
    blending: THREE.AdditiveBlending,
  });
  const starGeo = new THREE.BufferGeometry();
  const starPos = new Float32Array(600 * 3);
  for (let i = 0; i < 600; i++) {
    starPos[i*3]   = (Math.random() - 0.5) * 40;
    starPos[i*3+1] = Math.random() * 15;
    starPos[i*3+2] = (Math.random() - 0.5) * 40 - 5;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // Floating prism dust / magical arcade motes. Positions are deterministic
  // after creation and reused every frame, keeping this to one draw call.
  const moteCount = 240;
  const moteGeo = new THREE.BufferGeometry();
  const motePos = new Float32Array(moteCount * 3);
  const moteColor = new Float32Array(moteCount * 3);
  const motePhase = new Float32Array(moteCount);
  const moteSpeed = new Float32Array(moteCount);
  for (let i = 0; i < moteCount; i++) {
    const i3 = i * 3;
    motePos[i3] = (Math.random() - 0.5) * 14;
    motePos[i3 + 1] = 0.35 + Math.random() * 5.2;
    motePos[i3 + 2] = (Math.random() - 0.5) * 13 - 1;
    moteColor[i3] = 0.7 + Math.random() * 0.3;
    moteColor[i3 + 1] = 0.25 + Math.random() * 0.55;
    moteColor[i3 + 2] = 0.8 + Math.random() * 0.2;
    motePhase[i] = Math.random() * Math.PI * 2;
    moteSpeed[i] = 0.08 + Math.random() * 0.18;
  }
  moteGeo.setAttribute('position', new THREE.BufferAttribute(motePos, 3));
  moteGeo.setAttribute('color', new THREE.BufferAttribute(moteColor, 3));
  const moteMat = new THREE.PointsMaterial({
    size: 0.055, vertexColors: true, transparent: true, opacity: 0.62,
    blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const motes = new THREE.Points(moteGeo, moteMat);
  scene.add(motes);

  // === GROUND (polished casino floor with checkered marble pattern) ===
  function createFloorTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Base dark marble
    const gradient = ctx.createRadialGradient(512, 512, 0, 512, 512, 720);
    gradient.addColorStop(0, '#120820');
    gradient.addColorStop(1, '#0a0515');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1024, 1024);

    // Checkered tiles
    const tiles = 8;
    const tileSize = 1024 / tiles;
    for (let x = 0; x < tiles; x++) {
      for (let y = 0; y < tiles; y++) {
        if ((x + y) % 2 === 0) {
          ctx.fillStyle = 'rgba(30, 15, 50, 0.35)';
          ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
      }
    }

    // Gold grout lines
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.12)';
    ctx.lineWidth = 2;
    for (let i = 0; i <= tiles; i++) {
      ctx.beginPath();
      ctx.moveTo(i * tileSize, 0);
      ctx.lineTo(i * tileSize, 1024);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tileSize);
      ctx.lineTo(1024, i * tileSize);
      ctx.stroke();
    }

    // Subtle noise
    for (let i = 0; i < 5000; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03})`;
      ctx.fillRect(Math.random() * 1024, Math.random() * 1024, 2, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }

  const floorTexture = createFloorTexture();
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 40),
    new THREE.MeshStandardMaterial({
      map: floorTexture,
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.45,
      emissive: 0x110822,
      emissiveIntensity: 0.15,
    })
  );
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.1; ground.receiveShadow = true;
  scene.add(ground);

  // Ground grid lines for casino floor feel
  const gridMat = new THREE.MeshBasicMaterial({ color: 0xcc88ff, transparent: true, opacity: 0.08 });
  for (let i = -10; i <= 10; i++) {
    const lineH = new THREE.Mesh(new THREE.BoxGeometry(40, 0.003, 0.015), gridMat);
    lineH.position.set(0, -0.09, i * 2);
    scene.add(lineH);
    const lineV = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.003, 40), gridMat);
    lineV.position.set(i * 2, -0.09, 0);
    scene.add(lineV);
  }

  // === CASINO FLOOR CIRCLE (under machine) ===
  const floorCircle = new THREE.Mesh(
    new THREE.RingGeometry(4.0, 4.2, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.08, side: THREE.DoubleSide })
  );
  floorCircle.rotation.x = -Math.PI / 2; floorCircle.position.set(0, -0.08, 0);
  scene.add(floorCircle);

  // === NEON LEDS around machine (casino colors) ===
  [[-4.5, 1.2, -3, 0xffd700], [4.5, 1.2, -3, 0xffd700],
   [-4.5, 1.2, 2, 0xff4466], [4.5, 1.2, 2, 0x00ff88],
   [-3.0, 0.5, -3, 0x44eeff], [3.0, 0.5, -3, 0xff8844]].forEach(([x, y, z, color]) => {
    const led = new THREE.PointLight(color, 0.7, 4);
    led.position.set(x, y, z); scene.add(led);
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color }));
    s.position.copy(led.position); scene.add(s);
  });

  // === ATMOSPHERIC HAZE ===
  // Each smoke plane is animated in updateAmbient() below — slow vertical
  // rise + horizontal sway gives the room a "living" feel without breaking
  // the moody vibe.
  const smokeMat = new THREE.MeshBasicMaterial({
    color: 0x440066, transparent: true, opacity: 0.04,
    side: THREE.DoubleSide,
  });
  const smokeData = [];
  for (let i = 0; i < 6; i++) {
    const smoke = new THREE.Mesh(new THREE.PlaneGeometry(3 + Math.random() * 2, 0.3), smokeMat);
    const baseY = 0.05 + Math.random() * 0.1;
    smoke.position.set(
      (Math.random() - 0.5) * 8,
      baseY,
      (Math.random() - 0.5) * 8 - 1
    );
    smoke.rotation.y = Math.random() * Math.PI * 2;
    scene.add(smoke);
    smokeData.push({
      mesh: smoke,
      baseY,
      baseX: smoke.position.x,
      phase: Math.random() * Math.PI * 2,
    });
  }

  // === RESIZE ===
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let moteUpdateAccumulator = 0;

  // Return animation data
  return {
    scene, camera, renderer, controls,
    flameData,
    lanterns,
    smokeData,
    pulseEvent(type = 'win') {
      const colors = {
        win: 0x39f7ff,
        bigwin: 0xffd84d,
        jackpot: 0xff4fd8,
        lose: 0xff3e83,
      };
      eventPulse.color.set(colors[type] || colors.win);
      eventPulse.strength = type === 'jackpot' ? 2.4 : (type === 'bigwin' ? 1.35 : 0.75);
    },
    updateAmbient(time, dt = 1 / 60) {
      // Skybox time uniform drives star twinkle + any future sky animation.
      skyMat.uniforms.time.value = time;
      // Star-field twinkle: oscillate the master material opacity for the
      // 600-point star cloud so the night sky "breathes" without needing
      // a per-point material (which would balloon shader compile cost).
      const twinkle = 0.42 + 0.32 * Math.sin(time * 0.6);
      starMat.opacity = twinkle;
      // Slow color shift between warm purple and cool cyan \u2014 three.js
      // PointsMaterial doesn't support vertexwise color per-frame, but a
      // gentle color lerp reads as "twinkling" enough on a dense cloud.
      const warmth = 0.5 + 0.5 * Math.sin(time * 0.35 + 1.0);
      starMat.color.setRGB(
        0.78 + warmth * 0.10,         // R: 0.78 \u2192 0.88
        0.66 + (1 - warmth) * 0.10,   // G: 0.66 \u2192 0.76
        0.95                         // B: constant cool tint
      );

      // Atmospheric haze drift: each plane rises slowly and sways side
      // to side. Keeps the room visibly "alive" without distracting from
      // the play surface.
      for (const s of smokeData) {
        s.mesh.position.y = s.baseY + Math.sin(time * 0.4 + s.phase) * 0.18;
        s.mesh.position.x = s.baseX + Math.sin(time * 0.25 + s.phase * 1.7) * 0.35;
      }

      // Motes drift upward in lazy arcs; upload the shared buffer at 30Hz
      // rather than forcing a GPU transfer on every render frame.
      moteUpdateAccumulator += dt;
      if (moteUpdateAccumulator >= 1 / 30) {
        const moteStep = moteUpdateAccumulator;
        moteUpdateAccumulator = 0;
        const positions = moteGeo.attributes.position.array;
        for (let i = 0; i < moteCount; i++) {
          const i3 = i * 3;
          positions[i3 + 1] += moteSpeed[i] * moteStep * 0.24;
          positions[i3] += Math.sin(time * 0.45 + motePhase[i]) * moteStep * 0.05;
          if (positions[i3 + 1] > 5.8) positions[i3 + 1] = 0.25;
        }
        moteGeo.attributes.position.needsUpdate = true;
      }
      moteMat.opacity = 0.42 + 0.20 * (0.5 + 0.5 * Math.sin(time * 0.9));

      // Event light decays smoothly so a jackpot produces a satisfying flash
      // without strobing or changing the scene's baseline exposure.
      eventPulse.strength *= Math.exp(-4.5 * dt);
      eventGlow.color.copy(eventPulse.color);
      eventGlow.intensity = 0.35 + eventPulse.strength;
      eventGlow.distance = 7 + eventPulse.strength * 2;
    },
    updateFlames(time) {
      for (const f of flameData) {
        const flicker = 0.5 + 0.5 * Math.sin(time * 8 + f.phase);
        const flicker2 = 0.4 + 0.6 * Math.sin(time * 11 + f.phase * 1.3);
        const intensity = flicker * flicker2;
        f.outer.material.emissiveIntensity = 1.5 + 2.5 * intensity;
        f.outer.material.opacity = 0.4 + 0.4 * intensity;
        f.inner.material.emissiveIntensity = 2.5 + 4.0 * intensity;
        f.light.intensity = 0.6 + 0.8 * intensity;
        // Flame waver
        f.outer.position.x = f.pos.x + Math.sin(time * 6 + f.phase) * 0.04;
        f.outer.position.z = f.pos.z + Math.cos(time * 8 + f.phase) * 0.04;
        f.outer.scale.x = 0.9 + 0.2 * Math.sin(time * 5 + f.phase * 0.7);
        f.outer.scale.z = 0.9 + 0.2 * Math.cos(time * 7 + f.phase);
        f.outer.scale.y = 0.8 + 0.4 * Math.sin(time * 9 + f.phase);
        f.inner.position.copy(f.outer.position);
        f.inner.position.y = f.baseY + Math.sin(time * 6 + f.phase) * 0.04;
        if (f.core) {
          f.core.position.copy(f.inner.position);
          f.core.position.y = f.baseY - 0.1 + Math.sin(time * 10 + f.phase) * 0.02;
          f.core.material.opacity = 0.3 + 0.5 * intensity;
        }
        f.light.position.copy(f.outer.position);
        f.light.position.y = 4.2;
      }
      // Lantern gentle bob
      for (const l of lanterns) {
        l.mesh.position.y = l.baseHeight + Math.sin(time * 0.5 + l.phase) * 0.08;
        l.light.position.y = l.mesh.position.y;
      }
    },
  };
}
