'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export const PageShell = ({ children, title, subtitle }: Props) => (
  <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
          {title} <br className="md:hidden" />
          <span className="text-amber-400 font-serif italic lowercase">{subtitle}</span>
        </motion.h1>
      </div>
      {children}
    </div>
  </div>
);
