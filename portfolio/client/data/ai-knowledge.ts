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
  const isGenericFollowUp = q.length < 20 && (q.includes('more') || q.includes('elaborate') || q.includes('detail') || q.includes('it') || q.includes('tell me'));

  // Priority 1: Specific Topic Detection
  if (q.includes('nexus') || q.includes('edusync') || (isGenericFollowUp && context === 'nexus')) {
    return `Nexus AI is Ayush's most complex engineering project—an inter-campus RAG network with decentralized reputation. It solves the "siloed campus data" problem and has been pitched at major IIT fests. Is there a specific technical detail you're interested in?`;
  }

  if (q.includes('stocksense') || q.includes('market') || q.includes('stock') || q.includes('finance') || (isGenericFollowUp && context === 'stocksense')) {
    return `StockSense uses LangGraph to orchestrate multiple LLM agents for deep-divergence market analysis. It features real-time streaming and a reasoning trace that eliminates standard GPT hallucinations in financial data.`;
  }

  if (q.includes('sentinel') || q.includes('auth') || q.includes('security') || (isGenericFollowUp && context === 'sentinel')) {
    return `Sentinel Auth is a high-availability middleware suite for Node.js. It implements advanced JWT rotation and Redis-backed anomaly detection to stop brute-force attacks at the door.`;
  }

  // Priority 2: General Knowledge Matches
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('expert') || q.includes('language')) {
    return `Ayush is a "Fraken-stack" expert proficient in ${aiKnowledge.skills.slice(0, 10).join(', ')}. He specializes in Python for AI/ML and Next.js for high-fidelity engineering portfolios.`;
  }

  if (q.includes('satellite') || q.includes('vision') || q.includes('cv') || q.includes('space')) {
    return `Ayush has built computer vision models with 92% accuracy for environmental monitoring of satellite imagery. He mastered this during his high-impact Spaceborn internship.`;
  }
  
  if (q.includes('project') || q.includes('build') || q.includes('work') || q.includes('repo')) {
    return `Ayush has over 50 technical repositories. Key highlights include Nexus AI, StockSense, Sentinel Auth, and the Satellite Monitoring engine. Which technical unit should I decode for you?`;
  }
  
  if (q.includes('education') || q.includes('iit') || q.includes('college') || q.includes('madras') || q.includes('iitm') || q.includes('degree')) {
    return `Ayush is currently a BS in Data Science candidate at IIT Madras (Batch 2029) and a proud member of Nilgiri House. He is heavily involved in the institute's technical community.`;
  }
  
  if (q.includes('job') || q.includes('hire') || q.includes('available') || q.includes('contact') || q.includes('resume')) {
    return `${aiKnowledge.profile.availability} Direct comms: ayushjhaa1187@gmail.com. Detailed logs available on the /experience page.`;
  }
  
  if (q.includes('intern') || q.includes('experience') || q.includes('yuva') || q.includes('harvin')) {
    return `His experience spans roles at Yuva Intern (Data Science), Spaceborn (ML), and Spacelance (Analytics). He excels at bridging the gap between raw data and production architecture.`;
  }

  if (q.includes('achievement') || q.includes('hackathon') || q.includes('rank') || q.includes('jury') || q.includes('award')) {
    return `High-level achievements: Jury Member at IIT Kharagpur (GES 2026), Finalist at Shaastra (IITM), and BECon (IIT Delhi). He consistently ranks in the top tiers of national technical challenges.`;
  }

  if (q.includes('hi') || q.includes('hello') || q.includes('greeting') || q.includes('who are you')) {
    return `Greeting, [AUTHORIZED_VISITOR]. I am AURA, an autonomous agent cluster representing Ayush's engineering persona. Ask me for technical specs on his projects, IITM tenure, or core stack.`;
  }

  return "I'm Ayush's engineering assistant. I can fetch detailed specs on his proprietary projects (Nexus, StockSense, Sentinel), his academic status at IIT Madras, or his AI/ML capabilities. Please provide a technical keyword.";
};
