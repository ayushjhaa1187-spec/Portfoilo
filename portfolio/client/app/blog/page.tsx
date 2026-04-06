'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-24 text-left">
        <div className="flex items-center gap-4 mb-6 text-amber-400">
          <BookOpen size={20} />
          <span className="text-xs font-black tracking-[0.5em] uppercase">LinkedIn Articles</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter uppercase leading-none">
          BLOG <span className="text-amber-400 font-serif italic lowercase">& Writing</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl font-light leading-relaxed tracking-wide">
          Expanded long-form reflections built from founder, competition, and product posts.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 group overflow-hidden relative flex flex-col h-full"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-[10px] font-black tracking-widest uppercase rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {post.readTime} min
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-snug mb-3">
              {post.title}
            </h3>
            <p className="text-amber-100/70 text-xs mb-6">{post.subtitle}</p>

            <p className="text-slate-400 text-sm font-light leading-relaxed mb-10 flex-grow">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-auto group/link inline-flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-white/50 group-hover:text-amber-400 transition-all uppercase"
            >
              Read_Full_Post <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
