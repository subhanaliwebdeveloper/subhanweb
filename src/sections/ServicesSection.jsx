import React from 'react';
import { services } from '../data/siteData';

function ServiceIcon({ icon }) {
  switch (icon) {
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'smartphone':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'layout':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'palette':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'layers':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="2 17 12 22 22 17" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="2 12 12 17 22 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="6" x2="6.01" y2="6" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="6" y1="18" x2="6.01" y2="18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'tool':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'message':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function ServicesSection() {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="services-heading" className="section-title">
            My Services
          </h2>
          <div className="section-underline" aria-hidden="true" />
          <p className="section-subtitle">
            Practical development services tailored for clients, businesses, and project teams.
          </p>
        </header>

        <div className="services-grid">
          {services &&
            services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-icon-box" aria-hidden="true">
                  <ServiceIcon icon={service.icon} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
