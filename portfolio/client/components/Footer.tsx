'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, Download, ArrowUpRight } from 'lucide-react';
import { SignatureLogo } from './SignatureLogo';
import { profile } from '@/data/profile';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-5">
              <SignatureLogo size={52} showText />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              {profile.title} · {profile.subtitle}.
              Building AI-powered products, RAG systems, and full-stack applications.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 bg-white/5 border border-white/8 rounded-lg hover:border-amber-400/40 hover:text-amber-400 text-slate-500 transition-all"
              >
                <Github size={15} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 bg-white/5 border border-white/8 rounded-lg hover:border-amber-400/40 hover:text-amber-400 text-slate-500 transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="p-2.5 bg-white/5 border border-white/8 rounded-lg hover:border-amber-400/40 hover:text-amber-400 text-slate-500 transition-all"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-slate-500 hover:text-amber-400 transition-colors text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Open To */}
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-slate-600 uppercase mb-5">
              Open To
            </p>
            <ul className="space-y-2.5">
              {[
                'Internship Opportunities',
                'Hackathon Partnerships',
                'AI / ML Collaborations',
                'Full-Stack Freelance',
                'Research Projects',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Resume CTA */}
            {profile.resume ? (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full hover:bg-amber-400/10 transition-all"
              >
                <Download size={12} />
                Download Resume
              </a>
            ) : (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-amber-400/30 text-amber-400 text-xs font-bold rounded-full hover:bg-amber-400/10 transition-all"
              >
                <ArrowUpRight size={12} />
                View LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {currentYear} Ayush Kumar Jha. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
