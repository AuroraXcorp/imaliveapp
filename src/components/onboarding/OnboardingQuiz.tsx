import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import QuizStep from "./QuizStep";
import InterstitialStep from "./InterstitialStep";
import NotificationStep from "./NotificationStep";
import ResultStep from "./ResultStep";
import OfferStep from "./OfferStep";
import PricingStep from "./PricingStep";
import { steps, TOTAL_STEPS, PROGRESS_SEGMENTS } from "./quizData";
import interstitialFamily from "@/assets/interstitial-family.jpg";
import interstitialPhone from "@/assets/interstitial-phone.jpg";
import interstitialCommunity from "@/assets/interstitial-community.jpg";

const imageMap: Record<string, string> = {
  family: interstitialFamily,
  phone: interstitialPhone,
  community: interstitialCommunity,
};

// step 0 = welcome
// step 1..TOTAL_STEPS = quiz/interstitial steps
// TOTAL_STEPS+1 = notification
// TOTAL_STEPS+2 = result
// TOTAL_STEPS+3 = offer
// TOTAL_STEPS+4 = pricing

const OnboardingQuiz = () => {
  const [step, setStep] = useState(0);

  const handleBack = () => setStep((s) => Math.max(0, s - 1));

  const getProgressInfo = (quizIndex: number) => {
    const ratio = quizIndex / TOTAL_STEPS;
    const currentSegment = Math.min(Math.floor(ratio * PROGRESS_SEGMENTS), PROGRESS_SEGMENTS - 1);
    const segmentProgress = ((ratio * PROGRESS_SEGMENTS) - currentSegment) * 100;
    return { currentSegment, progress: Math.min(segmentProgress, 100) };
  };

  const renderStep = () => {
    if (step === 0) {
      return <WelcomeStep key="welcome" onNext={() => setStep(1)} />;
    }

    if (step >= 1 && step <= TOTAL_STEPS) {
      const idx = step - 1;
      const data = steps[idx];
      const { currentSegment, progress } = getProgressInfo(step);

      if (data.type === "interstitial") {
        return (
          <InterstitialStep
            key={`inter-${step}`}
            image={imageMap[data.imageKey]}
            title={data.title}
            subtitle={data.subtitle}
            onNext={() => setStep((s) => s + 1)}
            onBack={handleBack}
            progress={progress}
            totalSegments={PROGRESS_SEGMENTS}
            currentSegment={currentSegment}
          />
        );
      }

      return (
        <QuizStep
          key={`quiz-${step}`}
          question={data.question}
          subtitle={data.subtitle}
          category={data.category}
          options={data.options}
          onSelect={() => setStep((s) => s + 1)}
          onBack={handleBack}
          progress={progress}
          totalSegments={PROGRESS_SEGMENTS}
          currentSegment={currentSegment}
        />
      );
    }

    if (step === TOTAL_STEPS + 1) {
      const { currentSegment, progress } = getProgressInfo(TOTAL_STEPS);
      return (
        <NotificationStep
          key="notification"
          onNext={() => setStep(TOTAL_STEPS + 2)}
          onBack={handleBack}
          progress={100}
          totalSegments={PROGRESS_SEGMENTS}
          currentSegment={PROGRESS_SEGMENTS - 1}
        />
      );
    }

    if (step === TOTAL_STEPS + 2) {
      return <ResultStep key="result" onNext={() => setStep(TOTAL_STEPS + 3)} />;
    }

    if (step === TOTAL_STEPS + 3) {
      return <OfferStep key="offer" onNext={() => setStep(TOTAL_STEPS + 4)} />;
    }

    if (step === TOTAL_STEPS + 4) {
      return <PricingStep key="pricing" />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingQuiz;
