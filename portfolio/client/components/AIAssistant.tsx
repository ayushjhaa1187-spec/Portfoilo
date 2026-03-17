"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Mic, Send, Bot, Loader2, Volume2, VolumeX } from "lucide-react";
import { personalInfo, projects } from "../data/portfolio";

interface Message {
  text: string;
  type: "user" | "bot";
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Neural link established. I am Ayush's AI interface. How can I assist your reconnaissance today?", type: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [autoSpeak, setAutoSpeak] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const speak = (text: string) => {
    if (!window.speechSynthesis || !autoSpeak) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const newMessages: Message[] = [...messages, { text, type: "user" }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const projectsContext = projects.map(p => `${p.title}: ${p.aiContext || p.shortDescription}`).join(". ");
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: text,
          context: `You are assisting a recruiter looking at ${personalInfo.name}'s portfolio. Here is the project list: ${projectsContext}. ${personalInfo.bio}`
        })
      });

      const data = await res.json();
      const botReply = data.reply;
      
      setMessages([...newMessages, { text: botReply, type: "bot" }]);
      speak(botReply);
    } catch (error) {
      setMessages([...newMessages, { text: "Signal lost. Attempting to reconnect...", type: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      handleSend(transcript);
    };
    recognition.start();
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(10px)" }}
            className="mb-6 w-[350px] md:w-[400px] h-[500px] bg-[#111113]/90 backdrop-blur-2xl border border-[#D4AF37]/20 rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#1E1E24] flex items-center justify-between bg-[#0A0A0B]/50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] relative">
                  <Bot size={20} />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#111113] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display text-sm text-[#F1F0FB] tracking-widest">LAB_ASSISTANT</h4>
                  <span className="text-[9px] font-mono text-[#555560] uppercase tracking-[3px]">System Active</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setAutoSpeak(!autoSpeak)}
                  className={`p-2 rounded-lg transition-colors ${autoSpeak ? "text-[#D4AF37]" : "text-[#555560] hover:text-[#F1F0FB]"}`}
                >
                  {autoSpeak ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-[#555560] hover:text-[#D4AF37] transition-colors p-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.type === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl font-mono text-xs leading-relaxed ${
                    msg.type === "user" 
                    ? "bg-[#D4AF37] text-[#0A0A0B] rounded-tr-none shadow-lg" 
                    : "bg-[#1E1E24] text-[#F1F0FB]/80 rounded-tl-none border border-[#D4AF37]/5"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#1E1E24] p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 className="animate-spin text-[#D4AF37]" size={14} />
                    <span className="font-mono text-[9px] text-[#555560] uppercase tracking-widest">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-[#0A0A0B]/50 border-t border-[#1E1E24]">
              <div className="relative flex items-center gap-3">
                <button 
                  onClick={startListening}
                  className={`p-3 rounded-xl transition-all ${isListening ? "bg-red-500 text-white animate-pulse" : "bg-[#1E1E24] text-[#D4AF37] hover:bg-[#D4AF37]/10"}`}
                >
                  <Mic size={18} />
                </button>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                  placeholder="Initiate communication..."
                  className="flex-1 bg-[#1E1E24] border border-[#1E1E24] text-[#F1F0FB] px-5 py-3 rounded-xl font-mono text-[10px] focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-[#555560]"
                />
                <button 
                  onClick={() => handleSend(input)}
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-[#D4AF37] text-[#0A0A0B] rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center text-[#0A0A0B] relative group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <X size={24} strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <MessageSquare size={24} strokeWidth={2.5} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#06B6D4] text-[#0A0A0B] rounded-full text-[10px] font-bold flex items-center justify-center animate-bounce shadow-lg">
            !
          </div>
        )}
      </motion.button>
    </div>
  );
}
