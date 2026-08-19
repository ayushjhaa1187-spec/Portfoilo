import { NextRequest, NextResponse } from 'next/server';
import { getAIResponse, aiKnowledge } from '@/data/ai-knowledge';

const SYSTEM_PROMPT = `
You are AKJ-AI, the official AI assistant for Ayush Kumar Jha's portfolio.
You answer questions accurately, concisely, and professionally on behalf of Ayush.

PROFILE & VERIFIED HIGHLIGHTS:
- Name: ${aiKnowledge.profile.name}
- Education: ${aiKnowledge.profile.education}
- Current Roles:
  * Research & Education Design Intern @ Vicharanashala (Lab for Education Design / VLED), IIT Ropar
  * Jury Member @ AI-volution, GES 2026, IIT Kharagpur (with Ashoka Changemakers)
  * Campus Ambassador @ TRYST '26 (IIT Delhi) & Cognizance 2026 (IIT Roorkee)
- Global & National Honors:
  * Selected for Bharat Innovates 2026 in Nice, France (Global Deep-Tech Accelerator for 120 startups & 15 premier institutions)
  * Invited for talk on Physics-Informed Neural Networks (PINNs) @ CDS, IISc Bangalore (34,490+ LinkedIn impressions)
  * Top 10 Shortlist @ DevFusion Hackathon, IIT Bombay (Project: SkillBridge)
  * Top 10 Finalist @ Elite Hack 1.0 (7,400+ participants, Live deployed on Vercel)
  * Solo Finalist @ HackFest 2.0 (GDG Cloud New Delhi × Turgon AI - BRD Generation Agent)
  * Grand Finale Qualifier @ Brahmastra Policy Case Competition, IIT Kanpur
  * Top 30 Finalist @ The Deal Room Investment Challenge, DMS IIT Delhi
  * Rank 27 @ CaseQuest '26, DMS IIT Delhi
- Core Skills: Physics-Informed Neural Networks (PINNs), Agentic AI, PyTorch, LangChain, Next.js, React, Supabase, PostgreSQL, FastAPI
- Contact: ayushjhaa1187@gmail.com | LinkedIn: https://www.linkedin.com/in/ayush-kumar-jha-5960a3362/

GUIDELINES:
- Keep answers concise (<100 words) unless specifically asked for deep technical details.
- Always be polite, crisp, and direct.
- Never invent unverified claims.
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const message = body?.message || body?.prompt || '';
    const history = Array.isArray(body?.history) ? body.history : [];

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { reply: "Please provide a valid question or topic to discuss.", status: 'empty' },
        { status: 200 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_KEY;

    if (apiKey) {
      const modelsToTry = [
        'gemini-2.5-flash',
        'gemini-2.0-flash',
        'gemini-1.5-flash',
        'gemini-2.0-flash-exp'
      ];

      for (const model of modelsToTry) {
        try {
          const contents = [
            {
              role: 'user',
              parts: [{ text: SYSTEM_PROMPT }]
            },
            ...history.slice(-6).map((h: { role: string; content: string }) => ({
              role: h.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: h.content }]
            })),
            {
              role: 'user',
              parts: [{ text: message }]
            }
          ];

          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents,
                generationConfig: {
                  temperature: 0.7,
                  maxOutputTokens: 300
                }
              }),
              signal: AbortSignal.timeout(6000)
            }
          );

          if (response.ok) {
            const data = await response.json();
            const replyText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
            if (replyText) {
              return NextResponse.json({ reply: replyText, model, status: 'success' });
            }
          }
        } catch {
          // If this model fails or times out, proceed to next or fallback
          continue;
        }
      }
    }

    // High-fidelity fallback knowledge engine
    const fallbackReply = getAIResponse(message);
    return NextResponse.json({ reply: fallbackReply, status: 'fallback' });
  } catch {
    return NextResponse.json({
      reply: "Hi! You can reach Ayush directly at ayushjhaa1187@gmail.com or on LinkedIn. Feel free to explore his projects and research highlights!",
      status: 'safe_fallback'
    });
  }
}
