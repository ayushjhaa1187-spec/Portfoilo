# Palette's Journal

## 2024-05-27 - [Interactive Toggle Accessibility Pattern]
**Learning:** When using Lucide React icons inside interactive elements (like `button` or `a`), the icons themselves need `aria-hidden="true"` to prevent redundant screen reader announcements if the parent element already has a descriptive `aria-label`.
**Action:** Always add `aria-hidden="true"` to decorative or redundant SVG icons inside interactive components when applying `aria-label` to the parent container.