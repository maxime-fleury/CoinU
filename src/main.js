// ===== COIN PUSHER 3D - Casino Edition =====

import * as THREE from 'three';
import { createScene } from './scene.js';
import { createPlatform } from './platform.js';
import { createObjectSystem } from './coin.js';
import {
  createGameState, dropCoins, buyUpgrade, buyPrestigeUpgrade,
  claimFreeCoins, updateGame, performPrestige, getEffectiveStats,
  gambleCoins,
} from './game.js';
import { createUI } from './ui.js';
import { saveGame, autoSaveLoop, resetSave } from './save.js';
import { t } from './i18n.js';
import { playSound } from './audio.js';

// --- Init ---
const container = document.getElementById('canvas-container');
const sceneData = createScene(container);
if (!sceneData) {
  // WebGL fallback already rendered an explanation into the container.
  // Bail without crashing the rest of the page.
  console.warn('Aborting game init: WebGL unavailable.');
  throw new Error('WebGL unavailable');
}
const { scene, camera, renderer, controls, updateFlames, updateAmbient } = sceneData;
const platform = createPlatform(scene);
const gameState = createGameState();
const savedCardCount = (gameState.collectedCards || []).length;
const objectSystem = createObjectSystem(scene, platform, savedCardCount);

// --- Callbacks (defined early so they're available when createUI references them) ---
function handleDrop() {
  const result = dropCoins(gameState, (dropResult) => {
    const objType = dropResult.currency === 'dollars' ? 'dollar' : 'coin';
    const count = Math.max(1, Math.floor(dropResult.coinsPerDrop || 1));
    for (let i = 0; i < count; i++) {
      setTimeout(() => objectSystem.dropObject(dropResult.pushForce, objType), i * 50);
    }
    if (dropResult.comboBonus > 0) {
      ui.showNotification('🔥 Combo bonus +' + dropResult.comboBonus + ' coin!', 'success');
    }
    ui.showDropResult(dropResult);
    ui.updateCombo(dropResult.comboCount);
    playSound('drop');
  });

  if (!result.success) {
    const emoji = gameState.activeCurrency === 'dollars' ? '\uD83D\uDCB5' : '\uD83E\uDE99';
    const msg = emoji + ' ' + t(gameState.activeCurrency === 'dollars' ? 'notEnoughDollars' : 'notEnoughCoins');
    ui.showNotification(msg, 'danger');
    // Only declare game over when BOTH currencies are exhausted — if the
    // player still has dollars they can just switch currency. Start the
    // free-coin cooldown from the upgrade-based regenSpeed value.
    if (gameState.activeCurrency === 'coins' && gameState.coins <= 0 && gameState.dollars <= 0) {
      if (!gameState._regenInitialized) {
        gameState.regenCooldown = getEffectiveStats(gameState).regenCooldown;
        gameState._regenInitialized = true;
      }
      gameState.isGameOver = true;
    }
  }

  ui.refresh(gameState);
  saveGame(gameState);
}

function handleBuyUpgrade(upgradeId, levels = 1) {
  const result = buyUpgrade(gameState, upgradeId, levels);
  if (result.success) {
    const msg = result.levelsPurchased > 1
      ? '\u2B06\uFE0F ' + t('upgraded') + result.newLevel + ' (+' + result.levelsPurchased + ')'
      : '\u2B06\uFE0F ' + t('upgraded') + result.newLevel;
    ui.showNotification(msg, 'success');
    ui.showUpgradeFlash();
    ui.refresh(gameState);
    saveGame(gameState);
    playSound('upgrade');
  } else if (result.reason === 'not_enough_coins') {
    ui.showNotification('\uD83E\uDE99 ' + t('notEnoughCoins'), 'danger');
  } else if (result.reason === 'max_level') {
    ui.showNotification('\u2B50 ' + t('maxLevel'), 'info');
  }
}

function handleBuyPrestigeUpgrade(upgradeId) {
  const result = buyPrestigeUpgrade(gameState, upgradeId);
  if (result.success) {
    ui.showNotification('\uD83D\uDC51 ' + t('prestigeUp') + result.newLevel, 'prestige');
    ui.refresh(gameState);
    saveGame(gameState);
    playSound('upgrade');
  } else if (result.reason === 'not_enough_prestige') {
    ui.showNotification(t('notEnoughPrestige'), 'danger');
  } else if (result.reason === 'max_level') {
    ui.showNotification('\u2B50 ' + t('maxLevel'), 'info');
  }
}

