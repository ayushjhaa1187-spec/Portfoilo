'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { experiences } from '@/data/experience';
import { Briefcase, GraduationCap, Trophy, Users, Calendar, MapPin } from 'lucide-react';

const typeColors: Record<string, string> = {
  work: 'border-amber-400 text-amber-400 bg-amber-400/5 shadow-amber-400/20',
  education: 'border-blue-400 text-blue-400 bg-blue-400/5 shadow-blue-400/20',
  achievement: 'border-emerald-400 text-emerald-400 bg-emerald-400/5 shadow-emerald-400/20',
  campus: 'border-purple-400 text-purple-400 bg-purple-400/5 shadow-purple-400/20',
};

const ExperiencePage = () => {
  const stats = {
    months: 18, 
    roles: experiences.length,
    iits: new Set(experiences.filter(e => e.org.includes('IIT')).map(e => e.org)).size,
  };

  return (
    <PageShell title="CAREER" subtitle="timeline">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
          { label: 'Active Professional Experience', value: `${stats.months} Months`, detail: 'Across AI, Data & Dev', color: 'text-amber-400' },
          { label: 'Total Verified Roles', value: stats.roles, detail: 'Internships & Leadership', color: 'text-blue-400' },
          { label: 'IIT Ecosystem Presence', value: `${stats.iits} Institutes`, detail: 'Madras, Kharagpur, Delhi', color: 'text-emerald-400' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-10 border-white/5 hover:border-white/20 transition-all text-center relative group overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br transition-opacity opacity-0 group-hover:opacity-5 ${stat.color.replace('text-', 'from-')}`} />
            <p className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">{stat.label}</p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">{stat.value}</h2>
            <p className={`text-[10px] font-black uppercase tracking-[0.4em] ${stat.color}`}>{stat.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto pl-12 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-white/10 to-transparent" />

        {/* Experience Nodes */}
        {experiences.map((exp, i) => {
          const isLeft = i % 2 === 0;
          const colorClass = typeColors[exp.type as keyof typeof typeColors] || typeColors.work;
          const dotColor = colorClass.split(' ')[1].replace('text-', 'bg-');

          return (
            <div key={exp.id} className="relative mb-32">
              {/* Connector Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`absolute left-6 md:left-1/2 -translate-x-[50%] top-6 w-5 h-5 rounded-full border-4 border-black z-20 
                           ${dotColor} shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-pulse`}
              />

              <div className={`flex flex-col md:flex-row items-start justify-between w-full 
                              ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Chip */}
                <div className={`w-full md:w-[45%] flex md:justify-${isLeft ? 'start' : 'end'} md:px-12 mb-8 md:mb-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 mt-4 rounded-full border text-[9px] font-black tracking-widest uppercase ${colorClass}`}
                  >
                    {exp.period}
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] md:px-12">
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 hover:border-white/20 transition-all border-white/5 relative group cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-8">
                       <span className={`p-4 rounded-2xl border transition-all ${colorClass}`}>
                          {exp.type === 'work' && <Briefcase size={24} />}
                          {exp.type === 'education' && <GraduationCap size={24} />}
                          {exp.type === 'achievement' && <Trophy size={24} />}
                          {exp.type === 'campus' && <Users size={24} />}
                       </span>
                       <div>
                          <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-2">{exp.role}</h3>
                          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{exp.org}</p>
                       </div>
                    </div>
                    
                    <p className="text-slate-400 text-base font-light leading-relaxed mb-10">
                       {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1.5 bg-white/5 rounded-lg text-[9px] font-black text-slate-500 uppercase tracking-widest border border-white/5 hover:text-white transition-colors">
                             {skill}
                          </span>
                       ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                       <div className="flex items-center gap-3">
                          <MapPin size={14} className="text-amber-400" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Node_Verified</span>
                       </div>
                       <div className="flex items-center gap-3">
                          <Calendar size={14} className="text-amber-400" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{exp.period}</span>
                       </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
};

export default ExperiencePage;
