'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SignatureLogo } from './SignatureLogo';

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

        {/* Signature Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <SignatureLogo size={140} />
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