function handleClaimFree() {
  const amount = claimFreeCoins(gameState);
  ui.showNotification('\uD83C\uDF81 +' + amount + ' ' + t('freeCoins'), 'success');
  gameState.isGameOver = false;
  ui.hideFreeModal();
  ui.refresh(gameState);
  saveGame(gameState);
}

function handleCurrencySwitch(currency) {
  gameState.activeCurrency = currency;
  ui.updateCurrencyUI();
  ui.updateDropButton(
    currency === 'coins' ? gameState.coins >= 1 : gameState.dollars >= 1
  );
}

function handlePrestige() {
  const result = performPrestige(gameState);
  if (result.success) {
    ui.showNotification(
      '\uD83C\uDF1F ' + t('prestigeGain') + result.gained + t('prestigeTotal') + result.prestigePoints + ')',
      'prestige'
    );
    objectSystem.initObjects(20, 3);
    ui.refresh(gameState);
    ui.switchTab('prestige');
    saveGame(gameState);
    playSound('prestige');
  } else if (result.reason === 'no_gain') {
    ui.showNotification(t('prestigeWait') + result.current + t('prestigeCurrent'), 'info');
  }
}

function handleReset() {
  if (confirm(t('resetConfirm'))) {
    resetSave();
    location.reload();
  }
}

function handleGamble(wager) {
  const result = gambleCoins(gameState, wager);
  if (result.success) {
    ui.showGambleResult(result);
    ui.refresh(gameState);
    saveGame(gameState);
    playSound(result.win ? 'win' : 'lose');
  } else {
    ui.showNotification('\uD83E\uDE99 ' + t('notEnoughCoins'), 'danger');
  }
}

const ui = createUI(gameState, {
  onDrop: handleDrop,
  onBuyUpgrade: handleBuyUpgrade,
  onBuyPrestigeUpgrade: handleBuyPrestigeUpgrade,
  onClaimFree: handleClaimFree,
  onReset: handleReset,
  onPrestige: handlePrestige,
  onCurrencySwitch: handleCurrencySwitch,
  onGamble: handleGamble,
});

// Render gamble UI once after creation
ui.renderGambleUI();

// --- Title Effect (animated neon sign) ---
function createTitleEffect() {
  const group = new THREE.Group();
  const blockMat = new THREE.MeshStandardMaterial({
    color: 0xffdd44,
    emissive: 0xff8800,
    emissiveIntensity: 0.4,
  });
  const positions = [-2.4, -1.6, -0.8, 0, 0.8, 1.6, 2.4];
  positions.forEach((lx) => {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.22, 0.03), blockMat);
    box.position.set(lx, platform.height + 2.3, -platform.depth / 2 - 0.11);
    group.add(box);
  });
  scene.add(group);
}
createTitleEffect();

// --- Neon particles (purple/gold) ---
const particleSystem = (() => {
  const count = 200;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const vel = new Float32Array(count * 3);
  const life = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    pos[i*3] = 0; pos[i*3+1] = -10; pos[i*3+2] = 0;
    colors[i*3] = 0.6 + Math.random() * 0.4;
    colors[i*3+1] = 0.2 + Math.random() * 0.3;
    colors[i*3+2] = 0.6 + Math.random() * 0.4;
    life[i] = 0;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.04, vertexColors: true, transparent: true, opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  let active = 0;

  function emit(x, y, z, n = 10) {
    const p = geo.attributes.position.array;
    for (let i = 0; i < Math.min(n, count); i++) {
      const idx = (active + i) % count;
      p[idx*3] = x + (Math.random()-0.5)*0.6;
      p[idx*3+1] = y + (Math.random()-0.5)*0.6;
      p[idx*3+2] = z + (Math.random()-0.5)*0.6;
      vel[idx*3] = (Math.random()-0.5)*2;
      vel[idx*3+1] = Math.random()*3+1;
      vel[idx*3+2] = (Math.random()-0.5)*2;
      life[idx] = 1+Math.random();
    }
    active = (active + n) % count;
    geo.attributes.position.needsUpdate = true;
  }

  function update(dt) {
    const p = geo.attributes.position.array;
    let need = false;
    for (let i = 0; i < count; i++) {
      if (life[i] > 0) {
        life[i] -= dt;
        p[i*3] += vel[i*3] * dt;
        p[i*3+1] += vel[i*3+1] * dt;
        p[i*3+2] += vel[i*3+2] * dt;
        vel[i*3+1] -= 4*dt;
        need = true;
        if (life[i] <= 0) p[i*3+1] = -10;
      }
    }
    if (need) geo.attributes.position.needsUpdate = true;
  }
  return { emit, update };
})();

// --- Auto-save ---
autoSaveLoop(gameState);

// --- Initial ---
objectSystem.initObjects(20, 5); // initObjects already spawns 2 towers internally
ui.refresh(gameState);

