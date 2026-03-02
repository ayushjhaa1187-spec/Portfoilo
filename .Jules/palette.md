# Palette Journal

## 2025-03-02 - [Form Feedback Layout Shift & Accessibility]
**Learning:** Adding dynamic success/error messages beneath forms can cause unexpected layout shifts, and injecting text dynamically isn't read by screen readers unless properly wrapped.
**Action:** When adding dynamic feedback states to forms, wrap them in a container with `aria-live="polite"` to ensure screen readers announce the update. Also add a fixed minimum height (e.g., `min-h-[24px]`) to this wrapper to reserve space in the layout, preventing layout shift when the message appears or changes.
