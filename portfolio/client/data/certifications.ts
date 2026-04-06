export type CertCategory = 'hackathon' | 'competition' | 'jury' | 'program' | 'course';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  month: number;
  year: number;
  category: CertCategory;
  institution?: string;
  description: string;
  keyLearnings: string[];
  linkedinPostUrl?: string;
  linkedinImpressions?: number;
  certificateImagePath?: string;
  hasPPTDeck?: boolean;
  pptDeckUrl?: string;
  featured: boolean;
}

export const certifications: Certification[] = [
  {
    id: 'enable-ideathon-finalist-2026',
    title: 'Enable Ideathon Finalist',
    issuer: 'E-Cell IIT Madras × Shaastra 2026',
    date: '2026-02-03',
    month: 2,
    year: 2026,
    category: 'hackathon',
    institution: 'IIT Madras',
    description:
      'Finalist recognition for presenting an accessible banking concept focused on inclusive fintech UX and trust-first onboarding for underserved users.',
    keyLearnings: [
      'Accessibility must be designed from the first screen, not patched later.',
      'Compliance constraints can become product differentiators in fintech.',
      'Judge feedback is strongest when tied to measurable user outcomes.',
      'Prototype clarity mattered more than flashy demos.'
    ],
    linkedinImpressions: 501,
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/enable-ideathon-finalist.jpg',
    hasPPTDeck: true,
    featured: true
  },
  {
    id: 'cofounder-catalyst-iitd-2026',
    title: 'Co-Founder Catalyst',
    issuer: 'BECon 2026',
    date: '2026-02-16',
    month: 2,
    year: 2026,
    category: 'competition',
    institution: 'IIT Delhi',
    description:
      'Recognized in the Co-Founder Catalyst track for validating startup assumptions under investor-style questioning and market sizing constraints.',
    keyLearnings: [
      'Founder-market fit needs stronger proof than product excitement.',
      'Distribution strategy is often the most fragile part of early startups.',
      'Simple economics models build confidence during fast jury rounds.'
    ],
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/cofounder-catalyst-becon.jpg',
    featured: true
  },
  {
    id: 'changethon-iitr-2026',
    title: 'Changethon Participant',
    issuer: 'NSS National Social Summit',
    date: '2026-03-11',
    month: 3,
    year: 2026,
    category: 'hackathon',
    institution: 'IIT Roorkee',
    description:
      'Participated in a social innovation sprint and stress-tested ideas through repeated mentor critiques, user reality checks, and execution constraints.',
    keyLearnings: [
      'Fast failure cycles improved idea quality dramatically.',
      'A demo can work while the deployment plan still fails.',
      'Social impact ideas require deep last-mile context.'
    ],
    linkedinImpressions: 1133,
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/changethon-iit-roorkee.jpg',
    hasPPTDeck: true,
    featured: true
  },
  {
    id: 'bize-quiz-4-iitd-2026',
    title: 'Biz-E Quiz 4.0',
    issuer: 'BECon 2026',
    date: '2026-02-18',
    month: 2,
    year: 2026,
    category: 'competition',
    institution: 'IIT Delhi',
    description:
      'Participated in business strategy quiz rounds focused on startup finance, market signals, and scenario-based decision making.',
    keyLearnings: [
      'Speed under uncertainty is a core founder skill.',
      'Business frameworks are only useful when contextualized quickly.',
      'Pattern recognition from case studies boosts strategic clarity.'
    ],
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/bize-quiz-4.jpg',
    featured: false
  },
  {
    id: 'startup-auction-iitd-2026',
    title: 'Startup Auction 2.0',
    issuer: 'BECon 2026',
    date: '2026-02-19',
    month: 2,
    year: 2026,
    category: 'competition',
    institution: 'IIT Delhi',
    description:
      'Completed a VC simulation format where teams evaluated startup opportunities and defended pricing and risk assumptions in real-time.',
    keyLearnings: [
      'Narrative quality influences perceived startup value.',
      'Unit economics discipline creates stronger pitch confidence.',
      'Investor Q&A exposes weak assumptions immediately.'
    ],
    linkedinImpressions: 386,
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/startup-auction-2.jpg',
    featured: true
  },
  {
    id: 'aivolution-jury-iitkgp-2026',
    title: 'AI-volution Jury Member',
    issuer: 'GES 2026',
    date: '2026-01-28',
    month: 1,
    year: 2026,
    category: 'jury',
    institution: 'IIT Kharagpur',
    description:
      'Invited as a jury member for evaluating AI-focused startup and product submissions across innovation, technical depth, and execution readiness.',
    keyLearnings: [
      'Strong teams connect model design with business viability.',
      'Judging sharpens evaluation of clarity, feasibility, and impact.',
      'The best teams anticipate failure modes before being asked.'
    ],
    linkedinPostUrl: 'https://www.linkedin.com/',
    certificateImagePath: '/certificates/aivolution-jury.jpg',
    featured: true
  },
  {
    id: 'prompt-engineering-llms',
    title: 'Prompt Engineering for LLMs',
    issuer: 'DeepLearning.AI',
    date: '2025-12-09',
    month: 12,
    year: 2025,
    category: 'course',
    description: 'Completed coursework on prompt decomposition, evaluation loops, and practical patterns for reliable LLM output quality.',
    keyLearnings: [
      'Structured prompts reduce ambiguity in model responses.',
      'Evaluation criteria should be explicit and testable.',
      'Prompt chaining improves complex multi-step tasks.'
    ],
    featured: false
  },
  {
    id: 'langchain-llm-apps',
    title: 'LangChain for LLM Applications',
    issuer: 'DeepLearning.AI',
    date: '2025-12-20',
    month: 12,
    year: 2025,
    category: 'course',
    description: 'Hands-on course focused on retrieval pipelines, tool use, and robust orchestration of LLM workflows in production-like contexts.',
    keyLearnings: [
      'Context retrieval quality defines downstream response quality.',
      'Tool orchestration should include explicit fallbacks.',
      'Observability is mandatory for debugging agent behavior.'
    ],
    featured: false
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2026-01-21',
    month: 1,
    year: 2026,
    category: 'course',
    description: 'Foundational cloud certification covering architecture basics, pricing models, reliability, and operational best practices.',
    keyLearnings: [
      'Cloud cost awareness must be part of design decisions.',
      'Shared responsibility model affects security planning.',
      'Service selection should match workload patterns.'
    ],
    featured: false
  },
  {
    id: 'google-cloud-digital-leader',
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: '2026-01-15',
    month: 1,
    year: 2026,
    category: 'course',
    description: 'Credential focused on cloud transformation, value framing, and architecture tradeoffs for data and AI workloads.',
    keyLearnings: [
      'Business outcomes should guide technical architecture choices.',
      'Cloud maturity is organizational, not purely technical.',
      'AI initiatives need strong data governance foundations.'
    ],
    featured: false
  }
];
