'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, Users, Handshake, ArrowRight, Zap } from 'lucide-react';

export const CollaborationCTA = () => {
  return (
    <section id="contact" className="py-[var(--section-gap)] px-[var(--section-px)] bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-400/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-400/10 border border-amber-400/20 rounded-full mb-16">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.35em] text-amber-400 uppercase">Open_for_Collaborations</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-normal uppercase leading-[1.2] mb-16">
              LET'S BUILD <br />
              <span className="text-amber-400 font-serif italic lowercase">something real</span>
            </h2>
            
            <p className="text-xl text-slate-400 font-light leading-relaxed mb-16 max-w-xl">
              I'm actively seeking scale-up partnerships, research collaborations, and deep-tech teams solving hard problems with AI. If you're building, let's connect.
            </p>

            <div className="flex flex-wrap gap-8">
              <Link href="/contact" className="px-12 py-6 bg-amber-400 text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all shadow-xl shadow-amber-400/20">
                START_CONVERSATION
              </Link>
              <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-full hover:border-amber-400 transition-all flex items-center gap-3">
                LINKEDIN_SYNC <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
             {[
               { icon: <Handshake className="text-blue-400" />, title: 'Partnerships', desc: 'Joint ventures and scaling AI infrastructure.' },
               { icon: <Rocket className="text-amber-400" />, title: 'Hackathons', desc: 'Building high-velocity prototypes in 48h.' },
               { icon: <Users className="text-emerald-400" />, title: 'Research', desc: 'Collaborative academic and agentic AI papers.' },
               { icon: <Zap className="text-purple-400" />, title: 'Freelance', desc: 'High-fidelity full-stack & AI agent deployments.' }
             ].map((item, i) => (
               <motion.div 
                 key={item.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="glass-card p-12 group hover:border-amber-400/20 transition-all"
               >
                  <div className="mb-8">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-normal">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed uppercase font-black tracking-widest leading-relaxed">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
