'use client';

import React from 'react';

// Tech stack strip — replaces buzzword ticker
const TECH_STACK = [
  { label: 'React', dot: true },
  { label: 'Next.js', dot: true },
  { label: 'Python', dot: true },
  { label: 'LangChain', dot: true },
  { label: 'RAG', dot: true },
  { label: 'FastAPI', dot: true },
  { label: 'Supabase', dot: true },
  { label: 'TypeScript', dot: true },
  { label: 'Vercel', dot: false },
];

const Marquee = () => {
  // Duplicate for seamless loop
  const items = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div
      className="py-5 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap gap-0 items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-1">
            <span className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors cursor-default">
              {item.label}
            </span>
            {item.dot && (
              <span className="w-1 h-1 rounded-full bg-amber-400/30 flex-shrink-0" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
