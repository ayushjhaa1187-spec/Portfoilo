'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Github, Linkedin, Send, Terminal, Cpu, Globe, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          INITIATE <span className="text-amber-400 font-serif italic lowercase">Protocol</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          Ready for integration? Let's build the autonomous future.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div 
           initial={{ opacity: 0, x: -30 }} 
           animate={{ opacity: 1, x: 0 }}
           className="space-y-12"
        >
          <div className="glass-panel p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 rotate-45">
                <Globe size={150} />
             </div>
             <p className="text-amber-400 font-black tracking-widest uppercase mb-8">Engineering Command Center</p>
             <div className="space-y-8 relative">
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-400">
                      <Mail size={24} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-Mail Address</p>
                      <p className="text-lg text-white font-bold">ayushjhaa1187@gmail.com</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-400">
                      <Linkedin size={24} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LinkedIn Profile</p>
                      <p className="text-lg text-white font-bold">ayush-kumar-jha-5960a3362</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-400">
                      <Github size={24} />
                   </div>
                   <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">GitHub Laboratory</p>
                      <p className="text-lg text-white font-bold">ayushjhaa1187-spec</p>
                   </div>
                </div>
             </div>
             
             <div className="mt-12 pt-12 border-t border-white/5 flex gap-8 items-center opacity-30">
                <div className="flex items-center gap-2">
                   <Terminal size={14} />
                   <span className="text-[10px] font-black tracking-widest uppercase italic">Availability: High</span>
                </div>
                <div className="flex items-center gap-2">
                   <Cpu size={14} />
                   <span className="text-[10px] font-black tracking-widest uppercase italic">Location: Remote / IST</span>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
           <form onSubmit={handleSubmit} className="glass-card p-12 hover:border-amber-400/30 transition-all rounded-[3rem] space-y-10">
              <div className="space-y-4">
                 <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Mission_Commander_Name</label>
                 <input 
                   type="text" 
                   required
                   value={formState.name}
                   onChange={(e) => setFormState({...formState, name: e.target.value})}
                   placeholder="Enter Name..."
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" 
                 />
              </div>
              <div className="space-y-4">
                 <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Integration_Endpoint_Email</label>
                 <input 
                   type="email" 
                   required
                   value={formState.email}
                   onChange={(e) => setFormState({...formState, email: e.target.value})}
                   placeholder="Enter E-Mail..."
                   className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" 
                 />
              </div>
              <div className="space-y-4">
                 <label className="text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">Command_Payload_Message</label>
                 <textarea 
                   rows={5}
                   required
                   value={formState.message}
                   onChange={(e) => setFormState({...formState, message: e.target.value})}
                   placeholder="Enter Message..."
                   className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-white focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" 
                 />
              </div>

              <div className="pt-6">
                 {isSuccess ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-4 text-emerald-400 font-black uppercase tracking-widest">
                       <CheckCircle size={32} /> Integration_Successful
                    </motion.div>
                 ) : (
                    <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-base tracking-[0.4em]">
                       {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'} <Send size={20} className="ml-2" />
                    </Button>
                 )}
              </div>
           </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
