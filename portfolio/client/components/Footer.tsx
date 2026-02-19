import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ayush Kumar Jha</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Data Scientist & Entrepreneur combining technical expertise with business strategy.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/projects" className="hover:text-orange-500 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ayushjhaa1187@gmail.com" aria-label="Email Contact" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ayush Kumar Jha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
