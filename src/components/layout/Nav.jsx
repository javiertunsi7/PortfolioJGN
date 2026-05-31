import { useLanguage } from '../../context/LanguageContext.js';
import Button from '../ui/Button.jsx';

export default function Nav() {
  const { t, lang, setLang } = useLanguage();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <span className="mono">JG</span>
          <span className="full">Javier&nbsp;Galvañ</span>
        </div>
        <div className="nav-links">
          <a href="#stack">{t.nav.stack}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="nav-right">
          <div className="lang" role="group" aria-label={t.nav.langLabel}>
            <button
              type="button"
              className={lang === 'es' ? 'on' : ''}
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'on' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <Button href="#contact" variant="primary" size="sm">
            {t.nav.cta}
          </Button>
        </div>
      </div>
    </nav>
  );
}
