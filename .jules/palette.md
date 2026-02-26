## 2024-05-24 - Icon-Only Button Accessibility
**Learning:** Icon-only buttons (like the mobile menu toggle) using `lucide-react` are invisible to screen readers without explicit `aria-label` attributes. Additionally, removing default outlines without adding custom focus styles (`focus:ring-2`) breaks keyboard navigation.
**Action:** Always pair `aria-label` with `focus:ring-2` (or similar visual indicator) for any icon-only interactive element.
