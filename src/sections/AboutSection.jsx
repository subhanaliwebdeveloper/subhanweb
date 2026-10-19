import { about, infoCard, skills, profileImage, name, cvPath } from '../data/siteData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function AboutSection() {
  return (
    <section id="about" className="section section-alt" aria-labelledby="about-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="about-heading" className="section-title">
            About Me
          </h2>
          <div className="section-underline" aria-hidden="true" />
          <p className="section-subtitle">
            A short introduction to my background, current studies, and technical foundation.
          </p>
        </header>

        <div className="about-grid">
          {/* Left Column: Photo + Info Card + Skills with Progress Bars */}
          <div className="about-left-col">
            <div className="about-photo-wrapper">
              <ImageWithFallback
                src={profileImage}
                alt={`${name} profile photo`}
                fallbackTitle={name}
                width="320"
                height="320"
                loading="lazy"
              />
            </div>

            {/* Info Card */}
            {infoCard && (
              <div className="info-card" aria-label="Personal Details">
                {Object.entries(infoCard).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}:</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Skills List with Progress Bars */}
            <div className="skills-list-container" aria-label="Technical Skills & Proficiencies">
              <h3 className="skills-list-title">Technical Skills</h3>
              {skills &&
                skills.map((skill, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span>{skill.name}</span>
                      <span className="skill-bar-percent">{skill.level}%</span>
                    </div>
                    <div
                      className="skill-bar-track"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={`${skill.name} proficiency`}
                    >
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Right Column: "About me" Paragraphs */}
          <div className="about-right-col">
            <div className="about-section-heading">
              <h3 className="section-title">Who I Am</h3>
              <div className="section-underline" aria-hidden="true" />
            </div>

            {about &&
              about.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">
                  {paragraph}
                </p>
              ))}

            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href={cvPath}
                download
                className="btn btn-secondary"
                aria-label="Download CV"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
