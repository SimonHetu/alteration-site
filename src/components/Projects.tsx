import { projects } from "../data/projects";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
