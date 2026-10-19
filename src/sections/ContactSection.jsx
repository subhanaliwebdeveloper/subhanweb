import React from 'react';
import { email, phone, location, whatsappNumber, whatsappMessage, github, linkedin } from '../data/siteData';
import ContactForm from '../components/ContactForm';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage || 'Assalam o Alaikum Subhan, I saw your portfolio and would like to discuss a project.'
  )}`;

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="contact-heading" className="section-title">
            Contact Me
          </h2>
          <div className="section-underline" aria-hidden="true" />
          <p className="section-subtitle">
            Have a project in mind, an internship opportunity, or want to say hello? Drop me a message or connect directly.
          </p>
        </header>

        <div className="contact-grid">
          {/* Left Column: "Send Message" Form */}
          <div className="contact-form-column">
            <ContactForm />
          </div>

          {/* Right Column: "Get in Touch" Card */}
          <div className="contact-info-card">
            <div>
              <h3 className="contact-info-title">Get in Touch</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                I am currently open to freelance opportunities, contract work, and developer internships.
              </p>
            </div>

            <div className="contact-info-list">
              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-info-text-group">
                  <span className="contact-info-heading">Location</span>
                  <span className="contact-info-val">{location}</span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-info-text-group">
                  <span className="contact-info-heading">Phone / WhatsApp</span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-info-val">
                    {phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-info-text-group">
                  <span className="contact-info-heading">Email</span>
                  <a href={`mailto:${email}`} className="contact-info-val">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icon Links */}
            <div>
              <span className="contact-info-heading" style={{ display: 'block', marginBottom: '0.75rem' }}>
                Follow & Connect
              </span>
              <div className="social-links-row">
                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Direct message on WhatsApp"
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.13-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.204 8.204 0 0 1-1.25-4.42c0-4.54 3.7-8.24 8.24-8.24zm4.8 11.64c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.18.26-.69.86-.85 1.04-.16.18-.31.2-.57.07-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.46.07-.7.33-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.17 1.87 2.85 4.53 4 2.66 1.15 2.66.77 3.14.72.48-.05 1.56-.64 1.78-1.26.22-.61.22-1.14.15-1.26-.06-.11-.23-.18-.49-.31z" />
                  </svg>
                </a>

                {/* GitHub */}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="View GitHub profile"
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}

                {/* LinkedIn */}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="View LinkedIn profile"
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
