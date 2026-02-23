## 2026-02-23 - Duplicate Layout Components
**Learning:** Next.js `layout.tsx` persists across routes. Adding `Navbar` or `Footer` to `page.tsx` when they are already in `RootLayout` causes them to render twice (nested), doubling DOM nodes and component state overhead without visible errors (if one is fixed/hidden).
**Action:** Always check `layout.tsx` before adding global components to `page.tsx`. Use `verify_home.py` or similar DOM counting scripts to detect duplicates.
