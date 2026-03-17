"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, FileText, Calendar, Github, Mail, User, Briefcase, Zap, X, Terminal, ArrowUpRight } from "lucide-react";
import { projects, recruiterInfo, personalInfo } from "../data/portfolio";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const togglePalette = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        togglePalette();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [togglePalette]);

  const actions = [
    { id: "resume", title: "Download Resume", icon: FileText, shortcut: "D", action: () => window.open(recruiterInfo.resumeUrl, "_blank"), group: "Quick Actions" },
    { id: "meeting", title: "Book a Meeting", icon: Calendar, shortcut: "M", action: () => window.open(recruiterInfo.calendly, "_blank"), group: "Quick Actions" },
    { id: "github", title: "View GitHub", icon: Github, shortcut: "G", action: () => window.open(personalInfo.github, "_blank"), group: "Quick Actions" },
    { id: "home", title: "Go to Home", icon: User, action: () => scrollToSection("home"), group: "Navigation" },
    { id: "projects", title: "Browse Projects", icon: Briefcase, action: () => scrollToSection("projects"), group: "Navigation" },
    { id: "stats", title: "Developer Dashboard", icon: Zap, action: () => scrollToSection("stats"), group: "Navigation" },
  ];

  const filteredActions = actions.filter(a => 
    a.title.toLowerCase().includes(search.toLowerCase()) || 
    a.group.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 3);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        onClick={togglePalette}
        className="fixed bottom-10 right-10 z-[80] w-14 h-14 bg-[#111113] border border-[#1E1E24] rounded-full flex items-center justify-center text-[#555560] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all shadow-2xl group"
      >
        <Command size={20} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute right-full mr-4 bg-[#111113] border border-[#1E1E24] px-3 py-1.5 rounded-lg text-[9px] font-mono tracking-widest text-[#555560] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          PRESS CMD + K
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 lg:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#060608]/90 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-[#111113] border border-[#1E1E24] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
            >
              <div className="p-6 border-b border-[#1E1E24] flex items-center gap-4">
                <Search size={20} className="text-[#555560]" />
                <input 
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  className="bg-transparent border-none outline-none w-full text-[#F1F0FB] font-body text-lg placeholder:text-[#555560]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[#555560] hover:text-[#F1F0FB] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
                {search && filteredActions.length === 0 && filteredProjects.length === 0 && (
                  <div className="p-10 text-center">
                    <Terminal size={40} className="mx-auto text-[#1E1E24] mb-4" />
                    <p className="text-[#555560] font-mono text-xs uppercase tracking-widest">No matching sequences found</p>
                  </div>
                )}

                {filteredActions.length > 0 && (
                  <div className="mb-4">
                    <div className="px-4 py-2 text-[9px] font-mono text-[#555560] uppercase tracking-[4px]">Commands</div>
                    {filteredActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={action.action}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#1E1E24] transition-colors group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-[#555560] group-hover:text-[#D4AF37] transition-colors">
                            <action.icon size={18} />
                          </div>
                          <div>
                            <span className="block text-sm text-[#F1F0FB] group-hover:text-white transition-colors">{action.title}</span>
                            <span className="block text-[10px] text-[#555560]">{action.group}</span>
                          </div>
                        </div>
                        {action.shortcut && (
                          <div className="bg-[#0A0A0B] px-2 py-1 rounded text-[9px] font-mono text-[#555560]">{action.shortcut}</div>
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {filteredProjects.length > 0 && (
                  <div>
                    <div className="px-4 py-2 text-[9px] font-mono text-[#555560] uppercase tracking-[4px]">Projects</div>
                    {filteredProjects.map((project) => (
                      <button
                        key={project.slug}
                        onClick={() => {
                          scrollToSection("projects");
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#1E1E24] transition-colors group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-[#555560] group-hover:text-[#06B6D4] transition-colors">
                            <Briefcase size={18} />
                          </div>
                          <div>
                            <span className="block text-sm text-[#F1F0FB] group-hover:text-white transition-colors">{project.title}</span>
                            <span className="block text-[10px] text-[#555560] uppercase tracking-widest text-[9px]">{project.category}</span>
                          </div>
                        </div>
                        <ArrowUpRight size={14} className="text-[#1E1E24] group-hover:text-[#D4AF37] transition-colors" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-[#1E1E24] bg-[#0A0A0B]/50 flex justify-between items-center bg-gray-600">
                <div className="flex gap-4">
                   <div className="flex items-center gap-2">
                     <span className="bg-[#1E1E24] px-2 py-0.5 rounded text-[9px] font-mono text-[#555560]">↑↓</span>
                     <span className="text-[9px] font-mono text-[#555560] uppercase tracking-widest">Navigate</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="bg-[#1E1E24] px-2 py-0.5 rounded text-[9px] font-mono text-[#555560]">ENTER</span>
                     <span className="text-[9px] font-mono text-[#555560] uppercase tracking-widest">Select</span>
                   </div>
                </div>
                <div className="text-[9px] font-mono text-[#D4AF37]/50 uppercase tracking-[4px]">ANTIGRAVITY OS V2.0</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
