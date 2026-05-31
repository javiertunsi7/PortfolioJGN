import { describe, it, expect } from 'vitest';
import { translations, SUPPORTED_LANGS, DEFAULT_LANG, isSupportedLang } from './index.js';

describe('i18n registry', () => {
  it('exposes Spanish and English tables', () => {
    expect(SUPPORTED_LANGS).toEqual(expect.arrayContaining(['es', 'en']));
    expect(translations.es).toBeTypeOf('object');
    expect(translations.en).toBeTypeOf('object');
  });

  it('defaults to Spanish', () => {
    expect(DEFAULT_LANG).toBe('es');
    expect(isSupportedLang('es')).toBe(true);
  });

  it('rejects unsupported languages and inherited keys', () => {
    expect(isSupportedLang('fr')).toBe(false);
    expect(isSupportedLang('')).toBe(false);
    // Guards against prototype keys leaking through (hasOwnProperty check).
    expect(isSupportedLang('toString')).toBe(false);
  });

  // Parity guard: a key added to one language but forgotten in the other will fail here.
  const deepKeys = (obj, prefix = '') =>
    Object.entries(obj).flatMap(([key, value]) =>
      value && typeof value === 'object' && !Array.isArray(value)
        ? deepKeys(value, `${prefix}${key}.`)
        : [`${prefix}${key}`],
    );

  it('keeps an identical key structure across languages', () => {
    expect(deepKeys(translations.es).sort()).toEqual(deepKeys(translations.en).sort());
  });
});
