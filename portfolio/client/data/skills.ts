export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'AI/ML' | 'Frontend' | 'Backend' | 'Tools';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'Python', level: 96, category: 'Languages' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 92, category: 'Languages' },
  { name: 'SQL & Vector DBs', level: 88, category: 'Languages' },
  
  { name: 'Physics-Informed NNs (PINNs)', level: 85, category: 'AI/ML' },
  { name: 'Agentic Workflows & LangChain', level: 94, category: 'AI/ML' },
  { name: 'Long-Term Memory AI (Hierarchical)', level: 92, category: 'AI/ML' },
  { name: 'PyTorch / Deep Learning', level: 88, category: 'AI/ML' },
  { name: 'Scikit-learn & Applied Statistics', level: 90, category: 'AI/ML' },
  
  { name: 'Next.js & React 19', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Framer Motion', level: 90, category: 'Frontend' },
  { name: 'Responsive UI/UX Ergonomics', level: 92, category: 'Frontend' },
  
  { name: 'FastAPI & REST APIs', level: 90, category: 'Backend' },
  { name: 'Node.js & Express', level: 88, category: 'Backend' },
  { name: 'Supabase & PostgreSQL', level: 92, category: 'Backend' },
  { name: 'Redis (Caching & Rate Limiting)', level: 80, category: 'Backend' },
  
  { name: 'Vercel / Production Deployment', level: 95, category: 'Tools' },
  { name: 'Git & GitHub Architecture', level: 95, category: 'Tools' },
  { name: 'B2B SaaS Financial Modeling', level: 85, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' }
];
