'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, Zap, Shield, Users } from 'lucide-react';
import { Button } from './ui/Button';

const collaborationCards = [
  {
    title: 'Hackathon Partner',
    icon: Zap,
    description: 'Looking to win? I bring high-frequency data modeling and full-stack execution to the table.',
    tag: 'Competitive'
  },
  {
    title: 'Open Source Contributor',
    icon: Shield,
    description: 'Building tools for the agentic future. Let\'s optimize the open-source infrastructure together.',
    tag: 'Community'
  },
  {
    title: 'Startup Co-founder',
    icon: Users,
    description: 'Ambitious ideas need resilient engineering. I build MVPs that scale from zero to production.',
    tag: 'Strategic'
  }
];

export const CollaborationCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-[var(--section-gap)] px-[var(--section-px)] max-w-[var(--content-max)] mx-auto">
      <div className="text-center mb-16">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-400 bg-amber-400/10 text-amber-400 text-[10px] font-black tracking-widest uppercase mb-8"
         >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_bg-emerald-500]" />
            Currently Open to Part-time Work & Collabs
         </motion.div>
         <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-4 leading-none">
            LET'S <span className="text-amber-400 font-serif italic lowercase tracking-wide">Build</span> SOMETHING
         </h2>
         <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Whether it's a technical deep-dive, a hackathon sprint, or a high-integrity partnership, I engineer the protocols for success.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--card-gap)] mb-20">
        {collaborationCards.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-10 hover:border-amber-400/30 transition-all border border-white/5 relative group overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 -translate-y-8 translate-x-8">
                <card.icon size={150} />
             </div>
             <p className="text-[10px] font-black text-slate-500 tracking-[0.4em] uppercase mb-4">{card.tag}</p>
             <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 leading-none group-hover:text-amber-400 transition-colors">
                {card.title}
             </h3>
             <p className="text-slate-400 text-sm leading-relaxed font-light mb-10 relative">
                {card.description}
             </p>
             <div className="w-12 h-1 bg-amber-400/20 group-hover:bg-amber-400 group-hover:w-full transition-all duration-500 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center border border-white/5 bg-white/[0.01] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none" />
         
         <div className="relative">
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-4">
               INITIATE_PROTOCOL_AKJ <Send size={24} className="text-amber-400" />
            </h3>
            
            <div className="space-y-10">
               {[
                  { icon: Linkedin, label: 'LINKEDIN_PROFESSIONAL', url: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/' },
                  { icon: Github, label: 'GITHUB_LABORATORY', url: 'https://github.com/ayushjhaa1187-spec' },
                  { icon: Mail, label: 'DIRECT_COMM_CHANNEL', url: 'mailto:ayushjhaa1187@gmail.com' }
               ].map((comm) => (
                  <a 
                    key={comm.label} 
                    href={comm.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-between items-center p-8 glass-panel border border-white/5 rounded-2xl hover:border-amber-400/30 transition-all hover:-translate-y-1 group"
                  >
                     <div className="flex items-center gap-6">
                        <comm.icon size={28} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                        <span className="text-[10px] font-black tracking-widest text-slate-500 group-hover:text-white transition-colors uppercase">{comm.label}</span>
                     </div>
                     <CheckCircle size={16} className="text-amber-400 opacity-20" />
                  </a>
               ))}
            </div>
         </div>

         <div className="relative">
            <AnimatePresence mode="wait">
               {isSuccess ? (
                  <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="glass-card p-12 text-center border-emerald-400/20"
                  >
                     <CheckCircle size={64} className="mx-auto text-emerald-400 mb-8 animate-bounce" />
                     <h4 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Transmission_Success</h4>
                     <p className="text-slate-500 text-xs font-black tracking-widest uppercase">Protocol Integrated. I will respond to your handshake within 24h.</p>
                  </motion.div>
               ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="p-12 glass-card space-y-10 border-amber-400/10"
                  >
                     <div className="space-y-4">
                        <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Mission_Commander_Name</label>
                        <input type="text" placeholder="ENTR_NAME_PROTOCOL" className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-[12px] font-black uppercase text-white focus:outline-none focus:border-amber-400 transition-colors tracking-widest" required />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Integration_Endpoint_Email</label>
                        <input type="email" placeholder="ENTR_EMAIL_SUITE" className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-[12px] font-black uppercase text-white focus:outline-none focus:border-amber-400 transition-colors tracking-widest" required />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Handshake_Payload_Message</label>
                        <textarea placeholder="ENTR_PAYLOAD_DET_v1" className="w-full bg-white/5 border border-white/10 rounded-xl py-5 px-8 text-[12px] font-black uppercase text-white focus:outline-none focus:border-amber-400 transition-colors tracking-widest h-32" required />
                     </div>
                     <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-base tracking-[0.3em]">
                        {isSubmitting ? 'TRANSMITTING...' : 'INITIATE HANDSHAKE'}
                     </Button>
                  </motion.form>
               )}
            </AnimatePresence>
         </div>
      </div>
    </section>
  );
};
