import { Project } from '@/lib/schemas';

export const projects: Project[] = [
  {
    slug: 'enron-insights',
    title: 'Enron Forensic Intelligence',
    category: 'AI/ML',
    shortDescription: 'Scalable forensic analysis engine for the Enron corpus using RAG and LLMs.',
    fullDescription: 'Autonomous transformer-based pipeline designed to query and analyze 600,000+ internal emails. Features deep-link RAG retrieval and automated timeline generation.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'React', 'FastAPI'],
    metrics: { accuracy: 'High', impact: 'Sub-second analysis' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
    featured: true,
    hasCaseStudy: true
  },
  {
    slug: 'stocksense-agent',
    title: 'RetailDemand AI',
    category: 'AI/ML',
    shortDescription: 'Autonomous AI Agent for Retail Demand Forecasting and Supply Chain Resilience.',
    fullDescription: 'Predictive supply chain engine that leverages historical demand patterns and market sentiment to optimize inventory for retail giants.',
    techStack: ['Python', 'TensorFlow', 'LLMs', 'Pandas', 'scikit-learn'],
    metrics: { accuracy: '94%', impact: 'Inventory Optimization' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    featured: true,
    hasCaseStudy: false
  },
  {
    slug: 'meeting-insights-weaver',
    title: 'Legal Insights Weaver',
    category: 'AI/ML',
    shortDescription: 'AI-powered contract analysis, extraction, and compliance checking platform.',
    fullDescription: 'Legal-tech solution automating the extraction of key clauses and risk factors from complex legal documents using advanced NLP.',
    techStack: ['TypeScript', 'Vite', 'Supabase', 'OpenAI', 'Framer Motion'],
    metrics: { accuracy: '91%', impact: 'Legal Workflow' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/meeting-insights-weaver',
    featured: true,
    hasCaseStudy: false
  },
  {
    slug: 'vibe-coding-platform',
    title: 'Vibe Coding Studio',
    category: 'Web Dev',
    shortDescription: 'Next.js 16 AI-native coding environment for rapid prototyping.',
    fullDescription: 'A playground for the "Vibe Coding" movement, integrating AI SDKs directly into a high-fidelity development experience.',
    techStack: ['Next.js 16', 'AI SDK', 'Tailwind 4', 'Lucide', 'Zustand'],
    metrics: { accuracy: 'N/A', impact: 'Developer Velocity' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/vibe-coding-platform',
    featured: true,
    hasCaseStudy: false
  },
  {
    slug: 'ethicallancing',
    title: 'Claulancer Marketplace',
    category: 'Web Dev',
    shortDescription: 'Professional freelance marketplace connecting verified talent with global enterprise clients.',
    fullDescription: 'Enterprise-grade freelance system with secure escrow, project milestones, and an identity-first talent network.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redux'],
    metrics: { accuracy: 'N/A', impact: 'Startup Launch' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/ethicallancing',
    featured: true,
    hasCaseStudy: false
  },
  {
    slug: 'hostel-issue-tracker-2026',
    title: 'Campus Maintenance Hub',
    category: 'Web Dev',
    shortDescription: 'Premium glassmorphic Campus Service Desk for managing university facilities.',
    fullDescription: 'Multi-role administrative dashboard for streamlining student grievances and facility maintenance in elite hostels.',
    techStack: ['Vite', 'React', 'GSAP', 'Supabase', 'Glassmorphism'],
    metrics: { accuracy: 'High', impact: 'Hostel Operations' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026',
    featured: true,
    hasCaseStudy: false
  },
  {
    slug: 'sign-up-enhancer',
    title: 'Sign-Up UX Accelerator',
    category: 'Web Dev',
    shortDescription: 'Micro-interaction library for high-conversion onboarding flows.',
    techStack: ['React', 'Framer Motion', 'TypeScript'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/sign-up-enhancer',
    featured: false,
    hasCaseStudy: false
  },
  {
    slug: 'voice-assistant',
    title: 'Deep Voice Assistant',
    category: 'AI/ML',
    shortDescription: 'Low-latency Python voice assistant with intent recognition.',
    techStack: ['Python', 'PyTorch', 'Gradio'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Voice-Assistant',
    featured: false,
    hasCaseStudy: false
  },
  {
    slug: 'shadow-crm',
    title: 'Shadow CRM',
    category: 'Web Dev',
    shortDescription: 'Lightweight performance-focused CRM for sales teams.',
    techStack: ['Prisma', 'PostgreSQL', 'Express'],
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Shadow-CRM',
    featured: false,
    hasCaseStudy: false
  }
];
