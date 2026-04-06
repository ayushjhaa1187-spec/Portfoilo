'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { certifications } from '@/data/certifications';

type ChatState = 'closed' | 'open' | 'thinking' | 'streaming' | 'error';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

const SYSTEM_PROMPT = `
You are AKJ-AI, portfolio assistant for Ayush Kumar Jha.

IDENTITY:
- BS Data Science, IIT Madras (2025–2029), 2nd semester
- 46+ GitHub repos, 3,494 LinkedIn followers
- Competed at 8 IITs in 4 months
- Jury Member: AI-volution, GES 2026 IIT Kharagpur
- Finalist: Enable Ideathon, E-Cell IIT Madras × Shaastra 2026
- Certifications: ${certifications.map((c) => c.title).join(', ')}

SKILLS: Multi-agent AI (Claude/Gemini/LangChain), React/Next.js, FastAPI, PostgreSQL, Supabase

PHILOSOPHY: "I compete to watch my ideas die — so only the unbreakable ones survive."

OPEN TO: Hackathon partnerships, AI/ML research, B2B SaaS co-founding
CONTACT: ayushjhaa1187@gmail.com

Rules: Answer in <80 words unless asked for detail. Be direct. Never say "I don't know" — redirect to contact.
`;

const QUICK_QUESTIONS = [
  'What are your best projects?',
  'Open to collaborations?',
  "What's your tech stack?",
  'Tell me your IIT journey',
  'How can we work together?'
];

const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const initialAssistantMessage: Message = {
  id: createId(),
  role: 'assistant',
  content: "Hi! I'm AKJ-AI. Ask me about projects, IIT journey, collaborations, or certifications.",
  timestamp: Date.now()
};

export const AIAssistant = () => {
  const [chatState, setChatState] = useState<ChatState>('closed');
  const [messages, setMessages] = useState<Message[]>([initialAssistantMessage]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isOpen = chatState !== 'closed';
  const isThinking = chatState === 'thinking' || chatState === 'streaming';

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatState]);

  useEffect(() => {
    const openHandler = () => setChatState((prev) => (prev === 'closed' ? 'open' : prev));
    document.addEventListener('open-ai-assistant', openHandler);
    return () => document.removeEventListener('open-ai-assistant', openHandler);
  }, []);

  const payloadContext = useMemo(
    () => ({
      system: SYSTEM_PROMPT,
      messages: messages.slice(-8).map((m) => ({ role: m.role, content: m.content }))
    }),
    [messages]
  );

  const sendMessage = async (forcedText?: string) => {
    const content = (forcedText ?? input).trim();
    if (!content || isThinking) return;

    const userMessage: Message = {
      id: createId(),
      role: 'user',
      content,
      timestamp: Date.now()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setChatState('thinking');

    try {
      const key = process.env.NEXT_PUBLIC_GEMINI_KEY;
      if (!key) {
        throw new Error('Missing NEXT_PUBLIC_GEMINI_KEY');
      }

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `${payloadContext.system}\n\nConversation:\n${payloadContext.messages
                      .map((m) => `${m.role}: ${m.content}`)
                      .join('\n')}\nuser: ${content}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 220
            }
          })
        }
      );

      if (!res.ok) {
        throw new Error(`Gemini API failed: ${res.status}`);
      }

      const data = await res.json();
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        'Thanks for the question. Reach Ayush directly at ayushjhaa1187@gmail.com for quick collaboration details.';

      setChatState('streaming');
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: 'assistant',
          content: aiText.trim(),
          timestamp: Date.now()
        }
      ]);
      setChatState('open');
    } catch {
      setChatState('error');
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: 'assistant',
          content:
            'I can still help quickly. For exact details, email ayushjhaa1187@gmail.com or use the contact page.',
          timestamp: Date.now()
        }
      ]);
      setChatState('open');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9998] w-[380px] max-h-[560px] glass-card border border-amber-400/20 rounded-2xl shadow-2xl shadow-amber-400/10 flex flex-col overflow-hidden bg-[#0d0d0d]">
          <div className="p-5 border-b border-white/5 flex items-center justify-between bg-amber-400/5">
            <div>
              <p className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">AKJ-AI Online</p>
              <h4 className="text-white font-black tracking-tight">Ayush&apos;s AI Assistant</h4>
            </div>
            <button onClick={() => setChatState('closed')} className="text-slate-500 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-amber-400 text-black font-bold'
                      : 'bg-white/5 border border-white/10 text-slate-300'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed bg-white/5 border border-white/10 text-slate-300">
                  <div className="flex gap-1 items-center">
                    <span className="h-2 w-2 rounded-full bg-amber-300 animate-bounce" />
                    <span className="h-2 w-2 rounded-full bg-amber-300 animate-bounce [animation-delay:0.12s]" />
                    <span className="h-2 w-2 rounded-full bg-amber-300 animate-bounce [animation-delay:0.24s]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[9px] font-black tracking-widest uppercase px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-400 hover:border-amber-400/50 hover:text-amber-400 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="p-4 border-t border-white/5 flex gap-3">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
            <button
              onClick={() => sendMessage()}
              className="p-2.5 bg-amber-400 text-black rounded-lg hover:bg-white transition-colors disabled:opacity-50"
              disabled={isThinking}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setChatState((prev) => (prev === 'closed' ? 'open' : 'closed'))}
          className="w-16 h-16 bg-amber-400 text-black rounded-full flex items-center justify-center shadow-2xl hover:shadow-amber-400/40 transition-all border-4 border-black group"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={26} />}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-black rounded-full animate-pulse" />
        </button>
      </div>
    </>
  );
};

export default AIAssistant;
