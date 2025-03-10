import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Fuse from 'fuse.js';
import {
  Music2,
  Settings2,
  Command,
  Crown,
  List,
  Sliders,
  Search,
  ChevronRight,
  PlayCircle,
  ListMusic,
  X,
  Plus,
  Minus,
  PanelLeftClose,
  PanelLeftOpen
} from "lucide-react";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const commandCategories = [
  {
    name: "EVERYONE",
    subcategories: [
      {
        name: "Filters",
        icon: Sliders,
        description: "Audio filters to enhance your music experience",
        commands: [
          { name: "8d", description: "Apply 8D audio effect to the current track" },
          { name: "bassboost", description: "Enhance the bass frequencies" },
          { name: "damon", description: "Apply damon audio effect" },
          { name: "nightcore", description: "Apply nightcore effect" },
          { name: "speed <value>", description: "Adjust playback speed" },
          { name: "vaporwave", description: "Apply vaporwave effect" }
        ]
      },
      {
        name: "General",
        icon: Command,
        description: "Essential bot commands and information",
        commands: [
          { name: "checkvote", description: "Check your voting status" },
          { name: "help [command]", description: "Display help information" },
          { name: "links", description: "Show important bot links" },
          { name: "ping", description: "Check bot's latency" },
          { name: "serverinfo", description: "Display server information" },
          { name: "stats", description: "Show bot statistics" }
        ]
      }
    ]
  },
  {
    name: "ADMIN",
    subcategories: [
      {
        name: "Management",
        icon: Settings2,
        description: "Server and bot management commands",
        commands: [
          { name: "24/7", description: "Toggle 24/7 playback mode" },
          { name: "auto-shuffle", description: "Toggle automatic playlist shuffling" },
          { name: "auto-autoplay", description: "Toggle automatic song suggestions" },
          { name: "toggle-buttons", description: "Toggle player control buttons" },
          { name: "defaultvolume <value>", description: "Set default volume level" },
          { name: "forcefix", description: "Force fix any playback issues" },
          { name: "prefix", description: "Change command prefix" },
          { name: "requester", description: "Toggle song requester display" },
          { name: "settext", description: "Set music announcement channel" },
          { name: "settings", description: "View and modify bot settings" }
        ]
      }
    ]
  },
  {
    name: "PLAYLIST",
    subcategories: [
      {
        name: "Music",
        icon: Music2,
        description: "Core music playback commands",
        commands: [
          { name: "autoplay", description: "Toggle automatic playback" },
          { name: "clear", description: "Clear the current queue" },
          { name: "disconnect", description: "Disconnect from voice channel" },
          { name: "forward", description: "Fast forward the current track" },
          { name: "join", description: "Join your voice channel" },
          { name: "loop", description: "Toggle loop mode" },
          { name: "lyrics", description: "Show lyrics for current song" },
          { name: "move", description: "Move a track in the queue" },
          { name: "nowplaying", description: "Show current track info" },
          { name: "pause", description: "Pause current playback" },
          { name: "play <song>", description: "Play a song or playlist" },
          { name: "playskip", description: "Play and skip current track" },
          { name: "previous", description: "Play previous track" },
          { name: "queue", description: "View current queue" },
          { name: "remove", description: "Remove a track from queue" },
          { name: "removedupes", description: "Remove duplicate tracks" },
          { name: "replay", description: "Replay current track" },
          { name: "resume", description: "Resume paused playback" },
          { name: "rewind", description: "Rewind the current track" },
          { name: "search", description: "Search for a song" },
          { name: "seek", description: "Seek to position in track" },
          { name: "shuffle", description: "Shuffle the current queue" },
          { name: "skip", description: "Skip to next track" },
          { name: "stop", description: "Stop playback" },
          { name: "tts", description: "Text to speech message" },
          { name: "volume", description: "Adjust playback volume" }
        ]
      },
      {
        name: "Playlists",
        icon: ListMusic,
        description: "Playlist management commands",
        commands: [
          { name: "playlist-addcurrent", description: "Add current song to playlist" },
          { name: "playlist-addqueue", description: "Add queue to playlist" },
          { name: "playlist-create", description: "Create a new playlist" },
          { name: "playlist-delete", description: "Delete a playlist" },
          { name: "playlist-list", description: "View your playlists" },
          { name: "playlist-play", description: "Play a saved playlist" },
          { name: "playlist-remove", description: "Remove song from playlist" },
          { name: "playlist-view", description: "View playlist contents" }
        ]
      }
    ]
  },
  {
    name: "PREMIUM",
    subcategories: [
      {
        name: "Premium Features",
        icon: Crown,
        description: "Exclusive premium features",
        commands: [
          { name: "noprefix", description: "Toggle prefix requirement" },
          { name: "premium", description: "View premium status" },
          { name: "profile", description: "View premium profile" }
        ]
      }
    ]
  }
];

