import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Music, Shield, MessageCircle, Zap, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Crystal Clear Audio",
    description: "Experience high-quality music playback with support for multiple platforms"
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Built-in moderation tools to keep your server safe and organized"
  },
  {
    icon: MessageCircle,
    title: "Easy Commands",
    description: "Simple and intuitive commands for the best user experience"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for instant response times"
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "Regular updates based on community feedback and needs"
  },
  {
    icon: Star,
    title: "Premium Features",
    description: "Access to exclusive features and priority support"
  }
];

export default function Invite() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-1/3 h-1/3 bg-primary/10 rounded-full blur-2xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Thank You for Choosing Miwi
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            You're one click away from enhancing your Discord server with amazing music features!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-12 py-6 rounded-lg
                      transform hover:scale-105 active:scale-95 transition-all duration-300
                      text-lg md:text-xl"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1313599070366990438&permissions=37088600&scope=bot%20applications.commands', '_blank')}
            >
              Add to Discord
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--primary), 0.2)" }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
