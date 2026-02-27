'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle, FiRefreshCw } from 'react-icons/fi';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 px-4" style={{ background: 'var(--bg-primary)' }}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="max-w-md w-full text-center relative z-10 card p-8 sm:p-12 border-t-4 border-red-500 shadow-2xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiAlertCircle size={40} className="text-red-500" />
                    </div>

                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                        Something went wrong!
                    </h2>

                    <p className="text-base mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        We&apos;re sorry, but an unexpected error occurred. Please try again or contact support if the problem persists.
                    </p>

                    <button
                        onClick={() => reset()}
                        className="btn-primary w-full flex justify-center items-center gap-2"
                    >
                        <FiRefreshCw size={18} /> Try again
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
