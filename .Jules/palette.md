## 2024-03-03 - Accessible Async Form States
**Learning:** Dynamic form status messages (success/error) cause layout shifts and may not be read by screen readers if not properly marked up. Async submit buttons should also have visual loading indicators.
**Action:** Always wrap dynamic form status messages in `aria-live='polite'` regions with a reserved height (e.g., `min-h-[24px]`) to prevent layout shifts. Async submit buttons should include a visual loading spinner (like `Loader2` from `lucide-react`).
