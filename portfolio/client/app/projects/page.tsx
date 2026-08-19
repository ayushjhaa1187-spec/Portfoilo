'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Search, Filter, ExternalLink, Github, Lock, ArrowRight, Zap } from 'lucide-react';
import { PageShell } from '@/components/PageShell';

type FilterCategory = 'ALL' | 'ML/AI' | 'Full-Stack' | 'Business' | 'UX Labs' | 'Experimental';
type SortBy = 'featured' | 'recent';

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  'Live':                { bg: 'bg-emerald-400/10', text: 'text-emerald-400' },
  'In Development':      { bg: 'bg-blue-400/10',    text: 'text-blue-400' },
  'Hackathon Build':     { bg: 'bg-amber-400/10',   text: 'text-amber-400' },
  'Prototype':           { bg: 'bg-violet-400/10',  text: 'text-violet-400' },
  'Private Repo':        { bg: 'bg-slate-400/10',   text: 'text-slate-400' },
  'Research Experiment': { bg: 'bg-pink-400/10',    text: 'text-pink-400' },
  'Available on Request':{ bg: 'bg-orange-400/10',  text: 'text-orange-400' },
};

const CATEGORIES: FilterCategory[] = ['ALL', 'ML/AI', 'Full-Stack', 'Business', 'UX Labs', 'Experimental'];

const ProjectsPage = () => {
  const [filter, setFilter] = useState<FilterCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('featured');

  const filtered = useMemo(() => {
    let result = [...projects];

    // Filter by category
    if (filter !== 'ALL') {
      result = result.filter((p) => p.category === filter);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q)) ||
          (p.tags ?? []).some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'featured') {
      result = result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [filter, searchQuery, sortBy]);

  return (
    <PageShell title="PROJECT" subtitle="lab">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-slate-400 max-w-2xl mb-16 font-light leading-relaxed"
      >
        Real builds — from hackathon sprints to AI experiments and full-stack products.
        Every project has a real GitHub repo or clear status label.
      </motion.p>

      {/* Controls */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-40 py-4 glass-panel px-5 rounded-2xl">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="search"
            placeholder="Search projects or tech stack..."
            aria-label="Search projects"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-sm placeholder-slate-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-[11px] font-bold tracking-wide uppercase transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                filter === cat
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                  : 'bg-white/5 text-slate-500 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortBy)}
          aria-label="Sort projects"
          className="bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 cursor-pointer"
        >
          <option value="featured">Sort: Featured First</option>
          <option value="recent">Sort: Most Recent</option>
        </select>
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
        <Filter size={13} />
        <span>
          Showing {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const statusStyle = STATUS_COLORS[project.status] ?? STATUS_COLORS['Prototype'];

            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-card flex flex-col group overflow-hidden"
                aria-label={project.title}
              >
                {/* Visual thumbnail */}
                <div className="h-44 bg-slate-900 relative overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-violet-500/15 group-hover:scale-105 transition-transform duration-500" />
                  {/* Category chip */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[9px] font-bold tracking-widest py-1 px-3 bg-white/10 backdrop-blur text-white rounded-full uppercase border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 z-10 text-amber-400" title="Featured">
                      <Zap size={14} fill="currentColor" />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm z-20">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="px-5 py-2.5 bg-amber-400 text-black text-xs font-bold tracking-wide rounded-full flex items-center gap-2 hover:bg-amber-300 transition-colors"
                    >
                      View Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Status badge */}
                  <span
                    className={`self-start text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${statusStyle.bg} ${statusStyle.text}`}
                  >
                    {project.status}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2 leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                    {project.shortDescription}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-medium bg-white/5 text-slate-500 px-2 py-0.5 rounded border border-white/5 uppercase tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] text-slate-600 px-1">+{project.techStack.length - 4}</span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex gap-3">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="text-slate-500 hover:text-amber-400 transition-colors"
                        >
                          <Github size={16} />
                        </a>
                      ) : (
                        <span className="text-slate-700" title="Private repository">
                          <Lock size={16} />
                        </span>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="text-slate-500 hover:text-amber-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[10px] font-bold text-slate-500 hover:text-amber-400 transition-colors flex items-center gap-1"
                    >
                      Details <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-20 py-20 text-center border border-white/5 rounded-2xl">
          <Search className="mx-auto text-slate-700 mb-4" size={40} />
          <p className="text-slate-500 font-bold">No projects match your search.</p>
          <button
            onClick={() => { setSearchQuery(''); setFilter('ALL'); }}
            className="mt-4 text-amber-400 text-sm font-bold hover:text-white transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* GitHub CTA */}
      <div className="mt-24 text-center py-16 border-t border-white/5">
        <p className="text-slate-600 text-sm mb-6 uppercase tracking-widest font-bold">
          46+ public repositories on GitHub
        </p>
        <a
          href="https://github.com/ayushjhaa1187-spec"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all GitHub repositories"
        >
          <button className="px-10 py-4 bg-transparent border border-white/10 hover:border-amber-400 text-white font-bold text-sm tracking-wide rounded-full transition-all hover:bg-amber-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            View All on GitHub
          </button>
        </a>
      </div>
    </PageShell>
  );
};

export default ProjectsPage;
