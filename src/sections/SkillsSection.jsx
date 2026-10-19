import React from 'react';
import { skills } from '../data/siteData';

export default function SkillsSection() {
  const categories = Object.keys(skills || {});

  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="container">
        <header className="section-header">
          <span className="section-label">02 // Capabilities</span>
          <h2 id="skills-heading" className="section-title">
            Skills & Tooling
          </h2>
          <p className="section-subtitle">
            Core technical foundation practiced through practical coding, personal projects, and continuous learning.
          </p>
        </header>

        <div className="skills-grid">
          {categories.map((category) => {
            const list = skills[category] || [];
            return (
              <div key={category} className="skill-card">
                <div className="skill-category-header">
                  <h3 className="skill-category-title">{category}</h3>
                  <span className="skill-count">{list.length} skills</span>
                </div>

                <div className="skill-tag-list">
                  {list.map((skill, idx) => (
                    <span key={idx} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
