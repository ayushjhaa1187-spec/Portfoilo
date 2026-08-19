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
    slug: "skillbridge",
    title: "SkillBridge: AI-First Peer Learning Ecosystem",
    category: "Full-Stack",
    shortDescription:
      "Full-stack learning platform shortlisted in the Top 10 at DevFusion (IIT Bombay) featuring instant AI doubt-solving, adaptive practice, and credit revenue architecture.",
    fullDescription:
      "Built for Problem Statement 2 at DevFusion Hackathon (IIT Bombay). We expanded beyond basic peer learning into an enterprise-grade AI learning ecosystem featuring real-time AI doubt resolution, verified mentor sessions, adaptive test generation, gamified reputation mechanics, subscription tiers, and credit monetization logic.",
    techStack: ["Next.js", "React", "TypeScript", "Framer Motion", "OpenAI / LLMs", "Supabase", "Node.js"],
    metrics: [
      { label: "Recognition", value: "Top 10 @ IIT Bombay" },
      { label: "Hackathon", value: "DevFusion" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/SkillBridge",
    featured: true,
    status: "Hackathon Build",
    tags: ["IIT Bombay", "AI Learning", "Full-Stack", "Top 10 Finalist", "EdTech"],
    problem:
      "Students struggle with fragmented doubt resolution, lack of vetted peer mentorship, and rigid practice workflows.",
    solution:
      "Engineered an integrated AI-first ecosystem with instant multimodal doubt resolution, gamified peer Q&A, verified mentor booking, and dynamic practice testing.",
  },
  {
    slug: "elite-event-hub",
    title: "CoCreate / Elite Event Management Platform",
    category: "Full-Stack",
    shortDescription:
      "Live-deployed full-stack event and hackathon coordination hub that placed in the Top 10 out of 7,400+ builders at Elite Hack 1.0.",
    fullDescription:
      "An end-to-end production web application built and deployed live within 48 hours under high-pressure constraints. Features team formation, live submission portals, dynamic schedule management, and real-time announcements.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel", "PostgreSQL / Supabase", "Framer Motion"],
    metrics: [
      { label: "Participants", value: "7,400+ Teams" },
      { label: "Result", value: "Top 10 Finalist" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/elite-hack-1-0",
    liveUrl: "https://elite-hack-1-0.vercel.app",
    featured: true,
    status: "Live",
    tags: ["Live Deployment", "Full-Stack", "Hackathon Finalist", "Vercel"],
    problem:
      "Organizing large-scale virtual hackathons requires low-latency team matching, real-time schedule syncing, and reliable submission tracking.",
    solution:
      "Shipped a resilient, responsive full-stack platform deployed on Vercel handling live participant workflows and event dashboards.",
  },
  {
    slug: "neuromemory-agent",
    title: "NeuroMemory: 1,000-Turn Conversational Persistence",
    category: "ML/AI",
    shortDescription:
      "Long-term memory architecture for conversational AI agents surviving 1,000+ turns with low-latency inference injection (Smallest.ai × IIT Guwahati).",
    fullDescription:
      "Developed during the NeuroHack Challenge 2026 organized by Smallest.ai and IIT Guwahati (IITG.ai). Addresses agent memory degradation by extracting episodic and semantic memories, persisting them in structured vector stores, and retrieving only salient contextual tokens at sub-50ms inference time.",
    techStack: ["Python", "Smallest.ai API", "FastAPI", "Vector DB", "PyTorch", "LLMs"],
    metrics: [
      { label: "Memory Turns", value: "1,000+ Turns" },
      { label: "Latency", value: "Sub-50ms" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/NeuroMemory-Agent",
    featured: true,
    status: "Prototype",
    tags: ["AI Agents", "Long-Term Memory", "Smallest.ai", "IIT Guwahati", "LLM Infrastructure"],
    problem:
      "Most conversational AI agents lose contextual continuity or experience severe latency degradation after 20+ turns.",
    solution:
      "Architected a hierarchical memory tier that extracts, summarizes, and selectively injects relevant historical facts into prompt context dynamically.",
  },
  {
    slug: "brd-generation-agent",
    title: "Autonomous BRD Generation Agent",
    category: "ML/AI",
    shortDescription:
      "Solo finalist build at HackFest 2.0 (GDG Cloud New Delhi × Turgon AI) transforming raw product notes into comprehensive Business Requirements Documents.",
    fullDescription:
      "An intelligent workflow automation system built during a 24-hour global hackathon. Cleared multiple elimination rounds into the Grand Finals by automating the tedious product documentation lifecycle with structured LLM reasoning chains.",
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "Streamlit"],
    metrics: [
      { label: "HackFest 2.0", value: "Solo Finalist" },
      { label: "Generation Time", value: "< 2 mins" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/BRD-Generation-Agent",
    featured: true,
    status: "Prototype",
    tags: ["Agentic AI", "GDG Cloud", "Product Tech", "Workflow Automation", "Solo Finalist"],
  },
  {
    slug: "nexas-sports",
    title: "NEXAS: Urban Sports Infrastructure Platform",
    category: "UX Labs",
    shortDescription:
      "Integrated sports discovery, court booking, and player community platform created for Artpark ProtoDash at IISc Bangalore.",
    fullDescription:
      "Addresses fragmented urban sports logistics across India. Combines real-time venue slot discovery, skill-based matchmaking, coach management, and community leagues into a unified interface.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Figma", "UI/UX Ergonomics"],
    metrics: [
      { label: "Design Summit", value: "Artpark ProtoDash" },
      { label: "Institution", value: "IISc Bangalore" },
    ],
    githubUrl: "https://github.com/ayushjhaa1187-spec/NEXAS",
    liveUrl: "https://lnkd.in/gA3UzFRm",
    featured: false,
    status: "Prototype",
    tags: ["SportsTech", "IISc Bangalore", "UI/UX", "Product Design", "Artpark"],
  },
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
    featured: false,
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
    featured: false,
    status: "Prototype",
    tags: ["Voice AI", "LLM", "Automation", "Experiment"],
  },
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
