import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SHORTCUTS: Record<string, string> = {
  p: '/projects',
  e: '/experience',
  b: '/blog',
  c: '/contact',
  a: '/about',
  s: '/case-studies'
};

export function useKeyboardNav() {
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (target.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const route = SHORTCUTS[e.key.toLowerCase()];
      if (route) router.push(route);

      if (e.key === '?') {
        document.dispatchEvent(new CustomEvent('open-ai-assistant'));
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [router]);
}
