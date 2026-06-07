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
    id: 1,
    quote: "Autonomous intelligence is not about replicating human intuition, but about engineering the architectural safeguards to scale it.",
    attribution: "AKJ",
    context: "On Agentic Workflows",
    category: 'AI',
    featured: true
  },
  {
    id: 2,
    quote: "The value of a system is proportional to the number of non-obvious insights it extracts from standard data streams.",
    attribution: "AKJ",
    context: "On Data Forensics",
    category: 'tech',
    featured: true
  },
  {
    id: 't-01',
    quote: "I don't compete at hackathons to win. I compete to watch my ideas die. Every weak assumption that collapses in a high-pressure room saves me from wrong execution later.",
    attribution: "AKJ",
    context: 'Changethon, IIT Roorkee · March 2026',
    category: 'competition',
    linkedinImpressions: 1133,
    featured: true
  },
  {
    id: 't-02',
    quote: "Your startup idea sounds brilliant at 2 AM. It dies at 2 PM when a judge asks one sharp question on unit economics.",
    attribution: "AKJ",
    context: 'Startup Auction 2.0, IIT Delhi · February 2026',
    category: 'founder',
    linkedinImpressions: 386,
    featured: true
  },
  {
    id: 't-06',
    quote: "True inclusion means designing for the most excluded users first, not adding accessibility as a final sprint task.",
    attribution: "AKJ",
    context: 'Enable Ideathon, IIT Madras · February 2026',
    category: 'inclusion',
    linkedinImpressions: 501,
    featured: true
  }
];
