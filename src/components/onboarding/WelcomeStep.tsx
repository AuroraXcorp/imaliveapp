import { motion } from "framer-motion";
import { Heart, Shield, Bell } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mb-8"
      >
        <Heart className="w-12 h-12 text-primary" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-4xl font-bold font-display mb-4"
      >
        I'm <span className="text-gradient">Alive</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-muted-foreground text-lg mb-10 max-w-xs"
      >
        Peace of mind for you and your loved ones, every single day.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col gap-4 w-full max-w-xs mb-12"
      >
        {[
          { icon: Bell, text: "Daily check-in alerts" },
          { icon: Shield, text: "Instant photo confirmation" },
          { icon: Heart, text: "Real-time peace of mind" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-secondary-foreground text-sm">{item.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNext}
        className="w-full max-w-xs py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-glow animate-pulse-glow"
      >
        Let's Get Started
      </motion.button>
    </motion.div>
  );
};

export default WelcomeStep;
