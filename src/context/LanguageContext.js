import { createContext, useContext } from 'react';

/**
 * @typedef {Object} LanguageContextValue
 * @property {string} lang                       Active language code.
 * @property {(lang: string) => void} setLang    Switches the active language.
 * @property {object} t                          Translation table for `lang`.
 */

export const LanguageContext = createContext(/** @type {LanguageContextValue | null} */ (null));

/** Read the active language, its setter and the current translation table. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  }
  return ctx;
}
