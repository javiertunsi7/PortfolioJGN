import { useLanguage } from '../../context/LanguageContext.js';
import { PROJECTS } from '../../data/projects.js';
import ProjectCard from '../projects/ProjectCard.jsx';

export default function Projects() {
  const { t } = useLanguage();
  const featured = PROJECTS.find((project) => project.feature);
  const rest = PROJECTS.filter((project) => !project.feature);

  return (
    <section id="projects" className="wrap">
      <div className="sec-head reveal">
        <div className="sec-tag">{t.projects.tag}</div>
        <h2 className="sec-title">{t.projects.title}</h2>
        <p className="sec-sub">{t.projects.sub}</p>
      </div>
      <div className="proj-grid">
        {featured && <ProjectCard project={featured} feature />}
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
