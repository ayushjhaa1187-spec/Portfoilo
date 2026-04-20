export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  techStack: string[];
  metrics?: { accuracy: string; impact: string };
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'enron-insights',
    title: 'Enron Forensic Intelligence',
    category: 'ML/AI',
    shortDescription: 'Scalable forensic analysis engine for the Enron corpus using RAG and LLMs.',
    fullDescription: 'Autonomous transformer-based pipeline designed to query and analyze 600,000+ internal emails. Features deep-link RAG retrieval and automated timeline generation.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'React', 'FastAPI'],
    metrics: { accuracy: 'High', impact: 'Sub-second analysis' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
    featured: true
  },
  {
    slug: 'stocksense-agent',
    title: 'RetailDemand AI',
    category: 'ML/AI',
    shortDescription: 'Autonomous AI Agent for Retail Demand Forecasting and Supply Chain Resilience.',
    fullDescription: 'Predictive supply chain engine that leverages historical demand patterns and market sentiment to optimize inventory for retail giants.',
    techStack: ['Python', 'TensorFlow', 'LLMs', 'Pandas', 'scikit-learn'],
    metrics: { accuracy: '94%', impact: 'Inventory Optimization' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    featured: true
  },
  {
    slug: 'meeting-insights-weaver',
    title: 'Legal Insights Weaver',
    category: 'ML/AI',
    shortDescription: 'AI-powered contract analysis, extraction, and compliance checking platform.',
    fullDescription: 'Legal-tech solution automating the extraction of key clauses and risk factors from complex legal documents using advanced NLP.',
    techStack: ['TypeScript', 'Vite', 'Supabase', 'OpenAI', 'Framer Motion'],
    metrics: { accuracy: '91%', impact: 'Legal Workflow' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/meeting-insights-weaver',
    featured: true
  },
  {
    slug: 'vibe-coding-platform',
    title: 'Vibe Coding Studio',
    category: 'Full-Stack Labs',
    shortDescription: 'Next.js 16 AI-native coding environment for rapid prototyping.',
    fullDescription: 'A playground for the "Vibe Coding" movement, integrating AI SDKs directly into a high-fidelity development experience.',
    techStack: ['Next.js 16', 'AI SDK', 'Tailwind 4', 'Lucide', 'Zustand'],
    metrics: { accuracy: 'N/A', impact: 'Developer Velocity' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/vibe-coding-platform',
    featured: true
  },
  {
    slug: 'ethicallancing',
    title: 'Claulancer Marketplace',
    category: 'Business',
    shortDescription: 'Professional freelance marketplace connecting verified talent with global enterprise clients.',
    fullDescription: 'Enterprise-grade freelance system with secure escrow, project milestones, and an identity-first talent network.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redux'],
    metrics: { accuracy: 'N/A', impact: 'Startup Launch' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/ethicallancing',
    featured: true
  },
  {
    slug: 'hostel-issue-tracker-2026',
    title: 'Campus Maintenance Hub',
    category: 'Full-Stack Labs',
    shortDescription: 'Premium glassmorphic Campus Service Desk for managing university facilities.',
    fullDescription: 'Multi-role administrative dashboard for streamlining student grievances and facility maintenance in elite hostels.',
    techStack: ['Vite', 'React', 'GSAP', 'Supabase', 'Glassmorphism'],
    metrics: { accuracy: 'High', impact: 'Hostel Operations' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026',
    featured: true
  },
  {
    slug: 'sign-up-enhancer',
    title: 'Sign-Up UX Accelerator',
    category: 'UX Labs',
    shortDescription: 'Micro-interaction library for high-conversion onboarding flows.',
    techStack: ['React', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/sign-up-enhancer',
    featured: false
  },
  {
    slug: 'voice-assistant',
    title: 'Deep Voice Assistant',
    category: 'ML/AI',
    shortDescription: 'Low-latency Python voice assistant with intent recognition.',
    techStack: ['Python', 'PyTorch', 'Gradio'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Voice-Assistant',
    featured: false
  },
  {
    slug: 'shadow-crm',
    title: 'Shadow CRM',
    category: 'Business',
    shortDescription: 'Lightweight performance-focused CRM for sales teams.',
    techStack: ['Prisma', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Shadow-CRM',
    featured: false
  }
];

export const caseStudies = [
  {
    slug: 'enron-insights-forensics',
    title: 'Decoding Corporate Scandals with AI: The Enron Case Study',
    projectSlug: 'enron-insights',
    challenge: 'Analyzing 600,000 internal emails for forensic patterns was impossible for manual audit teams.',
    solution: 'Built a vectorized RAG pipeline with sub-second retrieval and LLM-driven synthesis.',
    results: 'Automated 90% of the identification phase for priority legal keywords.',
    learnings: 'Vector dimension optimization is critical for long-context search.'
  }
];
