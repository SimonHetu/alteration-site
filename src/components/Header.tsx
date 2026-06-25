import { useEffect, useRef, useState } from "react";
import alterationLogo from "../assets/images/logo/Logo_Square_01_256.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const activeSectionRef = useRef("home");

  useEffect(() => {
    let sectionOffsets: Array<{ id: string; top: number }> = [];
    let frameRequest: number | null = null;

    const refreshSectionOffsets = () => {
      sectionOffsets = sectionIds
        .map((id) => {
          const section = document.getElementById(id);
          return section ? { id, top: section.offsetTop } : null;
        })
        .filter((section): section is { id: string; top: number } => section !== null);
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      const currentSection =
        sectionOffsets.findLast((section) => section.top <= scrollPosition)?.id ?? "home";

      if (currentSection !== activeSectionRef.current) {
        activeSectionRef.current = currentSection;
        setActiveSection(currentSection);
      }
    };

    const requestActiveSectionUpdate = () => {
      if (frameRequest !== null) {
        return;
      }

      frameRequest = window.requestAnimationFrame(() => {
        frameRequest = null;
        updateActiveSection();
      });
    };

    const handleResize = () => {
      refreshSectionOffsets();
      requestActiveSectionUpdate();
    };

    refreshSectionOffsets();
    requestActiveSectionUpdate();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRequest !== null) {
        window.cancelAnimationFrame(frameRequest);
      }

      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="site-logo" href="#home" aria-label="Alteration home">
        <img
          src={alterationLogo}
          alt=""
          width="256"
          height="256"
          decoding="async"
        />
        <span>ALTERATION</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");

          return (
            <a
              aria-current={activeSection === sectionId ? "page" : undefined}
              className={activeSection === sectionId ? "is-active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
