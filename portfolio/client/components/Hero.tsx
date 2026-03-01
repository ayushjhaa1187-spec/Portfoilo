'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiDownload, FiGithub } from 'react-icons/fi';
import { personalInfo, animatedTaglines } from '@/data/portfolio';

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="tag px-4 py-2 text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--success)] shadow-[0_0_10px_var(--success)] animate-pulse" />
            Open for New Opportunities
          </span>
        </motion.div>

        {/* Giant Name Typography */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="flex flex-col items-center justify-center font-display font-black uppercase leading-[0.85] tracking-tighter mb-8"
        >
          {/* First Name */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-2xl"
          >
            Ayush
          </motion.div>
          {/* Last Name (Outlined) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-[12vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] text-outline text-outline-active"
          >
            Kumar Jha
          </motion.div>
        </motion.div>

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
