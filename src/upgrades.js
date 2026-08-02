// ===== Upgrade Definitions =====

import { t } from './i18n.js';

// Categories used by the UI to render section headers + tint cost colours.
export const CATEGORY = Object.freeze({
  ECONOMY: 'economy',
  PUSH: 'push',
  CAPACITY: 'capacity',
  LUCK: 'luck',
  CURRENCY: 'currency',
  META: 'meta',
});

const upgradeDefs = [
  {
    id: 'pushPower',
    nameKey: 'pushPower',
    descKey: 'pushPowerDesc',
    icon: '💀',
    baseCost: 10,
    costMultiplier: 1.45,
    maxLevel: 20,
    effect: (level) => 1 + level * 0.3,
    category: CATEGORY.PUSH,
  },
  {
    id: 'multiDrop',
    nameKey: 'multiDrop',
    descKey: 'multiDropDesc',
    icon: '🎰',
    baseCost: 25,
    costMultiplier: 1.55,
    maxLevel: 10,
    effect: (level) => 1 + level,
    category: CATEGORY.ECONOMY,
  },
  {
    id: 'autoDrop',
    nameKey: 'autoDrop',
    descKey: 'autoDropDesc',
    icon: '🃏',
    baseCost: 60,
    costMultiplier: 1.7,
    maxLevel: 12,
    effect: (level) => level * 0.5,
    category: CATEGORY.ECONOMY,
  },
  {
    id: 'multiplier',
    nameKey: 'multiplier',
    descKey: 'multiplierDesc',
    icon: '♦️',
    baseCost: 40,
    costMultiplier: 1.85,
    maxLevel: 25,
    effect: (level) => 1 + level * 0.4,
    category: CATEGORY.ECONOMY,
  },
  {
    id: 'maxCoins',
    nameKey: 'maxCoins',
    descKey: 'maxCoinsDesc',
    icon: '🪙',
    baseCost: 15,
    costMultiplier: 1.35,
    maxLevel: 40,
    effect: (level) => 100 + level * 30,
    category: CATEGORY.CAPACITY,
  },
  {
    id: 'regenSpeed',
    nameKey: 'regenSpeed',
    descKey: 'regenDesc',
    icon: '⏳',
    baseCost: 20,
    costMultiplier: 1.5,
    maxLevel: 20,
    effect: (level) => Math.max(1, 30 - level * 1.4),
    category: CATEGORY.CAPACITY,
  },
  {
    id: 'dollarMagnet',
    nameKey: 'dollarMagnet',
    descKey: 'dollarMagnetDesc',
    icon: '💵',
    baseCost: 80,
    costMultiplier: 1.6,
    maxLevel: 15,
    effect: (level) => 1 + level * 0.3,
    category: CATEGORY.CURRENCY,
  },
  {
    // NEW: Every WIN-zone roll gets a chance of a bonus payout (random 2×–4×).
    // Caps at 10 levels to keep the variance reasonable.
    id: 'luck',
    nameKey: 'luck',
    descKey: 'luckDesc',
    icon: '🍀',
    baseCost: 200,
    costMultiplier: 1.9,
    maxLevel: 10,
    // Returns *extra* chance per level (so level 5 = +25% chance of bonus).
    effect: (level) => level * 0.05,
    category: CATEGORY.LUCK,
  },
  {
    // NEW: Extends the combo decay window (from 2.5s base up to 7.0s at max).
    // Caps at 8 because combo timers beyond that slow gameplay noticeably.
    id: 'comboShield',
    nameKey: 'comboShield',
    descKey: 'comboShieldDesc',
    icon: '🛡️',
    baseCost: 120,
    costMultiplier: 1.7,
    maxLevel: 8,
    // Returns the combo-keep window in seconds: 2.5 + 0.6 * level, capped at
    // 8s so the combo always decays eventually.
    effect: (level) => Math.min(8, 2.5 + level * 0.6),
    category: CATEGORY.CAPACITY,
  },
  {
    id: 'prestigeBoost',
    nameKey: 'prestigeBoost',
    descKey: 'prestigeBoostDesc',
    icon: '🌟',
    baseCost: 500,
    costMultiplier: 2.0,
    maxLevel: 10,
    effect: (level) => 1 + level * 0.3,
    category: CATEGORY.META,
  },
  {
    // NEW: Increases the JACKPOT trigger rate (~1-in-50 base → scales with level).
    // Each level adds +0.5% to the base 2% chance, capping at a juicy 7%.
    id: 'jackpotChance',
    nameKey: 'jackpotChance',
    descKey: 'jackpotChanceDesc',
    icon: '🎰',
    baseCost: 350,
    costMultiplier: 2.0,
    maxLevel: 10,
    effect: (level) => 0.02 + level * 0.005, // 2% → 7% at max
    category: CATEGORY.LUCK,
  },
  {
    // NEW: Every earned coin batch has a chance to be doubled (capped at maxCoins).
    // Each level adds +4%, capping at 40% at max level.
    id: 'goldenTouch',
    nameKey: 'goldenTouch',
    descKey: 'goldenTouchDesc',
    icon: '🤲',
    baseCost: 500,
    costMultiplier: 2.1,
    maxLevel: 10,
    effect: (level) => level * 0.04, // 4% → 40% at max
    category: CATEGORY.LUCK,
  },
];

// Proxy UPGRADES array that resolves names via t().
// `flavor` is a short tagline used by the UI beneath the upgrade name.
export const UPGRADES = upgradeDefs.map(def => ({
  ...def,
  get name() { return t(def.nameKey); },
  get desc() { return t(def.descKey); },
}));

export function getUpgradeCost(upgradeDef, level) {
  return Math.floor(upgradeDef.baseCost * Math.pow(upgradeDef.costMultiplier, level));
}

export function getEffectValue(upgradeDef, level) {
  return upgradeDef.effect(level);
}

// Buy multiple levels of an upgrade in one click (used by the bulk-buy UI).
// Returns an array of costs where index i is cost to go from level+i to level+i+1.
// Stops at maxLevel or when the per-step cost exceeds `coinsAvailable`.
export function getAffordableLevels(upgradeDef, currentLevel, coinsAvailable, maxAdd = 99) {
  const costs = [];
  for (let i = 0; i < maxAdd; i++) {
    const lvl = currentLevel + i;
    if (lvl >= upgradeDef.maxLevel) break;
    const cost = getUpgradeCost(upgradeDef, lvl);
    if (cost > coinsAvailable) break;
    costs.push(cost);
    coinsAvailable -= cost;
  }
  return costs;
}
