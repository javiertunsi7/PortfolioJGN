import { useLanguage } from '../../context/LanguageContext.js';
import { pick } from '../../i18n/pick.js';
import { CONTACT } from '../../data/contact.js';
import Button from '../ui/Button.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';
import Icon from '../icons/Icon.jsx';

export default function Contact() {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="wrap contact">
      <div className="glass contact-card reveal">
        <h2>
          {t.contact.t1} <span className="grad">{t.contact.t2}</span>
        </h2>
        <p>{t.contact.p}</p>
        <div className="contact-actions">
          <Button href={`mailto:${CONTACT.email}`} variant="primary">
            <Icon name="mail" />
            {t.contact.cta}
          </Button>
          <Button href={CONTACT.github} variant="ghost" external>
            <Icon name="github" />
            {t.contact.github}
          </Button>
        </div>
        <div className="contact-meta">
          <a className="cmeta" href={`mailto:${CONTACT.email}`}>
            <Icon name="mail" />
            {CONTACT.email}
          </a>
          <span className="cmeta">
            <Icon name="pin" />
            {pick(CONTACT.location, lang)}
          </span>
          <ExternalLink className="cmeta" href={CONTACT.linkedin}>
            <Icon name="linkedin" />
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
