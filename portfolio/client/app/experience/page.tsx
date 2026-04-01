'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from 'lucide-react';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-5xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          PROFESSIONAL <span className="text-amber-400 font-serif italic lowercase">Timeline</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A career architecture focused on Data Science, AI Agents, and scalable engineering.
        </p>
      </motion.div>

      <div className="relative ml-4 md:ml-0 overflow-hidden">
        {/* SVG Drawing Line */}
        <div className="absolute left-[9px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0">
           <svg className="w-full h-full" preserveAspectRatio="none">
              <line x1="1" y1="0" x2="1" y2="100%" className="stroke-white/5 stroke-2" />
              <motion.line 
                x1="1" 
                y1="0" 
                x2="1" 
                y2="100%" 
                className="stroke-amber-400 stroke-2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
           </svg>
        </div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`relative mb-32 md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:pr-16 text-right' : 'md:justify-start md:pl-16 md:ml-auto text-left'}`}
          >
            {/* Center Dot */}
            <div className="absolute top-8 w-5 h-5 bg-black border-4 border-amber-400 rounded-full left-[-26px] md:left-auto md:right-auto z-10 shadow-[0_0_15px_rgba(251,191,36,0.5)]" 
                 style={{ 
                    left: idx % 2 === 0 ? 'auto' : '-10px', 
                    right: idx % 2 === 0 ? '-10px' : 'auto' 
                 }} />

            <div className="glass-card p-10 group hover:border-amber-400/50 transition-all w-full max-w-xl relative">
              <div className={`flex items-center gap-6 mb-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-amber-400 group-hover:rotate-6 group-hover:scale-110 transition-all shadow-xl shadow-amber-400/10">
                  <Briefcase size={32} />
                </div>
                <div>
                   <h3 className="text-3xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-none mb-2">{exp.role}</h3>
                   <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em]">{exp.org} • {exp.type}</p>
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 mb-8 text-slate-500 text-[10px] font-black tracking-widest uppercase ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                 <span className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full"><Calendar size={12} /> {exp.start} — {exp.end}</span>
                 {exp.verified && <span className="flex items-center gap-2 text-emerald-400 bg-emerald-400/5 px-4 py-1.5 rounded-full"><CheckCircle size={12} /> VERIFIED_NODE</span>}
              </div>

              <p className="text-slate-400 text-base leading-relaxed mb-10 font-light">
                {exp.description}
              </p>

              <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                {exp.skills.map(skill => (
                  <span key={skill} className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] font-black tracking-widest uppercase text-slate-500 border border-white/5 group-hover:border-amber-400/20 group-hover:text-amber-400 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center">
         <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" rel="noopener noreferrer">
           <button className="px-12 py-5 bg-transparent border-2 border-white/10 hover:border-amber-400 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full transition-all hover:bg-amber-400 hover:text-black">
              SYNC VIA LINKEDIN ↗
           </button>
         </a>
      </div>
    </div>
  );
};

export default ExperiencePage;
