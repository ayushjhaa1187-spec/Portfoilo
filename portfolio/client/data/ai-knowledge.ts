export const aiKnowledge = {
  profile: {
    name: "Ayush Kumar Jha",
    role: "AI Engineer & IIT Madras Data Science Scholar",
    education: "BS in Data Science & Applications from IIT Madras (Class of 2029)",
    location: "Delhi, India / Remote",
    headline: "IIT MADRAS 29’ | JURY AT IIT KHARAGPUR | INTERN AT IIT ROPAR | FINALIST AT IITK/IITM/IITB/IITD/IITR | SELECTED FOR BHARAT INNOVATES (FRANCE)",
    motto: "Building with product depth, scalability, and execution humility.",
    availability: "Available for high-impact AI/ML projects and Full-Stack collaborations."
  },
  skills: [
    "Python", "Physics-Informed Neural Networks (PINNs)", "PyTorch", "LangChain", "LLMs", "Generative AI",
    "Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Supabase", "FastAPI",
    "Agentic Workflows", "Long-Term Memory AI", "B2B SaaS Strategy"
  ],
  projects: [
    {
      name: "SkillBridge",
      description: "AI-first peer learning and doubt resolution ecosystem (Top 10 @ IIT Bombay DevFusion).",
      highlights: ["Instant multimodal AI doubt solving", "Adaptive practice tests", "Credit monetization engine"]
    },
    {
      name: "Elite Event Platform",
      description: "Deployed event management platform placing in Top 10 out of 7,400+ builders at Elite Hack 1.0.",
      highlights: ["Live on Vercel", "High-throughput registration", "Real-time updates"]
    },
    {
      name: "NeuroMemory Agent",
      description: "1,000-turn conversational memory persistence system (Smallest.ai × IIT Guwahati NeuroHack).",
      highlights: ["Sub-50ms token injection", "Hierarchical episodic extraction", "Zero-latency persistence"]
    },
    {
      name: "BRD Generation Agent",
      description: "Solo finalist AI workflow tool at HackFest 2.0 (GDG Cloud New Delhi × Turgon AI).",
      highlights: ["Automated BRD drafting in < 2 mins", "Structured reasoning chains"]
    },
    {
      name: "NEXAS Sports Platform",
      description: "Integrated urban sports discovery and logistics ecosystem built for Artpark ProtoDash (IISc Bangalore).",
      highlights: ["Court discovery", "Matchmaking", "Community leagues"]
    }
  ],
  experience: [
    "Research & Education Design Intern @ Vicharanashala (Lab for Education Design / VLED), IIT Ropar",
    "Jury Member @ AI-volution, GES 2026 — IIT Kharagpur (with Ashoka Changemakers)",
    "Lead Full-Stack & AI Engineer @ SkillBridge (Top 10 IIT Bombay DevFusion)",
    "Campus Ambassador @ TRYST '26, IIT Delhi",
    "Campus Ambassador @ BECon '26, eDC IIT Delhi",
    "Campus Ambassador @ Cognizance 2026, IIT Roorkee",
    "BS Data Science Scholar @ IIT Madras (2025–2029)"
  ],
  achievements: [
    "Selected for Bharat Innovates 2026 in Nice, France (Global Deep-Tech Accelerator)",
    "Top 10 Finalist @ DevFusion Hackathon, IIT Bombay (SkillBridge)",
    "Top 10 Finalist @ Elite Hack 1.0 (out of 7,400+ participants)",
    "Solo Finalist @ HackFest 2.0 (GDG Cloud New Delhi × Turgon AI)",
    "Grand Finale Qualifier @ Brahmastra Policy Case Competition, IIT Kanpur",
    "Top 30 Finalist @ The Deal Room Investment Challenge, DMS IIT Delhi",
    "Rank 27 @ CaseQuest '26, DMS IIT Delhi",
    "Invited for Physics-Informed Neural Networks (PINNs) at CDS IISc Bangalore (34.5k+ impressions)"
  ]
};

