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

        {/* Dynamic Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--card-gap)] mb-32">
          {achievements.map((ach, idx) => {
            const Icon = achievementsIcons[ach.type] || Target;
            const isCert = ach.type === 'Certification';
            
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group perspective-1000 ${isCert ? 'h-[350px]' : 'h-auto'}`}
              >
                 {isCert ? (
                    <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                       {/* Front */}
                       <div className="absolute inset-0 backface-hidden glass-card p-10 flex flex-col items-center justify-center text-center border-amber-400/10">
                          <div className="w-20 h-20 bg-amber-400 text-black flex items-center justify-center rounded-2xl mb-8 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                             <Award size={40} />
                          </div>
                          <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">{ach.title}</h3>
                          <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">SYSC_CERT_v1.0</p>
                       </div>
                       {/* Back */}
                       <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-10 flex flex-col items-center justify-center text-center border-emerald-400/20 bg-emerald-400/5">
                          <CheckCircle size={40} className="text-emerald-400 mb-8" />
                          <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">{ach.org}</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase mb-4">{ach.date}</p>
                          <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase italic">Verified_Credentials_Logged</p>
                       </div>
                    </div>
                 ) : (
                    <div className="glass-card p-10 h-full border-white/5 hover:border-amber-400/30 transition-all flex flex-col relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                          <Icon size={120} />
                       </div>
                       <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-400">
                             <Icon size={24} />
                          </div>
                          <p className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">{ach.type}</p>
                       </div>
                       <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-amber-400 transition-colors leading-none">{ach.title}</h3>
                       <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-6">{ach.org} • {ach.date}</p>
                       <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 flex-grow">
                          {ach.description}
                       </p>
                       <div className="flex justify-between items-center opacity-40">
                          <span className="text-[8px] font-black tracking-widest uppercase text-slate-500 italic">LOG_ENTRY_{idx + 1024}</span>
                          <Target size={14} className="text-amber-400" />
                       </div>
                    </div>
                 )}
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
