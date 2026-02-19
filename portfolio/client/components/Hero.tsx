'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            AYUSH KUMAR JHA
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-6">
            IIT Madras Data Scientist | ML/AI Researcher | Entrepreneurial Innovator
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button href="/projects" size="lg" variant="primary">View Projects</Button>
            <Button href="/contact" size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl"
        >
          {[
            { label: 'IIT Madras Scholar', value: '🎓' },
            { label: 'Competition Finalist', value: '🏆' },
            { label: 'GitHub Projects', value: '🚀 17+' },
            { label: 'Startups Ideated', value: '💡 3+' }
          ].map((stat, index) => (
            <div key={index} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-2">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
