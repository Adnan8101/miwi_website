import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useDiscordUser } from "@/hooks/useDiscordUser";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMember {
  id: string;
  role: string;
  description: string;
  email: string;
}

const team: TeamMember[] = [
  {
    id: "1154853364924940380",
    role: "Project Leader",
    description: "Visionary leader and strategic mastermind behind Miwi's success. Combining deep technical knowledge with exceptional leadership skills to guide our team towards innovation and excellence in the Discord bot ecosystem.",
    email: "potato@miwibot.com"
  },
  {
    id: "396090883365404687",
    role: "Head Bot Developer",
    description: "Brilliant architect of Miwi's core systems and features. With extensive experience in Discord bot development, Hunter's innovative approaches and technical excellence drive the continuous evolution of our platform.",
    email: "hunter@miwibot.com"
  },
  {
    id: "929297205796417597",
    role: "Web Developer & Assistant Bot Developer",
    description: "Creative force behind Miwi's web presence and auxiliary systems. Byte's dual expertise in web development and Discord bot engineering ensures a seamless, integrated experience across all our platforms.",
    email: "byte@miwibot.com"
  }
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const { data: discordUser, isLoading } = useDiscordUser(member.id);

  const getAvatarUrl = () => {
    if (!discordUser?.avatar) {
      return `https://cdn.discordapp.com/embed/avatars/${parseInt(member.id) % 5}.png`;
    }
    const format = discordUser.avatar.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${member.id}/${discordUser.avatar}.${format}?size=256`;
  };

  return (
    <motion.div
      className="relative bg-card/80 backdrop-blur-sm border rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div 
        className="relative w-32 h-32 mx-auto mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
        {isLoading ? (
          <Skeleton className="w-full h-full rounded-full" />
        ) : (
          <img
            src={getAvatarUrl()}
            alt={discordUser?.username || 'Team Member'}
            className="w-full h-full rounded-full object-cover relative z-10 border-2 border-primary/50"
            onError={(e) => {
              e.currentTarget.src = `https://cdn.discordapp.com/embed/avatars/${parseInt(member.id) % 5}.png`;
            }}
          />
        )}
      </motion.div>

      <div className="text-center">
        {isLoading ? (
          <Skeleton className="h-8 w-32 mx-auto mb-2" />
        ) : (
          <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            {discordUser?.username || 'Loading...'}
          </h2>
        )}
        <p className="text-primary font-medium mb-4">{member.role}</p>
        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
          {member.description}
        </p>
        <motion.a 
          href={`mailto:${member.email}`}
          className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Mail className="w-4 h-4" />
          <span>{member.email}</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] py-24 relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl opacity-20 transform -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/30 rounded-full blur-3xl opacity-20 transform translate-y-1/4" />
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
          Meet Our Team
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}