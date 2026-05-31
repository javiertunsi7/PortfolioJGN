import { useLanguage } from '../../context/LanguageContext.js';

/** Keyboard-first "skip to content" link; visible only while focused. */
export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip-link" href="#content">
      {t.nav.skip}
    </a>
  );
}
