import React from 'react';
import { Metadata } from 'next';
import Section from '@/components/Section';
import PageHero from '@/components/PageHero';
import AnimatedReveal from '@/components/AnimatedReveal';
import { timeline, currentFocus, personalInfo } from '@/data/portfolio';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'About | Ayush Kumar Jha',
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
            {/* Photo Placeholder */}
            <AnimatedReveal
              direction="none"
              className="w-full aspect-square max-w-sm mx-auto mb-10 rounded-2xl flex items-center justify-center transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(249,115,22,0.1))',
                border: '2px dashed var(--border-color)',
              }}
            >
              <div className="text-center p-6">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                  Professional Photo
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                  Coming Soon
                </p>
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
