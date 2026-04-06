'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Briefcase, Zap, ArrowRight, CheckCircle2, ShieldCheck, Github, Linkedin, Send, AlertCircle } from 'lucide-react';
import { fadeLeft, fadeUp, scaleIn, staggerContainer, VIEWPORT } from '@/lib/animations';

type FormState = 'idle' | 'typing' | 'validating' | 'submitting' | 'success' | 'error';
type Intent = 'partnership' | 'hackathon' | 'research' | 'freelance' | 'other';

interface ContactFormData {
  name: string;
  email: string;
  intent: Intent;
  message: string;
}

const validators = {
  name: (value: string) => value.trim().length >= 2 ? null : 'Name too short',
  email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email',
  message: (value: string) => value.trim().length >= 30 ? null : 'Message needs at least 30 characters',
};

const ContactPage = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    intent: 'other',
    message: ''
  });

  const intentList: Array<{ icon: React.ReactNode; label: string; id: Intent }> = [
    { icon: <Briefcase size={16} />, label: 'Scale-up Partnership', id: 'partnership' },
    { icon: <Zap size={16} />, label: 'Hackathon Team Formation', id: 'hackathon' },
    { icon: <MessageSquare size={16} />, label: 'Research Collaboration', id: 'research' },
    { icon: <ArrowRight size={16} />, label: 'Freelance Opportunity', id: 'freelance' },
    { icon: <MessageSquare size={16} />, label: 'Other', id: 'other' }
  ];

  const errors = useMemo(() => ({
    name: validators.name(formData.name),
    email: validators.email(formData.email),
    message: validators.message(formData.message),
  }), [formData]);

  const completeness = useMemo(() => {
    const checks = [
      formData.name.trim().length >= 2,
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      Boolean(formData.intent),
      formData.message.trim().length >= 30
    ];
    return (checks.filter(Boolean).length / checks.length) * 100;
  }, [formData]);

  const handleFieldUpdate = (field: keyof ContactFormData, value: string) => {
    setFormState('typing');
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('validating');
    setErrorMessage('');

    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      setFormState('error');
      setErrorMessage('Please complete all required fields before submitting.');
      return;
    }

    setFormState('submitting');

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Formspree submission failed');
        }
      }

      setFormState('success');
      setFormData({ name: '', email: '', intent: 'other', message: '' });
    } catch {
      setFormState('error');
      setErrorMessage('Submission failed. Please retry or email ayushjhaa1187@gmail.com directly.');
    }
  };

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="flex flex-col h-full">
          <div className="mb-12">
            <p className="text-amber-400 font-black tracking-[0.5em] uppercase mb-4">Communication_Protocol_v3.0</p>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-10">
              INITIATE <span className="text-amber-400 font-serif italic lowercase">Transmission</span>
            </h1>
            <p className="text-2xl text-slate-400 font-light leading-relaxed max-w-lg mb-12">
              Ready to engineer autonomous solutions or coordinate high-velocity technical deployments. Choose your intent node and start the protocol.
            </p>
          </div>

          <div className="space-y-6 mb-12 flex-grow">
            <div className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-amber-400/20 transition-all">
              <div className="w-14 h-14 bg-white/5 text-amber-400 flex items-center justify-center rounded-2xl"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-1">Direct_Access</p>
                <p className="text-xl font-bold text-white tracking-tight">ayushjhaa1187@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 glass-card border-white/5 hover:border-amber-400/20 transition-all">
              <div className="w-14 h-14 bg-white/5 text-amber-400 flex items-center justify-center rounded-2xl"><ShieldCheck size={24} /></div>
              <div>
                <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase mb-1">Professional_Anchor</p>
                <p className="text-xl font-bold text-white tracking-tight underline decoration-amber-400/30">Ayush Kumar Jha @ LinkedIn</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5">
            <div className="flex gap-4">
              <a href="https://github.com/ayushjhaa1187-spec" target="_blank" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl hover:text-amber-400 transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/" target="_blank" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl hover:text-amber-400 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="glass-panel p-16 rounded-[3rem] border border-white/5 relative overflow-hidden">
          {formState === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in">
              <div className="w-24 h-24 bg-emerald-400/10 text-emerald-400 rounded-full flex items-center justify-center mb-8"><CheckCircle2 size={48} /></div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">ACK_TRANSMITTED</h3>
              <p className="text-slate-400 font-light max-w-sm uppercase text-xs tracking-widest leading-loose">Your payload has been received successfully. I will respond shortly.</p>
              <button onClick={() => setFormState('idle')} className="mt-12 text-[10px] font-black text-amber-400 hover:text-white transition-colors tracking-[0.5em] uppercase">SYSTEM_RESET</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10 h-full flex flex-col">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase block">Completeness</label>
                  <span className="text-[10px] text-amber-400 font-black">{Math.round(completeness)}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 transition-all duration-300" style={{ width: `${completeness}%` }} />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4 block">Select_Intent_Node</label>
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="grid grid-cols-2 gap-4">
                  {intentList.map((intent, i) => (
                    <motion.button
                      key={intent.id}
                      type="button"
                      variants={scaleIn}
                      custom={i}
                      onClick={() => handleFieldUpdate('intent', intent.id)}
                      className={`p-4 border rounded-xl text-white flex items-center gap-3 transition-all group ${formData.intent === intent.id ? 'border-amber-400/70 bg-amber-400/10' : 'border-white/5 bg-white/5 hover:border-amber-400/30'}`}
                    >
                      <span className="text-amber-400/40 group-hover:text-amber-400 transition-colors">{intent.icon}</span>
                      <span className="text-[8px] font-black tracking-widest uppercase leading-none">{intent.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              <div className="space-y-6 flex-grow">
                <div>
                  <input value={formData.name} onChange={(e) => handleFieldUpdate('name', e.target.value)} type="text" placeholder="IDENTIFICATION: [NAME]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" />
                  {errors.name && <p className="text-[10px] text-red-400 mt-2">{errors.name}</p>}
                </div>

                <div>
                  <input value={formData.email} onChange={(e) => handleFieldUpdate('email', e.target.value)} type="email" placeholder="ENCRYPTION_ADDR: [EMAIL]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black" />
                  {errors.email && <p className="text-[10px] text-red-400 mt-2">{errors.email}</p>}
                </div>

                <div>
                  <textarea value={formData.message} onChange={(e) => handleFieldUpdate('message', e.target.value)} rows={4} placeholder="MESSAGE_PAYLOAD: [YOUR_PROPOSAL]" className="w-full bg-white/3 border-b border-white/10 py-4 px-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors uppercase text-xs tracking-widest font-black resize-none"></textarea>
                  {errors.message && <p className="text-[10px] text-red-400 mt-2">{errors.message}</p>}
                </div>
              </div>

              {formState === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs font-bold tracking-wide">
                  <AlertCircle size={14} /> {errorMessage}
                </div>
              )}

              <button
                disabled={formState === 'submitting'}
                className="w-full py-6 bg-amber-400 text-black font-black uppercase text-xs tracking-[0.5em] rounded-2xl hover:bg-white hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] transition-all flex items-center justify-center gap-4 group disabled:opacity-60"
              >
                {formState === 'submitting' ? 'TRANSMITTING...' : (
                  <>SEND_PAYLOAD <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /></>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