// --- Neon flicker animation ---
let neonTime = 0;

// --- Game loop ---
let lastTime = performance.now();
let autoCheck = 0;

// ===== Gameplay progression helpers =====
//
// Player-facing feedback systems that make the incremental loop feel rewarding:
//   * MILESTONES — one-time thresholds (100, 500, 1k…1M lifetime coins) granting
//     a free-coin bonus + special notification.
//   * JACKPOT    — rare ~1-in-50 win-batch event with a +25 coin bonus + giant
//     screen flash + gold particle explosion.
//   * WIN STREAK — consecutive wins-without-hole counter (resets on any hole
//     loss). Builds tension: the longer your streak, the more painful a fall.
//   * PEAKS      — silently tracked; surfaced in the stats panel.
//
// All updates are pure functions of gameState — UI side just observes state.

const MILESTONE_THRESHOLDS = [
  { value: 100, key: 'milestone100' },
  { value: 500, key: 'milestone500' },
  { value: 1000, key: 'milestone1k' },
  { value: 5000, key: 'milestone5k' },
  { value: 10000, key: 'milestone10k' },
  { value: 50000, key: 'milestone50k' },
  { value: 100000, key: 'milestone100k' },
  { value: 500000, key: 'milestone500k' },
  { value: 1000000, key: 'milestone1m' },
];

// Returns the first milestone whose `value > lastEarned && value <= earned`
// and that hasn't been credited yet — used to detect crossings.
function checkMilestoneCrossing(state, earned) {
  const hit = state.milestonesHit || [];
  for (const m of MILESTONE_THRESHOLDS) {
    if (earned >= m.value && !hit.includes(m.value)) return m;
  }
  return null;
}

// Removed unused `maybeResetStreak` helper — streak logic is inline in animate().
function updatePeaks(state) {
  if (state.coins > (state.peakCoins || 0)) state.peakCoins = Math.floor(state.coins);
  if (state.dollars > (state.peakDollars || 0)) state.peakDollars = Math.floor(state.dollars);
  if (state.dropCount > (state.peakCombo || 0)) state.peakCombo = state.dropCount;
}

