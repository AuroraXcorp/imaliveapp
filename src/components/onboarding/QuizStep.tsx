import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface QuizOption {
  label: string;
  emoji?: string;
}

interface QuizStepProps {
  question: string;
  subtitle?: string;
  options: QuizOption[];
  stepNumber: number;
  totalSteps: number;
  onSelect: (answer: string) => void;
  onBack?: () => void;
}

const QuizStep = ({ question, subtitle, options, stepNumber, totalSteps, onSelect, onBack }: QuizStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
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
          initial={{ width: `${((stepNumber - 1) / totalSteps) * 100}%` }}
          animate={{ width: `${(stepNumber / totalSteps) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <span className="text-muted-foreground text-sm mb-2 uppercase tracking-wider">
        Step {stepNumber} of {totalSteps}
      </span>

      <h2 className="text-2xl font-bold font-display mb-2">{question}</h2>
      {subtitle && <p className="text-muted-foreground text-sm mb-8">{subtitle}</p>}

      <div className="flex flex-col gap-3 mt-4">
        {options.map((option, i) => (
          <motion.button
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.label)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all text-left group"
          >
            <div className="flex items-center gap-3">
              {option.emoji && <span className="text-2xl">{option.emoji}</span>}
              <span className="text-foreground font-medium">{option.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizStep;
