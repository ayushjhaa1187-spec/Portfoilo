'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import Link from 'next/link';
import { Sparkles, ArrowRight, Github, Linkedin, Terminal } from 'lucide-react';

const RollingNumber = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const targetValue = parseInt(value.replace(/,/g, ''));

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = targetValue / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                setDisplayValue(targetValue);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [targetValue]);

    return <span>{displayValue.toLocaleString()}{suffix}</span>;
};

const Hero = () => {
  const name = "AYUSH KUMAR JHA";
  
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#262626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Status Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-8 px-4 py-1.5 rounded-full border border-amber-400/20 bg-amber-400/5 flex items-center gap-2"
        >
           <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
           <span className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">Available for scale-up partnerships</span>
        </motion.div>

        {/* Typed Name Effect */}
        <div className="flex flex-wrap justify-center mb-6">
           {name.split("").map((char, i) => (
             <motion.span
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05, duration: 0.4 }}
               className={`text-5xl md:text-8xl font-black tracking-tighter ${char === " " ? "mx-4" : "text-white"}`}
             >
               {char}
             </motion.span>
           ))}
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 font-light mb-10 max-w-3xl text-center leading-relaxed"
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

        {/* Rolling Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 w-full max-w-4xl"
        >
          {[
            { label: 'Repo Audit Complete', value: '39', suffix: "/46", icon: <Terminal size={14} /> },
            { label: 'Production Ships', value: '12', icon: <Github size={14} /> },
            { label: 'Market Metrics', value: '94%', icon: <Sparkles size={14} /> },
            { label: 'IIT Madras', value: 'BS DS', icon: <ArrowRight size={14} /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 flex flex-col items-center group hover:bg-amber-400/5 transition-colors">
              <div className="text-amber-400 mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-black text-white">
                 {typeof parseInt(stat.value) === 'number' && !isNaN(parseInt(stat.value)) ? (
                   <div className="flex items-baseline gap-1">
                     <RollingNumber value={stat.value} />
                     {stat.suffix && <span className="text-xs text-slate-500 font-mono">{stat.suffix}</span>}
                   </div>
                 ) : stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
