'use client';
import React from 'react';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// ⚡ Bolt Optimization: Moved static categories array outside of the component
// to prevent unnecessary recreation of the array object on every render.
const categories = ['ALL', 'ML/AI', 'BUSINESS', 'LABS'];

export const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = React.useState('ALL');

  // ⚡ Bolt Optimization: Memoized the filtered array calculation to prevent
  // O(n) recalculation on every re-render unless activeTab changes.
  const filtered = React.useMemo(() => {
    return projects.filter(p => {
      if (activeTab === 'ALL') return p.featured;
      return p.category.toUpperCase().includes(activeTab) && p.featured;
    });
  }, [activeTab]);

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
               SELECTED <span className="text-amber-400">WORKS</span>
             </h2>
             <p className="text-slate-500 mt-4 max-w-lg font-medium uppercase tracking-[0.3em] text-[10px]">PRODUCTION SHIPS & LAB EXPERIMENTS</p>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-[10px] font-black tracking-widest rounded-full transition-all border ${
                  activeTab === tab 
                    ? 'bg-amber-400 border-amber-400 text-black shadow-lg shadow-amber-400/20' 
                    : 'bg-white/5 border-white/10 text-slate-500 hover:border-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-[10px] font-black tracking-widest text-[#0a0a0a] uppercase py-1 px-3 bg-amber-400 rounded-full">
                    {project.category}
                  </span>
                  {project.metrics?.accuracy && project.metrics.accuracy !== 'N/A' && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-0.5 rounded border border-emerald-400/10">
                      ACC: {project.metrics.accuracy}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mt-4 text-sm leading-relaxed flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-8">
                  {project.techStack.slice(0, 5).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-white/5 text-slate-500 text-[9px] font-bold tracking-widest uppercase rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-amber-400 hover:text-white transition-colors tracking-widest flex items-center gap-1.5">
                      GITHUB <ArrowRight size={12} />
                   </a>
                   {'liveUrl' in project && typeof project.liveUrl === 'string' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-slate-500 hover:text-white transition-colors tracking-widest">
                        LIVE DEMO ↗
                      </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
