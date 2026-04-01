'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Database, Radio, Globe } from 'lucide-react';

const skillCategories = [
  {
    name: 'AI & ML',
    icon: Cpu,
    color: 'amber',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'LangGraph', 'LangChain', 'OpenAI API', 'Gemini API', 'RAG Systems']
  },
  {
    name: 'Full-Stack',
    icon: Layout,
    color: 'blue',
    skills: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'Node.js', 'Express', 'REST APIs']
  },
  {
    name: 'Data & DB',
    icon: Database,
    color: 'emerald',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Pandas', 'NumPy', 'SQL']
  },
  {
    name: 'DevOps & Cloud',
    icon: Globe,
    color: 'purple',
    skills: ['Vercel', 'Railway', 'Firebase', 'GitHub Actions', 'Docker basics']
  }
];

const colorVariants: Record<string, string> = {
  amber: 'text-amber-400 bg-amber-400/5 border-amber-400/20 group-hover:border-amber-400 shadow-amber-400/10',
  blue: 'text-blue-400 bg-blue-400/5 border-blue-400/20 group-hover:border-blue-400 shadow-blue-400/10',
  emerald: 'text-emerald-400 bg-emerald-400/5 border-emerald-400/20 group-hover:border-emerald-400 shadow-emerald-400/10',
  purple: 'text-purple-400 bg-purple-400/5 border-purple-400/20 group-hover:border-purple-400 shadow-purple-400/10',
};

const hoverGlow: Record<string, string> = {
  amber: 'hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]',
  blue: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]',
  emerald: 'hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]',
  purple: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]',
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-[var(--section-gap)] px-[var(--section-px)] max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
        transition={{ duration: 1, ease: 'circOut' }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="text-amber-400 text-xs font-black tracking-[0.4em] uppercase mb-4">Technical_Capabilities v3.1</p>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
          ENGINEERING <span className="text-amber-400 font-serif italic lowercase">The stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--card-gap)]">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className={`glass-card p-8 group flex flex-col items-center text-center ${colorVariants[category.color]}`}
          >
             <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <category.icon className={colorVariants[category.color].split(' ')[0]} size={32} />
             </div>
             
             <h3 className="text-xl font-bold text-white mb-8 tracking-tighter uppercase flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${colorVariants[category.color].split(' ')[0].replace('text', 'bg')}`} />
                {category.name}
             </h3>

             <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIdx * 0.05 }}
                    className={`px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase border border-white/5 text-slate-400 transition-all cursor-default ${hoverGlow[category.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
