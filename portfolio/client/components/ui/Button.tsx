'use client';
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const base = "px-6 py-3 font-bold text-xs uppercase tracking-[0.2em] rounded-lg transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-amber-400 text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.2)]",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm",
    ghost: "text-slate-400 hover:text-amber-400 bg-transparent"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
};
