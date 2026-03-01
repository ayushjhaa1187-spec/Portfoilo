'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiMoreHorizontal, FiDownload } from 'react-icons/fi';

const navItems = [
  { name: 'Home', href: '/', icon: <FiHome size={20} /> },
  { name: 'About', href: '/about', icon: <FiUser size={20} /> },
  { name: 'Projects', href: '/projects', icon: <FiCode size={20} /> },
  { name: 'Experience', href: '/experience', icon: <FiBriefcase size={20} /> },
  { name: 'Contact', href: '/contact', icon: <FiMail size={20} /> },
];

const moreLinks = [
  { name: 'Skills', href: '/skills' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Research', href: '/research' },
  { name: 'Blog', href: '/blog' },
  { name: 'Education', href: '/education' },
  { name: 'Achievements', href: '/achievements' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* More Menu Dropdown */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 glass rounded-2xl shadow-2xl p-2"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex flex-col gap-1">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setShowMore(false)}
                  className="px-3 py-2 rounded-xl text-sm transition-all duration-300 hover:bg-white/10"
                  style={{
                    color: pathname === link.href ? 'var(--primary)' : 'var(--text-secondary)',
                    fontWeight: pathname === link.href ? 600 : 500
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-1 mx-2" />
              <a
                href="https://docs.google.com/document/d/1yRiBRiccgoBYQwmctVLHuYk1YVpn670uSgQDxgrSnSY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMore(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all duration-300 hover:bg-white/10 text-white"
              >
                <FiDownload size={14} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Dock */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="glass px-2 py-2 rounded-full flex items-center gap-2"
        style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
      >
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setShowMore(false)}
              className="relative p-3 rounded-full transition-all duration-300 group"
              style={{
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
              }}
            >
              {/* Active Background */}
              {isActive && (
                <motion.div
                  layoutId="dockActive"
                  className="absolute inset-0 rounded-full bg-white/5 z-0"
                  style={{ border: '1px solid rgba(0,240,255,0.2)' }}
                />
              )}

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium rounded-md glass whitespace-nowrap z-50 text-white"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 duration-200 group-hover:-translate-y-1">
                {item.icon}
              </div>
            </Link>
          );
        })}

        <div className="w-px h-8 bg-white/10 mx-1" />

        {/* More Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className={`relative p-3 rounded-full transition-all duration-300 ${showMore ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
        >
          <div className="relative z-10 duration-200 hover:-translate-y-1">
            <FiMoreHorizontal size={20} className={showMore ? "text-[var(--primary)] text-shadow-[0_0_10px_var(--primary)]" : ""} />
          </div>
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
