import { useEffect, useMemo } from 'react';
import { LanguageContext } from './LanguageContext.js';
import { DEFAULT_LANG, isSupportedLang, translations } from '../i18n/index.js';
import { usePersistentState } from '../hooks/usePersistentState.js';

const STORAGE_KEY = 'jg_lang';

/** Provides the active language + translations to the tree and persists the choice. */
export function LanguageProvider({ children }) {
  const [lang, setLang] = usePersistentState(STORAGE_KEY, DEFAULT_LANG, isSupportedLang);

  // Keep <html lang> in sync for assistive tech and search engines.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] ?? translations[DEFAULT_LANG] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
