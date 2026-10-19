import React, { useState } from 'react';
import { testimonials } from '../data/siteData';

export default function TestimonialsSection() {
  // Only render if testimonials array is not empty
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section" aria-labelledby="testimonials-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="testimonials-heading" className="section-title">
            Testimonials
          </h2>
          <div className="section-underline" aria-hidden="true" />
          <p className="section-subtitle">
            Feedback and words from collaborators and project clients.
          </p>
        </header>

        <div className="testimonial-slider-wrapper" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div className="testimonial-card">
            <blockquote className="testimonial-quote" style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text)' }}>
              “{currentTestimonial.quote}”
            </blockquote>
            <div className="testimonial-author" style={{ fontWeight: '700', color: 'var(--text-headings)' }}>
              {currentTestimonial.author}
            </div>
            <div className="testimonial-role" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              {currentTestimonial.role || currentTestimonial.company}
            </div>
          </div>

          {testimonials.length > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <button type="button" className="btn btn-secondary btn-sm" onClick={prevSlide} aria-label="Previous testimonial">
                ←
              </button>
              <button type="button" className="btn btn-secondary btn-sm" onClick={nextSlide} aria-label="Next testimonial">
                →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
