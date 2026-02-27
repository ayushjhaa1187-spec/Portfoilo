'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { achievements } from '@/data/portfolio';

import PageHero from '@/components/PageHero';

export default function AchievementsClient() {
  return (
    <>
      <PageHero
        title="Achievements &"
        highlight="Recognitions"
        subtitle="Milestones from premier IIT competitions and academic excellence"
      />

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
    </>
  );
}
