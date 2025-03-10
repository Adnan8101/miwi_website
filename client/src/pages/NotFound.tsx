import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <motion.div 
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#0A0A0B] relative pt-16 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background gradient effect */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto bg-[#111112]/95 backdrop-blur-lg rounded-lg border border-white/10 p-8 text-center"
        >
          {/* Enhanced heading background effect with smooth animation */}
          <motion.div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-[140%] aspect-square"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-[120px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.3, 0.5] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute inset-8 bg-primary/10 rounded-full blur-[100px]"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5 
              }}
            />
          </motion.div>

          <div className="relative mb-8">
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-3xl blur-2xl transform -rotate-1 scale-105 opacity-75"
              animate={{ 
                rotate: [-1, 1, -1],
                scale: [1.05, 1.1, 1.05] 
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Under Development
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              This page is currently under construction. Check back soon!
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link href="/">
              <Button 
                className="w-full sm:w-auto text-sm font-medium px-8 py-2 bg-primary hover:bg-primary/90 text-white rounded
                         transform hover:scale-105 active:scale-95 transition-all duration-200
                         hover:shadow-lg hover:shadow-primary/25"
              >
                Back to Home
              </Button>
            </Link>
            <Link href="/roadmap">
              <Button 
                variant="outline"
                className="w-full sm:w-auto text-sm font-medium px-8 py-2 border border-primary text-white hover:bg-primary/10 rounded
                         transform hover:scale-105 active:scale-95 transition-all duration-200
                         hover:shadow-lg hover:shadow-primary/25"
              >
                View Roadmap
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}