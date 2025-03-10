import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

async function fetchDiscordUser(userId: string) {
  try {
    const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching Discord user ${userId}:`, error);
    return null;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Discord user endpoint
  app.get('/api/discord/user/:id', async (req, res) => {
    const { id } = req.params;
    const userData = await fetchDiscordUser(id);

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: userData.id,
      username: userData.username,
      avatar: userData.avatar,
      discriminator: userData.discriminator
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}