import alterationLogo from "../assets/images/logo/Logo_Square_01_512.png";
import crimeVisionImage from "../assets/images/development/crime-vision/crime-vision-01.jpg";
import duneImage from "../assets/images/film/dune/dune-arrakis-01.jpg";
import dragon from "../assets/images/games/dragon.jpg";

const techTags = [
  { icon: "code", label: "Software" },
  { icon: "cube", label: "3D" },
  { icon: "nodes", label: "Pipeline" },
  { icon: "bolt", label: "Realtime" },
  { icon: "tool", label: "Tools" },
  { icon: "gear", label: "Automation" }
];

function HeroIcon({ name }: { name: string }) {
  switch (name) {
    case "code":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m9 7-5 5 5 5" />
          <path d="m15 7 5 5-5 5" />
        </svg>
      );
    case "cube":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="M4 7.5 12 12l8-4.5" />
          <path d="M12 12v9" />
        </svg>
      );
    case "nodes":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M7 7h10" />
          <path d="M7 17h10" />
          <path d="M12 7v10" />
          <path d="M5 5.5h4v3H5z" />
          <path d="M15 15.5h4v3h-4z" />
        </svg>
      );
    case "bolt":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M13 2 5 13h6l-1 9 9-13h-6l1-7Z" />
        </svg>
      );
    case "tool":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M14.5 5.5 18 2l4 4-3.5 3.5" />
          <path d="M3 21l8.5-8.5" />
          <path d="m12 6 6 6" />
        </svg>
      );
    case "gear":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 9.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
          <path d="M19.5 13.2v-2.4l-2.3-.5a6.8 6.8 0 0 0-.5-1.2L18 7.1 16.9 6l-2 1.3a6.8 6.8 0 0 0-1.2-.5l-.5-2.3h-2.4l-.5 2.3a6.8 6.8 0 0 0-1.2.5L7.1 6 6 7.1l1.3 2a6.8 6.8 0 0 0-.5 1.2l-2.3.5v2.4l2.3.5c.1.4.3.8.5 1.2l-1.3 2L7.1 18l2-1.3c.4.2.8.4 1.2.5l.5 2.3h2.4l.5-2.3c.4-.1.8-.3 1.2-.5l2 1.3 1.1-1.1-1.3-2c.2-.4.4-.8.5-1.2l2.3-.5Z" />
        </svg>
      );
    case "world":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 12h16.4" />
          <path d="M12 3.5c2.3 2.1 3.4 4.9 3.4 8.5s-1.1 6.4-3.4 8.5" />
          <path d="M12 3.5C9.7 5.6 8.6 8.4 8.6 12s1.1 6.4 3.4 8.5" />
        </svg>
      );
    case "vfx":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 17.5 10.2 5l3.4 8.2L16 9l3 8.5H5Z" />
          <path d="M17.8 4.5v3.2" />
          <path d="M16.2 6.1h3.2" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
  }
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Creative Technology</p>
          <div className="hero-title-lockup">
            <img
              src={alterationLogo}
              alt=""
              width="512"
              height="512"
              decoding="async"
            />
            <h1>ALTERATION</h1>
          </div>
          <p className="hero-subtitle">From film and games to software development.</p>
          <p className="hero-copy">
            Alteration creates visual content, digital products and interactive experiences for clients who need clear ideas, polished execution and adaptable creative technology.
          </p>
        </div>

        <div className="hero-showcase" aria-label="Alteration portfolio preview">
          <div className="hero-brand-panel">
            <img
              src={alterationLogo}
              alt="Alteration"
              width="512"
              height="512"
              decoding="async"
            />
          </div>

          <div className="hero-image-card hero-image-card-primary">
            <img
              src={dragon}
              alt="Atmospheric fantasy game environment"
              width="6000"
              height="3000"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 720px) 82vw, 32vw"
            />
            <span className="hero-card-label">
              <HeroIcon name="world" />
              <span>
                <strong>Game Worlds</strong>
                <small>Immersive • Real-time • Interactive</small>
              </span>
            </span>
          </div>

          <div className="hero-image-card hero-image-card-secondary">
            <img
              src={duneImage}
              alt="Cinematic visual effects environment"
              width="3380"
              height="1553"
              decoding="async"
              loading="lazy"
              sizes="(max-width: 720px) 62vw, 24vw"
            />
            <span className="hero-card-label">
              <HeroIcon name="vfx" />
              <span>
                <strong>VFX Environments</strong>
                <small>Cinematics • Visual Effects • Atmosphere</small>
              </span>
            </span>
          </div>

          <div className="hero-image-card hero-image-card-tertiary">
            <img
              src={crimeVisionImage}
              alt="Interactive data visualization platform"
              width="2048"
              height="1229"
              decoding="async"
              loading="lazy"
              sizes="(max-width: 720px) 52vw, 20vw"
            />
            <span className="hero-card-label">
              <HeroIcon name="nodes" />
              <span>
                <strong>Interactive</strong>
                <small>Experiences • Gameplay • Systems</small>
              </span>
            </span>
          </div>

          <div className="hero-tech-panel">
            {techTags.map((tag) => (
              <span className="hero-tech-tag" key={tag.label}>
                <HeroIcon name={tag.icon} />
                <span>{tag.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
