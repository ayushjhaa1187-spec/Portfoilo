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
    const query = input.trim();
    if (!query) return;
    
    const userMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulated RAG Response
    setTimeout(() => {
      const response = getAIResponse(query);
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
            className="mb-6 w-[420px] h-[650px] flex flex-col glass-panel rounded-[2rem] shadow-[0_0_80px_rgba(251,191,36,0.15)] border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-[#121212] border-b border-white/5 flex justify-between items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-black font-black rotate-6 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  AKJ
                </div>
                <div>
                   <h4 className="text-base font-black tracking-[0.2em] text-white uppercase flex items-center gap-2">
                       AURA_v2.1 <Sparkles size={14} className="text-amber-400 animate-pulse" />
                   </h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Neural Link Enabled</p>
                </div>
              </div>
              <button 
                onClick={toggleChat} 
                className="hover:bg-white/10 p-3 rounded-2xl transition-all hover:rotate-90 hover:text-amber-400"
              >
                <X size={24} className="text-slate-500" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-8 space-y-8 bg-transparent scrollbar-hide"
            >
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-3xl text-[15px] leading-relaxed border ${
                    msg.role === 'user' 
                      ? 'bg-amber-400 text-black font-bold rounded-tr-none border-amber-400 shadow-xl' 
                      : 'bg-white/[0.03] text-slate-200 rounded-tl-none border-white/10 backdrop-blur-md'
                  }`}>
                    {msg.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-3 opacity-50">
                           <Bot size={14} />
                           <span className="text-[10px] font-black tracking-widest uppercase">Response Engine</span>
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
                  <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/5 flex gap-2 items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-0" />
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-150" />
                    <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-300" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Overlay - EXPANDED */}
            <div className="p-8 pt-4 bg-[#0c0c0c] border-t border-white/5">
               <div className="relative group">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about Projects, Experience, or Availability..."
                    className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-5 pl-8 pr-16 text-base font-light text-white focus:outline-none focus:border-amber-400 transition-all placeholder:text-slate-600 focus:bg-[#121212] tracking-wide"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-amber-400 text-black rounded-xl hover:scale-110 active:scale-95 transition-transform shadow-lg shadow-amber-400/20"
                  >
                    <Send size={22} />
                  </button>
               </div>
               <div className="mt-6 flex justify-center items-center gap-6">
                  <div className="flex items-center gap-2 opacity-30">
                     <Terminal size={12} className="text-amber-400" />
                     <span className="text-[9px] font-black tracking-[0.4em] text-white">SECURE_LINK: ENCRYPTED</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="flex items-center gap-2 opacity-30">
                     <Cpu size={12} className="text-amber-400" />
                     <span className="text-[9px] font-black tracking-[0.4em] text-white">LATENCY: 12MS</span>
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
