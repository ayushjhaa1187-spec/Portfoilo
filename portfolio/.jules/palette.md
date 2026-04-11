## 2024-04-11 - Accessible Floating Action Buttons
**Learning:** Floating Action Buttons (FABs) and chat popups often lack ARIA labels and focus indicators, making them invisible to screen readers and difficult to navigate via keyboard.
**Action:** Always add dynamic `aria-label`s based on state (e.g. "Open" vs "Close") and explicit `focus-visible` styles to floating buttons to ensure full accessibility.
