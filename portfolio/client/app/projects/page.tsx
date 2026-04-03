'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { projects } from '@/data/projects';

// ⚡ Bolt Performance Optimization: Move static categories array outside component to prevent recreation on every render
const categories = ['All', 'ML/AI', 'Business'];

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  // ⚡ Bolt Performance Optimization: Memoize expensive array filtering to prevent O(n) recalculation on unrelated re-renders
  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Project Ecosystem</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Engineering the future of autonomous intelligence and scalable data architectures.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12 space-x-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            variant={filter === cat ? 'primary' : 'outline'}
            className={filter === cat ? 'bg-blue-600 text-white' : ''}
          >
            {cat}
          </Button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col p-6 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                    project.category === 'ML/AI' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-tighter">★ Featured</span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">{project.shortDescription}</p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-100">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-3">
                   <div className="flex justify-between items-center">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors">
                        GITHUB REPO ↗
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline">
                          LIVE DEMO ↗
                        </a>
                      )}
                   </div>
                   <Link href={`/projects/${project.slug}`} className="text-[11px] font-mono text-center py-2 bg-slate-900 text-white rounded hover:bg-blue-600 transition-colors">
                      VIEW FULL CASE STUDY
                   </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-20 text-center py-12 border-t border-slate-100">
        <p className="text-slate-400 text-sm mb-6">Explore the full codebase for all 46 repositories</p>
        <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-full border-slate-200">View All 46 Repositories</Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
