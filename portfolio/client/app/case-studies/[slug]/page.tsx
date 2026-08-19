'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, VIEWPORT } from '@/lib/animations';
import { projects, caseStudies } from '@/data/projects';
import { ArrowLeft, ExternalLink, Github, Terminal, Database, Target, Cpu, Users, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const caseStudy = caseStudies.find(cs => cs.projectSlug === slug);

  if (!project) return (
    <div className="min-h-screen pt-40 px-6 text-center bg-black">
      <h1 className="text-4xl font-black text-white uppercase tracking-widest mb-8">Case Study Not Found</h1>
      <Link href="/projects" className="text-amber-400 font-bold tracking-widest uppercase hover:underline flex items-center justify-center gap-2">
         <ArrowLeft size={16} /> Back to Projects
      </Link>
    </div>
  );

  if (!caseStudy) return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48 bg-black">
         <Link href="/projects" className="text-slate-500 hover:text-amber-400 text-xs font-bold tracking-wide flex items-center gap-2 mb-12 transition-colors group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} /> Back to Projects
         </Link>
      <div className="glass-panel p-20 text-center border-amber-400/20">
         <AlertTriangle size={64} className="mx-auto text-amber-400 mb-8" />
         <h1 className="text-4xl font-black text-white uppercase tracking-widest mb-4">Case Study in Development</h1>
         <p className="text-slate-400 max-w-md mx-auto">Detailed forensic analysis and technical benchmarking for this project are currently being finalized by the engineering team.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48 bg-black">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
         <Link href="/projects" className="text-slate-500 hover:text-amber-400 text-xs font-black tracking-[0.4em] uppercase flex items-center gap-2 mb-12 transition-colors group">
            <Link href="/projects" className="text-slate-500 hover:text-amber-400 text-xs font-bold tracking-wide flex items-center gap-2 mb-12 transition-colors group">
               <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={16} /> Back to Projects
            </Link>
         </Link>
         
         <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-4xl">
               <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1 bg-amber-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full">{project.category}</span>
                  <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest italic">{project.featured ? 'Featured' : 'Experimental'}</span>
               </div>
               <h1 className="text-5xl md:text-8xl font-black text-white hover:text-amber-400 transition-colors uppercase tracking-tight mb-8 leading-none">{project.title}</h1>
               <p className="text-2xl text-slate-400 font-light leading-relaxed tracking-wide mb-12 max-w-3xl">
                  {project.shortDescription}
               </p>
               
               <div className="flex flex-wrap gap-4">
                  {project.githubUrl ? (
                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-wide rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                        <Github size={18} /> View on GitHub
                     </a>
                  ) : null}
                  {project.liveUrl && (
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-amber-400 text-black font-bold uppercase text-xs tracking-wide rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                        <ExternalLink size={18} /> Live Demo
                     </a>
                  )}
               </div>
            </div>

            <div className="glass-panel p-8 w-full md:w-80 rounded-[3rem] border border-white/5 space-y-8 mt-12 md:mt-0">
               <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                     {project.techStack.map(tech => (
                       <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-white tracking-wide uppercase">{tech}</span>
                     ))}
                  </div>
               </div>
               {project.metrics && project.metrics.length > 0 && (
                 <div className="pt-6 border-t border-white/5 space-y-4">
                   {project.metrics.map((m) => (
                     <div key={m.label} className="flex items-center gap-4">
                        <Target className="text-emerald-400" size={16} />
                        <div>
                           <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{m.label}</p>
                           <p className="text-sm font-bold text-white">{m.value}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
         </div>
      </motion.div>

      {/* Main Content Sections */}
      <div className="grid lg:grid-cols-12 gap-20">
         <div className="lg:col-span-8 space-y-24">
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
               <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <Terminal size={22} className="text-amber-400" /> Problem
               </h2>
               <div className="text-slate-400 text-lg font-light leading-relaxed space-y-6">
                  <p>{caseStudy.problem}</p>
               </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
               <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <Database size={22} className="text-amber-400" /> Solution
               </h2>
               <div className="text-slate-400 text-lg font-light leading-relaxed space-y-6">
                  <p>{caseStudy.solution}</p>
               </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
               <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <Cpu size={22} className="text-amber-400" /> Key Features
               </h2>
               <div className="text-slate-400 text-lg font-light leading-relaxed space-y-6">
                  {caseStudy.features.map((feature, i) => (
                    <div key={i} className="flex gap-6 items-start p-8 glass-panel border-white/5 group hover:bg-white/[0.05] transition-all">
                       <span className="text-amber-400 font-bold text-xl italic font-serif opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                       <p className="text-slate-300 font-medium leading-normal">{feature}</p>
                    </div>
                  ))}
               </div>
            </motion.section>
         </div>

         <div className="lg:col-span-4 space-y-12">
            <div className="sticky top-40 space-y-10">
               <motion.div variants={fadeLeft} initial="hidden" animate="visible" className="p-10 glass-panel rounded-[3rem] border border-white/5 bg-gradient-to-br from-amber-400/5 to-transparent">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-5 leading-none">Results</h3>
                  <div className="space-y-8">
                     {caseStudy.results.map((res, i) => (
                       <div key={i} className="flex gap-4">
                          <CheckCircle className="text-emerald-400 shrink-0" size={20} />
                          <p className="text-slate-400 text-sm font-light leading-snug">{res}</p>
                       </div>
                     ))}
                  </div>
               </motion.div>
               
               <div className="text-center p-12 glass-panel rounded-[3rem] border border-white/5 italic opacity-25">
                  <Terminal size={48} className="mx-auto mb-6 text-slate-700" />
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] leading-relaxed">
                     End of Case Study Report v1.02. Verified via Engineering Unit AKJ.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
