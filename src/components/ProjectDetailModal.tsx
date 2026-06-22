import { useCallback, useEffect, useState } from "react";

export type ProjectDetail = {
  title: string;
  category?: string;
  role?: string;
  tools?: string[] | string;
  year?: string;
  website?: {
    label?: string;
    url: string;
  };
  description: string;
  image?: string;
  images?: string[];
};

type ProjectDetailModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

type ZoomedImageState = {
  projectKey: string;
  imageIndex: number;
};

const getDefaultTools = (category?: string) => {
  if (!category) {
    return "Creative technology";
  }

  const normalizedCategory = category.toLowerCase();

  if (normalizedCategory.includes("film")) {
    return "DMP, environments, VFX pipeline";
  }

  if (normalizedCategory.includes("game")) {
    return "Worldbuilding, concept art, realtime direction";
  }

  if (normalizedCategory.includes("wordpress")) {
    return "WordPress, PHP, MySQL, ACF";
  }

  if (
    normalizedCategory.includes("web") ||
    normalizedCategory.includes("application")
  ) {
    return "Frontend, application architecture, Git workflows";
  }

  return "Creative technology";
};

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [zoomedImageState, setZoomedImageState] =
    useState<ZoomedImageState | null>(null);
  const images = project?.images ?? (project?.image ? [project.image] : []);
  const projectKey = project?.title ?? "";
  const zoomedImageIndex =
    zoomedImageState?.projectKey === projectKey ? zoomedImageState.imageIndex : null;
  const zoomedImage =
    zoomedImageIndex === null ? null : images[zoomedImageIndex] ?? null;
  const hasMultipleImages = images.length > 1;
  const imageCount = images.length;

  const closeProject = useCallback(() => {
    setZoomedImageState(null);
    onClose();
  }, [onClose]);

  const openImage = useCallback(
    (imageIndex: number) => {
      setZoomedImageState({ projectKey, imageIndex });
    },
    [projectKey],
  );

  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedImage) {
          setZoomedImageState(null);
          return;
        }

        closeProject();
      }

      if (!zoomedImage || !hasMultipleImages) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setZoomedImageState((currentState) =>
          currentState === null
            ? currentState
            : {
                ...currentState,
                imageIndex: (currentState.imageIndex - 1 + images.length) % images.length,
              },
        );
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setZoomedImageState((currentState) =>
          currentState === null
            ? currentState
            : {
                ...currentState,
                imageIndex: (currentState.imageIndex + 1) % images.length,
              },
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeProject, hasMultipleImages, images.length, project, zoomedImage]);

  useEffect(() => {
    if (!zoomedImage) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [zoomedImage]);

  const showPreviousImage = useCallback(() => {
    setZoomedImageState((currentState) =>
      currentState === null
        ? currentState
        : {
            ...currentState,
            imageIndex: (currentState.imageIndex - 1 + images.length) % images.length,
          },
    );
  }, [images.length]);

  const showNextImage = useCallback(() => {
    setZoomedImageState((currentState) =>
      currentState === null
        ? currentState
        : {
            ...currentState,
            imageIndex: (currentState.imageIndex + 1) % images.length,
          },
    );
  }, [images.length]);

  if (!project) {
    return null;
  }

  const label = project.role ?? project.category;
  const tools = Array.isArray(project.tools)
    ? project.tools.join(", ")
    : project.tools ?? getDefaultTools(project.category);
  const metadataItems = [
    { label: "Role", value: project.role ?? "Creative technologist" },
    { label: "Tools", value: tools },
    { label: "Category", value: project.category ?? "Portfolio work" },
    { label: "Year", value: project.year ?? "Selected work" },
  ];

  return (
    <div className="modal-overlay" onClick={closeProject}>
      <div
        aria-modal="true"
        className="project-modal"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={closeProject}>
          Close
        </button>

        <div className="modal-content">
          <div className="modal-header">
            {label && <p className="portfolio-role">{label}</p>}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.website && (
              <a
                className="project-website-link"
                href={project.website.url}
                rel="noreferrer"
                target="_blank"
              >
                {project.website.label ?? project.website.url}
              </a>
            )}
          </div>

          <dl className="project-metadata">
            {metadataItems.map((item) => (
              <div className="project-metadata-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          {images.length === 1 && (
            <button
              className="modal-image-button"
              type="button"
              onClick={() => openImage(0)}
            >
              <img
                className="modal-image-single"
                src={images[0]}
                alt={project.title}
                decoding="async"
                loading="lazy"
              />
            </button>
          )}

          {images.length > 1 && (
            <div className="modal-image-grid">
              {images.map((image, index) => (
                <button
                  className="modal-image-button"
                  key={image}
                  type="button"
                  onClick={() => openImage(index)}
                >
                  <img
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    decoding="async"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {zoomedImage && (
        <div
          aria-modal="true"
          className="image-zoom-overlay"
          role="dialog"
          onClick={(event) => {
            event.stopPropagation();
            setZoomedImageState(null);
          }}
        >
          <button
            className="zoom-close"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setZoomedImageState(null);
            }}
            aria-label="Close image viewer"
          >
            Close
          </button>

          <div className="zoom-counter" aria-live="polite">
            {(zoomedImageIndex ?? 0) + 1} / {imageCount}
          </div>

          {hasMultipleImages && (
            <>
              <button
                aria-label="Previous image"
                className="zoom-nav zoom-nav-previous"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
              >
                &lt;
              </button>
              <button
                aria-label="Next image"
                className="zoom-nav zoom-nav-next"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
              >
                &gt;
              </button>
            </>
          )}

          <img
            key={zoomedImage}
            className="image-zoom"
            src={zoomedImage}
            alt={`${project.title} enlarged view`}
            decoding="async"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectDetailModal;
