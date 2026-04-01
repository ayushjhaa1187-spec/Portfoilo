'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { Trophy, Star, Target, CheckCircle, Award, Layout, Briefcase, Zap } from 'lucide-react';

const achievementsIcons: Record<string, any> = {
  Recognition: Trophy,
  Hackathon: Zap,
  Leadership: Star,
};

const AchievementsPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          RECOGNITION <span className="text-amber-400 font-serif italic lowercase">Archives</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A showcase of hackathon victories, leadership roles, and technical honors across premier institutes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-32">
        {achievements.map((ach, idx) => {
          const Icon = achievementsIcons[ach.type] || Target;
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 group hover:border-amber-400/50 transition-all duration-500 overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 -translate-y-8 translate-x-8">
                  <Icon size={200} />
               </div>

               <div className="flex items-center gap-6 mb-8 relative">
                  <div className="w-14 h-14 bg-amber-400 text-black flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                     <Icon size={28} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-none mb-2">{ach.title}</h3>
                     <p className="text-xs text-slate-500 font-black tracking-widest uppercase flex items-center gap-2">
                        <CheckCircle size={12} className="text-emerald-400" /> {ach.org} • {ach.date}
                     </p>
                  </div>
               </div>

               <p className="text-slate-400 text-base leading-relaxed mb-8 font-light relative max-w-lg">
                  {ach.description}
               </p>

               <div className="relative">
                  <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase text-slate-500 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-all">
                     {ach.type} ARCHIVE_NODE_v1.0
                  </span>
               </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-40 text-center py-24 border-t border-white/5">
         <div className="flex justify-center flex-wrap gap-12 opacity-30 group">
            <div className="flex items-center gap-3">
               <Briefcase size={24} />
               <p className="text-xs font-black tracking-[0.4em] uppercase">Industry Honors</p>
            </div>
            <div className="flex items-center gap-3">
               <Zap size={24} />
               <p className="text-xs font-black tracking-[0.4em] uppercase">Hackathon Elite</p>
            </div>
            <div className="flex items-center gap-3 text-amber-500">
               <Star size={24} />
               <p className="text-xs font-black tracking-[0.4em] uppercase">Jury Recognition</p>
            </div>
            <div className="flex items-center gap-3">
               <Layout size={24} />
               <p className="text-xs font-black tracking-[0.4em] uppercase">Academic Excellence</p>
            </div>
         </div>
         <p className="mt-16 text-slate-600 text-xs font-black tracking-widest uppercase">Verified via LinkedIn & Institutional Credentials</p>
      </div>
    </div>
  );
};

export default AchievementsPage;
