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
    title: 'Jury Member — AI-volution',
    event: 'GES 2026, IIT Kharagpur',
    org: 'IIT Kharagpur',
    date: 'Jan 2026',
    description: 'Invited as a jury for assessing AI-centric startup prototypes and innovative solutions.',
    type: 'jury',
    verified: true,
    badge: '⚖️'
  },
  {
    id: 2,
    title: "Finalist — Enable Ideathon",
    event: "E-Cell IIT Madras × Shaastra 2026",
    org: "IIT Madras",
    date: "2026",
    description: "Deep-tech finalist in the Shaastra summit for innovative agentic AI workflows.",
    type: "hackathon",
    verified: true,
    badge: "🏆"
  },
  {
    id: 3,
    title: "Catalyst Co-Founder",
    event: "BECon 2026, IIT Delhi",
    org: "IIT Delhi",
    date: "2026",
    description: "Top contender in the entrepreneurship challenge, pitching solutions for scalable AI models.",
    type: "competition",
    verified: true,
    badge: "🚀"
  },
  {
    id: 4,
    title: "Campus Ambassador",
    event: "E-Summit IIT Roorkee",
    org: "IIT Roorkee",
    date: "2025",
    description: "Represented E-Summit IIT Roorkee, coordinating outreach and industrial tie-ups.",
    type: "ambassador",
    verified: true,
    badge: "📣"
  },
  {
    id: 5,
    title: "Campus Ambassador",
    event: "Techfest IIT Bombay",
    org: "IIT Bombay",
    date: "2025",
    description: "Strategic outreach ambassador for Techfest, Asia's largest science and technology festival.",
    type: "ambassador",
    verified: true,
    badge: "📣"
  },
  {
    id: 6,
    title: "Participant — Changethon",
    event: "National Social Summit, IIT Roorkee",
    org: "IIT Roorkee",
    date: "2025",
    description: "Developed technology-driven solutions for social impact challenges at the NSS.",
    type: "hackathon",
    verified: true,
    badge: "🌱"
  }
];
