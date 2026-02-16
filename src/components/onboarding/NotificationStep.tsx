import { motion } from "framer-motion";
import { Bell, ArrowLeft } from "lucide-react";
import useClickSound from "@/hooks/use-click-sound";
import logo from "@/assets/logo.png";

interface NotificationStepProps {
  onNext: () => void;
  onBack?: () => void;
  progress: number;
  totalSegments: number;
  currentSegment: number;
}

const NotificationStep = ({ onNext, onBack, progress, totalSegments, currentSegment }: NotificationStepProps) => {
  const playClick = useClickSound();

  const handleEnable = () => {
    playClick();
    if ("Notification" in window) {
      Notification.requestPermission().then(() => onNext());
    } else {
      onNext();
    }
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
      className="flex flex-col min-h-screen px-6 py-6"
    >
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          {onBack && (
            <button onClick={onBack} className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="flex gap-1.5 flex-1">
            {Array.from({ length: totalSegments }).map((_, i) => (
              <div key={i} className="h-1 flex-1 rounded-full overflow-hidden bg-secondary">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: i < currentSegment ? "100%" : i === currentSegment ? `${progress}%` : "0%" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <Bell className="w-12 h-12 text-primary mb-6" />
        <h2 className="text-3xl font-bold font-display mb-3">Enable notifications?</h2>
        <p className="text-muted-foreground text-base mb-10 max-w-xs">
          We'll send you daily updates so you know your loved one is safe and well.
        </p>

        {/* Mock notification */}
        <div className="w-full max-w-sm p-4 rounded-2xl bg-card border border-border mb-12">
          <div className="flex items-center gap-3">
            <img src={logo} alt="I'm Alive" className="w-10 h-10 rounded-xl object-contain" />
            <div className="text-left flex-1">
              <p className="text-sm font-bold text-foreground">Your loved one checked in! ✅</p>
              <p className="text-xs text-muted-foreground">They're safe — photo received just now</p>
            </div>
            <span className="text-xs text-muted-foreground">now</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-4">
        <button
          onClick={handleEnable}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-glow"
        >
          Enable notifications
        </button>
        <button
          onClick={handleSkip}
          className="w-full py-4 rounded-xl bg-secondary text-muted-foreground font-medium text-base"
        >
          I don't need reminders
        </button>
      </div>
    </motion.div>
  );
};

export default NotificationStep;
