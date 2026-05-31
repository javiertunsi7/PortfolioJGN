import { useLanguage } from '../../context/LanguageContext.js';
import { useDisclosure } from '../../hooks/useDisclosure.js';
import Button from '../ui/Button.jsx';
import Icon from '../icons/Icon.jsx';

// Single source for the section links — reused by the desktop bar and the mobile menu.
const SECTIONS = [
  { key: 'stack', href: '#stack' },
  { key: 'projects', href: '#projects' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

export default function Nav() {
  const { t, lang, setLang } = useLanguage();
  const { isOpen, close, toggle, containerRef } = useDisclosure();

  return (
    <nav className="nav">
      <div className="nav-inner" ref={containerRef}>
        <div className="brand">
          <span className="mono">JG</span>
          <span className="full">Javier&nbsp;Galvañ</span>
        </div>

        <div className="nav-links">
          {SECTIONS.map((section) => (
            <a key={section.key} href={section.href}>
              {t.nav[section.key]}
            </a>
          ))}
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

          <button
            type="button"
            className="nav-burger"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isOpen}
            aria-controls={isOpen ? 'mobile-nav' : undefined}
            onClick={toggle}
          >
            <Icon name={isOpen ? 'close' : 'menu'} size={18} />
          </button>
        </div>

        {isOpen && (
          <div className="nav-mobile" id="mobile-nav">
            {SECTIONS.map((section) => (
              <a key={section.key} href={section.href} onClick={close}>
                {t.nav[section.key]}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="nav-mobile-cta" onClick={close}>
              {t.nav.cta}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
