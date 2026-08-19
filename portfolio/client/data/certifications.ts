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
    id: 'bharat-innovates-france-2026',
    title: 'Bharat Innovates 2026 Selection',
    issuer: 'Bharat Innovates (Nice, France)',
    date: '2026-06-15',
    dateLabel: 'Jun 2026',
    category: 'program',
    description: 'Selected for India-Europe deep-tech accelerator connecting 120 Indian startups and premier institutions in France.',
    keyLearnings: ['Global ecosystem expansion', 'Deep-tech market validation', 'Cross-border research bridges'],
    linkedinImpressions: 1369,
    featured: true,
    verified: true
  },
  {
    id: 'devfusion-iitb-2026',
    title: 'Top 10 Finalist — DevFusion Hackathon',
    issuer: 'Indian Institute of Technology, Bombay',
    date: '2026-04-10',
    dateLabel: 'Apr 2026',
    category: 'hackathon',
    description: 'Top 10 award for SkillBridge — full-stack AI peer learning and doubt-solving platform.',
    keyLearnings: ['Full-stack architecture under time pressure', 'AI integration workflows', 'Gamified reputation systems'],
    linkedinImpressions: 1601,
    featured: true,
    verified: true
  },
  {
    id: 'elite-hack-2026',
    title: 'Top 10 Finalist — Elite Hack 1.0',
    issuer: 'Elite Coders',
    date: '2026-04-05',
    dateLabel: 'Apr 2026',
    category: 'hackathon',
    description: 'Top 10 finish out of 7,400+ national builders with a deployed full-stack event management platform.',
    keyLearnings: ['High-throughput event systems', '48-hour production deployment', 'Collaborative engineering'],
    linkedinImpressions: 1086,
    featured: true,
    verified: true
  },
  {
    id: 'deal-room-iitd-2026',
    title: 'The Deal Room Investment Pitch Finalist',
    issuer: 'DMS IIT Delhi × Finazards',
    date: '2026-03-20',
    dateLabel: 'Mar 2026',
    category: 'competition',
    description: 'Defended startup capital allocation logic and unit economics in front of IIT Delhi DMS faculty.',
    keyLearnings: ['Unit economics stress testing', 'Capital allocation modeling', 'VC thesis defence'],
    linkedinImpressions: 259,
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
    linkedinImpressions: 467,
    featured: true,
    verified: true
  },
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
