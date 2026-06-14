import { services } from "../data/services";

function Services() {
  return (
    <section>
      <h2>Services</h2>

      {services.map((service) => (
        <div key={service.title}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;