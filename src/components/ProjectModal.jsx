import React, { useEffect } from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { title, description, fullDescription, role, tech, image, liveUrl, githubUrl } = project;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="modal-media">
          <ImageWithFallback
            src={image}
            alt={`Screenshot of ${title}`}
            fallbackTitle={title}
            width="800"
            height="450"
          />
        </div>

        <div className="modal-meta-row">
          <span className="tag">{role}</span>
        </div>

        <h3 id="modal-project-title" className="modal-title">
          {title}
        </h3>

        <p className="modal-description">
          {fullDescription || description}
        </p>

        <div className="modal-tech-list">
          {tech &&
            tech.map((t, idx) => (
              <span key={idx} className="tag">
                {t}
              </span>
            ))}
        </div>

        <div className="modal-actions">
          {liveUrl && liveUrl.trim() !== '' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Live Demo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}

          {githubUrl && githubUrl.trim() !== '' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Source Code (GitHub)
            </a>
          )}

          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
