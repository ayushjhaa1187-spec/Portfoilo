## 2024-05-01 - Icon-Only Buttons
**Learning:** Reusable UX pattern found across `Navbar` and `AIAssistant` components using `lucide-react` icon-only buttons that lack screen reader accessibility. Since these components appear globally across the portfolio app, missing `aria-labels` would make navigation and interaction very difficult for visually impaired users.
**Action:** Always verify that `lucide-react` or similar icon-only buttons include descriptive `aria-label`s, particularly for interactive global elements like menus and chat assistants.
