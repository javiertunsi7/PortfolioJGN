import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageProvider } from './LanguageProvider.jsx';
import { useLanguage } from './LanguageContext.js';

function Probe() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="cta">{t.nav.cta}</span>
      <button type="button" onClick={() => setLang('en')}>
        to-en
      </button>
    </div>
  );
}

describe('LanguageProvider / useLanguage', () => {
  it('provides Spanish by default', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
    expect(screen.getByTestId('cta')).toHaveTextContent('Contactar');
  });

  it('switches language, persists it and updates translations', async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    await user.click(screen.getByText('to-en'));
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    expect(screen.getByTestId('cta')).toHaveTextContent('Get in touch');
    expect(window.localStorage.getItem('jg_lang')).toBe('en');
  });

  it('reflects the active language on <html lang>', () => {
    window.localStorage.setItem('jg_lang', 'en');
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>,
    );
    expect(document.documentElement.lang).toBe('en');
  });

  it('throws a clear error if used outside the provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/LanguageProvider/);
    spy.mockRestore();
  });
});
