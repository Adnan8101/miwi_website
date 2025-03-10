import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface ComingSoonProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export function ComingSoon({ 
  title, 
  description, 
  ctaText = "Join Our Discord",
  ctaLink = "https://discord.gg/miwi" 
}: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center relative overflow-hidden py-24">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4" />
      </div>

      <motion.div 
        className="container max-w-4xl mx-auto px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Clock className="w-20 h-20 text-primary mx-auto" />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        <motion.p 
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg
                    transform hover:scale-105 active:scale-95 transition-all duration-300
                    inline-flex items-center gap-2"
            onClick={() => window.open(ctaLink, '_blank')}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
