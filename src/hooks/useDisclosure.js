import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Disclosure state for a toggleable region (e.g. the mobile menu).
 *
 * While open it auto-closes on: Escape, a pointer event outside `containerRef`,
 * and when the viewport grows past `desktopQuery` (so a menu opened on mobile
 * doesn't linger after rotating to desktop). Listeners are bound only while open
 * and removed on close — no leaks.
 *
 * @param {{ desktopQuery?: string }} [options]
 */
export function useDisclosure({ desktopQuery = '(min-width: 921px)' } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };
    const onPointerDown = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        close();
      }
    };
    const desktop = window.matchMedia(desktopQuery);
    const onBreakpoint = (event) => {
      if (event.matches) close();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener?.('change', onBreakpoint);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener?.('change', onBreakpoint);
    };
  }, [isOpen, close, desktopQuery]);

  return { isOpen, close, toggle, containerRef };
}
