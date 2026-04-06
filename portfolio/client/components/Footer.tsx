import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/5 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Restore signature logo here — AG-05 */}
              <span className="text-2xl font-black tracking-tighter text-white">
                AYUSH <span className="text-amber-400">KUMAR JHA</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              IIT Madras Data Scientist building autonomous AI systems, 
              multi-agent architectures, and scalable data ecosystems.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/ayushjhaa1187-spec" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-amber-400/50 hover:text-amber-400 transition-all">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-amber-400/50 hover:text-amber-400 transition-all">
                <Linkedin size={16} />
              </a>
              <a href="mailto:ayushjhaa1187@gmail.com"
                 className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:border-amber-400/50 hover:text-amber-400 transition-all">
                <Mail size={16} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2.5 bg-amber-400/10 border border-amber-400/20 rounded-lg hover:bg-amber-400 hover:text-black transition-all text-amber-400 text-[10px] font-black tracking-widest uppercase">
                RESUME ↓
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Projects', href: '/projects' },
                { label: 'Experience', href: '/experience' },
                { label: 'Achievements', href: '/achievements' },
                { label: 'About', href: '/about' },
                { label: 'Certifications', href: '/certifications' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-500 hover:text-amber-400 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase mb-6">Open To</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>Scale-up Partnerships</li>
              <li>AI/ML Collaborations</li>
              <li>Hackathon Teams</li>
              <li>Research Projects</li>
              <li>Freelance AI Work</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2026 Ayush Kumar Jha. All rights reserved.</p>
          <p className="text-slate-700 text-[10px] font-mono tracking-widest">
            BUILT WITH NEXT.JS + FRAMER MOTION + VERCEL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
