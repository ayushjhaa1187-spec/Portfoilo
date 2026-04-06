'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const skills = [
        "MULTI-AGENT ORCHESTRATION", "NEURAL ARCHITECTURE", "RAG-DRIVEN FORENSICS", 
        "AGENTIC WORKFLOWS", "AUTONOMOUS INTELLIGENCE", "RLHF REWARD MODELING", 
        "PREDICTIVE SEMANTICS", "LATENCY-OPTIMIZED INFERENCE", "MULTIMODAL AI", 
        "DISTRIBUTED SYSTEMS", "COMPUTER VISION", "EDGE COMPUTING"
    ];

    return (
        <div className="py-12 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden group">
            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            <div className="flex animate-marquee hover:pause whitespace-nowrap gap-12 items-center">
                {/* Triple the skills to ensure enough coverage for loop */}
                {[...skills, ...skills, ...skills].map((skill, i) => (
                    <div key={i} className="flex items-center gap-6">
                        <span className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter hover:text-amber-400 transition-colors cursor-default">
                            {skill}
                        </span>
                        <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
