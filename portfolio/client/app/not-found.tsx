'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#fafafa]">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[12rem] font-black text-blue-900/5 leading-none select-none">404</h1>
          <div className="relative -mt-32">
            <div className="inline-flex p-6 bg-white rounded-3xl shadow-2xl border border-gray-100 mb-8">
              <Search size={64} className="text-blue-600 animate-pulse" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lost in the Latent Space?</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-md mx-auto">
            The page you are looking for has been pruned or never existed in this architecture. Let&apos;s get you back to safety.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex items-center gap-2 px-8 py-6 rounded-2xl border-2"
            >
              <ArrowLeft size={18} /> Go Back
            </Button>
            <Link href="/">
              <Button className="flex items-center gap-2 px-8 py-6 rounded-2xl bg-blue-600 shadow-xl shadow-blue-200">
                <Home size={18} /> Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-400 font-medium tracking-widest uppercase">
            &copy; 2026 Ayush Kumar Jha • Technical Portfolio
          </p>
        </motion.div>
      </div>
    </div>
  );
}
