## 2024-05-14 - AIAssistant Accessibility

**Learning:** When building custom AI chat interfaces with floating widgets (like `AIAssistant.tsx`), it's common to miss ARIA labels on utility icon buttons (Close, Send) and the main toggle trigger, making the chat completely inaccessible to screen readers.
**Action:** Always ensure floating action buttons (FABs) and internal widget controls have descriptive `aria-label`s and `aria-expanded` states for toggle behaviors.
