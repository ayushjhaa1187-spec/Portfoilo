export interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  category: 'Space Tech' | 'Data Science' | 'AI/ML' | 'Full-Stack' | 'Cloud' | 'Business' | 'hackathon' | 'competition' | 'jury' | 'program' | 'course';
  issuedDate?: string;
  date?: string; // Fallback for various UIs
  dateLabel?: string;
  month?: number;
  year?: number;
  credentialUrl?: string;
  verifyId?: string;
  featured: boolean;
  inProgress?: boolean;
  verified?: boolean;
  logo?: string;
  description?: string;
  keyLearnings?: string[];
  linkedinPostUrl?: string;
  linkedinImpressions?: number;
  certificateImagePath?: string;
  hasPPTDeck?: boolean;
  pptDeckUrl?: string;
}

export const certifications: Certification[] = [
  {
    id: 'enable-ideathon-finalist-2026',
    title: 'Enable Ideathon Finalist',
    issuer: 'E-Cell IIT Madras × Shaastra 2026',
    date: '2026-02-03',
    dateLabel: 'Feb 2026',
    category: 'hackathon',
    description: 'Finalist recognition for presenting an accessible banking concept focused on inclusive fintech UX.',
    keyLearnings: ['Accessibility must be design-first', 'Trust design in fintech', 'Risk-aware UX'],
    linkedinImpressions: 501,
    featured: true,
    verified: true
  },
  {
    id: 'aivolution-jury-iitkgp-2026',
    title: 'AI-volution Jury Member',
    issuer: 'GES 2026, IIT Kharagpur',
    date: '2026-01-28',
    dateLabel: 'Jan 2026',
    category: 'jury',
    description: 'Invited as a jury member for evaluating AI-focused startup submissions across technical depth and execution.',
    keyLearnings: ['Product tradeoffs strategy', 'Technical feasibility metrics', 'AI business alignment'],
    featured: true,
    verified: true
  },
  {
    id: 3,
    title: "Advanced Machine Learning",
    issuer: "Coursera",
    category: "AI/ML",
    issuedDate: "2026-01-07",
    dateLabel: "Jan 2026",
    credentialUrl: "https://www.coursera.org/verify/",
    verifyId: "COUR-AML-2026-XJ",
    featured: true,
    verified: true,
    logo: "coursera"
  },
  {
    id: 6,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    category: "Cloud",
    issuedDate: "2026-01-15",
    dateLabel: "Jan 2026",
    credentialUrl: "https://cloud.google.com/",
    verifyId: "GCP-DL-2026",
    featured: true,
    verified: true,
    logo: "google"
  },
  {
    id: 4,
    title: "Prompt Engineering for LLMs",
    issuer: "DeepLearning.AI",
    category: "AI/ML",
    issuedDate: "2025-12-09",
    dateLabel: "Dec 2025",
    credentialUrl: "https://www.deeplearning.ai/",
    verifyId: "DL-PROM-9921",
    featured: true,
    verified: true,
    logo: "deeplearning"
  }
];
