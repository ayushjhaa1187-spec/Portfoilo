export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  institution: string;
  date: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  keyLearnings: string[];
  linkedinImpressions: number;
  hasPPTDeck: boolean;
  pptDeckUrl?: string;
  linkedinPostUrl?: string;
  outcome: 'finalist' | 'participant' | 'winner' | 'jury';
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-enable-iitm-2026',
    title: 'Accessible Banking Journey Mapping',
    subtitle: 'Enable Ideathon Finalist submission with inclusion-first fintech UX',
    event: 'Enable Ideathon 2026',
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
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'finalist',
    featured: true
  },
  {
    id: 'cs-startup-auction-iitd-2026',
    title: 'VC Decision-Making Under Pressure',
    subtitle: 'Startup Auction 2.0 simulation of valuation and risk reasoning',
    event: 'Startup Auction 2.0',
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
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'participant',
    featured: true
  },
  {
    id: 'cs-changethon-iitr-2026',
    title: 'Fail-Fast Validation in Social Innovation',
    subtitle: 'Changethon sprint focused on real-world constraints over polished demos',
    event: 'Changethon, NSS Summit',
    institution: 'IIT Roorkee',
    date: '2026-03-11',
    problem: 'Social impact ideas frequently fail during deployment because assumptions are not tested early against field realities.',
    solution: 'Ran iterative critique cycles, reduced feature complexity, and prioritized deployability over presentation polish.',
    impact: 'Generated the strongest public engagement among related posts and refined long-term founder operating principles.',
    techStack: ['Problem Framing', 'Rapid Prototyping', 'Mentor Feedback Loops'],
    keyLearnings: [
      'Fast failure prevents slow startup drift.',
      'Deployment readiness is different from demo readiness.',
      'Collaboration quality determines iteration speed.'
    ],
    linkedinImpressions: 1133,
    hasPPTDeck: true,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'participant',
    featured: true
  },
  {
    id: 'cs-aivolution-jury-kgp-2026',
    title: 'Evaluating AI Startup Readiness as Jury',
    subtitle: 'Assessment framework built through AI-volution judging at GES 2026',
    event: 'AI-volution, GES 2026',
    institution: 'IIT Kharagpur',
    date: '2026-01-28',
    problem: 'Many early-stage AI teams struggle to connect technical novelty with operational and business viability.',
    solution: 'Used a rubric across problem clarity, technical depth, user impact, and execution realism to evaluate submissions fairly.',
    impact: 'Developed sharper product judgment and repeatable criteria for assessing startup-quality AI work.',
    techStack: ['Evaluation Rubrics', 'AI Product Strategy', 'Pitch Analysis'],
    keyLearnings: [
      'Strong teams make tradeoffs explicit.',
      'Technical depth must map to user value.',
      'Feasibility signals matter more than buzzwords.'
    ],
    linkedinImpressions: 264,
    hasPPTDeck: false,
    linkedinPostUrl: 'https://www.linkedin.com/',
    outcome: 'jury',
    featured: false
  }
];
