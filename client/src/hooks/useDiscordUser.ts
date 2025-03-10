import { useQuery } from "@tanstack/react-query";

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

export function useDiscordUser(userId: string) {
  return useQuery({
    queryKey: ['discord-user', userId],
    queryFn: async (): Promise<DiscordUser> => {
      const response = await fetch(`/api/discord/user/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Discord user');
      }
      return response.json();
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}
