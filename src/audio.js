// ===== Procedural arcade sound manager =====
// No external audio assets are required: short layered voices, filtered noise,
// and a restrained master compressor create softer, more musical feedback.

const SOUND_KEY = 'coinpusher_sound';

let ctx = null;
let output = null;
let ambientNodes = null;
let audioActivated = false;
const lastPlayed = new Map();

let enabled = (() => {
  try {
    const value = localStorage.getItem(SOUND_KEY);
    return value === null ? true : value === '1';
  } catch (e) {
    return true;
  }
})();

export function setSoundEnabled(value) {
  enabled = !!value;
  if (!enabled) {
    audioActivated = false;
    stopAmbient();
  } else if (ctx && ctx.state !== 'closed') {
    // Toggling sound on is itself a user gesture in the settings UI, so the
    // quiet room bed can be resumed immediately instead of waiting for a
    // later event that may never arrive.
    audioActivated = true;
    if (ctx.state === 'suspended') void ctx.resume().catch(() => {});
    startAmbient();
  }
  try { localStorage.setItem(SOUND_KEY, enabled ? '1' : '0'); } catch (e) { /* sandboxed */ }
}

export function isSoundEnabled() {
  return enabled;
}

function ensureContext() {
  if (!enabled) return null;
  if (ctx && ctx.state === 'closed') {
    ctx = null;
    output = null;
    ambientNodes = null;
    noiseBuffer = null;
  }
  if (!ctx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    ctx = new AudioContext();

    output = ctx.createGain();
    output.gain.value = 0.72;
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -20;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.16;
    output.connect(compressor);
    compressor.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') void ctx.resume().catch(() => {});
  return ctx;
}

function now() {
  return ctx ? ctx.currentTime : 0;
}

function canPlay(name, minimumGap = 0) {
  const time = performance.now();
  const previous = lastPlayed.get(name) || -Infinity;
  if (time - previous < minimumGap) return false;
  lastPlayed.set(name, time);
  return true;
}

function connectVoice(node, pan = 0) {
  if (!ctx || !output) return;
  if (typeof ctx.createStereoPanner === 'function') {
    const panner = ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    node.connect(panner);
    panner.connect(output);
  } else {
    node.connect(output);
  }
}

function tone({ frequency, endFrequency = frequency, duration = 0.1, type = 'sine', gain = 0.06, delay = 0, pan = 0, filterType = 'lowpass', filterFrequency = 2600 }) {
  if (!ctx) return;
  const start = now() + delay;
  const oscillator = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const envelope = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(Math.max(25, frequency), start);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(25, endFrequency), start + duration);
  filter.type = filterType;
  filter.frequency.setValueAtTime(filterFrequency, start);
  filter.Q.value = 0.7;
  envelope.gain.setValueAtTime(0.0001, start);
  envelope.gain.linearRampToValueAtTime(gain, start + Math.min(0.012, duration * 0.2));
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(filter);
  filter.connect(envelope);
  connectVoice(envelope, pan);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.025);
}

