'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Command, FileText, Briefcase, Book } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';
import { allPosts, allCaseStudies } from '@/.contentlayer/generated';

export const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // This should be handled by parent, but let's be safe
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = query.length < 2 ? [] : [
    ...projects.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).map(p => ({ ...p, type: 'Project', icon: <Briefcase size={16} />, url: `/projects/${p.slug}` })),
    ...allPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).map(p => ({ ...p, type: 'Blog', icon: <FileText size={16} />, url: p.url })),
    ...allCaseStudies.filter(p => p.title.toLowerCase().includes(query.toLowerCase())).map(p => ({ ...p, type: 'Case Study', icon: <Book size={16} />, url: p.url })),
  ].slice(0, 8);

  const handleSelect = (url: string) => {
    router.push(url);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl z-[201] overflow-hidden border border-slate-100 dark:border-slate-800"
          >
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
              <Search className="text-slate-400" size={24} />
              <input
                autoFocus
                placeholder="Search projects, articles, case studies..."
                className="flex-grow bg-transparent border-none outline-none text-xl text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-black text-slate-400 uppercase">
                <Command size={10} /> K
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 bg-white dark:bg-slate-900">
              {results.length > 0 ? (
                <div className="space-y-2">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {results.map((res: any, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(res.url)}
                      className="w-full text-left p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                          {res.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{res.title}</div>
                          <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">{res.type}</div>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-slate-200 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              ) : query.length > 1 ? (
                <div className="py-20 text-center">
                  <div className="text-slate-300 mb-2">No results found for &quot;{query}&quot;</div>
                  <div className="text-xs text-slate-400">Try searching for keywords like &quot;ML&quot;, &quot;AI&quot;, or &quot;IIT Madras&quot;</div>
                </div>
              ) : (
                <div className="py-20 text-center">
                  <div className="text-slate-300 mb-2 italic">Start typing to search...</div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>Select with <span className="text-slate-900 dark:text-white">Enter</span></span>
              <span>Navigate with <span className="text-slate-900 dark:text-white">Arrows</span></span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ArrowRight = ({ size, className }: { size: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
