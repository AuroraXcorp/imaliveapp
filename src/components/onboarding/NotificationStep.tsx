import { motion } from "framer-motion";
import { Bell, BellRing, ArrowLeft } from "lucide-react";
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

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-secondary rounded-full mb-8">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: `${((totalSteps - 1) / totalSteps) * 100}%` }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <h2 className="text-2xl font-bold font-display mb-2">Enable Notifications</h2>
      <p className="text-muted-foreground text-sm mb-10">
        Get instant alerts when your loved one checks in — or if they don't.
      </p>

      <div className="flex flex-col gap-3 mt-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleEnable}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔔</span>
            <span className="text-foreground font-medium">Yes, allow notifications</span>
          </div>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleSkip}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏭️</span>
            <span className="text-foreground font-medium">Maybe later</span>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NotificationStep;
