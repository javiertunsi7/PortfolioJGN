import { useLanguage } from '../../context/LanguageContext.js';
import Icon from '../icons/Icon.jsx';

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="wrap">
      <div className="sec-head reveal">
        <div className="sec-tag">{t.stack.tag}</div>
        <h2 className="sec-title">{t.stack.title}</h2>
        <p className="sec-sub">{t.stack.sub}</p>
      </div>
      <div className="bento">
        {t.stack.cats.map((cat, i) => (
          <div
            key={cat.name}
            className="glass cat reveal"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="cat-head">
              <div className="cat-ico">
                <Icon name={cat.ico} />
              </div>
              <div>
                <h3>{cat.name}</h3>
                <p>{cat.note}</p>
              </div>
            </div>
            <div className="chips">
              {cat.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
