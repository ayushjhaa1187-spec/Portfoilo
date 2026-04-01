'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Brain, Code, Target, Zap, Rocket, Terminal, Database, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-48">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-amber-400 font-black tracking-[0.5em] uppercase mb-6 flex items-center gap-4">
             <Terminal size={14} /> SYSTEM_PROFILE_v2.0
          </p>
          <h1 className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter uppercase leading-none">
            ENGINEERING <span className="text-amber-400 font-serif italic lowercase">the epoch</span>
          </h1>
          <p className="text-2xl text-slate-400 font-light leading-relaxed mb-12 tracking-wide">
             I am Ayush Kumar Jha, an AI Engineer and Full-Stack Architect currently pursuing a BS in Data Science at IIT Madras.
          </p>
          <div className="flex flex-wrap gap-4">
             <Link href="/contact">
                <Button className="px-10 py-5">Initiate Protocol</Button>
             </Link>
             <Link href="/projects">
                <Button variant="secondary" className="px-10 py-5">View Laboratory</Button>
             </Link>
          </div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative"
        >
           <div className="aspect-[4/5] glass-panel rounded-[3rem] overflow-hidden p-4 border border-white/10 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
              <div className="h-full w-full bg-slate-900 rounded-[2.5rem] flex items-center justify-center p-12 text-center">
                 <div>
                    <Brain size={120} className="mx-auto text-amber-400 mb-10 animate-pulse" />
                    <p className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">Ayush Kumar Jha</p>
                    <p className="text-[10px] font-black text-amber-400 uppercase tracking-[0.5em] mb-12">AI_ENGINEER_UNIT_01</p>
                    <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                       <div className="text-center">
                          <p className="text-2xl font-black text-white">46+</p>
                          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Repositories</p>
                       </div>
                       <div className="text-center">
                          <p className="text-2xl font-black text-white">92%</p>
                          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Accuracy_CV</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      <div className="mb-40 grid md:grid-cols-3 gap-8">
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 hover:bg-white/[0.04] transition-all">
            <Zap className="mb-8 text-amber-400" size={40} />
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Velocity_Agentic</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
               I build autonomous agent systems that reason, learn, and execute high-frequency workflows with sub-ms overhead.
            </p>
         </motion.div>
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 hover:bg-white/[0.04] transition-all border-amber-400/20">
            <Code className="mb-8 text-amber-400" size={40} />
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Architecture_Full</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
               Engineering high-integrity stacks from Redis clusters to Next.js interfaces, ensuring scalability and aesthetic excellence.
            </p>
         </motion.div>
         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-12 hover:bg-white/[0.04] transition-all">
            <Database className="mb-8 text-amber-400" size={40} />
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Insights_Data</h3>
            <p className="text-slate-500 text-sm font-light leading-relaxed">
               Trained at IIT Madras in Data Science, I bridge raw datasets and meaningful business intelligence using state-of-the-art ML models.
            </p>
         </motion.div>
      </div>

      {/* Skills Map Section — Phase 3.5 */}
      <div id="skills" className="mb-40">
        <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           whileInView={{ opacity: 1, y: 0 }} 
           viewport={{ once: true }}
           className="text-center mb-24"
        >
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 underline decoration-amber-400/20 underline-offset-12">SKILLS_MAP_v1.0</h2>
           <p className="text-slate-500 uppercase tracking-[0.4em] text-xs font-black">Multi-Sector Engineering Expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { 
              cat: 'Languages', 
              skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'], 
              icon: <Terminal size={24} />,
              color: 'text-amber-400' 
            },
            { 
              cat: 'Frameworks', 
              skills: ['React', 'Next.js 15', 'FastAPI', 'Node.js', 'Express', 'Tailwind'], 
              icon: <Rocket size={24} />,
              color: 'text-blue-400' 
            },
            { 
              cat: 'AI & Data', 
              skills: ['LangChain', 'LangGraph', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn'], 
              icon: <Brain size={24} />,
              color: 'text-emerald-400' 
            },
            { 
              cat: 'Infrastructure', 
              skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Redis', 'Vercel', 'AWS'], 
              icon: <Database size={24} />,
              color: 'text-orange-400' 
            },
            { 
              cat: 'Professional', 
              skills: ['Git/GitHub', 'SDLC', 'Product Sync', 'Agile', 'Figma', 'Postman'], 
              icon: <Users size={24} />,
              color: 'text-purple-400' 
            },
            { 
              cat: 'Philosophy', 
              skills: ['Autonomous Agents', 'Self-Repairing Systems', 'High-Fidelity UX'], 
              icon: <Target size={24} />,
              color: 'text-rose-400' 
            }
          ].map((sector, i) => (
            <motion.div 
              key={sector.cat}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 group hover:border-amber-400/30 transition-all border-white/5 h-full flex flex-col"
            >
               <div className={`mb-8 ${sector.color} flex items-center gap-4`}>
                  {sector.icon}
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{sector.cat}</h3>
               </div>
               <div className="flex flex-wrap gap-2 mt-auto">
                  {sector.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-black tracking-widest uppercase text-slate-500 hover:text-white hover:bg-amber-400/20 transition-all border border-white/5"
                    >
                       {skill}
                    </span>
                  ))}
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="p-20 glass-panel rounded-[4rem] text-center relative overflow-hidden border border-white/10">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-400/5 to-transparent pointer-events-none" />
         <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-10 relative">MISSION_STATEMENT</h2>
         <p className="text-xl md:text-3xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed italic relative">
            "To engineer the digital autonomous future by merging high-fidelity user experiences with resilient, reasoning-based AI infrastructure."
         </p>
         <div className="mt-16 flex justify-center gap-12 relative opacity-20">
            <Rocket size={32} />
            <Target size={32} />
            <Users size={32} />
         </div>
      </div>
    </div>
  );
};

export default AboutPage;
