'use client';
import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
    return (
        <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                            ENGINEERING THE <span className="text-amber-400">INTERFACE</span> OF SCIENCE & BIZ
                        </h2>
                        <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
                            <p>
                                I am an <span className="text-white font-bold">IIT Madras Data Science scholar</span> specializing in building autonomous AI systems that don&apos;t just predict, but act. My work bridges the gap between raw data analysis and high-performance engineering.
                            </p>
                            <p>
                                From designing <span className="text-amber-400 font-medium">satellite environmental monitoring</span> pipelines to scaling predictive analytics for startups, I focus on building tools that solve real bottlenecks in complex ecosystems.
                            </p>
                            <p>
                                My engineering philosophy: <span className="italic text-slate-500 underline decoration-amber-400/30 font-serif">&quot;Systems should be self-repairing, agents should be autonomous, and insights should be actionable.&quot;</span>
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-8 mt-12 py-12 border-y border-white/5">
                             <div>
                                 <h4 className="text-3xl font-black text-white">5+</h4>
                                 <p className="text-[9px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-2">Research Leads</p>
                             </div>
                             <div>
                                 <h4 className="text-3xl font-black text-white">46+</h4>
                                 <p className="text-[9px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-2">GitHub Repos</p>
                             </div>
                             <div>
                                 <h4 className="text-3xl font-black text-white">3+</h4>
                                 <p className="text-[9px] text-slate-500 font-bold tracking-[0.3em] uppercase mt-2">Venture Ideas</p>
                             </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square glass-card rounded-3xl p-12 flex items-center justify-center relative overflow-hidden group">
                           {/* Background decorative elements */}
                           <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-blue-500/5 opacity-50 transition-all group-hover:scale-110 duration-700" />
                           <div className="text-xs font-mono text-amber-400/10 leading-relaxed tracking-tighter select-none break-words pointer-events-none">
                              {`while(coding) {
  eat();
  sleep();
  innovate();
  repeat();
}
// 01010011 01000011 01001001 01000101 01001110 01000011 01000101`}
                           </div>
                           <div className="absolute z-10 p-10 glass-card border-amber-400/20 shadow-2xl shadow-amber-400/5 hover:-translate-y-4 transition-transform duration-500 bg-[#121212]">
                               <p className="text-[10px] font-black tracking-widest text-emerald-400 mb-4 uppercase">SYSTEM_STABLE_v2.0.4</p>
                               <h3 className="text-2xl font-bold text-white mb-6 italic tracking-tight leading-snug">&quot;Optimizing for maximum impact with minimum latency.&quot;</h3>
                               <div className="flex gap-1">
                                  {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-8 bg-amber-400 rounded-full" />)}
                               </div>
                           </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
