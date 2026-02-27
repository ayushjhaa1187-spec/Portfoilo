'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { researchAreas, currentFocus } from '@/data/portfolio';
import { FiTarget } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function ResearchClient() {
  return (
    <>
      <PageHero
        title="Research"
        highlight="Interests"
        subtitle="Exploring the frontiers of ML/AI, with a focus on Satellite Data and Earth Observation."
      />

      <Section>
        {/* Research Areas Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card p-8 h-full hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4 p-4 rounded-xl inline-block" style={{ background: 'var(--bg-secondary)' }}>
                {area.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{area.title}</h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{area.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Current Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border p-8"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="flex items-center gap-3 mb-6">
            <FiTarget size={28} className="text-blue-500" />
            <h2 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>Current Focus</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Currently working on a project at IIT Madras to improve the accuracy of crop yield prediction using time-series satellite data and deep learning models. My approach integrates multi-spectral earth observation data to derive actionable agricultural insights.
              </p>

              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Key Methodologies</h3>
              <ul className="space-y-3">
                {[
                  'Time-series analysis using LSTM/GRU networks',
                  'Data fusion of optical and radar (SAR) imagery',
                  'Transfer learning from pre-trained models on larger datasets',
                  'Semantic segmentation using U-Net architectures'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--primary-light)' }} />
                    <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Broader Themes</h3>
              <div className="space-y-3">
                {currentFocus.map((focus, i) => (
                  <div key={i} className="card p-4 border border-blue-900/20 dark:border-blue-500/10">
                    <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
