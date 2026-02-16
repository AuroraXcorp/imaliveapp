const useClickSound = () => {
  const play = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const t = ctx.currentTime;

      // Layer 1: Soft tactile tick
      const tickOsc = ctx.createOscillator();
      const tickGain = ctx.createGain();
      tickOsc.connect(tickGain);
      tickGain.connect(ctx.destination);
      tickOsc.type = "sine";
      tickOsc.frequency.setValueAtTime(2400, t);
      tickOsc.frequency.exponentialRampToValueAtTime(800, t + 0.012);
      tickGain.gain.setValueAtTime(0.04, t);
      tickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.02);
      tickOsc.start(t);
      tickOsc.stop(t + 0.02);

      // Layer 2: Warm C5 note (528Hz — "love frequency", soothing)
      const bodyOsc = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      bodyOsc.connect(bodyGain);
      bodyGain.connect(ctx.destination);
      bodyOsc.type = "sine";
      bodyOsc.frequency.setValueAtTime(528, t);
      bodyOsc.frequency.exponentialRampToValueAtTime(396, t + 0.09);
      bodyGain.gain.setValueAtTime(0.07, t);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      bodyOsc.start(t);
      bodyOsc.stop(t + 0.12);

      // Layer 3: Gentle harmonic glow
      const glowOsc = ctx.createOscillator();
      const glowGain = ctx.createGain();
      glowOsc.connect(glowGain);
      glowGain.connect(ctx.destination);
      glowOsc.type = "sine";
      glowOsc.frequency.setValueAtTime(1056, t + 0.005);
      glowOsc.frequency.exponentialRampToValueAtTime(528, t + 0.06);
      glowGain.gain.setValueAtTime(0.02, t + 0.005);
      glowGain.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
      glowOsc.start(t + 0.005);
      glowOsc.stop(t + 0.07);

      // Cleanup
      bodyOsc.onended = () => ctx.close();
    } catch {
      // Silently fail
    }
  };

  return play;
};

export default useClickSound;
