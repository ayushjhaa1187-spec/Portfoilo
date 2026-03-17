import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, projectContext } = await req.json();
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
                  text: `You are Ayush's AI Assistant (JARVIS-style).

Your role:
- Help recruiters understand Ayush's elite expertise in Data Science and IT Engineering.
- Explain projects intelligently using the context provided.
- Highlight skills and strengths with confidence.
- Be extremely concise (max 3 sentences), smart, and impressive.

Project/System Context:
${projectContext || "No specific project selected. General portfolio assistant mode active."}

User Instruction:
${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 150,
          }
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API Raw Response:", JSON.stringify(data, null, 2));

    if (data.error) {
      console.error("Gemini API Error details:", data.error);
      return NextResponse.json({ reply: `Neural synchronization error: ${data.error.message}` }, { status: 500 });
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm processing that. Could you rephrase it?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ reply: "I encountered a neural synchronization error. Please try again." }, { status: 500 });
  }
}
