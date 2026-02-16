import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import useClickSound from "@/hooks/use-click-sound";

interface NotificationStepProps {
  onNext: () => void;
  onBack?: () => void;
  totalSteps: number;
}

const NotificationStep = ({ onNext, onBack, totalSteps }: NotificationStepProps) => {
  const playClick = useClickSound();

  const handleEnable = async () => {
    playClick();
    if ("Notification" in window) {
      await Notification.requestPermission();
    }
    onNext();
  };

  const handleSkip = () => {
    playClick();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen px-6 py-8"
    >
      {/* Back button */}
      {onBack && (
        <button onClick={onBack} className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors mb-4 -mt-2 self-start">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>
      )}

      {/* Progress bar - appears as step 20/21 */}
      <div className="w-full h-1.5 bg-secondary rounded-full mb-8">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${((totalSteps - 1) / totalSteps) * 100}%` }}
          animate={{ width: `${(totalSteps / totalSteps) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h2 className="text-2xl font-bold font-display mb-2">
        Don't miss when they need you
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Enable notifications so you're always the first to know they're safe.
      </p>

      {/* Notification illustration */}
      <div className="flex flex-col items-center my-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4"
        >
          <motion.div
            animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
            transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <Bell className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>
        <p className="text-muted-foreground/70 text-xs text-center max-w-[240px]">
          You'll receive a gentle alert if your loved one doesn't check in on time.
        </p>
      </div>

      <div className="flex-1" />

      {/* Pulsing CTA button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        animate={{
          boxShadow: [
            "0 0 0 0 hsl(var(--primary) / 0.4)",
            "0 0 0 12px hsl(var(--primary) / 0)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        onClick={handleEnable}
        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2"
      >
        <Bell className="w-5 h-5" />
        Allow Notifications
      </motion.button>

      <button
        onClick={handleSkip}
        className="text-muted-foreground text-xs hover:text-foreground transition-colors py-3 mt-2"
      >
        Maybe later
      </button>
    </motion.div>
  );
};

export default NotificationStep;
