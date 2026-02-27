'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { education } from '@/data/portfolio';

import PageHero from '@/components/PageHero';

export default function EducationClient() {
  return (
    <>
      <PageHero
        title="Education &"
        highlight="Learning"
        subtitle="Building a strong foundation in data science, ML/AI, and entrepreneurship"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: edu.color }} />

              <div className="flex items-start justify-between mb-5 gap-4">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </h2>
                  <p className="text-base font-medium mt-1.5" style={{ color: edu.color }}>
                    {edu.degree}
                  </p>
                </div>
                <span className="badge badge-primary text-xs whitespace-nowrap">{edu.period}</span>
              </div>

              {edu.focusAreas.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                    Focus Areas
                  </h3>
                  <ul className="space-y-3">
                    {edu.focusAreas.map((area, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: edu.color, marginTop: '2px' }}>▸</span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {edu.coursework.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                    Key Coursework
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((course) => (
                      <span key={course} className="tag text-xs" style={{ borderColor: `${edu.color}30`, color: edu.color, padding: '6px 12px' }}>
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
          className="card p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Continuous Learning
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: '📚', title: 'Self-Taught Skills', desc: 'Python, ML, statistics, and data science learned independently through projects and courses.' },
              { icon: '🏅', title: 'Online Certifications', desc: 'Completed courses in Deep Learning, NLP, and business analytics from top platforms.' },
              { icon: '📄', title: 'Research Papers', desc: 'Studying and implementing state-of-the-art papers in remote sensing and computer vision.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  );
}
