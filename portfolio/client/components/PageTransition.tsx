'use client';

import React, { ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
    children: ReactNode;
}

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.98,
        y: 10,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        y: -10,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
