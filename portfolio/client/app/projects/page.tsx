'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML/AI', 'Business', 'Fullstack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
          <Star size={12} className="text-blue-600 fill-blue-600" />
          <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Engineering Ecosystem</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tighter">Project Showcases</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          From satellite data analysis to high-performance AI architectures. 
          Exploring the boundaries of <span className="text-blue-600">computational intelligence</span>.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center mb-12 gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
              filter === cat 
              ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
              : 'bg-white text-slate-400 border border-slate-100 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="h-full flex flex-col p-0 overflow-hidden bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50 transition-all group rounded-3xl">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-slate-50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 group-hover:opacity-100 transition-opacity" />
                   <div className="flex items-center justify-center h-full text-slate-200 group-hover:scale-110 transition-transform duration-500">
                      <Code size={48} />
                   </div>
                   {project.featured && (
                     <div className="absolute top-4 left-4">
                        <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-lg">
                          FEATURED
                        </span>
                     </div>
                   )}
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="mb-8 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[9px] font-bold bg-slate-50 text-slate-400 px-2 py-1 rounded-md border border-slate-100 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] font-bold text-slate-300 px-2 py-1">+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex gap-4">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
                        <Github size={20} />
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    
                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-[11px] font-black text-blue-600 uppercase tracking-widest group/btn">
                      Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-24 p-12 rounded-3xl bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="relative z-10">
          <h2 className="text-3xl font-black text-white mb-4">Deep Dive into the Source</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            All production code, experimental notebooks, and architectural research are open-sourced on my GitHub.
          </p>
          <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-slate-900 hover:bg-blue-50 rounded-2xl px-10 py-6 font-black text-xs uppercase tracking-widest shadow-2xl">
              Explore 46 Repositories
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Helper component for Code icon (replacing import to avoid issues)
const Code = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);

export default ProjectsPage;
