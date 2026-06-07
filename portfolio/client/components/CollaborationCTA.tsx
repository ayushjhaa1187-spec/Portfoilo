'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Linkedin } from 'lucide-react';

export default function CollaborationCTA() {
  return (
    <section className="py-[var(--section-gap)] bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Radial Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-400/5 rounded-full blur-[200px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-8">Open to Collaborations</p>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[1.0] mb-12">
            LET'S BUILD <br />
            <span className="text-amber-400 italic font-serif lowercase">something real</span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mb-16 px-4">
             "Solving complex engineering silos requires both high-integrity infrastructure and a clear user-centric vision. 
             If you're building the future of AI—let's bridge the gap together."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link 
               href="/contact" 
               className="group flex items-center gap-2 bg-amber-400 border border-amber-400 text-black px-12 py-5 rounded-xl font-black tracking-widest uppercase text-[10px] hover:bg-black hover:text-amber-400 transition-all shadow-xl shadow-amber-400/20"
             >
               Start a Conversation <ArrowUpRight className="group-hover:rotate-12 transition-transform" size={16} />
             </Link>
             <a 
               href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-10 py-5 rounded-xl font-black tracking-widest uppercase text-[10px] hover:border-amber-400/50 hover:text-amber-400 transition-all"
             >
               Connect on LinkedIn <Linkedin size={16} />
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
