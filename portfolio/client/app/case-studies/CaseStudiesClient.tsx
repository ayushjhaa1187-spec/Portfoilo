'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import { caseStudies } from '@/data/portfolio';
import { FiArrowRight } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function CaseStudiesClient() {
  return (
    <>
      <PageHero
        title="Case"
        highlight="Studies"
        subtitle="Deep dives into complex problems and how I solved them using data"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${study.slug}`} className="block h-full group">
                <div className="neon-border h-full">
                  <div className="glass-card h-full flex flex-col overflow-hidden relative z-10 transition-colors duration-300 hover:border-[var(--primary)]/30">
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-center mb-6">
                        <span className="tag px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20">{study.category}</span>
                      </div>

                      <h2 className="text-2xl font-display font-medium mb-4 group-hover:text-[var(--primary)] transition-colors text-white">
                        {study.title}
                      </h2>

                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
                        <span className="font-semibold text-white block mb-2 uppercase tracking-widest text-xs">The Challenge:</span>
                        <span className="line-clamp-3">{study.challenge}</span>
                      </p>

                      <div className="flex justify-between items-center mt-auto pt-5 border-t border-[var(--border-glass)]">
                        <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                          {study.date}
                        </span>
                        <span className="text-sm font-semibold flex items-center gap-2 text-[var(--primary)] group-hover:gap-3 transition-all relative z-20">
                          Read Case Study <FiArrowRight size={14} className="group-hover:translate-x-1 duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
