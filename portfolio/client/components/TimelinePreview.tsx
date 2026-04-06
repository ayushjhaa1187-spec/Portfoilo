'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const previewExperiences = [
  {
    role: 'Junior Data Analyst',
    org: 'Yuva Intern',
    period: 'Oct 2025 – Jan 2026',
    status: 'Verified'
  },
  {
    role: 'Jury Member',
    org: 'IIT Kharagpur (GES 2026)',
    period: 'Jan 2026 Only',
    status: 'Institutional'
  },
  {
    role: 'BS Data Science Student',
    org: 'IIT Madras',
    period: 'Jul 2025 – Present',
    status: 'Academic'
  }
];

export const TimelinePreview = () => {
  return (
    <section className="py-[var(--section-gap)] px-[var(--section-px)] max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
         <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
         >
            <p className="text-amber-400 text-[10px] font-black tracking-[0.4em] uppercase mb-12">Professional_Nodes_Preview</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-tight">
               TIMELINE <span className="text-amber-400 font-serif italic lowercase">Trace</span>
            </h2>
         </motion.div>
         
         <Link href="/experience">
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white tracking-widest uppercase hover:text-amber-400 hover:border-amber-400 transition-all flex items-center gap-3 group">
               VIEW_COMPLETE_TIMELINE <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
         </Link>
      </div>

      <div className="space-y-12">
        {previewExperiences.map((exp, idx) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group hover:bg-white/[0.04] transition-all border border-white/5 overflow-hidden"
          >
             <div className="flex flex-col md:flex-row items-center justify-between p-12 gap-10 relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-amber-400/20 group-hover:bg-amber-400 transition-all duration-500" />
                <div className="flex items-center gap-10 relative z-10">
                   <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-xl shadow-amber-400/10 shrink-0">
                      <Briefcase size={28} />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors uppercase leading-tight mb-5">{exp.role}</h3>
                      <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">{exp.org} • {exp.status}</p>
                   </div>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/5 group-hover:border-amber-400/20 group-hover:text-amber-400 transition-all">
                   <Calendar size={14} /> {exp.period}
                </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