export const getAIResponse = (query: string, context?: string): string => {
  const q = query.toLowerCase();
  
  // France / Bharat Innovates
  if (q.includes('france') || q.includes('bharat innovates') || q.includes('global') || q.includes('nice')) {
    return "Ayush was selected for Bharat Innovates 2026 in Nice, France — a premier global accelerator connecting 120 Indian deep-tech startups and 15 top institutions with international partners. Read the full story at /blog/bharat-innovates-france-deeptech.";
  }

  // IIT Ropar / Vicharanashala
  if (q.includes('ropar') || q.includes('vicharanashala') || q.includes('vled') || q.includes('mentor')) {
    return "Ayush is a Research & Education Design Intern at Vicharanashala (Lab for Education Design / VLED) at IIT Ropar, working under Prof. Sudarshan Iyengar and Dr. Pavani Ayinampudi on AI-assisted pedagogy and problem architecture. Explore details at /experience.";
  }

  // IISc / PINNs
  if (q.includes('iisc') || q.includes('pinn') || q.includes('physics') || q.includes('porosity')) {
    return "Ayush was invited to CDS (Computational and Data Sciences) at IISc Bangalore for a seminar on Adaptive PINNs for Dual-Porosity Flow by Prof. Kalyana Nakshatrala (University of Houston) — his writeup gained 34,490+ impressions on LinkedIn! Check /blog/physics-meets-neural-nets-iisc-pinns.";
  }

  // Specific Project Contexts
  if (context === 'skillbridge' || q.includes('skillbridge') || q.includes('devfusion') || q.includes('iit bombay')) {
    return "SkillBridge is an AI-first peer learning ecosystem shortlisted in the Top 10 at IIT Bombay DevFusion. It features instant AI doubt solving, adaptive test generation, verified mentor sessions, and credit monetization logic. View it at /projects/skillbridge.";
  }

  if (context === 'neuromemory' || q.includes('memory') || q.includes('neurohack') || q.includes('smallest')) {
    return "NeuroMemory is a long-term conversational memory system for AI agents built during the Smallest.ai × IIT Guwahati NeuroHack Challenge. It maintains continuity across 1,000+ turns with sub-50ms token injection. Inspect /case-studies/neuromemory-conversational-persistence.";
  }

  if (context === 'dealroom' || q.includes('deal room') || q.includes('iit delhi') || q.includes('vc')) {
    return "The Deal Room was a multi-round VC simulation by DMS IIT Delhi where Ayush placed in the Top 30 by defending capital allocation and unit economics in front of IIT Delhi faculty. Read more at /case-studies/the-deal-room-investment-pitch-iitd.";
  }

  // Educational Context
  if (q.includes('iit') || q.includes('madras') || q.includes('education') || q.includes('college')) {
    return "Ayush is pursuing a BS in Data Science & Applications at IIT Madras (Class of 2029). He focuses on Applied Machine Learning, Statistics, PINNs, and High-Performance Computing while actively representing IIT Madras in national technical summits.";
  }

  // Professional / Experience
  if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('jury') || q.includes('kharagpur')) {
    return "Ayush is a Research Intern at IIT Ropar (Vicharanashala), Jury Member for AI-volution at IIT Kharagpur (GES 2026), and former Campus Ambassador for BECon '26 (eDC IIT Delhi) and Cognizance 2026 (IIT Roorkee). View the full timeline at /experience.";
  }

  // Achievements / Recognition
  if (q.includes('achievement') || q.includes('hackathon') || q.includes('award') || q.includes('winner') || q.includes('finalist')) {
    return "Key achievements: Selected for Bharat Innovates 2026 (Nice, France), Top 10 @ IIT Bombay DevFusion, Top 10 @ Elite Hack 1.0 (7.4k+ builders), Solo Finalist @ GDG HackFest 2.0, Grand Finalist @ IIT Kanpur Brahmastra, and Top 30 @ IIT Delhi Deal Room. View the full grid at /achievements.";
  }

  // Skills / Tech Stack
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) {
    return "Core stack: Python (PINNs, PyTorch, LangChain, FastAPI), TypeScript (Next.js, React, Node.js), and Cloud Databases (Supabase, PostgreSQL, Vercel). He specializes in scalable AI architectures and high-fidelity web systems.";
  }

  // Contact / Availability
  if (q.includes('contact') || q.includes('hire') || q.includes('collab') || q.includes('email') || q.includes('linkedin')) {
    return "Reach Ayush at ayushjhaa1187@gmail.com or connect on LinkedIn at https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/ (3.8k+ followers). He is available for high-impact AI/ML collaborations and full-stack engineering roles at /contact.";
  }

  // General Project Query
  if (q.includes('project') || q.includes('build') || q.includes('repo')) {
    return "Ayush has architected 46+ public GitHub repositories and multiple hackathon-winning builds including SkillBridge, Elite Event Hub, NeuroMemory, and NEXAS. Explore them at /projects.";
  }

  return "Hello! I am Ayush's AI Assistant. You can ask about his IIT Madras Data Science background, his internship at IIT Ropar, his selection for Bharat Innovates (Nice, France), his PINNs research at IISc Bangalore, or his Top 10 finishes at IIT Bombay and Elite Hack 1.0. How can I help you?";
};
