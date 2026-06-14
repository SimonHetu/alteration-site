import { useEffect } from "react";

export type ProjectDetail = {
  title: string;
  category?: string;
  role?: string;
  description: string;
  image?: string;
  images?: string[];
};

type ProjectDetailModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  if (!project) {
    return null;
  }

  const images = project.images ?? (project.image ? [project.image] : []);
  const label = project.role ?? project.category;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        aria-modal="true"
        className="project-modal"
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>

        <div className="modal-content">
          <div className="modal-header">
            {label && <p className="portfolio-role">{label}</p>}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>

          {images.length === 1 && (
            <img className="modal-image-single" src={images[0]} alt={project.title} />
          )}

          {images.length > 1 && (
            <div className="modal-image-grid">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
