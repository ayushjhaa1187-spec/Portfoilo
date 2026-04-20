## 2024-04-20 - AI Assistant Loading States
**Learning:** Chatbots and AI assistants require an explicit typing/loading state to prevent user confusion during processing delays and prevent double submissions.
**Action:** Always include a visual `isTyping` indicator and disabled input states for any conversational UI component that has simulated or real network latency.
