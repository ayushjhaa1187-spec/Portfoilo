'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CaseStudy } from '@/data/projects';

const CaseStudyViewer = ({ study }: { study: CaseStudy }) => {
  const [mode, setMode] = useState<'preview' | 'full'>('preview');

  // embedUrl is optional — falls back to no iframe
  const embedUrl = (study as CaseStudy & { embedUrl?: string }).embedUrl;

  return (
    <div className="glass-card rounded-2xl overflow-hidden group border border-white/10">
      {mode === 'preview' ? (
        <div className="relative aspect-video">
          <Image src={study.thumbnail} alt={study.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute left-4 bottom-4 max-w-[75%]">
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-amber-400">{study.domain}</p>
            <p className="text-sm font-bold text-white leading-tight">{study.outcome}</p>
          </div>
          {embedUrl && (
            <button
              onClick={() => setMode('full')}
              className="absolute bottom-4 right-4 px-4 py-2 bg-amber-400 text-black text-xs font-bold rounded-lg uppercase tracking-wide"
            >
              View Details ↗
            </button>
          )}
        </div>
      ) : embedUrl ? (
        <div>
          <iframe
            src={embedUrl}
            className="w-full aspect-[16/9]"
            allow="autoplay"
            title={study.title}
          />
          <button
            onClick={() => setMode('preview')}
            className="w-full py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-amber-400 transition-colors border-t border-white/10"
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CaseStudyViewer;
