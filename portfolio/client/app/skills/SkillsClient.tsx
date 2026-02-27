'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { skillCategories } from '@/data/portfolio';

import PageHero from '@/components/PageHero';

export default function SkillsClient() {
  return (
    <>
      <PageHero
        title="Skills &"
        highlight="Expertise"
        subtitle="Technical and business capabilities spanning ML/AI, entrepreneurship, and domain expertise"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card p-8 sm:p-10"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-4" style={{ borderBottom: '1px solid var(--border-color)' }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${category.color}15`, border: `1px solid ${category.color}30` }}
                >
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          background: `${category.color}15`,
                          color: category.color,
                        }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar" style={{ height: '8px' }}>
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: skillIdx * 0.1, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}99)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center card p-10 sm:p-12"
        >
          <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Technologies I Work With
          </h3>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            Tools and frameworks in my daily workflow
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas',
              'OpenCV', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'Flask',
              'SQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Jupyter',
              'Google Colab', 'AWS', 'GDAL', 'Rasterio', 'Next.js', 'React',
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.08, y: -3 }}
                className="tag cursor-default"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>
    </>
  );
}
