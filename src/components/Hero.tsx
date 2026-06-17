import alterationLogo from "../assets/images/logo/logo-alteration-small.png";
import duneImage from "../assets/images/film/dune/dune-arrakis-01.jpg";
import dragon from "../assets/images/games/dragon.jpg";
import yakuzaImage from "../assets/images/games/yakuza_street-racing.jpg";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Creative Technology</p>
          <h1>ALTERATION</h1>
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
              width="4096"
              height="2304"
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
            <span>Game Worlds</span>
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
            <span>VFX Environments</span>
          </div>

          <div className="hero-image-card hero-image-card-tertiary">
            <img
              src={yakuzaImage}
              alt="Interactive urban game concept"
              width="3204"
              height="1804"
              decoding="async"
              loading="lazy"
              sizes="(max-width: 720px) 52vw, 20vw"
            />
            <span>Interactive</span>
          </div>

          <div className="hero-tech-panel">
            <span>Software</span>
            <span>3D</span>
            <span>Pipeline</span>
            <span>Realtime</span>
            <span>Tools</span>
            <span>Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
