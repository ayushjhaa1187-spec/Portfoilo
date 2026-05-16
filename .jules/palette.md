## 2025-02-12 - Inaccessible Icon-Only Buttons
**Learning:** Found a systemic pattern of icon-only buttons missing `aria-label`s across the navigation and AI chat components, which completely breaks the experience for screen reader users. Added attributes like `aria-label`, `aria-expanded`, and disabled states to make the UI perceivable.
**Action:** Always verify icon-only buttons include an `aria-label` and interactive states like `disabled` to ensure keyboard navigation and screen reader accessibility are maintained.
