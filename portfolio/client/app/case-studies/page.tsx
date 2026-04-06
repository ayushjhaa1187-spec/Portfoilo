'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { ExternalLink, Presentation, LayoutGrid, Database, Terminal, Search } from 'lucide-react';

// Case Study Data
const caseStudies = [
  {
    id: 1,
    title: "Enron Forensic Intelligence",
    projectSlug: "enron-insights",
    problem: "Analyzing 600,000+ internal emails for corporate fraud using RAG and sub-second semantic search.",
    domain: "AI",
    deckUrl: "https://docs.google.com/presentation/d/e/2PACX-1vT5v7zY7-5B9u-k7u-f8-7-5B9u-k7u-f8-7/pub?start=false&loop=false&delayms=3000",
    featured: true,
    impact: "75% Reduction in discovery costs"
  },
  {
    id: 2,
    title: "RetailDemand AI Forecasting",
    projectSlug: "stocksense-agent",
    problem: "Optimizing inventory for retail giants using predictive demand modeling and market sentiment.",
    domain: "Business",
    deckUrl: "https://docs.google.com/presentation/d/e/2PACX-1vT5v7zY7-5B9u-k7u-f8-7-5B9u-k7u-f8-7/pub",
    featured: false,
    impact: "94% Forecast Accuracy"
  },
  {
    id: 3,
    title: "Legal Insights Weaver",
    projectSlug: "meeting-insights-weaver",
    problem: "Automating contract compliance and risk extraction from high-volume legal documentation.",
    domain: "Research",
    deckUrl: "https://docs.google.com/presentation/d/e/2PACX-1vT5v7zY7-5B9u-k7u-f8-7-5B9u-k7u-f8-7/pub",
    featured: false,
    impact: "91% Extraction Precision"
  },
  {
    id: 4,
    title: "Campus Maintenance Hub",
    projectSlug: "hostel-issue-tracker-2026",
    problem: "Building a scalable infrastructure for managing facilities and grievances in university hostels.",
    domain: "Full-Stack",
    deckUrl: "https://docs.google.com/presentation/d/e/2PACX-1vT5v7zY7-5B9u-k7u-f8-7-5B9u-k7u-f8-7/pub",
    featured: false,
    impact: "99% Uptime SLA"
  }
];

const CaseStudiesPage = () => {
  const [filter, setFilter] = useState('All');
  const domains = ['All', 'AI', 'Business', 'Full-Stack', 'Research'];
  const featured = caseStudies.find(c => c.featured);
  const others = caseStudies.filter(c => !c.featured);

  const filteredOthers = filter === 'All' 
    ? others 
    : others.filter(c => c.domain === filter);

  return (
    <PageShell title="CASE" subtitle="studies">
      
      {/* Featured Case Study */}
      {featured && (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-blue-500/20 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative glass-panel rounded-[3rem] border-white/5 overflow-hidden grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-4 py-1.5 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                  Featured_Report
                </span>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  Category: {featured.domain}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 group-hover:text-amber-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                {featured.problem}
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                 <a 
                   href={featured.deckUrl} 
                   target="_blank"
                   className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:border-amber-400/50 hover:text-amber-400 transition-all flex items-center gap-3 text-xs font-black uppercase tracking-widest"
                 >
                   VIEW PPT DECK <Presentation size={16} />
                 </a>
                 <div className="flex items-center gap-2 text-emerald-400">
                    <Database size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">{featured.impact}</span>
                 </div>
              </div>
            </div>
            
            <div className="bg-[#121212] flex items-center justify-center p-12 min-h-[400px]">
               <iframe 
                 src={featured.deckUrl}
                 width="100%" 
                 height="100%"
                 className="rounded-2xl border border-white/5 shadow-2xl"
                 allowFullScreen
               ></iframe>
            </div>
          </div>
        </motion.div>
      )}

      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-16 justify-center">
        {domains.map(d => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all border ${
              filter === d 
                ? 'bg-amber-400 border-amber-400 text-black' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-amber-400/50'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredOthers.map((study) => (
            <motion.div
              layout
              key={study.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card group p-10 hover:border-amber-400/30 transition-all flex flex-col h-full border-white/5"
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`p-4 rounded-2xl bg-white/5 text-amber-400 group-hover:scale-110 transition-transform`}>
                   {study.domain === 'AI' && <Terminal size={24} />}
                   {study.domain === 'Business' && <LayoutGrid size={24} />}
                   {study.domain === 'Research' && <Search size={24} />}
                   {study.domain === 'Full-Stack' && <Database size={24} />}
                </div>
                <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest italic pt-2">
                   {study.domain}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 leading-none group-hover:text-amber-400 transition-colors">
                {study.title}
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {study.problem}
              </p>
              <div className="pt-8 border-t border-white/5 flex justify-between items-center">
                 <a 
                   href={study.deckUrl} 
                   target="_blank" 
                   className="text-[10px] font-black uppercase tracking-widest text-amber-400 hover:text-white flex items-center gap-2"
                 >
                   View Deck <ExternalLink size={12} />
                 </a>
                 <span className="text-[8px] font-black text-emerald-500/50 uppercase tracking-widest">{study.impact}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </PageShell>
  );
};

export default CaseStudiesPage;
