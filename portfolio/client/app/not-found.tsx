'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center pt-20 px-4" style={{ background: 'var(--bg-primary)' }}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="max-w-md w-full text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl md:text-9xl font-extrabold mb-4" style={{ color: 'var(--primary-light)', textShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}>
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Page Not Found
                    </h2>
                    <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/" className="btn-primary flex items-center justify-center gap-2">
                            <FiHome size={18} /> Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-outline flex items-center justify-center gap-2"
                        >
                            <FiArrowLeft size={18} /> Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
