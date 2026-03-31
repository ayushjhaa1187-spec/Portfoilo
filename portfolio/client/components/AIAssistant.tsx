'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, Terminal, Cpu, Bot } from 'lucide-react';
import { getAIResponse } from '@/data/ai-knowledge';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Greeting. [IDENTIFYING_VISITOR]... System Ready. Ask me about Ayush\'s AI projects, IIT Madras status, or his engineering stack.' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated RAG Response
    setTimeout(() => {
      const response = getAIResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            className="mb-6 w-[380px] h-[550px] flex flex-col glass-panel rounded-3xl shadow-[0_0_50px_rgba(251,191,36,0.1)] border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-[#121212] border-b border-white/5 flex justify-between items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-black font-black rotate-3 group-hover:rotate-0 transition-transform shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                  AKJ
                </div>
                <div>
                   <h4 className="text-sm font-black tracking-widest text-white uppercase flex items-center gap-2">
                       Aura_v2.0.4 <Sparkles size={12} className="text-amber-400 animate-pulse" />
                   </h4>
                   <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Autonomous Agent Cluster</p>
                </div>
              </div>
              <button 
                onClick={toggleChat} 
                className="hover:bg-white/10 p-2 rounded-xl transition-all hover:rotate-90"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-6 bg-transparent scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed border ${
                    msg.role === 'user' 
                      ? 'bg-amber-400 text-black font-bold rounded-tr-none border-amber-400 shadow-lg shadow-amber-400/5' 
                      : 'bg-white/5 text-slate-200 rounded-tl-none border-white/5'
                  }`}>
                    {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-2 opacity-40">
                           <Bot size={12} />
                           <span className="text-[9px] font-black tracking-widest uppercase">Response Node</span>
                        </div>
                    )}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-0" />
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-150" />
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce delay-300" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Overlay */}
            <div className="p-6 pt-2">
               <div className="relative group">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about AI, IITM, or Availability..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm font-light text-white focus:outline-none focus:border-amber-400 transition-all placeholder:text-slate-600 focus:bg-[#121212]"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-amber-400 text-black rounded-xl hover:scale-105 transition-transform"
                  >
                    <Send size={18} />
                  </button>
               </div>
               <div className="mt-4 flex justify-center items-center gap-4">
                  <div className="flex items-center gap-1 opacity-20">
                     <Terminal size={10} className="text-slate-500" />
                     <span className="text-[8px] font-black tracking-[0.3em] text-white">SYSTEM ONLINE</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                  <div className="flex items-center gap-1 opacity-20">
                     <Cpu size={10} className="text-slate-500" />
                     <span className="text-[8px] font-black tracking-[0.3em] text-white">LATENCY: 42MS</span>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="w-16 h-16 bg-amber-400 text-black rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-amber-400/50 transition-shadow relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageSquare size={28} className={isOpen ? 'hidden' : 'block'} />
        <X size={28} className={isOpen ? 'block' : 'hidden'} />
        
        {/* Status indicator */}
        <span className="absolute top-3 right-3 w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_bg-emerald-500]" />
        
        {/* Tooltip */}
        {!isOpen && (
            <span className="absolute right-full mr-6 bg-amber-400 text-black px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-xl border border-white/20 pointer-events-none">
              Inquire Intelligence_v2
            </span>
        )}
      </motion.button>
    </div>
  );
};

export default AIAssistant;
