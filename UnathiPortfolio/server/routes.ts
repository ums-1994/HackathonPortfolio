import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const GITHUB_API = "https://api.github.com";
const GITHUB_USERNAME = "ums-1994";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/github/repos", async (_req, res) => {
    try {
      const response = await fetch(
        `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated`
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }

      const repos = await response.json();
      res.json(repos);
    } catch (error) {
      res.status(500).json({ 
        error: "Failed to fetch GitHub repositories",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
