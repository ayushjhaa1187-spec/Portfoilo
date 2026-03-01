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
              whileHover={{ y: -8, boxShadow: `0 20px 40px -10px ${category.color}40`, borderColor: `${category.color}` }}
              className="glass-card p-8 sm:p-10 transition-all duration-300 rounded-2xl group border border-white/5 relative overflow-hidden"
            >
              {/* Corner Glow based on category color */}
              <div className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none" style={{ background: category.color }} />
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-4 relative z-10" style={{ borderBottom: '1px solid var(--border-glass)' }}>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-lg"
                  style={{ background: `${category.color}15`, border: `1px solid ${category.color}40`, textShadow: `0 0 15px ${category.color}` }}
                >
                  {category.icon}
                </div>
                <h2 className="text-xl font-display font-bold text-white group-hover:text-white transition-colors">
                  {category.title}
                </h2>
              </div>

              {/* Skills */}
              <div className="space-y-6 relative z-10">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-sm border"
                        style={{
                          background: `${category.color}10`,
                          color: category.color,
                          borderColor: `${category.color}30`,
                          textShadow: `0 0 8px ${category.color}80`
                        }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-black/50 rounded-full overflow-hidden" style={{ height: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <motion.div
                        className="h-full rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: skillIdx * 0.1, ease: 'easeOut' }}
                        style={{ background: `linear-gradient(90deg, ${category.color}80, ${category.color})`, boxShadow: `0 0 10px ${category.color}` }}
                      >
                        <div className="absolute right-0 top-0 w-2 h-full bg-white opacity-50 blur-[2px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center glass-card p-10 sm:p-14 border border-white/5 relative overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[var(--primary)] opacity-[0.15] blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[var(--success)] opacity-[0.1] blur-[100px] rounded-full pointer-events-none" />

          <h3 className="text-3xl font-display font-bold mb-3 text-white relative z-10">
            Tech Arsenal
          </h3>
          <p className="text-sm md:text-base mb-10 text-[var(--text-secondary)] relative z-10 max-w-xl mx-auto">
            The programming languages, frameworks, and tools I use to build scalable machine learning architectures and autonomous agents.
          </p>

          <div className="flex flex-wrap justify-center gap-3 relative z-10">
            {[
              'Python', 'TypeScript', 'Next.js', 'React', 'Tailwind',
              'Node.js', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas',
              'OpenCV', 'Plotly', 'Streamlit', 'Flask', 'FastAPI',
              'SQL', 'PostgreSQL', 'Docker', 'AWS', 'Vercel', 'Jupyter',
              'Remote Sensing', 'Data APIs'
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="px-4 py-2 bg-white/5 rounded-md text-sm text-[var(--text-muted)] border border-white/10 hover:border-[var(--primary)]/50 hover:text-white transition-all cursor-default backdrop-blur-md"
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
