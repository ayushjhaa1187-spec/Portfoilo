export interface Achievement {
  id: number;
  title: string;
  org: string;
  date: string;
  description: string;
  type: 'Recognition' | 'Hackathon' | 'Leadership';
  verified: boolean;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Jury Member — AI-volution',
    org: 'GES 2026, IIT Kharagpur',
    date: 'Jan 2026',
    description: 'Invited as a jury for assessing AI-centric startup prototypes and innovative solutions during the Global Entrepreneurship Summit.',
    type: 'Recognition',
    verified: true
  },
  {
    id: 2,
    title: 'Co-Founder Catalyst Finalist',
    org: 'BECon 2026, IIT Delhi',
    date: 'Jan 2026',
    description: 'Top contender in the entrepreneurship challenge, pitching solutions for scalable AI-driven business models.',
    type: 'Hackathon',
    verified: true
  },
  {
    id: 3,
    title: 'E-Cell Campus Ambassador Finalist',
    org: 'Delhi Technological University',
    date: 'Oct 2025 – Jan 2026',
    description: 'Recognized for excellent outreach and community engagement as an ambassador for DTU’s E-Cell.',
    type: 'Leadership',
    verified: true
  },
  {
    id: 4,
    title: 'Space Race Certifications',
    org: 'IEEE DTU — Octoberfest',
    date: 'Oct 2025',
    description: 'Advanced certifications in space exploration data science and processing challenges.',
    type: 'Recognition',
    verified: true
  }
];
