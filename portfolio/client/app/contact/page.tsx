'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Zap,
  MessageSquare,
  Users,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { profile } from '@/data/profile';

type FormState = 'idle' | 'submitting' | 'success' | 'error';
type Reason = 'hiring' | 'collaboration' | 'freelance' | 'hackathon' | 'general';

interface FormData {
  name: string;
  email: string;
  reason: Reason;
  message: string;
}

const REASON_OPTIONS: { id: Reason; label: string; icon: React.ReactNode }[] = [
  { id: 'hiring',        label: 'Internship / Hiring',      icon: <Briefcase size={15} /> },
  { id: 'collaboration', label: 'Project Collaboration',    icon: <Users size={15} /> },
  { id: 'freelance',     label: 'Freelance Work',           icon: <Zap size={15} /> },
  { id: 'hackathon',     label: 'Hackathon / Team-up',      icon: <ArrowRight size={15} /> },
  { id: 'general',       label: 'General Message',          icon: <MessageSquare size={15} /> },
];

function validate(data: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (data.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email.';
  if (data.message.trim().length < 20) errors.message = 'Message should be at least 20 characters.';
  return errors;
}

const ContactPage = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: 'general',
    message: '',
  });

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear individual field error on change
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            reason: formData.reason,
            message: formData.message,
          }),
        });
        if (!response.ok) throw new Error('Submission failed');
      }

      setFormState('success');
      setFormData({ name: '', email: '', reason: 'general', message: '' });
    } catch {
      setFormState('error');
      setErrorMessage(
        `Something went wrong. Please email me directly at ${profile.email}`
      );
    }
  };

  return (
    <main id="main-content" className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Build Together
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Whether you have a project in mind, want to collaborate on something, or just want
            to say hi — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── LEFT: Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-amber-400/30 transition-all group"
              aria-label={`Send email to ${profile.email}`}
            >
              <div className="w-12 h-12 bg-amber-400/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition-colors">
                <Mail size={20} className="text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-0.5">Email</p>
                <p className="text-white font-semibold text-sm">{profile.email}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-amber-400/30 transition-all group"
              aria-label="View LinkedIn Profile"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                <Linkedin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-0.5">LinkedIn</p>
                <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                  Ayush Kumar Jha
                  <ExternalLink size={12} className="text-slate-500" />
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 glass-card rounded-2xl hover:border-amber-400/30 transition-all group"
              aria-label="View GitHub Profile"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-0.5">GitHub</p>
                <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                  ayushjhaa1187-spec
                  <ExternalLink size={12} className="text-slate-500" />
                </p>
              </div>
            </a>

            {/* Response time note */}
            <div className="p-4 rounded-xl bg-emerald-400/5 border border-emerald-400/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wide">
                  {profile.availability}
                </p>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                I typically respond within 24–48 hours. For urgent inquiries, email directly.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/8"
          >
            {formState === 'success' ? (
              /* Success state */
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-20 h-20 bg-emerald-400/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-8">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="text-sm font-bold text-amber-400 hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact form">
                {/* Reason for Contact */}
                <fieldset>
                  <legend className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-3 block">
                    Reason for Contact
                  </legend>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {REASON_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        aria-pressed={formData.reason === opt.id}
                        onClick={() => update('reason', opt.id)}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 text-xs font-medium ${
                          formData.reason === opt.id
                            ? 'border-amber-400/60 bg-amber-400/10 text-amber-400'
                            : 'border-white/8 bg-white/4 text-slate-400 hover:border-white/15 hover:text-white'
                        }`}
                      >
                        <span className="flex-shrink-0">{opt.icon}</span>
                        <span className="leading-tight">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2 block">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      fieldErrors.name ? 'border-red-400/60' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2 block">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      fieldErrors.email ? 'border-red-400/60' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-2 block">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    className={`w-full bg-white/4 border rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all resize-none ${
                      fieldErrors.message ? 'border-red-400/60' : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot (spam protection - hidden) */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Submit error */}
                {formState === 'error' && errorMessage && (
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-red-400/10 border border-red-400/20 text-red-400 text-xs">
                    <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                    {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  aria-label="Send message"
                  className="w-full py-4 bg-amber-400 text-black font-bold text-sm rounded-xl hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/20 active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
