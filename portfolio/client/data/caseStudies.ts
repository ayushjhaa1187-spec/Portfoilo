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
    id: 'cs-skillbridge-iitb-2026',
    slug: 'skillbridge-ai-peer-learning',
    title: 'SkillBridge: AI-First Peer Learning Ecosystem',
    subtitle: 'Top 10 Finalist at DevFusion (IIT Bombay) featuring instant doubt solving and credit economics',
    event: 'DevFusion: The Developer Hackathon',
    eventBadge: '🏆 Top 10 Finalist',
    institution: 'IIT Bombay',
    date: '2026-04-10',
    problem: 'Traditional peer learning tools fail because learners hit bottlenecks waiting for responses, mentors lack incentive structures, and practice workflows are disconnected.',
    solution: 'Engineered an AI-first full-stack learning platform with instant multimodal doubt resolution, verified mentor booking, adaptive practice test engines, gamified reputation scores, and credit monetization logic.',
    impact: 'Recognized in the Top 10 among hundreds of national teams by pushing far beyond the initial 9-line hackathon brief into enterprise ed-tech architecture.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Supabase', 'OpenAI / LLMs', 'Node.js'],
    keyLearnings: [
      'Building with product depth and scalability beats building minimum demo prototypes.',
      'Integrating gamified reputation with credit economics drives genuine peer engagement.',
      'Clean separation between frontend ergonomics and full-stack AI orchestration.'
    ],
    linkedinImpressions: 1601,
    impressions: 1601,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    outcome: 'finalist',
    featured: true
  },
  {
    id: 'cs-bharat-innovates-2026',
    slug: 'bharat-innovates-france-accelerator',
    title: 'Deep-Tech Scale at Bharat Innovates (Nice, France)',
    subtitle: 'Connecting India’s premier deep-tech ecosystem with European enterprise and research partners',
    event: 'Bharat Innovates 2026',
    eventBadge: '🌍 Global Selection',
    institution: 'Nice, France',
    date: '2026-06-15',
    problem: 'Indian deep-tech innovations often struggle with cross-border pilot distribution, global regulatory validation, and international research bridges.',
    solution: 'Representing IIT Madras deep-tech spirit on a global stage alongside 120 startups and 15 premier institutions to structure international research collaborations and AI deployment pilots.',
    impact: 'Selected to pitch and establish research bridges with European venture accelerators and deep-tech consortia.',
    techStack: ['DeepTech Strategy', 'AI Governance', 'Global Pilot Design', 'Venture Scaling'],
    keyLearnings: [
      'Ideas need velocity, not just inspiration, to cross international boundaries.',
      'Global-first architecture and regulatory compliance must be designed on Day 1.',
      'Indian engineering in AI, education, and health is positioned for global-scale impact.'
    ],
    linkedinImpressions: 1369,
    impressions: 1369,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    outcome: 'winner',
    featured: true
  },
  {
    id: 'cs-neuromemory-iitg-2026',
    slug: 'neuromemory-conversational-persistence',
    title: '1,000-Turn AI Memory Persistence (Smallest.ai × IIT Guwahati)',
    subtitle: 'Engineering real-time hierarchical memory extraction and dynamic context injection',
    event: 'NeuroHack Challenge 2026',
    eventBadge: '⚡ AI Challenge Build',
    institution: 'IIT Guwahati & Smallest.ai',
    date: '2026-04-12',
    problem: 'Conversational LLM agents suffer catastrophic forgetting or massive latency degradation when conversations exceed 20+ turns.',
    solution: 'Built a real-time memory pipeline that extracts episodic and semantic entities, maintains vector persistence, and selectively injects salient tokens at sub-50ms inference.',
    impact: 'Successfully maintained contextual coherence and persona continuity across 1,000+ continuous conversational turns on Smallest.ai infrastructure.',
    techStack: ['Python', 'Smallest.ai API', 'FastAPI', 'Vector Stores', 'PyTorch'],
    keyLearnings: [
      'Dynamic memory compression is vital for token-budget efficiency.',
      'Sub-50ms retrieval requires aggressive vector indexing and caching.',
      'Voice-enabled agents demand zero-friction deployment stacks.'
    ],
    linkedinImpressions: 454,
    impressions: 454,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    outcome: 'finalist',
    featured: true
  },
  {
    id: 'cs-deal-room-iitd-2026',
    slug: 'the-deal-room-investment-pitch-iitd',
    title: 'Defending Capital Allocation Under Pressure: The Deal Room',
    subtitle: 'Multi-round VC simulation and startup investment defense at DMS IIT Delhi',
    event: 'Building India Inc. 2026',
    eventBadge: '💼 Top 30 Finalist',
    institution: 'IIT Delhi',
    date: '2026-03-20',
    problem: 'Founders often pitch from optimistic passion rather than stress-tested unit economics and downside risk mitigation.',
    solution: 'Developed a rigorous 3-tier investment framework evaluating founder-market fit, burn rate resilience, CAC/LTV multiples, and downside risk buffers.',
    impact: 'Ranked in the Top 30 after clearing the Finance Sprint, virtual capital round, and live jury cross-examination by DMS IIT Delhi faculty.',
    techStack: ['Financial Modeling', 'Unit Economics', 'Venture Capital Thesis', 'Scenario Stress Testing'],
    keyLearnings: [
      'Investing is about stress-testing assumptions and modeling worst-case downturns.',
      'Defending conviction requires transparent math, not gut feeling.',
      'VC simulation sharpens founder judgment.'
    ],
    linkedinImpressions: 259,
    impressions: 259,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    outcome: 'finalist',
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
    linkedinPostUrl: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/',
    outcome: 'finalist',
    featured: true
  }
];
