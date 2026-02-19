export interface Project {
  _id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  techStack: string[];
  metrics?: {
    accuracy?: number;
    impact?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
}
