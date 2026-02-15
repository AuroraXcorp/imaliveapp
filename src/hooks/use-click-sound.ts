const useClickSound = () => {
  const play = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      // A pleasant, soft "pop" sound
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.04);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.12);

      // Cleanup
      osc.onended = () => ctx.close();
    } catch {
      // Silently fail if audio not supported
    }
  };

  return play;
};

export default useClickSound;
