// ===== Game State & Logic (Casino Occult Edition) =====

import { UPGRADES, getUpgradeCost, getEffectValue } from './upgrades.js';
import { PRESTIGE_UPGRADES, calculatePrestigePoints, getPrestigeStats, getPrestigeCost, getPrestigeEffect } from './prestige.js';
import { loadGame, saveGame } from './save.js';

function finiteOr(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function sanitizeLevels(raw, definitions) {
  const source = raw && typeof raw === 'object' ? raw : {};
  const levels = {};
  for (const definition of definitions) {
    const level = Math.floor(finiteOr(source[definition.id], 0));
    levels[definition.id] = Math.max(0, Math.min(definition.maxLevel, level));
  }
  return levels;
}

export function createGameState() {
  const saved = loadGame();

  // Prestige data persists across resets
  const prestigePoints = Math.max(0, finiteOr(saved?.prestigePoints));
  const prestigeUpgrades = sanitizeLevels(saved?.prestigeUpgrades, PRESTIGE_UPGRADES);

  const pStats = getPrestigeStats({ prestigePoints, prestigeUpgrades });

  // Calculate maxCoins from upgrades first (needed for proper coin capping)
  const savedUpgrades = sanitizeLevels(saved?.upgrades, UPGRADES);
  const maxCoinsLevel = savedUpgrades.maxCoins || 0;
  const rawMaxCoins = getEffectValue(UPGRADES[4], maxCoinsLevel);
  const maxCoins = Math.floor(rawMaxCoins * pStats.soulMultiplier);

  const state = {
    coins: 0,       // Will be set below
    maxCoins,
    dollars: 0,     // Will be set below
    maxDollars: Math.max(10, pStats.voidStartingDollars || 0),
    totalEarned: 0,
    totalEarnedLifetime: 0,
    totalDropped: 0,
    totalDollarsEarned: 0,
    upgrades: {},
    dropCount: 0,
    lastDropTime: 0,
    autoDropAccumulator: 0,
    regenCooldown: 30,
    _regenInitialized: false,
    isGameOver: false,
    gameTime: 0,
    activeCurrency: saved?.activeCurrency === 'dollars' ? 'dollars' : 'coins',
    autoDropEnabled: saved?.autoDropEnabled ?? false,
    prestigePoints,
    prestigeUpgrades: { ...prestigeUpgrades },
    collectedCards: Array.isArray(saved?.collectedCards) ? [...saved.collectedCards] : [],
    // Lifetime records survive prestige resets.
    peakCoins: 0,
    peakDollars: 0,
    peakCombo: 0,
    bestWinStreak: 0,
    winStreak: 0,
    milestonesHit: [],
    jackpotsHit: 0,
  };

  if (saved) {
    // Load saved data with safe defaults
    state.totalEarned = Math.max(0, finiteOr(saved.totalEarned));
    state.totalEarnedLifetime = Math.max(0, finiteOr(saved.totalEarnedLifetime, state.totalEarned));
    state.totalDropped = Math.max(0, finiteOr(saved.totalDropped));
    state.totalDollarsEarned = Math.max(0, finiteOr(saved.totalDollarsEarned));
    state.upgrades = savedUpgrades;
    const savedMaxDollars = Math.max(0, finiteOr(saved.maxDollars));
    state.maxDollars = Math.max(10, pStats.voidStartingDollars || 0, savedMaxDollars);

    // Preserve legitimate zero balances. A previous minimum of 80 coins / 10
    // dollars resurrected bankrupt runs after reload and bypassed the regen
    // flow entirely.
    const loadCoins = Number.isFinite(saved.coins) ? saved.coins : 0;
    state.coins = Math.min(Math.max(loadCoins, 0), state.maxCoins);

    const loadDollars = Number.isFinite(saved.dollars) ? saved.dollars : 0;
    state.dollars = Math.min(Math.max(loadDollars, 0), state.maxDollars);

    // Restore transient gameplay state so a reload doesn't wipe progress.
    // (dropCount, lastDropTime, regenCooldown, isGameOver)
    if (Number.isFinite(saved.dropCount)) state.dropCount = Math.max(0, Math.floor(saved.dropCount));
    if (Number.isFinite(saved.lastDropTime)) state.lastDropTime = Math.max(0, saved.lastDropTime);
    if (Number.isFinite(saved.regenCooldown)) state.regenCooldown = Math.max(0, saved.regenCooldown);
    if (typeof saved.isGameOver === 'boolean') state.isGameOver = saved.isGameOver;
    // Preserve an in-progress or completed empty-wallet cooldown across a
    // reload. Without this marker updateGame treated every loaded zero balance
    // as a fresh bankruptcy and restarted the full timer.
    if (state.coins <= 0 && state.dollars <= 0) state._regenInitialized = true;

    // Restore lifetime records + progression trackers (these survive prestige).
    if (Number.isFinite(saved.peakCoins)) state.peakCoins = Math.max(0, saved.peakCoins);
    if (Number.isFinite(saved.peakDollars)) state.peakDollars = Math.max(0, saved.peakDollars);
    if (Number.isFinite(saved.peakCombo)) state.peakCombo = Math.max(0, Math.floor(saved.peakCombo));
    if (Number.isFinite(saved.bestWinStreak)) state.bestWinStreak = Math.max(0, Math.floor(saved.bestWinStreak));
    if (Number.isFinite(saved.winStreak)) state.winStreak = Math.max(0, Math.floor(saved.winStreak));
    if (Array.isArray(saved.milestonesHit)) state.milestonesHit = saved.milestonesHit;
    if (Number.isFinite(saved.jackpotsHit)) state.jackpotsHit = Math.max(0, Math.floor(saved.jackpotsHit));
    if (Number.isFinite(saved.gameTime)) state.gameTime = Math.max(0, saved.gameTime);
  } else {
    // Fresh game: start with 80 coins, maxCoins=100, dollars=10
    state.coins = 80;
    state.dollars = 10;
    state.maxDollars = 10;
  }

  return state;
}

// --- GAMBLING (Double or Nothing) ---
// Players can risk a portion of their coins for a 50/50 chance to double the
// wager. Winning adds the wager amount; losing subtracts it (already deducted).
export function gambleCoins(state, wager) {
  if (state.coins < wager || wager <= 0) {
    return { success: false, reason: 'not_enough_coins' };
  }
  const win = Math.random() < 0.5;
  if (win) {
    state.coins += wager; // Get back wager + win wager = double
  } else {
    state.coins -= wager; // Lose the wager
  }
  state.totalDropped += wager; // Track gambled coins as "dropped" for stats
  return { success: true, win, wager, newBalance: Math.floor(state.coins) };
}

export function getUpgradeLevel(state, upgradeId) {
  return state.upgrades[upgradeId] || 0;
}

export function getEffectiveStats(state) {
  // Memoize per-frame to avoid rebuilding the upgrade/prestige ladder at every
  // render tick. Bumped only when an upgrade, prestige-upgrade or relevant
  // runtime stat (coins/dollars caps) changes.
  if (state._cachedStats && state._cachedStatsKey !== undefined) {
    const key = state._cachedStatsKey;
    if (key.upgradesRef === state.upgrades
      && key.prestigeUpgradesRef === state.prestigeUpgrades
      && key.activeCurrency === state.activeCurrency
      && key.autoDropEnabled === state.autoDropEnabled) {
      return state._cachedStats;
    }
  }

  // Find upgrades by id rather than by array index so reordering / adding
  // upgrades is safe.
  const findUpg = (id) => UPGRADES.find(u => u.id === id);

  const pushPowerLv = getUpgradeLevel(state, 'pushPower');
  const multiDropLv = getUpgradeLevel(state, 'multiDrop');
  const autoDropLv = getUpgradeLevel(state, 'autoDrop');
  const multiplierLv = getUpgradeLevel(state, 'multiplier');
  const maxCoinsLv = getUpgradeLevel(state, 'maxCoins');
  const regenLv = getUpgradeLevel(state, 'regenSpeed');
  const dollarMagnetLv = getUpgradeLevel(state, 'dollarMagnet');
  const prestigeBoostLv = getUpgradeLevel(state, 'prestigeBoost');
  const luckLv = getUpgradeLevel(state, 'luck');
  const comboShieldLv = getUpgradeLevel(state, 'comboShield');
  const jackpotChanceLv = getUpgradeLevel(state, 'jackpotChance');
  const goldenTouchLv = getUpgradeLevel(state, 'goldenTouch');

  const pStats = getPrestigeStats(state);

  const pushPower = getEffectValue(findUpg('pushPower'), pushPowerLv);
  const coinsPerDrop = getEffectValue(findUpg('multiDrop'), multiDropLv);
  const autoDropRate = getEffectValue(findUpg('autoDrop'), autoDropLv) * pStats.occultSpeedBonus;
  const rewardMultiplier = getEffectValue(findUpg('multiplier'), multiplierLv) * pStats.darkMultiplier * pStats.saintMultiplier;
  const maxCoins = Math.floor(getEffectValue(findUpg('maxCoins'), maxCoinsLv) * pStats.soulMultiplier);
  const regenCooldown = getEffectValue(findUpg('regenSpeed'), regenLv);
  const dollarMultiplier = getEffectValue(findUpg('dollarMagnet'), dollarMagnetLv);
  const prestigeBoost = getEffectValue(findUpg('prestigeBoost'), prestigeBoostLv);
  const luckChance = getEffectValue(findUpg('luck'), luckLv);
  const comboWindow = getEffectValue(findUpg('comboShield'), comboShieldLv);
  const jackpotChance = getEffectValue(findUpg('jackpotChance'), jackpotChanceLv);
  const goldenTouch = getEffectValue(findUpg('goldenTouch'), goldenTouchLv);

  const stats = {
    pushPower, coinsPerDrop, autoDropRate,
    rewardMultiplier, maxCoins, regenCooldown,
    dollarMultiplier, prestigeBoost,
    luckChance, comboWindow,
    jackpotChance, goldenTouch,
  };

  state._cachedStats = stats;
  state._cachedStatsKey = {
    upgradesRef: state.upgrades,
    prestigeUpgradesRef: state.prestigeUpgrades,
    activeCurrency: state.activeCurrency,
    autoDropEnabled: state.autoDropEnabled,
  };
  return stats;
}

// Compute the effective combo-decay window (seconds). Combines base 2.5 with
// the comboShield upgrade via getEffectiveStats(state).
export function getComboWindow(state) {
  const stats = getEffectiveStats(state);
  return stats.comboWindow || 2.5;
}

// Reward calculation is intentionally not exported anymore. Rewards are
// credited only when coins cross into a WIN zone via collectFallen() — kept
// inline in main.js so the economy has a single source of truth (the WIN-zone
// collector), rather than a separate per-drop formula.

// Drop coins
export function dropCoins(state, coinDropCallback) {
  const stats = getEffectiveStats(state);

  if (state.activeCurrency === 'dollars') {
    return dropDollars(state, stats, coinDropCallback);
  }

  const cost = 1; // Always 1 coin per drop — simple!

  if (state.coins < cost) {
    return { success: false, reason: 'no_coins' };
  }

  state.coins -= cost;
  state.totalDropped += cost;
  state.dropCount++;
  state.lastDropTime = Date.now();

  // Combo reward: every 10 combo gives a free coin (capped at maxCoins)
  let comboBonus = 0;
  if (state.dropCount % 10 === 0) {
    comboBonus = 1;
    state.coins = Math.min(state.coins + comboBonus, state.maxCoins);
  }

  // NO immediate reward — income comes only from coins falling into win zones

  if (coinDropCallback) {
    coinDropCallback({
      spent: cost, earned: 0, total: state.coins,
      isCombo: state.dropCount > 5, comboCount: state.dropCount,
      pushForce: stats.pushPower, currency: 'coins',
      coinsPerDrop: stats.coinsPerDrop,
      comboBonus,
    });
  }

  return { success: true, spent: cost, earned: 0, total: state.coins, stats };
}

function dropDollars(state, stats, callback) {
  const cost = 1;
  if (state.dollars < cost) {
    return { success: false, reason: 'no_dollars' };
  }

  state.dollars -= cost;
  state.totalDropped += cost;
  state.dropCount++;
  state.lastDropTime = Date.now();

  // NO immediate reward — income comes only from bills falling into win zones

  if (callback) {
    callback({
      spent: cost, earned: 0, total: state.dollars,
      isCombo: state.dropCount > 5, comboCount: state.dropCount,
      pushForce: stats.pushPower * 0.8, currency: 'dollars',
      coinsPerDrop: 1,
      comboBonus: 0,
    });
  }

  return { success: true, spent: cost, earned: 0, total: state.dollars, stats };
}

export function buyUpgrade(state, upgradeId, maxLevels = 1) {
  const upgrade = UPGRADES.find(u => u.id === upgradeId);
  if (!upgrade) return { success: false, reason: 'not_found' };

  // Buy up to `maxLevels` levels in one transaction. Used for the bulk-buy
  // (shift-click) affordance in the UI. Single save at the end.
  let purchased = 0;
  let lastReason = null;
  for (let i = 0; i < maxLevels; i++) {
    const lvl = getUpgradeLevel(state, upgradeId);
    if (lvl >= upgrade.maxLevel) { lastReason = 'max_level'; break; }
    const cost = getUpgradeCost(upgrade, lvl);
    if (state.coins < cost) { lastReason = 'not_enough_coins'; break; }
    state.coins -= cost;
    state.upgrades[upgradeId] = lvl + 1;
    purchased++;
  }

  if (purchased === 0) {
    return { success: false, reason: lastReason || 'not_enough_coins' };
  }

  // Upgrade levels mutate the existing object. Clear the memoized stats before
  // recomputing so push power, capacity, auto-drop, and other effects apply
  // immediately instead of remaining stuck at the first frame's values.
  state._cachedStats = null;
  state._cachedStatsKey = undefined;
  const stats = getEffectiveStats(state);
  state.maxCoins = stats.maxCoins;
  saveGame(state);
  return {
    success: true,
    newLevel: state.upgrades[upgradeId],
    levelsPurchased: purchased,
    stats,
  };
}

export function buyPrestigeUpgrade(state, upgradeId) {
  const upgrade = PRESTIGE_UPGRADES.find(u => u.id === upgradeId);
  if (!upgrade) return { success: false, reason: 'not_found' };

  const currentLevel = state.prestigeUpgrades[upgradeId] || 0;
  if (currentLevel >= upgrade.maxLevel) {
    return { success: false, reason: 'max_level' };
  }

  const cost = getPrestigeCost(upgrade, currentLevel);
  if (state.prestigePoints < cost) {
    return { success: false, reason: 'not_enough_prestige' };
  }

  state.prestigePoints -= cost;
  state.prestigeUpgrades[upgradeId] = (state.prestigeUpgrades[upgradeId] || 0) + 1;
  // Prestige upgrades mutate the existing object, so invalidate the cached
  // effective stats explicitly rather than waiting for a reference change.
  state._cachedStats = null;
  state._cachedStatsKey = undefined;

  saveGame(state);
  return { success: true, newLevel: state.prestigeUpgrades[upgradeId] };
}

// Claim free coins when at 0
export function claimFreeCoins(state) {
  const stats = getEffectiveStats(state);
  const freeAmount = Math.max(5, Math.floor(state.totalEarnedLifetime / 100));
  state.coins = Math.min(state.coins + freeAmount, state.maxCoins);
  state.regenCooldown = stats.regenCooldown;
  state._regenInitialized = false;
  return freeAmount;
}

// PRESTIGE: reset progress for permanent points
export function performPrestige(state) {
  const earned = state.totalEarnedLifetime || state.totalEarned;
  const dEarned = state.totalDollarsEarned || 0;
  const boostLevel = state.upgrades.prestigeBoost || 0;
  const prestigeBoostUpgrade = UPGRADES.find(upgrade => upgrade.id === 'prestigeBoost');
  const boostMultiplier = boostLevel > 0 && prestigeBoostUpgrade
    ? getEffectValue(prestigeBoostUpgrade, boostLevel)
    : 1;
  const rawPoints = calculatePrestigePoints(earned, dEarned);
  const newPoints = Math.floor(rawPoints * boostMultiplier);

  if (newPoints <= state.prestigePoints) {
    return { success: false, reason: 'no_gain', current: state.prestigePoints };
  }

  if (earned < 100 && dEarned < 10) {
    return { success: false, reason: 'no_gain', current: state.prestigePoints };
  }

  // Preserve prestige progress and achievements
  const savedCards = [...(state.collectedCards || [])];
  const pUpgrades = { ...state.prestigeUpgrades };

  // Reset run progress while keeping prestige
  state.upgrades = {};
  state.dropCount = 0;
  state.lastDropTime = 0;
  state.autoDropAccumulator = 0;
  state.regenCooldown = 30;
  state._regenInitialized = false;
  state.isGameOver = false;
  state.gameTime = 0;
  state.totalEarned = 0;
  state.totalDropped = 0;
  state.totalDollarsEarned = 0;
  state.prestigePoints = newPoints;
  state.prestigeUpgrades = pUpgrades;
  state.collectedCards = savedCards;

  // Apply prestige bonuses to starting amounts
  const soulBonus = state.prestigeUpgrades.soulBonus || 0;
  const voidDollars = state.prestigeUpgrades.voidDollars || 0;
  state.maxCoins = Math.floor(getEffectValue(UPGRADES[4], 0) * getPrestigeStats(state).soulMultiplier);
  state.coins = Math.min(Math.max(25, Math.floor(25 * (1 + soulBonus * 0.5))), state.maxCoins);
  state.maxDollars = Math.max(10, voidDollars * 50);
  state.dollars = state.maxDollars;

  saveGame(state);
  return { success: true, prestigePoints: newPoints, gained: newPoints };
}

export function updateGame(state, dt, dropCallback) {
  state.gameTime += dt;
  const stats = getEffectiveStats(state);

  // Auto-drop
  if (state.autoDropEnabled && stats.autoDropRate > 0) {
    state.autoDropAccumulator += stats.autoDropRate * dt;
    while (state.autoDropAccumulator >= 1 && state.coins >= 1) {
      state.autoDropAccumulator -= 1;
      const cost = 1;
      if (state.coins >= cost) {
        state.coins -= cost;
        state.totalDropped += cost;
        state.dropCount++;
        state.lastDropTime = Date.now();
        // NO immediate reward — income from collectFallen only
        if (dropCallback) {
          dropCallback({
            spent: cost, earned: 0, total: state.coins,
            isCombo: state.dropCount > 5, comboCount: state.dropCount,
            pushForce: stats.pushPower * 0.7, isAuto: true, currency: 'coins',
            coinsPerDrop: stats.coinsPerDrop,
            comboBonus: 0,
          });
        }
      }
    }
  }

  // Regen
  if (state.coins <= 0 && state.dollars <= 0) {
    // Start the cooldown from the upgrade-based value (regenSpeed) the first
    // time the player runs dry — previously it always counted down from the
    // hardcoded 30, ignoring the upgrade entirely.
    if (!state._regenInitialized) {
      state.regenCooldown = stats.regenCooldown;
      state._regenInitialized = true;
    }
    state.regenCooldown -= dt;
    if (state.regenCooldown <= 0) {
      state.regenCooldown = 0;
      state.isGameOver = true;
    }
  } else {
    state.isGameOver = false;
    state._regenInitialized = false;
    state.regenCooldown = stats.regenCooldown; // Reset timer when player has coins
  }    // Decay combo gradually after `comboWindow` seconds of inactivity
  // (1 per second). The window grows with the comboShield upgrade.
  const COMBO_WINDOW_MS = getComboWindow(state) * 1000;
  if (Date.now() - state.lastDropTime > COMBO_WINDOW_MS && state.dropCount > 0) {
    state._comboDecayAccum = (state._comboDecayAccum || 0) + dt;
    if (state._comboDecayAccum >= 1.0) {
      state.dropCount = Math.max(0, state.dropCount - Math.floor(state._comboDecayAccum));
      state._comboDecayAccum = state._comboDecayAccum % 1;
    }
  } else {
    state._comboDecayAccum = 0;
  }

  return state;
}
