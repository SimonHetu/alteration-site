import { useEffect, useRef, useState, type MouseEvent } from "react";
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
  const navAnimationRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);
  const previousScrollBehaviorRef = useRef<string | null>(null);

  useEffect(() => {
    let frameRequest: number | null = null;

    const updateActiveSection = () => {
      if (isProgrammaticScrollRef.current) {
        return;
      }

      const viewportMarker = Math.min(window.innerHeight * 0.35, 220);
      const bottomDistance =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      const currentSection =
        bottomDistance <= 2
          ? sectionIds[sectionIds.length - 1]
          : sectionIds.reduce((activeId, id) => {
              const section = document.getElementById(id);

              if (!section) {
                return activeId;
              }

              const { top } = section.getBoundingClientRect();
              return top <= viewportMarker ? id : activeId;
            }, "home");

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

    requestActiveSectionUpdate();
    window.addEventListener("scroll", requestActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", requestActiveSectionUpdate);

    return () => {
      if (frameRequest !== null) {
        window.cancelAnimationFrame(frameRequest);
      }

      window.removeEventListener("scroll", requestActiveSectionUpdate);
      window.removeEventListener("resize", requestActiveSectionUpdate);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (navAnimationRef.current !== null) {
        window.cancelAnimationFrame(navAnimationRef.current);
      }

      if (previousScrollBehaviorRef.current !== null) {
        document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current;
      }
    };
  }, []);

  const setCurrentSection = (sectionId: string) => {
    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);
  };

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) {
      setCurrentSection(sectionId);
      return;
    }

    event.preventDefault();

    if (navAnimationRef.current !== null) {
      window.cancelAnimationFrame(navAnimationRef.current);
    }

    if (previousScrollBehaviorRef.current === null) {
      previousScrollBehaviorRef.current = document.documentElement.style.scrollBehavior;
    }

    document.documentElement.style.scrollBehavior = "auto";

    const startIndex = Math.max(sectionIds.indexOf(activeSectionRef.current), 0);
    const targetIndex = sectionIds.indexOf(sectionId);
    const path =
      targetIndex >= startIndex
        ? sectionIds.slice(startIndex, targetIndex + 1)
        : sectionIds.slice(targetIndex, startIndex + 1).reverse();

    const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
    const startY = window.scrollY;
    const maxTargetY = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = Math.max(
      0,
      Math.min(maxTargetY, startY + target.getBoundingClientRect().top - scrollMarginTop),
    );
    const distance = Math.abs(targetY - startY);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 0 : Math.min(1250, Math.max(680, distance * 0.42));
    const startTime = performance.now();

    isProgrammaticScrollRef.current = true;
    window.history.pushState(null, "", `#${sectionId}`);

    const easeInOutCubic = (progress: number) =>
      progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

    const animate = (time: number) => {
      const progress = duration === 0 ? 1 : Math.min((time - startTime) / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      const pathIndex =
        path.length <= 2
          ? path.length - 1
          : Math.min(path.length - 1, Math.floor(progress * path.length));

      setCurrentSection(path[pathIndex]);
      window.scrollTo(0, startY + (targetY - startY) * easedProgress);

      if (progress < 1) {
        navAnimationRef.current = window.requestAnimationFrame(animate);
        return;
      }

      navAnimationRef.current = null;
      isProgrammaticScrollRef.current = false;
      document.documentElement.style.scrollBehavior = previousScrollBehaviorRef.current ?? "";
      previousScrollBehaviorRef.current = null;
      setCurrentSection(sectionId);
    };

    navAnimationRef.current = window.requestAnimationFrame(animate);
  };

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
              onClick={(event) => handleNavClick(event, sectionId)}
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
