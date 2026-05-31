import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { useReveal } from './useReveal.js';

function Subject() {
  useReveal();
  return (
    <div className="reveal" data-testid="el">
      content
    </div>
  );
}

describe('useReveal', () => {
  it('reveals everything immediately when the user prefers reduced motion', () => {
    const spy = vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: true });
    const { getByTestId } = render(<Subject />);
    expect(getByTestId('el')).toHaveClass('in');
    spy.mockRestore();
  });

  it('reveals an element only once it intersects the viewport', () => {
    let intersectionCallback;
    const observe = vi.fn();
    const unobserve = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        constructor(callback) {
          intersectionCallback = callback;
        }
        observe = observe;
        unobserve = unobserve;
        disconnect = vi.fn();
      },
    );

    const { getByTestId } = render(<Subject />);
    const el = getByTestId('el');

    expect(el).not.toHaveClass('in');
    expect(observe).toHaveBeenCalledWith(el);

    // Simulate the element scrolling into view.
    intersectionCallback([{ isIntersecting: true, target: el }]);

    expect(el).toHaveClass('in');
    expect(unobserve).toHaveBeenCalledWith(el);

    vi.unstubAllGlobals();
  });
});
