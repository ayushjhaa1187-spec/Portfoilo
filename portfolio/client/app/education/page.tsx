'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { education } from '@/data/portfolio';

export default function EducationPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: '#F1F5F9' }}>
            Education & <span className="gradient-text">Learning</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg" style={{ color: '#94A3B8' }}>
            Building a strong foundation in data science, ML/AI, and entrepreneurship
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: edu.color }} />

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </h2>
                  <p className="text-base font-medium mt-1" style={{ color: edu.color }}>
                    {edu.degree}
                  </p>
                </div>
                <span className="badge badge-primary text-xs whitespace-nowrap">{edu.period}</span>
              </div>

              {edu.focusAreas.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Focus Areas
                  </h3>
                  <ul className="space-y-2">
                    {edu.focusAreas.map((area, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: edu.color, marginTop: '2px' }}>▸</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.coursework.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tag text-xs" style={{ borderColor: `${edu.color}30`, color: edu.color }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Continuous Learning
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '📚', title: 'Self-Taught Skills', desc: 'Python, ML, statistics, and data science learned independently through projects and courses.' },
              { icon: '🏅', title: 'Online Certifications', desc: 'Completed courses in Deep Learning, NLP, and business analytics from top platforms.' },
              { icon: '📄', title: 'Research Papers', desc: 'Studying and implementing state-of-the-art papers in remote sensing and computer vision.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
