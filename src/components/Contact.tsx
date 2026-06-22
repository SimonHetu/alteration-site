function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <h2>Contact</h2>
        <div className="section-copy">
          <p>
            Interested in collaborating, discussing a project or learning more about our work?
          </p>
          <p>Get in touch.</p>
        </div>

        <div className="content-grid contact-grid">
          <a className="content-card contact-card" href="#">
            <h3>Email</h3>
            <p>email@example.com</p>
            <span>Send a message</span>
          </a>
          <a className="content-card contact-card" href="#">
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/your-profile</p>
            <span>Connect professionally</span>
          </a>
          <a className="content-card contact-card" href="#">
            <h3>GitHub</h3>
            <p>github.com/your-username</p>
            <span>View code and projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
