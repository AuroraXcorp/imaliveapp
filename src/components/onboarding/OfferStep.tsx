import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Star, Heart, Users, Clock, CheckCircle, Phone, Bell } from "lucide-react";
import offerHero from "@/assets/offer-hero.jpg";
import offerFamily from "@/assets/offer-family.jpg";
import guaranteeBadge from "@/assets/guarantee-badge.png";

interface OfferStepProps {
  onNext: () => void;
}

const testimonials = [
  {
    name: "Sarah_CareUK",
    date: "08.02.26",
    text: "I was constantly anxious about my mum living alone in Leeds. Since using I'm Alive, I get her photo every morning. It's changed my life completely.",
    stars: 5,
    avatar: "👩",
  },
  {
    name: "Marco_Lisboa",
    date: "01.02.26",
    text: "My grandmother is 89 and lives alone. This app is so simple she figured it out herself. I get peace of mind every single day. Worth every cent.",
    stars: 5,
    avatar: "👨",
  },
  {
    name: "JennyFromOZ",
    date: "28.01.26",
    text: "As someone living abroad with elderly parents back home, this is a lifesaver. The daily photo confirmation is genius. Highly recommend!",
    stars: 5,
    avatar: "👩‍🦰",
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

      {/* Hero image section */}
      <div className="relative">
        <div className="relative h-72 overflow-hidden">
          <img
            src={offerHero}
            alt="Elderly person using smartphone"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <h1 className="text-3xl font-bold font-display mb-2">
            Your <span className="text-gradient">I'm Alive</span> Plan is ready!
          </h1>
          <p className="text-muted-foreground text-sm">
            Personalised for you based on your answers
          </p>
        </div>
      </div>

      <div className="px-4 py-6 flex flex-col gap-10">
        {/* Now → With I'm Alive comparison */}
        <div className="rounded-2xl overflow-hidden border border-border">
          <div className="grid grid-cols-2">
            <div className="p-4 bg-card border-r border-border text-center">
              <p className="text-xs text-muted-foreground mb-1">Now</p>
              <p className="text-2xl mb-1">😟</p>
              <p className="text-sm font-bold text-foreground">Worry & anxiety</p>
              <p className="text-[11px] text-muted-foreground mt-1">Not knowing if they're okay</p>
            </div>
            <div className="p-4 bg-primary/10 text-center">
              <p className="text-xs text-primary mb-1">With I'm Alive</p>
              <p className="text-2xl mb-1">😊</p>
              <p className="text-sm font-bold text-primary">Peace of mind</p>
              <p className="text-[11px] text-muted-foreground mt-1">Daily confirmation they're safe</p>
            </div>
          </div>
        </div>

        {/* How it works visual */}
        <div>
          <h2 className="text-xl font-bold font-display mb-5 text-center">How it works</h2>
          <div className="flex flex-col gap-4">
            {[
              { icon: Bell, step: "1", title: "Morning alarm rings", desc: "Your loved one gets a gentle daily alarm" },
              { icon: Phone, step: "2", title: "They take a selfie", desc: "One tap to confirm they're okay" },
              { icon: Heart, step: "3", title: "You receive the photo", desc: "Instant peace of mind, every day" },
              { icon: Shield, step: "4", title: "No response? We alert you", desc: "Emergency contacts notified automatically" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0 relative">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key benefits */}
        <div>
          <h2 className="text-xl font-bold font-display mb-5 text-center">What you'll get</h2>
          <div className="flex flex-col gap-3">
            {[
              { icon: Clock, text: "Daily smart alarm for your loved one" },
              { icon: CheckCircle, text: "Instant photo confirmation sent to you" },
              { icon: Users, text: "Share access with family members" },
              { icon: Shield, text: "Emergency contact alerts if no response" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA mid-page */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 btn-glow animate-pulse-glow"
        >
          See my plan
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Testimonials */}
        <div>
          <h2 className="text-xl font-bold font-display mb-5 text-center">Trusted by people like you</h2>
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-base">
                      {t.avatar}
                    </div>
                    <span className="text-sm font-bold text-foreground">{t.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{t.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Family image section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={offerFamily}
            alt="Happy family together"
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-5">
            <p className="text-sm font-display font-bold text-foreground">
              Join thousands of families who sleep better at night
            </p>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="text-center p-6 rounded-2xl bg-card border border-border">
          <img
            src={guaranteeBadge}
            alt="100% Money Back Guarantee"
            className="w-28 h-28 mx-auto mb-4 object-contain"
          />
          <h3 className="text-xl font-bold font-display mb-2">100% Money-Back Guarantee</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We believe I'm Alive will transform your peace of mind. If you're not completely satisfied within 30 days,
            we'll refund you in full — no questions asked.
          </p>
        </div>

        {/* Final CTA */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 btn-glow animate-pulse-glow"
        >
          See my plan
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        <p className="text-[10px] text-muted-foreground text-center pb-4">
          Cancel anytime. No commitment required.
        </p>
      </div>
    </motion.div>
  );
};

export default OfferStep;
