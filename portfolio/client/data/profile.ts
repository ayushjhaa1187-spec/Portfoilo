// ============================================================
// CENTRAL PROFILE DATA — Single source of truth for all stats,
// links, and identity. Edit here, reflects everywhere.
// ============================================================

export const profile = {
  name: "Ayush Kumar Jha",
  title: "AI & Full-Stack Engineer",
  subtitle: "IIT Madras Data Science Scholar",
  tagline: "IIT MADRAS 29’ | JURY AT IIT KHARAGPUR | INTERN AT IIT ROPAR | FINALIST AT IITK/IITM/IITB/IITD/IITR | SELECTED FOR BHARAT INNOVATES (FRANCE)",
  location: "Delhi, India",
  email: "ayushjhaa1187@gmail.com",
  github: "https://github.com/ayushjhaa1187-spec",
  linkedin: "https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/",
  resume: "https://drive.google.com/file/d/1C5iHObv14AM47zHpbjuvk65IzglabZEP/view?usp=sharing",
  availability: "Open to High-Impact AI/ML & Full-Stack Collaborations",
  bio: "I'm an AI engineer and full-stack developer pursuing Data Science & Applications at IIT Madras (Class of 2029). Currently a Research & Education Design Intern at IIT Ropar (Vicharanashala / VLED) and Jury Member at IIT Kharagpur (GES AI-volution). Selected for Bharat Innovates 2026 in Nice, France, representing Indian deep-tech on a global accelerator stage. My focus spans multi-agent workflows, long-term memory for AI systems, physics-informed neural networks (PINNs), and high-performance full-stack web architectures.",
  shortBio: "IIT Madras Data Science Scholar & AI Engineer. Intern at IIT Ropar (VLED), Jury at IIT Kharagpur, Finalist across 5+ premier IITs, and Global Innovator at Bharat Innovates (Nice, France).",
  stats: {
    followers: 3809,       // Verified LinkedIn followers
    publicRepos: 46,       // Verified via GitHub API
    liveProjects: 12,      // Verified active and deployed projects
    hackathons: 8,         // Verified hackathons across premier IITs
    iitMadras: true,       // Enrolled BS Data Science (2025–2029)
  },
  focusAreas: [
    "Multi-Agent AI Systems",
    "Physics-Informed Neural Networks (PINNs)",
    "Long-Term Memory AI Architectures",
    "Full-Stack Web Engineering (Next.js / Supabase)",
    "B2B SaaS & Venture Strategy",
  ],
} as const;

export type Profile = typeof profile;
