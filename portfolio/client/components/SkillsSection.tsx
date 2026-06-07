'use client';

import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'AI / LLM',
    skills: ['Claude API', 'Gemini', 'LangChain', 'RAG', 'Multi-Agent Orchestration', 'LangGraph', 'Fine-tuning']
  },
  {
    name: 'Full-Stack',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js', 'TypeScript', 'TailwindCSS', 'Redux', 'Zustand']
  },
  {
    name: 'Data',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Supabase', 'PostgreSQL', 'SciPy', 'D3.js']
  },
  {
    name: 'Cloud',
    skills: ['Vercel', 'Railway', 'Firebase', 'Supabase', 'Docker', 'AWS Infrastructure', 'CI/CD']
  },
  {
    name: 'Domains',
    skills: ['Fintech Architecture', 'Accessibility Compliance', 'B2B SaaS Strategy', 'EdTech Innovation', 'Data Forensics']
  }
];

export default function SkillsSection() {
  return (
    <section className="py-[var(--section-gap)] bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 mb-16">
        <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Tech Stack</p>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          SKILLS &amp; <span className="text-amber-400 italic font-serif lowercase">tools</span>
        </h2>
      </div>

      <div className="space-y-10">
        {categories.map((cat, idx) => (
          <div key={cat.name} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 group">
             {/* Category Name */}
             <div className="px-6 md:pl-0 md:w-48 flex-shrink-0">
               <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase group-hover:text-amber-400 transition-colors">
                 {cat.name}
               </span>
             </div>

             {/* Horizontal Scroll Containers */}
             <div className="flex overflow-x-auto no-scrollbar gap-3 px-6 md:px-0">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.1 + skillIdx * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(251, 191, 36, 0.1)', borderColor: 'rgba(251, 191, 36, 0.4)' }}
                    className="flex-shrink-0 bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[10px] font-black tracking-widest text-slate-400 uppercase transition-all cursor-default hover:text-amber-400"
                  >
                    {skill}
                  </motion.span>
                ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
