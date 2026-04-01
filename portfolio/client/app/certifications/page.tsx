'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { Award, CheckCircle, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

const CertificationsPage = () => {
    return (
        <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 text-center"
            >
                <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
                    CREDENTIAL <span className="text-amber-400 font-serif italic lowercase">Registry</span>
                </h1>
                <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
                    An immutable record of technical proficiencies and institutional honors in AI, Cloud, and Data Science.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, idx) => (
                    <motion.div 
                        key={cert.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative h-[360px] perspective-1000"
                    >
                        <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                            {/* Front: Visual Badge */}
                            <div className="absolute inset-0 backface-hidden glass-card p-10 flex flex-col items-center justify-center text-center border-white/5 group-hover:border-amber-400/20 transition-colors">
                                <div className="w-20 h-20 bg-white/5 text-amber-400 flex items-center justify-center rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all">
                                    <Award size={44} />
                                </div>
                                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2">{cert.title}</h3>
                                <p className="text-[10px] text-slate-500 font-black tracking-[0.4em] uppercase">{cert.issuer}</p>
                                
                                <div className="mt-8 flex gap-2">
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black tracking-widest text-slate-500 uppercase">{cert.category}</span>
                                </div>
                            </div>

                            {/* Back: Details & Verification */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-12 flex flex-col items-center justify-center text-center border-emerald-400/30 bg-emerald-400/5">
                                <ShieldCheck size={48} className="text-emerald-400 mb-8" />
                                <div className="space-y-4 mb-10">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                                        ISSUED_ON: {cert.date}
                                    </p>
                                    <p className="text-[10px] text-emerald-400 font-black tracking-widest uppercase">
                                        VERIFIED_RECORD_v1.0.4
                                    </p>
                                    <div className="bg-black/40 p-3 rounded-lg border border-emerald-400/20">
                                        <code className="text-[9px] text-emerald-400 font-mono">ID: {cert.verifyId}</code>
                                    </div>
                                </div>
                                
                                <button className="px-8 py-3 bg-emerald-400 text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                                    VALIDATE ↗
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-40 text-center">
                <div className="inline-flex items-center gap-4 px-8 py-4 glass-card border-white/10">
                    <Zap size={24} className="text-amber-400" />
                    <p className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase">Syncing with LinkedIn Professional Repository in real-time</p>
                </div>
            </div>
        </div>
    );
};

export default CertificationsPage;
