export interface Thought {
  id: string;
  quote: string;
  context: string;
  category: 'founder' | 'builder' | 'learning' | 'inclusion' | 'competition';
  linkedinImpressions?: number;
  featured: boolean;
}

export const thoughts: Thought[] = [
  {
    id: 't-01',
    quote: "I don't compete at hackathons to win. I compete to watch my ideas die...",
    context: 'Changethon, IIT Roorkee · March 2026',
    category: 'competition',
    linkedinImpressions: 1133,
    featured: true
  },
  {
    id: 't-02',
    quote: 'Your startup idea sounds brilliant at 2 AM. It dies at 2 PM when a judge asks...',
    context: 'Startup Auction 2.0, IIT Delhi · February 2026',
    category: 'founder',
    linkedinImpressions: 386,
    featured: true
  },
  {
    id: 't-03',
    quote: "Networking isn't about collecting LinkedIn connections...",
    context: 'Founder Journey Post · March 2026',
    category: 'learning',
    linkedinImpressions: 382,
    featured: true
  },
  {
    id: 't-04',
    quote: "The best founders aren't the ones with perfect pitch decks...",
    context: 'Founder Journey Post · March 2026',
    category: 'founder',
    featured: true
  },
  {
    id: 't-05',
    quote: "I'm still a 2nd semester student. But my LinkedIn looks like a 3rd-year founder's résumé...",
    context: 'Founder Journey Post · March 2026',
    category: 'builder',
    featured: true
  },
  {
    id: 't-06',
    quote: 'True inclusion means designing for the most excluded users first...',
    context: 'Enable Ideathon, IIT Madras · February 2026',
    category: 'inclusion',
    linkedinImpressions: 501,
    featured: true
  },
  {
    id: 't-07',
    quote: 'The gap between a working demo and a deployable solution is massive...',
    context: 'Changethon, IIT Roorkee · March 2026',
    category: 'builder',
    featured: true
  },
  {
    id: 't-08',
    quote: "Knowledge expansion doesn't come from courses...",
    context: 'Founder Journey Post · March 2026',
    category: 'learning',
    featured: true
  }
];
