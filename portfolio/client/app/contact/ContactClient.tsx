'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { personalInfo } from '@/data/portfolio';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiLoader, FiCheckCircle } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

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

          {/* Right Column - Direct Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="card p-8 sm:p-10 relative overflow-hidden group hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-orange-500/5 z-0 group-hover:from-blue-500/10 group-hover:to-orange-500/10 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FiMail size={18} />
                  </div>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Name</label>
                      <input
                        required
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Email</label>
                      <input
                        required
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                    <input
                      required
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="input"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Message</label>
                    <textarea
                      required
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input resize-none"
                      placeholder="Tell me about your idea..."
                    />
                  </div>

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2 group-hover:shadow-lg transition-all mt-6 disabled:opacity-70"
                    style={{ padding: '16px 24px', fontSize: '1rem' }}
                  >
                    {status === 'loading' ? (
                      <FiLoader size={18} className="animate-spin" />
                    ) : status === 'success' ? (
                      <>
                        <FiCheckCircle size={18} />
                        Sent Successfully!
                      </>
                    ) : (
                      <>
                        <FiSend size={18} className="group-hover:translate-x-1 duration-300" />
                        Send Message
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center mt-2">Failed to send message. Please try again or use the email link directly.</p>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
