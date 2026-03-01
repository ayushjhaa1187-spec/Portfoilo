'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { projects, personalInfo } from '@/data/portfolio';
import { FiArrowRight, FiGithub } from 'react-icons/fi';

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <Section title="Featured Work" subtitle="Data science projects at the intersection of AI, business, and real-world impact.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.15)', borderColor: 'var(--primary-light)' }}
                  className="card p-6 h-full flex flex-col cursor-pointer group transition-all duration-300 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">{project.icon}</span>
                    <span className="badge badge-primary">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-grow mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="tag text-xs">{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="tag text-xs">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-auto" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: 'var(--primary-light)' }}>
                      View Details <FiArrowRight size={14} className="group-hover:translate-x-1 duration-300" />
                    </span>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="p-1 hover:text-blue-500 transition-colors z-10" style={{ color: 'var(--text-muted)' }}
                      onClick={(e) => e.stopPropagation()}>
                      <FiGithub size={18} />
                    </a>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link href="/projects" className="btn-outline">
            View All Projects <FiArrowRight size={16} />
          </Link>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.5), transparent)' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m open to ML/AI collaborations, research partnerships, and startup opportunities.
              Let&apos;s create something with real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base" style={{ padding: '14px 32px' }}>
                Let&apos;s Connect
              </Link>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="btn-outline text-base"
                style={{ padding: '14px 32px', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>
                <FiGithub size={18} /> GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
