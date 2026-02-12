import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import QuizStep from "./QuizStep";
import ResultStep from "./ResultStep";
import PricingStep from "./PricingStep";

const quizSteps = [
  {
    question: "Who would you like to check on?",
    subtitle: "We'll tailor the experience to your needs.",
    options: [
      { label: "My parent", emoji: "👨‍👩‍👧" },
      { label: "My grandparent", emoji: "👴" },
      { label: "Another relative", emoji: "👨‍👩‍👦‍👦" },
      { label: "A close friend", emoji: "🤝" },
    ],
  },
  {
    question: "How far away do they live?",
    subtitle: "Distance shouldn't mean worry.",
    options: [
      { label: "In the same city", emoji: "🏘️" },
      { label: "In another city", emoji: "🚗" },
      { label: "In another country", emoji: "✈️" },
      { label: "Very far away", emoji: "🌍" },
    ],
  },
  {
    question: "How often do you worry about them?",
    subtitle: "Be honest — there's no wrong answer.",
    options: [
      { label: "Every day", emoji: "😰" },
      { label: "A few times a week", emoji: "😟" },
      { label: "Once a week", emoji: "🤔" },
      { label: "Occasionally", emoji: "😊" },
    ],
  },
  {
    question: "Do they live alone?",
    subtitle: "This helps us set the right alert frequency.",
    options: [
      { label: "Yes, completely alone", emoji: "🏠" },
      { label: "With a partner", emoji: "👫" },
      { label: "With a caregiver", emoji: "🏥" },
      { label: "With other family", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
];

const OnboardingQuiz = () => {
  const [step, setStep] = useState(0);
  // step 0 = welcome, 1-4 = quiz, 5 = result, 6 = pricing

  const handleQuizAnswer = (_answer: string) => {
    setStep((s) => s + 1);
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {step === 0 && <WelcomeStep key="welcome" onNext={() => setStep(1)} />}
        
        {step >= 1 && step <= 4 && (
          <QuizStep
            key={`quiz-${step}`}
            question={quizSteps[step - 1].question}
            subtitle={quizSteps[step - 1].subtitle}
            options={quizSteps[step - 1].options}
            stepNumber={step}
            totalSteps={4}
            onSelect={handleQuizAnswer}
          />
        )}

        {step === 5 && <ResultStep key="result" onNext={() => setStep(6)} />}
        
        {step === 6 && <PricingStep key="pricing" />}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingQuiz;
