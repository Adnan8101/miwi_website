import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I add Miwi to my Discord server?",
    answer: "Simply click the 'Add to Discord' button at the top of the page. You'll be redirected to Discord's authorization page where you can select your server and grant the necessary permissions."
  },
  {
    question: "Is Miwi completely free to use?",
    answer: "Yes! Miwi's core features are completely free. We also offer a Premium version with additional features for enhanced functionality."
  },
  {
    question: "What music platforms does Miwi support?",
    answer: "Miwi supports YouTube, Spotify, SoundCloud, and Apple Music. You can seamlessly play music from any of these platforms."
  },
  {
    question: "What are the basic commands to control Miwi?",
    answer: "The basic commands include: /play to start playing music, /pause to pause, /resume to resume playback, /skip to skip tracks, and /queue to view the current queue."
  },
  {
    question: "Can I control who can use music commands?",
    answer: "Yes! You can set up DJ roles to control who can use specific commands. This can be configured through the /settings command."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-accent/5">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using Miwi in your Discord server
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
