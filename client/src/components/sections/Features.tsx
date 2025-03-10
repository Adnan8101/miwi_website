import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Shield, MessageSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "High Quality Music",
    description: "Stream crystal clear music from multiple platforms with advanced audio controls.",
    icon: Music
  },
  {
    title: "Smart Moderation",
    description: "Keep your server safe with intelligent moderation tools and customizable filters.",
    icon: Shield
  },
  {
    title: "Interactive Commands",
    description: "Engage your community with fun commands and interactive features.",
    icon: MessageSquare
  },
  {
    title: "Lightning Fast",
    description: "Enjoy instant response times and reliable performance 24/7.",
    icon: Zap
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3
    }
  }
});

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 overflow-hidden">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create an engaging Discord community
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              className="w-full"
            >
              <Card className="h-full transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    viewport={{ once: true }}
                  >
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                  </motion.div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}