"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X, Layers, Target, Zap, ChevronRight } from "lucide-react";
import SectionReveal from "../SectionReveal";
import { projects, Project } from "../../data/portfolio";
import { fadeUp, staggerContainer, hoverScale } from "../../lib/animations";

export default function ProjectsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedProject = projects.find(p => p.slug === selectedSlug);

  return (
    <section id="projects" className="bg-[#0A0A0B] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionReveal>
          <div className="mb-12 md:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-16">
            <div>
              <span className="section-label text-[#D4AF37] font-mono text-[10px] tracking-[8px] uppercase block mb-4 px-1 border-l-2 border-[#D4AF37]">
                WORK ARCHIVE
              </span>
              <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] text-[#F1F0FB] leading-[0.8] tracking-tighter mb-4">
                IMPACTFUL<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F1F0FB]">SOLUTIONS</span>
              </h2>
            </div>
            <p className="max-w-md text-[#F1F0FB]/50 font-light text-lg leading-relaxed mb-4">
              A curated selection of autonomous systems, data engines, and product experiences engineered to solve real-world bottlenecks.
            </p>
          </div>
        </SectionReveal>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              index={i} 
              onClick={() => setSelectedSlug(project.slug)}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 flex justify-center"
        >
           <a 
            href="https://github.com/ayushjhaa1187-spec" 
            target="_blank" 
            className="group relative flex items-center gap-6 bg-transparent border border-[#1E1E24] px-12 py-6 font-mono text-[10px] tracking-[4px] text-[#F1F0FB] hover:border-[#D4AF37]/50 transition-all duration-500 rounded-full"
           >
            <span className="relative z-10">EXPLORE FULL REPOSITORY</span>
            <ArrowUpRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-[#111113] transition-all duration-300 rounded-full" />
           </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedSlug && selectedProject && (
          <Modal project={selectedProject} onClose={() => setSelectedSlug(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (isMobile || !cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={fadeUp}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group bg-[#111113] border border-[#1E1E24] p-8 lg:p-10 hover:border-[#D4AF37]/30 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full rounded-2xl relative overflow-hidden shadow-xl hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.1)] will-change-transform"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 pointer-events-none">
        <div className="flex justify-between items-start mb-10">
           <div className="flex flex-col gap-1">
             <span className="font-mono text-[#D4AF37] text-[9px] tracking-[4px] uppercase">{project.category}</span>
             <div className="h-0.5 w-0 group-hover:w-full bg-[#D4AF37]/30 transition-all duration-700" />
           </div>
           <span className="font-display text-2xl text-[#1E1E24] group-hover:text-[#D4AF37]/10 transition-colors uppercase">{project.icon}</span>
        </div>
        
        <h3 className="font-display text-2xl lg:text-3xl text-[#F1F0FB] mb-6 group-hover:text-white transition-colors tracking-tight leading-loose">
          {project.title}
        </h3>
        
        <p className="font-body text-[#F1F0FB]/40 text-sm mb-10 leading-relaxed line-clamp-3 group-hover:text-[#F1F0FB]/60 transition-colors italic">
          "{project.shortDescription}"
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.slice(0, 3).map((t, idx) => (
            <span key={idx} className="bg-[#0A0A0B] text-[#F1F0FB]/40 group-hover:text-[#06B6D4] font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 border border-[#1E1E24] group-hover:border-[#06B6D4]/30 transition-all">
              {t}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="text-[#555560] font-mono text-[9px] uppercase tracking-widest py-1.5 px-2">+{project.techStack.length - 3} More</span>
          )}
        </div>
      </div>

      <div className="relative z-10 pt-8 border-t border-[#1E1E24] flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3">
           <Zap size={12} className="text-[#D4AF37] animate-pulse" />
           <span className="font-mono text-[9px] text-[#555560] group-hover:text-[#F1F0FB]/60 transition-colors tracking-widest uppercase">
             {project.metrics?.impact || "In Progress"}
           </span>
        </div>
        <div className="flex items-center gap-2 group/btn">
          <span className="font-mono text-[9px] tracking-widest text-[#555560] group-hover:text-[#D4AF37] transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">VIEW STORY</span>
          <div className="p-2 rounded-full bg-[#1E1E24] group-hover:bg-[#D4AF37] transition-all duration-300">
            <ChevronRight className="text-[#555560] group-hover:text-[#0A0A0B]" size={14} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10 bg-[#060608]/98 backdrop-blur-xl"
    >
      <motion.div 
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        className="w-full max-w-6xl bg-[#0A0A0B] border border-[#1E1E24] p-8 lg:p-16 relative overflow-y-auto max-h-[90vh] custom-scrollbar rounded-3xl"
      >
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 lg:top-12 lg:right-12 text-[#555560] hover:text-[#D4AF37] transition-all hover:rotate-90 duration-300"
        >
          <X size={32} />
        </button>

        <div className="mb-12 lg:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-1 rounded-full font-mono text-[9px] tracking-[4px] uppercase border border-[#D4AF37]/20">
              {project.category}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#1E1E24] to-transparent" />
          </div>
          <h2 className="font-display text-5xl lg:text-7xl text-[#F1F0FB] leading-[0.9] tracking-tighter">
            {project.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24">
          <div className="space-y-16">
            <div className="grid grid-cols-1 gap-12">
               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#111113] border border-[#1E1E24] flex items-center justify-center text-[#D4AF37] font-mono text-xs">01</div>
                    <div className="w-px h-full bg-gradient-to-b from-[#1E1E24] to-transparent mt-4" />
                  </div>
                  <div className="pb-8">
                    <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-4 flex items-center gap-2">
                       <Target size={14} className="text-[#D4AF37]" /> THE CHALLENGE
                    </h4>
                    <p className="text-xl lg:text-2xl text-[#F1F0FB]/80 leading-relaxed font-light italic">
                      {project.problem}
                    </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#111113] border border-[#1E1E24] flex items-center justify-center text-[#06B6D4] font-mono text-xs">02</div>
                    <div className="w-px h-full bg-gradient-to-b from-[#1E1E24] to-transparent mt-4" />
                  </div>
                  <div className="pb-8">
                    <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-4 flex items-center gap-2">
                       <Zap size={14} className="text-[#06B6D4]" /> THE ARCHITECTURE
                    </h4>
                    <p className="text-xl lg:text-2xl text-[#F1F0FB]/80 leading-relaxed font-light">
                      {project.action}
                    </p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#111113] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-mono text-xs shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-pulse">03</div>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-4 flex items-center gap-2">
                       <Layers size={14} className="text-[#D4AF37]" /> THE OUTCOME
                    </h4>
                    <p className="text-xl lg:text-2xl text-[#F1F0FB] leading-relaxed font-medium">
                      {project.result}
                    </p>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-12">
             <div className="bg-[#111113] border border-[#1E1E24] p-10 rounded-3xl">
                <h4 className="font-mono text-[10px] text-[#555560] uppercase tracking-[4px] mb-8 border-b border-[#1E1E24] pb-4">CORE TECHNOLOGY</h4>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t, idx) => (
                      <span key={idx} className="bg-[#0A0A0B] text-[#06B6D4] font-mono text-[10px] uppercase tracking-widest px-4 py-2 border border-[#1E1E24] rounded-lg">
                        {t}
                      </span>
                    ))}
                </div>
             </div>

             <div className="grid grid-cols-1 gap-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  className="group relative flex items-center justify-center gap-4 bg-[#D4AF37] text-[#0A0A0B] p-6 lg:p-8 rounded-2xl font-mono text-xs font-bold tracking-[4px] transition-all overflow-hidden"
                >
                  <Github size={20} className="relative z-10" /> 
                  <span className="relative z-10">RECON SOURCE CODE</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
             </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
