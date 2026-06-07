// ============================================================
// PROJECTS DATA — Only real, verifiable projects.
// RULES:
// - githubUrl: must be a real public URL or set to null (isPrivate: true)
// - liveUrl: must be a real working deployment or omit entirely
// - metrics: only use verified, meaningful metrics
// - status: honest label for every project
// ============================================================

export type ProjectStatus =
  | "Live"
  | "Private Repo"
  | "In Development"
  | "Hackathon Build"
  | "Prototype"
  | "Research Experiment"
  | "Available on Request";

export interface Project {
  slug: string;
  title: string;
  category: "ML/AI" | "Full-Stack" | "UX Labs" | "Business" | "Experimental";
  shortDescription: string;
  fullDescription?: string;
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl: string | null;
  liveUrl?: string;
  featured: boolean;
  isPrivate?: boolean;
  status: ProjectStatus;
  problem?: string;
  solution?: string;
  architecture?: string[];
  challenges?: string[];
  learning?: string[];
  tags?: string[];
}

export const projects: Project[] = [
  // ── FEATURED PROJECTS ──────────────────────────────────────
  {
    slug: "enron-insights",
    title: "Enron Forensic Intelligence",
    category: "ML/AI",
    shortDescription:
      "AI-powered forensic analysis tool for exploring the Enron email dataset using RAG and semantic search.",
    fullDescription:
      "A vectorized RAG pipeline that enables sub-second semantic retrieval across 600,000+ internal Enron emails. Built with LangChain and Pinecone for high-dimensional search and automated timeline generation.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "React", "FastAPI"],
    metrics: [
      { label: "Dataset Size", value: "600k+ emails" },
      { label: "Retrieval", value: "Sub-second" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/enron-insights",
    liveUrl: undefined, // Deploy URL not verified
    featured: true,
    status: "In Development",
    tags: ["RAG", "NLP", "Data Analysis", "Forensics", "AI Search"],
    problem:
      "Analyzing 600,000 internal emails for forensic patterns was impossible for manual audit teams.",
    solution:
      "Built a vectorized RAG pipeline with sub-second retrieval, leveraging LangChain and Pinecone for semantic search.",
  },
  {
    slug: "hostel-issue-tracker-2026",
    title: "Campus Maintenance Hub",
    category: "Full-Stack",
    shortDescription:
      "Glassmorphic campus service desk for managing university facility maintenance and student grievances.",
    fullDescription:
      "Multi-role administrative dashboard with real-time issue tracking, automated escalation, and status management. Built at HackOverflow 2026.",
    techStack: ["Vite", "React", "GSAP", "Supabase"],
    metrics: [
      { label: "Built in", value: "24 hours" },
      { label: "Roles", value: "Multi-role" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026",
    liveUrl: undefined,
    featured: true,
    status: "Hackathon Build",
    tags: ["Full-Stack", "Dashboard", "Issue Tracking", "Hackathon"],
    problem: "Inefficient facility management and grievance tracking in university hostels.",
    solution:
      "Built a scalable, glassmorphic administrative hub with real-time status tracking and multi-role access.",
  },
  {
    slug: "voice-assistant",
    title: "Deep Voice Assistant",
    category: "ML/AI",
    shortDescription:
      "Low-latency Python voice assistant with natural language intent recognition and command execution.",
    fullDescription:
      "A voice-based assistant exploring conversational interaction, automation, and AI-powered command execution using PyTorch and Gradio.",
    techStack: ["Python", "PyTorch", "Gradio"],
    metrics: [{ label: "Latency", value: "Low-latency" }],
    githubUrl: "https://github.com/ayushjhaa1187-spec/Voice-Assistant",
    liveUrl: undefined,
    featured: true,
    status: "Prototype",
    tags: ["Voice AI", "LLM", "Automation", "Experiment"],
  },

  // ── SUPPORTING PROJECTS ────────────────────────────────────
  {
    slug: "shadow-crm",
    title: "Shadow CRM",
    category: "Business",
    shortDescription: "Lightweight performance-focused CRM built for sales team pipeline management.",
    techStack: ["Prisma", "PostgreSQL", "Express", "Node.js"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/Shadow-CRM",
    featured: false,
    status: "Prototype",
    tags: ["CRM", "Full-Stack", "Backend"],
  },
  {
    slug: "sign-up-enhancer",
    title: "Sign-Up UX Accelerator",
    category: "UX Labs",
    shortDescription:
      "Micro-interaction library and component set for high-conversion onboarding flows.",
    techStack: ["React", "Framer Motion", "TypeScript"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/sign-up-enhancer",
    featured: false,
    status: "Prototype",
    tags: ["UX", "React", "Micro-interactions"],
  },
  {
    slug: "stocksense-agent",
    title: "RetailDemand AI Agent",
    category: "ML/AI",
    shortDescription:
      "Autonomous AI agent for retail demand forecasting using historical patterns and market data.",
    techStack: ["Python", "TensorFlow", "LLMs", "Pandas", "scikit-learn"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/stocksense-agent",
    // Note: retaildemand.ai was not a real domain — removed
    featured: false,
    status: "Research Experiment",
    tags: ["AI", "ML", "Forecasting", "Supply Chain"],
  },
  {
    slug: "meeting-insights-weaver",
    title: "Legal Insights Weaver",
    category: "ML/AI",
    shortDescription:
      "AI-powered contract analysis and clause extraction platform using NLP.",
    techStack: ["TypeScript", "Vite", "Supabase", "OpenAI"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/meeting-insights-weaver",
    // Note: legal-weaver.ai was not a real domain — removed
    featured: false,
    status: "In Development",
    tags: ["AI", "Legal Tech", "NLP", "Full-Stack"],
  },
  {
    slug: "openclaw-hackindia",
    title: "HackIndia OpenClaw v1.0",
    category: "Full-Stack",
    shortDescription: "Social impact platform prototype built for HackIndia 2026 submission.",
    techStack: ["React", "Node.js", "Supabase"],
    githubUrl: null,
    featured: false,
    isPrivate: true,
    status: "Private Repo",
    tags: ["Hackathon", "Social Impact", "Full-Stack"],
  },
];

// ── CASE STUDIES ──────────────────────────────────────────────
// Note: Removed fake Google Slides embed URLs from original.
// Case studies are inline content only.

export type CaseStudyDomain = "AI" | "Business" | "Full-Stack" | "Research";

export interface CaseStudy {
  id: string;
  slug: string;
  projectSlug: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  domain: CaseStudyDomain;
  tools: string[];
  thumbnail: string;
  date: string;
  features: string[];
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-enron-001",
    slug: "enron-insights-forensics",
    projectSlug: "enron-insights",
    title: "Decoding Corporate Data with AI: The Enron Case Study",
    problem:
      "Analyzing 600,000 internal emails for forensic patterns was impossible for manual audit teams within mission-critical timelines.",
    solution:
      "Built a vectorized RAG pipeline with semantic search, leveraging LangChain and Pinecone for high-dimensional retrieval.",
    outcome:
      "Automated large-scale document retrieval and enabled timeline generation from unstructured email data.",
    domain: "Research",
    tools: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    thumbnail:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
    date: "2026-01-18",
    features: [
      "Semantic RAG retrieval across 600k+ emails",
      "Automated timeline generation for document analysis",
      "FastAPI backend with vector store integration",
    ],
    results: [
      "Sub-second retrieval on large email corpus",
      "Reduced manual search effort significantly",
      "Automated key entity and event extraction",
    ],
  },
  {
    id: "cs-campus-002",
    slug: "campus-maintenance-hub-spec",
    projectSlug: "hostel-issue-tracker-2026",
    title: "Scaling Campus Infrastructure with Digital Service Desks",
    problem:
      "Inefficient facility management and grievance tracking in large-scale university hostels built under hackathon constraints.",
    solution:
      "Built a scalable, glassmorphic administrative hub with real-time status tracking and multi-role access in 24 hours.",
    outcome:
      "Demonstrated end-to-end delivery of a multi-role administrative platform within hackathon constraints.",
    domain: "Full-Stack",
    tools: ["React", "Supabase", "GSAP", "Vite"],
    thumbnail:
      "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=800&q=80",
    date: "2026-03-20",
    features: [
      "Real-time grievance lifecycle tracking",
      "Multi-role administrative oversight",
      "Glassmorphic UI with GSAP animations",
    ],
    results: [
      "Full working prototype in 24 hours",
      "Multi-role authentication implemented",
      "Real-time status updates across dashboard",
    ],
  },
];
