"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import SectionReveal from "../SectionReveal";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  impact: string;
  github: string;
  demo?: string;
  number: string;
}

const projects: Project[] = [
  {
    id: "stocksense",
    title: "StockSense AI Agent",
    category: "AI / Autonomous Agents",
    number: "01",
    description: "Autonomous inventory management system using LLMs to detect expiring stock and optimize reorder cycles.",
    longDescription: "StockSense leverages autonomous AI agents to monitor pharmacy inventory in real-time. It analyzes sales velocity, expiration dates, and demand patterns to automatically trigger reorders and minimize wastage, specifically optimized for healthcare retail supply chains.",
    tech: ["Python", "OpenAI API", "LangGraph", "Data Analytics"],
    impact: "Automated 80% of reorder scheduling for pilot retailers.",
    github: "https://github.com/ayushjhaa1187-spec/StockSense",
  },
  {
    id: "circles",
    title: "Circles Event Platform",
    category: "Full Stack / Hackathon (ELITE HACK 1.0)",
    number: "02",
    description: "Multi-event management ecosystem with QR check-ins, real-time analytics, and team collaboration tools.",
    longDescription: "Built for ELITE HACK 1.0, Circles handles end-to-end event management. Features include QR-based attendee tracking, instant check-in dashboards for admins, and a participant hub for team formation and schedule management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    impact: "Succesfully handled 200+ registrations for Elite Hack event.",
    github: "https://github.com/ayushjhaa1187-spec/Circles",
  },
  {
    id: "predictive",
    title: "Predictive Analytics Dashboard",
    category: "ML / Data Science",
    number: "03",
    description: "End-to-end ML pipeline with interactive visualization for business trend forecasting.",
    longDescription: "A comprehensive data science project that transforms raw business datasets into predictive insights. Includes advanced EDA, feature engineering, and a random forest model deployed via a custom dashboard.",
    tech: ["Python", "Scikit-learn", "Pandas", "Plotly"],
    impact: "Provided 92% accurate trend forecasting on historical retail datasets.",
    github: "https://github.com/ayushjhaa1187-spec/PredictiveAnalytics",
  },
  {
    id: "voice-ai",
    title: "AI Voice Assistant",
    category: "NLP / Python",
    number: "04",
    description: "Hands-free task automation assistant utilizing speech recognition and intent parsing.",
    longDescription: "A Python-based voice engine capable of managing daily tasks, querying databases, and controlling local system functions via natural language commands. Features noise-canceling speech processing.",
    tech: ["Python", "SpeechRecognition", "NLTK", "PyAutoGUI"],
    impact: "Reduced local task execution time by 40% using voice triggers.",
    github: "https://github.com/ayushjhaa1187-spec/VoiceAssistant",
  },
  {
    id: "ethicallance",
    title: "Ethicallancing Platform",
    category: "Frontend / Social Impact",
    number: "05",
    description: "A niche marketplace connecting ethical freelancers with social impact nonprofit projects.",
    longDescription: "A beautifully designed frontend-first platform aimed at the 'Social Good' sector. Focused on user experience, transparency, and accessible design patterns for community driven initiatives.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    impact: "Showcased as a model for ethical gig-economy platforms at IIT Ideathons.",
    github: "https://github.com/ayushjhaa1187-spec/Ethicallancing",
  },
  {
    id: "insight-weaver",
    title: "Insight Weaver Suite",
    category: "TypeScript / Microservices",
    number: "06",
    description: "A collection of data extraction and sentiment analysis tools for market research.",
    longDescription: "A professional developer suite designed for microservice-heavy architectures. Includes efficient scrapers, API weavers, and a primary dashboard for monitoring data flow across multiple streams.",
    tech: ["TypeScript", "Node.js", "Cheerio", "Redis"],
    impact: "Processes 10k+ data points per hour with 99.9% scrape success rate.",
    github: "https://github.com/ayushjhaa1187-spec/InsightWeaver",
  }
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-40 px-6 lg:px-20 bg-[#060608]">
      <div className="max-w-[1400px] mx-auto">
        <SectionReveal>
          <div className="mb-24">
            <span className="section-label text-[#555560] font-mono text-xs tracking-[5px] uppercase block mb-6">
              // 005 — PORTFOLIO
            </span>
            <h2 className="font-display text-7xl lg:text-9xl text-[#F1F0FB] leading-[0.8] tracking-tight">
              FEATURED<br />
              <span className="text-outline">PROJECTS</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[#1E1E24] border-[1px] border-[#1E1E24]">
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              onClick={() => setSelectedId(project.id)}
            />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <a 
            href="https://github.com/ayushjhaa1187-spec" 
            target="_blank" 
            className="group flex items-center gap-4 bg-[#0E0E12] border border-[#1E1E24] px-10 py-5 font-mono text-xs tracking-[4px] text-[#F1F0FB] hover:bg-[#8B5CF6] transition-all duration-500"
           >
            VIEW ALL REPOSITORIES
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="bg-[#0E0E12] p-10 lg:p-12 hover:bg-[#141418] transition-colors cursor-pointer group flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        <div className="flex justify-between items-start mb-12">
           <span className="font-mono text-[#555560] text-xs tracking-widest uppercase">{project.category}</span>
           <span className="font-display text-4xl text-outline opacity-20 group-hover:opacity-60 transition-opacity">{project.number}</span>
        </div>
        
        <h3 className="font-display text-4xl lg:text-5xl text-[#F1F0FB] mb-6 group-hover:text-[#8B5CF6] transition-colors leading-none tracking-tight">
          {project.title}
        </h3>
        <p className="font-body text-[#888] text-sm lg:text-base mb-10 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map((t, idx) => (
            <span key={idx} className="bg-[#16161D] text-[#06B6D4] font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-[#1E1E24]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-[#1E1E24] flex items-center justify-between">
        <div className="flex items-center gap-3">
           <div className="w-1.5 h-1.5 bg-[#8B5CF6]" />
           <span className="font-mono text-[10px] text-[#555560] tracking-wider truncate max-w-[200px] uppercase">
             {project.impact}
           </span>
        </div>
        <ArrowUpRight className="text-[#555560] group-hover:text-[#8B5CF6] transition-colors" size={20} />
      </div>
    </motion.div>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#060608]/95 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-4xl bg-[#0E0E12] border border-[#1E1E24] p-10 lg:p-20 relative overflow-y-auto max-h-[90vh] custom-scrollbar"
      >
        <button onClick={onClose} className="absolute top-10 right-10 text-[#555560] hover:text-[#F1F0FB] transition-colors">
          <X size={32} />
        </button>

        <div className="mb-10">
          <span className="font-mono text-[#8B5CF6] text-xs tracking-[8px] uppercase mb-4 block">
            {project.category}
          </span>
          <h2 className="font-display text-6xl lg:text-8xl text-[#F1F0FB] leading-none mb-10">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
          <div>
            <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-6">PROJECT OVERVIEW</h4>
            <p className="text-lg lg:text-xl text-[#888] leading-relaxed mb-10 font-body">
              {project.longDescription}
            </p>

            <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-6">CORE IMPACT</h4>
            <div className="flex items-center gap-4 bg-[#141418] border-l-2 border-[#06B6D4] p-6 mb-10">
              <span className="text-[#06B6D4] font-body font-medium italic">"{project.impact}"</span>
            </div>
          </div>

          <div>
             <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-6">TECH STACK</h4>
             <div className="flex flex-col gap-3 mb-12">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-[#16161D] text-[#8B5CF6] font-mono text-xs p-3 border border-[#1E1E24]">
                    {t}
                  </span>
                ))}
             </div>

             <div className="flex flex-col gap-4">
                <a href={project.github} target="_blank" className="flex items-center justify-center gap-3 bg-[#1E1E24] hover:bg-[#8B5CF6] text-white p-5 font-mono text-xs tracking-widest transition-colors">
                  <Github size={18} /> GITHUB REPO
                </a>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
