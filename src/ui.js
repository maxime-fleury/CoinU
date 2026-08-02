// ===== UI Management (i18n + Improved UX) =====
import { UPGRADES, CATEGORY, getUpgradeCost, getAffordableLevels } from './upgrades.js';
import { PRESTIGE_UPGRADES, getPrestigeCost } from './prestige.js';
import { getUpgradeLevel, getEffectiveStats } from './game.js';
import { t, getLang, setLang } from './i18n.js';
import { setSoundEnabled as setAudioEnabled, isSoundEnabled as isAudioEnabled } from './audio.js';

export function createUI(gameState, callbacks) {
  const el = {
    coinsDisplay: document.getElementById('coins-display'),
    dollarsDisplay: document.getElementById('dollars-display'),
    totalEarned: document.getElementById('total-earned'),
    dropBtn: document.getElementById('drop-btn'),
    dropIcon: document.querySelector('#drop-btn .btn-icon'),
    dropText: document.querySelector('#drop-btn .btn-text'),
    dropSub: document.querySelector('#drop-btn .btn-sub'),
    upgradesList: document.getElementById('upgrades-list'),
    prestigeList: document.getElementById('prestige-upgrades-list'),
    shopView: document.getElementById('shop-view'),
    prestigeView: document.getElementById('prestige-view'),
    panelContent: document.getElementById('panel-content'),
    panelToggle: document.getElementById('panel-toggle'),
    panelTitle: document.getElementById('panel-title'),
    tabs: document.querySelectorAll('.tab-btn'),
    currencyBtns: document.querySelectorAll('.currency-btn'),
    freeModal: document.getElementById('free-coins-modal'),
    freeCoinsBtn: document.getElementById('free-coins-btn'),
    freeCooldown: document.getElementById('free-cooldown'),
    regenTimer: document.getElementById('regen-timer'),
    regenCountdown: document.getElementById('regen-countdown'),
    notifications: document.getElementById('notifications'),
    dropEffectLabel: document.getElementById('drop-effect-label'),
    resetBtn: document.getElementById('reset-btn'),
    prestigeBtn: document.getElementById('prestige-btn'),
    prestigeBadge: document.getElementById('prestige-badge'),
    prestigePointsDisplay: document.getElementById('prestige-points-display'),
    prestigePointsBig: document.getElementById('prestige-points-big'),
    prestigeProgressBar: document.getElementById('prestige-progress-bar'),
    prestigeProgressText: document.getElementById('prestige-progress-text'),
    prestigeProgressWrap: document.getElementById('prestige-progress-wrap'),
    collectedCards: document.getElementById('collected-cards'),
    cardsGrid: document.getElementById('cards-grid'),
    autoDropToggle: document.getElementById('auto-drop-toggle'),
    soundToggle: document.getElementById('sound-toggle'),
    langBtn: document.getElementById('lang-btn'),
  };

  let lastCoinDisplay = gameState.coins;
  let lastDollarDisplay = gameState.dollars;
  let freeModalInterval = null;
  let activeTab = 'shop';
  let autoDropEnabled = false;
  // Mirror the persisted audio preference from the audio module so the toggle
  // shows the real state (the previous hardcoded `true` desynced from it).
  let soundEnabled = isAudioEnabled();

  // --- Tab + panel title helpers ---
  // Single source of truth so elementsUpdateTexts / switchTab / refreshAllTexts
  // can't drift out of sync. Add a 4th tab later? Update these two helpers.
  function tabLabelFor(key) {
    if (key === 'shop')     return '🛒 ' + t('shop');
    if (key === 'prestige') return '👑 ' + t('prestigeTab');
    if (key === 'settings') return '⚙ ' + t('help');
    return '';
  }
  function panelTitleFor(key) {
    if (key === 'shop')     return '🛒 ' + t('shopTitle');
    if (key === 'prestige') return '👑 ' + t('prestigeTab');
    return '⚙ ' + t('help');
  }

  // --- Language ---
  function updateLangButton() {
    if (!el.langBtn) return;
    el.langBtn.textContent = getLang() === 'en' ? 'FR' : 'EN';
  }

  function toggleLang() {
    setLang(getLang() === 'en' ? 'fr' : 'en');
    updateLangButton();
    refreshAllTexts();
    ui.refresh(gameState);
  }

  function refreshAllTexts() {
    const labels = document.querySelectorAll('.label');
    labels.forEach(l => {
      if (l.dataset.key) l.textContent = t(l.dataset.key);
    });
    document.querySelectorAll('.currency-btn').forEach(btn => {
      btn.textContent = btn.dataset.currency === 'coins' ? ('🪙 ' + t('coinsBtn')) : ('💵 ' + t('dollarsBtn'));
    });
    updateCurrencyUI();
    elementsUpdateTexts();
    renderUpgrades();
    renderPrestigeUpgrades();
  }

  function elementsUpdateTexts() {
    // Per-tab label so the settings/help tab no longer gets mislabeled as
    // 'Prestige'. (Tab-label bug fix — delegated to tabLabelFor helper.)
    el.tabs.forEach(tab => { tab.textContent = tabLabelFor(tab.dataset.tab); });
    if (el.panelTitle) el.panelTitle.textContent = panelTitleFor(activeTab);
    const ps = document.querySelector('.prestige-sub');
    if (ps) ps.textContent = '⭐ ' + t('prestigePoints');
    if (el.prestigeBtn) el.prestigeBtn.textContent = '🔥 ' + t('prestigeSacrifice');
    const pd = document.querySelector('.prestige-sub-desc');
    if (pd) pd.textContent = t('prestigeDesc');
    if (el.freeModal) {
      const h2 = el.freeModal.querySelector('h2');
      const p = el.freeModal.querySelector('p');
      if (h2) h2.textContent = '💀 ' + t('noFunds');
      if (p) p.textContent = t('freeCoinsDesc');
      const btnSpan = el.freeCoinsBtn?.querySelector('span');
      if (btnSpan) btnSpan.textContent = '🎁 ' + t('claimBonus');
    }
  }

  // --- HUD ---
  function updateHUD() {
    const c = Math.floor(gameState.coins);
    const d = Math.floor(gameState.dollars);
    if (c !== lastCoinDisplay) {
      el.coinsDisplay.textContent = c;
      if (c > lastCoinDisplay) { el.coinsDisplay.classList.remove('pop'); void el.coinsDisplay.offsetWidth; el.coinsDisplay.classList.add('pop'); }
      lastCoinDisplay = c;
    }
    if (d !== lastDollarDisplay) {
      el.dollarsDisplay.textContent = d;
      if (d > lastDollarDisplay) { el.dollarsDisplay.classList.remove('pop'); void el.dollarsDisplay.offsetWidth; el.dollarsDisplay.classList.add('pop'); }
      lastDollarDisplay = d;
    }
    el.totalEarned.textContent = Math.floor(gameState.totalEarnedLifetime || gameState.totalEarned);
    if (gameState.prestigePoints > 0) {
      el.prestigeBadge.classList.remove('hidden');
      el.prestigePointsDisplay.textContent = gameState.prestigePoints;
      el.prestigePointsBig.textContent = gameState.prestigePoints;
      if (gameState.prestigePoints >= 10) el.prestigeBadge.classList.add('prestige-high');
    } else {
      el.prestigeBadge.classList.add('hidden');
    }
  }

  // --- Currency ---
  function updateCurrencyUI() {
    const isCoins = gameState.activeCurrency === 'coins';
    el.currencyBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === gameState.activeCurrency);
      btn.classList.toggle('dollar-mode', btn.dataset.currency === 'dollars');
    });
    el.dropIcon.textContent = isCoins ? '🪙' : '💵';
    el.dropText.textContent = isCoins ? t('dropCoin') : t('dropDollar');
    el.dropSub.textContent = isCoins ? t('costCoin') : t('costDollar');
    el.dropBtn.style.borderColor = isCoins ? '#ffd700' : '#00ff88';
    el.dropBtn.style.color = isCoins ? '#fff4a3' : '#00ff88';
  }

  function updateDropButton(enabled) { el.dropBtn.disabled = !enabled; }

  // --- Tabs ---
  function switchTab(tab) {
    activeTab = tab;
    el.tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    el.shopView.classList.toggle('hidden', tab !== 'shop');
    el.prestigeView.classList.toggle('hidden', tab !== 'prestige');
    el.settingsView = el.settingsView || document.getElementById('settings-view');
    if (el.settingsView) el.settingsView.classList.toggle('hidden', tab !== 'settings');
    el.panelTitle.textContent = panelTitleFor(tab);
    if (tab === 'prestige') {
      el.prestigePointsBig.textContent = gameState.prestigePoints || 0;
      renderPrestigeUpgrades();
      renderCollectedCards();
      renderStatsPanel();
    }
  }

  // --- Upgrades ---
  function formatEffect(upgrade, level) {
    const val = upgrade.effect(level);
    switch (upgrade.id) {
      case 'pushPower': return 'Push ' + val.toFixed(2) + 'x';
      case 'multiDrop': return Math.floor(Math.max(1, val)) + ' coins/drop';
      case 'autoDrop': return val.toFixed(2) + '/s';
      case 'multiplier': return 'x' + val.toFixed(2);
      case 'maxCoins': return val + ' max';
      case 'regenSpeed': return val.toFixed(1) + 's';
      case 'dollarMagnet': return 'x' + val.toFixed(2);
      case 'luck': return '+' + (val * 100).toFixed(0) + '% chance';
      case 'comboShield': return val.toFixed(1) + 's window';
      case 'prestigeBoost': return 'x' + val.toFixed(2);
      case 'jackpotChance': return '+' + ((val - 0.02) * 100).toFixed(1) + '% extra';
      case 'goldenTouch': return (val * 100).toFixed(0) + '% double';
      default: return '';
    }
  }

  // Single source of truth for the display order of upgrades (grouped by
  // category). Used both when rendering the shop AND when mapping the 1-9,0
  // number keys — the two previously disagreed, so keys bought the wrong item.
  function getDisplayOrderedUpgrades() {
    const order = [CATEGORY.ECONOMY, CATEGORY.PUSH, CATEGORY.CAPACITY, CATEGORY.LUCK, CATEGORY.CURRENCY, CATEGORY.META];
    const list = [];
    order.forEach(cat => {
      UPGRADES.forEach(u => { if (u.category === cat) list.push(u); });
    });
    return list;
  }

  function renderUpgrades() {
    el.upgradesList.innerHTML = '';
    // Group upgrades by category, then render a section header for each group.
    // Each category gets a tinted header chip + colored left accent on items
    // (colors live in style.css under .cat-<name>).
    const order = [CATEGORY.ECONOMY, CATEGORY.PUSH, CATEGORY.CAPACITY, CATEGORY.LUCK, CATEGORY.CURRENCY, CATEGORY.META];
    order.forEach(cat => {
      const items = UPGRADES.filter(u => u.category === cat);
      if (items.length === 0) return;
      const header = document.createElement('div');
      header.className = 'upgrade-category-header cat-' + cat;
      const key = 'category' + cat.charAt(0).toUpperCase() + cat.slice(1);
      header.textContent = '◆ ' + t(key);
      el.upgradesList.appendChild(header);
      items.forEach(renderUpgradeItem);
    });
  }

  function renderUpgradeItem(upgrade) {
    const level = getUpgradeLevel(gameState, upgrade.id);
    const maxed = level >= upgrade.maxLevel;
    const cost = getUpgradeCost(upgrade, level);
    const canAfford = gameState.coins >= cost;
    // Bulk-buy via shift-click: compute costs once, sum once for the affordance
    // label, and reuse the count for the actual purchase.
    const affordableCosts = maxed ? [] : getAffordableLevels(upgrade, level, gameState.coins);
    const affordableCount = affordableCosts.length;
    const bulkTotal = affordableCosts.reduce((a, b) => a + b, 0);
    const showBulk = affordableCount > 1;
    const bulkLabel = showBulk
      ? '⇧ ' + affordableCount + ' for 🪙' + bulkTotal.toLocaleString()
      : null;

    // Effect preview: what the upgrade does NOW vs what it does at the NEXT
    // level. The old cards only showed "Level x/y" and a price, so buying was
    // a leap of faith — now the delta is right there on the card.
    const effectNow = formatEffect(upgrade, level);
    const effectNext = maxed ? '' : formatEffect(upgrade, level + 1);
    const effectHtml = effectNow
      ? '<div class="upgrade-effect">' + effectNow
        + (effectNext && effectNext !== effectNow
            ? ' <span class="effect-arrow">→</span> <span class="effect-next">' + effectNext + '</span>'
            : '')
        + '</div>'
      : '';

    // Level progress bar: quick visual read of how close to max an upgrade is.
    const progress = Math.round((level / upgrade.maxLevel) * 100);
    const barHtml = '<div class="upgrade-bar-wrap"><div class="upgrade-bar' + (maxed ? ' maxed' : '') + '" style="width:' + progress + '%"></div></div>';

    const item = document.createElement('div');
    let cls = 'upgrade-item cat-' + upgrade.category
      + (maxed ? ' bought' : '')
      + (canAfford && !maxed ? ' affordable' : '');
    item.className = cls;

    const costLabel = maxed
      ? t('max')
      : (showBulk
          ? '<span class="upgrade-cost-bulk">' + bulkLabel + '</span><span class="upgrade-cost-single">🪙' + cost.toLocaleString() + '</span>'
          : '🪙' + cost.toLocaleString());
    item.innerHTML = '<div class="upgrade-icon">' + upgrade.icon + '</div>'
      + '<div class="upgrade-info">'
      + '<div class="upgrade-name">' + upgrade.name + '</div>'
      + '<div class="upgrade-desc">' + upgrade.desc + '</div>'
      + effectHtml
      + barHtml
      + '<div class="upgrade-level">' + t('level') + ' ' + level + '/' + upgrade.maxLevel + '</div>'
      + '</div>'
      + '<div class="upgrade-cost ' + (canAfford || maxed ? '' : 'locked') + '">' + costLabel + '</div>';

    if (!maxed) {
      item.style.cursor = canAfford ? 'pointer' : 'not-allowed';
      item.addEventListener('click', e => {
        const levels = e.shiftKey ? affordableCount : 1;
        if (callbacks.onBuyUpgrade) callbacks.onBuyUpgrade(upgrade.id, levels);
      });
    }
    el.upgradesList.appendChild(item);
  }

  function renderPrestigeUpgrades() {
    el.prestigeList.innerHTML = '';
    const pp = gameState.prestigePoints || 0;
    PRESTIGE_UPGRADES.forEach(upgrade => {
      const level = gameState.prestigeUpgrades[upgrade.id] || 0;
      const maxed = level >= upgrade.maxLevel;
      const cost = getPrestigeCost(upgrade, level);
      const canAfford = pp >= cost;
      const item = document.createElement('div');
      item.className = 'upgrade-item' + (maxed ? ' bought' : '');
      item.innerHTML = '<div class="upgrade-icon">' + upgrade.icon + '</div><div class="upgrade-info"><div class="upgrade-name">' + upgrade.name + '</div><div class="upgrade-desc">' + upgrade.desc + '</div><div class="upgrade-level">' + t('level') + ' ' + level + '/' + upgrade.maxLevel + '</div></div><div class="upgrade-cost prestige-cost ' + (canAfford || maxed ? '' : 'locked') + '">' + (maxed ? t('max') : '👑' + cost) + '</div>';
      if (!maxed) {
        item.style.cursor = canAfford ? 'pointer' : 'not-allowed';
        item.addEventListener('click', () => { if (callbacks.onBuyPrestigeUpgrade) callbacks.onBuyPrestigeUpgrade(upgrade.id); });
      }
      el.prestigeList.appendChild(item);
    });
  }

  // --- Notifications ---
  function showNotification(message, type = 'info') {
    const notif = document.createElement('div');
    notif.className = 'notification ' + type;
    notif.textContent = message;
    el.notifications.appendChild(notif);
    setTimeout(() => { if (notif.parentNode) notif.remove(); }, 2500);
  }

  // --- Jackpot banner ---
  // Briefly flashes a giant gold "JACKPOT!" banner top-center and shows how
  // many bonus coins were just credited. The DOM element is created lazily so
  // we don't fight any pre-baked markup.
  function showJackpot(bonus) {
    const banner = document.createElement('div');
    banner.className = 'jackpot-banner';
    banner.innerHTML = '\uD83C\uDFB0 <span class="jackpot-text">' + t('jackpot') + '</span> <span class="jackpot-bonus">+' + bonus + ' \uD83E\uDE99</span>';
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('show'));
    // Spawn ~10 coin particles around the banner for extra juice.
    const burst = document.createElement('div');
    burst.className = 'jackpot-burst';
    for (let i = 0; i < 10; i++) {
      const p = document.createElement('div');
      p.className = 'jackpot-particle';
      p.textContent = '\uD83E\uDE99';
      p.style.setProperty('--dx', ((Math.random() - 0.5) * 400) + 'px');
      p.style.setProperty('--dy', (Math.random() * -200 - 60) + 'px');
      p.style.animationDelay = (Math.random() * 0.2) + 's';
      burst.appendChild(p);
    }
    banner.appendChild(burst);
    setTimeout(() => {
      banner.classList.remove('show');
      banner.classList.add('hide');
      setTimeout(() => { if (banner.parentNode) banner.remove(); }, 500);
    }, 2200);
  }

  // --- Milestone banner ---
  // Persistent one-time celebration for hitting a lifetime-earnings threshold.
  function showMilestone(milestone, bonus) {
    const banner = document.createElement('div');
    banner.className = 'milestone-banner';
    banner.innerHTML =
      '<div class="milestone-eyebrow">' + t('milestone') + '</div>' +
      '<div class="milestone-title">' + t(milestone.key) + '</div>' +
      '<div class="milestone-subtitle">' + milestone.value.toLocaleString() + ' lifetime coins</div>' +
      (bonus > 0 ? '<div class="milestone-bonus">+' + bonus + ' \uD83E\uDE99 ' + t('milestoneBonusSuffix') + '</div>' : '');
    document.body.appendChild(banner);
    requestAnimationFrame(() => banner.classList.add('show'));
    setTimeout(() => {
      banner.classList.remove('show');
      banner.classList.add('hide');
      setTimeout(() => { if (banner.parentNode) banner.remove(); }, 600);
    }, 3500);
  }

  // --- Win streak HUD ---
  // Drives the small chip near the combo label. Pulses when active, dims when
  // broken. Just visual — no economy change.
  function updateStreak(current, best, justBroken) {
    let chip = document.getElementById('streak-chip');
    if (current <= 2 && !justBroken) {
      if (chip) chip.classList.add('hidden');
      return;
    }
    if (!chip) {
      chip = document.createElement('div');
      chip.id = 'streak-chip';
      chip.className = 'streak-chip hidden';
      // Insert near the drop effect label so the player sees it together.
      const area = document.getElementById('drop-area');
      if (area) area.appendChild(chip);
    }
    chip.classList.remove('hidden');
    if (justBroken) {
      chip.classList.remove('streak-hot');
      chip.classList.add('streak-broken');
      chip.innerHTML = '\uD83D\uDC94 ' + t('streakBroken') + ' \u00B7 best ' + best;
      setTimeout(() => { if (chip) { chip.classList.remove('streak-broken'); chip.classList.add('hidden'); } }, 1800);
    } else {
      chip.classList.add('streak-hot');
      chip.classList.remove('streak-broken');
      chip.innerHTML = '\uD83D\uDD25 ' + t('winStreak') + ' <b>x' + current + '</b>' + (best > current ? ' \u00B7 best ' + best : '');
    }
  }

  // --- Stats panel (lifetime records) ---
  // Rendered into the prestige tab. Survives prestige so the player sees
  // their all-time progression.
  function renderStatsPanel() {
    let pane = document.getElementById('stats-panel');
    const host = el.prestigeView;
    if (!host) return;
    if (!pane) {
      pane = document.createElement('div');
      pane.id = 'stats-panel';
      pane.className = 'stats-panel';
      // Insert before the prestige upgrades list so it shows above the
      // tier upgrades but below the prestige header.
      const list = el.prestigeList;
      if (list && list.parentNode === host) host.insertBefore(pane, list);
      else host.appendChild(pane);
    }
    const lifetime = Math.floor(gameState.totalEarnedLifetime || gameState.totalEarned || 0);
    const rows = [
      [t('statsTotalDrops'), Math.floor(gameState.totalDropped || 0).toLocaleString()],
      [t('statsPeakCoins'), Math.floor(gameState.peakCoins || 0).toLocaleString()],
      [t('statsPeakDollars'), Math.floor(gameState.peakDollars || 0).toLocaleString()],
      [t('statsPeakCombo'), 'x' + (gameState.peakCombo || 0)],
      [t('statsBestStreak'), 'x' + (gameState.bestWinStreak || 0)],
      [t('statsJackpots'), '\uD83C\uDFB0 ' + (gameState.jackpotsHit || 0)],
      [t('statsMilestones'), '\uD83C\uDFC5 ' + ((gameState.milestonesHit || []).length) + '/9'],
      [t('total'), lifetime.toLocaleString()],
    ];
    pane.innerHTML = '<div class="stats-title">' + t('statsTitle') + '</div>'
      + rows.map(([k, v]) => '<div class="stats-row"><span class="stats-key">' + k + '</span><span class="stats-val">' + v + '</span></div>').join('');
  }

  function showFloatingReward(text, x, y) {
    const d = document.createElement('div');
    d.className = 'floating-reward';
    d.textContent = text;
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    document.body.appendChild(d);
    setTimeout(() => { if (d.parentNode) d.remove(); }, 1200);
  }

  function updateCombo(count) {
    // Bigger, brighter combo counter so the player feels the build-up.
    const dropBtn = el.dropBtn;
    if (count > 5) {
      el.dropEffectLabel.textContent = '\uD83D\uDD25 ' + t('comboText') + count + '!';
      el.dropEffectLabel.style.color = '#ff2d95';
      el.dropEffectLabel.classList.remove('mega'); el.dropEffectLabel.classList.add('mega');
      if (dropBtn) { dropBtn.classList.add('combo-hot'); dropBtn.classList.remove('combo-warm'); }
    } else if (count > 3) {
      el.dropEffectLabel.textContent = '\u2728 x' + count;
      el.dropEffectLabel.style.color = '#ffd700';
      el.dropEffectLabel.classList.remove('mega');
      if (dropBtn) { dropBtn.classList.add('combo-warm'); dropBtn.classList.remove('combo-hot'); }
    } else if (count > 1) {
      el.dropEffectLabel.textContent = '\u2728 x' + count;
      el.dropEffectLabel.style.color = '#fff4a3';
      el.dropEffectLabel.classList.remove('mega');
      if (dropBtn) dropBtn.classList.remove('combo-warm', 'combo-hot');
    } else {
      el.dropEffectLabel.textContent = '';
      el.dropEffectLabel.classList.remove('mega');
      if (dropBtn) dropBtn.classList.remove('combo-warm', 'combo-hot');
    }
  }

  function showFreeModal(cooldownSeconds = 30) {
    if (!el.freeModal.classList.contains('hidden')) return;
    el.freeModal.classList.remove('hidden');
    let cooldown = Math.max(1, Math.ceil(cooldownSeconds));
    el.freeCooldown.textContent = cooldown;
    el.freeCoinsBtn.disabled = true;
    if (freeModalInterval) clearInterval(freeModalInterval);
    freeModalInterval = setInterval(() => { cooldown--; el.freeCooldown.textContent = cooldown; if (cooldown <= 0) { clearInterval(freeModalInterval); freeModalInterval = null; el.freeCoinsBtn.disabled = false; } }, 1000);
    el.freeCoinsBtn.onclick = () => { if (el.freeCoinsBtn.disabled) return; if (callbacks.onClaimFree) callbacks.onClaimFree(); hideFreeModal(); };
  }

  function hideFreeModal() {
    el.freeModal.classList.add('hidden');
    if (freeModalInterval) { clearInterval(freeModalInterval); freeModalInterval = null; }
  }

  function updateRegenTimer(remaining) {
    if (remaining > 0) { el.regenTimer.classList.remove('hidden'); el.regenCountdown.textContent = Math.ceil(remaining); }
    else { el.regenTimer.classList.add('hidden'); }
  }

  function showDropResult(result) {
    const ci = result.currency === 'dollars' ? '\uD83D\uDCB5' : '\uD83E\uDE99';
    if (result.isAuto) { if (result.earned > 0) showFloatingReward('\uD83E\uDD16 +' + result.earned + ' ' + ci, window.innerWidth / 2 - 40, window.innerHeight / 2 - 50); return; }
    if (result.earned > 0) {
      const r = el.dropBtn.getBoundingClientRect();
      let text = '+' + result.earned + ' ' + ci;
      if (result.earned >= 5) text = '\uD83C\uDF89 +' + result.earned + ' ' + ci;
      if (result.isCombo) text = '\uD83D\uDD25 ' + t('comboText') + result.comboCount + '! +' + result.earned + ' ' + ci;
      showFloatingReward(text, r.left + r.width / 2 - 40, r.top - 30);
    }
    if (result.isCombo && result.comboCount > 3) showNotification('\uD83D\uDD25 ' + t('comboText') + result.comboCount + '!', 'success');
  }

  function showCoinsWasted(amount) {
    const existing = document.querySelector('.coins-wasted');
    if (existing) existing.remove();
    const d = document.createElement('div');
    d.className = 'coins-wasted';
    d.textContent = '\u26A0\uFE0F +' + amount + ' ' + t('wastedCoins');
    d.style.left = (window.innerWidth / 2 - 100) + 'px';
    d.style.top = '120px';
    document.body.appendChild(d);
    setTimeout(() => { if (d.parentNode) d.remove(); }, 2200);
  }

  function renderPrestigeProgress() {
    if (!el.prestigeProgressBar || !el.prestigeProgressText) return;
    const target = 100;
    const progress = Math.min(1, (gameState.totalEarnedLifetime || gameState.totalEarned || 0) / target);
    el.prestigeProgressBar.style.width = (progress * 100) + '%';
    el.prestigeProgressText.textContent = Math.floor(gameState.totalEarnedLifetime || gameState.totalEarned || 0) + ' / ' + target;
  }

  function renderCollectedCards() {
    if (!el.cardsGrid) return;
    const cards = gameState.collectedCards || [];
    if (cards.length > 0) {
      el.collectedCards.classList.remove('hidden');
      el.cardsGrid.innerHTML = '';
      cards.forEach((cardId, i) => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.textContent = '🃏 ' + (i + 1);
        card.title = cardId;
        el.cardsGrid.appendChild(card);
      });
    } else {
      el.collectedCards.classList.add('hidden');
    }
  }

  function showZoneFeedback(text, type, x, y) {
    const d = document.createElement('div');
    d.className = 'zone-feedback ' + type;
    d.textContent = text;
    d.style.left = x + 'px';
    d.style.top = y + 'px';
    document.body.appendChild(d);
    setTimeout(() => { if (d.parentNode) d.remove(); }, 1500);
  }

  // --- Screen shake ---
  // Briefly applies a CSS class to <body> that jiggles via a translate
  // keyframe (defined in style.css). Intensity 1 = soft, 2 = hard. The
  // reflow before re-adding the class is what restarts a one-shot animation
  // even when triggered twice in a row.
  function screenShake(intensity) {
    const klass = intensity >= 2 ? 'shake-hard' : 'shake-soft';
    document.body.classList.remove('shake-soft', 'shake-hard');
    void document.body.offsetWidth; // force reflow so animation restarts
    document.body.classList.add(klass);
  }

  function refresh(gs) {
    updateHUD();
    updateCurrencyUI();
    renderUpgrades();
    const canDrop = gs.activeCurrency === 'dollars' ? gs.dollars >= 1 : gs.coins >= 1;
    updateDropButton(canDrop);
    if (gs.isGameOver) showFreeModal(gs.regenCooldown);
    if (el.autoDropToggle) el.autoDropToggle.checked = !!gs.autoDropEnabled;
    updateCombo(gs.dropCount);
    renderPrestigeProgress();
    if (activeTab === 'prestige') { el.prestigePointsBig.textContent = gs.prestigePoints || 0; renderPrestigeUpgrades(); renderCollectedCards(); }
    const canPrestige = gs.totalEarned >= 100 || gs.totalDollarsEarned >= 10;
    el.prestigeBtn.disabled = !canPrestige;
    if (gs.prestigePoints > 0) { el.prestigeBadge.classList.remove('hidden'); el.prestigePointsDisplay.textContent = gs.prestigePoints; }
  }

  function isAutoDropEnabled() { return autoDropEnabled; }
  function isSoundEnabled() { return soundEnabled; }

  function setAutoDropEnabled(v) {
    autoDropEnabled = !!v;
    gameState.autoDropEnabled = autoDropEnabled;
    if (el.autoDropToggle) el.autoDropToggle.checked = autoDropEnabled;
  }

  function setSoundEnabled(v) {
    soundEnabled = !!v;
    // Propagate to the audio module so the preference is applied AND persisted
    // (the local helper previously shadowed the imported one, so the toggle
    // had no effect on actual sound playback).
    setAudioEnabled(soundEnabled);
    if (el.soundToggle) el.soundToggle.checked = soundEnabled;
  }

  // --- First-time tutorial overlay ---
  // Shown until the player dismisses it (drops a coin, clicks, or presses any
  // key). Persists "dismissed" in localStorage so returning players aren't
  // pestered. Marked hidden by default in index.html.
  const TUTORIAL_KEY = 'coinpusher_tutorial_dismissed';
  function isTutorialDismissed() {
    try { return localStorage.getItem(TUTORIAL_KEY) === '1'; } catch (e) { return false; }
  }
  function dismissTutorial() {
    const overlay = document.getElementById('tutorial-overlay');
    if (!overlay || overlay.classList.contains('hidden')) return;
    overlay.classList.add('hiding');
    try { localStorage.setItem(TUTORIAL_KEY, '1'); } catch (e) { /* sandbox */ }
    setTimeout(() => { overlay.classList.add('hidden'); overlay.classList.remove('hiding'); }, 350);
  }
  function showTutorialIfNeeded() {
    if (isTutorialDismissed()) return;
    setTimeout(() => {
      const overlay = document.getElementById('tutorial-overlay');
      if (!overlay) return;
      overlay.classList.remove('hidden');
      overlay.addEventListener('click', dismissTutorial, { once: true });
    }, 700);
  }

  // --- Setup ---
  el.dropBtn.addEventListener('click', () => { if (callbacks.onDrop) callbacks.onDrop(); dismissTutorial(); });
  document.addEventListener('keydown', e => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    if (e.code === 'Space' && !e.repeat) {
      e.preventDefault();
      dismissTutorial();
      if (callbacks.onDrop) callbacks.onDrop();
    }
  });
  el.currencyBtns.forEach(btn => {
    btn.addEventListener('click', () => { if (callbacks.onCurrencySwitch) callbacks.onCurrencySwitch(btn.dataset.currency); });
  });
  el.tabs.forEach(tab => { tab.addEventListener('click', () => switchTab(tab.dataset.tab)); });
  el.panelToggle.addEventListener('click', () => { el.panelContent.classList.toggle('collapsed'); el.panelToggle.classList.toggle('collapsed'); });
  if (el.resetBtn) el.resetBtn.addEventListener('click', () => { if (callbacks.onReset) callbacks.onReset(); });
  if (el.prestigeBtn) el.prestigeBtn.addEventListener('click', () => { if (callbacks.onPrestige) callbacks.onPrestige(); });
  if (el.langBtn) el.langBtn.addEventListener('click', toggleLang);
  if (el.autoDropToggle) el.autoDropToggle.addEventListener('change', e => {
    autoDropEnabled = e.target.checked;
    // Persist to gameState so getEffectiveStats() reflects the change
    // and so save/load preserves the preference.
    gameState.autoDropEnabled = autoDropEnabled;
  });

  // Tiny chip on each upgrade for affordability hint when hovering.
  if (el.soundToggle) el.soundToggle.addEventListener('change', e => { soundEnabled = e.target.checked; setSoundEnabled(soundEnabled); });
  document.addEventListener('keydown', e => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    dismissTutorial();

    // Tab → trigger Prestige when the player has earned enough. (Previously
    // referenced in the console.log hint at the bottom of main.js but never
    // bound — Tab did nothing.)
    if (e.code === 'Tab' && !e.repeat && ui.isPrestigeReady && ui.isPrestigeReady()) {
      e.preventDefault();
      if (callbacks.onPrestige) callbacks.onPrestige();
      return;
    }

    // Number keys 1-9 + 0 buy the upgrade at that position in the VISIBLE
    // (category-grouped) shop order, matching what the player sees on screen.
    const keyOrder = getDisplayOrderedUpgrades();
    if (e.key >= '1' && e.key <= '9') {
      const idx = parseInt(e.key) - 1;
      if (idx < keyOrder.length && callbacks.onBuyUpgrade) callbacks.onBuyUpgrade(keyOrder[idx].id);
    } else if (e.key === '0') {
      const idx = 9;
      if (idx < keyOrder.length && callbacks.onBuyUpgrade) callbacks.onBuyUpgrade(keyOrder[idx].id);
    }
  });

  // Sync the sound toggle with the persisted audio preference on startup.
  if (el.soundToggle) el.soundToggle.checked = soundEnabled;

  updateLangButton();
  refreshAllTexts();
  showTutorialIfNeeded();

  // Wrap refresh() so the prestige-ready gate is updated every tick — drives
  // both the prestige button disable state AND the Tab-key eligibility check.
  const _origRefresh = refresh;
  function refreshWithGate(gs) {
    _origRefresh(gs);
    ui.isPrestigeReady = () => !!(gs && (gs.totalEarned >= 100 || gs.totalDollarsEarned >= 10));
  }

  // ===== COIN RAIN EFFECT =====
  // Spawns golden coin emoji particles that rain from the top of the screen.
  // Used to celebrate jackpots, milestones, and big wins.
  function showCoinRain(count = 20) {
    let container = document.getElementById('coin-rain-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'coin-rain-container';
      document.body.appendChild(container);
    }
    const emojis = ['🪙', '💰', '⭐', '✨', '🪙'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'coin-rain-particle';
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = (Math.random() * 100) + '%';
      p.style.fontSize = (16 + Math.random() * 18) + 'px';
      p.style.animationDuration = (1.5 + Math.random() * 2) + 's';
      p.style.animationDelay = (Math.random() * 0.8) + 's';
      container.appendChild(p);
      setTimeout(() => { if (p.parentNode) p.remove(); }, 4000);
    }
  }

  // ===== UPGRADE BUY FLASH =====
  // Brief golden radial burst at center of screen when purchasing an upgrade.
  function showUpgradeFlash() {
    const flash = document.createElement('div');
    flash.className = 'upgrade-flash';
    document.body.appendChild(flash);
    setTimeout(() => { if (flash.parentNode) flash.remove(); }, 700);
  }

  // ===== GAMBLING UI (rendered in the shop tab) =====
  // Shows a "RISK IT" section with wager controls. The player can set a custom
  // wager amount, use half/max presets, and click the gamble button. Results
  // display as a full-screen overlay card.
  let _gambleContainer = null;

  function renderGambleUI() {
    // Create or reuse the gambling section in the shop view
    if (!_gambleContainer) {
      _gambleContainer = document.createElement('div');
      _gambleContainer.className = 'gamble-btn-container';
      _gambleContainer.id = 'gamble-section';
    }
    // Insert after the first child (upgrades list) or at end of shopView
    const shopView = el.shopView;
    if (shopView && !_gambleContainer.parentNode) {
      // Insert after the upgrades list
      const upgradesList = el.upgradesList;
      if (upgradesList && upgradesList.parentNode === shopView) {
        upgradesList.after(_gambleContainer);
      } else {
        shopView.appendChild(_gambleContainer);
      }
    }

    const coins = Math.floor(gameState.coins);
    const canGamble = coins >= 1;
    const wager = Math.max(1, Math.min(coins, _gambleWager || coins));
    const maxLabel = t('gambleMax');
    const halfLabel = t('gambleHalf');

    _gambleContainer.innerHTML = `
      <button class="gamble-btn" id="gamble-btn" ${canGamble ? '' : 'disabled'}>
        🎲 ${t('gambleTitle')}
      </button>
      <div style="font-size:11px;color:var(--text-dim);margin-top:2px;">${t('gambleDesc')}</div>
      <div class="gamble-controls">
        <button class="gamble-wager-btn" id="gamble-half-btn" ${canGamble ? '' : 'disabled'}>½ ${halfLabel}</button>
        <input type="number" class="gamble-wager-input" id="gamble-wager"
          value="${Math.min(wager, coins)}" min="1" max="${Math.max(1, coins)}" ${canGamble ? '' : 'disabled'}>
        <button class="gamble-wager-btn" id="gamble-max-btn" ${canGamble ? '' : 'disabled'}>${maxLabel}</button>
      </div>
    `;

    // Bind events
    const btn = _gambleContainer.querySelector('#gamble-btn');
    const wagerInput = _gambleContainer.querySelector('#gamble-wager');
    const halfBtn = _gambleContainer.querySelector('#gamble-half-btn');
    const maxBtn = _gambleContainer.querySelector('#gamble-max-btn');

    if (btn) {
      btn.addEventListener('click', () => {
        const val = parseInt(wagerInput?.value || 1);
        if (val > 0 && callbacks.onGamble) callbacks.onGamble(val);
      });
    }
    if (halfBtn) {
      halfBtn.addEventListener('click', () => {
        const half = Math.max(1, Math.floor(coins / 2));
        if (wagerInput) wagerInput.value = half;
        _gambleWager = half;
      });
    }
    if (maxBtn) {
      maxBtn.addEventListener('click', () => {
        if (wagerInput) wagerInput.value = coins;
        _gambleWager = coins;
      });
    }
    if (wagerInput) {
      wagerInput.addEventListener('change', () => {
        const v = parseInt(wagerInput.value) || 1;
        _gambleWager = Math.max(1, Math.min(v, coins));
        wagerInput.value = _gambleWager;
      });
    }
  }
  let _gambleWager = 10;

  // Update just the gamble section (called from refresh so it stays in sync
  // with the player's current coin balance).
  function updateGambleUI() {
    if (_gambleContainer && _gambleContainer.parentNode) {
      renderGambleUI();
    }
  }

  // ===== GAMBLE RESULT OVERLAY =====
  // Full-screen card showing win/lose result with dramatic animation.
  function showGambleResult(result) {
    const overlay = document.createElement('div');
    overlay.className = 'gamble-result-overlay';

    const card = document.createElement('div');
    card.className = 'gamble-result-card ' + (result.win ? 'win' : 'lose');

    const emoji = result.win ? '🎉' : '💀';
    const label = result.win ? t('gambleWin') : t('gambleLose');
    const amount = result.win ? '+' + result.wager : '-' + result.wager;

    card.innerHTML = `
      <div class="gamble-result-title">${emoji} ${label}</div>
      <div class="gamble-result-amount">${amount} 🪙</div>
    `;
    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // Coin rain on wins!
    if (result.win) {
      showCoinRain(30);
    }

    setTimeout(() => {
      overlay.style.transition = 'opacity 0.3s';
      overlay.style.opacity = '0';
      setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 350);
    }, 1400);
  }

  // Override the refresh in refreshWithGate to also update gamble UI
  const _origRefreshGate = refreshWithGate;
  function refreshFull(gs) {
    _origRefreshGate(gs);
    updateGambleUI();
  }

  // Single source of truth for the exported handle. `refresh` is wrapped so
  // it also updates `isPrestigeReady` (used by the Tab-key handler), and the
  // early-return for tutorial-dismissal lives inline.
  const ui = {
    updateHUD, updateDropButton,
    renderUpgrades, renderPrestigeUpgrades,
    showNotification, showFloatingReward,
    showJackpot, showMilestone, updateStreak, renderStatsPanel,
    showDropResult, showFreeModal, hideFreeModal,
    updateRegenTimer, updateCombo, refresh: refreshFull,
    switchTab, updateCurrencyUI, showCoinsWasted,
    showZoneFeedback, renderPrestigeProgress, renderCollectedCards,
    isAutoDropEnabled, isSoundEnabled, setAutoDropEnabled, setSoundEnabled,
    isPrestigeReady: () => false,  // updated by refreshWithGate each tick
    dismissTutorial,
    screenShake,
    showCoinRain, showUpgradeFlash, renderGambleUI, showGambleResult,
  };
  return ui;
}
