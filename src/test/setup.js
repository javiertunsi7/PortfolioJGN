import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// jsdom does not implement these browser APIs that the app touches — stub them.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
window.IntersectionObserver = IntersectionObserverStub;

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
    dispatchEvent() {
      return false;
    },
  });
}

// Isolate tests: unmount React trees and clear persisted state between them.
afterEach(() => {
  cleanup();
  window.localStorage.clear();
});
