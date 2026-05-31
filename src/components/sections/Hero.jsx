import { useLanguage } from '../../context/LanguageContext.js';
import { pick } from '../../i18n/pick.js';
import { CONTACT } from '../../data/contact.js';
import Button from '../ui/Button.jsx';
import Icon from '../icons/Icon.jsx';

/** Portrait card beside the intro (replaces the old code window, per the updated
 *  design). Drop the photo at /public/profile.jpg — see README. */
function HeroPhotoCard({ lang }) {
  const role = `FullStack · ${pick(CONTACT.location, lang)}`;
  const availability = lang === 'es' ? 'Disponible' : 'Available';

  return (
    <div className="glass hero-photo reveal in" style={{ transitionDelay: '.1s' }}>
      <div className="photo-wrap">
        <img src="/profile.jpg" alt="Javier Galvañ Navarro" />
      </div>
      <div className="photo-meta">
        <div className="photo-id">
          <span className="dot" />
          <div>
            <b>Javier Galvañ Navarro</b>
            <span>{role}</span>
          </div>
        </div>
        <span className="photo-badge">{availability}</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <header className="hero wrap">
      <div className="hero-grid">
        <div className="reveal in">
          <span className="pill-status">
            <span className="dot" />
            {t.hero.status}
          </span>
          <h1>
            Javier Galvañ
            <br />
            <span className="grad">Navarro</span>
          </h1>
          <div className="role">{t.hero.role}</div>
          <p className="lede">{t.hero.lede}</p>
          <div className="hero-actions">
            <Button href="#contact" variant="primary">
              <Icon name="mail" />
              {t.hero.contact}
            </Button>
            <Button href={CONTACT.github} variant="ghost" external>
              <Icon name="github" />
              {t.hero.github}
            </Button>
          </div>
          <div className="hero-stats">
            {t.hero.stats.map((stat) => (
              <div key={stat.l} className="glass stat">
                <b>{stat.n}</b>
                <span>{stat.l}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroPhotoCard lang={lang} />
      </div>
    </header>
  );
}
