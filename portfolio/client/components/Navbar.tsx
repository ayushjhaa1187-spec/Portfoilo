'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Optimize scroll handler by decoupling scroll events from state updates using requestAnimationFrame
          const isScrolled = window.scrollY > 20;
          setScrolled(isScrolled);

          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          setScrollProgress((winScroll / height) * 100);

          ticking = false;
        });
        ticking = true;
      }
    };

    // Mark event listener as passive to improve scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Research', path: '/research' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-2xl' : 'bg-transparent py-6'
      }`}>
        <div className="absolute top-0 left-0 h-0.5 bg-amber-400" style={{ width: `${scrollProgress}%` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center font-bold text-black group-hover:rotate-12 transition-transform">
              AKJ
            </div>
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-amber-400 transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-sm font-bold tracking-widest uppercase transition-all hover:text-amber-400 ${
                  pathname === link.path ? 'text-amber-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a] pt-32 px-8 flex flex-col space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black tracking-tighter flex items-center justify-between group ${
                    pathname === link.path ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" size={40} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
