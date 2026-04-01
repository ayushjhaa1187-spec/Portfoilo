export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'AI/ML' | 'Frontend' | 'Backend' | 'Tools';
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'JavaScript', level: 90, category: 'Languages' },
  { name: 'TypeScript', level: 85, category: 'Languages' },
  { name: 'SQL/NoSQL', level: 80, category: 'Languages' },
  
  { name: 'PyTorch/TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'LangGraph/LangChain', level: 90, category: 'AI/ML' },
  { name: 'Generative AI (LLMs)', level: 95, category: 'AI/ML' },
  { name: 'Computer Vision', level: 80, category: 'AI/ML' },
  { name: 'Scikit-learn/Pandas', level: 92, category: 'AI/ML' },
  
  { name: 'Next.js', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Framer Motion', level: 85, category: 'Frontend' },
  
  { name: 'Node.js/Express', level: 88, category: 'Backend' },
  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'PostgreSQL/Supabase', level: 90, category: 'Backend' },
  { name: 'Redis', level: 75, category: 'Backend' },
  
  { name: 'Docker', level: 70, category: 'Tools' },
  { name: 'AWS/Vercel', level: 85, category: 'Tools' },
  { name: 'Git/GitHub', level: 95, category: 'Tools' },
  { name: 'RabbitMQ', level: 65, category: 'Tools' }
];
