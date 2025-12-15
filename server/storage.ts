import { type ProjectsData } from "@shared/schema";
import * as fs from "fs";
import * as path from "path";

export interface IStorage {
  getProjectsData(): Promise<ProjectsData>;
}

export class MemStorage implements IStorage {
  private projectsData: ProjectsData | null = null;

  constructor() {
    this.loadProjectsData();
  }

  private loadProjectsData(): void {
    try {
      const dataPath = path.join(process.cwd(), "data", "projects.json");
      const data = fs.readFileSync(dataPath, "utf-8");
      this.projectsData = JSON.parse(data);
    } catch (error) {
      console.error("Error loading projects data:", error);
      this.projectsData = {
        siteInfo: {
          title: "Gnomix",
          tagline: "Transform Ubuntu Into Pure GNOME",
          description: "A collection of open-source projects and tools for customizing your Linux experience.",
          githubProfile: "https://github.com/gnomixperson",
          discordUrl: "https://discord.gg/RHS3NptNpc"
        },
        projects: []
      };
    }
  }

  async getProjectsData(): Promise<ProjectsData> {
    if (!this.projectsData) {
      this.loadProjectsData();
    }
    return this.projectsData!;
  }
}

export const storage = new MemStorage();
