import { en } from './en.js';
import { es } from './es.js';

/** Translation tables keyed by language code. */
export const translations = { es, en };

/** Language codes the UI supports, derived from the translation tables. */
export const SUPPORTED_LANGS = Object.keys(translations);

/** Default language used on first visit and as a fallback. */
export const DEFAULT_LANG = 'es';

/** @param {string} lang @returns {boolean} */
export function isSupportedLang(lang) {
  return Object.prototype.hasOwnProperty.call(translations, lang);
}
