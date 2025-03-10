import { motion } from "framer-motion";
import { Check, Clock, Code, Boxes, Braces, Bot, Rocket } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  icon: any;
}

const timeline: TimelineItem[] = [
  {
    date: "December 4, 2024",
    title: "Project Inception",
    description: "Miwi Bot project officially launched. Initial planning and architecture design phase began.",
    status: "completed",
    icon: Rocket
  },
  {
    date: "December 15, 2024",
    title: "Core Architecture",
    description: "Established foundational architecture and core systems design. Set up development environment and tools.",
    status: "completed",
    icon: Braces
  },
  {
    date: "January 10, 2025",
    title: "Basic Music Features",
    description: "Implemented basic music playback functionality including play, pause, skip, and queue management.",
    status: "completed",
    icon: Bot
  },
  {
    date: "March 5, 2025",
    title: "Advanced Features",
    description: "Added advanced features like playlists, filters, and multi-platform support.",
    status: "in-progress",
    icon: Boxes
  },
  {
    date: "March 5, 2025",
    title: "Website Development",
    description: "Building the official website with user dashboard, documentation, and premium features.",
    status: "in-progress",
    icon: Code
  },
  {
    date: "Upcoming",
    title: "Premium Integration",
    description: "Implementation of premium subscription system and exclusive features.",
    status: "upcoming",
    icon: Clock
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4 animate-pulse" />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Development Roadmap
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {index !== timeline.length - 1 && (
                <div className="absolute left-6 top-8 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className="flex items-start gap-6">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${item.status === 'completed' ? 'bg-primary/20' : 
                      item.status === 'in-progress' ? 'bg-yellow-500/20' : 'bg-gray-500/20'}`}
                >
                  <item.icon className={`w-6 h-6
                    ${item.status === 'completed' ? 'text-primary' :
                      item.status === 'in-progress' ? 'text-yellow-500' : 'text-gray-500'}`} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    {item.status === 'completed' && (
                      <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Check className="w-3 h-3" /> Completed
                      </span>
                    )}
                    {item.status === 'in-progress' && (
                      <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}