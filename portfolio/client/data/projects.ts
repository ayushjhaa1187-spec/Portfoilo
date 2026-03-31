export interface Project {
  slug: string;
  title: string;
  category: 'AI Agents' | 'Full-Stack' | 'Hackathon' | 'Tools' | 'Data Science' | 'ML/AI' | 'Business';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  metrics: {
    accuracy?: string;
    impact?: string;
    users?: string;
    speed?: string;
  };
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  learning?: string;
}

export const projects: Project[] = [
  {
    slug: 'stocksense-agent',
    title: 'StockSense Agent',
    category: 'AI Agents',
    shortDescription: 'Autonomous AI agent for real-time stock market analysis and predictive reasoning.',
    fullDescription: 'Autonomous AI agent that aggregates real-time market data, performs sentiment analysis, and uses predictive modeling to identify actionable stock market trends.',
    techStack: ['Python', 'LLMs', 'LangGraph', 'Market APIs', 'AsyncIO', 'Pandas'],
    metrics: { impact: 'Real-time Analysis', speed: '50ms latency' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    liveUrl: 'https://stocksense-agent.railway.app',
    featured: true,
    image: '/projects/stocksense.png',
    problem: 'Traditional stock analysis is slow and lacks reasoning capabilities for volatile markets.',
    solution: 'Built an agentic workflow that reasons through market fluctuations using LLMs and real-time data feeds.',
    architecture: ['Data Inestion layer', 'Reasoning Engine (LangGraph)', 'Action execution layer'],
    challenges: ['Handling high-frequency data streams', 'LLM hallucination reduction'],
    learning: 'Mastered agentic design patterns and async data processing.'
  },
  {
    slug: 'llm-pexperiment',
    title: 'LLM_PEXPERIMENT',
    category: 'AI Agents',
    shortDescription: 'Advanced prompt engineering and LLM evaluation framework.',
    fullDescription: 'A modular framework for benchmarking LLM responses across different prompt strategies and model parameters.',
    techStack: ['Python', 'OpenAI API', 'Hugging Face', 'Streamlit', 'Weights & Biases'],
    metrics: { accuracy: '96% benchmarks', impact: 'Optimized prompts for 12+ models' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/LLM_PEXPERIMENT',
    featured: true,
    image: '/projects/llm-experiment.png'
  },
  {
    slug: 'insight-weaver',
    title: 'Insight Weaver',
    category: 'Tools',
    shortDescription: 'Multi-modal data processing and visualization tool for complex datasets.',
    fullDescription: 'Aggregates structured and unstructured data to provide visual insights using NLP and graph networks.',
    techStack: ['Python', 'NLTK', 'NetworkX', 'Plotly', 'React'],
    metrics: { impact: 'Automated insight generation', speed: '3x faster than manual' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/insight-weaver',
    featured: true,
    image: '/projects/weaver.png'
  },
  {
    slug: 'satellite-data-analysis',
    title: 'Satellite Analysis System',
    category: 'ML/AI',
    shortDescription: 'Computer vision models to classify satellite imagery for environmental monitoring.',
    fullDescription: 'Developed a comprehensive system using computer vision to analyze satellite imagery. The system detects environmental changes, deforestation patterns, and urban expansion.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Satellite APIs', 'PostgreSQL', 'NumPy'],
    metrics: { accuracy: '92%', impact: 'Automated monitoring at scale' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/satellite-data-analysis',
    liveUrl: 'https://satellite-mon.vercel.app',
    featured: true,
    image: '/projects/satellite.png'
  },
  {
    slug: 'enron-insights',
    title: 'Enron Insights',
    category: 'Data Science',
    shortDescription: 'Network analysis and fraud detection on the Enron email dataset.',
    fullDescription: 'Uses graph theory and statistical modeling to identify anomalies and key players in the famous Enron Corpus.',
    techStack: ['Python', 'Pandas', 'NetworkX', 'Matplotlib', 'Scikit-learn'],
    metrics: { impact: 'Identified 5 unexpected hubs', accuracy: '88% flagging' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
    featured: false
  },
  {
    slug: 'risk-radar',
    title: 'Risk Radar',
    category: 'ML/AI',
    shortDescription: 'Predictive risk assessment tool for financial and operational bottlenecks.',
    fullDescription: 'Real-time dashboard for identifying operational risks using historical patterns and live triggers.',
    techStack: ['Python', 'FastAPI', 'Pandas', 'Statsmodels', 'Vue.js'],
    metrics: { impact: '20% reduction in downtime', accuracy: '91%' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Risk-Radar',
    featured: true
  },
  {
    slug: 'frontend-odyssey',
    title: 'Frontend Odyssey',
    category: 'Full-Stack',
    shortDescription: 'Interactive learning platform for mastering modern web technologies.',
    fullDescription: 'A gamified experience for developers to learn React, Next.js, and CSS animations through challenges.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'TypeScript'],
    metrics: { users: '500+ registered', impact: 'High user retention' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Frontend-Odyssey',
    liveUrl: 'https://odyssey.dev',
    featured: true
  },
  {
    slug: 'hostel-issue-tracker',
    title: 'Hostel Issue Tracker',
    category: 'Hackathon',
    shortDescription: 'Real-time complaint management system for residential campuses.',
    fullDescription: 'Built during a 24h hackathon to streamline maintenance requests in university hostels.',
    techStack: ['React', 'Express', 'MongoDB', 'Socket.io', 'PWA'],
    metrics: { impact: 'Adopted in trial hoste', speed: 'Real-time pings' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracker',
    featured: true
  },
  {
    slug: 'e-commerce-prime',
    title: 'E-Commerce Prime',
    category: 'Full-Stack',
    shortDescription: 'High-performance e-commerce engine with real-time inventory and checkout.',
    fullDescription: 'Scalable shop architecture with Stripe integration, admin dashboard, and predictive search.',
    techStack: ['Next.js', 'Node.js', 'Redis', 'Stripe', 'PostgreSQL', 'Tailwind'],
    metrics: { speed: '100 lighthouse score', impact: '5s to checkout' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/e-commerce-platform',
    liveUrl: 'https://prime-shop.vercel.app',
    featured: false
  }
];
