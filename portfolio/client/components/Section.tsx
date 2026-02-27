'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    subtitle?: string;
    gradient?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, title, subtitle, gradient = false }) => {
    return (
        <section
            id={id}
            className={`section particle-bg ${gradient ? 'gradient-section' : ''} ${className}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="section-title">{title}</h2>
                        {subtitle && <p className="section-subtitle">{subtitle}</p>}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
