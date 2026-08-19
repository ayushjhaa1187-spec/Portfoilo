'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAssistant from '@/components/AIAssistant';
import PageTransition from '@/components/PageTransition';
import { useKeyboardNav } from '@/hooks/useKeyboardNav';

const STORAGE_KEY = 'keyboard-nav-hints-seen';

export default function AppChrome({ children }: { children: React.ReactNode }) {
  useKeyboardNav();
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem(STORAGE_KEY);
    if (alreadySeen) return;

    sessionStorage.setItem(STORAGE_KEY, '1');
    const raf = window.requestAnimationFrame(() => setShowHints(true));
    const timer = window.setTimeout(() => setShowHints(false), 7000);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <AIAssistant />
      {showHints && (
        <div className="fixed bottom-6 left-6 z-[9997] rounded-xl border border-white/15 bg-black/70 px-4 py-3 text-[10px] text-slate-300 tracking-wider uppercase backdrop-blur">
          Shortcuts: P Projects · E Experience · S Skills · C Contact · A About
        </div>
      )}
    </>
  );
}
