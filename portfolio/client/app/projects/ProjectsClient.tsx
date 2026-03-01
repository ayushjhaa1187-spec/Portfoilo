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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-transparent text-gray-500 border border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-500'
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
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.2)' }}
                  className="h-full rounded-2xl"
                >
                  <div className="card p-8 h-full flex flex-col sm:flex-row gap-6 group transition-colors duration-300 hover:border-blue-500/30">
                    {/* Left Column (Content) */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{project.icon}</span>
                          <span className="badge badge-primary">{project.category}</span>
                        </div>
                        {project.featured && (
                          <span className="text-yellow-500 text-sm font-bold flex items-center gap-1">
                            ★ <span className="hidden sm:inline">Featured</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                      <p className="text-sm leading-relaxed mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                        {project.shortDescription}
                      </p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="tag text-xs">{tech}</span>
                        ))}
                      </div>

                      {/* Stats/Metrics Row */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                        <div>
                          <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Accuracy</div>
                          <div className="font-bold text-green-500">{project.metrics.accuracy}</div>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Impact</div>
                          <div className="font-bold text-blue-500">{project.metrics.impact}</div>
                        </div>
                      </div>

                      <div className="mt-auto flex justify-between items-center pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                        <Link href={`/projects/${project.slug}`} className="btn-primary text-xs" style={{ padding: '8px 16px' }}>
                          Case Study <FiArrowRight size={14} />
                        </Link>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-500"
                          style={{ color: 'var(--text-secondary)' }}>
                          <FiGithub size={16} /> Code
                        </a>
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
            <FiGithub size={18} /> View All 17+ Repositories
          </a>
        </div>
      </Section>
    </>
  );
}
