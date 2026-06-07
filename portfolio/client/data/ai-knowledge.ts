export const aiKnowledge = {
  profile: {
    name: "Ayush Kumar Jha",
    role: "AI Engineer & Full-Stack Developer",
    education: "BS in Data Science & Applications from IIT Madras",
    location: "India / Remote",
    motto: "Engineering the interface of science and business.",
    availability: "Available for high-impact AI/ML projects and Full-Stack roles (Freelance/Full-time)."
  },
  skills: [
    "Python", "TensorFlow", "PyTorch", "LangGraph", "LLMs", "Generative AI",
    "Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB",
    "Computer Vision", "Satellite Data Analysis", "Fraken-stack development"
  ],
  projects: [
    {
      name: "StockSense Agent",
      description: "Autonomous AI agent for stock analysis using LangGraph and LLMs.",
      highlights: ["Real-time data feeds", "Predictive reasoning", "Agentic workflows"]
    },
    {
      name: "LLM_PEXPERIMENT",
      description: "Benchmarking prompt engineering across 12+ models.",
      highlights: ["96% accuracy benchmarks", "Weights & Biases integration"]
    },
    {
      name: "Satellite Analysis",
      description: "Environmental monitoring using computer vision on satellite imagery.",
      highlights: ["92% accuracy", "Automated detection of deforestation"]
    },
    {
      name: "Insight Weaver",
      description: "Multi-modal data visualization and analysis tool.",
      highlights: ["3x faster insights", "Graph theory application"]
    }
  ],
  experience: [
    "Student @ IIT Madras (Jan 2026 – Present)",
    "Nilgiri House Member @ IITM",
    "Multi-rotation Intern @ Yuva Intern (Data Science, Analytics, Frontend)",
    "Intern @ Spaceborn & Spacelance (Space data ML)"
  ],
  achievements: [
    "Jury Member @ AI-volution, IIT Kharagpur (GES 2026)",
    "Finalist @ Shaastra (IITM), BECon (IITD), Roorkee fests",
    "Campus Ambassador @ DTU & Premier IITs"
  ]
};

export const getAIResponse = (query: string, context?: string): string => {
  const q = query.toLowerCase();
  
  // Specific Project Contexts
  if (context === 'nexus' || q.includes('nexus')) {
    return "Nexus AI is an inter-campus knowledge network leveraging agentic RAG and decentralized karma. It bridges silos between students of different institutions with sub-200ms latency. Check /projects/nexus-ai for the full case study.";
  }

  if (context === 'stocksense' || q.includes('stocksense')) {
    return "StockSense uses LangGraph for multi-agent market reasoning. It eliminated 95% of standard LLM hallucinations in financial analysis by implementing state-aware orchestration. Verified 50ms processing latency.";
  }

  if (context === 'sentinel' || q.includes('sentinel')) {
    return "Sentinel Auth is a high-integrity Node.js security layer with anomaly detection and Redis-backed rate limiting. It achieves 99% accuracy in blocking automated brute-force attempts with sub-ms overhead.";
  }

  // Educational Context
  if (q.includes('iit') || q.includes('madras') || q.includes('education') || q.includes('college')) {
    return "Ayush is pursuing a BS in Data Science at IIT Madras (2025–2029). He focuses on Applied Machine Learning, Statistics, and High-Performance Computing while participating in the Nilgiri House technical community.";
  }

  // Professional / Experience
  if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('yuva')) {
    return "Ayush has completed high-impact internships at Yuva Intern (Data Analyst, Frontend dev) and MTF Institute (Alumni Trainee). He's currently a Jury Member for AI-volution at IIT Kharagpur's GES 2026. View the full timeline at /experience.";
  }

  // Achievements / Recognition
  if (q.includes('achievement') || q.includes('hackathon') || q.includes('award') || q.includes('winner')) {
    return "Key achievements include: Jury Member at IIT Kharagpur GES 2026, Finalist at IIT Madras Shaastra Ideathon, Finalist at IIT Delhi BECon, and Campus Ambassador at Techfest IIT Bombay. View the badge grid at /achievements.";
  }

  // Certifications
  if (q.includes('cert') || q.includes('certification') || q.includes('verify') || q.includes('credential')) {
    return "Ayush holds 11+ verified credentials, including honors from IEEE DTU (Space Race), and professional certifications in Data Science, Cloud (GCP/AWS), and advanced LLM engineering from IBM and Vercel. Inspect them at /certifications.";
  }

  // Skills / Tech Stack
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
    return "Core stack: Python (TensorFlow/PyTorch/LangGraph), TypeScript (React/Next.js/Node), and Cloud (Supabase/PostgreSQL/AWS). He specializes in merging high-fidelity UX with reasoning-based AI infrastructure.";
  }

  // Contact / Availability
  if (q.includes('contact') || q.includes('hire') || q.includes('collab') || q.includes('email') || q.includes('linkedin')) {
    return "Reach Ayush at ayushjhaa1187@gmail.com or via LinkedIn. He is currently looking for high-impact AI/ML collaborations and research partnerships. Protocol starts at /contact.";
  }

  // General Project Query
  if (q.includes('project') || q.includes('build') || q.includes('repo')) {
    return "Ayush has architected 46+ repositories ranging from satellite analysis systems to decentralized reputation ledgers. 9 priority projects feature deep-dive case studies at /projects.";
  }

  return "I am currently processing your request. You can ask about his IIT Madras background, specific AI projects like StockSense, his 11+ certifications, or his experience as a Jury Member at IIT Kharagpur. System Ready.";
};
