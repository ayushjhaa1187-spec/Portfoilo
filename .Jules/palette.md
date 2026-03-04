## 2025-03-04 - Prevent layout shifts for form status messages
**Learning:** Dynamic form status messages (like success or error states after async submission) can cause layout shifts when they appear and disappear, disrupting the UX.
**Action:** Wrap dynamic messages in a region with a fixed minimum height (e.g., `min-h-[24px]`) and `aria-live='polite'` to reserve space and announce the changes to screen readers without breaking the layout.
