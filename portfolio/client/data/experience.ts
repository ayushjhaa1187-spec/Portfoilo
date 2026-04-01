export interface Experience {
  id: number;
  role: string;
  org: string;
  company?: string; // Compatibility alias
  type: 'work' | 'education' | 'training' | 'campus' | 'achievement' | 'Internship' | 'Volunteer' | 'Full-time' | 'Freelance';
  start: string;
  end: string;
  period?: string; // Compatibility alias
  current: boolean;
  description: string;
  skills: string[];
  tags?: string[]; // Compatibility alias
  verified: boolean;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "BS in Data Science",
    org: "IIT Madras",
    company: "IIT Madras",
    type: "education",
    start: "Jul 2025",
    end: "Sep 2029",
    period: "Jul 2025 – Sep 2029",
    current: true,
    description: "Pursuing foundational and applied data science curriculum with focus on ML, statistics, and programming.",
    skills: ["Python", "Statistics", "ML", "Linear Algebra"],
    tags: ["Python", "Statistics", "ML", "Linear Algebra"],
    verified: true,
    icon: "🎓"
  },
  {
    id: 2,
    role: "Junior Data Analyst Intern",
    org: "Yuva Intern (Henry Harvin)",
    company: "Yuva Intern",
    type: "work",
    start: "Oct 2025",
    end: "Jan 2026",
    period: "Oct 2025 – Jan 2026",
    current: false,
    description: "Performed data cleaning, exploratory analysis, and visualization for business datasets.",
    skills: ["Python", "Pandas", "Matplotlib", "SQL"],
    tags: ["Python", "Pandas", "Matplotlib", "SQL"],
    verified: true,
    icon: "📊"
  },
  {
    id: 3,
    role: "Frontend Web Developer Intern",
    org: "Yuva Intern",
    company: "Yuva Intern",
    type: "work",
    start: "Sep 2025",
    end: "Jan 2026",
    period: "Sep 2025 – Jan 2026",
    current: false,
    description: "Built responsive UI components and landing pages using React and Tailwind CSS.",
    skills: ["React", "Tailwind", "HTML/CSS", "JavaScript"],
    tags: ["React", "Tailwind", "HTML/CSS", "JavaScript"],
    verified: true,
    icon: "💻"
  },
  {
    id: 4,
    role: "MTF Alumni Trainee",
    org: "MTF Institute",
    company: "MTF Institute",
    type: "training",
    start: "Oct 2025",
    end: "Jan 2026",
    period: "Oct 2025 – Jan 2026",
    current: false,
    description: "Completed structured training program on business strategy and product management.",
    skills: ["Strategy", "Product", "Business"],
    tags: ["Strategy", "Product", "Business"],
    verified: true,
    icon: "🏆"
  },
  {
    id: 5,
    role: "Campus Ambassador",
    org: "E-Cell DTU",
    company: "E-Cell DTU",
    type: "campus",
    start: "Oct 2025",
    end: "Jan 2026",
    period: "Oct 2025 – Jan 2026",
    current: false,
    description: "Represented E-Cell DTU on IIT Madras campus, coordinated event outreach and student engagement.",
    skills: ["Leadership", "Outreach", "Entrepreneurship"],
    tags: ["Leadership", "Outreach", "Entrepreneurship"],
    verified: true,
    icon: "🚀"
  },
  {
    id: 6,
    role: "Jury Member",
    org: "AI-volution, GES 2026 — IIT Kharagpur",
    company: "IIT Kharagpur",
    type: "achievement",
    start: "Jan 2026",
    end: "Jan 2026",
    period: "Jan 2026",
    current: false,
    description: "Evaluated AI startup pitches at the Global Entrepreneurship Summit hosted by E-Cell IIT Kharagpur.",
    skills: ["AI", "Judging", "Startups", "IIT KGP"],
    tags: ["AI", "Judging", "Startups", "IIT KGP"],
    verified: true,
    icon: "⚖️"
  }
];
