'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { ArrowUpRight, Clock, Eye, Calendar } from 'lucide-react';

const categories = ['All', 'AI', 'Full-Stack', 'founder', 'tech', 'case-study', 'competition'];

export default function BlogListingPage() {
  const [filter, setFilter] = useState('All');

  const filteredPosts = blogPosts.filter(post => 
    filter === 'All' ? true : post.category === filter
  );

  const featuredPost = blogPosts[0];
  const gridPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : (filteredPosts[0]?.slug === featuredPost.slug ? [] : filteredPosts);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-20">
          <p className="text-amber-400 text-xs font-black tracking-[0.6em] uppercase mb-6">Technical_Reflections v3.5</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
            ENGINEERING <span className="text-amber-400 font-serif italic lowercase">blog</span>
          </h1>
        </header>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.div
                 whileHover={{ y: -6 }}
                 className="glass-card p-12 bg-white/[0.03] border border-white/5 relative overflow-hidden group"
              >
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
                  <div className="lg:max-w-2xl">
                    <div className="flex items-center gap-4 mb-8">
                      <span className="px-4 py-1 bg-amber-400/10 border border-amber-400/20 text-[8px] font-black text-amber-400 tracking-widest uppercase rounded-full">
                        FEATURED_ARTICLE
                      </span>
                      <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase flex items-center gap-2">
                         <Clock size={12} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight uppercase group-hover:text-amber-400 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6">
                       <span className="text-xs font-black tracking-widest text-amber-400 flex items-center gap-2 uppercase">
                          Read Experience <ArrowUpRight size={14} />
                       </span>
                       {(featuredPost.linkedinImpressions || featuredPost.impressions) && (
                         <span className="text-[10px] text-slate-600 font-black tracking-widest uppercase flex items-center gap-2">
                            <Eye size={12} /> {featuredPost.linkedinImpressions || featuredPost.impressions} READS
                         </span>
                       )}
                    </div>
                  </div>
                  {/* Visual Accent */}
                  <div className="hidden lg:block w-48 h-48 border border-white/5 rounded-3xl rotate-12 flex items-center justify-center bg-white/[0.01]">
                     <span className="text-amber-400/20 text-8xl font-serif italic lowercase">01</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 no-scrollbar overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setFilter(cat)}
               className={`px-6 py-2 rounded-full border text-[10px] font-black tracking-widest uppercase transition-all duration-300 ${
                 filter === cat 
                   ? 'bg-amber-400 border-amber-400 text-black' 
                   : 'bg-white/5 border-white/10 text-slate-500 hover:border-amber-400/40 hover:text-amber-400'
               }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <AnimatePresence mode="popLayout">
             {gridPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="glass-card p-10 bg-white/[0.02] border border-white/5 h-full group">
                      <div className="flex items-center justify-between mb-8">
                        <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-[8px] font-black text-amber-400 tracking-widest uppercase rounded-full">
                           {post.category}
                        </span>
                        <span className="text-[10px] text-slate-600 font-black tracking-widest uppercase flex items-center gap-2">
                           <Clock size={12} /> {post.readTime} min
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-400 transition-colors uppercase leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-10 line-clamp-2">
                         {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                         <span className="text-[10px] text-slate-600 font-black tracking-widest uppercase italic">
                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : (post.date || 'March 2026')}
                         </span>
                         <ArrowUpRight className="text-amber-400/50 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
             ))}
           </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
