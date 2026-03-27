## 2024-03-27 - [Duplicate Global Layout Components]
**Learning:** In Next.js App Router, global layout components (like Navbar and Footer) should only be rendered in `layout.tsx`. Duplicating them in individual `page.tsx` files causes double rendering, unnecessary DOM nodes, and increased React hydration time.
**Action:** Always ensure layout components are exclusively rendered in `layout.tsx` to prevent redundant UI elements and optimize hydration performance.
