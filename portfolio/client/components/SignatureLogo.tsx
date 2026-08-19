'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const SignatureLogo = ({ size = 40, showText = false }: { size?: number, showText?: boolean }) => {
  return (
    <div className="flex items-center gap-3 group">
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Hand-crafted elegant signature path for 'AKJ' */}
        <motion.path
          d="M20 70C25 50 45 20 50 20C55 20 30 80 35 80C40 80 60 40 65 30C70 20 85 20 80 40C75 60 45 80 40 80C35 80 60 50 80 50"
          stroke="url(#goldGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#goldGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Subtle geometric anchor points to keep it 'engineering' focused */}
        <motion.rect 
          x="18" y="68" width="4" height="4" fill="#FBBF24" 
          animate={{ opacity: [0.2, 1, 0.2] }} 
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect 
          x="78" y="48" width="4" height="4" fill="#FBBF24" 
          animate={{ opacity: [0.2, 1, 0.2] }} 
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </svg>
      {showText && (
        <span className="text-xl font-black tracking-widest text-white group-hover:text-amber-400 transition-colors uppercase">
          AKJ_ENGINEERING
        </span>
      )}
    </div>
  );
};
