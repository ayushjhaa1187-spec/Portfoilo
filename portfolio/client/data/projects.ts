export interface Project {
  slug: string;
  title: string;
  category: 'AI Agents' | 'Full-Stack' | 'Hackathon' | 'Tools' | 'Data Science' | 'ML/AI' | 'Business';
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  metrics: {
    accuracy?: string;
    impact?: string;
    users?: string;
    speed?: string;
  };
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  caseStudy: {
    problem: string;
    solution: string;
    features: string[];
    results: string[];
  };
}

export const projects: Project[] = [
  {
    slug: 'nexus-ai',
    title: 'Nexus AI',
    category: 'AI Agents',
    shortDescription: 'Inter-campus knowledge network powered by agentic RAG and decentralized karma protocols.',
    fullDescription: 'A production-grade platform allowing students across campuses to list skills and engage in knowledge exchange, secured by a peer-to-peer reputation system.',
    techStack: ['Next.js', 'Supabase', 'OpenAI', 'LangChain', 'PostgreSQL', 'Tailwind'],
    metrics: { impact: 'P2P Reputation', speed: 'Live Real-time' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/EduSync',
    featured: true,
    caseStudy: {
      problem: 'Educational resource sharing is often siloed within single campuses, leading to a knowledge gap between students of different institutions.',
      solution: 'Developed a cross-institution knowledge network (formerly EduSync) using an agentic RAG system that bridges data silos and incentivizes sharing through a decentralized karma ledger.',
      features: [
        'Agentic RAG for intelligent resource discovery',
        'Decentralized Karma Ledger for reputation tracking',
        'Real-time P2P coordination nodes',
        'Secure multi-campus authentication suite'
      ],
      results: [
        'Pitched at 2+ major IIT entrepreneurship summits',
        'Facilitated 100+ simulated peer-to-peer knowledge exchanges',
        'Achieved <200ms latency in decentralized transaction logging'
      ]
    }
  },
  {
    slug: 'stocksense-agent',
    title: 'StockSense Agent',
    category: 'AI Agents',
    shortDescription: 'Autonomous AI agent for real-time stock market analysis and predictive reasoning.',
    fullDescription: 'Autonomous AI agent that aggregates real-time market data, performs sentiment analysis, and uses predictive modeling to identify actionable stock market trends.',
    techStack: ['Python', 'LLMs', 'LangGraph', 'Market APIs', 'AsyncIO', 'Pandas'],
    metrics: { impact: 'Real-time Analysis', speed: '50ms latency' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/stocksense-agent',
    featured: true,
    caseStudy: {
      problem: 'Retail investors struggle with high-frequency market noise and lack the compute power for deep reasoning over volatile data streams.',
      solution: 'Engineered a multi-agent orchestration framework using LangGraph that processes live candle data and social sentiment to provide reasoning-based market alerts.',
      features: [
        'State-aware multi-agent orchestration',
        'Hierarchical reasoning traces for alpha generation',
        'Low-latency data streaming pipeline',
        'Automated risk management protocols'
      ],
      results: [
        'Eliminated 95% of standard LLM hallucinations in financial context',
        'Stable 50ms processing latency for real-time tickers',
        'Validated against 2 years of historical market volatility'
      ]
    }
  },
  {
    slug: 'llm-pexperiment',
    title: 'LLM_PEXPERIMENT',
    category: 'AI Agents',
    shortDescription: 'Advanced prompt engineering and LLM evaluation framework.',
    fullDescription: 'A modular framework for benchmarking LLM responses across different prompt strategies and model parameters.',
    techStack: ['Python', 'OpenAI API', 'Hugging Face', 'Streamlit', 'Weights & Biases'],
    metrics: { accuracy: '96% benchmarks', impact: 'Optimized prompts for 12+ models' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/LLM_PEXPERIMENT',
    featured: true,
    caseStudy: {
      problem: 'Prompt engineering is often anecdotal, lacking a rigorous scientific framework for evaluating performance across varied model architectures.',
      solution: 'Built a systematic experimentation engine that benchmarks 100+ prompt-template variations against 12 model families simultaneously.',
      features: [
        'Automated prompt template cross-validation',
        'Real-time token and cost analytics dashboard',
        'W&B integration for training-run visualization',
        'Semantic similarity scoring for output consistency'
      ],
      results: [
        '96% accuracy on internal model evaluation benchmarks',
        '30% reduction in average token consumption per query',
        'Identified high-impact prompt patterns for Claude and GPT-4 families'
      ]
    }
  },
  {
    slug: 'sentinel-auth',
    title: 'Sentinel Auth',
    category: 'Tools',
    shortDescription: 'Advanced pattern-based security middleware for Node.js clusters.',
    fullDescription: 'Hardened auth system featuring anomaly detection, JWT rotation, and rate-limiting powered by Redis.',
    techStack: ['Node.js', 'Redis', 'Express', 'JWT', 'Sentinel'],
    metrics: { accuracy: '99% blocking', speed: 'Sub-ms overhead' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/sentinel-auth-middleware',
    featured: true,
    caseStudy: {
      problem: 'Standard authentication middlewares are vulnerable to brute-force and token hijacking in high-traffic microservice environments.',
      solution: 'Developed a Redis-backed security layer that implements JWT rotation and real-time anomaly detection to isolate suspicious actors.',
      features: [
        'Seamless JWT Refresh/Rotate cycles',
        'Redis-based distributed rate-limiting',
        'Pattern-based anomaly detection (brute-force defense)',
        'Zero-trust middleware architecture'
      ],
      results: [
        '99% success rate in blocking automated brute-force attempts',
        'Negligible sub-ms overhead on API response times',
        'Successfully isolated 5+ high-volume attack vectors during load testing'
      ]
    }
  },
  {
    slug: 'satellite-analysis',
    title: 'Satellite Analysis System',
    category: 'ML/AI',
    shortDescription: 'Computer vision models to classify satellite imagery for environmental monitoring.',
    fullDescription: 'Developed a comprehensive system using computer vision to analyze satellite imagery to detect environmental changes.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Satellite APIs', 'PostgreSQL', 'NumPy'],
    metrics: { accuracy: '92%', impact: 'Automated monitoring at scale' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/satellite-data-analysis',
    featured: true,
    caseStudy: {
      problem: 'Manual environmental monitoring of vast geographic areas is inefficient and prone to human oversight in deforestation detection.',
      solution: 'Constructed a CV pipeline using TensorFlow and OpenCV that automates terrestrial feature detection from high-resolution satellite feeds.',
      features: [
        'Multi-spectral image processing unit',
        'Automated deforestation classification model',
        'High-density change detection algorithm',
        'Geospatial data indexing with PostGIS'
      ],
      results: [
        '92% classification accuracy in varied atmospheric conditions',
        'Processing time reduced from weeks to minutes over large areas',
        'Identified critical deforestation trends in over 50 test regions'
      ]
    }
  },
  {
    slug: 'insight-weaver',
    title: 'Insight Weaver',
    category: 'Tools',
    shortDescription: 'Multi-modal data processing and visualization tool for complex datasets.',
    fullDescription: 'Aggregates structured and unstructured data to provide visual insights using NLP and graph networks.',
    techStack: ['Python', 'NLTK', 'NetworkX', 'Plotly', 'React'],
    metrics: { impact: 'Automated insight generation', speed: '3x faster' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/insight-weaver',
    featured: true,
    caseStudy: {
      problem: 'Unstructured data often sits unused because traditional analytics tools struggle to connect disparate text and graph nodes.',
      solution: 'Developed Insight Weaver to perform semantic analysis and graph-mapping on large document corpora.',
      features: [
        'NLP-based entity extraction',
        'Dynamic graph-network visualization',
        'Multi-modal data ingestion pipeline',
        'Real-time insight dashboard'
      ],
      results: [
        'Reduced manual data mapping time by 70%',
        'Successfully processed 10,000+ entries in test runs',
        'Visualized 500+ document relationships in real-time'
      ]
    }
  },
  {
    slug: 'enron-insights',
    title: 'Enron Insights',
    category: 'Data Science',
    shortDescription: 'Network analysis and fraud detection on the Enron email dataset.',
    fullDescription: 'Uses graph theory and statistical modeling to identify anomalies and key players in the Enron Corpus.',
    techStack: ['Python', 'Pandas', 'NetworkX', 'Matplotlib', 'Scikit-learn'],
    metrics: { impact: 'Detected 5 hidden hubs', accuracy: '88% flagging' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/enron-insights',
    featured: false,
    caseStudy: {
      problem: 'The Enron dataset is a massive, complex network of communications that hides patterns of collusion and fraud.',
      solution: 'Applied social network analysis (SNA) and centrality measures to map the communication graph and detect anomaly spikes.',
      features: [
        'Degree and Betweenness centrality mapping',
        'Temporal communication analysis',
        'Anomaly detection in email frequency',
        'Fraud-pattern identification algorithms'
      ],
      results: [
        'Identified 5 critical communication hubs previously unflagged',
        '88% accuracy in identifying high-risk actors',
        'Mapped entire executive communication tree'
      ]
    }
  },
  {
    slug: 'risk-radar',
    title: 'Risk Radar',
    category: 'ML/AI',
    shortDescription: 'Predictive risk assessment tool for operational bottlenecks.',
    fullDescription: 'Real-time dashboard for identifying operational risks using historical patterns and live triggers.',
    techStack: ['Python', 'FastAPI', 'Pandas', 'Statsmodels', 'Vue.js'],
    metrics: { impact: '20% downtime reduction', accuracy: '91%' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Risk-Radar',
    featured: true,
    caseStudy: {
      problem: 'Companies often react to operational failures after they happen, rather than predicting and preventing them.',
      solution: 'Built a predictive analytics engine that monitors live operational metrics and flags high-risk anomalies.',
      features: [
        'Predictive risk modeling (time-series)',
        'Real-time anomaly alerting system',
        'Historical bottleneck pattern matching',
        'Interactive risk-heat-map'
      ],
      results: [
        'Estimated 20% reduction in potential downtime',
        '91% accuracy across 300 test scenarios',
        'Real-time latency <100ms for alert triggers'
      ]
    }
  },
  {
    slug: 'frontend-odyssey',
    title: 'Frontend Odyssey',
    category: 'Full-Stack',
    shortDescription: 'Interactive learning platform for mastering modern web technologies.',
    fullDescription: 'A gamified experience for developers to learn React and CSS animations.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'TypeScript'],
    metrics: { users: '500+ registered', impact: 'Gamified learning' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/Frontend-Odyssey',
    featured: true,
    caseStudy: {
      problem: 'Developer onboarding involves steep learning curves for animation and advanced state management.',
      solution: 'Created a gamified quest-system that guides users through building progressive UI components.',
      features: [
        'Interactive quest-based UI modules',
        'Real-time code evaluation engine',
        'Progress tracking and badge system',
        'Community-shared component library'
      ],
      results: [
        'Onboarded 500+ developers in public beta',
        'High engagement scores in CSS-animation modules',
        'Reduced "tutorial hell" churn for 60% of test users'
      ]
    }
  },
  {
    slug: 'hostel-issue-tracker',
    title: 'Hostel Issue Tracker',
    category: 'Hackathon',
    shortDescription: 'Real-time complaint management system for residential campuses.',
    fullDescription: 'Built during a 24h hackathon to streamline maintenance requests in university hostels.',
    techStack: ['React', 'Express', 'MongoDB', 'Socket.io', 'PWA'],
    metrics: { impact: 'Trial Adoption', speed: 'Real-time' },
    githubUrl: 'https://github.com/ayushjhaa1187-spec/hostel-issue-tracker',
    featured: true,
    caseStudy: {
      problem: 'Hostel students face delays in maintenance fixing due to manual, paper-based reporting systems.',
      solution: 'Developed a real-time mobile-first tracker with push-notifications for maintenance staff.',
      features: [
        'Real-time status updates with Socket.io',
        'Mobile-responsive Progressive Web App (PWA)',
        'Automated priority ticket leveling',
        'Admin dashboard for warden oversight'
      ],
      results: [
        'Winner of Regional University Hackathon',
        'Reduced issue resolution time by 50% in trial hostel',
        'Zero-downtime during peak report periods'
      ]
    }
  }
];
