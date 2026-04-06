'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { certifications } from '@/data/certifications';
import { ExternalLink, ShieldCheck, Award, Filter } from 'lucide-react';

const CertificationsPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(certifications.map(c => c.category)))];

  const filteredCerts = filter === 'All' 
    ? certifications 
    : certifications.filter(c => c.category === filter);

  return (
    <PageShell title="CERTIFIED" subtitle="competencies">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase transition-all border ${
              filter === cat 
                ? 'bg-amber-400 border-amber-400 text-black' 
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-amber-400/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group h-[320px] perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden glass-card p-8 flex flex-col items-center justify-center text-center border-white/5 relative overflow-hidden bg-white/[0.02]">
                  <div className="absolute top-0 right-0 p-6">
                     <ShieldCheck size={16} className="text-amber-400/20" />
                  </div>
                  <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                     <Award size={32} />
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 leading-tight px-4">{cert.title}</h3>
                  <p className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">{cert.issuer}</p>
                  <p className="mt-4 text-[9px] font-bold text-slate-700 uppercase tracking-widest">{cert.issuedDate}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-8 flex flex-col items-center justify-center text-center border-amber-400/20 bg-amber-400/5">
                   <div className="mb-6">
                      <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-[8px] font-black text-amber-400 uppercase tracking-widest">
                         {cert.category}
                      </span>
                   </div>
                   <p className="text-slate-300 text-sm font-medium mb-8 leading-relaxed">
                      Verified credential issued by {cert.issuer} on {cert.issuedDate}.
                   </p>
                   <a 
                     href={cert.credentialUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 px-6 py-3 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                   >
                     VIEW CREDENTIAL <ExternalLink size={12} />
                   </a>
                   <div className="mt-6 flex items-center gap-2 text-emerald-400 opacity-60">
                      <ShieldCheck size={12} />
                      <span className="text-[8px] font-black tracking-widest uppercase">Verified on LinkedIn</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredCerts.length === 0 && (
        <div className="text-center py-20">
           <Filter size={48} className="mx-auto text-slate-800 mb-6" />
           <p className="text-slate-500 font-black tracking-widest uppercase">No certifications in this category</p>
        </div>
      )}
    </PageShell>
  );
};

export default CertificationsPage;
