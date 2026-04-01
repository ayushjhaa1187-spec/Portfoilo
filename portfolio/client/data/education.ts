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
      'Foundational & Diploma levels in Data Science',
      'Advanced Mathematics, Statistics, and Computing paradigms',
      'Active participant in House Technical events (Nilgiri House)'
    ],
    verified: true
  },
  {
    id: 2,
    institution: 'Delhi Technological University (DTU)',
    degree: 'E-Cell Campus Ambassador (Leadership Role)',
    period: 'Oct 2025 – Jan 2026',
    highlights: [
      'Represented E-Cell DTU across major technical clusters',
      'Orchestrated entrepreneurship and startup workshops',
      'Bridge between DTU and regional startup ecosystems'
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
    title: 'Udemy — Profile_bio',
    org: 'Udemy',
    date: 'Oct 2025'
  },
  {
    id: 2,
    title: 'Space Race Certificate',
    org: 'IEEE DTU',
    date: 'Oct 2025'
  },
  {
    id: 3,
    title: 'Data Science Specialization',
    org: 'Henry Harvin',
    date: 'Dec 2025'
  },
  {
    id: 4,
    title: 'Complete Web Development',
    org: 'Udemy',
    date: 'Nov 2025'
  }
];
