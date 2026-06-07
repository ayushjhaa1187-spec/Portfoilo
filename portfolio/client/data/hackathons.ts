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
    name: "HackIndia 2026",
    organizer: "HackIndia",
    date: "2026",
    project: "OpenClaw v1.0",
    projectDescription:
      "A social impact platform prototype built to address community-level accessibility and engagement challenges. Developed end-to-end in a hackathon sprint.",
    role: "Full-Stack Developer",
    result: "Participant",
    techStack: ["React", "Node.js", "Supabase"],
    icon: "🏆",
  },
  {
    id: 2,
    name: "HackOverflow 2026",
    organizer: "HackOverflow",
    date: "2026",
    project: "Hostel Issue Tracking System",
    projectDescription:
      "A multi-role administrative dashboard for streamlining student grievances and facility maintenance in university hostels. Built under 24-hour hackathon constraints.",
    role: "Full-Stack Developer",
    result: "Hackathon Build",
    techStack: ["Vite", "React", "Supabase", "GSAP"],
    githubUrl: "https://github.com/ayushjhaa1187-spec/hostel-issue-tracker-2026",
    icon: "⚡",
  },
  {
    id: 3,
    name: "Advitiya × JPD Hub 2026",
    organizer: "Advitiya & JPD Hub",
    date: "2026",
    project: "Agri Reform Vision",
    projectDescription:
      "A technology-driven agriculture support project exploring digital tools for improving farmer decision-making and agricultural workflows.",
    role: "Developer",
    result: "Participant",
    techStack: ["React", "Python", "Node.js"],
    icon: "🌱",
  },
];
