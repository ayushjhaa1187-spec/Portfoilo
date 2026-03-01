'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const mainLinks = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
];

const moreLinks = [
  { name: 'Achievements', href: '/achievements' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research', href: '/research' },
  { name: 'Blog', href: '/blog' },
  { name: 'Education', href: '/education' },
  { name: 'Resume', href: 'https://docs.google.com/document/d/1yRiBRiccgoBYQwmctVLHuYk1YVpn670uSgQDxgrSnSY/edit?usp=sharing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'glass shadow-md'
        : 'bg-transparent'
        }`}
      style={{ borderBottom: scrolled ? '1px solid var(--border-color)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start justify-center group">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg"
              alt="IIT Madras Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-bold text-xs sm:text-sm mt-1" style={{ color: 'var(--text-primary)' }}>
              Ayush Kumar Jha
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color: isActive ? 'var(--primary-light)' : 'var(--text-secondary)',
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                      style={{ background: 'var(--primary-light)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Dropdown for More Links */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
                style={{ color: moreLinks.some(l => l.href === pathname) ? 'var(--primary-light)' : 'var(--text-secondary)' }}
              >
                More <span className="text-[0.6rem]">▼</span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-1 w-48 rounded-xl shadow-xl overflow-hidden glass"
                    style={{ border: '1px solid var(--border-color)' }}
                  >
                    <div className="py-2">
                      {moreLinks.map(link => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                          style={{ color: pathname === link.href ? 'var(--primary-light)' : 'var(--text-secondary)' }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              key="Contact"
              href="/contact"
              className="relative px-2 xl:px-3 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{
                color: pathname === '/contact' ? 'var(--primary-light)' : 'var(--text-secondary)',
              }}
            >
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 xl:ml-4 p-2.5 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="https://docs.google.com/document/d/1yRiBRiccgoBYQwmctVLHuYk1YVpn670uSgQDxgrSnSY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 btn-primary text-sm shadow-md flex items-center justify-center whitespace-nowrap"
              style={{ padding: '8px 24px' }}
            >
              Resume
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/5"
              style={{ color: 'var(--text-secondary)' }}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{ color: 'var(--text-primary)' }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass shadow-xl"
            style={{ borderTop: '1px solid var(--border-color)' }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {[...mainLinks, ...moreLinks, { name: 'Contact', href: '/contact' }].map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                    style={{
                      color: isActive ? 'var(--primary-light)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="https://docs.google.com/document/d/1yRiBRiccgoBYQwmctVLHuYk1YVpn670uSgQDxgrSnSY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center btn-primary mt-2"
                style={{ marginTop: '12px' }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
