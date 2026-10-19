import React, { useState } from 'react';

/**
 * Image component with graceful editorial fallback.
 * If the image fails to load or is not yet provided, displays a clean neutral
 * geometric placeholder instead of an ugly broken browser icon.
 */
export default function ImageWithFallback({
  src,
  alt,
  fallbackTitle,
  className = '',
  width,
  height,
  loading = 'lazy',
  ...props
}) {
  const [hasError, setHasError] = useState(!src);

  if (hasError || !src) {
    return (
      <div className={`image-wrapper ${className}`} role="img" aria-label={alt || fallbackTitle || 'Placeholder'}>
        <div className="image-fallback">
          <svg
            className="image-fallback-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path d="M21 15l-5-5L5 21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {fallbackTitle && <span className="image-fallback-title">{fallbackTitle}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={`image-wrapper ${className}`}>
      <img
        src={src}
        alt={alt || fallbackTitle || ''}
        width={width}
        height={height}
        loading={loading}
        onError={() => setHasError(true)}
        {...props}
      />
    </div>
  );
}
