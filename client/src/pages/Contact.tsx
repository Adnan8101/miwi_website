import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Copy, Mail, Github, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1348238593356992543/Lk57yf-mJfFugrTzUxjo9w2DJ-m3dX8P4avoVkOezUkpgOs_LuehYR26Hrrh5vJsJEr1";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const copyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Create Discord embed
      const embed = {
        title: "New Contact Form Submission",
        color: 0x7289DA, // Discord Blurple color
        fields: [
          {
            name: "Name",
            value: values.name,
            inline: true
          },
          {
            name: "Email",
            value: values.email,
            inline: true
          },
          {
            name: "Message",
            value: values.message
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Miwi Bot Contact Form"
        },
        thumbnail: {
          url: "https://cdn.discordapp.com/attachments/1348238563002679327/1348238593356992543/miwi_logo.png"
        },
        author: {
          name: "Miwi Bot Contact System",
          icon_url: "https://cdn.discordapp.com/attachments/1348238563002679327/1348238593356992543/miwi_icon.png"
        }
      };

      // Send to Discord webhook
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out! Our team will review your message and get back to you within 24-48 hours. You can also join our Discord server for faster support.",
        duration: 5000,
      });

      // Show additional toast with next steps
      setTimeout(() => {
        toast({
          title: "What's Next? 📝",
          description: "While you wait for our response, feel free to:\n• Join our Discord community for instant support\n• Check our FAQ section for quick answers\n• Explore our documentation for detailed information",
          duration: 8000,
        });
      }, 1000);

      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us through Discord.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 px-4">
      <motion.div 
        className="container mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Methods</h2>
            <p className="text-gray-400 mb-8">
              Have questions about Miwi Bot? We're here to help! Choose your preferred method of contact below.
            </p>

            <div className="space-y-8">
              {/* Discord Server */}
              <motion.div 
                className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Discord Server</h3>
                  <p className="text-gray-400">Join our community</p>
                </div>
                <Button 
                  className="ml-auto"
                  variant="outline"
                  onClick={() => window.open('https://discord.gg/miwi', '_blank')}
                >
                  Join Server
                </Button>
              </motion.div>

              {/* Email Support */}
              <motion.div 
                className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-400">support@miwibot.com</p>
                </div>
                <Button 
                  className="ml-auto"
                  variant="outline"
                  onClick={() => copyEmail('support@miwibot.com')}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </motion.div>

              {/* GitHub */}
              <motion.div 
                className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Github className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-gray-400">Report issues & contribute</p>
                </div>
                <Button 
                  className="ml-auto"
                  variant="outline"
                  onClick={() => window.open('https://github.com/miwibot', '_blank')}
                >
                  View Repo
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="your@email.com" 
                          className="bg-background/50 border-border/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help?" 
                          className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}