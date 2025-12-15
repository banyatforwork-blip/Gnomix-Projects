import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  githubUrl: z.string().url(),
  tags: z.array(z.string()),
  featured: z.boolean(),
});

export const siteInfoSchema = z.object({
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  githubProfile: z.string().url(),
  discordUrl: z.string().url(),
});

export const projectsDataSchema = z.object({
  siteInfo: siteInfoSchema,
  projects: z.array(projectSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type SiteInfo = z.infer<typeof siteInfoSchema>;
export type ProjectsData = z.infer<typeof projectsDataSchema>;
