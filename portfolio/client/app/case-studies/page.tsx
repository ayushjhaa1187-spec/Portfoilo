'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { caseStudies } from '@/data/caseStudies';
import { MousePointer2, Presentation, ArrowUpRight, TrendingUp, Code2 } from 'lucide-react';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-24">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">Case Studies</p>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none">
            CASE <span className="text-amber-400 font-serif italic lowercase text-7xl md:text-8xl">studies</span>
          </h1>
          <p className="mt-12 text-slate-500 text-xl max-w-2xl leading-relaxed">
             Deep-dive architectural reviews of competition-grade solutions, 
             focusing on the engineering path from problem identification to verified impact.
          </p>
        </header>

        {/* Case Studies List */}
        <div className="space-y-12">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="glass-card bg-white/[0.02] border border-white/5 p-12 lg:p-16 flex flex-col lg:flex-row gap-16 group hover:border-amber-400/20 transition-all"
            >
              {/* Left Column (Meta) */}
              <div className="lg:w-[35%] flex-shrink-0">
                 <div className="flex items-center gap-3 mb-8">
                   <span className="px-4 py-1 bg-amber-400/10 border border-amber-400/20 text-[8px] font-black text-amber-400 tracking-widest uppercase rounded-full">
                      {study.eventBadge || study.outcome.toUpperCase()}
                   </span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase group-hover:text-amber-400 transition-colors mb-4">
                    {study.title}
                 </h2>
                 <p className="text-amber-100/40 text-xs mb-6 -mt-2 italic">{study.subtitle}</p>
                 <div className="space-y-2 mb-10">
                    <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">{study.event}</p>
                    <p className="text-[9px] font-black text-slate-600 tracking-widest uppercase italic">{study.institution}</p>
                 </div>

                 {study.hasPPTDeck && (
                   <a 
                     href={study.pptDeckUrl || study.pptUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-amber-400/30 hover:text-amber-400 px-8 py-4 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all"
                   >
                     View PPT Deck <Presentation size={14} />
                   </a>
                 )}

                 {(study.linkedinImpressions || study.impressions) && (
                   <div className="mt-12 flex items-center gap-2 text-slate-600 text-[10px] font-black tracking-widest uppercase">
                      <TrendingUp size={12} className="text-amber-400/40" /> {study.linkedinImpressions || study.impressions} READS
                   </div>
                 )}
              </div>

              {/* Right Column (Architecture) */}
              <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                 <div>
                    <p className="text-[9px] font-bold text-amber-400 tracking-[0.3em] uppercase mb-4 opacity-60">Problem</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{study.problem}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-bold text-amber-400 tracking-[0.3em] uppercase mb-4 opacity-60">Solution</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{study.solution}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-bold text-amber-400 tracking-[0.3em] uppercase mb-4 opacity-60">Impact</p>
                    <p className="text-slate-400 text-sm leading-relaxed font-bold">{study.impact}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-bold text-amber-400 tracking-[0.3em] uppercase mb-4 opacity-60">Tech & Learnings</p>
                    <div className="space-y-6">
                       {study.techStack && (
                         <div className="flex flex-wrap gap-2">
                           {study.techStack.map(t => (
                              <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[8px] text-slate-500 rounded uppercase font-bold">{t}</span>
                           ))}
                         </div>
                       )}
                       <ul className="space-y-2">
                          {(study.keyLearnings || study.learnings || []).map((l, j) => (
                            <li key={j} className="text-slate-500 text-[11px] font-medium flex items-start gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-amber-400/30 flex-shrink-0 mt-1" />
                               {l}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
