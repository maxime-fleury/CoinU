// ===== Simple Web Audio Sound Manager =====

const SOUNDS = {
  drop: { freq: 800, type: 'sine', duration: 0.08, slide: -200 },
  win: { freq: 1200, type: 'sine', duration: 0.15, slide: 400 },
  lose: { freq: 300, type: 'sawtooth', duration: 0.2, slide: -100 },
  upgrade: { freq: 600, type: 'square', duration: 0.12, slide: 300 },
  prestige: { freq: 900, type: 'sine', duration: 0.4, slide: 600 },
  jackpot: { freq: 1320, type: 'sine', duration: 0.6, slide: 880, gain: 0.22 },
  bigwin: { freq: 880, type: 'triangle', duration: 0.35, slide: 660, gain: 0.20 },
};

const SOUND_KEY = 'coinpusher_sound'; // localStorage key for the user's preference.

let ctx = null;

// Read the persisted preference at module-load time so the very first frame
// already honors the user's previous sound setting (defaults to on).
let enabled = (() => {
  try {
    const v = localStorage.getItem(SOUND_KEY);
    return v === null ? true : v === '1';
  } catch (e) { return true; }
})();

export function setSoundEnabled(v) {
  enabled = !!v;
  try { localStorage.setItem(SOUND_KEY, v ? '1' : '0'); } catch (e) { /* sandboxed */ }
}

export function isSoundEnabled() {
  return enabled;
}

function ensureContext() {
  if (!enabled) return null;
  if (!ctx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    ctx = new AudioContext();
  }
  if (ctx.state === 'suspended') {
    ctx.resume();
  }
  return ctx;
}

export function playSound(name) {
  const sound = SOUNDS[name];
  if (!sound) return;
  const context = ensureContext();
  if (!context) return;

  const osc = context.createOscillator();
  const gain = context.createGain();

  osc.type = sound.type;
  osc.frequency.setValueAtTime(sound.freq, context.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(50, sound.freq + sound.slide), context.currentTime + sound.duration);

  gain.gain.setValueAtTime(sound.gain || 0.15, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + sound.duration);

  osc.connect(gain);
  gain.connect(context.destination);

  osc.start();
  osc.stop(context.currentTime + sound.duration);
}
