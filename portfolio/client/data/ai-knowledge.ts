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
  
  if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
    return `Ayush is proficient in ${aiKnowledge.skills.slice(0, 8).join(', ')} and more. He specializes in AI Agents and Full-Stack engineering.`;
  }
  
  if (q.includes('project') || q.includes('build') || q.includes('work')) {
    return `Ayush has built several notable projects including ${aiKnowledge.projects.map(p => p.name).join(', ')}. His flagship is StockSense, an autonomous AI agent for market analysis.`;
  }
  
  if (q.includes('education') || q.includes('iit') || q.includes('college') || q.includes('madras')) {
    return `Ayush is currently a BS in Data Science student at IIT Madras (Batch 2025-2029). He is an active member of Nilgiri House there.`;
  }
  
  if (q.includes('job') || q.includes('hire') || q.includes('available') || q.includes('contact')) {
    return aiKnowledge.profile.availability + " You can reach him directly at ayushjhaa1187@gmail.com or through the 'HACK ME' page.";
  }
  
  if (q.includes('intern') || q.includes('experience')) {
    return `Ayush has internship experience at Yuva Intern (Henry Harvin), Spaceborn, and Spacelance. He has worked across Data Science, Frontend, and Analytics roles.`;
  }

  if (q.includes('achievement') || q.includes('hackathon') || q.includes('rank') || q.includes('jury')) {
    return `Ayush was a Jury Member at IIT Kharagpur's AI-volution. He's also been a finalist at major IIT fests like Shaastra (IITM) and BECon (IIT Delhi).`;
  }

  return "I'm Ayush's AI assistant. I can help you with details about his AI projects (like StockSense), his background at IIT Madras, or his technical skills in Python and Next.js. What would you like to know?";
};
