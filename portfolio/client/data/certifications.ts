export interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: 'Space Tech' | 'Data Science' | 'AI/ML' | 'Full-Stack' | 'Cloud' | 'Business';
  issuedDate: string;
  expiryDate?: string | null;
  dateLabel: string;
  credentialUrl: string;
  verifyId?: string;
  featured?: boolean;
  inProgress?: boolean;
  verified: boolean;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Space Race Participant",
    issuer: "IEEE DTU",
    category: "Space Tech",
    issuedDate: "2025-10-12",
    dateLabel: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.linkedin.com/learning/",
    verifyId: "IEEE-SR-2025-01",
    featured: true,
    verified: true,
    logo: "ieee"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "Udemy",
    category: "Data Science",
    issuedDate: "2025-10-18",
    dateLabel: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.udemy.com/certificate/",
    verifyId: "UC-DATA-PY-8892",
    verified: true,
    logo: "udemy"
  },
  {
    id: 3,
    title: "Advanced Machine Learning",
    issuer: "Coursera",
    category: "AI/ML",
    issuedDate: "2026-01-07",
    dateLabel: "Jan 2026",
    expiryDate: "2028-01-07",
    credentialUrl: "https://www.coursera.org/verify/",
    verifyId: "COUR-AML-2026-XJ",
    featured: true,
    verified: true,
    logo: "coursera"
  },
  {
    id: 4,
    title: "Prompt Engineering for LLMs",
    issuer: "DeepLearning.AI",
    category: "AI/ML",
    issuedDate: "2025-12-09",
    dateLabel: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.deeplearning.ai/",
    verifyId: "DL-PROM-9921",
    verified: true,
    logo: "deeplearning"
  },
  {
    id: 5,
    title: "Next.js 15 Full-Stack",
    issuer: "Vercel",
    category: "Full-Stack",
    issuedDate: "2025-11-21",
    dateLabel: "Nov 2025",
    expiryDate: null,
    credentialUrl: "https://vercel.com/home",
    verifyId: "VERC-NX15-FS",
    verified: true,
    logo: "vercel"
  },
  {
    id: 6,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    category: "Cloud",
    issuedDate: "2026-01-15",
    dateLabel: "Jan 2026",
    expiryDate: "2029-01-15",
    credentialUrl: "https://cloud.google.com/",
    verifyId: "GCP-DL-2026",
    featured: true,
    verified: true,
    logo: "google"
  },
  {
    id: 7,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    category: "Cloud",
    issuedDate: "2026-01-21",
    dateLabel: "Jan 2026",
    expiryDate: "2029-01-21",
    credentialUrl: "https://aws.amazon.com/",
    verifyId: "AWS-CP-2026-09",
    verified: true,
    logo: "aws"
  },
  {
    id: 8,
    title: "LangChain for LLM Apps",
    issuer: "DeepLearning.AI",
    category: "AI/ML",
    issuedDate: "2025-12-20",
    dateLabel: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.deeplearning.ai/",
    verifyId: "DL-LC-8812",
    verified: true,
    logo: "deeplearning"
  },
  {
    id: 9,
    title: "Generative AI Fundamentals",
    issuer: "Microsoft",
    category: "AI/ML",
    issuedDate: "2025-12-04",
    dateLabel: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.microsoft.com/",
    verifyId: "MSFT-GENAI-101",
    verified: true,
    logo: "microsoft"
  },
  {
    id: 10,
    title: "SQL for Data Science",
    issuer: "IBM",
    category: "Data Science",
    issuedDate: "2025-10-02",
    dateLabel: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.ibm.com/",
    verifyId: "IBM-SQL-DS-441",
    verified: true,
    logo: "ibm"
  },
  {
    id: 11,
    title: "Python for AI & Dev",
    issuer: "IBM",
    category: "Data Science",
    issuedDate: "2025-08-11",
    dateLabel: "Aug 2025",
    expiryDate: null,
    credentialUrl: "https://www.ibm.com/",
    verifyId: "IBM-PY-AI-01",
    verified: true,
    logo: "ibm"
  },
  {
    id: 12,
    title: "Salesforce AI Associate",
    issuer: "Salesforce",
    category: "Business",
    issuedDate: "2026-03-01",
    dateLabel: "In Progress",
    credentialUrl: "https://www.salesforce.com/services/university/",
    verifyId: "SF-AI-ASYNC",
    inProgress: true,
    verified: false,
    logo: "salesforce"
  }
];
