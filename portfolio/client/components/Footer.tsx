'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/ayushjhaa1187-spec', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:ayushjhaa1187@gmail.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      {/* Gradient Line */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--primary-light), var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-start justify-center mb-4 group">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg"
                alt="IIT Madras Logo"
                className="h-10 w-auto object-contain mb-1"
              />
              <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                Ayush Kumar Jha
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md mb-6" style={{ color: 'var(--text-secondary)' }}>
              IIT Madras Data Science Scholar building AI solutions at the intersection of science & business.
              Combining technical depth with entrepreneurial vision to create impactful solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:translate-x-1 inline-block"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p>📧 ayushjhaa1187@gmail.com</p>
              <p>📍 Ghaziabad, Uttar Pradesh, India</p>
              <p>🎓 IIT Madras (BS Data Science)</p>
            </div>
            <Link href="/contact" className="btn-primary text-xs mt-4 inline-flex" style={{ padding: '8px 16px' }}>
              <FiMail size={14} />
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Ayush Kumar Jha. Built with <FiHeart size={12} style={{ color: 'var(--accent)' }} /> using Next.js
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Designed & Developed with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
