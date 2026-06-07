'use client';

import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blog';
import { ArrowLeft, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function BlogPostDetail() {
  const { slug } = useParams();
  const router = useRouter();

  const post = useMemo(() => 
    blogPosts.find(p => p.slug === slug), 
  [slug]);

  const toc = useMemo(() => {
    if (!post?.content) return [];
    const lines = post.content.split('\n');
    return lines
      .filter(line => line.startsWith('## ') || line.startsWith('### '))
      .map(line => ({
        id: line.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-'),
        text: line.replace(/#/g, '').trim(),
        level: line.startsWith('### ') ? 3 : 2
      }));
  }, [post]);

  if (!post) return (
    <div className="min-h-screen pt-40 px-6 flex flex-col items-center justify-center">
       <p className="text-amber-400 font-black tracking-widest text-4xl mb-4 uppercase">404_POST_MISSING</p>
       <Link href="/blog" className="text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black tracking-[0.4em]">Back to Research</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Navigation */}
        <div className="flex items-center gap-6 mb-20 animate-in fade-in slide-in-from-left-4 duration-1000">
          <Link href="/blog" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-amber-400 hover:text-black transition-all">
             <ArrowLeft size={16} />
          </Link>
          <span className="px-4 py-1.5 bg-amber-400/10 border border-amber-400/20 text-[10px] font-black text-amber-400 tracking-widest uppercase rounded-full">
             {post.category}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <article className="flex-grow max-w-4xl order-2 lg:order-1">
             <header className="mb-20">
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[1.0] mb-8">
                   {post.title}
                </h1>
                {post.subtitle && (
                   <p className="text-xl text-amber-100/50 italic mb-8 -mt-4">{post.subtitle}</p>
                )}
                <div className="flex flex-wrap items-center gap-8 border-b border-white/5 pb-8">
                   <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase flex items-center gap-2">
                       <Clock size={12} /> {post.readTime} min read
                   </span>
                   <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase italic border-l border-white/5 pl-8">
                       {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : (post.date || 'March 2026')}
                   </span>
                </div>
             </header>

             {/* Simple Markdown-like Renderer */}
             <div className="prose prose-invert prose-amber max-w-none space-y-8">
                {post.content.split('\n').map((line, i) => {
                  if (line.startsWith('## ')) return <h2 key={i} id={line.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-')} className="text-3xl font-black text-white uppercase tracking-tight mt-16 mb-8">{line.replace('## ', '')}</h2>;
                  if (line.startsWith('### ')) return <h3 key={i} id={line.replace(/#/g, '').trim().toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold text-amber-400 uppercase tracking-tight mt-12 mb-6">{line.replace('### ', '')}</h3>;
                  if (line.trim()) return <p key={i} className="text-lg text-slate-400 leading-relaxed font-medium">{line}</p>;
                  return null;
                })}
             </div>

             {/* Discuss / Call to action */}
             <div className="mt-32 p-12 glass-card border border-amber-400/20 bg-amber-400/[0.01] relative overflow-hidden flex flex-col items-center text-center">
                <div className="relative z-10">
                   <h3 className="text-2xl font-black text-white uppercase mb-6">WANT_TO_DISCUSS_THIS?</h3>
                   <p className="text-slate-500 text-sm mb-12 max-w-md">Bridging technical theory and actual market execution requires coordination. Let's talk architecture.</p>
                   <Link href="/contact" className="group flex items-center justify-center gap-3 bg-amber-400 text-black px-12 py-5 rounded-xl font-black tracking-widest uppercase text-[10px] hover:bg-white transition-all shadow-2xl shadow-amber-400/20">
                      START CONVERSATION <MessageSquare size={16} />
                   </Link>
                </div>
             </div>
          </article>

          {/* Sidebar / Table of Contents */}
          <aside className="w-full lg:w-72 flex-shrink-0 order-1 lg:order-2 space-y-12 h-fit lg:sticky lg:top-32">
             <div>
                <p className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase mb-8">Table_Of_Contents v1.5</p>
                <nav className="space-y-4">
                  {toc.map((item) => (
                    <a 
                      key={item.id} 
                      href={`#${item.id}`}
                      className={`block text-[10px] font-black tracking-widest uppercase transition-all hover:text-amber-400 ${
                        item.level === 3 ? 'pl-4 text-slate-700' : 'text-slate-500'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
             </div>

             <div className="pt-12 border-t border-white/5">
                <p className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase mb-8">Related_Nodes</p>
                <div className="space-y-8">
                   {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(related => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                         <h4 className="text-sm font-bold text-slate-300 group-hover:text-amber-400 transition-colors uppercase leading-tight mb-2">{related.title}</h4>
                         <span className="text-[9px] text-slate-600 font-black tracking-widest">{related.readTime} min read</span>
                      </Link>
                   ))}
                </div>
             </div>
          </aside>
        </div>

      </div>
    </div>
  );
}
