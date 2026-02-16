const useClickSound = () => {
  const play = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const t = ctx.currentTime;

      // Layer 1: Crisp high-frequency tick (wood-like)
      const tickOsc = ctx.createOscillator();
      const tickGain = ctx.createGain();
      tickOsc.connect(tickGain);
      tickGain.connect(ctx.destination);
      tickOsc.type = "triangle";
      tickOsc.frequency.setValueAtTime(3200, t);
      tickOsc.frequency.exponentialRampToValueAtTime(1200, t + 0.008);
      tickGain.gain.setValueAtTime(0.06, t);
      tickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);
      tickOsc.start(t);
      tickOsc.stop(t + 0.025);

      // Layer 2: Warm resonant body (satisfying depth at ~440Hz A4)
      const bodyOsc = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      bodyOsc.connect(bodyGain);
      bodyGain.connect(ctx.destination);
      bodyOsc.type = "sine";
      bodyOsc.frequency.setValueAtTime(440, t);
      bodyOsc.frequency.exponentialRampToValueAtTime(260, t + 0.06);
      bodyGain.gain.setValueAtTime(0.10, t);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
      bodyOsc.start(t);
      bodyOsc.stop(t + 0.08);

      // Layer 3: Subtle harmonic shimmer (pleasant overtone)
      const shimmerOsc = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmerOsc.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      shimmerOsc.type = "sine";
      shimmerOsc.frequency.setValueAtTime(1760, t);
      shimmerOsc.frequency.exponentialRampToValueAtTime(880, t + 0.04);
      shimmerGain.gain.setValueAtTime(0.03, t);
      shimmerGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      shimmerOsc.start(t);
      shimmerOsc.stop(t + 0.05);

      // Cleanup
      bodyOsc.onended = () => ctx.close();
    } catch {
      // Silently fail
    }
  };

  return play;
};

export default useClickSound;
