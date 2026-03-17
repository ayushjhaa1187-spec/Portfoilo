"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "LAB", href: "#building" },
  { name: "STATS", href: "#stats" },
  { name: "WORKS", href: "#projects" },
  { name: "HIRE", href: "#hiring" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 px-6 lg:px-20 ${
        isScrolled ? "py-4 bg-[#0A0A0B]/90 backdrop-blur-2xl border-b border-[#1E1E24]" : "py-10 bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-3 group relative">
          <img 
            src="/signature-gold.png" 
            alt="Ayush Kumar Jha" 
            style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -bottom-2 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-mono text-[10px] tracking-[4px] text-[#555560] hover:text-[#D4AF37] transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#hiring"
            onClick={(e) => scrollToSection(e, "#hiring")}
            className="bg-[#D4AF37] text-[#0A0A0B] px-8 py-3.5 font-mono text-[10px] font-bold tracking-[4px] hover:scale-105 transition-all rounded-full"
          >
            HACK ME
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#F1F0FB] p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-[#0A0A0B] flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <img src="/signature-gold.png" alt="Logo" className="h-8" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#F1F0FB] p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-5xl text-[#F1F0FB] hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[#1E1E24]">
              <span className="font-mono text-[10px] tracking-[8px] text-[#555560] block mb-6 uppercase">Let's Connect</span>
              <a href="mailto:ayushjhaa1187@gmail.com" className="font-display text-4xl text-[#D4AF37] break-all">
                ayushjhaa@lab
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
