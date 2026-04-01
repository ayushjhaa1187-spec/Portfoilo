export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'Space Tech' | 'Data Science' | 'AI/ML' | 'Full-Stack' | 'Cloud' | 'Business';
  link?: string;
  verifyId?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Space Race Participant",
    issuer: "IEEE DTU",
    date: "Oct 2025",
    category: "Space Tech",
    verifyId: "IEEE-SR-2025-01"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "Udemy",
    date: "Oct 2025",
    category: "Data Science",
    verifyId: "UC-DATA-PY-8892"
  },
  {
    id: 3,
    title: "Advanced Machine Learning",
    issuer: "Coursera",
    date: "Jan 2026",
    category: "AI/ML",
    verifyId: "COUR-AML-2026-XJ"
  },
  {
    id: 4,
    title: "Prompt Engineering for LLMs",
    issuer: "DeepLearning.AI",
    date: "Dec 2025",
    category: "AI/ML",
    verifyId: "DL-PROM-9921"
  },
  {
    id: 5,
    title: "Next.js 15 Full-Stack",
    issuer: "Vercel",
    date: "Nov 2025",
    category: "Full-Stack",
    verifyId: "VERC-NX15-FS"
  },
  {
    id: 6,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    date: "Jan 2026",
    category: "Cloud",
    verifyId: "GCP-DL-2026"
  },
  {
    id: 7,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2026",
    category: "Cloud",
    verifyId: "AWS-CP-2026-09"
  },
  {
    id: 8,
    title: "LangChain for LLM Apps",
    issuer: "DeepLearning.AI",
    date: "Dec 2025",
    category: "AI/ML",
    verifyId: "DL-LC-8812"
  },
  {
    id: 9,
    title: "Generative AI Fundamentals",
    issuer: "Microsoft",
    date: "Dec 2025",
    category: "AI/ML",
    verifyId: "MSFT-GENAI-101"
  },
  {
    id: 10,
    title: "SQL for Data Science",
    issuer: "IBM",
    date: "Oct 2025",
    category: "Data Science",
    verifyId: "IBM-SQL-DS-441"
  },
  {
    id: 11,
    title: "Python for AI & Dev",
    issuer: "IBM",
    date: "Aug 2025",
    category: "Data Science",
    verifyId: "IBM-PY-AI-01"
  }
];
