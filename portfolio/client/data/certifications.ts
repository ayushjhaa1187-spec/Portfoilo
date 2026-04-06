export interface Certification {
  id: number;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate: string | null;
  credentialUrl: string;
  category: 'Space Tech' | 'Data Science' | 'AI/ML' | 'Full-Stack' | 'Cloud' | 'Business';
  verified: boolean;
  logo: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Space Race Participant",
    issuer: "IEEE DTU",
    issuedDate: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.linkedin.com/learning/",
    category: "Space Tech",
    verified: true,
    logo: "ieee"
  },
  {
    id: 2,
    title: "Data Science with Python",
    issuer: "Udemy",
    issuedDate: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.udemy.com/certificate/",
    category: "Data Science",
    verified: true,
    logo: "udemy"
  },
  {
    id: 3,
    title: "Advanced Machine Learning",
    issuer: "Coursera",
    issuedDate: "Jan 2026",
    expiryDate: null,
    credentialUrl: "https://www.coursera.org/verify/",
    category: "AI/ML",
    verified: true,
    logo: "coursera"
  },
  {
    id: 4,
    title: "Prompt Engineering for LLMs",
    issuer: "DeepLearning.AI",
    issuedDate: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.deeplearning.ai/",
    category: "AI/ML",
    verified: true,
    logo: "deeplearning"
  },
  {
    id: 5,
    title: "Next.js 15 Full-Stack",
    issuer: "Vercel",
    issuedDate: "Nov 2025",
    expiryDate: null,
    credentialUrl: "https://vercel.com/home",
    category: "Full-Stack",
    verified: true,
    logo: "vercel"
  },
  {
    id: 6,
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    issuedDate: "Jan 2026",
    expiryDate: null,
    credentialUrl: "https://cloud.google.com/",
    category: "Cloud",
    verified: true,
    logo: "google"
  },
  {
    id: 7,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issuedDate: "Jan 2026",
    expiryDate: null,
    credentialUrl: "https://aws.amazon.com/",
    category: "Cloud",
    verified: true,
    logo: "aws"
  },
  {
    id: 8,
    title: "LangChain for LLM Apps",
    issuer: "DeepLearning.AI",
    issuedDate: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.deeplearning.ai/",
    category: "AI/ML",
    verified: true,
    logo: "deeplearning"
  },
  {
    id: 9,
    title: "Generative AI Fundamentals",
    issuer: "Microsoft",
    issuedDate: "Dec 2025",
    expiryDate: null,
    credentialUrl: "https://www.microsoft.com/",
    category: "AI/ML",
    verified: true,
    logo: "microsoft"
  },
  {
    id: 10,
    title: "SQL for Data Science",
    issuer: "IBM",
    issuedDate: "Oct 2025",
    expiryDate: null,
    credentialUrl: "https://www.ibm.com/",
    category: "Data Science",
    verified: true,
    logo: "ibm"
  },
  {
    id: 11,
    title: "Python for AI & Dev",
    issuer: "IBM",
    issuedDate: "Aug 2025",
    expiryDate: null,
    credentialUrl: "https://www.ibm.com/",
    category: "Data Science",
    verified: true,
    logo: "ibm"
  }
];
