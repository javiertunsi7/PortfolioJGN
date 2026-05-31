import { describe, it, expect } from 'vitest';
import { pick } from './pick.js';

describe('pick', () => {
  it('returns the value for the requested language', () => {
    expect(pick({ es: 'Hola', en: 'Hello' }, 'en')).toBe('Hello');
    expect(pick({ es: 'Hola', en: 'Hello' }, 'es')).toBe('Hola');
  });

  it('falls back to Spanish when the language key is missing', () => {
    expect(pick({ es: 'Hola' }, 'en')).toBe('Hola');
  });

  it('passes strings through unchanged', () => {
    expect(pick('Lumen Cinema', 'en')).toBe('Lumen Cinema');
  });

  it('passes arrays through unchanged (not treated as a localized map)', () => {
    const tags = ['React', 'Vite'];
    expect(pick(tags, 'en')).toBe(tags);
  });

  it('passes null / undefined through unchanged', () => {
    expect(pick(null, 'en')).toBeNull();
    expect(pick(undefined, 'es')).toBeUndefined();
  });
});
