'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiDownload, FiGithub } from 'react-icons/fi';
import { personalInfo, animatedTaglines } from '@/data/portfolio';
import LiveInsights from '@/components/LiveInsights';

const Hero = () => {
  const typeSequence = animatedTaglines.flatMap((t) => [t, 2500]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Ambient Glow from CSS */}
      <div className="ambient-glow animate-float" />
      <div className="ambient-glow-2 animate-float" style={{ animationDelay: '2s' }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Sub-heading badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="text-[var(--text-secondary)] font-mono text-sm sm:text-base tracking-widest uppercase opacity-80 leading-relaxed">
            Hello, Welcome
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="tag px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2.5 font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--primary-light)] shadow-sm animate-pulse" />
            OPEN TO INNOVATIVE AI ROLES
          </span>
        </motion.div>

        {/* Giant Name Typography */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-display font-extrabold tracking-tight mb-8"
        >
          {/* First Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--text-secondary)]"
          >
            Ayush
          </motion.div>
          {/* Last Name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)]"
          >
            Kumar Jha
          </motion.div>
        </div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-xl sm:text-2xl font-light text-[var(--text-secondary)] mb-4">
            {personalInfo.title}
          </h2>
          <div className="h-8 font-mono text-[var(--primary)] text-sm sm:text-base">
            <TypeAnimation
              sequence={typeSequence}
              speed={50}
              deletionSpeed={70}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 z-20"
        >
          <Link href="/projects" className="btn-primary">
            Explore My Work
          </Link>
          <a
            href="https://docs.google.com/document/d/1yRiBRiccgoBYQwmctVLHuYk1YVpn670uSgQDxgrSnSY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* Live Insights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 w-full max-w-4xl"
        >
          <LiveInsights />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] z-10"
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
