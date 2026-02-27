'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    highlight?: string;
    subtitle: string;
    children?: ReactNode;
    className?: string;
}

export default function PageHero({ title, highlight, subtitle, children, className = '' }: PageHeroProps) {
    return (
        <div style={{ paddingTop: '80px' }} className={className}>
            <div
                className="relative py-20 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)'
                }}
            >
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-extrabold mb-4"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {title} {highlight && <span className="gradient-text">{highlight}</span>}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={`text-lg ${children ? 'mb-8' : ''}`}
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        {subtitle}
                    </motion.p>
                    {children}
                </div>
            </div>
        </div>
    );
}
