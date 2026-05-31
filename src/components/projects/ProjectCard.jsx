import { useLanguage } from '../../context/LanguageContext.js';
import { pick } from '../../i18n/pick.js';
import Icon from '../icons/Icon.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';
import ProjectMock from './ProjectMock.jsx';

/**
 * A single project. The featured variant spans the row and lists highlights;
 * the standard variant is a compact card.
 *
 * @param {{ project: object, feature?: boolean }} props
 */
export default function ProjectCard({ project, feature = false }) {
  const { t, lang } = useLanguage();
  const name = pick(project.name, lang);
  const type = pick(project.type, lang);
  const desc = pick(project.desc, lang);
  const highlights = pick(project.highlights, lang) ?? [];

  const shot = (
    <div className="proj-shot">
      <ProjectMock motif={project.motif} name={name} />
    </div>
  );

  const body = (
    <div className="proj-body">
      <div className="proj-kicker">
        <span className="proj-type">{type}</span>
        <Icon name={project.icon} size={18} style={{ color: 'var(--accent-2)' }} />
      </div>
      <h3>{name}</h3>
      <p>{desc}</p>
      {feature && (
        <ul className="highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Icon name="check" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="proj-links">
        {project.links.map((link) => (
          <ExternalLink key={link.url} href={link.url} className="repo-link">
            <Icon name="github" />
            {link.l}
          </ExternalLink>
        ))}
      </div>
    </div>
  );

  if (feature) {
    return (
      <article className="glass proj feature reveal">
        <span className="feat-badge">★ {t.projects.featured}</span>
        <div className="feature-inner">
          {shot}
          {body}
        </div>
      </article>
    );
  }

  return (
    <article className="glass proj reveal">
      {shot}
      {body}
    </article>
  );
}
