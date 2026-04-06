'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex flex-col items-center justify-center">
      <div className="relative">
        {/* Glow Effect */}
        <motion.div
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.6, 0.3]
           }}
           transition={{ 
             duration: 2, 
             repeat: Infinity,
             ease: "easeInOut"
           }}
           className="absolute inset-0 bg-amber-400/20 blur-[60px] rounded-full"
        />

        {/* Signature Logo (A stylized for Ayush) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Circle Ring */}
            <motion.circle 
              cx="50" cy="50" r="48" 
              stroke="#fbbf24" strokeWidth="0.5" 
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Core Stylized 'A' */}
            <motion.path 
              d="M50 20L80 80H70L65 70H35L30 80H20L50 20ZM50 35L38 60H62L50 35Z" 
              fill="#fbbf24"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            {/* Pulsing Core Dot */}
            <motion.circle 
              cx="50" cy="52" r="3" 
              fill="#fbbf24"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />

            {/* Geometric accents */}
            <rect x="48" y="10" width="4" height="4" fill="#fbbf24" opacity="0.4" />
            <rect x="48" y="86" width="4" height="4" fill="#fbbf24" opacity="0.4" />
            <rect x="10" y="48" width="4" height="4" fill="#fbbf24" opacity="0.4" />
            <rect x="86" y="48" width="4" height="4" fill="#fbbf24" opacity="0.4" />
          </svg>
        </motion.div>
      </div>

      {/* Loading Progress Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 flex flex-col items-center"
      >
         <p className="text-amber-400 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Initialising_Aura_v2.0</p>
         <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
            <motion.div 
              className="absolute h-full bg-amber-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
         </div>
         <p className="mt-4 text-slate-500 text-[8px] font-black tracking-widest uppercase italic">Decrypting Experience Ledger...</p>
      </motion.div>
    </div>
  );
};
