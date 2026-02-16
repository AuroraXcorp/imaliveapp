import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import useClickSound from "@/hooks/use-click-sound";

interface InterstitialStepProps {
  image: string;
  title: string;
  subtitle: string;
  onNext: () => void;
  onBack?: () => void;
  progress: number;
  totalSegments: number;
  currentSegment: number;
}

const InterstitialStep = ({ image, title, subtitle, onNext, onBack, progress, totalSegments, currentSegment }: InterstitialStepProps) => {
  const playClick = useClickSound();

  const handleNext = () => {
    playClick();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Progress bar */}
      <div className="px-6 pt-6 pb-2">
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

      {/* Image */}
      <div className="flex-1 flex flex-col">
        <div className="relative flex-1 min-h-[40vh] overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="px-6 -mt-16 relative z-10 pb-8">
          <h2 className="text-3xl font-bold font-display mb-3">{title}</h2>
          <p className="text-muted-foreground text-base mb-8">{subtitle}</p>

          <button
            onClick={handleNext}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg btn-glow"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default InterstitialStep;
