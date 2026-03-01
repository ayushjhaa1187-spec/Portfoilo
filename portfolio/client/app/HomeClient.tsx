'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { projects, personalInfo } from '@/data/portfolio';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <Hero />

      {/* Featured Projects */}
      <Section title="Featured Works." subtitle="A selection of recent Data Science, ML, and AI projects.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="neon-border h-full">
                  <div className="glass-card p-6 h-full flex flex-col cursor-pointer relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 inline-block drop-shadow-lg">
                        {project.icon}
                      </span>
                      <span className="tag">{project.category}</span>
                    </div>

                    <h3 className="text-2xl font-display font-medium mb-3 group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/5 rounded-md text-[var(--text-muted)] border border-white/5 group-hover:border-[var(--primary)]/30 group-hover:text-[var(--primary)] transition-colors">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-[var(--text-muted)] border border-white/5">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-5 mt-auto border-t border-[var(--border-glass)]">
                      <span className="text-sm font-semibold flex items-center gap-2 text-[var(--primary)] group-hover:gap-3 transition-all">
                        View Details <FiArrowRight size={16} className="group-hover:translate-x-1 duration-300" />
                      </span>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="p-2 bg-white/5 rounded-full hover:bg-[var(--primary)] hover:text-black transition-colors text-white z-20"
                        onClick={(e) => e.stopPropagation()}>
                        <FiGithub size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/projects" className="btn-outline">
            View All Projects
          </Link>
        </motion.div>
      </Section>

      {/* Modern CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-[var(--border-glass)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-card)]" />
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--success), transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl sm:text-6xl font-display font-black mb-6 tracking-tight uppercase">
              Let's build <br /><span className="gradient-text">the future</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
              I'm currenly exploring new opportunities in Machine Learning, AI research, and innovative tech. My inbox is always open.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact" className="btn-primary">
                Say Hello <FiExternalLink />
              </Link>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiGithub size={18} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
