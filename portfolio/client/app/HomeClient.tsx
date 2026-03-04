'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { projects, personalInfo } from '@/data/portfolio';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import LinkedInSection from '@/components/LinkedInSection';

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] min-h-screen">
      <Hero />

      {/* Professional Ecosystem Section */}
      <Section title="Professional Ecosystem." subtitle="Connecting academia at IIT Madras with real-world industry impact.">
        <LinkedInSection />
      </Section>

      {/* Featured Projects */}
      <Section title="Featured Works." subtitle="A selection of recent Data Science, ML, and AI projects.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mt-24">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full group">
                <div className="glass-card p-8 sm:p-10 h-full flex flex-col relative overflow-hidden group-hover:bg-white/[0.02] group-hover:border-[var(--primary)]/30 transition-all duration-500">
                  {/* Subtle Top-Right Gradient Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary)]/10 transition-colors duration-500" />

                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/10 group-hover:scale-110 shadow-sm transition-all duration-300">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-semibold tracking-tight text-white mb-4 group-hover:text-[var(--primary-light)] transition-colors relative z-10">
                    {project.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed mb-10 flex-grow relative z-10">
                    {project.shortDescription}
                  </p>

                  <div className="relative z-10 mt-auto">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-md text-[var(--text-muted)] border border-white/10 group-hover:border-[var(--primary)]/30 group-hover:text-[var(--text-secondary)] transition-colors font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="text-xs px-3 py-1 bg-white/5 rounded-md text-[var(--text-muted)] border border-white/10 font-medium">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-[var(--border-color)]/50 group-hover:border-[var(--primary)]/30 transition-colors">
                      <span className="text-sm font-semibold tracking-wide flex items-center gap-2 text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                        View Details <FiArrowRight size={16} className="group-hover:translate-x-1 duration-300" />
                      </span>
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)] transition-all cursor-pointer pointer-events-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}>
                        <FiGithub size={16} />
                      </div>
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
          style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl sm:text-6xl font-display font-black mb-8 tracking-tight leading-tight">
              Let's build <br /><span className="gradient-text">the future</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
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
