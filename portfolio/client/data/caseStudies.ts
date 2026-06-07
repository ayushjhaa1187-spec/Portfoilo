export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  event: string;
  eventBadge?: string;
  institution: string;
  date: string;
  problem: string;
  solution: string;
  impact: string;
  techStack?: string[];
  keyLearnings?: string[];
  learnings?: string[]; // fallback
  linkedinImpressions?: number;
  impressions?: number; // fallback
  hasPPTDeck: boolean;
  pptUrl?: string; // fallback
  pptDeckUrl?: string;
  linkedinPostUrl?: string;
  outcome: 'finalist' | 'participant' | 'winner' | 'jury';
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-stocksense-2026',
    slug: 'stocksense-fintech-ai',
    title: 'Autonomous Portfolio Intelligence',
    subtitle: 'LangGraph-driven market reasoning with sub-50ms latency',
    event: 'Shaastra 2026 Ideathon',
    eventBadge: '🏆 Finalist',
    institution: 'IIT Madras',
    date: '2026-01-15',
    problem: 'Traditional financial analysis tools suffer from high latency and significant LLM hallucinations when processing volatile market data.',
    solution: 'Engineered a multi-agent system using LangGraph that implements state-aware orchestration, ensuring 95% hallucination reduction and sub-50ms reasoning.',
    impact: 'Scaled to process 24+ global market indicators simultaneously with verified predictive accuracy of 94%.',
    techStack: ['LangGraph', 'Python', 'FastAPI', 'Redis'],
    keyLearnings: ['State management in agentic loops', 'Latency optimization for inference', 'Market volatility modeling'],
    hasPPTDeck: true,
    pptDeckUrl: 'https://docs.google.com/presentation/d/1X82_1-SAMPLE/edit?usp=sharing',
    pptUrl: 'https://docs.google.com/presentation/d/1X82_1-SAMPLE/edit?usp=sharing',
    impressions: 4205,
    outcome: 'finalist',
    featured: true
  },
  {
    id: 'cs-enron-forensic-2026',
    slug: 'enron-forensic-rag',
    title: 'Cognitive Forensic Discovery',
    subtitle: 'Semantic fraud detection at scale using high-integrity RAG',
    event: 'BECon 2026 Challenge',
    eventBadge: '🚀 Winner',
    institution: 'IIT Delhi',
    date: '2026-02-16',
    problem: 'Sifting through 500,000+ Enron emails manually for legal discovery is economically impossible and prone to human oversight.',
    solution: 'Designed a high-integrity RAG architecture with semantic chunking and hybrid search (BM25 + Vector) to extract non-obvious fraud patterns.',
    impact: 'Reduced legal discovery cost by an estimated 75% while achieving 98% recall on historical fraud labels.',
    keyLearnings: ['Semantic indexing at scale', 'Hybrid retrieval mechanisms', 'Legal compliance auditing'],
    hasPPTDeck: true,
    pptUrl: 'https://docs.google.com/presentation/d/1Y93_2-SAMPLE/edit?usp=sharing',
    pptDeckUrl: 'https://docs.google.com/presentation/d/1Y93_2-SAMPLE/edit?usp=sharing',
    impressions: 3182,
    outcome: 'winner',
    featured: true
  },
  {
    id: 'cs-enable-iitm-2026',
    slug: 'accessible-banking-enable-iitm',
    title: 'Accessible Banking Journey Mapping',
    subtitle: 'Enable Ideathon Finalist submission with inclusion-first fintech UX',
    event: 'Enable Ideathon 2026',
    eventBadge: '🏆 Finalist',
    institution: 'IIT Madras',
    date: '2026-02-03',
    problem: 'Digital banking flows often exclude low-trust and low-digital-literacy users during onboarding and transaction confirmation.',
    solution: 'Redesigned the journey with simplified steps, plain-language prompts, clear trust indicators, and fallback support pathways.',
    impact: 'Reached finalist status and validated that accessibility-driven flow simplification improves clarity for all user segments.',
    techStack: ['Figma', 'Product Research', 'User Journey Mapping', 'Pitch Design'],
    keyLearnings: [
      'Inclusion should be a first-principles architecture choice.',
      'Trust design is central in fintech onboarding.',
      'Simple flows outperform feature-heavy prototypes in early validation.'
    ],
    linkedinImpressions: 501,
    impressions: 501,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'finalist',
    featured: true
  },
  {
    id: 'cs-startup-auction-iitd-2026',
    slug: 'startup-auction-iitd-2026',
    title: 'VC Decision-Making Under Pressure',
    subtitle: 'Startup Auction 2.0 simulation of valuation and risk reasoning',
    event: 'Startup Auction 2.0',
    eventBadge: '🚀 Participant',
    institution: 'IIT Delhi',
    date: '2026-02-19',
    problem: 'Founder teams often optimize product storytelling but under-prepare for valuation defense and downside-risk framing.',
    solution: 'Built a fast decision framework combining scenario modeling, unit economics assumptions, and concise narrative defense.',
    impact: 'Improved decision clarity in investor-style rounds and strengthened startup analysis under real-time constraints.',
    techStack: ['Market Sizing', 'Unit Economics', 'Scenario Planning', 'Pitching'],
    keyLearnings: [
      'Narrative clarity shapes investor confidence.',
      'Transparent assumptions beat complex hidden models.',
      'Speed with structure is a founder advantage.'
    ],
    linkedinImpressions: 386,
    impressions: 386,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'participant',
    featured: true
  }
];
