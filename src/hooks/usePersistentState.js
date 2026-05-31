import { useEffect, useState } from 'react';

/**
 * `useState` backed by `localStorage` for string values.
 *
 * Defensive by design: every storage access is wrapped so the app never crashes
 * when storage is unavailable (private mode, blocked cookies, quota exceeded).
 * A persisted value that fails `validate` is discarded in favour of the default,
 * which prevents a tampered/legacy entry from driving the UI into a bad state.
 *
 * @param {string} key
 * @param {string} defaultValue
 * @param {(value: string) => boolean} [validate]
 * @returns {[string, (value: string) => void]}
 */
export function usePersistentState(key, defaultValue, validate) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored === null) return defaultValue;
      if (validate && !validate(stored)) return defaultValue;
      return stored;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Storage unavailable — degrade gracefully, the in-memory value still works.
    }
  }, [key, value]);

  return [value, setValue];
}
