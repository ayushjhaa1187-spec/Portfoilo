'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';
import { Code, Database, Cpu, Layout, Terminal, Radio, Shield, Globe } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  Languages: Terminal,
  'AI/ML': Cpu,
  Frontend: Layout,
  Backend: Database,
  Tools: Radio,
};

const SkillsPage = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          TECHNICAL <span className="text-amber-400 font-serif italic lowercase">Arsenal</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A high-fidelity stack optimized for AI engineering, agentic workflows, and resilient full-stack systems.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20">
        {categories.map((cat, catIdx) => {
          const Icon = categoryIcons[cat] || Shield;
          const catSkills = skills.filter(s => s.category === cat);
          
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 shadow-xl shadow-amber-400/10">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter group-hover:text-amber-400 transition-colors">{cat}</h2>
                  <p className="text-[10px] font-black text-slate-600 tracking-[0.5em] uppercase">Architecture_Layer_0{catIdx + 1}</p>
                </div>
              </div>

              <div className="space-y-10 pl-4 border-l-2 border-white/5">
                {catSkills.map((skill, sIdx) => (
                  <div key={skill.name} className="space-y-3 group">
                    <div className="flex justify-between items-end mb-2">
                       <p className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">{skill.name}</p>
                       <p className="text-[10px] font-black text-slate-600 tracking-widest">{skill.level}%_CAPACITY</p>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: sIdx * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full relative"
                       >
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] animate-[shimmer_2s_infinite]" />
                       </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-40 p-20 glass-panel rounded-[4rem] flex flex-col md:flex-row items-center gap-12 border border-white/10 overflow-hidden relative">
         <div className="absolute top-0 right-0 p-20 opacity-5 rotate-12">
            <Globe size={300} />
         </div>
         <div className="md:w-1/3">
            <div className="w-20 h-20 bg-amber-400 text-black flex items-center justify-center rounded-[2rem] shadow-2xl shadow-amber-400/20 mb-8">
               <Cpu size={40} className="animate-spin-slow" />
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-4">Continuously_Updating</h3>
            <p className="text-[10px] font-black text-slate-600 tracking-widest uppercase italic">Automatic Knowledge Ingestion Active</p>
         </div>
         <div className="md:w-2/3 border-l md:border-white/5 pl-0 md:pl-12">
            <p className="text-xl text-slate-400 font-light leading-relaxed tracking-wide italic">
               "My technical stack is not a static list—it's a living environment. I'm currently prioritizing agentic reasoning with LangGraph and distributed systems as part of my BS Data Science residency at IIT Madras."
            </p>
         </div>
      </div>
    </div>
  );
};

export default SkillsPage;
