'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { achievements } from '@/data/portfolio';

export default function AchievementsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: '#F1F5F9' }}>
            Achievements & <span className="gradient-text">Recognitions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg" style={{ color: '#94A3B8' }}>
            Milestones from premier IIT competitions and academic excellence
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div
                className="card p-8 h-full flex flex-col group relative overflow-hidden"
              >
                {/* Gradient Top Border Effect */}
                <div
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
                  style={{ background: item.color }}
                />

                <div className="flex justify-between items-start mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-sm"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <span className="badge" style={{ background: `${item.color}15`, color: item.color }}>
                    {item.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h2>

                <p className="text-base leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-sm font-medium" style={{ color: item.color }}>
                    Verified Achievement
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
