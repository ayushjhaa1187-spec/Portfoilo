'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, ArrowRight, Github, Linkedin, Terminal, Trophy } from 'lucide-react';

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const RollingNumber = ({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          observer.unobserve(el);

          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setValue(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

interface GithubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
  topLanguages: string[];
}

const Hero = ({ githubStats }: { githubStats?: { publicRepos?: number } }) => {
  const name = 'AYUSH KUMAR JHA';
  const [liveStats, setLiveStats] = useState<GithubStats | null>(null);

  useEffect(() => {
    let mounted = true;
    const loadStats = async () => {
      try {
        const res = await fetch('/api/github-stats');
        if (!res.ok) return;
        const data = (await res.json()) as GithubStats;
        if (mounted) setLiveStats(data);
      } catch {
        // Use fallback values already present in UI.
      }
    };

    loadStats();
    return () => {
      mounted = false;
    };
  }, []);

  const stats = [
    { label: 'Technical Repos', value: liveStats?.publicRepos || githubStats?.publicRepos || 46, suffix: '+', icon: Github },
    { label: 'Predictive Precision', value: 94, suffix: '%', icon: Sparkles },
    { label: 'Discovery Efficiency', value: 75, suffix: '%', icon: Trophy },
    { label: 'Systems Infrastructure', value: 99, suffix: '%', icon: Terminal }
  ];

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{ backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 px-6 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.4em] text-amber-400 uppercase">Available for scale-up partnerships</span>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-6">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`text-5xl md:text-8xl font-black tracking-tight ${char === ' ' ? 'mx-6' : 'text-white'}`}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-16 max-w-4xl text-center leading-relaxed tracking-wide"
        >
          IIT Madras Data Scientist & Entrepreneurial Innovator <br className="hidden md:block" />
          Building <span className="text-amber-400 font-medium">high-performance data ecosystems</span> and autonomous AI architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/projects">
            <button className="px-8 py-4 bg-amber-400 text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-400/10 flex items-center gap-2 group">
              Explore Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <div className="flex gap-2">
            <a
              href="https://github.com/ayushjhaa1187-spec"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <Link href="/contact" className="p-4 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 transition-colors">
              <Terminal size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-32 w-full max-w-5xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-6 flex flex-col items-center glass-card"
            >
              <div className="text-amber-400 mb-2">
                <stat.icon size={14} />
              </div>
              <div className="text-3xl font-black text-white">
                <RollingNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
