import { useLanguage } from '../../context/LanguageContext.js';
import { CONTACT } from '../../data/contact.js';
import ExternalLink from '../ui/ExternalLink.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap foot-inner">
        <span>
          © {year} Javier Galvañ Navarro · {t.footer}
        </span>
        <div className="foot-links">
          <ExternalLink href={CONTACT.github}>GitHub</ExternalLink>
          <ExternalLink href={CONTACT.linkedin}>LinkedIn</ExternalLink>
          <a href={`mailto:${CONTACT.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
