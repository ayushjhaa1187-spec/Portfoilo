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

      <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px]">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className={`relative mb-24 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 w-4 h-4 bg-amber-400 rounded-full -left-[9px] md:left-auto md:right-auto md:top-2 shadow-[0_0_15px_rgba(251,191,36,0.5)] z-10" 
                 style={{ left: idx % 2 === 0 ? 'auto' : '-9px', right: idx % 2 === 0 ? '-9px' : 'auto' }} />

            <div className="glass-card p-8 group hover:border-amber-400/50 transition-all">
              <div className={`flex items-center gap-4 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Briefcase size={24} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">{exp.role}</h3>
                   <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{exp.org} • {exp.type}</p>
                </div>
              </div>

              <div className={`flex flex-wrap gap-4 mb-6 text-slate-500 text-xs font-black tracking-widest uppercase ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                 <span className="flex items-center gap-1.5"><Calendar size={12} /> {exp.start} — {exp.end}</span>
                 {exp.verified && <span className="flex items-center gap-1.5 text-emerald-400"><CheckCircle size={12} /> Verified</span>}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                {exp.description}
              </p>

              <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                {exp.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black tracking-widest uppercase text-slate-500 border border-white/5">
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
