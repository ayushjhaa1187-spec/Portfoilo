'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/Section';
import { blogPosts } from '@/data/portfolio';
import { FiClock, FiArrowRight } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function BlogClient() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = filter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  return (
    <>
      <PageHero
        title="Blog &"
        highlight="Insights"
        subtitle="Thoughts on Data Science, Business Strategy, and the Startup Ecosystem"
      />

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                ? 'bg-[var(--primary)] text-black shadow-[0_0_15px_var(--primary)] font-bold'
                : 'bg-white/5 text-[var(--text-secondary)] border border-white/10 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                layout
                key={post.slug}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full rounded-2xl group"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="neon-border h-full">
                    <div className="glass-card h-full flex flex-col group overflow-hidden relative z-10 transition-colors duration-300 hover:border-[var(--primary)]/30">
                      {post.featured && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--success)] to-[var(--primary)] shadow-[0_0_10px_var(--primary)] z-20" />
                      )}

                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-6">
                          <span className="tag px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20">{post.category}</span>
                          <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[var(--text-muted)]">
                            <FiClock size={12} className="text-[var(--primary)]" /> {post.readTime}
                          </span>
                        </div>

                        <h2 className="text-xl font-display font-medium mb-4 group-hover:text-[var(--primary)] transition-colors line-clamp-2 text-white">
                          {post.title}
                        </h2>

                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex justify-between items-center mt-auto pt-5 border-t border-[var(--border-glass)]">
                          <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                            {post.date}
                          </span>
                          <span className="text-sm font-semibold flex items-center gap-2 text-[var(--primary)] group-hover:gap-3 transition-all relative z-20">
                            Read More <FiArrowRight size={14} className="group-hover:translate-x-1 duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
