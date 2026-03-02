'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = () => {
    const router = useRouter();

    return (
        <motion.button
            onClick={() => router.back()}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-5 py-2.5 glass rounded-full text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] transition-all duration-300 z-50 mb-8"
            style={{ border: '1px solid var(--border-glass)', backdropFilter: 'blur(10px)' }}
        >
            <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] transition-colors">
                <FiArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            </div>
            Go Back
        </motion.button>
    );
};

export default BackButton;
