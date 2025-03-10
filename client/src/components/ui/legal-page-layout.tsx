import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 px-4 relative overflow-hidden">
      {/* Enhanced gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-2xl opacity-10 animate-pulse delay-1000" />
      </div>

      <motion.div 
        className="container mx-auto max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        <motion.div 
          className="prose prose-invert max-w-none bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border/50 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-6">
            {children}
          </div>
        </motion.div>

        <motion.div 
          className="mt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Last updated: March 2025
        </motion.div>
      </motion.div>
    </div>
  );
}