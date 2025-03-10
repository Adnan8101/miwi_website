import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPreference = mediaQuery.matches ? 'dark' : 'light';

    // Check if theme is already set
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : systemPreference);

    // Add listener for system preference changes
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative w-9 h-9"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-primary" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-primary" />
      </motion.div>
    </Button>
  );
}