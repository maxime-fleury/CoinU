// ===== Prestige System =====

import { t } from './i18n.js';

const prestigeUpgradeDefs = [
  {
    id: 'soulBonus',
    nameKey: 'soulBonus',
    descKey: 'soulBonusDesc',
    icon: '💜',
    baseCost: 1,
    costMultiplier: 2,
    maxLevel: 10,
    effect: (level) => 1 + level * 0.5,
  },
  {
    id: 'darkMultiplier',
    nameKey: 'darkMultiplier',
    descKey: 'darkMultiplierDesc',
    icon: '🌙',
    baseCost: 3,
    costMultiplier: 2.5,
    maxLevel: 8,
    // Was Math.pow(2, level) which compounded to 256× at max — combined with
    // saintGold that put late-prestige runs at multi-million-x. Capped growth:
    effect: (level) => 1 + level, // 1, 2, 3, 4, 5, 6, 7, 8, 9
  },
  {
    id: 'voidDollars',
    nameKey: 'voidDollars',
    descKey: 'voidDollarsDesc',
    icon: '💵',
    baseCost: 2,
    costMultiplier: 2,
    maxLevel: 10,
    effect: (level) => level * 50,
  },
  {
    id: 'occultAuto',
    nameKey: 'occultAuto',
    descKey: 'occultAutoDesc',
    icon: '🔮',
    baseCost: 5,
    costMultiplier: 3,
    maxLevel: 5,
    effect: (level) => 1 + level * 0.4,
  },
  {
    id: 'saintGold',
    nameKey: 'saintGold',
    descKey: 'saintGoldDesc',
    icon: '⭐',
    baseCost: 8,
    costMultiplier: 3,
    maxLevel: 5,
    // Was Math.pow(5, level) which compounded to 3125× at max. Capped growth:
    effect: (level) => 1 + level * 4, // 1, 5, 9, 13, 17, 21
  },
];

export const PRESTIGE_UPGRADES = prestigeUpgradeDefs.map(def => ({
  ...def,
  get name() { return t(def.nameKey); },
  get desc() { return t(def.descKey); },
}));

export function getPrestigeCost(upgradeDef, level) {
  return Math.floor(upgradeDef.baseCost * Math.pow(upgradeDef.costMultiplier, level));
}

export function getPrestigeEffect(upgradeDef, level) {
  return upgradeDef.effect(level);
}

export function calculatePrestigePoints(totalEarned, totalDollarsEarned) {
  const total = totalEarned + totalDollarsEarned * 10;
  return Math.max(1, Math.floor(Math.sqrt(total / 50)));
}

export function getPrestigeStats(state) {
  const stats = {
    soulMultiplier: 1,
    darkMultiplier: 1,
    voidStartingDollars: 0,
    occultSpeedBonus: 1,
    saintMultiplier: 1,
  };

  if (!state.prestigeUpgrades) return stats;

  prestigeUpgradeDefs.forEach(upg => {
    const level = state.prestigeUpgrades[upg.id] || 0;
    if (level > 0) {
      const val = getPrestigeEffect(upg, level);
      switch (upg.id) {
        case 'soulBonus': stats.soulMultiplier = val; break;
        case 'darkMultiplier': stats.darkMultiplier = val; break;
        case 'voidDollars': stats.voidStartingDollars = val; break;
        case 'occultAuto': stats.occultSpeedBonus = val; break;
        case 'saintGold': stats.saintMultiplier = val; break;
      }
    }
  });

  return stats;
}
