import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import linkedInIcon from "../assets/images/logo/LinkedIn_icon.svg.png";
import githubIcon from "../assets/images/logo/Octicons-mark-github.svg.png";

const emailAddress = "shetu@alterationgames.com";

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.75 6.75h14.5v10.5H4.75V6.75Z" />
      <path d="m5.25 7.25 6.75 5.5 6.75-5.5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 8.75h8.5v10H8v-10Z" />
      <path d="M5.5 15.25V5.5h9.25" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m5.5 12.5 4.1 4.1 8.9-9.2" />
    </svg>
  );
}

function Contact() {
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(emailAddress);
    } else {
      const copyField = document.createElement("textarea");
      copyField.value = emailAddress;
      copyField.style.position = "fixed";
      copyField.style.opacity = "0";
      document.body.appendChild(copyField);
      copyField.select();
      document.execCommand("copy");
      document.body.removeChild(copyField);
    }

    setHasCopiedEmail(true);

    if (copyTimeoutRef.current !== null) {
      window.clearTimeout(copyTimeoutRef.current);
    }

    copyTimeoutRef.current = window.setTimeout(() => {
      setHasCopiedEmail(false);
      copyTimeoutRef.current = null;
    }, 1600);
  };

  const openEmailClient = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleEmailCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEmailClient();
    }
  };

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
          <article
            className="content-card contact-card contact-card-clickable"
            role="link"
            tabIndex={0}
            onClick={openEmailClient}
            onKeyDown={handleEmailCardKeyDown}
          >
            <h3>Email</h3>
            <p className="contact-platform-icon contact-platform-icon-email" aria-label="Email">
              <EmailIcon />
            </p>
            <div className="contact-email-row">
              <p className="contact-email-address">{emailAddress}</p>
              <button
                aria-label={hasCopiedEmail ? "Email address copied" : "Copy email address"}
                className="contact-copy-button"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  void copyEmail();
                }}
                onKeyDown={(event) => event.stopPropagation()}
              >
                {hasCopiedEmail ? <CheckIcon /> : <CopyIcon />}
                <span>{hasCopiedEmail ? "Copied" : "Copy address"}</span>
              </button>
            </div>
            <div className="contact-card-actions">
              <span className="contact-card-link">Send a message</span>
            </div>
          </article>
          <a
            className="content-card contact-card"
            href="https://www.linkedin.com/in/simon-hetu-6837a31b/"
            rel="noreferrer"
            target="_blank"
          >
            <h3>LinkedIn</h3>
            <p className="contact-platform-icon" aria-label="LinkedIn">
              <img src={linkedInIcon} alt="" width="34" height="34" decoding="async" />
            </p>
            <span>Connect professionally</span>
          </a>
          <a
            className="content-card contact-card"
            href="https://github.com/SimonHetu"
            rel="noreferrer"
            target="_blank"
          >
            <h3>GitHub</h3>
            <p className="contact-platform-icon" aria-label="GitHub">
              <img
                className="contact-platform-icon-github"
                src={githubIcon}
                alt=""
                width="34"
                height="34"
                decoding="async"
              />
            </p>
            <span>View code and projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
