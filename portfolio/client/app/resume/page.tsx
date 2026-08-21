'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Download, ExternalLink, FileText, Calendar } from 'lucide-react';
import { profile } from '@/data/profile';

const ResumePage = () => {
  const lastUpdated = 'April 2026';
  const resumeUrl = profile.resume || 'https://drive.google.com/file/d/1C5iHObv14AM47zHpbjuvk65IzglabZEP/view?usp=sharing';
  const embedUrl = resumeUrl.includes('drive.google.com')
    ? resumeUrl.replace(/\/view(\?.*)?$/, '/preview')
    : `${resumeUrl}#toolbar=0`;

  return (
    <div className="min-h-screen pt-24 px-4 max-w-5xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
      >
        <div>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Curriculum Vitae</h1>
          <div className="flex items-center text-gray-500 gap-2">
            <Calendar size={16} />
            <span className="text-sm font-medium uppercase tracking-wider">Last Updated: {lastUpdated}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={() => window.open(resumeUrl, '_blank')}
            variant="secondary"
            className="flex items-center gap-2 border-2"
          >
            <ExternalLink size={18} /> Open in New Tab
          </Button>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2 bg-blue-600">
              <Download size={18} /> Download / View Resume
            </Button>
          </a>
        </div>
      </motion.div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full aspect-[1/1.414] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative group"
      >
        <iframe
          src={embedUrl}
          className="w-full h-full border-none"
          title="Resume Viewer"
          allow="autoplay"
        />
        
        {/* Fallback overlay if PDF fails to load or for mobile */}
        <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center pointer-events-none group-hover:opacity-0 transition-opacity opacity-0 md:opacity-0">
          <div className="p-6 bg-white rounded-full shadow-inner mb-6">
            <FileText size={64} className="text-blue-200" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Interactive Resume Viewer</h3>
          <p className="text-slate-500 max-w-xs mb-8">
            Your browser might not support inline PDF viewing. Please open the file to view it.
          </p>
          <Button
            variant="secondary"
            className="pointer-events-auto"
            onClick={() => window.open(resumeUrl, '_blank')}
          >
            View Original PDF
          </Button>
        </div>
      </motion.div>

      <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Quick Summary</h2>
        <p className="text-blue-800/80 leading-relaxed">
          Looking for a more detailed version or specific project portfolios? Feel free to reach out via the 
          <a href="/contact" className="text-blue-600 font-bold hover:underline ml-1">contact page</a>.
        </p>
      </div>
    </div>
  );
};

export default ResumePage;
