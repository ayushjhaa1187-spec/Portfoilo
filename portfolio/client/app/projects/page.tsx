'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Search, Filter, ExternalLink, Github, ArrowRight, Zap, Target, Users, Clock } from 'lucide-react';
import { PageShell } from '@/components/PageShell';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['ALL', 'AI/ML', 'FULL-STACK', 'HACKATHON', 'TOOLS', 'DATA'];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const pCat = p.category.toUpperCase().replace(' ', '-');
      const matchesFilter = filter === 'ALL' || pCat === filter || (filter === 'DATA' && pCat === 'DATA-SCIENCE') || (filter === 'AI/ML' && pCat === 'ML/AI');
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <PageShell title="PROJECT" subtitle="lab">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-slate-400 max-w-3xl mb-24 font-light leading-relaxed tracking-wide"
      >
        From autonomous agents to full-scale production engines. <br className="hidden md:block" />
        Engineering the next epoch of digital infrastructure.
      </motion.p>

      {/* Controls */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-24 z-40 py-4 glass-panel px-6 rounded-2xl border-white/5">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search projects, stack, or keywords..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-amber-400 transition-colors text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-black tracking-widest uppercase transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20' 
                  : 'bg-white/5 text-slate-500 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest px-2">
         <Filter size={14} />
         <span>Showing {filteredProjects.length} experimental units</span>
      </div>

      {/* Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Card className="h-full flex flex-col glass-card group overflow-hidden">
                {/* Visual Thumbnail */}
                <div className="h-48 bg-slate-900 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-black tracking-widest py-1 px-3 bg-white text-black rounded-full uppercase">
                         {project.category}
                      </span>
                   </div>
                   {project.featured && (
                      <div className="absolute top-4 right-4 z-10 text-amber-400">
                         <Zap size={16} fill="currentColor" />
                      </div>
                   )}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm z-20">
                      <Link href={`/projects/${project.slug}`} className="px-6 py-2 bg-amber-400 text-black text-xs font-black tracking-widest rounded-full flex items-center gap-2">
                         VIEW CASE STUDY <ArrowRight size={14} />
                      </Link>
                   </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors tracking-tight line-clamp-1">
                      {project.title}
                   </h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light line-clamp-2">
                      {project.shortDescription}
                   </p>

                   {/* Tech Stack Pills */}
                   <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-[9px] font-black bg-white/5 text-slate-500 px-2 py-0.5 rounded border border-white/5 tracking-widest uppercase">
                           {tech}
                        </span>
                      ))}
                   </div>

                   {/* Metrics Row */}
                   <div className="mt-auto grid grid-cols-2 gap-4 pb-6 border-b border-white/5 mb-6">
                      {project.metrics.accuracy && (
                        <div className="flex items-center gap-2">
                           <Target className="text-emerald-400" size={14} />
                           <div>
                              <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Accuracy</p>
                              <p className="text-xs font-bold text-white">{project.metrics.accuracy}</p>
                           </div>
                        </div>
                      )}
                      {project.metrics.speed && (
                        <div className="flex items-center gap-2">
                           <Clock className="text-amber-400" size={14} />
                           <div>
                              <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Latency</p>
                              <p className="text-xs font-bold text-white">{project.metrics.speed}</p>
                           </div>
                        </div>
                      )}
                      {project.metrics.users && (
                         <div className="flex items-center gap-2">
                            <Users className="text-blue-400" size={14} />
                            <div>
                               <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Reach</p>
                               <p className="text-xs font-bold text-white">{project.metrics.users}</p>
                            </div>
                         </div>
                      )}
                      {project.metrics.impact && !project.metrics.accuracy && !project.metrics.speed && !project.metrics.users && (
                         <div className="flex items-center gap-2">
                            <Zap className="text-orange-400" size={14} />
                            <div>
                               <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Impact</p>
                               <p className="text-xs font-bold text-white truncate max-w-[80px]">{project.metrics.impact}</p>
                            </div>
                         </div>
                      )}
                   </div>

                   {/* Action Buttons */}
                   <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" title="GitHub Source">
                            <Github size={18} />
                         </a>
                         {project.liveUrl && (
                           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-white transition-colors" title="Live Demo">
                              <ExternalLink size={18} />
                           </a>
                         )}
                      </div>
                      <Link href={`/projects/${project.slug}`} className="text-[10px] font-black text-slate-600 hover:text-amber-400 tracking-tighter transition-colors">
                         FULL_SPECS_v1.0 ↗
                      </Link>
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="mt-20 py-20 text-center border-t border-white/5"
        >
           <Target className="mx-auto text-slate-800 mb-4" size={48} />
           <p className="text-slate-500 font-black tracking-widest uppercase">No projects matching your search criteria</p>
        </motion.div>
      )}

      {/* Footer Stat - ADDING PERSONAL SPACE */}
      <div className="mt-64 text-center py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-amber-400/5">
        <p className="text-slate-600 text-base mb-12 tracking-[0.3em] font-black uppercase">Curating a legacy of 50+ Technical Repositories</p>
        <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer">
           <button className="px-16 py-6 bg-transparent border-2 border-white/10 hover:border-amber-400 text-white font-black uppercase text-sm tracking-[0.3em] rounded-full transition-all hover:bg-amber-400 hover:text-black hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
              Access Entire Knowledge Base
           </button>
        </a>
      </div>
    </PageShell>
  );
};

export default ProjectsPage;
