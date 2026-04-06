'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { getAIResponse } from '@/data/ai-knowledge';

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Ayush\'s AI. Ask me about his projects, experience, or how to collaborate.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const suggestions = [
    "What are your best AI projects?",
    "Open to collaborations?",
    "Tell me about your IIT journey",
    "What tech stack do you use?"
  ];

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    setMessages(prev => [...prev, { role: 'user', content: msg }]);
    setInput('');
    // Portfolio knowledge response logic
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: getAIResponse(msg)
      }]);
    }, 600);
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9998] w-[380px] max-h-[560px] 
                        glass-card border border-amber-400/20 rounded-2xl 
                        shadow-2xl shadow-amber-400/10 flex flex-col overflow-hidden bg-[#0d0d0d]">
          {/* Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between bg-amber-400/5">
            <div>
              <p className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">SYSTEM_ONLINE</p>
              <h4 className="text-white font-black tracking-tight">Ayush's AI Assistant</h4>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed
                  ${m.role === 'user' 
                    ? 'bg-amber-400 text-black font-bold' 
                    : 'bg-white/5 border border-white/10 text-slate-300'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>
          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {suggestions.map(s => (
                <button key={s} onClick={() => handleSend(s)}
                  className="text-[9px] font-black tracking-widest uppercase px-3 py-1.5 
                             bg-white/5 border border-white/10 rounded-full text-slate-400 
                             hover:border-amber-400/50 hover:text-amber-400 transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}
          {/* Input */}
          <div className="p-4 border-t border-white/5 flex gap-3">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 
                         text-sm text-white placeholder-slate-600 
                         focus:outline-none focus:border-amber-400/50 transition-colors"
            />
            <button onClick={() => handleSend()}
              className="p-2.5 bg-amber-400 text-black rounded-lg hover:bg-white transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button onClick={() => setIsOpen(prev => !prev)}
          className="w-16 h-16 bg-amber-400 text-black rounded-full flex items-center 
                     justify-center shadow-2xl hover:shadow-amber-400/40 
                     transition-all border-4 border-black group">
          {isOpen ? <X size={24} /> : <MessageSquare size={26} />}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-black rounded-full animate-pulse" />
        </button>
      </div>
    </>
  );
};

export default AIAssistant;
