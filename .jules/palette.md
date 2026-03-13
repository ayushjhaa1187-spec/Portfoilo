# Palette's Journal

## 2024-03-13 - [Navbar & Footer Accessibility Enhancements]
**Learning:** Found that `lucide-react` icons inside interactive elements were missing `aria-hidden="true"`, causing redundant screen reader announcements. Also, icon-only links lacked `focus-visible` states, making keyboard navigation difficult to track.
**Action:** Applied `aria-hidden="true"` to decorative icons. Implemented `usePathname` for active route indication and added `focus-visible:ring-2` to improve keyboard navigability.
