// ===== Save/Load System =====

const SAVE_KEY = 'coinpusher3d_save';
const SAVE_INTERVAL = 10000; // 10s
const SCHEMA_VERSION = 2;

export function saveGame(gameState) {
  try {
    const data = {
      schemaVersion: SCHEMA_VERSION,
      coins: gameState.coins,
      dollars: gameState.dollars,
      maxDollars: gameState.maxDollars,
      totalEarned: gameState.totalEarned,
      totalEarnedLifetime: gameState.totalEarnedLifetime || gameState.totalEarned,
      totalDropped: gameState.totalDropped,
      totalDollarsEarned: gameState.totalDollarsEarned || 0,
      activeCurrency: gameState.activeCurrency || 'coins',
      autoDropEnabled: gameState.autoDropEnabled ?? false,
      upgrades: { ...gameState.upgrades },
      prestigePoints: gameState.prestigePoints,
      prestigeUpgrades: { ...gameState.prestigeUpgrades },
      collectedCards: gameState.collectedCards || [],
      // Persist transient gameplay state too so a reload doesn't wipe progress.
      dropCount: gameState.dropCount || 0,
      lastDropTime: gameState.lastDropTime || 0,
      regenCooldown: typeof gameState.regenCooldown === 'number' ? gameState.regenCooldown : 30,
      isGameOver: !!gameState.isGameOver,
      // Lifetime records & progression milestones (kept across prestige).
      peakCoins: gameState.peakCoins || 0,
      peakDollars: gameState.peakDollars || 0,
      peakCombo: gameState.peakCombo || 0,
      bestWinStreak: gameState.bestWinStreak || 0,
      winStreak: gameState.winStreak || 0,
      milestonesHit: Array.isArray(gameState.milestonesHit) ? gameState.milestonesHit : [],
      jackpotsHit: gameState.jackpotsHit || 0,
      gameTime: gameState.gameTime || 0,
      lastSave: Date.now(),
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('Save failed:', e);
  }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (typeof data.coins !== 'number' || typeof data.totalEarned !== 'number') {
      return null;
    }
    return data;
  } catch (e) {
    console.warn('Load failed:', e);
    return null;
  }
}

export function autoSaveLoop(gameState) {
  setInterval(() => {
    if (gameState) saveGame(gameState);
  }, SAVE_INTERVAL);
}

export function resetSave() {
  localStorage.removeItem(SAVE_KEY);
}
