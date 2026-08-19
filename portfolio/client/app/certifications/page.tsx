'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { ChevronDown, ExternalLink, ShieldCheck, Eye, Trophy } from 'lucide-react';

const categories = ['All', 'AI/ML', 'Cloud', 'Data Science', 'Full-Stack', 'hackathon', 'competition', 'jury', 'course'];

export default function CertificationsPage() {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const filteredCerts = certifications.filter(cert => 
    filter === 'All' ? true : cert.category === filter
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-20">
          <p className="text-amber-400 text-xs font-black tracking-[0.6em] uppercase mb-6">Verified_Credentials v4.5</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            CERTIFI<span className="text-amber-400 font-serif italic lowercase">cations</span>
          </h1>
        </header>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-16 no-scrollbar overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-6 py-2 rounded-full border text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                 filter === cat 
                   ? 'bg-amber-400 border-amber-400 text-black' 
                   : 'bg-white/5 border-white/10 text-slate-500 hover:border-amber-400/40 hover:text-amber-400'
               }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
           <AnimatePresence mode="popLayout">
             {filteredCerts.map((cert) => (
               <motion.div
                 key={cert.id}
                 layout
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="break-inside-avoid mb-8 glass-card border border-white/5 bg-white/[0.02] p-8 group overflow-hidden relative"
               >
                 {/* Category Badge */}
                 <div className="flex items-center justify-between mb-8">
                    <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-[8px] font-black tracking-widest text-amber-400 uppercase">
                      {cert.category}
                    </span>
                    {(cert.verified || cert.featured) && <ShieldCheck size={14} className="text-amber-400 opacity-60" />}
                 </div>

                 {/* Title & Issuer */}
                 <h3 className="text-xl font-bold text-white mb-2 leading-tight uppercase group-hover:text-amber-400 transition-colors">
                    {cert.title}
                 </h3>
                 <p className="text-sm font-black text-slate-500 tracking-[0.2em] mb-8 uppercase">
                    {cert.issuer}
                 </p>

                 <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-4">
                    <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">
                      {cert.dateLabel || cert.date || 'Jan 2026'}
                    </span>
                    {cert.credentialUrl ? (
                      <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 rounded-full hover:bg-amber-400 hover:text-black transition-all"
                      >
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-amber-400/30"><Trophy size={14} /></span>
                    )}
                 </div>

                 {/* Accordion Learnings */}
                 <div className="mt-6 border-t border-white/5 pt-4">
                    <button 
                      onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                      className="flex items-center justify-between w-full text-[8px] font-black tracking-tighter text-slate-500 uppercase hover:text-white transition-colors"
                    >
                      Core_Curriculum_Insights
                      <ChevronDown size={12} className={`transition-transform duration-300 ${expandedId === cert.id ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {expandedId === cert.id && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden"
                        >
                           <div className="py-4 space-y-4">
                              <p className="text-[12px] leading-relaxed text-slate-400 italic">
                                {cert.description || 'Verified expertise in high-integrity systems and specialized architectural strategy.'}
                              </p>
                              {cert.keyLearnings && (
                                <ul className="space-y-1">
                                  {cert.keyLearnings.map((l, j) => (
                                    <li key={j} className="text-[9px] font-black text-slate-600 uppercase flex items-center gap-2">
                                      <span className="w-1 h-1 rounded-full bg-amber-400/40" /> {l}
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {cert.linkedinImpressions && (
                                <div className="text-[8px] font-black tracking-widest text-amber-400 uppercase flex items-center gap-2 mt-4">
                                  <Eye size={10} /> {cert.linkedinImpressions} INSIGHTS
                                </div>
                              )}
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               </motion.div>
             ))}
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
