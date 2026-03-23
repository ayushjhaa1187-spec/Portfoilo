
## 2024-05-20 - Redundant Layout Components in Next.js App Router
**Learning:** In Next.js App Router, rendering global layout components (like Navbar and Footer) inside both `layout.tsx` and individual `page.tsx` files causes unnecessary double rendering. This leads to duplicate DOM nodes, increased React hydration time, and degraded Time to Interactive (TTI), without throwing explicit errors.
**Action:** When working with Next.js App Router, always verify that global layout components are exclusively managed in `layout.tsx` and not redundantly included in individual route components.
