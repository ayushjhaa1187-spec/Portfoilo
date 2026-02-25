## 2025-05-21 - Missing ARIA on Icon Buttons
**Learning:** Icon-only buttons (using `lucide-react`) are consistently missing `aria-label` and focus indicators across the app (Navbar, Footer).
**Action:** When working on interactive components, audit all icon-only buttons for `aria-label` and ensure `focus:outline-none` is paired with a visible focus ring (e.g., `focus:ring-2`).
