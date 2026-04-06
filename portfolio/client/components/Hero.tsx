'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Terminal, Star, Users, GitCommitHorizontal } from 'lucide-react';
import { fadeUp, scaleIn, VIEWPORT, staggerContainer } from '@/lib/animations';

interface GithubStats {
  repos: number;
  stars: number;
  followers: number;
  recentCommits: number;
}

const DEFAULT_STATS: GithubStats = {
  repos: 46,
  stars: 120,
  followers: 50,
  recentCommits: 0
};

const RollingNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  const name = 'AYUSH KUMAR JHA';
  const [stats, setStats] = useState<GithubStats>(DEFAULT_STATS);

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      try {
        const response = await fetch('/api/github-stats');
        if (!response.ok) return;

        const payload = await response.json();
        if (!isMounted) return;

        setStats({
          repos: payload.repos ?? DEFAULT_STATS.repos,
          stars: payload.stars ?? DEFAULT_STATS.stars,
          followers: payload.followers ?? DEFAULT_STATS.followers,
          recentCommits: payload.recentCommits ?? DEFAULT_STATS.recentCommits
        });
      } catch {
        // Keep fallback stats when GitHub API is unavailable.
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={scaleIn}
          className="mb-8 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">Available for scale-up partnerships</span>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-6">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              custom={i * 0.3}
              className={`text-5xl md:text-8xl font-black tracking-tighter ${char === ' ' ? 'mx-4' : 'text-white'}`}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p 
          variants={fadeUp}
          custom={1}
          className="text-xl md:text-2xl text-slate-400 font-light mb-10 max-w-3xl text-center leading-relaxed"
        >
          IIT Madras Data Scientist & Entrepreneurial Innovator <br className="hidden md:block" />
          Building <span className="text-amber-400 font-medium">high-performance data ecosystems</span> and autonomous AI architecture.
        </motion.p>

        <motion.div 
          variants={fadeUp}
          custom={1.2}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/projects">
            <button className="px-8 py-4 bg-amber-400 text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-400/10 flex items-center gap-2 group">
              Explore Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <div className="flex gap-2">
            <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <Link href="/contact" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors">
              <Terminal size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1.5}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 w-full max-w-4xl"
        >
          {[
            { label: 'Public Repos', value: stats.repos, icon: <Github size={14} /> },
            { label: 'Total Stars', value: stats.stars, icon: <Star size={14} /> },
            { label: 'Followers', value: stats.followers, icon: <Users size={14} /> },
            { label: 'Recent Commits', value: stats.recentCommits, icon: <GitCommitHorizontal size={14} /> }
          ].map((stat, i) => (
            <motion.div key={i} variants={scaleIn} custom={i} className="bg-white/5 border border-white/10 p-6 flex flex-col items-center group hover:bg-amber-400/5 transition-colors">
              <div className="text-amber-400 mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-black text-white">
                <RollingNumber value={stat.value} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
