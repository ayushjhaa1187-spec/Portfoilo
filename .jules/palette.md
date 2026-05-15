## 2024-05-18 - Improve AI Assistant Accessibility
**Learning:** Icon-only buttons without labels and disabled states lacking visual/programmatic cues are a recurrent pattern in custom React components.
**Action:** Always add `aria-label`, `title`, and distinct `disabled` states (including pointer events/opacity adjustments) to interactive elements that convey state changes visually but not programmatically.
