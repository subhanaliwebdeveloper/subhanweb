import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export default function ProjectCard({ project, onSelectProject }) {
  const { title, category, description, tech, image, liveUrl, githubUrl } = project;

  const hasLiveUrl = liveUrl && liveUrl.trim() !== '';
  const hasGithubUrl = githubUrl && githubUrl.trim() !== '';

  return (
    <article className="portfolio-card">
      {/* Media / Screenshot with Hover Overlay */}
      <div
        className="portfolio-media"
        onClick={() => onSelectProject && onSelectProject(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectProject && onSelectProject(project);
          }
        }}
        aria-label={`View details and lightbox for ${title}`}
      >
        <ImageWithFallback
          src={image}
          alt={`Screenshot of ${title}`}
          fallbackTitle={title}
          width="600"
          height="338"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="portfolio-overlay">
          {hasLiveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Live Demo for ${title}`}
            >
              Live Demo
            </a>
          )}

          {hasGithubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              onClick={(e) => e.stopPropagation()}
              aria-label={`GitHub Repository for ${title}`}
            >
              GitHub
            </a>
          )}

          {/* Details / View button */}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProject && onSelectProject(project);
            }}
          >
            Details
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="portfolio-body">
        <span className="portfolio-category-badge">{category}</span>
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-desc">{description}</p>

        {/* One-line Tech Description Tags */}
        <div className="portfolio-tech-row" aria-label="Technologies used">
          {tech &&
            tech.map((t, idx) => (
              <span key={idx} className="tag">
                {t}
              </span>
            ))}
        </div>
      </div>
    </article>
  );
}
