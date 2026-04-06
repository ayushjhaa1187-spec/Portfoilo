'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, notFound } from 'next/navigation';
import { projects, caseStudies } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, Target, Cpu, Code, BarChart, AlertTriangle, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    const caseStudy = caseStudies.find(cs => cs.projectSlug === slug);

    if (!project) return notFound();

    return (
        <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 text-white">
            <div className="max-w-5xl mx-auto px-6">
                
                {/* Back Button */}
                <Link href="/projects" className="flex items-center gap-2 text-slate-500 hover:text-amber-400 mb-12 transition-colors group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-black tracking-widest uppercase">RETURN TO LAB_INDEX</span>
                </Link>

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-amber-400 text-black text-[10px] font-black tracking-widest uppercase rounded">
                            {project.category}
                        </span>
                        {project.featured && <span className="text-amber-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2">★ <span className="hidden md:inline">Featured Experiment</span></span>}
                        {caseStudy && (
                            <Link href={`/case-studies/${project.slug}`} className="px-3 py-1 bg-white/10 text-white text-[10px] font-black tracking-widest uppercase rounded hover:bg-white/20 transition-colors">
                                Technical_Report_Available
                            </Link>
                        )}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-12">
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-black text-xs tracking-widest uppercase flex items-center gap-3 hover:border-amber-400 transition-all hover:scale-105">
                            <Github size={20} /> ACCESS_SOURCE
                         </a>
                         {project.liveUrl && project.liveUrl !== '#' && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-amber-400 text-black rounded-full font-black text-xs tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                                <ExternalLink size={20} /> LIVE_SYSTEM ↗
                            </a>
                         )}
                    </div>
                </motion.div>

                {/* Content Matrix */}
                <div className="space-y-32">
                    
                    {/* Problem & Solution */}
                    <section className="grid lg:grid-cols-2 gap-16">
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-amber-400 mb-8 border-b border-white/5 pb-4">
                               <Target size={24} />
                               <h2 className="text-2xl font-black tracking-tighter uppercase">THE_CHALLENGE</h2>
                            </div>
                            <p className="text-slate-400 text-xl font-light leading-relaxed">
                               {caseStudy?.problem || project.problem || "This project is currently undergoing full architectural documentation. Our research focuses on optimizing user interaction with complex data systems."}
                            </p>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-emerald-400 mb-8 border-b border-white/5 pb-4">
                               <Lightbulb size={24} />
                               <h2 className="text-2xl font-black tracking-tighter uppercase">THE_RESOLUTION</h2>
                            </div>
                            <p className="text-slate-400 text-xl font-light leading-relaxed">
                               {caseStudy?.solution || project.solution || "We implemented a modular approach, leveraging Next.js and advanced AI models to reduce latency and improve qualitative metrics for stakeholders."}
                            </p>
                        </motion.div>
                    </section>

                    {/* Architecture & Tech */}
                    <section>
                        <div className="flex items-center gap-3 text-blue-400 mb-12 border-b border-white/5 pb-4">
                           <Cpu size={24} />
                           <h2 className="text-2xl font-black tracking-tighter uppercase">SYSTEM ARCHITECTURE_v1.0</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                           {(caseStudy?.features || project.architecture || ['UI Core Layer', 'Data Integration Node', 'Compute Cluster']).map((step, i) => (
                             <div key={i} className="glass-panel p-10 relative border border-white/5 rounded-[2rem] hover:bg-white/[0.03] transition-colors">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center font-black text-amber-400 text-sm shadow-2xl">{i+1}</div>
                                <h3 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">{step}</h3>
                                <div className="h-0.5 w-12 bg-amber-400/30 rounded-full" />
                             </div>
                           ))}
                        </div>
                        <div className="mt-20 flex flex-wrap gap-3">
                           {project.techStack.map(tech => (
                             <span key={tech} className="px-6 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors">{tech}</span>
                           ))}
                        </div>
                    </section>

                    {/* Technical Challenges (If Case Study exists) */}
                    {caseStudy && (
                        <section className="bg-white/5 border border-white/5 rounded-3xl p-16 relative overflow-hidden backdrop-blur-xl">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none transition-transform hover:scale-110">
                                <Code size={300} />
                            </div>
                            <div className="flex items-center gap-3 text-orange-400 mb-12 border-b border-white/5 pb-4">
                               <AlertTriangle size={24} />
                               <h2 className="text-2xl font-black tracking-tighter uppercase">CRITICAL_CONSTRAINTS</h2>
                            </div>
                            <div className="space-y-8 max-w-3xl">
                               {caseStudy.results.map((c: string, i: number) => (
                                 <div key={i} className="flex gap-6 items-start group">
                                    <div className="mt-2.5 w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.8)] flex-shrink-0 group-hover:scale-150 transition-transform" />
                                    <p className="text-slate-300 font-light text-xl leading-relaxed italic">{c}</p>
                                 </div>
                               ))}
                            </div>
                        </section>
                    )}

                    {/* Results & Metrics */}
                    <section className="pb-40">
                        <div className="flex items-center gap-3 text-emerald-400 mb-12 border-b border-white/5 pb-4">
                           <BarChart size={24} />
                           <h2 className="text-2xl font-black tracking-tighter uppercase">VERIFIED_METRICS</h2>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-20">
                           <div className="space-y-16">
                              <div className="grid grid-cols-3 gap-12">
                                 {Object.entries(project.metrics).map(([key, val]) => (
                                   <div key={key}>
                                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-4">{key}</p>
                                      <p className="text-4xl font-black text-white tracking-tighter italic">{val}</p>
                                   </div>
                                 ))}
                              </div>
                              <p className="text-slate-400 text-xl font-light leading-relaxed italic border-l-2 border-amber-400/50 pl-10 py-4 max-w-xl">
                                 {project.learning?.[0] || "The core takeaway from this build was the necessity of rigorous architectural validation before committing to a specific high-latency technology stack."}
                              </p>
                           </div>
                           <div className="glass-card aspect-video flex items-center justify-center relative group border border-white/5 rounded-[4rem] bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
                                <div className="text-[10px] font-mono text-amber-400/20 leading-tight select-none tracking-widest transition-all duration-1000 group-hover:scale-110 opacity-40">
                                   {`
 [ ARCHIVE_RECORD_v46 ]
 ID: ${project.slug.toUpperCase()}
 STATUS: PRODUCTION_STABLE
 CORE: ${project.techStack[0].toUpperCase()}
 ${'='.repeat(30)}
 (system.log == 'SUCCESS')
 (user.impact == 'OPTIMIZED')
                                   `}
                                </div>
                                <div className="absolute z-10 flex flex-col items-center">
                                   <div className="w-20 h-1 bg-amber-400 rounded-full mb-6 animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.6)]" />
                                   <span className="text-xs font-black tracking-[0.8em] text-white/50 uppercase">SYSTEM_ARCHIVE_SECURED</span>
                                </div>
                           </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
