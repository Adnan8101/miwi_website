import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import { Song, getRandomSong } from "@/lib/songData";

// Custom SVG Player Icons
const PlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M8 5.5v13l11-6.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PrevIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M19 5.5v13l-11-6.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="rotate(180 12 12)"
    />
    <line
      x1="5"
      y1="4"
      x2="5"
      y2="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const NextIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      d="M19 5.5v13l-11-6.5z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="19"
      y1="4"
      x2="19"
      y2="20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6
    }
  }
};

const buttonContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4
    }
  }
};

const playerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      delay: 0.4
    }
  }
};

const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = "https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96"; // Fallback image
};

export default function Hero() {
  const [currentSong] = useState<Song>(getRandomSong());
  const [progress] = useState({ current: "1:23", percent: 35 });

  return (
    <section className="min-h-[100dvh] flex items-center pt-24 md:pt-28 bg-[#0A0A0B] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 relative z-10">
        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-1 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center relative"
          >
            {/* Enhanced heading background effect - Mobile */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[120%] aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse opacity-50" />
              <div className="absolute inset-4 bg-primary/10 rounded-full blur-[80px] animate-pulse opacity-30 delay-300" />
            </div>

            <motion.div variants={textVariants} className="mb-6 relative">
              <h1 className="text-3xl font-bold tracking-tight select-none">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">MIWI MUSIC BOT</span>
                <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">FOR DISCORD</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={textVariants}
              className="text-sm text-gray-300 mb-8"
            >
              Experience crystal-clear music playback on your Discord server. Fast, reliable, and completely free to use with advanced features!
            </motion.p>

            <motion.div variants={playerVariants} className="mb-8">
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="player-card w-full p-3 rounded-xl backdrop-blur-xl bg-black/20 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentSong.title}
                          className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: 1,
                            scale: [1, 1.05, 1],
                            transition: {
                              scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }
                          }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <img
                            src={currentSong.image}
                            alt="Now Playing"
                            className="w-full h-full object-cover"
                            loading="eager"
                            onError={onImageError}
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div className="min-w-0">
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={currentSong.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-sm font-medium text-white truncate"
                          >
                            {currentSong.title}
                          </motion.p>
                          <motion.p
                            key={currentSong.artist}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-xs text-gray-400 truncate"
                          >
                            {currentSong.artist}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress.percent}%` }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                      <div className="flex justify-between text-primary text-xs">
                        <motion.span
                          key={progress.current}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {progress.current}
                        </motion.span>
                        <span>{currentSong.duration}</span>
                      </div>
                      <div className="flex justify-center gap-4 items-center">
                        <button className="text-white/80 hover:text-white transition-colors">
                          <PrevIcon />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-white transition-all">
                          <PlayIcon />
                        </button>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <NextIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={buttonContainerVariants}
              className="flex flex-col gap-3"
            >
              <motion.div variants={buttonVariants}>
                <Link href="/invite">
                  <Button
                    className="w-full text-sm font-medium px-6 py-1.5 bg-primary hover:bg-primary/90 text-white rounded
                             transform active:scale-95 transition-all duration-200
                             hover:shadow-lg hover:shadow-primary/25"
                  >
                    Invite Me
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Link href="/premium">
                  <Button
                    variant="outline"
                    className="w-full text-sm font-medium px-6 py-1.5 border border-primary text-white hover:bg-primary/10 rounded
                             transform active:scale-95 transition-all duration-200
                             hover:shadow-lg hover:shadow-primary/25"
                  >
                    Get Premium
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-2 gap-4 items-center">
          <motion.div
            className="text-left pr-4 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Enhanced heading background effect - Desktop */}
            <div className="absolute -top-20 -left-20 w-[140%] aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] animate-pulse opacity-50" />
              <div className="absolute inset-8 bg-primary/10 rounded-full blur-[100px] animate-pulse opacity-30 delay-300" />
              <div className="absolute inset-16 bg-primary/5 rounded-full blur-[80px] animate-pulse opacity-20 delay-500" />
            </div>

            <motion.div variants={textVariants} className="mb-4 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-3xl blur-2xl transform -rotate-1 scale-105 opacity-75" />
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight select-none relative">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">MIWI MUSIC BOT</span>
                <span className="inline-block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">FOR DISCORD</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={textVariants}
              className="text-lg text-gray-300 mb-6 max-w-lg"
            >
              Experience crystal-clear music playback on your Discord server. Fast, reliable, and completely free to use with advanced features!
            </motion.p>

            <motion.div 
              variants={buttonContainerVariants}
              className="flex gap-4"
            >
              <motion.div variants={buttonVariants}>
                <Link href="/invite">
                  <Button 
                    className="text-sm font-medium px-6 py-1.5 bg-primary hover:bg-primary/90 text-white rounded
                             transform active:scale-95 transition-all duration-200
                             hover:shadow-lg hover:shadow-primary/25"
                  >
                    Invite Me
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Link href="/premium">
                  <Button 
                    variant="outline" 
                    className="text-sm font-medium px-6 py-1.5 border border-primary text-white hover:bg-primary/10 rounded
                             transform active:scale-95 transition-all duration-200
                             hover:shadow-lg hover:shadow-primary/25"
                  >
                    Get Premium
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={playerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="player-card w-full max-w-[300px] p-6 rounded-xl backdrop-blur-xl bg-black/20 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSong.title}
                        className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: [1, 1.05, 1],
                          transition: {
                            scale: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                      >
                        <img
                          src={currentSong.image}
                          alt="Now Playing"
                          className="w-full h-full object-cover"
                          loading="eager"
                          onError={onImageError}
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="min-w-0">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentSong.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-base font-medium text-white truncate"
                        >
                          {currentSong.title}
                        </motion.p>
                        <motion.p
                          key={currentSong.artist}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-sm text-gray-400 truncate"
                        >
                          {currentSong.artist}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress.percent}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-between text-primary text-sm">
                      <motion.span
                        key={progress.current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {progress.current}
                      </motion.span>
                      <span>{currentSong.duration}</span>
                    </div>
                    <div className="flex justify-center gap-4 items-center">
                      <button className="text-white/80 hover:text-white transition-colors">
                        <PrevIcon />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-white transition-all">
                        <PlayIcon />
                      </button>
                      <button className="text-white/80 hover:text-white transition-colors">
                        <NextIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}