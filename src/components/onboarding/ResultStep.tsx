import { motion } from "framer-motion";
import { CheckCircle, Clock, Camera, Bell } from "lucide-react";

interface ResultStepProps {
  onNext: () => void;
}

const ResultStep = ({ onNext }: ResultStepProps) => {
  const features = [
    { icon: Bell, title: "Smart Daily Alerts", desc: "Your loved one receives a gentle alarm at a time you choose." },
    { icon: Camera, title: "Instant Photo Proof", desc: "They simply tap to stop the alarm and a photo is sent to you." },
    { icon: Clock, title: "Real-Time Updates", desc: "Get notified instantly — no news is never good news again." },
    { icon: CheckCircle, title: "Peace of Mind", desc: "Know they're safe, every single day, with zero effort." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen px-6 py-8"
    >
      <div className="flex-1">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 text-success mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Perfect match!</span>
          </div>
          <h2 className="text-3xl font-bold font-display mb-3">
            I'm Alive is <span className="text-gradient">made for you</span>
          </h2>
          <p className="text-muted-foreground">
            Based on your answers, here's how we'll help you stay connected.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex gap-4 p-4 rounded-xl bg-card border border-border card-elevated"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <feat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{feat.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="w-full py-4 mt-8 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-glow"
      >
        See Our Plans
      </motion.button>
    </motion.div>
  );
};

export default ResultStep;
