// ===== Internationalization (EN/FR) =====

const translations = {
  en: {
    // HUD
    coins: 'coins',
    dollars: 'dollars',
    total: 'total',
    prestige: 'prestige',

    // Currency toggle
    coinsBtn: 'Coins',
    dollarsBtn: 'Dollars',

    // Drop button
    dropCoin: 'DROP COIN',
    dropDollar: 'DROP BILL',
    dropSub: 'SPACE to drop',
    costCoin: '-1 coin',
    costDollar: '-1 $',

    // Tabs
    shop: 'Shop',
    prestigeTab: 'Prestige',

    // Shop panel
    shopTitle: 'Upgrades',

    // Prestige panel
    prestigePoints: 'Prestige Points',
    prestigeSacrifice: 'SACRIFICE PROGRESS',
    prestigeDesc: 'Lose everything but gain permanent prestige points',

    // Upgrades
    pushPower: 'Demon Push',
    pushPowerDesc: 'Coins push with the force of the underworld',
    multiDrop: 'Multi-Drop',
    multiDropDesc: 'Drop multiple coins at once',
    autoDrop: 'Auto Dealer',
    autoDropDesc: 'A phantom dealer drops for you!',
    multiplier: 'Devil Multiplier',
    multiplierDesc: 'Multiplies all rewards by sacred fire',
    maxCoins: 'Infinite Wallet',
    maxCoinsDesc: 'Max coin capacity increased by spirits',
    regenSpeed: 'Occult Regen',
    regenDesc: 'Free coins arrive from beyond the grave',
    dollarMagnet: 'Dollar Magnet',
    dollarMagnetDesc: 'Multiplies your dollar earnings',
    luck: "Fortune's Favor",
    luckDesc: 'WIN zones have a chance to roll bonus coins (2×–4×)',
    comboShield: 'Combo Shield',
    comboShieldDesc: 'Combo decays more slowly between drops',
    prestigeBoost: 'Prestige Boost',
    prestigeBoostDesc: 'Gain more prestige points per reset',
    level: 'Lv.',
    max: 'MAX',

    // Prestige upgrades
    soulBonus: 'Soul Pact',
    soulBonusDesc: 'Start each life with +50% max coins',
    darkMultiplier: 'Dark Multiplier',
    darkMultiplierDesc: 'Permanent +1 reward multiplier per level',
    voidDollars: 'Void Blessing',
    voidDollarsDesc: 'Start with starting-game dollars',
    occultAuto: 'Occult Auto-Drop',
    occultAutoDesc: 'Auto-drop 2x faster (permanent)',
    saintGold: 'Saint Blessing',
    saintGoldDesc: 'Coin gains +4 per level (compounds with Dark Multiplier)',

    // Notifications
    upgraded: 'Upgraded! Lv.',
    notEnoughCoins: 'Not enough coins!',
    notEnoughDollars: 'Not enough dollars!',
    maxLevel: 'Already max level!',
    prestigeUp: 'Prestige up! Lv.',
    notEnoughPrestige: 'Not enough prestige points',
    coinsEarned: 'coins earned!',
    coinsLost: 'coins lost to the void...',
    cardsLost: 'card(s) lost!',
    comboText: 'COMBO x',
    freeCoins: 'free coins claimed!',
    prestigeGain: 'PRESTIGE! +',
    prestigeTotal: ' (Total: ',
    prestigeWait: 'Earn more before prestiging (',
    prestigeCurrent: ' pts current)',
    resetConfirm: 'Reset all progress (except prestige)?',

    // Category headers
    categoryEconomy: '⚙ ECONOMY',
    categoryPush: '⚒ PUSH',
    categoryCapacity: '🪣 CAPACITY',
    categoryLuck: '🍀 LUCK',
    categoryCurrency: '💱 CURRENCY',
    categoryMeta: '✨ META',
    buy: 'BUY',
    buyMax: 'BUY MAX',

    // Free coins modal
    noFunds: 'Out of Funds!',
    freeCoinsDesc: 'The spirits of the casino offer you a second chance...',
    claimBonus: 'CLAIM BONUS',
    nextDonation: 'Next donation in ',

    // Help / Settings tab (third tab — previously got mislabeled as Prestige)
    help: 'Help',

    // Wasted coins
    wastedCoins: 'coins wasted (max reached)',

    // Misc
    cardCollected: 'Bonus card collected! #',
    cardBonus: 'bonus reward!',

    // Milestones (one-time rewards)
    milestone: 'MILESTONE',
    milestoneReached: 'Milestone reached! +',
    milestoneBonusSuffix: ' free coins',
    milestone100: 'First hundred',
    milestone500: 'Half a grand',
    milestone1k: 'Four digits',
    milestone5k: 'Heavy wallet',
    milestone10k: 'Ten thousand!',
    milestone50k: 'Halfway to a fortune',
    milestone100k: 'Six figures',
    milestone500k: 'Half a million',
    milestone1m: 'MILLIONAIRE',

    // JACKPOT
    jackpot: 'JACKPOT!',
    jackpotBonus: 'Jackpot bonus: +',

    // Win streak
    winStreak: 'WIN STREAK',
    streakBroken: 'Streak broken',

    // Stats panel
    statsTitle: '📊 LIFETIME RECORDS',
    statsPeakCoins: 'Peak coins',
    statsPeakDollars: 'Peak dollars',
    statsPeakCombo: 'Peak combo',
    statsTotalDrops: 'Total drops',
    statsJackpots: 'JACKPOTS hit',
    statsMilestones: 'Milestones cleared',
    statsBestStreak: 'Best win streak',

    // New upgrades
    jackpotChance: "Jackpot's Favor",
    jackpotChanceDesc: 'Increases the chance of hitting the JACKPOT!',
    goldenTouch: 'Golden Touch',
    goldenTouchDesc: 'Chance to double earned coin batches',

    // Gambling mini-game
    gambleTitle: '⚡ RISK IT',
    gambleDesc: 'Double or Nothing! 50/50 chance',
    gambleWin: 'YOU WON!',
    gambleLose: 'YOU LOST!',
    gambleGain: 'Profit: +',
    gambleLoss: 'Loss: -',
    gambleWager: 'Wager:',
    gambleMax: 'MAX',
    gambleHalf: 'HALF',

    // Combo display
    comboBig: 'COMBO',
  },
  fr: {
    // HUD
    coins: 'pieces',
    dollars: 'dollars',
    total: 'total',
    prestige: 'prestige',

    // Currency toggle
    coinsBtn: 'Pieces',
    dollarsBtn: 'Dollars',

    // Drop button
    dropCoin: 'LACHER PIECE',
    dropDollar: 'LACHER BILLET',
    dropSub: 'ESPACE pour drop',
    costCoin: '-1 piece',
    costDollar: '-1 $',

    // Tabs
    shop: 'Boutique',
    prestigeTab: 'Prestige',

    // Shop panel
    shopTitle: 'Ameliorations',

    // Prestige panel
    prestigePoints: 'Points de Prestige',
    prestigeSacrifice: 'SACRIFIER LA PROGRESSION',
    prestigeDesc: 'Perds tout mais gagne des points de prestige permanents',

    // Upgrades
    pushPower: 'Poussee Demoniaque',
    pushPowerDesc: 'Les pieces poussent avec la force des enfers',
    multiDrop: 'Multi-Drop',
    multiDropDesc: "Lache plusieurs pieces physiques d'un coup",
    autoDrop: 'Croupier Automatique',
    autoDropDesc: 'Un croupier fantome drop pour toi !',
    multiplier: 'Multiplicateur du Diable',
    multiplierDesc: 'Multiplie toutes les recompenses par le feu sacre',
    maxCoins: 'Portefeuille de l\'Infini',
    maxCoinsDesc: 'Capacite max augmente par les esprits',
    regenSpeed: 'Regeneration Occulte',
    regenDesc: "Les pieces gratuites arrivent d'outre-tombe",
    dollarMagnet: 'Aimant a Dollars',
    dollarMagnetDesc: 'Multiplie tes gains en dollars',
    luck: 'Faveur de la Fortune',
    luckDesc: 'Les zones WIN ont une chance de donner un bonus (x2-x4)',
    comboShield: 'Bouclier de Combo',
    comboShieldDesc: 'Le combo s\'estompe plus lentement entre les drops',
    prestigeBoost: 'Gain de Prestige Accru',
    prestigeBoostDesc: "Gagne plus de points de prestige a chaque reset",
    level: 'Niv.',
    max: 'MAX',

    // Prestige upgrades
    soulBonus: 'Pacte des Ames',
    soulBonusDesc: 'Commence chaque vie avec +50% de pieces max',
    darkMultiplier: 'Multiplicateur Obscur',
    darkMultiplierDesc: '+1 multiplicateur de recompense permanent par niveau',
    voidDollars: 'Benediction du Vide',
    voidDollarsDesc: "Commence avec des dollars d'entree de jeu",
    occultAuto: 'Auto-Drop Occulte',
    occultAutoDesc: 'Auto-drop 2x plus rapide (permanent)',
    saintGold: 'Benediction des Saints',
    saintGoldDesc: 'Gains de pieces +4 par niveau (se combine avec Multiplicateur Obscur)',

    // Notifications
    upgraded: 'Ameliore ! Niv.',
    notEnoughCoins: 'Pas assez de pieces !',
    notEnoughDollars: 'Pas assez de dollars !',
    maxLevel: 'Deja max level !',
    prestigeUp: 'Prestige up ! Niv.',
    notEnoughPrestige: 'Pas assez de points de prestige',
    coinsEarned: 'pieces gagnees !',
    coinsLost: 'pieces perdues dans le vide...',
    cardsLost: 'carte(s) perdue(s) !',
    comboText: 'Combo x',
    freeCoins: 'pieces gratuites !',
    prestigeGain: 'PRESTIGE ! +',
    prestigeTotal: ' (Total: ',
    prestigeWait: 'Gagne plus avant de prestiger (',
    prestigeCurrent: ' pts actuels)',
    resetConfirm: 'Reinitialiser toute la progression (hors prestige) ?',

    // Category headers
    categoryEconomy: '⚙ ECONOMIE',
    categoryPush: '⚒ POUSSEE',
    categoryCapacity: '🪣 CAPACITE',
    categoryLuck: '🍀 CHANCE',
    categoryCurrency: '💱 MONNAIE',
    categoryMeta: '✨ META',
    buy: 'ACHETER',
    buyMax: 'ACHETER MAX',

    // Free coins modal
    noFunds: 'Plus de fonds !',
    freeCoinsDesc: "Les esprits du casino t'offrent une seconde chance...",
    claimBonus: 'RECLAMER LE BUTIN',
    nextDonation: 'Prochain don dans ',

    // Help / Settings tab (third tab — previously got mislabeled as Prestige)
    help: 'Aide',

    // Wasted coins
    wastedCoins: 'pieces gaspilees (max atteint)',

    // Misc
    cardCollected: 'Carte bonus collectionnee ! #',
    cardBonus: 'recompense bonus !',

    // Milestones (one-time rewards)
    milestone: 'JALON',
    milestoneReached: 'Jalon atteint ! +',
    milestoneBonusSuffix: ' pieces gratuites',
    milestone100: 'Premiere centaine',
    milestone500: 'Un demi-millier',
    milestone1k: 'Quatre chiffres',
    milestone5k: 'Portefeuille lourd',
    milestone10k: 'Dix mille !',
    milestone50k: 'A mi-chemin de la fortune',
    milestone100k: 'Six chiffres',
    milestone500k: 'Un demi-million',
    milestone1m: 'MILLIONNAIRE',

    // JACKPOT
    jackpot: 'JACKPOT !',
    jackpotBonus: 'Bonus jackpot : +',

    // Win streak
    winStreak: 'SERIE DE VICTOIRES',
    streakBroken: 'Serie cassee',

    // Stats panel
    statsTitle: '📊 RECORDS A VIE',
    statsPeakCoins: 'Pieces max',
    statsPeakDollars: 'Dollars max',
    statsPeakCombo: 'Combo max',
    statsTotalDrops: 'Total de drops',
    statsJackpots: 'JACKPOTS reussis',
    statsMilestones: 'Jalons franchis',
    statsBestStreak: 'Meilleure serie',

    // New upgrades
    jackpotChance: 'Faveur du Jackpot',
    jackpotChanceDesc: 'Augmente les chances de gagner le JACKPOT !',
    goldenTouch: 'Touche Doree',
    goldenTouchDesc: 'Chance de doubler les gains de pieces',

    // Gambling mini-game
    gambleTitle: '⚡ RISQUE TOUT',
    gambleDesc: 'Double ou Rien ! 50/50 de chance',
    gambleWin: 'GAGNE !',
    gambleLose: 'PERDU !',
    gambleGain: 'Gain: +',
    gambleLoss: 'Perte: -',
    gambleWager: 'Mise:',
    gambleMax: 'MAX',
    gambleHalf: 'MOITIE',

    // Combo display
    comboBig: 'COMBO',
  },
};

let currentLang = localStorage.getItem('coinpusher_lang') || 'en';

export function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('coinpusher_lang', lang);
}
