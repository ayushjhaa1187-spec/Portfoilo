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
        <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-transparent text-gray-500 border border-gray-200 hover:border-blue-300 dark:border-gray-700 dark:text-gray-400 dark:hover:border-blue-500'
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.15)' }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="h-full rounded-2xl"
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
          </AnimatePresence>
        </motion.div>
      </Section>
    </>
  );
}
