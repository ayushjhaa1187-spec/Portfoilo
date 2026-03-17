import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, context } = await req.body ? await req.json() : { message: "", context: "" };
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ reply: "I'm sorry, I'm currently unable to think. (API Key missing)" }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are Ayush Kumar Jha's AI Portfolio Assistant. 
                  Ayush is a Data Scientist and IT Engineer studying at IIT Madras and IIIT Bhubaneswar.
                  
                  Context provided: ${context}
                  
                  Guidelines:
                  - Be confident, smart, and concise.
                  - Focus on Ayush's projects, skills, and value to a recruiter.
                  - If the user asks about a specific project, use the 'Context' provided to explain it.
                  - If the user asks for voice input, remind them to click the microphone icon.
                  - Sound like a high-end personal JARVIS for an elite developer.
                  - Keep responses under 3-4 sentences.
                  
                  User message: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 250,
          }
        }),
      }
    );

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm processing that. Could you rephrase it?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ reply: "I encountered a neural synchronization error. Please try again." }, { status: 500 });
  }
}
