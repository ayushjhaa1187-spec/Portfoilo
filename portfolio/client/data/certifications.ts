export interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: 'Space Tech' | 'Data Science' | 'AI/ML' | 'Full-Stack' | 'Cloud' | 'Business';
  issuedDate: string;
  expiryDate?: string;
  dateLabel: string;
  link?: string;
  verifyId?: string;
  featured?: boolean;
  inProgress?: boolean;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Space Race Participant',
    issuer: 'IEEE DTU',
    category: 'Space Tech',
    issuedDate: '2025-10-12',
    dateLabel: 'Oct 2025',
    verifyId: 'IEEE-SR-2025-01',
    featured: true,
  },
  {
    id: 2,
    title: 'Data Science with Python',
    issuer: 'Udemy',
    category: 'Data Science',
    issuedDate: '2025-10-18',
    dateLabel: 'Oct 2025',
    verifyId: 'UC-DATA-PY-8892'
  },
  {
    id: 3,
    title: 'Advanced Machine Learning',
    issuer: 'Coursera',
    category: 'AI/ML',
    issuedDate: '2026-01-07',
    expiryDate: '2028-01-07',
    dateLabel: 'Jan 2026',
    verifyId: 'COUR-AML-2026-XJ',
    featured: true,
  },
  {
    id: 4,
    title: 'Prompt Engineering for LLMs',
    issuer: 'DeepLearning.AI',
    category: 'AI/ML',
    issuedDate: '2025-12-09',
    dateLabel: 'Dec 2025',
    verifyId: 'DL-PROM-9921'
  },
  {
    id: 5,
    title: 'Next.js 15 Full-Stack',
    issuer: 'Vercel',
    category: 'Full-Stack',
    issuedDate: '2025-11-21',
    dateLabel: 'Nov 2025',
    verifyId: 'VERC-NX15-FS'
  },
  {
    id: 6,
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    category: 'Cloud',
    issuedDate: '2026-01-15',
    expiryDate: '2029-01-15',
    dateLabel: 'Jan 2026',
    verifyId: 'GCP-DL-2026',
    featured: true,
  },
  {
    id: 7,
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'Cloud',
    issuedDate: '2026-01-21',
    expiryDate: '2029-01-21',
    dateLabel: 'Jan 2026',
    verifyId: 'AWS-CP-2026-09'
  },
  {
    id: 8,
    title: 'LangChain for LLM Apps',
    issuer: 'DeepLearning.AI',
    category: 'AI/ML',
    issuedDate: '2025-12-20',
    dateLabel: 'Dec 2025',
    verifyId: 'DL-LC-8812'
  },
  {
    id: 9,
    title: 'Generative AI Fundamentals',
    issuer: 'Microsoft',
    category: 'AI/ML',
    issuedDate: '2025-12-04',
    dateLabel: 'Dec 2025',
    verifyId: 'MSFT-GENAI-101'
  },
  {
    id: 10,
    title: 'SQL for Data Science',
    issuer: 'IBM',
    category: 'Data Science',
    issuedDate: '2025-10-02',
    dateLabel: 'Oct 2025',
    verifyId: 'IBM-SQL-DS-441'
  },
  {
    id: 11,
    title: 'Python for AI & Dev',
    issuer: 'IBM',
    category: 'Data Science',
    issuedDate: '2025-08-11',
    dateLabel: 'Aug 2025',
    verifyId: 'IBM-PY-AI-01'
  },
  {
    id: 12,
    title: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    category: 'Business',
    issuedDate: '2026-03-01',
    dateLabel: 'In Progress',
    inProgress: true,
  }
];
