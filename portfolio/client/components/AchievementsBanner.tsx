'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';

const quickAchievements = [
  { title: 'Jury @ GES 2026', org: 'IIT Kharagpur', icon: Trophy, color: 'text-amber-400' },
  { title: 'Finalist @ Shaastra', org: 'IIT Madras', icon: Target, color: 'text-blue-400' },
  { title: 'Co-Founder Catalyst', org: 'BECon IIT Delhi', icon: Star, color: 'text-emerald-400' },
  { title: 'Data Analyst Role', org: 'Yuva Intern', icon: CheckCircle, color: 'text-purple-400' },
];

export const AchievementsBanner = () => {
  return (
    <section className="py-[var(--section-gap)] bg-white/[0.02] border-y border-white/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
      
      <div 
        className="flex animate-marquee-slow whitespace-nowrap gap-12 items-center"
      >
        {[...quickAchievements, ...quickAchievements, ...quickAchievements, ...quickAchievements].map((ach, idx) => (
          <div key={`${ach.title}-${idx}`} className="flex items-center gap-6 glass-card p-4 group/card hover:bg-white/5 transition-all">
             <div className={`w-12 h-12 bg-black/40 rounded-xl flex items-center justify-center ${ach.color} group-hover/card:scale-110 transition-transform`}>
                <ach.icon size={24} />
             </div>
             <div>
                <p className="text-[9px] font-black tracking-widest text-slate-500 uppercase">{ach.org}</p>
                <h4 className="text-xl font-black text-white uppercase tracking-tighter group-hover/card:text-amber-400 transition-colors uppercase italic">{ach.title}</h4>
             </div>
             <div className="w-2 h-2 rounded-full bg-white/5" />
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center relative z-20">
         <Link href="/achievements">
            <Button variant="ghost" className="text-[10px] font-black tracking-[0.4em] uppercase hover:text-amber-400 transition-colors">
               DET_PROTOCOL_RECOGNITION <Award size={18} className="ml-3" />
            </Button>
         </Link>
      </div>
    </section>
  );
};
