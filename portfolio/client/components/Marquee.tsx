'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Performance Optimization: Moved static `skills` array outside the component body
// to prevent unnecessary object recreation on every render, saving memory and CPU cycles.
const skills = [
    "LLMs", "LANGGRAPH", "COMPUTER VISION", "AUTONOMOUS AGENTS", "NEXT.JS",
    "TENSORFLOW", "POSTGRESQL", "PANDAS", "FASTAPI", "SCIKIT-LEARN",
    "NLP", "REINFORCEMENT LEARNING", "MULTIMODAL AI", "KUBERNETES"
];

const Marquee = () => {
    return (
        <div className="py-12 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden group">
            {/* Gradient masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            <motion.div 
                className="flex whitespace-nowrap gap-12 items-center"
                animate={{ x: [0, -1000] }}
                transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear"
                }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {/* Duplicate for infinite loop */}
                {[...skills, ...skills, ...skills].map((skill, i) => (
                    <div key={i} className="flex items-center gap-6">
                        <span className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter hover:text-amber-400 transition-colors cursor-default">
                            {skill}
                        </span>
                        <div className="w-3 h-3 rounded-full bg-amber-400/20" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
