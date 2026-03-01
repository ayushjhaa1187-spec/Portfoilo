'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { experiences } from '@/data/portfolio';

import PageHero from '@/components/PageHero';

export default function ExperienceClient() {
  return (
    <>
      <PageHero
        title="Work"
        highlight="Experience"
        subtitle="My professional journey at the intersection of Data Science and Entrepreneurship"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="timeline space-y-14">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* Timeline Dot with Icon */}
                <div
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] bg-[var(--bg-primary)]"
                  style={{
                    border: `2px solid ${exp.color}`,
                    boxShadow: `0 0 15px ${exp.color}40`,
                    transform: 'translate(-25%, 0)'
                  }}
                >
                  <span className="text-xl inline-block drop-shadow-md">{exp.icon}</span>
                </div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 sm:p-10 transition-all duration-300 border-l-[4px] rounded-2xl group relative overflow-hidden"
                  style={{
                    borderLeftColor: exp.color,
                    boxShadow: `0 0 0 1px var(--border-glass), 0 10px 30px -10px ${exp.color}15`
                  }}
                >
                  {/* Subtle inner ambient glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 blur-[50px] rounded-full mix-blend-overlay group-hover:opacity-10 transition-opacity" style={{ background: exp.color }} />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-5 gap-3 relative z-10">
                    <div>
                      <h2 className="text-2xl font-display font-bold group-hover:text-[var(--primary)] transition-colors text-white">{exp.role}</h2>
                      <h3 className="text-lg font-medium mt-1.5" style={{ color: exp.color }}>{exp.company}</h3>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap self-start md:self-auto shadow-sm border"
                      style={{ color: exp.color, backgroundColor: `${exp.color}10`, borderColor: `${exp.color}30` }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mt-6 relative z-10">
                    {exp.desc.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-[var(--text-secondary)]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color, boxShadow: `0 0 8px ${exp.color}` }} />
                        <span className="leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
