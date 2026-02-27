'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { timeline, currentFocus, personalInfo } from '@/data/portfolio';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Banner */}
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: '#F1F5F9' }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg"
            style={{ color: '#94A3B8' }}
          >
            From Commerce to Cutting-Edge Data Science at IIT Madras
          </motion.p>
        </div>
      </div>

      {/* Philosophy */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 sm:p-10 mb-16 relative overflow-hidden group"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="absolute top-0 left-0 w-2 h-full" style={{ background: 'linear-gradient(180deg, var(--primary), var(--accent))' }} />
          <p className="text-xl sm:text-2xl font-medium italic leading-relaxed text-center sm:text-left relative z-10" style={{ color: 'var(--text-primary)' }}>
            &ldquo;{personalInfo.philosophy}&rdquo;
          </p>
        </motion.div>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              My Journey
            </h2>
            <div className="timeline space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-8"
                >
                  <div className="timeline-dot" />
                  <span className="badge badge-primary text-xs mb-2">{item.year}</span>
                  <h3 className="text-lg font-bold mt-1" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-square max-w-sm mx-auto mb-10 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(249,115,22,0.1))',
                border: '2px dashed var(--border-color)',
              }}
            >
              <div className="text-center p-6">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Professional Photo
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  Coming Soon
                </p>
              </div>
            </motion.div>

            {/* Current Focus */}
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Current Focus
            </h2>
            <div className="space-y-3 mb-10">
              {currentFocus.map((focus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card p-4"
                >
                  <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{focus}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Connect
            </h2>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="card p-3 flex items-center gap-2 cursor-pointer"
                >
                  <Icon size={18} style={{ color: 'var(--primary-light)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 card p-8"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The Vision
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {personalInfo.bio}
          </p>
        </motion.div>
      </Section>
    </div>
  );
}
