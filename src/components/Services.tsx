import { services } from "../data/services";
import type { ReactNode } from "react";

const serviceLinks: Record<string, string> = {
  Creative: "#film-projects",
  Development: "#development-projects",
  Interactive: "#game-projects"
};

const serviceIcons: Record<string, ReactNode> = {
  Development: (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M16 12.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="M26.5 17.4v-2.8l-3.1-.6a8 8 0 0 0-.8-1.9l1.8-2.6-2-2-2.6 1.8a8 8 0 0 0-1.9-.8l-.6-3.1h-2.8l-.6 3.1a8 8 0 0 0-1.9.8L9.5 7.5l-2 2 1.8 2.6a8 8 0 0 0-.8 1.9l-3.1.6v2.8l3.1.6a8 8 0 0 0 .8 1.9l-1.8 2.6 2 2 2.6-1.8a8 8 0 0 0 1.9.8l.6 3.1h2.8l.6-3.1a8 8 0 0 0 1.9-.8l2.6 1.8 2-2-1.8-2.6a8 8 0 0 0 .8-1.9l3-.6Z" />
    </svg>
  ),
  Creative: (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M6.5 21.5 11 7.5l13.8 3.8-3.4 13.2-14.9-3Z" />
      <path d="M11 7.5 16.2 17l8.6-5.7" />
      <path d="M6.5 21.5 16.2 17l5.2 7.5" />
      <path d="M16.2 17 21.4 24.5" />
      <path d="M6.5 21.5 24.8 11.3" />
    </svg>
  ),
  Interactive: (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path d="M7.5 12.2h17a3.5 3.5 0 0 1 3.5 3.5v5.2a4 4 0 0 1-4 4h-3.1c-1.3 0-2.4-.8-2.9-1.9l-.7-1.7h-2.6L14 23c-.5 1.1-1.6 1.9-2.9 1.9H8a4 4 0 0 1-4-4v-5.2a3.5 3.5 0 0 1 3.5-3.5Z" />
      <path d="M10.2 17.4h4.2" />
      <path d="M17.6 17.4h4.2" />
      <path d="M9.2 12.2 10 8.7a2.2 2.2 0 0 1 2.1-1.7h7.8A2.2 2.2 0 0 1 22 8.7l.8 3.5" />
    </svg>
  )
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
              <span className="service-icon">{serviceIcons[service.title]}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-link">View related work</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
