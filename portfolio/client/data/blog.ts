export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: 'AI' | 'Full-Stack' | 'DevOps' | 'Data Science';
  date: string;
  readTime: string;
  slug: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Agentic Workflows in FinTech',
    excerpt: 'Exploring how autonomous AI agents like StockSense will revolutionize predictive reasoning in volatile markets.',
    category: 'AI',
    date: 'March 2026',
    readTime: '6 min',
    slug: 'agentic-workflows-fintech'
  },
  {
    id: 2,
    title: 'Architecting Scalable AI-Driven E-Commerce',
    excerpt: 'Behind the scenes of E-Commerce Prime and the implementation of real-time inventory synchronization.',
    category: 'Full-Stack',
    date: 'Feb 2026',
    readTime: '8 min',
    slug: 'architecting-scalable-e-commerce'
  },
  {
    id: 3,
    title: 'Data Privacy in Inter-Campus Knowledge Networks',
    excerpt: 'Assessing decentralized reputation protocols for knowledge sharing in educational ecosystems (Nexus AI).',
    category: 'Data Science',
    date: 'Jan 2026',
    readTime: '5 min',
    slug: 'data-privacy-knowledge-networks'
  }
];
