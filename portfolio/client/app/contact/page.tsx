'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Loader2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { contact } from '@/data/contact';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Honeypot field for spam protection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      console.log('Spam detected');
      setStatus('success'); // Silently reject
      return;
    }

    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err: unknown) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8"
            >
              Let&apos;s <span className="text-amber-500 underline decoration-4 underline-offset-8">Connect.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-500 mb-12 max-w-md leading-relaxed"
            >
              Interested in collaboration, scale-up opportunities, or technical consulting? Reach out directly.
            </motion.p>

            <div className="space-y-6">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all group">
                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Direct Email</div>
                  <div className="text-lg font-bold text-slate-900">{contact.email}</div>
                </div>
              </a>

              <div className="flex gap-4">
                <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div className="hidden sm:block text-xs font-black uppercase tracking-widest text-slate-900">LinkedIn</div>
                </a>
                <a href={contact.socials.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                    <GithubIcon size={24} />
                  </div>
                  <div className="hidden sm:block text-xs font-black uppercase tracking-widest text-slate-900">GitHub</div>
                </a>
              </div>
              
              {/* Calendly CTA */}
              <a href={contact.calendlyLink} target="_blank" rel="noopener noreferrer" className="block p-8 bg-slate-900 rounded-3xl text-white shadow-2xl shadow-slate-200 hover:scale-[1.02] transition-all group">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">Book a Strategy Call</h3>
                    <p className="text-slate-400 text-sm">30-min deep dive into your technical roadmap.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                    →
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (hidden) */}
              <input 
                type="text" 
                name="honeypot" 
                value={formData.honeypot} 
                onChange={(e) => setFormData({...formData, honeypot: e.target.value})}
                className="hidden" 
                tabIndex={-1} 
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Subject</label>
                <input 
                  required
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  placeholder="What are you working on?"
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-slate-50 border-none rounded-2xl px-6 py-6 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-amber-400 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:bg-amber-400 hover:text-slate-900 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl shadow-slate-200"
              >
                {status === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    Initialize Connection <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-green-50 border border-green-100 rounded-2xl text-green-700 text-sm text-center font-medium"
                >
                  Message sent successfully! I&apos;ll get back to you shortly.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-700 text-sm text-center font-medium"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
