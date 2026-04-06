'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { caseStudies } from '@/data/projects';
import { Presentation, Brain, ArrowRight, Zap, Target } from 'lucide-react';
import CaseStudyViewer from '@/components/case-studies/CaseStudyViewer';

const CaseStudiesPage = () => {
  return (
    <PageShell title="TECHNICAL" subtitle="reports">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-slate-400 max-w-3xl mb-24 font-light leading-relaxed tracking-wide"
      >
        Deep forensic analysis and performance benchmarking of flagship AI systems and full-stack ecosystems.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatePresence mode="popLayout">
          {caseStudies.map((study, i) => (
            <motion.div 
              layout
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <div className="glass-panel p-10 border border-white/5 rounded-[2.5rem] group hover:border-amber-400/30 transition-all flex flex-col h-full bg-white/[0.01]">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-amber-400/10 rounded-xl text-amber-400">
                      <Brain size={24} />
                    </span>
                    <div>
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Research_Unit_{study.domain}</p>
                       <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">{study.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 font-light leading-relaxed mb-10 line-clamp-3">
                  {study.problem}
                </p>

                {/* Outcomes / Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                   {study.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                         <Target size={12} className="text-amber-400/40" />
                         {feat}
                      </div>
                   ))}
                </div>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-amber-400" />
                    <span className="text-[10px] font-black text-emerald-500/80 uppercase tracking-widest">{study.results[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    EXTRACT_REPORT <ArrowRight size={14} className="text-amber-400" />
                  </div>
                </div>
              </div>
              
              <CaseStudyViewer study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-32 text-center py-20 border-t border-white/5">
         <Presentation size={48} className="mx-auto text-slate-800 mb-6" />
         <p className="text-slate-500 text-[10px] font-black tracking-[0.4em] uppercase">All reports verified for academic and professional rigor</p>
      </div>
    </PageShell>
  );
};

export default CaseStudiesPage;
