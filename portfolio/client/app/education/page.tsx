'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications } from '@/data/education';
import { GraduationCap, Award, Calendar, ExternalLink, Bookmark } from 'lucide-react';

const EducationPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          ACADEMIC <span className="text-amber-400 font-serif italic lowercase">Foundation</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Pursuing a Bachelor of Science (BS) in Data Science & Applications at the Indian Institute of Technology, Madras.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-32">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 group relative border border-white/5 hover:border-amber-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 -translate-y-8 translate-x-8">
               <GraduationCap size={150} />
            </div>

            <div className="flex items-center gap-6 mb-8 relative">
               <div className="w-16 h-16 bg-amber-400 text-black flex items-center justify-center rounded-2xl group-hover:rotate-6 transition-transform shadow-xl shadow-amber-400/20">
                  <GraduationCap size={32} />
               </div>
               <div>
                  <h3 className="text-3xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-none mb-2">{edu.institution}</h3>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{edu.period}</p>
               </div>
            </div>

            <div className="space-y-8 relative">
               <div>
                  <p className="text-xs text-amber-400/70 font-black tracking-[0.3em] uppercase mb-3">Degree Specialization</p>
                  <p className="text-xl text-slate-200 font-light leading-snug">{edu.degree}</p>
               </div>
               
               <div className="space-y-4">
                  {edu.highlights.map(point => (
                    <div key={point} className="flex items-start gap-3">
                       <div className="mt-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full shrink-0" />
                       <p className="text-slate-400 text-sm font-light leading-relaxed">{point}</p>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-24">
         <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">CERTIFICATIONS <span className="text-amber-400 font-serif italic lowercase">& Credentials</span></h2>
            <div className="h-[2px] grow mx-8 bg-white/5" />
            <Award className="text-slate-700" size={32} />
         </div>

         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-8 hover:bg-white/[0.05] transition-all border border-white/5 group"
              >
                <div className="flex justify-between items-start mb-6">
                   <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-amber-400">
                      <Award size={20} />
                   </div>
                   <p className="text-[10px] font-black text-slate-600 tracking-widest uppercase">{cert.date}</p>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-amber-400 transition-colors">{cert.title}</h4>
                <p className="text-xs text-slate-500 font-black tracking-widest uppercase mb-6 flex items-center gap-2">
                   <Bookmark size={10} /> {cert.org}
                </p>
                <button className="flex items-center gap-2 text-[10px] font-black text-slate-600 hover:text-white transition-colors tracking-widest uppercase">
                   VERIFY_CREDENTIAL <ExternalLink size={12} />
                </button>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default EducationPage;
