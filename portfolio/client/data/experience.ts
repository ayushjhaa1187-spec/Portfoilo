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
    id: 10,
    role: "Research & Education Design Intern",
    org: "Vicharanashala (Lab for Education Design), IIT Ropar",
    company: "IIT Ropar (VLED)",
    type: "work",
    start: "May 2026",
    end: "Present",
    period: "May 2026 – Present",
    current: true,
    description: "Working under Prof. Sudarshan Iyengar and Dr. Pavani Ayinampudi exploring AI-assisted curriculum design, education pedagogy, and building intelligent problem-solving tools.",
    skills: ["AI in Education", "Pedagogical Design", "Python", "Problem Architecture", "LLMs"],
    tags: ["IIT Ropar", "Research", "Education Tech", "AI"],
    verified: true,
    icon: "🔬"
  },
  {
    id: 6,
    role: "Jury Member — AI-volution",
    org: "GES 2026, IIT Kharagpur × Ashoka Changemakers",
    company: "IIT Kharagpur",
    type: "achievement",
    start: "Jan 2026",
    end: "Jan 2026",
    period: "Jan 2026",
    current: false,
    description: "Invited as a jury member to evaluate AI-focused startup submissions across technical depth, unit economics, and public impact at Asia's premier entrepreneurship summit.",
    skills: ["AI Architecture", "Startup Evaluation", "Responsible AI", "Product-Market Fit"],
    tags: ["Jury", "AI-volution", "GES 2026", "IIT Kharagpur"],
    verified: true,
    icon: "⚖️"
  },
  {
    id: 11,
    role: "Campus Ambassador — BECon '26",
    org: "eDC (Entrepreneurship Development Cell), IIT Delhi",
    company: "IIT Delhi",
    type: "campus",
    start: "Dec 2025",
    end: "Feb 2026",
    period: "Dec 2025 – Feb 2026",
    current: false,
    description: "Served as a key ambassador connecting student innovators with founders and VC masterclasses on B2B SaaS, GTM frameworks, and enterprise scaling.",
    skills: ["B2B SaaS Strategy", "Ecosystem Building", "Community Leadership"],
    tags: ["IIT Delhi", "BECon'26", "Leadership"],
    verified: true,
    icon: "🏛️"
  },
  {
    id: 12,
    role: "Campus Ambassador — Cognizance 2026",
    org: "Indian Institute of Technology, Roorkee",
    company: "IIT Roorkee",
    type: "campus",
    start: "Jan 2026",
    end: "Mar 2026",
    period: "Jan 2026 – Mar 2026",
    current: false,
    description: "Coordinated pan-India outreach for Cognizance 2026, mobilizing 500+ builders and hackathon teams across tech clusters.",
    skills: ["Technical Outreach", "Community Engagement", "Event Coordination"],
    tags: ["IIT Roorkee", "Cognizance", "Outreach"],
    verified: true,
    icon: "📣"
  },
  {
    id: 1,
    role: "BS in Data Science & Applications",
    org: "IIT Madras",
    company: "IIT Madras",
    type: "education",
    start: "Jan 2025",
    end: "May 2029",
    period: "Jan 2025 – May 2029",
    current: true,
    description: "Pursuing rigorous foundations and applied paradigms in machine learning, linear algebra, statistics, algorithms, and agentic AI architectures.",
    skills: ["Python", "Machine Learning", "Applied Statistics", "Linear Algebra"],
    tags: ["IIT Madras", "Data Science", "Degree"],
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
    description: "Performed data cleaning, exploratory data analysis (EDA), and business metric visualizations using Python, Pandas, and SQL.",
    skills: ["Python", "Pandas", "Matplotlib", "SQL", "EDA"],
    tags: ["Data Analysis", "Python", "SQL"],
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
    description: "Built responsive UI components and interactive dashboards using modern web technologies.",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
    tags: ["Frontend", "React", "Tailwind"],
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
    description: "Completed structured training in business strategy, product management, and market expansion models.",
    skills: ["Business Strategy", "Product Management", "Market Analysis"],
    tags: ["Training", "Business Strategy"],
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
    description: "Represented E-Cell DTU, spearheading startup initiatives and student founder outreach.",
    skills: ["Leadership", "Outreach", "Entrepreneurship"],
    tags: ["DTU", "Leadership"],
    verified: true,
    icon: "🚀"
  }
];
