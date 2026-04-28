'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { contact } from '@/data/contact';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Anti-spam
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Get In Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interested in AI collaboration, research, or startup opportunities? Drop a message below.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              I usually respond within 24 hours. Feel free to reach out via email or LinkedIn.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Mail className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                <p className="text-gray-800 font-medium">{contact.email}</p>
              </div>
            </div>

            <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Linkedin className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">LinkedIn</p>
                <p className="text-gray-800 font-medium">Ayush Kumar Jha</p>
              </div>
            </a>

            <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
              <div className="p-3 bg-slate-50 rounded-lg">
                <Github className="text-slate-900 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">GitHub</p>
                <p className="text-gray-800 font-medium">ayushjhaa1187-spec</p>
              </div>
            </a>
          </div>

          <div className="pt-8">
            <Button
              onClick={() => window.open(contact.calendlyLink, '_blank')}
              variant="outline"
              className="w-full py-6 text-lg font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              Book a Strategy Call
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Name<span className="text-red-500" aria-hidden="true"> *</span><span className="sr-only"> (required)</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Email<span className="text-red-500" aria-hidden="true"> *</span><span className="sr-only"> (required)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-bold text-gray-500 uppercase ml-1">
                Subject<span className="text-red-500" aria-hidden="true"> *</span><span className="sr-only"> (required)</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 outline-none transition-all"
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase ml-1">
                Message<span className="text-red-500" aria-hidden="true"> *</span><span className="sr-only"> (required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-blue-500 outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> SENDING...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> SEND MESSAGE
                </span>
              )}
            </Button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-600 font-bold text-center mt-4"
              >
                ✨ Message received! I&apos;ll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-rose-600 font-bold text-center mt-4"
              >
                ❌ Something went wrong. Please try again later.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
