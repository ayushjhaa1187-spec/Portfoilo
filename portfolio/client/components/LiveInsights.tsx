'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiUsers, FiStar, FiActivity } from 'react-icons/fi';
import { getGithubStats } from '@/lib/github';

const LiveInsights = () => {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            const data = await getGithubStats();
            if (data) setStats(data);
            setLoading(false);
        }
        fetchStats();
    }, []);

    if (loading) return null;

    const cards = [
        { label: 'Repos', value: stats?.publicRepos || '17+', icon: <FiGithub size={20} />, color: 'var(--primary)' },
        { label: 'Followers', value: '11K+', icon: <FiUsers size={20} />, color: 'var(--primary-light)' },
        { label: 'Stars', value: '45+', icon: <FiStar size={20} />, color: 'var(--accent)' },
        { label: 'Updates', value: 'Daily', icon: <FiActivity size={20} />, color: 'var(--primary-light)' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {cards.map((card, i) => (
                <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 flex flex-col items-center justify-center text-center group hover:scale-105 transition-all"
                >
                    <div className="p-3 rounded-full mb-3 group-hover:bg-white/10 transition-colors" style={{ color: card.color }}>
                        {card.icon}
                    </div>
                    <div className="text-2xl font-display font-bold text-white mb-1">
                        {card.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
                        {card.label}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default LiveInsights;
