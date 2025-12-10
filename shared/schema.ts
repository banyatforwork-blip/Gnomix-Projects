import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  githubUrl: z.string().url(),
  tags: z.array(z.string()),
  featured: z.boolean().optional(),
});

export const projectsDataSchema = z.object({
  projects: z.array(projectSchema),
  siteInfo: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    githubProfile: z.string().url(),
    discordUrl: z.string().url().optional(),
  }),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectsData = z.infer<typeof projectsDataSchema>;

export const users = {} as any;
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };
