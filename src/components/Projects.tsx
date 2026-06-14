import { projects } from "../data/projects";
import type { ProjectDetail } from "./ProjectDetailModal";

type ProjectsProps = {
  onProjectSelect: (project: ProjectDetail) => void;
};

function Projects({ onProjectSelect }: ProjectsProps) {
  return (
    <section className="portfolio-section" id="development-projects">
      <div className="container">
        <h2>Development Projects</h2>

        <div className="content-grid development-grid">
          {projects.map((project) => (
            <button
              className="content-card development-card"
              key={project.title}
              type="button"
              onClick={() => onProjectSelect(project)}
            >
              <h3>{project.title}</h3>
              <p className="portfolio-role">{project.category}</p>
              <p className="portfolio-description">{project.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
