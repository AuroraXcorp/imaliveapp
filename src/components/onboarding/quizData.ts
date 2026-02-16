export interface QuizStepData {
  type: "quiz";
  category?: string;
  question: string;
  subtitle?: string;
  options: { label: string; emoji?: string }[];
}

export interface InterstitialData {
  type: "interstitial";
  imageKey: string;
  title: string;
  subtitle: string;
}

export type StepData = QuizStepData | InterstitialData;

export const steps: StepData[] = [
  // 1 - Quiz: Who
  {
    type: "quiz",
    category: "About them",
    question: "Who would you like to check on?",
    subtitle: "We'll tailor the experience to your needs.",
    options: [
      { label: "My parent", emoji: "👨‍👩‍👧" },
      { label: "My grandparent", emoji: "👴" },
      { label: "Another relative", emoji: "👨‍👩‍👦‍👦" },
      { label: "A close friend", emoji: "🤝" },
    ],
  },
  // 2 - Quiz: Distance
  {
    type: "quiz",
    category: "About them",
    question: "How far away do they live?",
    subtitle: "Distance shouldn't mean worry.",
    options: [
      { label: "In the same city", emoji: "🏘️" },
      { label: "In another city", emoji: "🚗" },
      { label: "In another country", emoji: "✈️" },
      { label: "Very far away", emoji: "🌍" },
    ],
  },
  // 3 - Quiz: Worry frequency
  {
    type: "quiz",
    category: "Your feelings",
    question: "How often do you worry about them?",
    subtitle: "Be honest — there's no wrong answer.",
    options: [
      { label: "Every day", emoji: "😰" },
      { label: "A few times a week", emoji: "😟" },
      { label: "Once a week", emoji: "🤔" },
      { label: "Occasionally", emoji: "😊" },
    ],
  },
  // 4 - Interstitial: Family image
  {
    type: "interstitial",
    imageKey: "family",
    title: "You're not alone in this.",
    subtitle: "Thousands of families use I'm Alive to stay connected with their loved ones every day.",
  },
  // 5 - Quiz: Live alone
  {
    type: "quiz",
    category: "Their situation",
    question: "Do they live alone?",
    subtitle: "This helps us set the right alert frequency.",
    options: [
      { label: "Yes, completely alone", emoji: "🏠" },
      { label: "With a partner", emoji: "👫" },
      { label: "With a caregiver", emoji: "🏥" },
      { label: "With other family", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
  // 6 - Quiz: Age
  {
    type: "quiz",
    category: "Their situation",
    question: "How old is your loved one?",
    subtitle: "We adapt alerts based on age group.",
    options: [
      { label: "Under 65", emoji: "🙂" },
      { label: "65–74", emoji: "👵" },
      { label: "75–84", emoji: "🧓" },
      { label: "85 or older", emoji: "💛" },
    ],
  },
  // 7 - Quiz: Tech savvy
  {
    type: "quiz",
    category: "Technology",
    question: "How tech-savvy are they?",
    subtitle: "We'll make it easy for them regardless.",
    options: [
      { label: "Very comfortable", emoji: "📱" },
      { label: "Can do the basics", emoji: "👍" },
      { label: "Needs help sometimes", emoji: "🤷" },
      { label: "Not at all", emoji: "😅" },
    ],
  },
  // 8 - Quiz: Phone type
  {
    type: "quiz",
    category: "Technology",
    question: "What type of phone do they use?",
    subtitle: "I'm Alive works on both platforms.",
    options: [
      { label: "iPhone", emoji: "🍎" },
      { label: "Android", emoji: "🤖" },
      { label: "I'm not sure", emoji: "❓" },
      { label: "A basic phone", emoji: "📞" },
    ],
  },
  // 9 - Interstitial: Phone image
  {
    type: "interstitial",
    imageKey: "phone",
    title: "So simple, anyone can use it.",
    subtitle: "Your loved one just taps one button. That's it — you get a photo and peace of mind.",
  },
  // 10 - Quiz: Health
  {
    type: "quiz",
    category: "Health",
    question: "Have they had any health concerns recently?",
    subtitle: "This helps us prioritise urgency.",
    options: [
      { label: "Yes, serious concerns", emoji: "🏥" },
      { label: "Minor issues", emoji: "🩹" },
      { label: "Generally healthy", emoji: "💪" },
      { label: "Prefer not to say", emoji: "🔒" },
    ],
  },
  // 11 - Quiz: Current method
  {
    type: "quiz",
    category: "Your routine",
    question: "How do you currently check on them?",
    subtitle: "We'll improve your existing routine.",
    options: [
      { label: "Phone calls", emoji: "📞" },
      { label: "Text messages", emoji: "💬" },
      { label: "Video calls", emoji: "📹" },
      { label: "I rarely do", emoji: "😔" },
    ],
  },
  // 12 - Quiz: Time of day
  {
    type: "quiz",
    category: "Alerts",
    question: "What time of day concerns you most?",
    subtitle: "We can schedule alerts when it matters.",
    options: [
      { label: "Early morning", emoji: "🌅" },
      { label: "During the day", emoji: "☀️" },
      { label: "Evening/night", emoji: "🌙" },
      { label: "All the time", emoji: "⏰" },
    ],
  },
  // 13 - Quiz: Missed call panic
  {
    type: "quiz",
    category: "Your feelings",
    question: "Have you ever missed a call and panicked?",
    subtitle: "You're not alone in this.",
    options: [
      { label: "Yes, many times", emoji: "😱" },
      { label: "A few times", emoji: "😥" },
      { label: "Once or twice", emoji: "😬" },
      { label: "Not yet, but I worry", emoji: "🤞" },
    ],
  },
  // 14 - Quiz: Photo reassurance
  {
    type: "quiz",
    category: "Preferences",
    question: "Would a daily photo reassure you?",
    subtitle: "Seeing them safe can change everything.",
    options: [
      { label: "Absolutely", emoji: "📸" },
      { label: "Yes, that'd help", emoji: "😊" },
      { label: "Maybe", emoji: "🤔" },
      { label: "I'd prefer a message", emoji: "💬" },
    ],
  },
  // 15 - Quiz: Notification speed
  {
    type: "quiz",
    category: "Alerts",
    question: "How quickly do you want to be notified?",
    subtitle: "If they don't check in on time.",
    options: [
      { label: "Immediately", emoji: "🚨" },
      { label: "Within 30 minutes", emoji: "⏱️" },
      { label: "Within an hour", emoji: "🕐" },
      { label: "Just once a day", emoji: "📋" },
    ],
  },
  // 16 - Interstitial: Community
  {
    type: "interstitial",
    imageKey: "community",
    title: "Join 12,000+ caring families",
    subtitle: "People just like you are already using I'm Alive to stay connected with the ones who matter most.",
  },
  // 17 - Quiz: Family members
  {
    type: "quiz",
    category: "Family",
    question: "Do other family members share your concern?",
    subtitle: "We support multiple watchers.",
    options: [
      { label: "Yes, several of us", emoji: "👨‍👩‍👧‍👦" },
      { label: "One or two others", emoji: "👥" },
      { label: "Just me", emoji: "🙋" },
      { label: "They don't know I worry", emoji: "🤫" },
    ],
  },
  // 18 - Quiz: Independence
  {
    type: "quiz",
    category: "Values",
    question: "How important is their independence?",
    subtitle: "I'm Alive respects their autonomy.",
    options: [
      { label: "Very — they'd hate to feel watched", emoji: "🦅" },
      { label: "Important — but safety first", emoji: "⚖️" },
      { label: "They're open to help", emoji: "🤝" },
      { label: "They need close monitoring", emoji: "👀" },
    ],
  },
  // 19 - Quiz: Peace of mind
  {
    type: "quiz",
    category: "Your goal",
    question: "What would peace of mind mean to you?",
    subtitle: "Imagine knowing they're safe every day.",
    options: [
      { label: "Less anxiety", emoji: "🧘" },
      { label: "Better sleep", emoji: "😴" },
      { label: "More focus at work", emoji: "💼" },
      { label: "All of the above", emoji: "✨" },
    ],
  },
  // 20 - Quiz: Urgency
  {
    type: "quiz",
    category: "Getting started",
    question: "How soon would you like to start?",
    subtitle: "Setup takes less than 2 minutes.",
    options: [
      { label: "Right now", emoji: "⚡" },
      { label: "Today", emoji: "📅" },
      { label: "This week", emoji: "🗓️" },
      { label: "I'm just exploring", emoji: "👀" },
    ],
  },
];

export const TOTAL_STEPS = steps.length;
export const PROGRESS_SEGMENTS = 5;
