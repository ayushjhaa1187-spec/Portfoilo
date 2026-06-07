'use client';
import React from 'react';
import { projects } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Status badge color map
const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
  'Live':              { bg: 'bg-emerald-400/10', text: 'text-emerald-400', label: 'Live' },
  'In Development':    { bg: 'bg-blue-400/10',    text: 'text-blue-400',    label: 'In Dev' },
  'Hackathon Build':   { bg: 'bg-amber-400/10',   text: 'text-amber-400',   label: 'Hackathon' },
  'Prototype':         { bg: 'bg-violet-400/10',  text: 'text-violet-400',  label: 'Prototype' },
  'Private Repo':      { bg: 'bg-slate-400/10',   text: 'text-slate-400',   label: 'Private' },
  'Research Experiment': { bg: 'bg-pink-400/10',  text: 'text-pink-400',    label: 'Research' },
  'Available on Request': { bg: 'bg-orange-400/10', text: 'text-orange-400', label: 'On Request' },
};

type FilterTab = 'ALL' | 'ML/AI' | 'Full-Stack' | 'Hackathon';

export const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = React.useState<FilterTab>('ALL');

  const tabs: FilterTab[] = ['ALL', 'ML/AI', 'Full-Stack', 'Hackathon'];

  const featuredProjects = projects.filter((p) => p.featured);

  const filtered = featuredProjects.filter((p) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'Hackathon') return p.status === 'Hackathon Build';
    return p.category === activeTab;
  });

  return (
    <section
      id="featured-projects"
      aria-label="Featured Projects"
      className="py-[var(--section-gap)] bg-[#0a0a0a] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-lg">
              Real builds from hackathons, AI experiments, and full-stack projects.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-[11px] font-bold tracking-widest rounded-full transition-all border focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  activeTab === tab
                    ? 'bg-amber-400 border-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const status = statusConfig[project.status] ?? statusConfig['Prototype'];

              return (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="glass-card group flex flex-col"
                  aria-label={project.title}
                >
                  <div className="p-7 flex flex-col h-full">
                    {/* Status + Category */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        {project.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${status.bg} ${status.text}`}
                        aria-label={`Status: ${project.status}`}
                      >
                        {status.label}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">
                      {project.shortDescription}
                    </p>

                    {/* Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.metrics.map((m) => (
                          <span
                            key={m.label}
                            className="text-[10px] font-mono px-2 py-0.5 bg-emerald-400/5 text-emerald-400 border border-emerald-400/10 rounded"
                          >
                            {m.label}: {m.value}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-white/5 text-slate-500 text-[10px] font-medium rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 cursor-not-allowed">
                          <Lock size={14} />
                          Private Repo
                        </span>
                      )}

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View all projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <button className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/10 text-white font-bold text-sm rounded-full hover:border-amber-400/40 hover:text-amber-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
              View All Projects
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
