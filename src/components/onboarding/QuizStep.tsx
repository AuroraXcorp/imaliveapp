import { ChevronRight, ArrowLeft } from "lucide-react";
import useClickSound from "@/hooks/use-click-sound";

interface QuizOption {
  label: string;
  emoji?: string;
}

interface QuizStepProps {
  question: string;
  subtitle?: string;
  category?: string;
  options: QuizOption[];
  onSelect: (answer: string) => void;
  onBack?: () => void;
  progress: number;
  totalSegments: number;
  currentSegment: number;
}

const QuizStep = ({ question, subtitle, category, options, onSelect, onBack, progress, totalSegments, currentSegment }: QuizStepProps) => {
  const playClick = useClickSound();

  const handleSelect = (label: string) => {
    playClick();
    onSelect(label);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-6">
      {/* Progress bar */}
      <div className="mb-6">
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

      {/* Category badge */}
      {category && (
        <div className="flex justify-center mb-3">
          <span className="px-4 py-1.5 rounded-full border border-border text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        </div>
      )}

      <h2 className="text-2xl font-bold font-display mb-2 text-center">{question}</h2>
      {subtitle && <p className="text-muted-foreground text-sm mb-8 text-center">{subtitle}</p>}

      <div className="flex flex-col gap-3 mt-2">
        {options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(option.label)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              {option.emoji && <span className="text-2xl">{option.emoji}</span>}
              <span className="text-foreground font-medium">{option.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizStep;
