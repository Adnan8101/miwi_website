import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "2.50",
    yearlyPrice: "25",
    yearlyOriginal: "30",
    subtitle: "Perfect for small communities",
    features: {
      included: [
        "1 Server",
        "Play music",
        "Better audio quality",
        "Custom prefix",
        "24/7 mode",
        "Premium Role",
        "Unlimited Tracks in queue",
        "Bypass need-vote commands",
        "Amazing filters",
        "Auto reconnect",
        "Default volume",
        "Custom avatar",
        "Custom name"
      ],
      excluded: []
    }
  },
  {
    name: "Standard",
    monthlyPrice: "4.00",
    yearlyPrice: "40",
    yearlyOriginal: "48",
    subtitle: "Great for growing communities",
    features: {
      included: [
        "3 Servers",
        "Play music",
        "Better audio quality",
        "Custom prefix",
        "24/7 mode",
        "Premium Role",
        "Unlimited Tracks in queue",
        "Bypass need-vote commands",
        "Amazing filters",
        "Auto reconnect",
        "Default volume",
        "Custom avatar",
        "Custom name"
      ],
      excluded: []
    }
  },
  {
    name: "Premium",
    monthlyPrice: "4.99",
    yearlyPrice: "50",
    yearlyOriginal: "60",
    subtitle: "Best for active communities",
    features: {
      included: [
        "5 Servers",
        "Play music",
        "Better audio quality",
        "Custom prefix",
        "24/7 mode",
        "Premium Role",
        "Unlimited Tracks in queue",
        "Bypass need-vote commands",
        "Amazing filters",
        "Auto reconnect",
        "Default volume",
        "Custom avatar",
        "Custom name"
      ],
      excluded: []
    }
  }
];

export default function Premium() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            PREMIUM
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            CHECK OUT OUR NEW PRICING PLANS!
          </motion.h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${!isYearly ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch 
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-lg ${isYearly ? 'text-primary' : 'text-muted-foreground'}`}>
              Yearly <span className="text-sm text-primary">(Save 15%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Gradient accent */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary rounded-full blur-3xl transform -translate-y-1/2" />
              </div>

              <div className="text-center mb-8 relative">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.subtitle}</p>
                <div className="text-4xl font-bold flex items-center justify-center gap-1">
                  <span className="text-2xl">$</span>
                  {isYearly ? (
                    <>
                      <span className="text-xl line-through text-muted-foreground mr-2">{plan.yearlyOriginal}</span>
                      <span>{plan.yearlyPrice}</span>
                    </>
                  ) : (
                    <span>{plan.monthlyPrice}</span>
                  )}
                  <span className="text-lg text-muted-foreground">/ {isYearly ? 'Year' : 'Month'}</span>
                </div>
                {isYearly && (
                  <motion.p 
                    className="text-primary text-sm mt-2 font-medium"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    First year special price!
                  </motion.p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.included.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
                {plan.features.excluded.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (plan.features.included.length + featureIndex) * 0.1 }}
                  >
                    <X className="h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                className="w-full bg-primary/10 hover:bg-primary/20 border-2 border-primary
                         transform hover:scale-105 active:scale-95 transition-all duration-300
                         relative overflow-hidden group"
                onClick={() => window.location.href = `https://discord.com/oauth2/authorize?client_id=1313599070366990438&permissions=37088600&scope=bot%20applications.commands`}
              >
                <span className="relative z-10">GET STARTED</span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}