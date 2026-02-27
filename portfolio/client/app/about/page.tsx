import React from 'react';
import { Metadata } from 'next';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import AnimatedReveal from '@/components/AnimatedReveal';
import { timeline, currentFocus, personalInfo } from '@/data/portfolio';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About',
  description: 'From Commerce to Cutting-Edge Data Science at IIT Madras',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        highlight="Me"
        subtitle="From Commerce to Cutting-Edge Data Science at IIT Madras"
      />

      <Section>
        {/* Philosophy */}
        <AnimatedReveal
          direction="up"
          delay={0}
          className="card p-8 sm:p-10 mb-16 relative overflow-hidden group"
          style={{ background: 'var(--bg-card)' }}
        >
          <div className="absolute top-0 left-0 w-2 h-full" style={{ background: 'linear-gradient(180deg, var(--primary), var(--accent))' }} />
          <p className="text-xl sm:text-2xl font-medium italic leading-relaxed text-center sm:text-left relative z-10" style={{ color: 'var(--text-primary)' }}>
            &ldquo;{personalInfo.philosophy}&rdquo;
          </p>
        </AnimatedReveal>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
              My Journey
            </h2>
            <div className="timeline space-y-10">
              {timeline.map((item, i) => (
                <AnimatedReveal
                  key={i}
                  direction="left"
                  delay={i * 0.1}
                  className="relative pl-8"
                >
                  <div className="timeline-dot" />
                  <span className="badge badge-primary text-xs mb-2">{item.year}</span>
                  <h3 className="text-lg font-bold mt-1" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: 'var(--text-secondary)' }}>
                    {item.desc}
                  </p>
                </AnimatedReveal>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Avatar Card */}
            <AnimatedReveal
              direction="none"
              className="w-full max-w-sm mx-auto mb-10"
            >
              <div className="relative group">
                {/* Animated gradient border */}
                <div
                  className="absolute -inset-1 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ background: 'linear-gradient(135deg, var(--primary-light), var(--accent), var(--success))' }}
                />
                <div
                  className="relative aspect-square rounded-2xl flex flex-col items-center justify-center gap-4 overflow-hidden"
                  style={{ background: 'var(--bg-card)', border: '2px solid var(--border-color)' }}
                >
                  {/* Large Initials */}
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-extrabold text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--accent))' }}
                  >
                    AJ
                  </div>
                  <div className="text-center px-6">
                    <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                      Ayush Kumar Jha
                    </h3>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                      Data Scientist | IIT Madras
                    </p>
                  </div>
                  {/* Role tags */}
                  <div className="flex flex-wrap justify-center gap-2 px-4 pb-2">
                    {['ML/AI', 'Remote Sensing', 'Entrepreneur'].map(tag => (
                      <span key={tag} className="badge badge-primary text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            {/* Current Focus */}
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Current Focus
            </h2>
            <div className="space-y-3 mb-10">
              {currentFocus.map((focus, i) => (
                <AnimatedReveal
                  key={i}
                  direction="right"
                  delay={i * 0.1}
                  className="card p-4"
                >
                  <span className="text-base font-medium" style={{ color: 'var(--text-primary)' }}>{focus}</span>
                </AnimatedReveal>
              ))}
            </div>

            {/* Social Links */}
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Connect
            </h2>
            <div className="flex gap-3">
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card p-3 flex items-center gap-2 cursor-pointer transition-transform hover:-translate-y-1"
                >
                  <Icon size={18} style={{ color: 'var(--primary-light)' }} />
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <AnimatedReveal
          direction="up"
          delay={0.2}
          className="mt-16 card p-8"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The Vision
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {personalInfo.bio}
          </p>
        </AnimatedReveal>
      </Section>
    </>
  );
}
