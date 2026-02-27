'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { personalInfo } from '@/data/portfolio';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';

import PageHero from '@/components/PageHero';

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Direct to mailto link instead of fake backend API
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;

      window.location.href = mailtoLink;

      // Briefly show success before navigation takes over
      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus('error');
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

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Your Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="input" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Your Email</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="input" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Subject</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                  className="input" placeholder="Collaboration Opportunity" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>Message</label>
                <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}
                  className="input resize-none" placeholder="Hi Ayush, I&apos;d like to talk about..." />
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center">
                {status === 'sending' ? 'Sending...' : (
                  <>Send Message <FiSend size={16} /></>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-md bg-green-50 text-green-700 text-sm text-center border border-green-200">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-md bg-red-50 text-red-700 text-sm text-center border border-red-200">
                  Oops! Something went wrong. Please try emailing me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
