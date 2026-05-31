import { useLanguage } from '../../context/LanguageContext.js';
import Icon from '../icons/Icon.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="wrap">
      <div className="sec-head reveal">
        <div className="sec-tag">{t.about.tag}</div>
        <h2 className="sec-title">{t.about.title}</h2>
      </div>
      <div className="about-grid">
        <div className="glass about-main reveal">
          <h3>{t.about.h}</h3>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <div className="soft-list">
            {t.about.soft.map((skill) => (
              <div key={skill.t} className="soft">
                <span className="si">
                  <Icon name={skill.i} />
                </span>
                {skill.t}
              </div>
            ))}
          </div>
        </div>
        <div className="facts">
          {t.about.facts.map((fact, i) => (
            <div
              key={fact.b}
              className="glass fact reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="fi">
                <Icon name={fact.i} />
              </span>
              <div>
                <b>{fact.b}</b>
                <span>{fact.s}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
