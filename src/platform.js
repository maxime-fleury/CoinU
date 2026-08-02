// ===== Coin Pusher 3D Platform (Cool Casino Wall + Moving Mechanism) =====

import * as THREE from 'three';

export function createPlatform(scene) {
  const group = new THREE.Group();
  const W = 7, D = 6, H = 0.5;

  const surfaceY = H + 0.04;
  const playBack = -D / 2 + 0.25;
  const playFront = D / 2 - 1.4;
  // Back wall pushed well clear of the pusher shelf: the shelf retracts to
  // SHELF_NEUTRAL_Z - SHELF_DEPTH/2 - SHELF_AMPLITUDE and used to punch
  // straight through the back glass. This keeps the mechanism fully inside.
  const wallBack = -D / 2 - 1.05;
  const leftEdge = -W / 2 + 0.3;
  const rightEdge = W / 2 - 0.3;
  const centerX = 0;

  // === CABINET BASE ===
  // Real coin pusher machines have a solid cabinet with tapered/profiled sides.
  const cabMat = new THREE.MeshStandardMaterial({ color: 0x1a0835, roughness: 0.5, metalness: 0.6, emissive: 0x0a0420, emissiveIntensity: 0.12 });
  const cabDarkMat = new THREE.MeshStandardMaterial({ color: 0x0e0420, roughness: 0.6, metalness: 0.5, emissive: 0x050210, emissiveIntensity: 0.08 });

  // Main cabinet body — wider at bottom like real machines
  const cabBottom = new THREE.Mesh(new THREE.BoxGeometry(W + 0.8, H * 0.4, D + 0.6), cabDarkMat);
  cabBottom.position.set(0, H * 0.2, 0.1); cabBottom.castShadow = true; cabBottom.receiveShadow = true;
  group.add(cabBottom);

  // Mid cabinet — slightly narrower, creating a stepped profile
  const cabMid = new THREE.Mesh(new THREE.BoxGeometry(W + 0.5, H * 0.35, D + 0.3), cabMat);
  cabMid.position.set(0, H * 0.55, 0.05); cabMid.castShadow = true; cabMid.receiveShadow = true;
  group.add(cabMid);

  // Top cabinet (playing field base) — full width
  const cabTop = new THREE.Mesh(new THREE.BoxGeometry(W, H * 0.25, D), cabMat);
  cabTop.position.set(0, H * 0.85, 0); cabTop.castShadow = true; cabTop.receiveShadow = true;
  group.add(cabTop);

  // Gold trim strips between cabinet tiers
  const trimMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.15, metalness: 0.92, emissive: 0x886600, emissiveIntensity: 0.2 });
  const trimW = W + 0.65;
  const trim1 = new THREE.Mesh(new THREE.BoxGeometry(trimW, 0.05, D + 0.45), trimMat);
  trim1.position.set(0, H * 0.4, 0.08); group.add(trim1);
  const trim2 = new THREE.Mesh(new THREE.BoxGeometry(W + 0.25, 0.05, D + 0.15), trimMat);
  trim2.position.set(0, H * 0.7, 0.03); group.add(trim2);

  // === FELT PLAYING SURFACE (full depth, flat, no gaps) ===
  const feltMat = new THREE.MeshStandardMaterial({ color: 0x3a1a55, roughness: 0.95, metalness: 0.02, emissive: 0x1a0a30, emissiveIntensity: 0.25 });
  const felt = new THREE.Mesh(new THREE.BoxGeometry(W - 0.5, 0.04, D), feltMat);
  felt.position.set(0, H + 0.02, 0); felt.receiveShadow = true;
  group.add(felt);

  // === PUSHER SHELF CONSTANTS ===
  const SHELF_DEPTH = 3.2;
  const SHELF_NEUTRAL_Z = -1.2;
  const SHELF_AMPLITUDE = 0.9;
  const SHELF_SPEED = 1.2;
  const SHELF_THICKNESS = 0.08;
  const SHELF_TOP = surfaceY + SHELF_THICKNESS;
  const SLOT_CENTER_Z = -1.5;
  const SLOT_DEPTH = 0.45;
  const SLOT_WIDTH = 0.5;
  const SLOT_BACK_Z = SLOT_CENTER_Z - SLOT_DEPTH / 2;
  const SLOT_FRONT_Z = SLOT_CENTER_Z + SLOT_DEPTH / 2;
  const SHELF_FRONT_EDGE_Z = SHELF_NEUTRAL_Z + SHELF_DEPTH / 2;
  const SHELF_BACK_EDGE_Z = SHELF_NEUTRAL_Z - SHELF_DEPTH / 2;
  const DROP_SLOT_Z = SLOT_CENTER_Z;

  // === DROP SLOT (static ring marking where coins enter) ===
  const slotMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 1.5, transparent: true, opacity: 0.6, side: THREE.DoubleSide });
  const slotRing = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.4, 20, 1), slotMat);
  slotRing.position.set(0, H + 0.03, DROP_SLOT_Z); slotRing.rotation.x = -Math.PI / 2;
  group.add(slotRing);

  // === MOVING DROP MECHANISM (rail + slider + beam) ===
  const mechGroup = new THREE.Group();
  const railY = H + 2.8;
  const railSpan = rightEdge - 0.3;
  const mechZ = DROP_SLOT_Z;

  const railMat = new THREE.MeshStandardMaterial({ color: 0x6655aa, roughness: 0.3, metalness: 0.8, emissive: 0x4422aa, emissiveIntensity: 0.2 });
  const rail = new THREE.Mesh(new THREE.BoxGeometry(railSpan * 2 + 0.5, 0.04, 0.04), railMat);
  rail.position.set(0, railY, mechZ);
  mechGroup.add(rail);

  const capMat = new THREE.MeshStandardMaterial({ color: 0x8877cc, roughness: 0.2, metalness: 0.9, emissive: 0x6644aa, emissiveIntensity: 0.3 });
  for (const side of [-1, 1]) {
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), capMat);
    cap.position.set(side * (railSpan + 0.25), railY, mechZ);
    mechGroup.add(cap);
  }

  const sliderMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 2.0 });
  const slider = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), sliderMat);
  slider.position.set(0, railY, mechZ);
  mechGroup.add(slider);

  const innerSliderMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 });
  const innerSlider = new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 0), innerSliderMat);
  innerSlider.position.set(0, railY, mechZ);
  mechGroup.add(innerSlider);

  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xcc88ff, transparent: true, opacity: 0.08,
    side: THREE.DoubleSide,
  });
  const beam = new THREE.Mesh(new THREE.BoxGeometry(0.02, railY - H, 0.02), beamMat);
  beam.position.set(0, H + (railY - H) / 2, mechZ);
  mechGroup.add(beam);

  const targetMat = new THREE.MeshBasicMaterial({
    color: 0xcc88ff, transparent: true, opacity: 0.15, side: THREE.DoubleSide,
  });
  const target = new THREE.Mesh(new THREE.RingGeometry(0.1, 0.25, 16, 1), targetMat);
  target.rotation.x = -Math.PI / 2;
  target.position.set(0, H + 0.02, mechZ);
  mechGroup.add(target);

  const mechParts = { slider, innerSlider, beam, target, railY, railSpan };

  group.add(mechGroup);

  // === PUSHER SHELF (oscillates back→front to push coins) ===
  const shelfGroup = new THREE.Group();
  const shelfMat = new THREE.MeshStandardMaterial({ color: 0x3a2060, roughness: 0.4, metalness: 0.6, emissive: 0x1a0a30, emissiveIntensity: 0.3 });
  const shelfEdgeMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, roughness: 0.2, metalness: 0.8, emissive: 0xaa44ff, emissiveIntensity: 0.6 });
  const shelfBackMat = new THREE.MeshStandardMaterial({ color: 0x443388, roughness: 0.3, metalness: 0.7, emissive: 0x221166, emissiveIntensity: 0.4 });

  const leftW = (rightEdge - leftEdge) / 2 - SLOT_WIDTH / 2;
  const shelfLeft = new THREE.Mesh(new THREE.BoxGeometry(leftW, SHELF_THICKNESS, SHELF_DEPTH), shelfMat);
  shelfLeft.position.set(-(SLOT_WIDTH / 2 + leftW / 2), surfaceY + SHELF_THICKNESS / 2, SHELF_NEUTRAL_Z);
  shelfLeft.castShadow = true; shelfLeft.receiveShadow = true;
  shelfGroup.add(shelfLeft);

  const shelfRight = new THREE.Mesh(new THREE.BoxGeometry(leftW, SHELF_THICKNESS, SHELF_DEPTH), shelfMat);
  shelfRight.position.set(SLOT_WIDTH / 2 + leftW / 2, surfaceY + SHELF_THICKNESS / 2, SHELF_NEUTRAL_Z);
  shelfRight.castShadow = true; shelfRight.receiveShadow = true;
  shelfGroup.add(shelfRight);

  const fullW = rightEdge - leftEdge;
  const frontEdgeH = SHELF_THICKNESS + 0.06;
  const shelfFront = new THREE.Mesh(new THREE.BoxGeometry(fullW, frontEdgeH, 0.06), shelfEdgeMat);
  shelfFront.position.set(0, surfaceY + frontEdgeH / 2, SHELF_NEUTRAL_Z + SHELF_DEPTH / 2);
  shelfGroup.add(shelfFront);

  const backWallHeight = SHELF_THICKNESS + 0.22;
  const backWallY = surfaceY + backWallHeight / 2;
  const shelfBack = new THREE.Mesh(new THREE.BoxGeometry(fullW, backWallHeight, 0.06), shelfBackMat);
  shelfBack.position.set(0, backWallY, SHELF_NEUTRAL_Z - SHELF_DEPTH / 2);
  shelfBack.castShadow = true;
  shelfGroup.add(shelfBack);

  for (const side of [-1, 1]) {
    const sideH = SHELF_THICKNESS + 0.12;
    const sideW = new THREE.Mesh(new THREE.BoxGeometry(0.06, sideH, SHELF_DEPTH), shelfBackMat);
    sideW.position.set(side * (fullW / 2), surfaceY + sideH / 2, SHELF_NEUTRAL_Z);
    shelfGroup.add(sideW);
  }

  const shelfNeonMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 1.5 });
  const shelfNeon = new THREE.Mesh(new THREE.BoxGeometry(fullW, 0.02, 0.02), shelfNeonMat);
  shelfNeon.position.set(0, surfaceY + SHELF_THICKNESS + 0.01, SHELF_NEUTRAL_Z + SHELF_DEPTH / 2 + 0.02);
  shelfGroup.add(shelfNeon);

  group.add(shelfGroup);

  let shelfZ = SHELF_NEUTRAL_Z;
  let prevShelfZ = SHELF_NEUTRAL_Z;
  let shelfVelocity = 0;
  let prevMechTime = -1;

  // ============================================================
  // COOL CASINO BACK WALL (Casual Innovation!)
  // ============================================================
  const wallH = 2.8;

  // Base — dark velvet backdrop that became transparent: a single plain
  // MeshStandardMaterial with low opacity is the reliable choice over mixing
  // `transmission` + `opacity` (which muddy the result). Three.js sorts the
  // glow plane / back glass / wall by camera distance; the explicit renderOrder
  // below locks the layering so rotating the camera doesn't cause sort flicker.
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x2a1466,
    roughness: 0.4,
    metalness: 0.0,
    transparent: true,
    opacity: 0.20,
    side: THREE.DoubleSide,
    emissive: 0x0a0420,
    emissiveIntensity: 0.18,
    depthWrite: false,
  });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(W + 0.3, wallH, 0.20), wallMat);
  backWall.position.set(0, H + wallH / 2, wallBack);
  backWall.castShadow = false;   // No solid shadow from a near-invisible wall.
  backWall.receiveShadow = false;
  backWall.renderOrder = 1;
  group.add(backWall);

  // Soft inner glow plane sits just in front of the wall so decorations still
  // read against the dark backdrop — preserves the "casino" feel even though
  // the wall is now see-through.
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x9b59b6,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const glowPlane = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.25, wallH - 0.1), glowMat);
  glowPlane.position.set(0, H + wallH / 2, wallBack + 0.12);

  // Base neon strip along the bottom of the wall — a clean magenta accent.
  const baseNeonMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 2.0 });
  const baseNeon = new THREE.Mesh(new THREE.BoxGeometry(W + 0.15, 0.03, 0.03), baseNeonMat);
  baseNeon.position.set(0, H + 0.12, wallBack + 0.14);
  group.add(baseNeon);
  glowPlane.renderOrder = 2;
  group.add(glowPlane);

  // === NEON GOLD FRAME around the entire back wall ===
  const frameGoldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffaa00, emissiveIntensity: 2.2 });
  const fT = 0.06;
  const fW = W + 0.25;
  const fH = wallH + 0.1;
  // top + bottom rails
  [{ x: 0, y: H + wallH + 0.07, w: fW }, { x: 0, y: H - 0.06, w: fW }].forEach(({ x, y, w }) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, fT, fT), frameGoldMat);
    m.position.set(x, y, wallBack + 0.11);
    group.add(m);
  });
  // left + right rails
  [{ x: -fW / 2 + fT / 2 }, { x: fW / 2 - fT / 2 }].forEach(({ x }) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(fT, fH, fT), frameGoldMat);
    m.position.set(x, H + wallH / 2, wallBack + 0.11);
    group.add(m);
  });

  // === HERO $ COIN — huge central coin that slowly rotates ===
  // Built in a group so we can rotate everything together.
  const heroCoinGroup = new THREE.Group();
  heroCoinGroup.position.set(0, H + 1.30, wallBack + 0.13);
  group.add(heroCoinGroup);

  const heroCoinMat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xc88a00, emissiveIntensity: 1.4, roughness: 0.12, metalness: 0.95 });
  // Main coin body (cylinder rotated to face player)
  const heroCoin = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 0.16, 32), heroCoinMat);
  heroCoin.rotation.z = Math.PI / 2;
  heroCoinGroup.add(heroCoin);
  // Two concentric rings on the face for detail
  const heroRingMat = new THREE.MeshStandardMaterial({ color: 0xfff4a3, emissive: 0xffd700, emissiveIntensity: 1.8 });
  const heroRingOuter = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.025, 8, 32), heroRingMat);
  heroRingOuter.rotation.y = Math.PI / 2;
  heroRingOuter.position.z = 0.085;
  heroCoinGroup.add(heroRingOuter);
  const heroRingInner = new THREE.Mesh(new THREE.TorusGeometry(0.50, 0.02, 8, 24), heroRingMat);
  heroRingInner.rotation.y = Math.PI / 2;
  heroRingInner.position.z = 0.090;
  heroCoinGroup.add(heroRingInner);
  // $ on FRONT face (z = +0.085)
  const dollarMat = new THREE.MeshStandardMaterial({ color: 0xfff4a3, emissive: 0xffd700, emissiveIntensity: 2.6 });
  const dV = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.60, 0.04), dollarMat);
  dV.position.set(0, 0, 0.090);
  heroCoinGroup.add(dV);
  const dT = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.04), dollarMat);
  dT.position.set(0, 0.22, 0.090);
  heroCoinGroup.add(dT);
  const dB = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.04), dollarMat);
  dB.position.set(0, -0.22, 0.090);
  heroCoinGroup.add(dB);
  const dS1 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.04), dollarMat);
  dS1.position.set(-0.04, 0.07, 0.090);
  heroCoinGroup.add(dS1);
  const dS2 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.04), dollarMat);
  dS2.position.set(0.04, -0.07, 0.090);
  heroCoinGroup.add(dS2);
  // $ mirrored on BACK face (z = -0.090) so both sides look correct when spinning.
  // Only the diagonal S-segments need mirroring — the vertical and horizontal bars
  // (dV/dT/dB) are symmetric around y=0 so the front $ already reads from both sides.
  [-0.090].forEach((z) => {
    const bs1 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.04), dollarMat);
    bs1.position.set(-dS1.position.x, -dS1.position.y, z);
    heroCoinGroup.add(bs1);
    const bs2 = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.04), dollarMat);
    bs2.position.set(-dS2.position.x, -dS2.position.y, z);
    heroCoinGroup.add(bs2);
  });
  // === "COIN PUSHER" NEON MARQUEE — a proper backlit arcade sign ===
  // Replaces the old blocky $ glyphs and scattered bulb-chase: a canvas-textured
  // sign (gold gradient + glow) hanging between the columns, gently breathing.
  function makeMarqueeTexture() {
    const W = 1024, H = 224;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    // Outer gold frame
    const frame = ctx.createLinearGradient(0, 0, 0, H);
    frame.addColorStop(0, '#ffe9a3'); frame.addColorStop(0.5, '#ffd700'); frame.addColorStop(1, '#b8860b');
    ctx.fillStyle = frame;
    ctx.fillRect(0, 0, W, H);
    // Inner dark panel
    ctx.fillStyle = '#150527';
    ctx.fillRect(14, 14, W - 28, H - 28);
    // Inner gold hairline
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.55)'; ctx.lineWidth = 3;
    ctx.strokeRect(26, 26, W - 52, H - 52);
    // Neon text
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = '900 104px Orbitron, Arial, sans-serif';
    const tg = ctx.createLinearGradient(0, H * 0.25, 0, H * 0.85);
    tg.addColorStop(0, '#fff8d0'); tg.addColorStop(0.45, '#ffd700'); tg.addColorStop(1, '#e8930c');
    ctx.shadowColor = 'rgba(255, 200, 40, 0.95)'; ctx.shadowBlur = 34;
    ctx.fillStyle = tg;
    ctx.fillText('COIN PUSHER', W / 2, H / 2 + 4);
    ctx.shadowBlur = 0;
    // Sparkle accents at the ends
    ctx.fillStyle = 'rgba(255, 215, 0, 0.9)';
    ctx.font = '900 58px Orbitron, Arial, sans-serif';
    ctx.fillText('✦', 82, H / 2 + 2);
    ctx.fillText('✦', W - 82, H / 2 + 2);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }
  const marqueeMat = new THREE.MeshBasicMaterial({
    map: makeMarqueeTexture(), transparent: true,
    side: THREE.DoubleSide, toneMapped: false,
  });
  const marquee = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 0.72), marqueeMat);
  marquee.position.set(0, H + 2.95, wallBack + 0.13);
  group.add(marquee);

  // === SIDE COLUMNS — gold pillars with chip stacks + glowing orb on top ===
  // Placed at ±2.55 so they flank the new marquee sign instead of poking
  // through it (they used to sit at ±1.65, straight through the sign plane).
  const sideColumns = [];
  [-2.55, 2.55].forEach((sx, idx) => {
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.18, metalness: 0.92, emissive: 0xcc8800, emissiveIntensity: 0.7 });
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 2.2, 12), pillarMat);
    pillar.position.set(sx, H + 1.30, wallBack + 0.13);
    group.add(pillar);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.18, 12), pillarMat);
    cap.position.set(sx, H + 2.50, wallBack + 0.13);
    group.add(cap);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.12, 12), pillarMat);
    base.position.set(sx, H + 0.25, wallBack + 0.13);
    group.add(base);
    // Glowing orb on top
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.10, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffe680, transparent: true, opacity: 0.85 }));
    orb.position.set(sx, H + 2.7, wallBack + 0.13);
    group.add(orb);
    // Chip stack beside the column base
    const chipColors = [0xff2244, 0x44ff88, 0x4488ff, 0xffaa22, 0xcc66ff];
    for (let i = 0; i < 5; i++) {
      const chipMat = new THREE.MeshStandardMaterial({ color: chipColors[i % chipColors.length], emissive: chipColors[i % chipColors.length], emissiveIntensity: 0.45, roughness: 0.3, metalness: 0.5 });
      const chip = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.045, 12), chipMat);
      chip.position.set(sx + (idx === 0 ? -0.4 : 0.4), H + 0.40 + i * 0.05, wallBack + 0.16);
      group.add(chip);
    }
    sideColumns.push({ orb, phase: idx * 0.5 });
  });

  // === LARGE SIDE $ GLYPHS — giant $ decorations on the corners ===
  [-3.25, 3.25].forEach((sx) => {
    const bigDollar = new THREE.Group();
    bigDollar.position.set(sx, H + 2.05, wallBack + 0.13);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xffaa00, emissiveIntensity: 2.2 });
    const bv = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.78, 0.05), mat);
    bigDollar.add(bv);
    const bt = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.05), mat);
    bt.position.y = 0.28;
    bigDollar.add(bt);
    const bb = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.08, 0.05), mat);
    bb.position.y = -0.28;
    bigDollar.add(bb);
    const bs1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.05), mat);
    bs1.position.set(-0.05, 0.10, 0);
    bigDollar.add(bs1);
    const bs2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.05), mat);
    bs2.position.set(0.05, -0.10, 0);
    bigDollar.add(bs2);
    group.add(bigDollar);
  });

  // (Roulette wheel + dice decorations removed — they floated loosely on the
  // wall and read as noise. The marquee, hero coin, pillars and corner $
  // glyphs carry the casino wall now.)

  // === ANIMATION TARGETS — picked up by updateMechanism() each frame ===
  group.userData = group.userData || {};
  group.userData.wallAnims = {
    heroCoinGroup,
    sideColumns,
    frameGoldMat,
    marquee,
  };

  // === CABINET SIDE PANELS (thick, styled like real arcade machine sides) ===
  const sidePanelMat = new THREE.MeshStandardMaterial({ color: 0x1a0835, roughness: 0.4, metalness: 0.7, emissive: 0x0a0420, emissiveIntensity: 0.1 });
  const sideTrimMat = new THREE.MeshStandardMaterial({ color: 0x332266, roughness: 0.25, metalness: 0.9, emissive: 0x221155, emissiveIntensity: 0.2 });

  const sideH = 3.2; // Height of side panels

  [-W / 2 - 0.25, W / 2 + 0.25].forEach((wx, idx) => {
    // Main side panel body
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.4, sideH, D + 0.4), sidePanelMat);
    panel.position.set(wx, H + sideH / 2, 0);
    panel.castShadow = true;
    group.add(panel);

    // Beveled edge strip on front of each side panel (gives depth)
    const edgeStrip = new THREE.Mesh(new THREE.BoxGeometry(0.42, sideH, 0.05), sideTrimMat);
    edgeStrip.position.set(wx, H + sideH / 2, D / 2 + 0.15);
    group.add(edgeStrip);

    // Gold accent stripe running vertically along the front edge
    const goldStrip = new THREE.Mesh(new THREE.BoxGeometry(0.44, sideH * 0.8, 0.03),
      new THREE.MeshStandardMaterial({ color: 0xffd700, emissive: 0xaa7700, emissiveIntensity: 0.3, metalness: 0.92, roughness: 0.15 }));
    goldStrip.position.set(wx, H + sideH * 0.6, D / 2 + 0.16);
    group.add(goldStrip);

    // Ventilation slits (decorative) on the upper portion of each side
    const ventMat = new THREE.MeshBasicMaterial({ color: 0x080212, transparent: true, opacity: 0.4 });
    for (let v = 0; v < 4; v++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.55, 0.01), ventMat);
      vent.position.set(wx + (idx === 0 ? 0.1 : -0.1), H + 1.8 + v * 0.7, -D / 4);
      group.add(vent);
    }
  });

  // === FRONT GLASS PANEL (the glass that covers the playing field from the front) ===
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xbbddff, transparent: true, opacity: 0.06, roughness: 0.02, metalness: 0.0,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(W - 0.2, 2.2, 0.04), glassMat);
  frontGlass.position.set(0, H + 1.8, D / 2 - 0.6);
  frontGlass.renderOrder = 4;
  group.add(frontGlass);

  // Back glass panel (keeps coins from escaping behind)
  const backGlass = new THREE.Mesh(new THREE.BoxGeometry(W + 0.3, 2.5, 0.06),
    new THREE.MeshPhysicalMaterial({ color: 0xddbbff, transparent: true, opacity: 0.04, roughness: 0.05, metalness: 0.0, side: THREE.DoubleSide, depthWrite: false }));
  backGlass.position.set(0, H + 2.0, wallBack + 0.55);
  backGlass.renderOrder = 3;
  group.add(backGlass);

  // Glass frame trims (metal bars holding the glass in place)
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x8877cc, roughness: 0.2, metalness: 0.8, emissive: 0x4433aa, emissiveIntensity: 0.1 });
  [[-W / 2 - 0.15, D / 2 - 0.6], [W / 2 + 0.15, D / 2 - 0.6]].forEach(([fx, fz]) => {
    const f = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.3, 0.06), frameMat);
    f.position.set(fx, H + 1.8, fz); group.add(f);
  });

  // === ALTERNATING WIN/HOLE SEGMENTS (casino coin pusher style) ===
  // Real coin pushers have a wide WIN chute in the center with HOLE traps on
  // both sides. The wide center win makes it feel rewarding when coins land
  // there, but the side holes punish careless drops. This creates risk/reward
  // tension when deciding where to aim the coin drop.
  const numSegments = 3;
  const zoneLayout = [
    { type: 'hole', width: 1.0 },   // left gutter (narrow — only edge coins)
    { type: 'win',  width: 4.4 },   // center win (wide — most coins land here)
    { type: 'hole', width: 1.0 },   // right gutter (narrow)
  ];

  const zones = [];
  let runningX = leftEdge;
  for (let i = 0; i < numSegments; i++) {
    const w = zoneLayout[i].width;
    zones.push({
      startX: runningX,
      endX: runningX + w,
      centerX: runningX + w / 2,
      type: zoneLayout[i].type,
      width: w,
    });
    runningX += w;
  }

  const winWellMat = new THREE.MeshStandardMaterial({ color: 0x003318, roughness: 0.7, metalness: 0.1, emissive: 0x00ff44, emissiveIntensity: 0.15 });
  const winFillMat = new THREE.MeshStandardMaterial({ color: 0x00ff66, emissive: 0x00ff44, emissiveIntensity: 0.8, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
  const winTopMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00ff44, emissiveIntensity: 1.5, transparent: true, opacity: 0.5 });
  const winLEDMat = new THREE.MeshStandardMaterial({ color: 0x00ff88, emissive: 0x00ff44, emissiveIntensity: 3.0 });
  const winEdgeMat = new THREE.MeshStandardMaterial({ color: 0x00cc44, emissive: 0x00ff44, emissiveIntensity: 2.0, transparent: true, opacity: 0.7 });

  zones.forEach(zone => {
    if (zone.type !== 'win') return;
    const well = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.04, 0.5, 1.2), winWellMat);
    well.position.set(zone.centerX, H - 0.25, D / 2 - 0.4);
    group.add(well);
    const fill = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.06, 0.02, 1.18), winFillMat);
    fill.position.set(zone.centerX, H - 0.08, D / 2 - 0.4);
    group.add(fill);
    const top = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.04, 0.008, 1.2), winTopMat);
    top.position.set(zone.centerX, H - 0.065, D / 2 - 0.4);
    group.add(top);
    for (const side of [-1, 1]) {
      const border = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.02, 0.04, 0.05), winEdgeMat);
      border.position.set(zone.centerX, H + 0.03, D / 2 - 0.4 + side * 0.58);
      group.add(border);
    }
    for (const side of [-1, 1]) {
      const sideLed = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1.2), winEdgeMat);
      sideLed.position.set(zone.centerX + side * (zone.width / 2 - 0.02), H + 0.03, D / 2 - 0.4);
      group.add(sideLed);
    }
    const innerMat = new THREE.MeshStandardMaterial({ color: 0x00ff44, emissive: 0x00ff22, emissiveIntensity: 0.4, transparent: true, opacity: 0.2 });
    const inner = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.25, 0.35, 0.9), innerMat);
    inner.position.set(zone.centerX, H - 0.15, D / 2 - 0.4);
    group.add(inner);
  });

  const holeWellMat = new THREE.MeshStandardMaterial({ color: 0x0a0008, roughness: 1.0, metalness: 0.0, emissive: 0x330011, emissiveIntensity: 0.2 });
  const holeFillMat = new THREE.MeshStandardMaterial({ color: 0xff0033, emissive: 0xff0022, emissiveIntensity: 0.6, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
  const holeTopMat = new THREE.MeshStandardMaterial({ color: 0xff2244, emissive: 0xff0033, emissiveIntensity: 1.0, transparent: true, opacity: 0.4 });
  const holeLEDMat = new THREE.MeshStandardMaterial({ color: 0xff2244, emissive: 0xff0044, emissiveIntensity: 3.0 });
  const holeEdgeMat = new THREE.MeshStandardMaterial({ color: 0xff0033, emissive: 0xff0022, emissiveIntensity: 2.0, transparent: true, opacity: 0.7 });

  zones.forEach(zone => {
    if (zone.type !== 'hole') return;
    const well = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.04, 0.65, 1.2), holeWellMat);
    well.position.set(zone.centerX, H - 0.325, D / 2 - 0.4);
    group.add(well);
    const fill = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.06, 0.02, 1.18), holeFillMat);
    fill.position.set(zone.centerX, H - 0.08, D / 2 - 0.4);
    group.add(fill);
    const top = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.04, 0.008, 1.2), holeTopMat);
    top.position.set(zone.centerX, H - 0.065, D / 2 - 0.4);
    group.add(top);
    for (const side of [-1, 1]) {
      const border = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.02, 0.04, 0.05), holeEdgeMat);
      border.position.set(zone.centerX, H + 0.03, D / 2 - 0.4 + side * 0.58);
      group.add(border);
    }
    for (const side of [-1, 1]) {
      const sideLed = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1.2), holeEdgeMat);
      sideLed.position.set(zone.centerX + side * (zone.width / 2 - 0.02), H + 0.03, D / 2 - 0.4);
      group.add(sideLed);
    }
    const innerMat = new THREE.MeshStandardMaterial({ color: 0x440011, emissive: 0xff0022, emissiveIntensity: 0.15, transparent: true, opacity: 0.15 });
    const inner = new THREE.Mesh(new THREE.BoxGeometry(zone.width - 0.25, 0.45, 0.9), innerMat);
    inner.position.set(zone.centerX, H - 0.225, D / 2 - 0.4);
    group.add(inner);
    const xMat = new THREE.MeshBasicMaterial({ color: 0xff0022, transparent: true, opacity: 0.2, side: THREE.DoubleSide });
    const xBar1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.003, 0.2), xMat);
    xBar1.position.set(zone.centerX, H + 0.03, D / 2 - 0.4);
    xBar1.rotation.y = Math.PI / 4;
    group.add(xBar1);
    const xBar2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.003, 0.2), xMat);
    xBar2.position.set(zone.centerX, H + 0.03, D / 2 - 0.4);
    xBar2.rotation.y = -Math.PI / 4;
    group.add(xBar2);
  });

  // === COIN COLLECTION TRAY (real arcade-style tray at the bottom front) ===
  const trayBodyMat = new THREE.MeshStandardMaterial({ color: 0x1a0835, roughness: 0.3, metalness: 0.7, emissive: 0x0a0420, emissiveIntensity: 0.12 });
  const trayBody = new THREE.Mesh(new THREE.BoxGeometry(W + 0.8, 0.4, 1.0), trayBodyMat);
  trayBody.position.set(0, H - 0.2, D / 2 + 0.3); trayBody.castShadow = true;
  group.add(trayBody);

  // Tray inner padding (felt-like material where coins collect)
  const trayInnerMat = new THREE.MeshStandardMaterial({ color: 0x2a1040, roughness: 0.95, metalness: 0.02, emissive: 0x1a0a30, emissiveIntensity: 0.15 });
  const trayInner = new THREE.Mesh(new THREE.BoxGeometry(W + 0.5, 0.02, 0.8), trayInnerMat);
  trayInner.position.set(0, H - 0.01, D / 2 + 0.25);
  group.add(trayInner);

  // Tray lip (golden rim at the edge of the coin tray)
  const trayLipMat = new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.1, metalness: 0.9, emissive: 0x886600, emissiveIntensity: 0.3 });
  const trayLip = new THREE.Mesh(new THREE.BoxGeometry(W + 0.6, 0.04, 0.08), trayLipMat);
  trayLip.position.set(0, H + 0.03, D / 2 + 0.03);
  group.add(trayLip);

  // Angled chute face — the sloped panel between the playing field and the tray
  // This is what makes the machine look like a real coin pusher.
  const chuteMat = new THREE.MeshStandardMaterial({
    color: 0x221144, roughness: 0.2, metalness: 0.8, emissive: 0x110833, emissiveIntensity: 0.3,
    side: THREE.DoubleSide,
  });
  const chuteW = W - 0.3;
  const chuteH = 0.55;
  const chuteD = 0.5;
  const chuteAngle = 0.35; // ~20 degrees tilt
  const chuteGeom = new THREE.BoxGeometry(chuteW, chuteH, chuteD);
  const chute = new THREE.Mesh(chuteGeom, chuteMat);
  chute.position.set(0, H + 0.18, D / 2 - 0.5);
  chute.rotation.x = chuteAngle;
  chute.castShadow = true; chute.receiveShadow = true;
  group.add(chute);

  // Chute LED strips along the edges (gives the machine a "premium" look)
  const chuteLEDMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 2.0 });
  const chuteLED = new THREE.Mesh(new THREE.BoxGeometry(chuteW - 0.1, 0.015, 0.015), chuteLEDMat);
  chuteLED.position.set(0, H + 0.42, D / 2 - 0.58);
  group.add(chuteLED);

  // === SLOPE: coins slide downhill from shelf front to win/holes ===
  // Slope now runs all the way to the drop edge (was ending 0.4u short,
  // leaving an invisible up-hill lip that coins had to climb).
  const SLOPE_START_Z = SHELF_NEUTRAL_Z + SHELF_DEPTH / 2 + 0.2;
  const SLOPE_END_Z = D / 2 - 1.45;
  const SLOPE_DROP = 0.18;
  const slopeLen = SLOPE_END_Z - SLOPE_START_Z;
  const slopeMat = new THREE.MeshStandardMaterial({ color: 0x3a1a55, roughness: 0.6, metalness: 0.3, emissive: 0x1a0a30, emissiveIntensity: 0.2 });
  const slopeMesh = new THREE.Mesh(new THREE.BoxGeometry(W - 0.5, 0.02, slopeLen), slopeMat);
  slopeMesh.position.set(0, surfaceY - SLOPE_DROP / 2, SLOPE_START_Z + slopeLen / 2);
  slopeMesh.rotation.x = Math.atan2(SLOPE_DROP, slopeLen);
  slopeMesh.receiveShadow = true;
  group.add(slopeMesh);

  const slopeEdgeMat = new THREE.MeshStandardMaterial({ color: 0xcc88ff, emissive: 0xaa44ff, emissiveIntensity: 1.0 });
  const slopeEdge = new THREE.Mesh(new THREE.BoxGeometry(W - 0.5, 0.03, 0.03), slopeEdgeMat);
  slopeEdge.position.set(0, surfaceY + 0.01, SLOPE_START_Z);
  group.add(slopeEdge);

  const slopeEndEdge = new THREE.Mesh(new THREE.BoxGeometry(W - 0.5, 0.03, 0.03), slopeEdgeMat);
  slopeEndEdge.position.set(0, surfaceY - SLOPE_DROP + 0.01, SLOPE_END_Z);
  group.add(slopeEndEdge);

  // === CYAN LED STRIPS (under-shelf accent) ===
  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x44eeff, emissive: 0x22ccff, emissiveIntensity: 1.2 });
  [[-W / 2 + 0.3, -D / 2 + 0.4, D - 1.5], [W / 2 - 0.3, -D / 2 + 0.4, D - 1.5]].forEach(([cx, cz, cl]) => {
    const s = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, cl), cyanMat);
    s.position.set(cx, H + 0.3, cz); group.add(s);
  });

  scene.add(group);

  // === MECHANISM UPDATE FUNCTION ===
  let currentMechX = 0;

  function updateMechanism(time) {
    // Oscillate left-right with smooth sine movement
    const osc = Math.sin(time * 0.6) * (railSpan - 0.2);
    currentMechX = osc;

    // Pusher shelf: asymmetric cycle (slow retract, fast push) like real
    // coin pushers. Uses a boosted sine so the forward stroke is ~1.7× faster
    // than the backward stroke, creating the classic "push" feel.
    const rawPhase = time * SHELF_SPEED;
    // Asymmetric shaping: compress the sine wave during the forward half
    // (sin > 0) and stretch the backward half (sin < 0). The multiplier 1.3
    // makes the forward stroke shorter/faster.
    const sinVal = Math.sin(rawPhase);
    const shapedPhase = sinVal > 0
      ? Math.pow(sinVal, 1.3)   // Fast push forward (compressed)
      : -Math.pow(-sinVal, 0.7); // Slow retract backward (stretched)
    const newShelfZ = SHELF_NEUTRAL_Z + shapedPhase * SHELF_AMPLITUDE;

    slider.position.x = osc;
    innerSlider.position.x = osc;

    beam.position.x = osc;
    beam.position.z = mechZ;
    beam.position.y = H + (railY - H) / 2;
    beam.scale.y = 1 + Math.sin(time * 0.6) * 0.1;

    target.position.x = osc;
    target.position.z = mechZ;
    const pulse = 0.8 + 0.2 * Math.sin(time * 1.2);
    target.material.opacity = 0.1 + 0.15 * pulse;

    slider.position.y = railY + Math.sin(time * 2 + osc) * 0.02;
    innerSlider.position.y = slider.position.y;

    slider.rotation.x = time * 0.5;
    slider.rotation.y = time * 0.3;
    innerSlider.rotation.x = slider.rotation.x;
    innerSlider.rotation.y = slider.rotation.y;

    prevShelfZ = shelfZ;
    shelfZ = newShelfZ;
    const mechDt = Math.max(time - prevMechTime, 0.001);
    if (prevMechTime < 0) {
      shelfVelocity = 0;
    } else {
      shelfVelocity = (shelfZ - prevShelfZ) / mechDt;
    }
    prevMechTime = time;

    shelfGroup.position.z = shelfZ - SHELF_NEUTRAL_Z;
    slotRing.position.x = currentMechX;

    // === WALL ANIMATIONS ===
    const wallAnims = group.userData && group.userData.wallAnims;
    if (wallAnims) {
      // Hero coin spins around its vertical axis (the $ glyphs are wired on
      // both faces so it reads correctly from any angle).
      if (wallAnims.heroCoinGroup) {
        wallAnims.heroCoinGroup.rotation.y = time * 0.28;
      }
      // Marquee sign breathes gently (subtle scale pulse).
      if (wallAnims.marquee) {
        const breathe = 0.5 + 0.5 * Math.sin(time * 1.2);
        wallAnims.marquee.scale.set(1 + 0.02 * breathe, 1 + 0.02 * breathe, 1);
      }
      // Side column orbs pulse with offset phase
      if (wallAnims.sideColumns) {
        for (const col of wallAnims.sideColumns) {
          col.orb.material.opacity = 0.6 + 0.4 * Math.sin(time * 2 + col.phase);
        }
      }
      // Neon gold frame pulses (slow sine)
      if (wallAnims.frameGoldMat) {
        wallAnims.frameGoldMat.emissiveIntensity = 1.6 + 1.0 * Math.sin(time * 0.9);
      }
    }
  }

  return {
    group,
    width: W, depth: D, height: H,
    surfaceY,
    backZ: playBack,
    frontDropZ: playFront,
    leftX: leftEdge,
    rightX: rightEdge,
    winZ: D / 2 - 0.4,
    zones,
    getZoneType(x) {
      for (const z of zones) {
        if (x >= z.startX && x < z.endX) return z.type;
      }
      return 'hole';
    },
    mechX: 0,
    get dropX() { return currentMechX; },
    dropZ: DROP_SLOT_Z,
    dropHeight: H + 3.0,
    updateMechanism,
    get shelfZ() { return shelfZ; },
    get shelfVelocity() { return shelfVelocity; },
    get shelfFrontZ() { return shelfZ + SHELF_DEPTH / 2; },
    get shelfBackZ() { return shelfZ - SHELF_DEPTH / 2; },
    shelfSurfaceY: SHELF_TOP,
    shelfThickness: SHELF_THICKNESS,
    slotCenterZ: SLOT_CENTER_Z,
    slotBackZ: SLOT_BACK_Z,
    slotFrontZ: SLOT_FRONT_Z,
    slotWidth: SLOT_WIDTH,
    slotHalfWidth: SLOT_WIDTH / 2,
    shelfAmplitude: SHELF_AMPLITUDE,
    shelfSpeed: SHELF_SPEED,
    shelfNeutralZ: SHELF_NEUTRAL_Z,
    shelfDepth: SHELF_DEPTH,
    slopeStartZ: SLOPE_START_Z,
    slopeEndZ: SLOPE_END_Z,
    slopeDrop: SLOPE_DROP,
  };
}
