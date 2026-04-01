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
  const [lastTopic, setLastTopic] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (forcedQuery?: string) => {
    const query = (forcedQuery || input).trim();
    if (!query) return;
    
    // Simple topic tracking
    let currentTopic = lastTopic;
    const q = query.toLowerCase();
    if (q.includes('nexus') || q.includes('edu')) currentTopic = 'nexus';
    else if (q.includes('stock') || q.includes('finance')) currentTopic = 'stocksense';
    else if (q.includes('sentinel') || q.includes('auth')) currentTopic = 'sentinel';
    else if (q.includes('iit') || q.includes('madras') || q.includes('college')) currentTopic = 'iit';
    
    const userMsg = { role: 'user', content: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setLastTopic(currentTopic);

    // Simulated RAG Response
    setTimeout(() => {
      const response = getAIResponse(query, currentTopic || undefined);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[10000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: 'blur(10px)' }}
            className="mb-6 w-[420px] max-h-[700px] h-[80vh] flex flex-col glass-panel rounded-[2.5rem] shadow-[0_0_80px_rgba(251,191,36,0.15)] border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 bg-[#121212] border-b border-white/5 flex justify-between items-center relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center text-black font-black rotate-6 group-hover:rotate-0 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  AKJ
                </div>
                <div>
                   <h4 className="text-base font-black tracking-[0.2em] text-white uppercase flex items-center gap-2">
                       AURA_v2.4 <Sparkles size={14} className="text-amber-400 animate-pulse" />
                   </h4>
                   <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mt-1">Intelligence Link Stable</p>
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
              className="flex-grow overflow-y-auto p-8 space-y-8 bg-transparent scrollbar-hide pt-4"
            >
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] p-5 rounded-3xl text-[15px] leading-relaxed border ${
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

            {/* Input Overlay - EXPANDED & FIXED */}
            <div className="p-8 pb-10 bg-[#0c0c0c] border-t border-white/5 shrink-0">
               <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">
                  {['Nexus AI', 'StockSense', 'IIT Madras', 'Skills'].map(chip => (
                    <button 
                      key={chip}
                      onClick={() => handleSend(chip)}
                      className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-all whitespace-nowrap uppercase tracking-[0.2em]"
                    >
                      {chip}
                    </button>
                  ))}
               </div>

               <div className="relative group">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="ENTER_QUERY_NODE..."
                    className="w-full bg-white/[0.05] border border-white/10 rounded-[1.25rem] py-6 pl-8 pr-16 text-base font-bold text-amber-400 focus:outline-none focus:border-amber-400 transition-all placeholder:text-slate-600 focus:bg-[#121212] tracking-widest uppercase"
                  />
                  <button 
                    onClick={() => handleSend()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-amber-400 text-black rounded-2xl hover:scale-110 active:scale-95 transition-transform shadow-xl shadow-amber-400/30"
                  >
                    <Send size={22} />
                  </button>
               </div>
               
               <div className="mt-8 flex justify-center items-center gap-8 border-t border-white/5 pt-8 opacity-40">
                  <div className="flex items-center gap-2">
                     <Terminal size={14} className="text-amber-400" />
                     <span className="text-[10px] font-black tracking-[0.5em] text-white">SECURE_TUNNEL_ESTABLISHED</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="flex items-center gap-2">
                     <Cpu size={14} className="text-amber-400" />
                     <span className="text-[10px] font-black tracking-[0.5em] text-white">SYNC: 100%</span>
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
