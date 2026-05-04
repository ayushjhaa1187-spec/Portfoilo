## 2024-05-04 - Floating Action Button Accessibility
**Learning:** Animated floating action buttons (FABs) with intricate hover states (like scaling and pulsing dots) often lack basic keyboard focus visibility, making them completely inaccessible to keyboard-only users who can't trigger their tooltip reveals.
**Action:** Always add `focus-visible` styles with sufficient contrast and `aria-expanded` attributes to togglable FABs, ensuring keyboard navigation works flawlessly alongside complex Framer Motion animations.
