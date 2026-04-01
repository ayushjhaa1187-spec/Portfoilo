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
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'About', path: '/#about', realPath: '/about' },
    { name: 'Projects', path: '/#projects', realPath: '/projects' },
    { name: 'Experience', path: '/experience', realPath: '/experience' },
    { name: 'Achievements', path: '/achievements', realPath: '/achievements' },
    { name: 'Skills', path: '/#skills', realPath: '/skills' },
    { name: 'Education', path: '/education', realPath: '/education' },
    { name: 'Contact', path: '/#contact', realPath: '/contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

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
            <span className="text-xl font-bold tracking-tighter text-white group-hover:text-amber-400 transition-colors uppercase">
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:text-amber-400 ${
                  pathname === link.realPath || (pathname === '/' && link.path.startsWith('/#')) ? 'text-white' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            aria-label="Toggle Menu"
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
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
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#0a0a0a]/95 backdrop-blur-3xl pt-40 px-8 flex flex-col space-y-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  href={link.path}
                  onClick={(e) => {
                    handleLinkClick(e, link.path);
                    if (!link.path.startsWith('/#') || pathname !== '/') setIsOpen(false);
                  }}
                  className={`text-4xl font-black tracking-tighter flex items-center justify-between group ${
                    pathname === link.realPath ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                  <ChevronRight className="text-amber-400 group-hover:translate-x-2 transition-transform" size={32} />
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-12 mt-12 border-t border-white/5 opacity-40">
               <p className="text-[10px] font-black tracking-[0.5em] text-slate-500 uppercase italic">Engineering_Node_v3.2</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
