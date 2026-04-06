'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/PageShell';
import { certifications } from '@/data/certifications';
import { ExternalLink, Award } from 'lucide-react';
import { groupCertsByDomain, rankCerts } from '@/lib/certificationLogic';

const CertificationsPage = () => {
  const grouped = useMemo(() => {
    const ranked = rankCerts(certifications);
    return groupCertsByDomain(ranked);
  }, []);

  return (
    <PageShell title="CERTIFICATIONS" subtitle="& achievements">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-slate-400 max-w-3xl mb-24 font-light leading-relaxed tracking-wide"
      >
        Validated competition outcomes, jury roles, and learning credentials from IIT ecosystems and leading platforms.
      </motion.p>

      <div className="space-y-16">
        {Object.entries(grouped).map(([domain, certs]) => (
          <section key={domain}>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-xl font-black uppercase tracking-[0.4em] text-amber-400">{domain}</h2>
              <div className="h-[1px] flex-grow bg-white/5" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certs.map((cert) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 border-white/10"
                >
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <Award className="text-amber-400" size={20} />
                    {cert.featured && (
                      <span className="px-2 py-1 text-[9px] rounded-full border border-amber-400/40 text-amber-400 uppercase">Featured</span>
                    )}
                  </div>
                  <h3 className="text-lg font-black text-white leading-tight">{cert.title}</h3>
                  <p className="text-xs text-slate-400 mt-2">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-500 mt-1">{cert.date}</p>
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">{cert.description}</p>
                  <ul className="mt-4 space-y-1 text-xs text-slate-400 list-disc pl-4">
                    {cert.keyLearnings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {cert.linkedinPostUrl && (
                    <a href={cert.linkedinPostUrl} target="_blank" rel="noopener noreferrer" className="inline-flex mt-5 items-center gap-2 text-amber-400 text-xs font-semibold">
                      View post <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
};

export default CertificationsPage;
