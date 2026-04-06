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

  const mainLinks = [
    { name: 'About', path: '/#about', realPath: '/about' },
    { name: 'Projects', path: '/#projects', realPath: '/projects' },
    { name: 'Experience', path: '/experience', realPath: '/experience' },
    { name: 'Skills', path: '/#skills', realPath: '/skills' },
    { name: 'Achievements', path: '/achievements', realPath: '/achievements' },
  ];

  const moreLinks = [
    { name: 'Certifications', path: '/certifications', realPath: '/certifications' },
    { name: 'Blog', path: '/blog', realPath: '/blog' },
    { name: 'Research', path: '/research', realPath: '/research' },
    { name: 'Contact', path: '/#contact', realPath: '/contact' }
  ];

  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (path: string) => {
    if (path.startsWith('/#')) return pathname === '/';
    return pathname === path || pathname.startsWith(path + '/');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = path.replace('/#', '');
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
        
        <div className="max-w-[var(--max-width)] mx-auto px-[var(--section-px)] flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" 
                 xmlns="http://www.w3.org/2000/svg"
                 className="group-hover:scale-110 transition-transform duration-300">
              {/* Geometric AKJ monogram — hexagonal border with initials */}
              <polygon points="20,2 36,11 36,29 20,38 4,29 4,11" 
                       stroke="#FBBF24" strokeWidth="1.5" fill="none"/>
              <text x="20" y="25" textAnchor="middle" 
                    fontFamily="monospace" fontWeight="900" 
                    fontSize="13" fill="#FBBF24" letterSpacing="0">
                AKJ
              </text>
              {/* Corner accent dots */}
              <circle cx="20" cy="2" r="1.5" fill="#FBBF24"/>
              <circle cx="36" cy="20" r="1.5" fill="#FBBF24"/>
              <circle cx="4" cy="20" r="1.5" fill="#FBBF24"/>
            </svg>
            <span className="text-xl font-black tracking-tighter text-white 
                             group-hover:text-amber-400 transition-colors uppercase">
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {mainLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:text-amber-400 relative
                  ${isActive(link.path) 
                    ? 'text-amber-400 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-amber-400' 
                    : 'text-slate-500'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown */}
            <div className="relative group/more">
              <button 
                className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 hover:text-amber-400 transition-all flex items-center gap-1"
                onMouseEnter={() => setMoreOpen(true)}
              >
                MORE <ChevronRight size={10} className="rotate-90" />
              </button>
              
              <div className="absolute top-full right-0 mt-4 w-48 py-4 bg-[#121212] border border-white/10 rounded-xl opacity-0 translate-y-2 pointer-events-none group-hover/more:opacity-100 group-hover/more:translate-y-0 group-hover/more:pointer-events-auto transition-all shadow-2xl">
                 {moreLinks.map((link) => (
                   <Link
                      key={link.name}
                      href={link.path}
                      onClick={(e) => {
                        handleNavClick(e, link.path);
                        setMoreOpen(false);
                      }}
                      className="block px-6 py-3 text-[9px] font-black tracking-widest text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-all uppercase"
                   >
                      {link.name}
                   </Link>
                 ))}
              </div>
            </div>
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
            className="fixed inset-0 z-[90] bg-[#0a0a0a]/95 backdrop-blur-3xl pt-40 px-8 flex flex-col space-y-6 overflow-y-auto"
          >
            {[...mainLinks, ...moreLinks].map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  href={link.path}
                  onClick={(e) => {
                    handleNavClick(e, link.path);
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
