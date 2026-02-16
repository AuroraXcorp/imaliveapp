import { motion } from "framer-motion";
import { Bell, BellRing } from "lucide-react";
import useClickSound from "@/hooks/use-click-sound";

interface NotificationStepProps {
  onNext: () => void;
}

const NotificationStep = ({ onNext }: NotificationStepProps) => {
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
      className="flex flex-col items-center justify-center min-h-screen px-6 py-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mb-6"
      >
        <BellRing className="w-10 h-10 text-primary" />
      </motion.div>

      <h2 className="text-2xl font-bold font-display mb-3">
        Enable Notifications
      </h2>
      <p className="text-muted-foreground text-sm mb-2 max-w-xs">
        Get instant alerts when your loved one checks in — or if they don't.
      </p>
      <p className="text-muted-foreground/70 text-xs mb-10 max-w-xs">
        You can change this anytime in your settings.
      </p>

      <div className="w-full flex flex-col gap-3">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleEnable}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-glow flex items-center justify-center gap-2"
        >
          <Bell className="w-5 h-5" />
          Allow Notifications
        </motion.button>

        <button
          onClick={handleSkip}
          className="text-muted-foreground text-sm hover:text-foreground transition-colors py-2"
        >
          Maybe later
        </button>
      </div>
    </motion.div>
  );
};

export default NotificationStep;
