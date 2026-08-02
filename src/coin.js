// ===== Coin Pusher Physics v5: Spatial Hashing + Real Mechanics =====

import * as THREE from 'three';

const CT = 0.06;
const BW = 0.5, BH = 0.22, BT = 0.01;
const CARD_W = 0.2, CARD_H = 0.28, CARD_T = 0.008;
const MAX = 6000;
const FRICTION = 0.987;
const BOUNCE = 0.3;
const GRAVITY = 14;
const BOUNCE_THRESHOLD = 0.1;
const LAND_BOUNCE = 0.35;
const MAX_V = 2.5;

const COIN_R = 0.28;
const BILL_R = 0.25;
const CARD_R = 0.15;

let cardCounter = 0;
const MAX_ACTIVE_CARDS = 6;

const GRID_CELL = 0.6;

export function createObjectSystem(scene, platform, existingCardCount = 0) {
  cardCounter = existingCardCount;
  const objects = [];
  const group = new THREE.Group();
  scene.add(group);

  const coinGeo = new THREE.CylinderGeometry(COIN_R, COIN_R, CT, 24);
  const billGeo = new THREE.BoxGeometry(BW, BT, BH);
  const cardGeo = new THREE.BoxGeometry(CARD_W, CARD_T, CARD_H);

  const mats = {
    coin: [
      new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.1, metalness: 0.9, emissive: 0xaa6600, emissiveIntensity: 0.12 }),
      new THREE.MeshStandardMaterial({ color: 0xeebb22, roughness: 0.15, metalness: 0.85, emissive: 0x886600, emissiveIntensity: 0.08 }),
      new THREE.MeshStandardMaterial({ color: 0xfff066, roughness: 0.08, metalness: 0.9, emissive: 0xccaa00, emissiveIntensity: 0.15 }),
    ],
    bill: [
      new THREE.MeshStandardMaterial({ color: 0x22ee77, roughness: 0.2, metalness: 0.1, emissive: 0x008844, emissiveIntensity: 0.12 }),
      new THREE.MeshStandardMaterial({ color: 0x66ff99, roughness: 0.15, metalness: 0.1, emissive: 0x00aa55, emissiveIntensity: 0.18 }),
      new THREE.MeshStandardMaterial({ color: 0x11cc55, roughness: 0.25, metalness: 0.1, emissive: 0x006633, emissiveIntensity: 0.08 }),
    ],
    card: [
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.0, emissive: 0x6644aa, emissiveIntensity: 0.05 }),
      new THREE.MeshStandardMaterial({ color: 0xffeedd, roughness: 0.1, metalness: 0.0, emissive: 0x8855cc, emissiveIntensity: 0.08 }),
    ],
  };

  function radiusOf(type) {
    if (type === 'coin') return COIN_R;
    if (type === 'dollar') return BILL_R;
    return CARD_R;
  }

  function halfH(type) {
    if (type === 'coin') return CT / 2;
    if (type === 'dollar') return BT / 2;
    return CARD_T / 2;
  }

  // --- Spatial hash grid ---
  const grid = new Map();

  function gridClear() { grid.clear(); }

  function gridKey(cx, cz) { return (cx * 73856093) ^ (cz * 19349663); }

  function gridInsert(o) {
    const cx = Math.floor(o.x / GRID_CELL);
    const cz = Math.floor(o.z / GRID_CELL);
    const key = gridKey(cx, cz);
    let cell = grid.get(key);
    if (!cell) { cell = []; grid.set(key, cell); }
    cell.push(o);
  }

  function gridNeighbors(o) {
    const cx = Math.floor(o.x / GRID_CELL);
    const cz = Math.floor(o.z / GRID_CELL);
    const result = [];
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const cell = grid.get(gridKey(cx + dx, cz + dz));
        if (cell) {
          for (let k = 0; k < cell.length; k++) result.push(cell[k]);
        }
      }
    }
    return result;
  }

  function addCoinText(mesh, type = 'coin') {
    const textMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 });
    if (type === 'coin') {
      const sVert = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.003, 0.05), textMat);
      sVert.position.set(-0.04, CT / 2 + 0.001, 0); mesh.add(sVert);
      const sHoriz1 = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.003, 0.01), textMat);
      sHoriz1.position.set(-0.04, CT / 2 + 0.001, 0.02); mesh.add(sHoriz1);
      const sHoriz2 = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.003, 0.01), textMat);
      sHoriz2.position.set(-0.04, CT / 2 + 0.001, -0.02); mesh.add(sHoriz2);
      const oneV = new THREE.Mesh(new THREE.BoxGeometry(0.01, 0.003, 0.05), textMat);
      oneV.position.set(0.06, CT / 2 + 0.001, 0); mesh.add(oneV);
      const oneBase = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.003, 0.01), textMat);
      oneBase.position.set(0.06, CT / 2 + 0.001, -0.03); mesh.add(oneBase);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.025, 0.035, 12, 1), ringMat);
      ring.position.set(-0.04, CT / 2 + 0.002, 0);
      ring.rotation.x = -Math.PI / 2;
      mesh.add(ring);
    } else {
      const sVert = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.003, 0.08), textMat);
      sVert.position.set(0, BT / 2 + 0.002, 0); mesh.add(sVert);
      const sHoriz1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.003, 0.015), textMat);
      sHoriz1.position.set(0, BT / 2 + 0.002, 0.035); mesh.add(sHoriz1);
      const sHoriz2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.003, 0.015), textMat);
      sHoriz2.position.set(0, BT / 2 + 0.002, -0.035); mesh.add(sHoriz2);
    }
  }

  function makeCoinMesh(x, z, y) {
    const m = new THREE.Mesh(coinGeo, mats.coin[Math.floor(Math.random() * 3)]);
    m.position.set(x, y, z);
    m.rotation.y = Math.random() * Math.PI * 2;
    m.castShadow = true; m.receiveShadow = true;
    group.add(m);
    addCoinText(m, 'coin');
    return m;
  }

  function makeBillMesh(x, z, y) {
    const m = new THREE.Mesh(billGeo, mats.bill[Math.floor(Math.random() * 3)]);
    m.position.set(x, y, z);
    m.rotation.y = Math.random() * Math.PI * 2;
    m.castShadow = true; m.receiveShadow = true;
    group.add(m);
    addCoinText(m, 'dollar');
    return m;
  }

  function makeCardMesh(x, z) {
    const y = platform.surfaceY + CARD_T / 2 + 0.01;
    const mat = mats.card[Math.floor(Math.random() * 2)];
    const m = new THREE.Mesh(cardGeo, mat);
    m.position.set(x, y, z);
    m.rotation.y = Math.random() * Math.PI * 2;
    m.castShadow = true; m.receiveShadow = true;
    group.add(m);
    const sm = new THREE.MeshBasicMaterial({ color: 0xff2244, transparent: true, opacity: 0.15 });
    const suit = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.003, 0.04), sm);
    suit.position.set(0, CARD_T / 2 + 0.001, 0);
    m.add(suit);
    const cardId = `card_${++cardCounter}`;
    m.userData = { isCard: true, cardId, collected: false };
    return m;
  }

  function spawn(type, x, z, y, state = 'sliding') {
    let mesh;
    if (type === 'card') {
      mesh = makeCardMesh(x, z);
      y = mesh.position.y;
      state = 'floating';
    } else if (type === 'dollar') {
      mesh = makeBillMesh(x, z, y);
    } else {
      mesh = makeCoinMesh(x, z, y);
    }
    const obj = {
      mesh, type, x, y, z,
      vx: 0, vy: 0, vz: 0,
      state,
      spin: 0,
      _dropTime: 0,
      _slotTimer: 0,
    };
    objects.push(obj);
    return obj;
  }

  function initObjects(coinCount = 55, billCount = 6) {
    clearObjects();

    const shelfCoins = Math.floor(coinCount * 0.6);
    for (let i = 0; i < Math.min(shelfCoins, MAX); i++) {
      const x = platform.leftX + 0.4 + Math.random() * (platform.rightX - platform.leftX - 0.8);
      const z = platform.shelfBackZ + 0.2 + Math.random() * (platform.shelfAmplitude * 1.2);
      const y = platform.shelfSurfaceY + CT / 2;
      const obj = spawn('coin', x, z, y, 'sliding');
      obj.onShelf = true;
      obj.vz = (Math.random() - 0.5) * 0.05;
    }
    for (let i = 0; i < Math.min(coinCount - shelfCoins, MAX); i++) {
      const x = platform.leftX + 0.4 + Math.random() * (platform.rightX - platform.leftX - 0.8);
      const z = platform.frontDropZ - 0.5 + Math.random() * 0.8;
      spawn('coin', x, z, platform.surfaceY + CT / 2, 'sliding');
    }
    for (let i = 0; i < Math.min(billCount, MAX - coinCount); i++) {
      const x = platform.leftX + 0.4 + Math.random() * (platform.rightX - platform.leftX - 0.8);
      const z = platform.shelfBackZ + 0.3 + Math.random() * (platform.shelfDepth * 0.5);
      const obj = spawn('dollar', x, z, platform.shelfSurfaceY + BT / 2, 'sliding');
      obj.onShelf = true;
    }
    for (let i = 0; i < 3; i++) {
      const x = platform.leftX + 0.5 + Math.random() * (platform.rightX - platform.leftX - 1.0);
      const z = platform.shelfBackZ + 0.5 + Math.random() * (platform.shelfDepth * 0.5);
      const obj = spawn('card', x, z);
      // Cards drift forward slowly; fast enough to reach the WIN/HOLE zones
      // in a reasonable time (~40-80s) but slow enough to build anticipation.
      obj.vz = 0.06 + Math.random() * 0.07;
    }

    for (let iter = 0; iter < 8; iter++) {
      resolveCollisions(); clampToPlatform();
    }
    for (const o of objects) {
      if (o.state === 'sliding') {
        const h = halfH(o.type);
        o.y = (o.onShelf ? platform.shelfSurfaceY : platform.surfaceY) + h;
      }
    }

    spawnCoinStacks(2);
  }

  function spawnCoinStacks(count) {
    for (let i = 0; i < count; i++) {
      const cx = platform.leftX + 0.8 + Math.random() * (platform.rightX - platform.leftX - 1.6);
      const cz = platform.backZ + 0.5 + Math.random() * (platform.frontDropZ - platform.backZ - 2.0);
      const height = 6 + Math.floor(Math.random() * 6);
      for (let j = 0; j < height; j++) {
        const leanX = Math.sin(j * 0.3) * 0.006;
        const leanZ = Math.cos(j * 0.4) * 0.006;
        const y = platform.surfaceY + CT / 2 + j * (CT + 0.001);
        const obj = spawn('coin', cx + leanX, cz + leanZ, y, 'sliding');
        obj.vy = 0;
      }
    }
  }

  function clearObjects() {
    objects.forEach(o => group.remove(o.mesh));
    objects.length = 0;
  }

  function surfaceYFor(o) {
    if (o.onShelf) return platform.shelfSurfaceY;
    return platform.surfaceY;
  }

  // --- Cascading disturbance when a coin falls off the front edge ---
  function cascadeDisturb(fallenObj) {
    const disturbRadius = COIN_R * 4;
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o === fallenObj || o.onShelf || o.state !== 'sliding') continue;
      const dx = o.x - fallenObj.x;
      const dz = o.z - fallenObj.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < disturbRadius && dist > 0.01) {
        const strength = (1 - dist / disturbRadius) * 0.3;
        o.vx += (dx / dist) * strength;
        o.vz += (dz / dist) * strength * 0.5;
      }
    }
  }

  // --- Spatial-hashed collision resolution ---
  function resolveCollisions() {
    gridClear();
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.state === 'dropping' || o.state === 'falling') continue;
      gridInsert(o);
    }

    const checked = new Set();
    for (let i = 0; i < objects.length; i++) {
      const a = objects[i];
      if (a.state === 'dropping' || a.state === 'falling') continue;
      if (a.state === 'floating') continue;

      const neighbors = gridNeighbors(a);
      for (let k = 0; k < neighbors.length; k++) {
        const b = neighbors[k];
        if (b === a) continue;
        const pairId = a < b ? i : objects.indexOf(b);
        const pairKey = i < pairId ? `${i}:${pairId}` : `${pairId}:${i}`;
        if (checked.has(pairKey)) continue;
        checked.add(pairKey);

        const aR = radiusOf(a.type);
        const bR = radiusOf(b.type);
        const minDist = aR + bR + 0.02;

        const dx = b.x - a.x, dz = b.z - a.z;
        const distXZ = Math.sqrt(dx * dx + dz * dz);

        if (distXZ < minDist && distXZ > 0.001) {
          const overlap = minDist - distXZ;
          const nx = dx / distXZ, nz = dz / distXZ;

          if (a.state === 'falling' && b.state === 'sliding') {
            b.vz += overlap * 0.3;
            b.vx += (Math.random() - 0.5) * overlap * 0.15;
            a.vx -= nx * overlap * 0.15;
            a.vz -= nz * overlap * 0.15;
          } else if (b.state === 'falling' && a.state === 'sliding') {
            a.vz += overlap * 0.3;
            a.vx += (Math.random() - 0.5) * overlap * 0.15;
            b.vx -= nx * overlap * 0.15;
            b.vz -= nz * overlap * 0.15;
          } else {
            const push = overlap * 0.3;
            a.x -= nx * push; a.z -= nz * push;
            b.x += nx * push; b.z += nz * push;
            const relV = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
            if (relV < 0) {
              const impulse = relV * BOUNCE * 0.5;
              a.vx += impulse * nx; a.vz += impulse * nz;
              b.vx -= impulse * nx; b.vz -= impulse * nz;
            }
          }
        }
      }
    }

    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.type === 'card') continue;
      if (Math.abs(o.vx) > MAX_V) o.vx = Math.sign(o.vx) * MAX_V;
      if (Math.abs(o.vz) > MAX_V) o.vz = Math.sign(o.vz) * MAX_V;
    }
  }

  function resolveVertical() {
    // Build spatial grid for sliding/floating objects only
    const vGrid = new Map();
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.type === 'card' || o.state === 'falling' || o.state === 'dropping') continue;
      const cx = Math.floor(o.x / GRID_CELL);
      const cz = Math.floor(o.z / GRID_CELL);
      const key = gridKey(cx, cz);
      let cell = vGrid.get(key);
      if (!cell) { cell = []; vGrid.set(key, cell); }
      cell.push(o);
    }

    const vChecked = new Set();
    for (let i = 0; i < objects.length; i++) {
      const a = objects[i];
      if (a.type === 'card' || a.state === 'falling' || a.state === 'dropping') continue;

      const ah = halfH(a.type);
      const cx = Math.floor(a.x / GRID_CELL);
      const cz = Math.floor(a.z / GRID_CELL);

      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          const cell = vGrid.get(gridKey(cx + dx, cz + dz));
          if (!cell) continue;
          for (let k = 0; k < cell.length; k++) {
            const b = cell[k];
            if (b === a) continue;
            const pairKey = i < objects.indexOf(b) ? `${i}:${objects.indexOf(b)}` : `${objects.indexOf(b)}:${i}`;
            if (vChecked.has(pairKey)) continue;
            vChecked.add(pairKey);

            const bR = radiusOf(b.type);
            const aR = radiusOf(a.type);
            const dx2 = b.x - a.x, dz2 = b.z - a.z;
            const distXZ = Math.sqrt(dx2 * dx2 + dz2 * dz2);
            if (distXZ > aR + bR + 0.01) continue;

            const bh = halfH(b.type);
            const bBottom = b.y - bh;
            const aTop = a.y + ah;
            const bTop = b.y + bh;
            const aBottom = a.y - ah;

            if (aTop > bBottom + 0.002 && aBottom < bBottom && aBottom > bBottom - CT * 2) {
              const targetY = bBottom - ah;
              if (a.y > targetY + 0.001) {
                a.y = targetY;
                if (a.vy > 0) a.vy = 0;
              }
            }

            if (bTop > aBottom + 0.002 && bBottom < aBottom && bBottom > aBottom - CT * 2) {
              const targetY = aBottom - bh;
              if (b.y > targetY + 0.001) {
                b.y = targetY;
                if (b.vy > 0) b.vy = 0;
              }
            }

            if (distXZ < aR + bR) {
              const yOverlap = (ah + bh) - Math.abs(a.y - b.y);
              if (yOverlap > 0.001 && Math.abs(a.y - b.y) < ah + bh) {
                const pushY = yOverlap * 0.5;
                if (a.y < b.y) {
                  a.y -= pushY * 0.5;
                  b.y += pushY * 0.5;
                } else {
                  a.y += pushY * 0.5;
                  b.y -= pushY * 0.5;
                }
              }
            }
          }
        }
      }
    }
  }

  function clampToPlatform() {
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.state === 'dropping' || o.state === 'falling') continue;
      const r = radiusOf(o.type);

      // Front-factor side walls: tighter near the front where coins approach zones
      const frontFactor = Math.max(0, (o.z - platform.backZ) / (platform.frontDropZ - platform.backZ));
      const effectiveLeft = platform.leftX + r + frontFactor * 0.05;
      const effectiveRight = platform.rightX - r - frontFactor * 0.05;
      if (o.x < effectiveLeft) { o.x = effectiveLeft; o.vx = Math.abs(o.vx) * BOUNCE * 0.5; }
      if (o.x > effectiveRight) { o.x = effectiveRight; o.vx = -Math.abs(o.vx) * BOUNCE * 0.5; }

      if (o.z < platform.backZ + r) { o.z = platform.backZ + r; o.vz = Math.abs(o.vz) * BOUNCE; }
      if (o.onShelf && o.z < platform.shelfBackZ + r + 0.03) {
        o.z = platform.shelfBackZ + r + 0.03;
        o.vz = Math.abs(o.vz) * BOUNCE;
      }
      if (!o.onShelf && o.z < platform.backZ + r) {
        o.z = platform.backZ + r;
        o.vz = Math.abs(o.vz) * BOUNCE;
      }
    }
  }

  // --- Shelf push cascade: shelf movement pushes nearby base-surface coins ---
  function applyShelfPush(subDt) {
    const pushFront = platform.shelfFrontZ;
    const pushBack = platform.shelfBackZ - 0.5;
    const pushStrength = Math.max(0, platform.shelfVelocity) * 0.8;

    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.onShelf || o.state !== 'sliding' || o.type === 'card') continue;
      if (o.z > pushBack && o.z < pushFront + 1.5) {
        const distToFront = pushFront - o.z;
        const influence = Math.max(0, 1 - distToFront / 2.0);
        o.vz += pushStrength * influence * subDt;
      }
    }
  }

  function dropObject(pushForce = 1, type = 'coin') {
    if (objects.length >= MAX) {
      const toRemove = [];
      for (let i = 0; i < objects.length && toRemove.length < 3; i++) {
        if (objects[i].type !== 'card' && objects[i].state === 'sliding') {
          toRemove.push(i);
        }
      }
      toRemove.reverse().forEach(i => { group.remove(objects[i].mesh); objects.splice(i, 1); });
    }

    const x = platform.dropX + (Math.random() - 0.5) * 0.08;
    const z = platform.dropZ;
    const dropY = platform.dropHeight;

    const obj = spawn(type, x, z, dropY, 'falling');
    obj.y = dropY;
    obj.vy = -0.2;
    obj.vz = (Math.random() - 0.5) * 0.05 + pushForce * 0.02;
    obj.vx = (Math.random() - 0.5) * 0.05;
    obj.spin = 6 + Math.random() * 3;
    obj._dropTime = performance.now();

    return obj;
  }

  function collectFallen() {
    const result = { win: { coins: 0, dollars: 0, cards: [] }, hole: { coins: 0, dollars: 0, cards: [] } };
    const toRemove = [];
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      // Collect EVERYTHING that crosses the win line, regardless of state.
      // Coins/bills arrive here in 'dropping' state (pushed over the front
      // edge, sinking into the well) — excluding that state meant they fell
      // through the floor forever and were never collected, killing the whole
      // economy. Cards arrive in 'floating' state. 'falling' coins spawn at
      // the drop slot (z = -1.5) and never approach winZ, so no false hits.
      if (o.z > platform.winZ) {
        const zone = platform.getZoneType(o.x);
        if (o.type === 'card') {
          result[zone].cards.push(o.mesh.userData.cardId);
        } else if (o.type === 'dollar') {
          result[zone].dollars++;
        } else {
          result[zone].coins++;
        }
        toRemove.push(i);
      }
    }
    toRemove.reverse().forEach(i => { group.remove(objects[i].mesh); objects.splice(i, 1); });
    return result;
  }

  function update(dt, time) {
    const steps = 4;
    const subDt = dt / steps;

    for (let step = 0; step < steps; step++) {
      for (let oi = 0; oi < objects.length; oi++) {
        const o = objects[oi];
        if (o.type === 'card' || o.state === 'floating') continue;

        if (o.state === 'falling') {
          o.vy -= GRAVITY * subDt;
          o.y += o.vy * subDt;
          o.x += o.vx * subDt;
          o.z += o.vz * subDt;

          const inSlotX = Math.abs(o.x) < platform.slotHalfWidth;
          const inSlotZ = o.z > platform.slotBackZ && o.z < platform.slotFrontZ;
          const overShelf = !(inSlotX && inSlotZ);
          const h = halfH(o.type);

          const shelfLandY = platform.shelfSurfaceY + h;
          const baseLandY = platform.surfaceY + h;

          if (overShelf && o.y <= shelfLandY) {
            o.y = shelfLandY;
            o.vy *= -LAND_BOUNCE;
            if (Math.abs(o.vy) <= BOUNCE_THRESHOLD) {
              o.vy = 0;
              o.vx *= 0.5;
              o.vz *= 0.5;
              o.state = 'sliding';
              o.onShelf = true;
              o.mesh.rotation.x = 0;
              o.mesh.rotation.z = 0;
            }
          } else if (o.y <= baseLandY) {
            o.y = baseLandY;
            o.vy *= -LAND_BOUNCE;
            if (Math.abs(o.vy) <= BOUNCE_THRESHOLD) {
              o.vy = 0;
              o.vx *= 0.5;
              o.vz *= 0.5;
              o.state = 'sliding';
              o.onShelf = false;
              o.mesh.rotation.x = 0;
              o.mesh.rotation.z = 0;
            }
          }
        }

        if (o.state === 'dropping') {
          o.vy -= GRAVITY * subDt;

          if (o.x < platform.leftX + COIN_R) { o.x = platform.leftX + COIN_R; o.vx = Math.abs(o.vx) * BOUNCE; }
          if (o.x > platform.rightX - COIN_R) { o.x = platform.rightX - COIN_R; o.vx = -Math.abs(o.vx) * BOUNCE; }

          if (o.z >= platform.frontDropZ) {
            o.vz += 4.0 * subDt;
            o.vx *= 0.98;
          } else {
            o.vx *= 0.95;
            o.vz *= 0.93;
          }
          o.y += o.vy * subDt;
          o.z += o.vz * subDt;
          o.x += o.vx * subDt;

          if (o.y <= platform.surfaceY + halfH(o.type) && o.z < platform.frontDropZ) {
            o.y = platform.surfaceY + halfH(o.type);
            o.vy = 0;
            o.vx *= 0.3;
            o.vz *= 0.3;
            o.state = 'sliding';
            o.onShelf = false;
            o.mesh.rotation.x = 0;
            o.mesh.rotation.z = 0;
          }
        }

        if (o.state === 'sliding') {
          if (!o.onShelf && o.type !== 'card') {
            const r = radiusOf(o.type);
            const underShelfX = o.x > platform.leftX + r && o.x < platform.rightX - r;
            const underShelfZ = o.z > platform.shelfBackZ + r && o.z < platform.shelfFrontZ - r;
            if (underShelfX && underShelfZ) {
              o.onShelf = true;
              o.y = platform.shelfSurfaceY + halfH(o.type);
            }
          }

          if (o.onShelf) {
            const inSlotX = Math.abs(o.x) < platform.slotHalfWidth;
            const nearSlot = o.z > platform.slotBackZ && o.z < platform.slotFrontZ;
            const freshDrop = (performance.now() - (o._dropTime || 0)) < 500;
            if (freshDrop || (inSlotX && nearSlot)) {
              o._slotTimer = (o._slotTimer || 0) + subDt;
            } else {
              o.vz += platform.shelfVelocity * subDt * 1.5;
            }
          }

          o.x += o.vx * subDt;
          o.z += o.vz * subDt;
          o.vx *= FRICTION;
          o.vz *= FRICTION;
          if (Math.abs(o.vx) < 0.001) o.vx = 0;
          if (Math.abs(o.vz) < 0.001) o.vz = 0;

          if (o.onShelf) {
            const backWallZ = platform.shelfBackZ + COIN_R + 0.03;
            if (o.z < backWallZ) {
              o.z = backWallZ;
              if (platform.shelfVelocity > 0) {
                o.vz += platform.shelfVelocity * 0.6;
              } else {
                o.vz = 0;
              }
            }
          }

          if (o.onShelf) {
            const frontEdgeZ = platform.shelfFrontZ - radiusOf(o.type);
            if (o.z > frontEdgeZ) {
              o.state = 'dropping';
              o.onShelf = false;
              o.vy = -0.1;
              if (o.vz < 0.15) o.vz = 0.15;
              cascadeDisturb(o);
            }
          }

          if (o.onShelf) {
            const inSlotX = Math.abs(o.x) < platform.slotHalfWidth;
            const nearSlot = o.z > platform.slotBackZ && o.z < platform.slotFrontZ;
            if (inSlotX && nearSlot && platform.shelfVelocity < -0.3 && (o._slotTimer || 0) > 0.3) {
              o.onShelf = false;
              o.state = 'falling';
              o.vy = -0.5;
              o._slotTimer = 0;
            }
          }

          if (!o.onShelf && o.z > platform.frontDropZ) {
            o.state = 'dropping';
            o.vy = -0.3;
            if (o.vz < 0.5) o.vz = 0.5;
          }

          // Slope: only apply if close to the surface
          if (!o.onShelf && o.z > platform.shelfFrontZ + radiusOf(o.type) && o.z < platform.frontDropZ) {
            const surfaceDist = Math.abs(o.y - (platform.surfaceY + halfH(o.type)));
            if (surfaceDist < 0.15) {
              const slopeT = Math.max(0, Math.min(1, (o.z - platform.slopeStartZ) / (platform.slopeEndZ - platform.slopeStartZ)));
              const slopeForce = 2.0 + slopeT * 3.0;
              o.vz += slopeForce * subDt;
              const slopeY = platform.surfaceY + halfH(o.type) - slopeT * platform.slopeDrop;
              if (o.y < slopeY + 0.01) o.y = slopeY;
            }
          }
        }
      }

      resolveCollisions();
      resolveVertical();
      clampToPlatform();
      applyShelfPush(subDt);

      for (let i = 0; i < objects.length; i++) {
        const o = objects[i];
        if (o.type === 'card' || o.state === 'dropping') continue;
        if (o.state === 'falling') {
          if (o.x < platform.leftX + COIN_R) { o.x = platform.leftX + COIN_R; o.vx = Math.abs(o.vx) * BOUNCE; }
          if (o.x > platform.rightX - COIN_R) { o.x = platform.rightX - COIN_R; o.vx = -Math.abs(o.vx) * BOUNCE; }
          if (o.z < platform.backZ + COIN_R) { o.z = platform.backZ + COIN_R; o.vz = Math.abs(o.vz) * BOUNCE; }
        }
        if (o.state === 'sliding' && o.onShelf) {
          const r = radiusOf(o.type);
          if (o.x < platform.leftX + r + 0.06) { o.x = platform.leftX + r + 0.06; o.vx = Math.abs(o.vx) * BOUNCE; }
          if (o.x > platform.rightX - r - 0.06) { o.x = platform.rightX - r - 0.06; o.vx = -Math.abs(o.vx) * BOUNCE; }
        }
      }
    }

    const now = performance.now();
    for (let i = 0; i < objects.length; i++) {
      const o = objects[i];
      if (o.type === 'card' || o.state === 'floating') {
        o.z += o.vz * dt;
        // Hover above the shelf top so the moving shelf doesn't clip through
        // the card as it oscillates underneath.
        o.y = platform.shelfSurfaceY + CARD_T / 2 + 0.02 + Math.sin(now * 0.001 + o.x) * 0.01;
        o.mesh.rotation.y += dt * 0.5;
        o.mesh.position.set(o.x, o.y, o.z);
        continue;
      }

      if (o.state === 'falling') {
        o.mesh.rotation.y += dt * o.spin;
        o.mesh.rotation.x = Math.sin(now * 0.01 + o.x) * 0.1;
        o.mesh.rotation.z = Math.cos(now * 0.01 + o.z) * 0.1;
      } else if (o.state === 'dropping') {
        o.mesh.rotation.y += dt * 3;
        o.mesh.rotation.x += dt * 2;
        o.mesh.rotation.z += dt * 1.5;
      } else if (o.state === 'sliding') {
        const speed = Math.sqrt(o.vx * o.vx + o.vz * o.vz);
        if (speed > 0.005) {
          o.mesh.rotation.x += o.vz * 0.5;
          o.mesh.rotation.z -= o.vx * 0.5;
        }
        if (Math.abs(o.vz) > 0.005) o.mesh.rotation.y += o.vz * 0.3;
      }

      o.mesh.position.set(o.x, o.y, o.z);
    }

    maintainCount(time);
  }

  function maintainCount(time) {
    const activeCount = objects.filter(o => o.type !== 'card').length;
    const activeCards = objects.filter(o => o.type === 'card').length;
    if (activeCount < 15 && objects.length < MAX - 15) {
      const toAdd = 15 - activeCount;
      for (let i = 0; i < toAdd; i++) {
        const x = platform.leftX + 0.4 + Math.random() * (platform.rightX - platform.leftX - 0.8);
        let type = 'coin';
        if (Math.random() < 0.12) type = 'dollar';
        else if (Math.random() < 0.04 && activeCards < MAX_ACTIVE_CARDS) {
          type = 'card';
          const z = platform.shelfBackZ + 0.5 + Math.random() * (platform.shelfDepth * 0.5);
          const obj = spawn('card', x, z);
          obj.vz = 0.06 + Math.random() * 0.07;
          continue;
        }
        const z = platform.shelfBackZ + 0.2 + Math.random() * (platform.shelfDepth * 0.5);
        const obj = spawn(type, x, z, platform.shelfSurfaceY + (type === 'coin' ? CT / 2 : BT / 2), 'sliding');
        obj.onShelf = true;
      }
    }
  }

  return {
    initObjects, dropObject, collectFallen, update, clearObjects, group,
  };
}
