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
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card p-6 sm:p-8"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${category.color}15`,
                          color: category.color,
                        }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
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
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas',
              'OpenCV', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'Flask',
              'SQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Jupyter',
              'Google Colab', 'AWS', 'GDAL', 'Rasterio', 'Next.js', 'React',
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="tag"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
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
