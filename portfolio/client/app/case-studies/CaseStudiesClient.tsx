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
              <Link href={`/case-studies/${study.slug}`} className="block h-full">
                <div className="card h-full flex flex-col group overflow-hidden">
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="badge badge-primary">{study.category}</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors"
                      style={{ color: 'var(--text-primary)' }}>
                      {study.title}
                    </h2>

                    <p className="text-base leading-relaxed mb-6 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                      <span className="font-semibold block mb-1">The Challenge:</span>
                      <span className="line-clamp-3">{study.challenge}</span>
                    </p>

                    <div className="flex justify-between items-center mt-auto pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {study.date}
                      </span>
                      <span className="text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: 'var(--primary-light)' }}>
                        Read Case Study <FiArrowRight size={14} />
                      </span>
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
