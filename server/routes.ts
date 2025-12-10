import type { Express } from "express";
import { createServer, type Server } from "http";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { projectsDataSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/projects", (req, res) => {
    try {
      const dataPath = join(process.cwd(), "data", "projects.json");
      
      if (!existsSync(dataPath)) {
        return res.status(404).json({ error: "Projects data file not found" });
      }
      
      const rawData = readFileSync(dataPath, "utf-8");
      const data = JSON.parse(rawData);
      
      const validated = projectsDataSchema.safeParse(data);
      if (!validated.success) {
        console.error("Data validation error:", validated.error);
        return res.status(500).json({ error: "Invalid data format in projects.json" });
      }
      
      res.json(validated.data);
    } catch (error) {
      console.error("Error reading projects data:", error);
      res.status(500).json({ error: "Failed to load projects data" });
    }
  });

  return httpServer;
}
