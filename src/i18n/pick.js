/**
 * Returns the localized variant of a content field.
 *
 * Localized fields are plain objects keyed by language (e.g. `{ es, en }`).
 * Anything else (string, array, number) is returned unchanged, so the same
 * dataset can mix localized and language-agnostic values.
 *
 * @template T
 * @param {T | Record<string, T>} value
 * @param {string} lang
 * @returns {T}
 */
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.es;
  }
  return value;
}
