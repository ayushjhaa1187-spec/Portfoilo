'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { personalInfo } from '@/data/portfolio';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function ContactClient() {
  return (
    <>
      <PageHero
        title="Get In"
        highlight="Touch"
        subtitle="Let's discuss ML/AI projects, startups, or research opportunities"
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:py-8"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m currently open to freelance opportunities, research collaborations, and deep-tech startup discussions. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="space-y-6">
              {[
                { icon: FiMail, title: 'Email', value: personalInfo.email, link: `mailto:${personalInfo.email}` },
                { icon: FiMapPin, title: 'Location', value: personalInfo.location, link: null },
                { icon: FiLinkedin, title: 'LinkedIn', value: 'Ayush Kumar Jha', link: personalInfo.linkedin },
                { icon: FiGithub, title: 'GitHub', value: 'ayushjhaa1187-spec', link: personalInfo.github },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary-light)' }}>
                    <item.icon />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                      {item.title}
                    </p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        className="text-lg font-medium transition-colors hover:text-blue-500"
                        style={{ color: 'var(--text-primary)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Direct Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="card p-8 sm:p-10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 z-0" />
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FiMail size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Send an Email
                </h3>
                <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                  The fastest way to reach me is directly via email. I check my inbox regularly and try to respond within 24 hours.
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary w-full max-w-sm flex items-center justify-center gap-2 group-hover:shadow-lg transition-all"
                  style={{ padding: '16px 24px', fontSize: '1rem' }}
                >
                  <FiSend size={18} />
                  Write Message
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
