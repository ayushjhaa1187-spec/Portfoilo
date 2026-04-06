'use client';

import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { certifications } from '@/data/certifications';
import { ExternalLink, ShieldCheck, Award, Zap } from 'lucide-react';
import { getCertStatus, groupCertsByDomain, rankCerts } from '@/lib/certificationLogic';

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
    <PageShell title="CREDENTIAL" subtitle="registry">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-slate-400 max-w-3xl mb-24 font-light leading-relaxed tracking-wide"
      >
        A domain-grouped ledger of technical certifications with live validity and expiry-aware status markers.
      </motion.p>

      <div className="space-y-24">
        {Object.entries(grouped).map(([domain, certs]) => (
          <section key={domain}>
            <div className="flex items-center gap-4 mb-10">
               <h2 className="text-xl font-black uppercase tracking-[0.4em] text-amber-400">{domain}</h2>
               <div className="h-[1px] flex-grow bg-white/5" />
            </div>
            
            <motion.div 
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {certs.map((cert) => {
                  const status = getCertStatus(cert);
                  
                  return (
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
                             <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full border ${statusStyles[status]}`}>
                                {statusLabel[status]}
                             </span>
                          </div>
                          <div className="w-16 h-16 bg-amber-400/10 rounded-2xl flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                             <Award size={32} />
                          </div>
                          <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2 leading-tight px-4">{cert.title}</h3>
                          <p className="text-[10px] font-black text-slate-500 tracking-[0.2em] uppercase">{cert.issuer}</p>
                          <p className="mt-4 text-[9px] font-bold text-slate-700 uppercase tracking-widest">{cert.dateLabel}</p>
                        </div>

                        {/* Back Side */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-8 flex flex-col items-center justify-center text-center border-amber-400/20 bg-amber-400/5">
                           <div className="mb-6 flex flex-wrap gap-2 justify-center">
                              {cert.featured && (
                                <span className="px-3 py-1 bg-amber-400 text-black rounded-full text-[8px] font-black uppercase tracking-widest">
                                   Featured
                                </span>
                              )}
                              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black text-slate-400 uppercase tracking-widest">
                                 ID: {cert.verifyId || 'Pending'}
                              </span>
                           </div>
                           <p className="text-slate-300 text-sm font-medium mb-8 leading-relaxed px-4">
                              {cert.inProgress ? 'Course is currently in progress.' : `Verified credential issued by ${cert.issuer}.`}
                           </p>
                           {cert.credentialUrl && !cert.inProgress && (
                              <a 
                                href={cert.credentialUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-white transition-colors"
                              >
                                VIEW CREDENTIAL <ExternalLink size={12} />
                              </a>
                           )}
                           <div className="mt-6 flex items-center gap-2 text-emerald-400 opacity-60">
                              <ShieldCheck size={12} />
                              <span className="text-[8px] font-black tracking-widest uppercase">Validated & Active</span>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </section>
        ))}
      </div>

      <div className="mt-40 text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 glass-panel border-white/5 rounded-2xl">
          <ShieldCheck size={24} className="text-emerald-400" />
          <p className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase italic">
            Automated Validity Check: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
          <Zap size={20} className="text-amber-400" />
        </div>
      </div>
    </PageShell>
  );
};

export default CertificationsPage;
