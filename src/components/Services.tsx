import { services } from "../data/services";

const serviceLinks: Record<string, string> = {
  Creative: "#film-projects",
  Development: "#development-projects",
  Interactive: "#game-projects"
};

function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2>Services</h2>

        <div className="content-grid">
          {services.map((service) => (
            <a
              className="content-card service-card"
              href={serviceLinks[service.title]}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span>View related work</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
