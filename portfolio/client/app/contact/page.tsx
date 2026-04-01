'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Briefcase, Zap, ArrowRight, CheckCircle2, ShieldCheck, Github, Linkedin, Send } from 'lucide-react';

const ContactPage = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const intentList = [
        { icon: <Briefcase size={16} />, label: "Scale-up Partnership", id: "partnership" },
        { icon: <Zap size={16} />, label: "Hackathon Team Formation", id: "hackathon" },
        { icon: <MessageSquare size={16} />, label: "Research Collaboration", id: "research" },
        { icon: <ArrowRight size={16} />, label: "Freelance Opportunity", id: "freelance" }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
            <div className="grid lg:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col h-full"
                >
                    <div className="mb-12">
                        <p className="text-amber-400 font-black tracking-[0.5em] uppercase mb-4">Communication_Protocol_v2.0</p>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-10">
                            INITIATE <span className="text-amber-400 font-serif italic lowercase">Transmission</span>
                        </h1>
                        <p className="text-2xl text-slate-400 font-light leading-relaxed max-w-lg mb-12">
                            Ready to engineer autonomous solutions or coordinate high-velocity technical deployments. Choose your intent node and start the protocol.
                        </p>
                    </div>

                    <div className="space-y-6 mb-12 flex-grow">
                        <div className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-amber-400/20 transition-all">
                            <div className="w-14 h-14 bg-white/5 text-amber-400 flex items-center justify-center rounded-2xl">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-1">Direct_Access</p>
                                <p className="text-xl font-bold text-white tracking-tight">ayushjhaa1187@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-amber-400/20 transition-all">
                            <div className="w-14 h-14 bg-white/5 text-amber-400 flex items-center justify-center rounded-2xl">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-1">Professional_Anchor</p>
                                <p className="text-xl font-bold text-white tracking-tight underline decoration-amber-400/30">Ayush Kumar Jha @ LinkedIn</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/5">
                        <div className="flex gap-4">
                            <a href="https://github.com/ayushjhaa1187-spec" target="_blank" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl hover:text-amber-400 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl hover:text-amber-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-16 rounded-[3rem] border border-white/5 relative overflow-hidden"
                >
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
                            <div className="w-24 h-24 bg-emerald-400/10 text-emerald-400 rounded-full flex items-center justify-center mb-8">
                                <CheckCircle2 size={48} />
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">ACK_TRANSMITTED</h3>
                            <p className="text-slate-400 font-light max-w-sm uppercase text-xs tracking-widest leading-loose">
                                Your data has been encrypted and synchronized. Response pending verification.
                            </p>
                            <button onClick={() => setStatus('idle')} className="mt-12 text-[10px] font-black text-amber-400 hover:text-white transition-colors tracking-[0.5em] uppercase">SYSTEM_RESET</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10 h-full flex flex-col">
                            <div>
                                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4 block">Select_Intent_Node</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {intentList.map(intent => (
                                        <button 
                                            key={intent.id}
                                            type="button"
                                            className="p-4 border border-white/5 bg-white/5 rounded-xl hover:border-amber-400/30 text-white flex items-center gap-3 transition-all group"
                                        >
                                            <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">{intent.icon}</span>
                                            <span className="text-[8px] font-black tracking-widest uppercase leading-none">{intent.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-10 flex-grow">
                                <div className="relative group">
                                    <input type="text" required placeholder="IDENTIFICATION: [NAME]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" />
                                </div>
                                
                                <div className="relative group">
                                    <input type="email" required placeholder="ENCRYPTION_ADDR: [EMAIL]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" />
                                </div>

                                <div className="relative group">
                                    <textarea rows={4} required placeholder="MESSAGE_PAYLOAD: [YOUR_PROPOSAL]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black resize-none"></textarea>
                                </div>
                            </div>

                            <button
                                disabled={status === 'sending'}
                                className="w-full py-6 bg-amber-400 text-black font-black uppercase text-xs tracking-[0.5em] rounded-2xl hover:bg-white hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-all flex items-center justify-center gap-4 group"
                            >
                                {status === 'sending' ? 'TRANSMITTING...' : (
                                    <>SEND_PAYLOAD <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
