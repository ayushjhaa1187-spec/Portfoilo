// ============================================================
// CENTRAL PROFILE DATA — Single source of truth for all stats,
// links, and identity. Edit here, reflects everywhere.
// ============================================================

export const profile = {
  name: "Ayush Kumar Jha",
  title: "AI & Full-Stack Engineer",
  subtitle: "IIT Madras Data Science Scholar",
  tagline: "AI & Full-Stack Engineer | IIT Madras Data Science Scholar",
  location: "India",
  email: "ayushjhaa1187@gmail.com",
  github: "https://github.com/ayushjhaa1187-spec",
  linkedin: "https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/",
  resume: "/resume.pdf", // User will provide the actual PDF in public/resume.pdf
  availability: "Open to Internships & Collaborations",
  bio: "I'm an AI and full-stack developer currently pursuing Data Science through IIT Madras. I enjoy building practical AI products, experimenting with LLM systems, and turning ideas into working web applications. My focus areas include multi-agent systems, retrieval-augmented generation, AI-assisted automation, and full-stack product development.",
  shortBio: "Building AI-powered web applications, multi-agent systems, and full-stack products with a focus on practical problem-solving, clean engineering, and real-world deployment.",
  stats: {
    // All stats are verified — do not inflate
    publicRepos: 46,       // Verified via GitHub API
    liveProjects: 6,       // Conservative, verifiable count
    hackathons: 3,         // HackIndia + HackOverflow + Advitiya
    iitMadras: true,       // Enrolled BS Data Science
  },
  focusAreas: [
    "Multi-Agent Systems",
    "RAG & LLM Systems",
    "Full-Stack Development",
    "AI Automation",
    "Hackathon Builds",
  ],
} as const;

export type Profile = typeof profile;
