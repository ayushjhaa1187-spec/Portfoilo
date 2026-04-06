'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '@/data/certifications';
import { Award, ShieldCheck, Zap } from 'lucide-react';
import { getCertStatus, groupCertsByDomain, rankCerts } from '@/lib/certificationLogic';
import { fadeUp, scaleIn, staggerContainer, VIEWPORT } from '@/lib/animations';

const statusStyles = {
  valid: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  expiring_soon: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  expired: 'text-red-400 border-red-400/30 bg-red-400/10',
  no_expiry: 'text-slate-300 border-white/20 bg-white/5'
};

const statusLabel = {
  valid: 'Valid',
  expiring_soon: 'Expiring Soon',
  expired: 'Expired',
  no_expiry: 'No Expiry'
};

const CertificationsPage = () => {
  const grouped = useMemo(() => {
    const ranked = rankCerts(certifications);
    return groupCertsByDomain(ranked);
  }, []);

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase">
          CREDENTIAL <span className="text-amber-400 font-serif italic lowercase">Registry</span>
        </h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A domain-grouped ledger of technical certifications with live validity and expiry-aware status markers.
        </p>
      </motion.div>

      <div className="space-y-16">
        {Object.entries(grouped).map(([domain, certs]) => (
          <section key={domain}>
            <h2 className="text-xl font-black uppercase tracking-[0.3em] text-amber-400 mb-6">{domain}</h2>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certs.map((cert, idx) => {
                const status = getCertStatus(cert);

                return (
                  <motion.div key={cert.id} variants={scaleIn} custom={idx} className="glass-card p-8 border border-white/5 group hover:border-amber-400/30 transition-all rounded-2xl">
                    <div className="w-14 h-14 bg-white/5 text-amber-400 flex items-center justify-center rounded-2xl mb-5 group-hover:scale-105 transition-transform">
                      <Award size={30} />
                    </div>

                    <h3 className="text-lg font-black text-white tracking-tight mb-2">{cert.title}</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-5">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {cert.featured && <span className="text-[10px] px-2 py-1 rounded-full bg-amber-400 text-black font-black uppercase">Featured</span>}
                      {cert.inProgress && <span className="text-[10px] px-2 py-1 rounded-full bg-blue-400/20 text-blue-300 font-black uppercase">In Progress</span>}
                      <span className={`text-[10px] px-2 py-1 rounded-full border font-black uppercase ${statusStyles[status]}`}>{statusLabel[status]}</span>
                    </div>

                    <div className="text-[11px] text-slate-300 space-y-2">
                      <p><span className="text-slate-500">Issued:</span> {cert.dateLabel}</p>
                      <p><span className="text-slate-500">Verify ID:</span> {cert.verifyId || 'Pending'}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        ))}
      </div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mt-40 text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 glass-card border-white/10">
          <ShieldCheck size={24} className="text-emerald-400" />
          <Zap size={24} className="text-amber-400" />
          <p className="text-xs font-black tracking-[0.2em] text-slate-500 uppercase">Credential lifecycle scoring active</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationsPage;
