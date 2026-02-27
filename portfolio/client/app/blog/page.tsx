'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import { blogPosts } from '@/data/portfolio';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export default function BlogPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1120 0%, #1E3A8A 100%)' }}>
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: '#F1F5F9' }}>
            Blog & <span className="gradient-text">Insights</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-lg" style={{ color: '#94A3B8' }}>
            Thoughts on Data Science, Business Strategy, and the Startup Ecosystem
          </motion.p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="card h-full flex flex-col group overflow-hidden">
                  {post.featured && (
                    <div className="bg-gradient-to-r from-blue-600 to-orange-500 h-1 w-full" />
                  )}

                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="badge badge-primary">{post.category}</span>
                      <span className="text-xs font-medium flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
                        <FiClock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors line-clamp-2"
                      style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed mb-6 flex-grow line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between items-center mt-auto pt-4" style={{ borderTop: '1px solid var(--border-color)' }}>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                        {post.date}
                      </span>
                      <span className="text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        style={{ color: 'var(--primary-light)' }}>
                        Read More <FiArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
