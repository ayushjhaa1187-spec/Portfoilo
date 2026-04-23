'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Search, Moon, Sun } from 'lucide-react';
import { SearchModal } from './SearchModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme);
    if (initialTheme === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
        scrolled 
        ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl py-3 shadow-2xl border-b border-slate-100 dark:border-slate-800' 
        : 'bg-transparent py-6'
      }`}>
        <div className="absolute top-0 left-0 h-0.5 bg-blue-600" style={{ width: `${scrollProgress}%` }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform shadow-lg shadow-blue-200">
              AKJ
            </div>
            <span className={`text-xl font-bold tracking-tighter transition-colors ${
              scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`text-[10px] font-black tracking-widest uppercase transition-all hover:text-blue-600 ${
                  pathname === link.path 
                  ? 'text-blue-600' 
                  : scrolled ? 'text-slate-500 dark:text-slate-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-xl transition-colors ${
                  scrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500' : 'hover:bg-white/10 text-white'
                }`}
                title="Search (Cmd+K)"
              >
                <Search size={18} />
              </button>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-colors ${
                  scrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500' : 'hover:bg-white/10 text-white'
                }`}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Toggles */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-slate-500' : 'text-white'
              }`}
            >
              <Search size={20} />
            </button>
            <button 
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-slate-500' : 'text-white'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-white dark:bg-slate-900 pt-32 px-8 flex flex-col space-y-6"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Navigation Menu</span>
              <button onClick={toggleTheme} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-black tracking-tighter flex items-center justify-between group ${
                    pathname === link.path ? 'text-blue-600' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                  <ChevronRight className="group-hover:translate-x-2 transition-transform text-slate-200" size={32} />
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
