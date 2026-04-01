'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { ArrowRight, Calendar, Clock, Terminal, Newspaper } from 'lucide-react';
import Link from 'next/link';

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          ENGINEERING <span className="text-amber-400 font-serif italic lowercase">Logs</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Documenting the development of agentic workflows and AI-driven infrastructure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group hover:border-amber-400/50 transition-all duration-500 overflow-hidden"
          >
             <div className="aspect-video bg-slate-900 border-b border-white/5 relative overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent mix-blend-overlay" />
                <Newspaper size={48} className="text-slate-800" />
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 bg-amber-400 text-black text-[9px] font-black uppercase tracking-widest rounded-full">{post.category}</span>
                </div>
             </div>
             
             <div className="p-8">
                <div className="flex items-center gap-4 text-slate-600 text-[10px] font-black uppercase tracking-widest mb-4">
                   <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                   <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-amber-400 mb-4 transition-colors leading-tight line-clamp-2 uppercase tracking-tighter">{post.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-10 line-clamp-3 font-light">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="group/btn inline-flex items-center gap-4 text-[10px] font-black text-white tracking-[0.3em] uppercase">
                   READ_ARTICLE_v1.0 <ArrowRight className="group-hover/btn:translate-x-2 transition-transform text-amber-400" size={16} />
                </Link>
             </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 text-center py-20 border-t border-white/5 bg-white/[0.01]">
         <p className="text-amber-400 font-black tracking-widest uppercase italic mb-10 flex items-center justify-center gap-4">
            <Terminal size={14} /> Knowledge Core Active
         </p>
         <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Subscribe to Intelligence Protocols</h2>
         <p className="text-slate-500 text-base font-light mb-12 tracking-wide">Stay synchronized with latest engineering deployments and technical case studies.</p>
         <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="ENTER_EMAIL..." className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 text-white font-black uppercase text-xs focus:outline-none focus:border-amber-400" />
            <button className="px-10 py-5 bg-amber-400 text-black font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-transform">SYNC_NOW</button>
         </div>
      </div>
    </div>
  );
};

export default BlogPage;
