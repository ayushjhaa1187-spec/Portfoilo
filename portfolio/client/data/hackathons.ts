// ============================================================
// HACKATHONS DATA — Verified hackathon entries only.
// Use "Participant" as result unless confirmed otherwise.
// ============================================================

export interface Hackathon {
  id: number;
  name: string;
  organizer: string;
  date: string;
  project: string;
  projectDescription: string;
  role: string;
  teamSize?: number;
  result: "Winner" | "Finalist" | "Runner-up" | "Participant" | "Hackathon Build";
  techStack: string[];
  githubUrl?: string;
  devpostUrl?: string;
  icon: string;
}

export const hackathons: Hackathon[] = [
  {
    id: 1,
    name: "DevFusion: The Developer Hackathon",
    organizer: "Indian Institute of Technology, Bombay",
    date: "2026",
    project: "SkillBridge",
    projectDescription:
      "An AI-first full-stack learning platform with instant multimodal doubt solving, verified mentor booking, adaptive practice test generation, gamified reputation, and credit monetization logic.",
    role: "Full-Stack & AI Systems Lead",
    teamSize: 2,
    result: "Finalist",
    techStack: ["Next.js", "React", "TypeScript", "OpenAI", "Supabase", "Framer Motion"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/SkillBridge",
    icon: "🏆",
  },
  {
    id: 2,
    name: "Elite Hack 1.0 (7.4k+ Builders)",
    organizer: "Elite Coders",
    date: "2026",
    project: "CoCreate / Elite Event Platform",
    projectDescription:
      "An end-to-end event and hackathon management platform built and deployed live within 48 hours under high pressure, finishing in the Top 10 nationally.",
    role: "Full-Stack Developer",
    teamSize: 2,
    result: "Finalist",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/elite-hack-1-0",
    devpostUrl: "https://elite-hack-1-0.vercel.app",
    icon: "⚡",
  },
  {
    id: 3,
    name: "HackFest 2.0 (24h Global Hackathon)",
    organizer: "GDG Cloud New Delhi × Turgon AI",
    date: "2026",
    project: "BRD Generation Agent",
    projectDescription:
      "An autonomous AI agent converting raw product notes and user input into comprehensive Business Requirements Documents in under 2 minutes.",
    role: "Solo Builder",
    teamSize: 1,
    result: "Finalist",
    techStack: ["Python", "LangChain", "OpenAI", "FastAPI", "Streamlit"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/BRD-Generation-Agent",
    icon: "🤖",
  },
  {
    id: 4,
    name: "NeuroHack Challenge 2026",
    organizer: "Smallest.ai × IIT Guwahati (IITG.ai)",
    date: "2026",
    project: "NeuroMemory Agent",
    projectDescription:
      "A real-time hierarchical memory system for conversational AI agents surviving 1,000+ turns with sub-50ms token injection.",
    role: "AI Engineer",
    teamSize: 1,
    result: "Hackathon Build",
    techStack: ["Python", "Smallest.ai", "FastAPI", "Vector DB", "PyTorch"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/NeuroMemory-Agent",
    icon: "🧠",
  },
  {
    id: 5,
    name: "Artpark ProtoDash Challenge",
    organizer: "Indian Institute of Science (IISc Bangalore)",
    date: "2026",
    project: "NEXAS Sports Ecosystem",
    projectDescription:
      "An integrated sports logistics platform unifying venue booking, player skill-matching, coach management, and community leagues across urban India.",
    role: "Product Designer & Frontend Dev",
    teamSize: 1,
    result: "Hackathon Build",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/NEXAS",
    devpostUrl: "https://lnkd.in/gA3UzFRm",
    icon: "🏸",
  },
  {
    id: 6,
    name: "Frontend Odyssey Challenge",
    organizer: "IIT Patna",
    date: "2026",
    project: "Interactive Web Experience",
    projectDescription:
      "Engineered high-fidelity micro-interactions and intentional user journey flows focusing on cognitive ergonomics.",
    role: "Frontend Engineer",
    teamSize: 1,
    result: "Participant",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    icon: "🎨",
  },
  {
    id: 7,
    name: "HackOverflow 2026",
    organizer: "HackOverflow",
    date: "2026",
    project: "Hostel Issue Tracking System",
    projectDescription:
      "A multi-role administrative dashboard for streamlining student grievances and facility maintenance in university hostels.",
    role: "Full-Stack Developer",
    teamSize: 2,
    result: "Hackathon Build",
    techStack: ["Vite", "React", "Supabase", "GSAP"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026",
    icon: "⚡",
  },
  {
    id: 8,
    name: "HackIndia 2026",
    organizer: "HackIndia",
    date: "2026",
    project: "OpenClaw v1.0",
    projectDescription:
      "A social impact platform prototype built to address community-level accessibility and engagement challenges.",
    role: "Full-Stack Developer",
    result: "Participant",
    techStack: ["React", "Node.js", "Supabase"],
    icon: "🌱",
  },
];
