import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Heart, Users, Clock, CheckCircle } from "lucide-react";

interface OfferStepProps {
  onNext: () => void;
}

const testimonials = [
  {
    name: "Sarah_CareUK",
    date: "08.02.26",
    text: "I was constantly anxious about my mum living alone in Leeds. Since using I'm Alive, I get her photo every morning. It's changed my life completely.",
    stars: 5,
  },
  {
    name: "Marco_Lisboa",
    date: "01.02.26",
    text: "My grandmother is 89 and lives alone. This app is so simple she figured it out herself. I get peace of mind every single day. Worth every cent.",
    stars: 5,
  },
  {
    name: "JennyFromOZ",
    date: "28.01.26",
    text: "As someone living abroad with elderly parents back home, this is a lifesaver. The daily photo confirmation is genius. Highly recommend!",
    stars: 5,
  },
];

const OfferStep = ({ onNext }: OfferStepProps) => {
  const [minutes, setMinutes] = useState(9);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s === 0) {
          setMinutes((m) => (m === 0 ? 9 : m - 1));
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen"
    >
      {/* Sticky header with timer */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-primary font-display">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </span>
          <div className="flex gap-2 text-[10px] text-muted-foreground">
            <span>min</span>
            <span>sec</span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold"
        >
          See my plan
        </motion.button>
      </div>

      <div className="px-4 py-6">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold font-display mb-3">
            Your <span className="text-gradient">I'm Alive</span> Plan is ready!
          </h1>
          <p className="text-muted-foreground text-sm">
            Personalised for you based on your answers
          </p>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 mb-8 p-4 rounded-xl bg-card border border-border"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <div>
              <p className="text-[10px] text-muted-foreground">Goal</p>
              <p className="text-sm font-semibold">Peace of mind</p>
            </div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <div>
              <p className="text-[10px] text-muted-foreground">Protection</p>
              <p className="text-sm font-semibold">Daily check-in</p>
            </div>
          </div>
        </motion.div>

        {/* Key benefits */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-lg font-bold font-display mb-4 text-center">What you'll get</h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: Clock, text: "Daily smart alarm for your loved one" },
              { icon: CheckCircle, text: "Instant photo confirmation sent to you" },
              { icon: Users, text: "Share access with family members" },
              { icon: Shield, text: "Emergency contact alerts if no response" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-lg font-bold font-display mb-4 text-center">Trusted by people like you</h2>
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">{t.date}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs">👤</div>
                  <span className="text-sm font-bold">{t.name}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8 p-6 rounded-xl bg-card border border-border"
        >
          <div className="text-4xl mb-3">🏅</div>
          <h3 className="text-xl font-bold font-display mb-2">100% Money-Back Guarantee</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We believe I'm Alive will transform your peace of mind. If you're not completely satisfied within 30 days, 
            we'll refund you in full — no questions asked.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 btn-glow animate-pulse-glow"
        >
          See my plan
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OfferStep;
