'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { thoughts } from '@/data/thoughts';

export default function ThoughtsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % thoughts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-[var(--section-gap)] bg-[#0d0d0d] relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
      {/* Watermark Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] text-[40rem] font-serif pointer-events-none select-none">
        "
      </div>

      <div className="max-w-[var(--max-width)] mx-auto px-6 relative z-10 w-full text-center">
         <div className="mb-12">
           <span className="text-amber-400/20 text-9xl font-serif leading-none select-none">❝</span>
         </div>

         <AnimatePresence mode="wait">
           <motion.div
             key={index}
             initial={{ opacity: 0, y: 10, scale: 0.98 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: -10, scale: 0.98 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-4xl mx-auto"
           >
             <blockquote className="text-3xl md:text-5xl font-serif italic text-white leading-tight tracking-tight mb-12">
               {thoughts[index].quote}
             </blockquote>
             <div className="flex flex-col items-center gap-2">
               <span className="text-amber-400 font-black tracking-[0.5em] text-[10px] uppercase">
                 — {thoughts[index].attribution}
               </span>
               <span className="text-slate-500 font-black tracking-widest text-[8px] uppercase italic">
                 {thoughts[index].context}
               </span>
             </div>
           </motion.div>
         </AnimatePresence>

         {/* Navigation Dots */}
         <div className="flex justify-center gap-4 mt-20">
           {thoughts.map((_, i) => (
             <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-amber-400 w-12' : 'bg-white/10 hover:bg-amber-400/30'
                }`}
                aria-label={`Show thought ${i + 1}`}
             />
           ))}
         </div>
      </div>
    </section>
  );
}
