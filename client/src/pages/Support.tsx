import { motion } from "framer-motion";
import { MessageCircle, Users, Zap, Clock, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Get help anytime with our active support team and community members"
  },
  {
    icon: Users,
    title: "Helpful Community",
    description: "Join thousands of users helping each other succeed"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Most queries are answered within minutes"
  },
  {
    icon: Clock,
    title: "Regular Updates",
    description: "Stay informed about the latest features and improvements"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Moderated channels ensuring a friendly atmosphere"
  },
  {
    icon: Heart,
    title: "Premium Support",
    description: "Priority support for our premium users"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8
    }
  }
};

export default function Support() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Need Help?
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Join our vibrant Discord community for instant support, tips, and discussions!
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
              onClick={() => window.open('https://discord.gg/miwi', '_blank')}
            >
              Join Support Server
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
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
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground">
            Don't wait - our friendly community is ready to help you succeed!
          </p>
        </motion.div>
      </div>
    </div>
  );
}