let noiseBuffer = null;
function getNoiseBuffer() {
  if (!ctx) return null;
  if (!noiseBuffer) {
    const length = Math.floor(ctx.sampleRate * 1.5);
    noiseBuffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
}

function noise({ duration = 0.08, gain = 0.04, delay = 0, filterType = 'bandpass', filterFrequency = 900, pan = 0 }) {
  if (!ctx) return;
  const buffer = getNoiseBuffer();
  if (!buffer) return;
  const start = now() + delay;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const envelope = ctx.createGain();
  source.buffer = buffer;
  filter.type = filterType;
  filter.frequency.value = filterFrequency;
  filter.Q.value = 0.8;
  envelope.gain.setValueAtTime(0.0001, start);
  envelope.gain.linearRampToValueAtTime(gain, start + Math.min(0.008, duration * 0.25));
  envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  source.connect(filter);
  filter.connect(envelope);
  connectVoice(envelope, pan);
  source.start(start);
  source.stop(start + duration + 0.025);
}

function playCoin(intensity = 1) {
  tone({ frequency: 760, endFrequency: 1120, duration: 0.075, type: 'triangle', gain: 0.045 * intensity, pan: -0.12, filterFrequency: 3000 });
  tone({ frequency: 1380, endFrequency: 980, duration: 0.095, type: 'sine', gain: 0.026 * intensity, delay: 0.018, pan: 0.12, filterFrequency: 4200 });
  noise({ duration: 0.025, gain: 0.018 * intensity, filterType: 'highpass', filterFrequency: 1800 });
}

function playDrop() {
  noise({ duration: 0.09, gain: 0.045, filterType: 'lowpass', filterFrequency: 520 });
  tone({ frequency: 180, endFrequency: 105, duration: 0.16, type: 'sine', gain: 0.07, filterFrequency: 700 });
  tone({ frequency: 470, endFrequency: 720, duration: 0.11, type: 'triangle', gain: 0.035, delay: 0.025, filterFrequency: 1800 });
}

function playMechanism(intensity = 1) {
  noise({ duration: 0.055, gain: 0.018 * intensity, filterType: 'lowpass', filterFrequency: 420 });
  tone({ frequency: 92, endFrequency: 72, duration: 0.12, type: 'sine', gain: 0.025 * intensity, filterFrequency: 360 });
}

function playWin(big = false) {
  const notes = big ? [523, 659, 784, 1047] : [659, 784];
  notes.forEach((frequency, index) => {
    tone({ frequency, endFrequency: frequency * 1.012, duration: big ? 0.16 : 0.13, type: 'sine', gain: big ? 0.075 : 0.055, delay: index * (big ? 0.075 : 0.06), pan: (index - 1.5) * 0.08, filterFrequency: 3200 });
  });
  noise({ duration: big ? 0.22 : 0.12, gain: big ? 0.025 : 0.012, delay: big ? 0.15 : 0.08, filterType: 'highpass', filterFrequency: 2600 });
}

function playJackpot() {
  [523, 659, 784, 1047, 1319].forEach((frequency, index) => {
    tone({ frequency, endFrequency: frequency * 1.018, duration: 0.2, type: 'sine', gain: 0.085, delay: index * 0.075, pan: Math.sin(index) * 0.22, filterFrequency: 3600 });
  });
  tone({ frequency: 1047, endFrequency: 1568, duration: 0.48, type: 'triangle', gain: 0.08, delay: 0.34, filterFrequency: 4200 });
  noise({ duration: 0.42, gain: 0.035, delay: 0.28, filterType: 'highpass', filterFrequency: 3200 });
}

function playLose() {
  tone({ frequency: 230, endFrequency: 145, duration: 0.2, type: 'sine', gain: 0.07, filterFrequency: 800 });
  tone({ frequency: 180, endFrequency: 105, duration: 0.24, type: 'triangle', gain: 0.045, delay: 0.1, filterFrequency: 700 });
  noise({ duration: 0.07, gain: 0.018, filterType: 'lowpass', filterFrequency: 500, delay: 0.08 });
}

function playUpgrade() {
  [440, 554, 659].forEach((frequency, index) => {
    tone({ frequency, endFrequency: frequency * 1.02, duration: 0.11, type: 'triangle', gain: 0.045, delay: index * 0.06, filterFrequency: 2400 });
  });
}

function playPrestige() {
  [392, 523, 659, 784, 1047].forEach((frequency, index) => {
    tone({ frequency, endFrequency: frequency * 1.015, duration: 0.22, type: 'sine', gain: 0.07, delay: index * 0.09, pan: (index - 2) * 0.08, filterFrequency: 3200 });
  });
}

// A very quiet filtered room bed starts only after the first user interaction.
// It avoids the previous loud two-oscillator drone while keeping the cabinet
// from feeling acoustically dead.
function startAmbient() {
  if (!ctx || ambientNodes) return;
  const master = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  master.gain.value = 0.008;
  filter.type = 'lowpass';
  filter.frequency.value = 720;
  filter.Q.value = 0.45;
  filter.connect(master);
  master.connect(output);

  const room = ctx.createBufferSource();
  room.buffer = getNoiseBuffer();
  room.loop = true;
  const humA = ctx.createOscillator();
  const humB = ctx.createOscillator();
  humA.type = 'sine'; humB.type = 'sine';
  humA.frequency.value = 98;
  humB.frequency.value = 147;
  const humGain = ctx.createGain();
  humGain.gain.value = 0.012;
  room.connect(filter);
  humA.connect(humGain); humB.connect(humGain);
  humGain.connect(filter);
  room.start(); humA.start(); humB.start();
  ambientNodes = { master, room, humA, humB };
}

function stopAmbient() {
  if (!ambientNodes || !ctx) return;
  const nodes = ambientNodes;
  ambientNodes = null;
  const stopAt = now() + 0.08;
  nodes.master.gain.cancelScheduledValues(now());
  nodes.master.gain.setTargetAtTime(0.0001, now(), 0.025);
  [nodes.room, nodes.humA, nodes.humB].forEach(node => {
    try { node.stop(stopAt); } catch (e) { /* already stopped */ }
  });
}

export function playSound(name, intensity = 1) {
  // Collision, mechanism, reward, and ambient effects must never create an
  // AudioContext from the render loop before the browser has seen a gesture.
  // UI/drop sounds mark the interaction as unlocked below.
  const gestureSounds = name === 'click' || name === 'drop' || name === 'upgrade' || name === 'prestige';
  if (!audioActivated && !gestureSounds) return;
  const context = ensureContext();
  if (!context) return;
  const strength = Math.max(0.15, Math.min(1.5, intensity || 1));
  // Only explicit UI sounds unlock the quiet room bed. Physical simulation
  // sounds can occur before a gesture and must remain one-shot effects.
  if (!audioActivated && (name === 'click' || name === 'drop' || name === 'upgrade' || name === 'prestige')) {
    audioActivated = true;
    startAmbient();
  }
  const gaps = { coin: 55, sparkle: 80, click: 70, drop: 90, mechanism: 520, win: 120, bigwin: 180, jackpot: 350, lose: 180 };
  if (!canPlay(name, gaps[name] || 0)) return;

  switch (name) {
    case 'coin': playCoin(strength); break;
    case 'sparkle':
      tone({ frequency: 1320, endFrequency: 1880, duration: 0.11, type: 'sine', gain: 0.035 * strength, filterFrequency: 5000 });
      tone({ frequency: 1980, endFrequency: 2420, duration: 0.08, type: 'sine', gain: 0.018 * strength, delay: 0.045, filterFrequency: 5600 });
      break;
    case 'drop': playDrop(); break;
    case 'mechanism': playMechanism(strength); break;
    case 'win': playWin(false); break;
    case 'bigwin': playWin(true); break;
    case 'jackpot': playJackpot(); break;
    case 'lose': playLose(); break;
    case 'upgrade': playUpgrade(); break;
    case 'prestige': playPrestige(); break;
    case 'click': tone({ frequency: 340, endFrequency: 290, duration: 0.04, type: 'triangle', gain: 0.022, filterFrequency: 1800 }); break;
    default: break;
  }
}