interface CommandType {
  name: string;
  description: string;
  category: string;
  subcategory: string;
}

export default function Commands() {
  const [selectedCategory, setSelectedCategory] = useState("EVERYONE");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("Filters");
  const [expandedCategories, setExpandedCategories] = useState(new Set(["EVERYONE"]));
  const [searchResults, setSearchResults] = useState<CommandType[]>([]);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const allCommands = useMemo(() => {
    return commandCategories.flatMap(category =>
      category.subcategories.flatMap(subcategory =>
        subcategory.commands.map(command => ({
          ...command,
          category: category.name,
          subcategory: subcategory.name
        }))
      )
    );
  }, []);

  const fuse = useMemo(() => new Fuse(allCommands, {
    keys: ['name', 'description'],
    threshold: 0.4,
    distance: 100,
    includeScore: true
  }), [allCommands]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery).map(result => result.item);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, fuse]);

  const currentCategory = commandCategories.find(cat => cat.name === selectedCategory);
  const currentSubcategory = currentCategory?.subcategories.find(sub => sub.name === selectedSubcategory);

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B]">
      <Navbar />
      <div className="flex-1 flex mt-16">
        <AnimatePresence initial={false}>
          {!isSidebarMinimized && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "16rem", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative bg-card/80 backdrop-blur-sm border-r border-border/50 flex flex-col overflow-hidden"
            >
              <div className="p-4 border-b border-border/50">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search commands..."
                    className="pl-9 pr-8 bg-background/50"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {commandCategories.map((category) => (
                  <div key={category.name} className="border-b border-border/10 last:border-0">
                    <button
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 transition-colors",
                        selectedCategory === category.name
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-primary/5 text-muted-foreground"
                      )}
                      onClick={() => {
                        setSelectedCategory(category.name);
                        toggleCategory(category.name);
                        if (category.subcategories.length > 0) {
                          setSelectedSubcategory(category.subcategories[0].name);
                        }
                      }}
                    >
                      <span>{category.name}</span>
                      {category.subcategories.length > 0 && (
                        <motion.div
                          initial={false}
                          animate={{ rotate: expandedCategories.has(category.name) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {expandedCategories.has(category.name) ? (
                            <Minus className="h-4 w-4" />
                          ) : (
                            <Plus className="h-4 w-4" />
                          )}
                        </motion.div>
                      )}
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedCategories.has(category.name) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-background/30 overflow-hidden"
                        >
                          {category.subcategories.map((subcategory) => (
                            <button
                              key={subcategory.name}
                              className={cn(
                                "w-full text-left pl-8 pr-4 py-2.5 transition-colors flex items-center gap-2",
                                selectedSubcategory === subcategory.name && selectedCategory === category.name
                                  ? "bg-primary/20 text-primary font-medium"
                                  : "hover:bg-primary/5 text-muted-foreground"
                              )}
                              onClick={() => {
                                setSelectedCategory(category.name);
                                setSelectedSubcategory(subcategory.name);
                              }}
                            >
                              <subcategory.icon className="h-4 w-4" />
                              <span>{subcategory.name}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 absolute left-[16rem] top-20 z-10 bg-background/50 backdrop-blur-sm border border-border/50 transform transition-all duration-300 hover:bg-primary/5 data-[minimized=true]:left-4"
          data-minimized={isSidebarMinimized}
          onClick={() => setIsSidebarMinimized(!isSidebarMinimized)}
        >
          {isSidebarMinimized ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>

        <motion.div
          className="flex-1 overflow-y-auto p-8"
          animate={{
            marginLeft: isSidebarMinimized ? "0" : "16rem",
          }}
          transition={{ duration: 0.3 }}
        >
          {searchQuery ? (
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between mb-6"
              >
                <h2 className="text-2xl font-bold">Search Results</h2>
                <span className="text-muted-foreground">
                  {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
                </span>
              </motion.div>

              {searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((command, index) => (
                    <motion.div
                      key={`${command.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <code className="px-2 py-1 rounded bg-primary/10 text-primary">
                            {command.name}
                          </code>
                          <span className="text-sm text-muted-foreground">
                            {command.category} › {command.subcategory}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{command.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <p className="text-muted-foreground">No commands found matching "{searchQuery}"</p>
                </motion.div>
              )}
            </div>
          ) : currentSubcategory ? (
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <currentSubcategory.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{currentSubcategory.name}</h2>
                    <p className="text-muted-foreground">{currentSubcategory.description}</p>
                  </div>
                </div>
              </motion.div>

              <div className="space-y-3">
                {currentSubcategory.commands.map((command, index) => (
                  <motion.div
                    key={command.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="min-w-[150px]">
                        <code className="px-2 py-1 rounded bg-primary/10 text-primary">
                          {command.name}
                        </code>
                      </div>
                      <p className="text-muted-foreground flex-1">{command.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}