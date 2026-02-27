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
          <div className="timeline space-y-12">
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
                  className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md"
                  style={{
                    background: 'var(--bg-card)',
                    border: `2px solid ${exp.color}`,
                    transform: 'translateX(-20%)'
                  }}
                >
                  <span className="text-xl">{exp.icon}</span>
                </div>

                <div className="card p-6 sm:p-8 hover:shadow-lg transition-all border-l-4" style={{ borderLeftColor: exp.color }}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{exp.role}</h2>
                      <h3 className="text-lg font-medium mt-1" style={{ color: exp.color }}>{exp.company}</h3>
                    </div>
                    <span className="badge badge-primary text-sm whitespace-nowrap self-start md:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.desc.map((item, i) => (
                      <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
