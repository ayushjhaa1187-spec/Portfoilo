export interface Thought {
  id: string | number;
  quote: string;
  attribution: string;
  context: string;
  category: 'AI' | 'founder' | 'builder' | 'learning' | 'inclusion' | 'competition' | 'tech';
  linkedinImpressions?: number;
  featured: boolean;
}

export const thoughts: Thought[] = [
  {
    id: 't-pinns',
    quote: "Physics meets neural nets — not on slides, in real equations. When you embed conservation laws directly into deep learning, models stop hallucinating physical reality.",
    attribution: "AKJ",
    context: "CDS, Indian Institute of Science (IISc Bangalore) · July 2026",
    category: 'AI',
    linkedinImpressions: 34490,
    featured: true
  },
  {
    id: 't-france',
    quote: "Not every passport is stamped at the airport. Some are stamped by effort. Ideas don't need visas — they need velocity. Built in India, meant for the world.",
    attribution: "AKJ",
    context: "Bharat Innovates 2026, Nice, France · June 2026",
    category: 'founder',
    linkedinImpressions: 1369,
    featured: true
  },
  {
    id: 't-ropar',
    quote: "A guru doesn’t always stand at a blackboard. Sometimes, they change how you think. The best mentors don’t hand you answers — they make you capable of finding better questions.",
    attribution: "AKJ",
    context: "Vicharanashala (Lab for Education Design), IIT Ropar · July 2026",
    category: 'learning',
    linkedinImpressions: 1357,
    featured: true
  },
  {
    id: 't-skillbridge',
    quote: "We didn’t stop at what was asked. We didn’t build for 'just enough to demo.' We built with product depth, scalability, and enterprise-ready thinking in mind.",
    attribution: "AKJ",
    context: "DevFusion, IIT Bombay · April 2026",
    category: 'builder',
    linkedinImpressions: 1601,
    featured: true
  },
  {
    id: 't-elitehack',
    quote: "The code isn’t the hardest part of a hackathon. It’s the 24-hour decisions, trusting your teammate when things break at 3 AM, and building with someone, not just next to them.",
    attribution: "AKJ",
    context: "Elite Hack 1.0 (7.4k+ Builders) · April 2026",
    category: 'competition',
    linkedinImpressions: 1086,
    featured: true
  },
  {
    id: 't-dealroom',
    quote: "Investing isn’t about 'liking' an idea. It’s about stress-testing assumptions and modeling worst-case downturns. You can’t allocate capital on gut feel when someone asks: 'Show me the math.'",
    attribution: "AKJ",
    context: "The Deal Room, DMS IIT Delhi · March 2026",
    category: 'founder',
    linkedinImpressions: 259,
    featured: true
  }
];
