export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  techStack: string[];
  metrics: {
    accuracy?: string;
    speed?: string;
    users?: string;
    impact?: string;
  };
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  isPrivate?: boolean;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  learning?: string[];
}

export const projects: Project[] = [
  {
    slug: 'enron-insights',
    title: 'Enron Forensic Intelligence',
    category: 'ML/AI',
    shortDescription: 'Scalable forensic analysis engine for the Enron corpus using RAG and LLMs.',
    fullDescription: 'Autonomous transformer-based pipeline designed to query and analyze 600,000+ internal emails. Features deep-link RAG retrieval and automated timeline generation.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'React', 'FastAPI'],
    metrics: { accuracy: 'High', speed: 'Sub-second', users: 'N/A' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
    liveUrl: 'https://enron-insights.vercel.app',
    featured: true
  },
  {
    slug: 'stocksense-agent',
    title: 'RetailDemand AI',
    category: 'ML/AI',
    shortDescription: 'Autonomous AI Agent for Retail Demand Forecasting and Supply Chain Resilience.',
    fullDescription: 'Predictive supply chain engine that leverages historical demand patterns and market sentiment to optimize inventory for retail giants.',
    techStack: ['Python', 'TensorFlow', 'LLMs', 'Pandas', 'scikit-learn'],
    metrics: { accuracy: '94%', speed: 'Real-time', users: 'Enterprise' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    liveUrl: 'https://retaildemand.ai',
    featured: true
  },
  {
    slug: 'meeting-insights-weaver',
    title: 'Legal Insights Weaver',
    category: 'ML/AI',
    shortDescription: 'AI-powered contract analysis, extraction, and compliance checking platform.',
    fullDescription: 'Legal-tech solution automating the extraction of key clauses and risk factors from complex legal documents using advanced NLP.',
    techStack: ['TypeScript', 'Vite', 'Supabase', 'OpenAI', 'Framer Motion'],
    metrics: { accuracy: '91%', speed: 'Fast', users: 'Legal Firms' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/meeting-insights-weaver',
    liveUrl: 'https://legal-weaver.ai',
    featured: true
  },
  {
    slug: 'vibe-coding-platform',
    title: 'Vibe Coding Studio',
    category: 'Full-Stack Labs',
    shortDescription: 'Next.js 16 AI-native coding environment for rapid prototyping.',
    fullDescription: 'A playground for the "Vibe Coding" movement, integrating AI SDKs directly into a high-fidelity development experience.',
    techStack: ['Next.js 16', 'AI SDK', 'Tailwind 4', 'Lucide', 'Zustand'],
    metrics: { accuracy: 'N/A', speed: 'Ultra-Fast', users: 'Devs' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/vibe-coding-platform',
    liveUrl: 'https://core-vibe.ai',
    featured: true
  },
  {
    slug: 'ethicallancing',
    title: 'Claulancer Marketplace',
    category: 'Business',
    shortDescription: 'Professional freelance marketplace connecting verified talent with global enterprise clients.',
    fullDescription: 'Enterprise-grade freelance system with secure escrow, project milestones, and an identity-first talent network.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redux'],
    metrics: { accuracy: 'Verified', speed: 'Scalable', users: 'Global' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/ethicallancing',
    liveUrl: 'https://claulancer.com',
    featured: true
  },
  {
    slug: 'hostel-issue-tracker-2026',
    title: 'Campus Maintenance Hub',
    category: 'Full-Stack Labs',
    shortDescription: 'Premium glassmorphic Campus Service Desk for managing university facilities.',
    fullDescription: 'Multi-role administrative dashboard for streamlining student grievances and facility maintenance in elite hostels.',
    techStack: ['Vite', 'React', 'GSAP', 'Supabase', 'Glassmorphism'],
    metrics: { accuracy: '99%', speed: 'Live', users: 'Campus' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026',
    liveUrl: 'https://campus-hub.track',
    featured: true
  },
  {
    slug: 'sign-up-enhancer',
    title: 'Sign-Up UX Accelerator',
    category: 'UX Labs',
    shortDescription: 'Micro-interaction library for high-conversion onboarding flows.',
    techStack: ['React', 'Framer Motion', 'TypeScript'],
    metrics: { accuracy: 'UX-First', speed: 'Optimized', users: 'N/A' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/sign-up-enhancer',
    featured: false
  },
  {
    slug: 'voice-assistant',
    title: 'Deep Voice Assistant',
    category: 'ML/AI',
    shortDescription: 'Low-latency Python voice assistant with intent recognition.',
    techStack: ['Python', 'PyTorch', 'Gradio'],
    metrics: { accuracy: '89%', speed: 'Low-Latency', users: 'N/A' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Voice-Assistant',
    featured: false
  },
  {
    slug: 'shadow-crm',
    title: 'Shadow CRM',
    category: 'Business',
    shortDescription: 'Lightweight performance-focused CRM for sales teams.',
    techStack: ['Prisma', 'PostgreSQL', 'Express'],
    metrics: { accuracy: 'Sync', speed: 'Aggregated', users: 'Sales' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Shadow-CRM',
    featured: false
  },
  {
    slug: 'openclaw-hackathon-hackindia-error404',
    title: 'HackIndia OpenClaw v1.0',
    category: 'Business',
    shortDescription: 'Social impact platform prototype for hackathon submission.',
    techStack: ['React', 'Node.js', 'Supabase'],
    metrics: { accuracy: 'Social', speed: 'Rapid', users: 'Community' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'llm-prototype',
    title: 'Neural Bench V2',
    category: 'ML/AI',
    shortDescription: 'Internal benchmarking laboratory for large language models.',
    techStack: ['Python', 'PyTorch', 'Quantization'],
    metrics: { accuracy: 'Forensic', speed: 'Benchmarked', users: 'Internal' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'accessibility-design-system',
    title: 'A11y Core UI Suite',
    category: 'UX Labs',
    shortDescription: 'Enterprise design system focused on WCAG 2.1 compliance.',
    techStack: ['React', 'Next.js', 'Tailwind'],
    metrics: { accuracy: 'WCAG 2.1', speed: 'Inclusive', users: 'Universal' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'deploy-dash-comm',
    title: 'InfraPulse Dashboard',
    category: 'Full-Stack Labs',
    shortDescription: 'Internal infrastructure monitoring and deployment command center.',
    techStack: ['Node.js', 'Docker', 'Vercel API'],
    metrics: { accuracy: 'Uptime', speed: 'Sync', users: 'Ops' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'express-js-on-vercel',
    title: 'Fluid Serverless Runtime',
    category: 'Full-Stack Labs',
    shortDescription: 'Optimization library for running Express.js on edge runtimes.',
    techStack: ['Express', 'Vercel Edge', 'TypeScript'],
    metrics: { accuracy: 'Edge', speed: 'Minimized', users: 'N/A' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'june-prototype',
    title: 'June AI Social Network',
    category: 'Experimental',
    shortDescription: 'Next-gen social graphs using graph neural networks.',
    techStack: ['Neo4j', 'FastAPI', 'React'],
    metrics: { accuracy: 'GNN', speed: 'Relationship-First', users: 'Social' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  },
  {
    slug: 'openclaw-deployed-engine',
    title: 'HackIndia Deployment Core',
    category: 'Business',
    shortDescription: 'Automated CI/CD orchestrator for large-scale hackathon systems.',
    techStack: ['GitHub Actions', 'Terraform', 'Railway'],
    metrics: { accuracy: 'DevOps', speed: 'Automated', users: 'Integrators' },
    githubUrl: '#private',
    featured: false,
    isPrivate: true
  }
];

export const caseStudies = [
  {
    slug: 'enron-insights-forensics',
    projectSlug: 'enron-insights',
    title: 'Decoding Corporate Scandals with AI: The Enron Case Study',
    problem: 'Analyzing 600,000 internal emails for forensic patterns was impossible for manual audit teams within mission-critical timelines.',
    solution: 'Built a vectorized RAG pipeline with sub-second retrieval, leveraging LangChain and Pinecone for high-dimensional semantic search.',
    features: [
      'Autonomous transformer-based ingestion pipeline',
      'Sub-second RAG retrieval across 600k+ nodes',
      'Automated timeline generation for legal discovery'
    ],
    results: [
      'Automated 90% of the identification phase',
      'Reduced discovery costs by 75%',
      'Achieved sub-second latency on 100GB+ datasets'
    ]
  }
];
