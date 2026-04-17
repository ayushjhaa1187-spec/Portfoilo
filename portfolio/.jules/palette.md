## 2024-05-24 - Missing Accessibility Labels on Icon Buttons
**Learning:** The app frequently uses bare icon components (e.g., from `lucide-react`) inside floating action buttons and chat interfaces without corresponding `aria-label`s or disabled states for asynchronous operations.
**Action:** Always verify that icon-only buttons include descriptive `aria-label`s and that asynchronous interactions provide visual feedback (like a typing indicator) along with disabled interactive elements.
