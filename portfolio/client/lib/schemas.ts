import { z } from 'zod';

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  category: z.string(),
  shortDescription: z.string(),
  fullDescription: z.string().optional(),
  techStack: z.array(z.string()),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  metrics: z.record(z.string()).optional(),
});

export const AchievementSchema = z.object({
  title: z.string(),
  company: z.string(),
  desc: z.string(),
  icon: z.string(),
  color: z.enum(['blue', 'orange', 'green', 'slate']).default('blue'),
  link: z.string().url().optional(),
});

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  description: z.array(z.string()),
  technologies: z.array(z.string()),
  logo: z.string().optional(),
});

export const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  period: z.string(),
  focus: z.array(z.string()),
  coursework: z.array(z.string()).optional(),
  color: z.string().optional(),
});

export const CertificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string(),
  icon: z.string(),
  link: z.string().url().optional(),
});

export const SkillSchema = z.object({
  category: z.string(),
  items: z.array(z.object({
    name: z.string(),
    proficiency: z.number().min(0).max(100),
    icon: z.string().optional(),
  })),
});

export const AboutSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  philosophy: z.string(),
  vision: z.string(),
  timeline: z.array(z.object({
    year: z.string(),
    title: z.string(),
    desc: z.string(),
  })),
  currentFocus: z.array(z.string()),
});

export const ResearchSchema = z.object({
  title: z.string(),
  desc: z.string(),
  icon: z.string(),
  current: z.boolean().default(false),
  methodologies: z.array(z.string()).optional(),
});

export const ContactSchema = z.object({
  email: z.string().email(),
  calendlyLink: z.string().url().optional(),
  socials: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
    twitter: z.string().url().optional(),
  }),
});

export const StatsSchema = z.object({
  githubUsername: z.string(),
  fallbackStats: z.object({
    repos: z.number(),
    stars: z.number(),
    followers: z.number(),
  }),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Achievement = z.infer<typeof AchievementSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Research = z.infer<typeof ResearchSchema>;
export type About = z.infer<typeof AboutSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Stats = z.infer<typeof StatsSchema>;
