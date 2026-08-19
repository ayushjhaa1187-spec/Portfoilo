export interface Achievement {
  id: number;
  title: string;
  event: string;
  org: string;
  date: string;
  description: string;
  type: 'jury' | 'hackathon' | 'competition' | 'ambassador' | 'Recognition' | 'Hackathon' | 'Leadership' | 'Certification' | 'Ambassador';
  verified: boolean;
  badge: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Selected for Bharat Innovates 2026 (Nice, France)',
    event: 'Global Deep-Tech Accelerator 2026',
    org: 'Bharat Innovates × French Tech Ecosystem',
    date: '2026',
    description: 'Selected among top deep-tech builders across 15 premier Indian institutions and 120 startups to represent India on a global stage in Nice, France.',
    type: 'Recognition',
    verified: true,
    badge: '🌍'
  },
  {
    id: 2,
    title: 'Top 10 Finalist — DevFusion Hackathon',
    event: 'DevFusion: The Developer Hackathon',
    org: 'IIT Bombay',
    date: '2026',
    description: 'Shortlisted in the Top 10 with SkillBridge — an AI-first full-stack learning platform featuring instant doubt-solving, adaptive testing, and revenue logic.',
    type: 'hackathon',
    verified: true,
    badge: '🏆'
  },
  {
    id: 3,
    title: 'Top 10 Finalist — Elite Hack 1.0 (7.4k+ Builders)',
    event: 'Elite Hack 1.0',
    org: 'Elite Coders',
    date: '2026',
    description: 'Finished in the Top 10 out of 7,400+ national participants by shipping a full-stack event management platform live within 48 hours.',
    type: 'hackathon',
    verified: true,
    badge: '⚡'
  },
  {
    id: 4,
    title: 'Solo Finalist — HackFest 2.0',
    event: '24-Hour Global Online Hackathon',
    org: 'GDG Cloud New Delhi × Turgon AI',
    date: '2026',
    description: 'Competed solo and cleared consecutive rounds into the Grand Finals with an autonomous BRD Generation Agent.',
    type: 'hackathon',
    verified: true,
    badge: '🤖'
  },
  {
    id: 5,
    title: 'Grand Finale Qualifier — Brahmastra Policy Competition',
    event: 'Policy Conclave ’26',
    org: 'IIT Kanpur',
    date: '2026',
    description: 'Qualified straight into the offline Grand Finale at IIT Kanpur with an implementable data-driven public governance framework.',
    type: 'competition',
    verified: true,
    badge: '🏛️'
  },
  {
    id: 6,
    title: 'Jury Member — AI-volution',
    event: 'GES 2026, IIT Kharagpur',
    org: 'IIT Kharagpur × Ashoka Changemakers',
    date: 'Jan 2026',
    description: 'Invited as jury to evaluate deep-tech AI startups on technical depth, ethical alignment, and deployment viability.',
    type: 'jury',
    verified: true,
    badge: '⚖️'
  },
  {
    id: 7,
    title: 'Top 30 Finalist — The Deal Room Investment Challenge',
    event: 'Building India Inc. 2026',
    org: 'DMS IIT Delhi × Finazards',
    date: '2026',
    description: 'Surviving multi-round VC allocation sprint and defending startup valuation theses in front of IIT Delhi DMS faculty.',
    type: 'competition',
    verified: true,
    badge: '💼'
  },
  {
    id: 8,
    title: 'Rank 27 — CaseQuest ’26',
    event: 'National Case Competition',
    org: 'DMS IIT Delhi',
    date: '2026',
    description: 'Secured Rank 27 among hundreds in Round 1 rapid business strategy and financial modeling sprint.',
    type: 'competition',
    verified: true,
    badge: '📊'
  },
  {
    id: 9,
    title: 'Finalist — Enable Ideathon',
    event: 'Shaastra 2026',
    org: 'E-Cell IIT Madras',
    date: '2026',
    description: 'Finalist for accessible banking journey mapping and inclusive fintech UX architecture.',
    type: 'hackathon',
    verified: true,
    badge: '🚀'
  }
];
