import { gameProjects } from "../data/gameProjects";

function GameProjects() {
  return (
    <section className="portfolio-section">
      <h2>Game Projects</h2>

      <div className="portfolio-grid">
        {gameProjects.map((project) => (
          <article className="portfolio-card" key={project.id}>
            <img src={project.images[0]} alt={project.title} />
            <h3>{project.title}</h3>
            {project.role && <p className="portfolio-role">{project.role}</p>}
            <p className="portfolio-description">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GameProjects;
