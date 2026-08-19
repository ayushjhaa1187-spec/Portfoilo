'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Download, Mail, Code2, Rocket, GitBranch, GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';

// ── Count-up animation (triggers on scroll into view) ──
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

const RollingNumber = ({
  target,
  suffix = '',
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
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
            setValue(Math.floor(easeOutQuart(progress) * target));
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

// ── Profile Avatar / Initials Card ──
const ProfileAvatar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative flex-shrink-0"
  >
    {/* Outer glow ring */}
    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-amber-400/20 via-transparent to-violet-500/20 blur-xl" />
    {/* Ring border */}
    <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-[#121212] to-violet-600/10 flex items-center justify-center">
      {/* Inner ring */}
      <div className="absolute inset-3 rounded-full border border-white/5" />
      {/* Initials */}
      <div className="relative z-10 text-center">
        <div className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-br from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent select-none">
          AKJ
        </div>
        <div className="mt-2 text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">
          Portfolio
        </div>
      </div>
      {/* Orbiting dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '0 130px', top: '50%', left: '50%', marginTop: -6, marginLeft: -6 }}
      />
    </div>
    {/* IIT Madras badge */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 bg-[#121212] border border-amber-400/30 rounded-full flex items-center gap-2 text-[11px] font-bold text-amber-400"
    >
      <GraduationCap size={12} />
      IIT Madras DS Scholar
    </motion.div>
  </motion.div>
);

// ── Animated background blob ──
const BlobBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />
    {/* Gradient blobs */}
    <motion.div
      className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/8 blur-[120px]"
      animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]"
      animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

// ── Stats data using profile (single source of truth) ──
const heroStats = [
  {
    label: 'GitHub Repos',
    value: profile.stats.publicRepos,
    suffix: '+',
    icon: GitBranch,
    color: 'text-emerald-400',
  },
  {
    label: 'Live Projects',
    value: profile.stats.liveProjects,
    suffix: '+',
    icon: Rocket,
    color: 'text-amber-400',
  },
  {
    label: 'Hackathons',
    value: profile.stats.hackathons,
    suffix: '+',
    icon: Code2,
    color: 'text-violet-400',
  },
];

// ── Main Hero Component ──
const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20"
    >
      <BlobBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 py-20">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.3em] text-emerald-400 uppercase">
                {profile.availability}
              </span>
            </motion.div>

            {/* Name — with proper spacing (NOT letter-by-letter) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none mb-4"
            >
              Ayush Kumar
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
                Jha
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 font-medium mb-4 tracking-wide"
            >
              {profile.title}
              <span className="text-white/20 mx-2">·</span>
              <span className="text-amber-400">{profile.subtitle}</span>
            </motion.p>

            {/* Short bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-base text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {profile.shortBio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <Link href="/projects">
                <button
                  className="group px-7 py-3.5 bg-amber-400 text-black font-bold text-sm rounded-full hover:bg-amber-300 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-400/20 flex items-center gap-2"
                  aria-label="View Projects"
                >
                  View Projects
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/contact">
                <button
                  className="group px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  aria-label="Contact Me"
                >
                  <Mail size={15} />
                  Contact Me
                </button>
              </Link>

              {profile.resume ? (
                <a href={profile.resume} download>
                  <button
                    className="group px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                    aria-label="Download Resume"
                  >
                    <Download size={15} />
                    Resume
                  </button>
                </a>
              ) : (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-7 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  aria-label="View LinkedIn Profile"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              )}
            </motion.div>

            {/* Social icon links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:border-amber-400/30 transition-all text-slate-400"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:border-amber-400/30 transition-all text-slate-400"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:text-amber-400 hover:border-amber-400/30 transition-all text-slate-400"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div className="flex-shrink-0">
            <ProfileAvatar />
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="grid grid-cols-3 gap-4 md:gap-6 pb-12 border-t border-white/5 pt-10"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.1, duration: 0.5 }}
              className="glass-card p-5 md:p-6 flex flex-col items-center text-center group cursor-default"
            >
              <stat.icon size={18} className={`${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
              <div className="text-2xl md:text-3xl font-black text-white mb-1">
                <RollingNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
