'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I am Ayush's AI assistant. Ask me anything about his projects, skills, or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    
    // Add user message
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I am currently in "offline" mode as Ayush is upgrading my neural links. You can reach him directly at ayushjhaa1187@gmail.com for faster response!' 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-amber-400 text-black flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-black uppercase tracking-tighter text-sm">Ayush&apos;s Core_Intelligence</span>
              </div>
              <button
                onClick={toggleChat}
                className="hover:bg-black/10 p-1 rounded-full transition-colors"
                aria-label="Close AI Assistant"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-amber-400 text-black font-medium rounded-tr-none' 
                      : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-tl-none font-mono whitespace-pre-wrap'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-tl-none flex items-center gap-1.5">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }} className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                    <span className="sr-only">AI is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 dark:border-white/5 flex gap-2 bg-white dark:bg-slate-950">
              <label htmlFor="ai-chat-input" className="sr-only">Type a message</label>
              <input 
                id="ai-chat-input"
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my RAG engines or IIT life..."
                disabled={isLoading}
                aria-disabled={isLoading}
                className="flex-grow bg-slate-100 dark:bg-white/5 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-amber-400 outline-none font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="bg-amber-400 text-black p-2.5 rounded-full hover:bg-white transition-colors shadow-lg shadow-amber-400/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-amber-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
        aria-expanded={isOpen}
        aria-controls="ai-assistant-panel"
        className="w-16 h-16 bg-amber-400 text-black rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-400/40 transition-all border-4 border-black group focus-visible:ring-4 focus-visible:ring-amber-400"
      >
        <MessageSquare size={26} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-black rounded-full animate-pulse" />
        <span className="absolute right-full mr-4 bg-amber-400 text-black px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none">
          SYSTEM_ACCESS
        </span>
      </motion.button>
    </div>
  );
};

export default AIAssistant;
