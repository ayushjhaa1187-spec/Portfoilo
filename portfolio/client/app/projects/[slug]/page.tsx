'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ArrowLeft, Github, ExternalLink, Target, Cpu, Code, BarChart, AlertTriangle, Lightbulb } from 'lucide-react';
import Link from 'next/link';

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

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
                        {project.featured && <span className="text-amber-400 text-[10px] font-black tracking-widest uppercase">★ Featured Experiment</span>}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl leading-relaxed">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-4 mt-12">
                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-black text-xs tracking-widest uppercase flex items-center gap-3 hover:border-amber-400 transition-colors">
                            <Github size={18} /> ACCESS SOURCE_CODE
                         </a>
                         {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-amber-400 text-black rounded-lg font-black text-xs tracking-widest uppercase flex items-center gap-3 hover:scale-105 transition-transform">
                                <ExternalLink size={18} /> LIVE DEPLOYMENT ↗
                            </a>
                         )}
                    </div>
                </motion.div>

                {/* Content Matrix */}
                <div className="space-y-32">
                    
                    {/* Problem & Solution */}
                    <section className="grid md:grid-cols-2 gap-16">
                        <motion.div
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-amber-400 mb-6 underline decoration-amber-400/20 underline-offset-8">
                               <Target size={20} />
                               <h2 className="text-xl font-black tracking-widest uppercase">THE PROBLEM_BOTTLENECK</h2>
                            </div>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">
                               {project.problem || "This project is currently undergoing full architectural documentation. Our research focuses on optimizing user interaction with complex data systems."}
                            </p>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-emerald-400 mb-6 underline decoration-emerald-400/20 underline-offset-8">
                               <Lightbulb size={20} />
                               <h2 className="text-xl font-black tracking-widest uppercase">THE SOLUTION_ENGINE</h2>
                            </div>
                            <p className="text-slate-400 text-lg font-light leading-relaxed">
                               {project.solution || "We implemented a modular approach, leveraging Next.js and advanced AI models to reduce latency and improve qualitative metrics for stakeholders."}
                            </p>
                        </motion.div>
                    </section>

                    {/* Architecture & Tech */}
                    <section>
                        <div className="flex items-center gap-3 text-blue-400 mb-12 underline decoration-blue-400/20 underline-offset-8">
                           <Cpu size={20} />
                           <h2 className="text-xl font-black tracking-widest uppercase">SYSTEM ARCHITECTURE_v1.0</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                           {(project.architecture || ['UI Core Layer', 'Data Integration Node', 'Compute Cluster']).map((step, i) => (
                             <div key={i} className="glass-card p-8 relative">
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#121212] border border-white/5 rounded-full flex items-center justify-center font-black text-amber-400 text-xs shadow-xl">{i+1}</div>
                                <h3 className="font-bold text-white mb-4 text-sm tracking-widest uppercase">{step}</h3>
                                <div className="h-0.5 w-12 bg-amber-400/30 rounded-full" />
                             </div>
                           ))}
                        </div>
                        <div className="mt-16 flex flex-wrap gap-2">
                           {project.techStack.map(tech => (
                             <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest">{tech}</span>
                           ))}
                        </div>
                    </section>

                    {/* Technical Challenges */}
                    <section className="bg-white/5 border border-white/5 rounded-3xl p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-transform hover:scale-110">
                            <Code size={200} />
                        </div>
                        <div className="flex items-center gap-3 text-orange-400 mb-12 underline decoration-orange-400/20 underline-offset-8">
                           <AlertTriangle size={20} />
                           <h2 className="text-xl font-black tracking-widest uppercase">CONSTRAINTS & CHALLENGES</h2>
                        </div>
                        <div className="space-y-6 max-w-3xl">
                           {(project.challenges || ['Cross-origin resource sharing complexities', 'High-latency database queries', 'Real-time state synchronization across distributed clients']).map((c, i) => (
                             <div key={i} className="flex gap-4 items-start">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.5)] flex-shrink-0" />
                                <p className="text-slate-400 font-light text-lg">{c}</p>
                             </div>
                           ))}
                        </div>
                    </section>

                    {/* Results & Lessons */}
                    <section className="pb-20">
                        <div className="flex items-center gap-3 text-emerald-400 mb-12 underline decoration-emerald-400/20 underline-offset-8">
                           <BarChart size={20} />
                           <h2 className="text-xl font-black tracking-widest uppercase">VERIFIED RESULTS</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-16">
                           <div>
                              <div className="grid grid-cols-2 gap-8 mb-12">
                                 {Object.entries(project.metrics).map(([key, val]) => (
                                   <div key={key}>
                                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em] mb-2">{key}</p>
                                      <p className="text-3xl font-black text-white tracking-widest">{val}</p>
                                   </div>
                                 ))}
                              </div>
                              <p className="text-slate-400 font-light leading-relaxed italic border-l-2 border-amber-400 pl-6 py-2">
                                 {project.learning || "The core takeaway from this build was the necessity of rigorous architectural validation before committing to a specific technology stack."}
                              </p>
                           </div>
                           <div className="glass-card aspect-[4/3] flex items-center justify-center relative group">
                               <div className="text-[8px] font-mono text-amber-400/10 leading-none select-none tracking-tighter transition-all group-hover:scale-105">
                                  {`
01011001 01001111 01010101 01010010 00100000 
01000110 01010101 01010100 01010101 01010010 01000101 
01001001 01010011 00100000 01001000 01000101 01010010 01000101
(system.status == 'STABLE') && (user.impact == 'MAX')
                                  `}
                               </div>
                               <div className="absolute z-10 flex flex-col items-center">
                                  <div className="w-16 h-1 bg-amber-400 rounded-full mb-4 animate-pulse shadow-[0_0_12px_rgba(251,191,36,0.5)]" />
                                  <span className="text-[10px] font-black tracking-[0.5em] text-slate-300">SYSTEM_OPTIMIZED</span>
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
