## 2026-03-17 - Duplicate Layout Components in Next.js App Router
**Learning:** In Next.js App Router, global layout components (like Navbar and Footer) should only be rendered in `layout.tsx`. Duplicating them in individual `page.tsx` files causes double rendering, unnecessary DOM nodes, and increased React hydration time.
**Action:** Always check `layout.tsx` before adding layout components to `page.tsx`. Remove redundant layout components from page files to optimize rendering performance and reduce DOM size.
