import { SiSpotify, SiYoutube, SiSoundcloud, SiApplemusic } from "react-icons/si";
import { motion } from "framer-motion";

const platforms = [
  { icon: SiSpotify, name: "Spotify", color: "text-[#1DB954]" },
  { icon: SiYoutube, name: "YouTube", color: "text-[#FF0000]" },
  { icon: SiSoundcloud, name: "SoundCloud", color: "text-[#FF5500]" },
  { icon: SiApplemusic, name: "Apple Music", color: "text-[#FA243C]" }
];

export default function Platforms() {
  return (
    <section className="py-12 md:py-20 bg-accent/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stream music from all your favorite platforms in one place
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <platform.icon className={`h-16 w-16 ${platform.color}`} />
              <span className="mt-4 font-medium">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
