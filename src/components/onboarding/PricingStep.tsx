import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Star } from "lucide-react";

const plans = [
  {
    id: "weekly",
    name: "1-Week Trial",
    price: "2.99",
    originalPrice: null,
    perDay: "0.43",
    discount: null,
    badge: null,
    features: ["1 loved one", "Daily check-ins"],
  },
  {
    id: "monthly",
    name: "Monthly Plan",
    price: "4.99",
    originalPrice: "14.99",
    perDay: "0.17",
    discount: "67% OFF",
    badge: "MOST POPULAR",
    features: ["Up to 3 loved ones", "Daily check-ins", "Photo confirmations", "Priority alerts"],
  },
  {
    id: "yearly",
    name: "Annual Plan",
    price: "29.99",
    originalPrice: "179.88",
    perDay: "0.08",
    discount: "83% OFF",
    badge: null,
    features: ["Unlimited loved ones", "All features", "Family dashboard", "24/7 support"],
  },
];

const PricingStep = () => {
  const [selected, setSelected] = useState("monthly");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen px-4 py-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold font-display mb-2">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          Start caring for your loved ones today
        </p>
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
                            {plan.originalPrice} EUR
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground">{plan.price} EUR</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-bold text-foreground">{plan.perDay}</span>
                      <span className="text-xs text-muted-foreground">EUR</span>
                    </div>
                    <span className="text-xs text-muted-foreground">per day</span>
                  </div>
                </div>

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

      {/* Guarantee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-2 my-4"
      >
        <Shield className="w-4 h-4 text-success" />
        <span className="text-xs text-muted-foreground">7-day money-back guarantee</span>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 btn-glow animate-pulse-glow"
      >
        Continue
        <ArrowRight className="w-5 h-5" />
      </motion.button>

      <p className="text-[10px] text-muted-foreground text-center mt-3 leading-relaxed px-4">
        By continuing, you agree that your subscription will be auto-renewed at the full price at the end of the intro period unless you cancel in Settings. Please see our{" "}
        <span className="underline">Subscription terms</span> and{" "}
        <span className="underline">Refund policy</span>.
      </p>

      {/* Testimonial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-6 p-4 rounded-xl bg-card border border-border"
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
    </motion.div>
  );
};

export default PricingStep;
