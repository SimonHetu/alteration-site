import { gameProjects } from "../data/gameProjects";
import type { ProjectDetail } from "./ProjectDetailModal";

type GameProjectsProps = {
  onProjectSelect: (project: ProjectDetail) => void;
};

function GameProjects({ onProjectSelect }: GameProjectsProps) {
  return (
    <section className="portfolio-section" id="game-projects">
      <div className="container">
        <h2>Game Projects</h2>

        <div className="portfolio-grid">
          {gameProjects.map((project) => {
            const coverImage = project.thumbnail ?? project.images[0];

            return (
              <button
                className="portfolio-card"
                key={project.id}
                type="button"
                onClick={() => onProjectSelect(project)}
              >
                <img
                  src={coverImage}
                  alt={project.title}
                  decoding="async"
                  loading="lazy"
                />
                <div className="portfolio-card-content">
                  <h3>{project.title}</h3>
                  {project.role && <p className="portfolio-role">{project.role}</p>}
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GameProjects;
