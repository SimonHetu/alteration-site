import { filmProjects } from "../data/filmProjects";
import type { ProjectDetail } from "./ProjectDetailModal";

type FilmProjectsProps = {
  onProjectSelect: (project: ProjectDetail) => void;
};

function FilmProjects({ onProjectSelect }: FilmProjectsProps) {
  return (
    <section className="portfolio-section" id="film-projects">
      <div className="container">
        <h2>Film Projects</h2>

        <div className="portfolio-grid">
          {filmProjects.map((project) => (
            <button
              className="portfolio-card"
              key={project.id}
              type="button"
              onClick={() => onProjectSelect(project)}
            >
              <img src={project.images[0]} alt={project.title} />
              <div className="portfolio-card-content">
                <h3>{project.title}</h3>
                {project.role && <p className="portfolio-role">{project.role}</p>}
                <p className="portfolio-description">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilmProjects;
