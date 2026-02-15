const useClickSound = () => {
  const play = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const t = ctx.currentTime;

      // Layer 1: Sharp transient click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickOsc.type = "square";
      clickOsc.frequency.setValueAtTime(1800, t);
      clickOsc.frequency.exponentialRampToValueAtTime(400, t + 0.015);
      clickGain.gain.setValueAtTime(0.08, t);
      clickGain.gain.exponentialRampToValueAtTime(0.001, t + 0.03);
      clickOsc.start(t);
      clickOsc.stop(t + 0.03);

      // Layer 2: Subtle body thud
      const thudOsc = ctx.createOscillator();
      const thudGain = ctx.createGain();
      thudOsc.connect(thudGain);
      thudGain.connect(ctx.destination);
      thudOsc.type = "sine";
      thudOsc.frequency.setValueAtTime(150, t);
      thudOsc.frequency.exponentialRampToValueAtTime(80, t + 0.04);
      thudGain.gain.setValueAtTime(0.12, t);
      thudGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      thudOsc.start(t);
      thudOsc.stop(t + 0.05);

      // Cleanup
      thudOsc.onended = () => ctx.close();
    } catch {
      // Silently fail
    }
  };

  return play;
};

export default useClickSound;
