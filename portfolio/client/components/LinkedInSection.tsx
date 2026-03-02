'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiExternalLink, FiAward, FiBriefcase } from 'react-icons/fi';
import { achievements, experiences } from '@/data/portfolio';

const LinkedInSection = () => {
    const latestExperience = experiences[0];
    const topAchievement = achievements[0];

    return (
        <div className="glass-card p-8 relative overflow-hidden group">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)] opacity-[0.05] rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:opacity-[0.1] transition-opacity" />

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                {/* Profile Stats Avatar-style */}
                <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full border-2 border-[var(--primary)] p-1 group-hover:shadow-[0_0_20px_var(--primary)] transition-shadow">
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-4xl">
                            🎓
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <span className="text-xl font-bold text-white uppercase tracking-tighter">Ayush</span>
                        <span className="text-[10px] text-[var(--primary)] font-bold tracking-[0.2em] uppercase mt-1">IIT Madras Scholar</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                        <FiLinkedin className="text-[#0077b5] text-2xl" />
                        <h3 className="text-xl font-display font-medium text-white">LinkedIn Highlights</h3>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <FiBriefcase className="text-[var(--text-muted)] mt-1" />
                            <div>
                                <p className="text-sm font-semibold text-white">{latestExperience.role}</p>
                                <p className="text-xs text-[var(--text-muted)]">{latestExperience.company} • {latestExperience.period}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FiAward className="text-[var(--text-muted)] mt-1" />
                            <div>
                                <p className="text-sm font-semibold text-white">{topAchievement.title}</p>
                                <p className="text-xs text-[var(--text-muted)] truncate max-w-xs">{topAchievement.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0">
                    <a
                        href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-sm py-3 px-6 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
                    >
                        Connect <FiExternalLink size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LinkedInSection;
