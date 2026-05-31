import { render } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageProvider.jsx';

/**
 * Renders `ui` inside the LanguageProvider. Seeds the persisted language first so
 * the provider initializes in the requested locale (default: Spanish).
 */
export function renderWithLanguage(ui, { lang = 'es' } = {}) {
  if (lang) {
    window.localStorage.setItem('jg_lang', lang);
  }
  return render(<LanguageProvider>{ui}</LanguageProvider>);
}
