'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import { projects } from '@/data/portfolio';
import { FiGithub, FiArrowRight } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function ProjectsClient() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'ML/AI', 'Business', 'Research'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <>
      <PageHero
        title="Featured"
        highlight="Projects"
        subtitle="Showcasing the intersection of Data Science, AI, and Business Strategy"
      />

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                ? 'bg-[var(--primary)] text-black shadow-[0_0_15px_var(--primary)] font-bold'
                : 'bg-white/5 text-[var(--text-secondary)] border border-white/10 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="h-full rounded-2xl group"
                >
                  <div className="glass-card p-6 sm:p-8 h-full flex flex-col sm:flex-row gap-6 group overflow-hidden relative group-hover:bg-white/[0.02] group-hover:border-[var(--primary)]/30 transition-all duration-500 z-10">
                    {/* Subtle Top-Right Gradient Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary)]/10 transition-colors duration-500" />

                    {/* Left Column (Content) */}
                    <div className="flex-1 flex flex-col relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <span className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/10 group-hover:scale-110 shadow-sm transition-all duration-300">
                            {project.icon}
                          </span>
                          <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                            {project.category}
                          </span>
                        </div>
                        {project.featured && (
                          <span className="text-[var(--success)] text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                            ★ <span className="hidden sm:inline">Featured</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-display font-semibold tracking-tight text-white mb-3 group-hover:text-[var(--primary-light)] transition-colors">
                        {project.title}
                      </h3>
                      {/* Always show full description on the projects page since cards are bigger */}
                      <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed mb-8 flex-grow">
                        {project.fullDescription || project.shortDescription}
                      </p>

                      <div className="mb-8 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-md text-[var(--text-muted)] border border-white/10 group-hover:border-[var(--primary)]/30 group-hover:text-[var(--text-secondary)] transition-colors font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats/Metrics Row */}
                      <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-xl bg-black/20 border border-white/5">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest mb-1 text-[var(--text-muted)] font-bold">Accuracy</div>
                          <div className="font-display font-medium text-lg text-[var(--success)]">{project.metrics.accuracy}</div>
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest mb-1 text-[var(--text-muted)] font-bold">Impact</div>
                          <div className="font-display font-medium text-lg text-[var(--primary-light)]">{project.metrics.impact}</div>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-between items-center pt-6 border-t border-[var(--border-color)]/50 group-hover:border-[var(--primary)]/30 transition-colors">
                        <Link href={`/projects/${project.slug}`} className="text-sm font-semibold flex items-center gap-2 text-[var(--text-primary)] group-hover:text-[var(--primary)] group-hover:gap-3 transition-all relative z-20">
                          Read Case Study <FiArrowRight size={16} className="group-hover:translate-x-1 duration-300" />
                        </Link>
                        <div
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)] transition-all cursor-pointer pointer-events-auto z-20"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                          }}>
                          <FiGithub size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>Explore more research and private repositories on my GitHub</p>
          <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FiGithub size={18} /> View All 33+ Repositories
          </a>
        </div>
      </Section>
    </>
  );
}
