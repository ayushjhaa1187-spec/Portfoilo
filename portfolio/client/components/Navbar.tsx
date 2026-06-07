'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { SignatureLogo } from './SignatureLogo';
import { profile } from '@/data/profile';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-black focus:font-bold focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-5'
        }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Page scroll progress"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" aria-label="Ayush Kumar Jha — Home">
            <SignatureLogo size={46} showText />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10" role="menubar">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                role="menuitem"
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`relative text-[12px] font-bold tracking-[0.12em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm
                  ${
                    isActive(link.path)
                      ? 'text-amber-400 after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-amber-400 after:rounded-full'
                      : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA: Resume or LinkedIn */}
          <div className="hidden md:flex items-center gap-3">
            {profile.resume ? (
              <a
                href={profile.resume}
                download
                aria-label="Download Resume"
                className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] border border-amber-400/40 text-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Download size={12} />
                Resume
              </a>
            ) : (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn Profile"
                className="flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.15em] border border-amber-400/40 text-amber-400 rounded-full hover:bg-amber-400 hover:text-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ExternalLink size={12} />
                LinkedIn
              </a>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[90] bg-[#080808]/97 backdrop-blur-3xl flex flex-col pt-24 px-8 overflow-y-auto"
          >
            {/* Logo in mobile */}
            <div className="mb-10">
              <SignatureLogo size={52} showText />
            </div>

            {/* Mobile nav links */}
            <nav aria-label="Mobile navigation" className="space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.path}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 text-3xl font-black tracking-tight border-b transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400
                      ${
                        isActive(link.path)
                          ? 'text-amber-400 border-amber-400/20'
                          : 'text-white border-white/5 hover:text-amber-400 hover:border-amber-400/20'
                      }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile resume CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8"
            >
              {profile.resume ? (
                <a
                  href={profile.resume}
                  download
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-amber-400 text-black font-bold text-sm rounded-full hover:bg-amber-300 transition-all"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              ) : (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold text-sm rounded-full hover:bg-amber-400/20 transition-all"
                >
                  <ExternalLink size={16} />
                  View LinkedIn
                </a>
              )}
            </motion.div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pb-10 pt-8 border-t border-white/5"
            >
              <p className="text-xs text-slate-600">
                {profile.email}
              </p>
              <p className="text-xs text-slate-700 mt-1">
                AI & Full-Stack Engineer · IIT Madras
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
