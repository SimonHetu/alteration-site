import { filmProjects } from "../data/filmProjects";

function FilmProjects() {
  return (
    <section className="portfolio-section">
      <h2>Film Projects</h2>

      <div className="portfolio-grid">
        {filmProjects.map((project) => (
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

export default FilmProjects;
