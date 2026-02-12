import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeStep from "./WelcomeStep";
import QuizStep from "./QuizStep";
import ResultStep from "./ResultStep";
import OfferStep from "./OfferStep";
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
  {
    question: "How old is your loved one?",
    subtitle: "We adapt alerts based on age group.",
    options: [
      { label: "Under 65", emoji: "🙂" },
      { label: "65–74", emoji: "👵" },
      { label: "75–84", emoji: "🧓" },
      { label: "85 or older", emoji: "💛" },
    ],
  },
  {
    question: "How tech-savvy are they?",
    subtitle: "We'll make it easy for them regardless.",
    options: [
      { label: "Very comfortable", emoji: "📱" },
      { label: "Can do the basics", emoji: "👍" },
      { label: "Needs help sometimes", emoji: "🤷" },
      { label: "Not at all", emoji: "😅" },
    ],
  },
  {
    question: "What type of phone do they use?",
    subtitle: "I'm Alive works on both platforms.",
    options: [
      { label: "iPhone", emoji: "🍎" },
      { label: "Android", emoji: "🤖" },
      { label: "I'm not sure", emoji: "❓" },
      { label: "A basic phone", emoji: "📞" },
    ],
  },
  {
    question: "Have they had any health concerns recently?",
    subtitle: "This helps us prioritise urgency.",
    options: [
      { label: "Yes, serious concerns", emoji: "🏥" },
      { label: "Minor issues", emoji: "🩹" },
      { label: "Generally healthy", emoji: "💪" },
      { label: "Prefer not to say", emoji: "🔒" },
    ],
  },
  {
    question: "How do you currently check on them?",
    subtitle: "We'll improve your existing routine.",
    options: [
      { label: "Phone calls", emoji: "📞" },
      { label: "Text messages", emoji: "💬" },
      { label: "Video calls", emoji: "📹" },
      { label: "I rarely do", emoji: "😔" },
    ],
  },
  {
    question: "What time of day concerns you most?",
    subtitle: "We can schedule alerts when it matters.",
    options: [
      { label: "Early morning", emoji: "🌅" },
      { label: "During the day", emoji: "☀️" },
      { label: "Evening/night", emoji: "🌙" },
      { label: "All the time", emoji: "⏰" },
    ],
  },
  {
    question: "Have you ever missed a call and panicked?",
    subtitle: "You're not alone in this.",
    options: [
      { label: "Yes, many times", emoji: "😱" },
      { label: "A few times", emoji: "😥" },
      { label: "Once or twice", emoji: "😬" },
      { label: "Not yet, but I worry", emoji: "🤞" },
    ],
  },
  {
    question: "Would a daily photo reassure you?",
    subtitle: "Seeing them safe can change everything.",
    options: [
      { label: "Absolutely", emoji: "📸" },
      { label: "Yes, that'd help", emoji: "😊" },
      { label: "Maybe", emoji: "🤔" },
      { label: "I'd prefer a message", emoji: "💬" },
    ],
  },
  {
    question: "How quickly do you want to be notified?",
    subtitle: "If they don't check in on time.",
    options: [
      { label: "Immediately", emoji: "🚨" },
      { label: "Within 30 minutes", emoji: "⏱️" },
      { label: "Within an hour", emoji: "🕐" },
      { label: "Just once a day", emoji: "📋" },
    ],
  },
  {
    question: "Do other family members share your concern?",
    subtitle: "We support multiple watchers.",
    options: [
      { label: "Yes, several of us", emoji: "👨‍👩‍👧‍👦" },
      { label: "One or two others", emoji: "👥" },
      { label: "Just me", emoji: "🙋" },
      { label: "They don't know I worry", emoji: "🤫" },
    ],
  },
  {
    question: "Would you like emergency contact alerts?",
    subtitle: "We can notify neighbours or carers too.",
    options: [
      { label: "Yes, definitely", emoji: "🆘" },
      { label: "Good idea", emoji: "👍" },
      { label: "Maybe later", emoji: "🤷" },
      { label: "No, just me", emoji: "🙅" },
    ],
  },
  {
    question: "How important is their independence?",
    subtitle: "I'm Alive respects their autonomy.",
    options: [
      { label: "Very — they'd hate to feel watched", emoji: "🦅" },
      { label: "Important — but safety first", emoji: "⚖️" },
      { label: "They're open to help", emoji: "🤝" },
      { label: "They need close monitoring", emoji: "👀" },
    ],
  },
  {
    question: "What would peace of mind mean to you?",
    subtitle: "Imagine knowing they're safe every day.",
    options: [
      { label: "Less anxiety", emoji: "🧘" },
      { label: "Better sleep", emoji: "😴" },
      { label: "More focus at work", emoji: "💼" },
      { label: "All of the above", emoji: "✨" },
    ],
  },
  {
    question: "Have you tried any other solution?",
    subtitle: "Most alternatives are complicated or invasive.",
    options: [
      { label: "Yes, but it didn't work", emoji: "❌" },
      { label: "I've looked into some", emoji: "🔍" },
      { label: "No, this is new to me", emoji: "🆕" },
      { label: "I use cameras (feels invasive)", emoji: "📷" },
    ],
  },
  {
    question: "How soon would you like to start?",
    subtitle: "Setup takes less than 2 minutes.",
    options: [
      { label: "Right now", emoji: "⚡" },
      { label: "Today", emoji: "📅" },
      { label: "This week", emoji: "🗓️" },
      { label: "I'm just exploring", emoji: "👀" },
    ],
  },
  {
    question: "One last thing — what matters most?",
    subtitle: "We'll optimise your experience.",
    options: [
      { label: "Simplicity for them", emoji: "🎯" },
      { label: "Speed of alerts", emoji: "⚡" },
      { label: "Affordability", emoji: "💰" },
      { label: "Family coordination", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
];

const TOTAL_QUIZ = quizSteps.length; // 20

const OnboardingQuiz = () => {
  const [step, setStep] = useState(0);
  // step 0 = welcome, 1-20 = quiz, 21 = result, 22 = offer, 23 = pricing

  const handleQuizAnswer = (_answer: string) => {
    setStep((s) => s + 1);
  };

  return (
    <div className="min-h-screen bg-background max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {step === 0 && <WelcomeStep key="welcome" onNext={() => setStep(1)} />}
        
        {step >= 1 && step <= TOTAL_QUIZ && (
          <QuizStep
            key={`quiz-${step}`}
            question={quizSteps[step - 1].question}
            subtitle={quizSteps[step - 1].subtitle}
            options={quizSteps[step - 1].options}
            stepNumber={step}
            totalSteps={TOTAL_QUIZ}
            onSelect={handleQuizAnswer}
          />
        )}

        {step === TOTAL_QUIZ + 1 && <ResultStep key="result" onNext={() => setStep(TOTAL_QUIZ + 2)} />}
        
        {step === TOTAL_QUIZ + 2 && <OfferStep key="offer" onNext={() => setStep(TOTAL_QUIZ + 3)} />}

        {step === TOTAL_QUIZ + 3 && <PricingStep key="pricing" />}
      </AnimatePresence>
    </div>
  );
};

export default OnboardingQuiz;
