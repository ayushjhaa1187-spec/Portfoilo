"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
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
        isScrolled ? "py-4 bg-[#060608]/80 backdrop-blur-xl border-b border-[#1E1E24]" : "py-10 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#8B5CF6] flex items-center justify-center font-display text-xl text-[#F1F0FB] group-hover:bg-[#8B5CF6] transition-all duration-500">
            A
          </div>
          <span className="font-mono text-[10px] tracking-[5px] text-[#F1F0FB] hidden sm:block">
            AYUSH JHA
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="font-mono text-[10px] tracking-[3px] text-[#555560] hover:text-[#8B5CF6] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="bg-[#8B5CF6] text-white px-6 py-3 font-mono text-[10px] tracking-[3px] hover:bg-[#7c3aed] transition-colors"
          >
            SAY HELLO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#F1F0FB]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#0E0E12] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-display text-2xl text-[#8B5CF6]">AKJ</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#F1F0FB]">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="font-display text-6xl text-[#F1F0FB] hover:text-[#8B5CF6] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[#1E1E24]">
              <span className="font-mono text-[10px] tracking-[4px] text-[#555560] block mb-4 uppercase">Let's Talk</span>
              <a href="mailto:ayushjhaa1187@gmail.com" className="font-mono text-sm text-[#8B5CF6]">
                ayushjhaa1187@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
