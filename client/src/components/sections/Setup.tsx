import { motion } from "framer-motion";
import { Shield, Settings, Check, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Bot,
    title: "Visit Discord's Website",
    description: "Go to discord.com and click on 'Add to Discord' button on our website",
    substeps: [
      "Click the 'Add to Discord' button above",
      "You'll be redirected to Discord's website",
      "Make sure you're logged into your Discord account"
    ]
  },
  {
    icon: Shield,
    title: "Choose Your Server",
    description: "Select the server where you want to add Miwi from the dropdown menu",
    substeps: [
      "Click the 'Select a server' dropdown",
      "Choose your desired server from the list",
      "Make sure you have 'Manage Server' permissions"
    ]
  },
  {
    icon: Settings,
    title: "Authorize Miwi",
    description: "Review and authorize the permissions needed for Miwi to function",
    substeps: [
      "Review the required permissions",
      "These are needed for music playback and controls",
      "Click 'Authorize' to proceed"
    ]
  },
  {
    icon: Check,
    title: "Start Using Miwi",
    description: "Complete the verification and start using Miwi in your server",
    substeps: [
      "Complete the CAPTCHA if prompted",
      "Wait for Miwi to join your server",
      "Type /help to see all available commands"
    ]
  }
];

export default function Setup() {
  return (
    <section id="setup" className="py-12 md:py-24 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/2" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              How to Add Miwi Bot
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Get Miwi up and running in your Discord server in just a few clicks
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-12 py-6 rounded-lg
                       transform hover:scale-105 active:scale-95 transition-all duration-300
                       text-lg md:text-xl"
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1313599070366990438&permissions=37088600&scope=bot%20applications.commands', '_blank')}
            >
              Invite Miwi to Discord
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/80 backdrop-blur-sm border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:bg-card">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <step.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2 justify-center md:justify-start">
                      <span className="text-primary">{index + 1}.</span> {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.substeps.map((substep, subIndex) => (
                        <motion.li
                          key={subIndex}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + subIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.span 
                            className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center"
                            whileHover={{ scale: 1.2, backgroundColor: "rgba(239, 68, 68, 0.2)" }}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </motion.span>
                          {substep}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 md:left-8 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2 md:translate-x-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}