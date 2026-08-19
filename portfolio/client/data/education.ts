export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  highlights: string[];
  logo?: string;
  verified: boolean;
}

export const education: Education[] = [
  {
    id: 1,
    institution: 'Indian Institute of Technology, Madras',
    degree: 'Bachelor of Science (BS) in Data Science & Applications',
    period: 'Jan 2025 – May 2029 (Expected)',
    highlights: [
      'Foundational & Diploma levels in Data Science & Machine Learning',
      'Applied Mathematics, Statistics, Linear Algebra, and Computing Paradigms',
      'Active participant in House Technical events (Nilgiri House) and Shaastra',
      'Representing IIT Madras across national IIT hackathons and research forums'
    ],
    verified: true
  },
  {
    id: 2,
    institution: 'ISRO — Indian Space Research Organisation',
    degree: 'START 2026 & Space Science Invited Modules',
    period: 'Feb 2026 – Present',
    highlights: [
      'Enrolled in ISRO internal LMS for advanced space science & remote sensing modules',
      'Training on satellite data analysis, climate monitoring, and space tech applications',
      'Interacting with space scientists through ISRO Invited Talks series'
    ],
    verified: true
  },
  {
    id: 3,
    institution: 'E-Cell IIT (BHU) Varanasi',
    degree: 'VC Scout Bootcamp & Startup Valuation',
    period: 'Jan 2026',
    highlights: [
      'Intensive training on venture capital investment frameworks and cap-table modeling',
      'Deal evaluation, founder-market fit analysis, and startup thesis construction'
    ],
    verified: true
  },
  {
    id: 4,
    institution: 'Delhi Technological University (DTU)',
    degree: 'Campus Leadership & InnoVault Innovation Sprint',
    period: 'Oct 2025 – Feb 2026',
    highlights: [
      'Represented E-Cell DTU across major northern technical clusters',
      'Prototyped 20-hour sprint project featured on Ministry of Education YUKTI Portal (NIR)'
    ],
    verified: true
  }
];

export interface Certification {
  id: number;
  title: string;
  org: string;
  date: string;
  id_url?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Bharat Innovates 2026 Selection (Nice, France)',
    org: 'Bharat Innovates & French Tech',
    date: 'Jun 2026'
  },
  {
    id: 2,
    title: 'DevFusion Top 10 Finalist',
    org: 'IIT Bombay',
    date: 'Apr 2026'
  },
  {
    id: 3,
    title: 'Elite Hack 1.0 Top 10 Finalist (7.4k+ Builders)',
    org: 'Elite Coders',
    date: 'Apr 2026'
  },
  {
    id: 4,
    title: 'The Deal Room Investment Pitch Finalist',
    org: 'DMS IIT Delhi',
    date: 'Mar 2026'
  },
  {
    id: 5,
    title: 'AI-volution Jury Member Certificate',
    org: 'GES 2026, IIT Kharagpur',
    date: 'Jan 2026'
  },
  {
    id: 6,
    title: 'Enable Ideathon Finalist',
    org: 'IIT Madras Shaastra',
    date: 'Feb 2026'
  },
  {
    id: 7,
    title: 'Google Cloud Digital Leader',
    org: 'Google Cloud',
    date: 'Jan 2026'
  },
  {
    id: 8,
    title: 'Advanced Machine Learning',
    org: 'Coursera',
    date: 'Jan 2026'
  },
  {
    id: 9,
    title: 'Prompt Engineering for LLMs',
    org: 'DeepLearning.AI',
    date: 'Dec 2025'
  },
  {
    id: 10,
    title: 'Space Race Certificate',
    org: 'IEEE DTU',
    date: 'Oct 2025'
  }
];
