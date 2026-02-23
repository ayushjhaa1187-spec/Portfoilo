## 2025-02-18 - Navigation Focus & State
**Learning:** Custom navigation components (like mobile menus) often strip default focus indicators (`outline-none`) without providing a replacement, creating a keyboard trap or confusion. Additionally, visual active states (`text-blue-700`) are often not communicated to screen readers (`aria-current`).
**Action:** Always pair `focus:outline-none` with `focus-visible:ring-*` and ensure `usePathname` drives both visual styling and `aria-current="page"` attributes.
