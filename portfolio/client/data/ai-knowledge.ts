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
  
  if (q.includes('project') || q.includes('work') || q.includes('build')) {
    return "Ayush has built 46+ projects including AI agents, full-stack apps, and ML systems. Check /projects for the full list!";
  }
  
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return "He works with Python, TypeScript, React, Next.js, FastAPI, LangGraph, PostgreSQL, and Supabase. His strength is AI/LLM integration.";
  }
  
  if (q.includes('experience') || q.includes('intern') || q.includes('work')) {
    return "He's interned at Yuva Intern (3 roles), been a Campus Ambassador at DTU E-Cell, and participated in IIT hackathons. See /experience!";
  }
  
  if (q.includes('contact') || q.includes('hire') || q.includes('collab')) {
    return "Reach Ayush at ayushjhaa1187@gmail.com or via the contact page. He's open to collaborations and part-time work!";
  }
  
  if (q.includes('iit') || q.includes('madras') || q.includes('education')) {
    return "He's pursuing BS in Data Science from IIT Madras (2025–2029), currently in his first year.";
  }

  // Topic specific follow-ups (if context exists)
  if (context === 'nexus' && (q.includes('more') || q.includes('it'))) {
    return "Nexus AI is an inter-campus knowledge network with decentralized karma. It is Ayush's largest engineering deployment to date.";
  }

  if (context === 'stocksense' && (q.includes('more') || q.includes('it'))) {
    return "StockSense uses LangGraph to orchestrate agents for deep market reasoning, eliminating simple GPT delusions in finance.";
  }

  return "I'm currently upgrading my responses. Email ayushjhaa1187@gmail.com or visit the contact page directly!";
};
