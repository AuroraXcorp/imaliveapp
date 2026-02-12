import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Star } from "lucide-react";

const plans = [
  {
    id: "weekly",
    name: "1-Week Trial",
    price: "4.99",
    originalPrice: null,
    perDay: "0.71",
    discount: null,
    badge: null,
    subtitle: "☕ Less than a cup of coffee",
    features: ["1 loved one", "Daily check-ins"],
  },
  {
    id: "monthly",
    name: "4-Week Plan",
    price: "9.99",
    originalPrice: "39.99",
    perDay: "0.33",
    discount: "75% OFF",
    badge: "MOST POPULAR",
    subtitle: "🍽️ The cost of two quick lunches",
    features: ["Up to 3 loved ones", "Daily check-ins", "Photo confirmations", "Priority alerts"],
  },
  {
    id: "quarterly",
    name: "12-Week Plan",
    price: "18.99",
    originalPrice: "89.99",
    perDay: "0.21",
    discount: "79% OFF",
    badge: null,
    subtitle: "🚗 Less than one family dinner delivery",
    features: ["Unlimited loved ones", "All features", "Family dashboard", "24/7 support"],
  },
];

const PricingStep = () => {
  const [selected, setSelected] = useState("monthly");
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
          className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold"
        >
          Get my plan
        </motion.button>
      </div>

      <div className="px-4 py-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold font-display mb-2">
            Your <span className="text-gradient">I'm Alive</span> Plan is ready!
          </h2>
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                <span className="text-xs">👤</span>
              </div>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            <strong className="text-foreground">12,847</strong> families trust us
          </span>
        </motion.div>

        {/* Plans */}
        <div className="flex flex-col gap-3 flex-1">
          {plans.map((plan, i) => {
            const isSelected = selected === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                {plan.badge && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold text-center py-1.5 rounded-t-xl uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
                <button
                  onClick={() => setSelected(plan.id)}
                  className={`w-full p-4 text-left transition-all border-2 ${
                    plan.badge ? "rounded-b-xl" : "rounded-xl"
                  } ${
                    isSelected
                      ? "border-primary bg-primary/10 card-elevated"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">{plan.name}</span>
                          {plan.discount && (
                            <span className="text-[10px] font-bold bg-primary/20 text-primary px-2 py-0.5 rounded">
                              {plan.discount}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          {plan.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              ${plan.originalPrice}
                            </span>
                          )}
                          <span className="text-sm text-muted-foreground">${plan.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-2xl font-bold text-foreground">${plan.perDay}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">/ day</span>
                    </div>
                  </div>

                  {/* Subtitle under the card */}
                  {plan.subtitle && (
                    <div className="text-center mt-2 pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">{plan.subtitle}</span>
                    </div>
                  )}

                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-3 pt-3 border-t border-border"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {plan.features.map((feat, j) => (
                          <div key={j} className="flex items-center gap-1.5">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span className="text-xs text-muted-foreground">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 mt-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 btn-glow animate-pulse-glow"
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* $39.99 disclaimer */}
        <p className="text-[10px] text-muted-foreground text-center mt-3 leading-relaxed px-2">
          By continuing, you agree that if you don't cancel at least 24 hours prior to the end of the intro offer, 
          you will automatically be charged the full price of <strong className="text-foreground">$39.99</strong> every month until you cancel 
          in <span className="underline">Settings</span>. Learn more about our cancellation and refund policy in{" "}
          <span className="underline">Subscription Terms</span>.
        </p>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-2 my-6"
        >
          <Shield className="w-4 h-4 text-success" />
          <span className="text-xs text-muted-foreground">30-day money-back guarantee</span>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-4 rounded-xl bg-card border border-border"
        >
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-xs text-muted-foreground italic leading-relaxed">
            "My mum lives alone in Porto and I'm in London. I'm Alive gives me peace of mind every morning. I see her photo and I know she's well. Worth every penny."
          </p>
          <p className="text-xs text-foreground font-medium mt-2">— Maria S., London</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PricingStep;