function animate(time) {
  requestAnimationFrame(animate);

  const dt = Math.min((time - lastTime) / 1000, 0.05);
  lastTime = time;

  updateGame(gameState, dt, (result) => {
    const objType = result.currency === 'dollars' ? 'dollar' : 'coin';
    const count = Math.max(1, Math.floor(result.coinsPerDrop || 1));
    for (let i = 0; i < count; i++) {
      setTimeout(() => objectSystem.dropObject(result.pushForce, objType), i * 50);
    }
    ui.showDropResult(result);
    ui.updateCombo(result.comboCount);
  });

  autoCheck += dt;
  if (autoCheck > 0.5) {
    autoCheck = 0;
    const fallen = objectSystem.collectFallen();
    // Apply upgrade multipliers to fallen coin values
    const fallStats = getEffectiveStats(gameState);
    const winCoins = Math.floor(fallen.win.coins * fallStats.rewardMultiplier);
    const winDollars = Math.floor(fallen.win.dollars * fallStats.dollarMultiplier);
    const holeCoins = fallen.hole.coins;
    const holeDollars = fallen.hole.dollars;

    // Process WIN zone
    if (winCoins > 0 || winDollars > 0 || fallen.win.cards.length > 0) {
      // Apply Luck upgrade: with luckChance probability, a single coin in this
      // batch gets multiplied by 2×/3×/4× (weighted). Keeps the variance
      // manageable while making top-level Luck feel rewarding.
      let luckBonus = 0;
      const luckChance = Math.max(0, Math.min(1, fallStats.luckChance || 0));
      if (luckChance > 0 && fallen.win.coins > 0) {
        // Per-coin roll so the bonus scales with batch size.
        for (let i = 0; i < fallen.win.coins; i++) {
          if (Math.random() < luckChance) {
            const mult = (Math.random() < 0.6 ? 2 : (Math.random() < 0.85 ? 3 : 4));
            luckBonus += mult - 1; // extra coins beyond the base 1
          }
        }
      }
      // Per-card luck: each WIN-zone card rolls for an extra bonus. Cards
      // already pay +10 base, so a smaller per-card bonus (+5) keeps the
      // upgrade impactful without making card spawns dominate the economy.
      let cardLuckBonus = 0;
      if (luckChance > 0 && fallen.win.cards.length > 0) {
        for (let i = 0; i < fallen.win.cards.length; i++) {
          if (Math.random() < luckChance) cardLuckBonus += 5;
        }
      }
      const baseWin = winCoins + luckBonus + cardLuckBonus;

      // Golden Touch upgrade: chance to double the entire earned batch
      let goldenMultiplier = 1;
      const goldenTouch = fallStats.goldenTouch || 0;
      if (goldenTouch > 0 && Math.random() < goldenTouch && baseWin > 0) {
        goldenMultiplier = 2;
        ui.showNotification('🤲 GOLDEN TOUCH! Double coins!', 'prestige');
        ui.showZoneFeedback('×2 GOLDEN!', 'win', window.innerWidth / 2, window.innerHeight / 2 + 120);
      }
      const effectiveWin = baseWin * goldenMultiplier;
      const coinsToAdd = Math.min(effectiveWin, gameState.maxCoins - gameState.coins);
      const wasted = effectiveWin - Math.max(0, coinsToAdd);
      gameState.coins += Math.max(0, coinsToAdd);
      gameState.totalEarned += Math.max(0, coinsToAdd);
      gameState.totalEarnedLifetime = (gameState.totalEarnedLifetime || 0) + Math.max(0, coinsToAdd);

      // Dollar bills that land in WIN give actual dollars back
      if (winDollars > 0) {
        const dollarsToAdd = Math.min(winDollars, gameState.maxDollars - gameState.dollars);
        gameState.dollars += Math.max(0, dollarsToAdd);
        gameState.totalDollarsEarned = (gameState.totalDollarsEarned || 0) + Math.max(0, dollarsToAdd);
      }

      // Notify on lucky bonus coins (visual feedback for the Luck upgrade).
      if (luckBonus > 1) {
        ui.showNotification('\uD83C\uDF40 Lucky bonus +' + luckBonus + ' !', 'prestige');
      }

      // Show wasted coins indicator
      if (wasted > 0 && gameState.coins >= gameState.maxCoins) {
        ui.showCoinsWasted(wasted);
      }

      // Gold particles (at center front)
      particleSystem.emit(0, platform.height + 0.3, platform.frontDropZ + 0.3,
        (winCoins + winDollars + fallen.win.cards.length) * 5);
      
      if (coinsToAdd > 0) {
        ui.showNotification('\uD83C\uDF89 +' + coinsToAdd + ' ' + t('coinsEarned'), 'success');
        playSound(coinsToAdd >= 5 ? 'bigwin' : 'win');
        ui.showZoneFeedback('+' + coinsToAdd, 'win', window.innerWidth / 2 + (Math.random() - 0.5) * 100, window.innerHeight / 2 + 80);
        // Screen shake scales with win size — soft for normal, harder for big.
        if (coinsToAdd >= 10) ui.screenShake(2);
        else if (coinsToAdd >= 3) ui.screenShake(1);
      }

      // --- JACKPOT rare event ---
      // Base chance is 2% (~1-in-50 win batches). The Jackpot's Favor upgrade
      // increases this up to 7% at max level.
      const jackpotChance = fallStats.jackpotChance || 0.02;
      if (coinsToAdd > 0 && Math.random() < jackpotChance) {
        const tierRoll = Math.random();
        const jackpotBonus = tierRoll < 0.7 ? 25 : (tierRoll < 0.95 ? 50 : 100);
        ui.showJackpot(jackpotBonus);
        ui.screenShake(2);
        playSound('jackpot');
        ui.showCoinRain(35); // Extra coin rain celebration
        // Extra bonus particles and a screen flash for the celebration.
        particleSystem.emit(0, platform.height + 0.6, platform.frontDropZ + 0.5, 60);
        gameState.coins = Math.min(gameState.coins + jackpotBonus, gameState.maxCoins);
        gameState.totalEarned += jackpotBonus;
        gameState.totalEarnedLifetime = (gameState.totalEarnedLifetime || gameState.totalEarned) + jackpotBonus;
        gameState.jackpotsHit = (gameState.jackpotsHit || 0) + 1;
      }

      // --- MILESTONE detection ---
      // When lifetime earnings cross one of [100, 500, 1k, 5k…1M] for the first
      // time, grant a one-time bonus equal to 5% of the milestone value and
      // fire a special banner. Multiple milestones in a single batch fire
      // sequentially (rare but possible after prestige).
      let safetyIter = 0;
      while (safetyIter++ < 4) {
        const m = checkMilestoneCrossing(gameState, gameState.totalEarnedLifetime || 0);
        if (!m) break;
        gameState.milestonesHit.push(m.value);
        const milestoneBonus = Math.floor(m.value * 0.05);
        if (milestoneBonus > 0) {
          gameState.coins = Math.min(gameState.coins + milestoneBonus, gameState.maxCoins);
          gameState.totalEarned += milestoneBonus;
          gameState.totalEarnedLifetime = (gameState.totalEarnedLifetime || gameState.totalEarned) + milestoneBonus;
        }
        ui.showMilestone(m, milestoneBonus);
        ui.showCoinRain(15); // Coin rain on milestone
        particleSystem.emit(0, platform.height + 0.5, platform.frontDropZ + 0.4, 25);
      }

      // Card collection!
      if (fallen.win.cards.length > 0) {
        if (!gameState.collectedCards) gameState.collectedCards = [];
        fallen.win.cards.forEach(cardId => {
          if (!gameState.collectedCards.includes(cardId)) {
            gameState.collectedCards.push(cardId);
            ui.showNotification('\uD83C\uDCCF ' + t('cardCollected') + gameState.collectedCards.length, 'prestige');
            const cardBonus = 10;
            gameState.coins = Math.min(gameState.coins + cardBonus, gameState.maxCoins);
            gameState.totalEarned += cardBonus;
            // Card bonus should count toward lifetime prestige progress
            // (previously only totalEarned was bumped, undercounting prestige).
            gameState.totalEarnedLifetime =
              (gameState.totalEarnedLifetime || gameState.totalEarned) + cardBonus;
          }
        });
      }
    }

    // Process HOLE zone
    if (holeCoins > 0 || holeDollars > 0 || fallen.hole.cards.length > 0) {
      // Red particles (at center front)
      particleSystem.emit(0, platform.height + 0.3, platform.frontDropZ + 0.3,
        (holeCoins + holeDollars + fallen.hole.cards.length) * 3);
      
      if (holeCoins > 1) {
        ui.showNotification('\uD83D\uDC80 ' + holeCoins + ' ' + t('coinsLost'), 'danger');
        playSound('lose');
        ui.showZoneFeedback('-' + holeCoins, 'hole', window.innerWidth / 2 + (Math.random() - 0.5) * 100, window.innerHeight / 2 + 80);
        // Mild shake on heavy losses (3+ coins) — visual feedback without
        // matching JACKPOT intensity.
        if (holeCoins >= 3) ui.screenShake(1);
      }
      if (holeDollars > 0) {
        ui.showNotification('\uD83D\uDC80 ' + holeDollars + ' $ ' + t('coinsLost'), 'danger');
      }
      if (fallen.hole.cards.length > 0) {
        ui.showNotification('\uD83D\uDC94 ' + fallen.hole.cards.length + ' ' + t('cardsLost'), 'danger');
      }
    }

    // --- WIN STREAK tracking (unified — runs after both WIN and HOLE) ---
    if (holeCoins > 0) {
      // Streak broken — record best, reset to 0
      if (gameState.winStreak > 0) {
        gameState.bestWinStreak = Math.max(gameState.bestWinStreak || 0, gameState.winStreak);
      }
      gameState.winStreak = 0;
      ui.updateStreak(0, gameState.bestWinStreak || 0, true);
    } else if (winCoins > 0 || winDollars > 0) {
      // Pure win batch (no holes) — increment streak
      gameState.winStreak = (gameState.winStreak || 0) + 1;
      if (gameState.winStreak > (gameState.bestWinStreak || 0)) {
        gameState.bestWinStreak = gameState.winStreak;
      }
      ui.updateStreak(gameState.winStreak, gameState.bestWinStreak || 0, false);
    }

    // Track peak values continuously so the stats panel reflects new highs.
    updatePeaks(gameState);
  }

  platform.updateMechanism(time / 1000);
  objectSystem.update(dt, time / 1000);
  particleSystem.update(dt);
  updateFlames(time / 1000);
  updateAmbient(time / 1000);

  ui.updateHUD();

  if (gameState.coins <= 0 && gameState.dollars <= 0 && gameState.regenCooldown > 0) {
    ui.updateRegenTimer(gameState.regenCooldown);
  } else if (gameState.isGameOver) {
    // Cooldown just expired while the player was idle — surface the free-coin
    // modal immediately instead of waiting for the next user action.
    ui.showFreeModal(Math.max(1, gameState.regenCooldown));
  } else {
    // Player is solvent again (e.g. a coin fell into the WIN zone while the
    // modal was open) — dismiss the modal instead of trapping them in it.
    ui.hideFreeModal();
  }

  controls.update();
  renderer.render(scene, camera);
}

animate(performance.now());

window.addEventListener('beforeunload', () => saveGame(gameState));

console.log('🃏 COIN PUSHER CASINO OCCULT loaded!');
console.log('🎮 SPACE=drop, 1-9,0=upgrades, TAB=prestige');
