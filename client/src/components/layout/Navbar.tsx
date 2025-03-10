import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// Custom Diamond SVG icon component
const DiamondIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L3 9L12 16L21 9L12 2Z"
      fill="currentColor"
      fillOpacity="0.2"
      className="diamond-fill"
    />
    <path
      d="M12 2L3 9L12 16L21 9L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="diamond-stroke"
    />
    <path
      d="M3 9L12 21L21 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="diamond-stroke"
    />
  </svg>
);

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "INVITE", path: "/invite" },
    { 
      name: "PREMIUM", 
      path: "/premium",
      icon: DiamondIcon,
      shine: true 
    },
    { name: "COMMANDS", path: "/commands" },
    { name: "SUPPORT", path: "/support" }
  ];

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <>
      {navItems.map((item, index) => (
        <motion.div key={item.name}>
          <Link href={item.path}>
            <motion.a
              className={`text-sm font-black relative group cursor-pointer
                ${location === item.path 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"}
                ${mobile ? "block py-3" : ""}
                ${item.shine ? "shine-effect" : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              onClick={() => mobile && onClose()}
            >
              <div className="flex items-center gap-2">
                {item.icon && (
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <item.icon className="w-4 h-4 text-red-500" />
                  </motion.div>
                )}
                {item.name}
              </div>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 
                group-hover:scale-x-100 transition-transform duration-300
                ${location === item.path ? "scale-x-100" : ""}`}></span>
            </motion.a>
          </Link>
        </motion.div>
      ))}
    </>
  );

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="fixed top-0 w-full z-50 bg-[#0A0A0B] border-b border-border/40 backdrop-blur-sm"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="absolute left-4 md:left-8">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg 
              className="h-8 w-8 text-primary"
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
            <span className="font-bold text-xl text-white tracking-widest">MIWI</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-12">
          <NavLinks />
        </div>

        {/* Login Button and Mobile Menu - Right Aligned */}
        <div className="absolute right-4 md:right-8 flex items-center gap-4">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <Button 
              size="sm" 
              className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-bold"
            >
              LOGIN
            </Button>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg border-border/40">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <NavLinks mobile onClose={() => setIsOpen(false)} />
                  <Button 
                    className="w-full bg-primary text-white hover:bg-primary/90 mt-4 font-bold"
                  >
                    LOGIN
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}