import { useEffect } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Reveals elements carrying the `.reveal` class as they scroll into view by
 * adding `.in`. Runs once after mount, when the whole page is present.
 *
 * Degrades safely: if the user prefers reduced motion, or IntersectionObserver
 * is unavailable, every element is revealed immediately instead of animating.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal:not(.in)'));
    const prefersReducedMotion = window.matchMedia?.(REDUCED_MOTION_QUERY).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
