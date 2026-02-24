## 2025-02-23 - Duplicate Layout Elements
**Learning:** Found redundant `Navbar` and `Footer` rendering in both `RootLayout` and `Home` page. This caused duplicate DOM nodes and potential hydration/state issues.
**Action:** Always check `layout.tsx` before adding global components to individual pages. Use `layout.tsx` for persistent UI elements.
