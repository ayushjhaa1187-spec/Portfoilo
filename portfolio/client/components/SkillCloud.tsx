'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  { name: 'Python', level: 95, category: 'AI/ML' },
  { name: 'Next.js', level: 90, category: 'Full-Stack' },
  { name: 'TensorFlow', level: 85, category: 'AI/ML' },
  { name: 'TypeScript', level: 88, category: 'Full-Stack' },
  { name: 'LangGraph', level: 82, category: 'AI Agents' },
  { name: 'PostgreSQL', level: 80, category: 'Database' },
  { name: 'OpenCV', level: 75, category: 'AI/ML' },
  { name: 'FastAPI', level: 85, category: 'Backend' },
  { name: 'Tailwind', level: 95, category: 'Design' },
  { name: 'Pandas', level: 90, category: 'Data Science' },
  { name: 'Scikit-learn', level: 88, category: 'Data Science' },
  { name: 'Docker', level: 70, category: 'DevOps' }
];

export const SkillCloud = () => {
    const [interests, setInterests] = useState<Record<string, number>>({});

    const handleInterest = (name: string) => {
        setInterests(prev => ({
            ...prev,
            [name]: (prev[name] || 0) + 1
        }));
    };

    return (
        <section className="py-32 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="mb-20"
                >
                   <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                      NEURAL <span className="text-amber-400">STACK</span>
                   </h2>
                   <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">Dynamic interest-mapped skill architecture</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skillsData.map((skill, i) => {
                        const interestLevel = interests[skill.name] || 0;
                        const size = 1 + (interestLevel * 0.1);
                        const glow = interestLevel > 0 ? `0 0 ${interestLevel * 10}px rgba(251, 191, 36, 0.4)` : 'none';

                        return (
                            <motion.button
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: size + 0.1, color: '#fbbf24' }}
                                onClick={() => handleInterest(skill.name)}
                                style={{ 
                                    scale: size,
                                    boxShadow: glow
                                }}
                                className="px-6 py-3 rounded-2xl glass-card text-sm font-black tracking-widest uppercase text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-all cursor-pointer"
                            >
                                {skill.name}
                                {interestLevel > 0 && (
                                    <span className="ml-2 text-[8px] text-amber-500 animate-pulse">+{interestLevel}</span>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-slate-600 text-xs font-mono uppercase tracking-widest"
                >
                   Click tags to signal interest and adapt the neural cloud
                </motion.p>
            </div>
        </section>
    );
};
