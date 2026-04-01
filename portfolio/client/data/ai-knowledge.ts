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

export const getAIResponse = (query: string): string => {
  const q = query.toLowerCase();
  
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('expert') || q.includes('language')) {
    return `Ayush is a "Fraken-stack" expert proficient in ${aiKnowledge.skills.slice(0, 10).join(', ')}. He specializes in Python for AI/ML and Next.js for high-fidelity frontends.`;
  }
  
  if (q.includes('nexus') || q.includes('edusync')) {
    return `Nexus AI (formerly EduSync) is Ayush's flagship inter-campus knowledge network. It uses agentic RAG and a P2P karma protocol to facilitate skill sharing between students across IITs.`;
  }

  if (q.includes('stocksense') || q.includes('market') || q.includes('stock') || q.includes('finance')) {
    return `StockSense is an autonomous agent Ayush built using LangGraph. It handles real-time stock analysis with <50ms latency, utilizing predictive reasoning to identify market trends.`;
  }

  if (q.includes('sentinel') || q.includes('auth') || q.includes('security')) {
    return `Sentinel Auth is a hardened security middleware for Node.js. It features JWT rotation, Redis-backed rate limiting, and anomaly detection to secure production APIs.`;
  }

  if (q.includes('satellite') || q.includes('vision') || q.includes('cv') || q.includes('space')) {
    return `Ayush has extensive experience with Satellite Data Analysis, having built computer vision models with 92% accuracy for environmental monitoring during his Spaceborn internship.`;
  }
  
  if (q.includes('project') || q.includes('build') || q.includes('work') || q.includes('repo')) {
    return `Ayush has over 46 technical repositories. Key highlights include Nexus AI, StockSense, Sentinel Auth, and the Satellite Monitoring system. Which one should we dive into?`;
  }
  
  if (q.includes('education') || q.includes('iit') || q.includes('college') || q.includes('madras') || q.includes('iitm') || q.includes('degree')) {
    return `Ayush is currently pursuing a BS in Data Science at IIT Madras (Batch 2029). He is part of Nilgiri House and actively contributes to the campus technical ecosystem.`;
  }
  
  if (q.includes('job') || q.includes('hire') || q.includes('available') || q.includes('contact') || q.includes('resume')) {
    return `${aiKnowledge.profile.availability} You can reach him at ayushjhaa1187@gmail.com or find more details on the /experience page.`;
  }
  
  if (q.includes('intern') || q.includes('experience') || q.includes('yuva') || q.includes('harvin')) {
    return `His experience spans roles at Yuva Intern (Data Science & Web Dev), Spaceborn (ML), and Spacelance (Analytics). He excels at turning raw data into production infrastructure.`;
  }

  if (q.includes('achievement') || q.includes('hackathon') || q.includes('rank') || q.includes('jury') || q.includes('award')) {
    return `Notable achievements: Served as a Jury Member at IIT Kharagpur (GES 2026), Finalist at Shaastra (IITM), BECon (IITD), and multiple hackathon wins.`;
  }

  if (q.includes('hi') || q.includes('hello') || q.includes('greeting') || q.includes('who are you')) {
    return `Greeting, [AUTHORIZED_VISITOR]. I am AURA, an autonomous agent cluster representing Ayush. I can provide technical specs on his AI projects, IITM background, or engineering stack.`;
  }

  return "I'm Ayush's engineering assistant. I can fetch data on his proprietary projects (Nexus, StockSense, Sentinel), his IIT Madras tenure, or his technical capabilities in AI/ML. Give me a keyword to process.";
};
