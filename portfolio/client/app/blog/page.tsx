'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, Zap, Coffee, Code } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Agentic Era: Moving Beyond Predictive ML",
    excerpt: "Exploring why the future of AI belongs to autonomous agents that can reason and execute, not just predict next tokens.",
    date: "Jan 12, 2026",
    readTime: "8 min",
    category: "AI Strategy",
    slug: "agentic-era-reasoning"
  },
  {
    id: 2,
    title: "Scaling Multi-Agent Orchestration with LangGraph",
    excerpt: "A deep dive into building resilient, cyclic agentic workflows for complex financial data analysis.",
    date: "Dec 30, 2025",
    readTime: "12 min",
    category: "Engineering",
    slug: "scaling-multi-agent-langgraph"
  },
  {
    id: 3,
    title: "Why IIT Madras Data Science BS is a Game Changer",
    excerpt: "How a hybrid, world-class curriculum is shaping the next generation of data-first engineers.",
    date: "Nov 15, 2025",
    readTime: "6 min",
    category: "Education",
    slug: "iitm-ds-game-changer"
  }
];

const BlogPage = () => {
    return (
        <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 text-left"
            >
                <div className="flex items-center gap-4 mb-6 text-amber-400">
                    <BookOpen size={20} />
                    <span className="text-xs font-black tracking-[0.5em] uppercase">Tech_Journal_v1.0</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter uppercase leading-none">
                    ENGINEERING <span className="text-amber-400 font-serif italic lowercase">Logs</span>
                </h1>
                <p className="text-2xl text-slate-400 max-w-3xl font-light leading-relaxed tracking-wide">
                    Deep dives into agentic AI, multi-modal architectures, and the intersection of data science and business scalability.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, idx) => (
                    <motion.div 
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card p-10 group overflow-hidden relative flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 -translate-y-8 translate-x-8">
                            <Coffee size={200} />
                        </div>

                        <div className="flex items-center justify-between mb-8">
                            <span className="px-3 py-1 bg-amber-400/10 text-amber-400 text-[10px] font-black tracking-widest uppercase rounded-full">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-snug mb-6">
                            {post.title}
                        </h3>
                        
                        <p className="text-slate-400 text-sm font-light leading-relaxed mb-10 flex-grow">
                            {post.excerpt}
                        </p>

                        <Link href={`/blog/${post.slug}`} className="mt-auto group/link inline-flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-white/50 group-hover:text-amber-400 transition-all uppercase">
                            Read_Full_Specs <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="mt-40 p-20 glass-panel rounded-[4rem] text-center relative overflow-hidden border border-white/10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none" />
                <Zap size={48} className="mx-auto text-amber-400 mb-10" />
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 relative">Stay_Ahead_of_the_Curve</h2>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12 relative">
                    Subscribe to the engineering digest for exclusive insights into autonomous system architectures.
                </p>
                <div className="max-w-md mx-auto relative flex flex-col md:flex-row gap-4">
                    <input 
                        type="email" 
                        placeholder="TERMINAL_ACCESS@EMAIL.COM" 
                        className="flex-grow bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white focus:outline-none focus:border-amber-400 transition-colors text-xs font-black tracking-widest"
                    />
                    <button className="px-10 py-5 bg-amber-400 text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white transition-all shadow-xl shadow-amber-400/20">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
