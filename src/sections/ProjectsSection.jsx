import React, { useState } from 'react';
import { projects } from '../data/siteData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Web', 'Mobile'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category?.toLowerCase() === activeFilter.toLowerCase();
  });

  return (
    <section id="portfolio" className="section section-alt" aria-labelledby="portfolio-heading">
      <div className="container">
        <header className="section-header">
          <h2 id="portfolio-heading" className="section-title">
            My Portfolio
          </h2>
          <div className="section-underline" aria-hidden="true" />
          <p className="section-subtitle">
            A filterable showcase of full-stack web applications and mobile apps built with clean code and modern frameworks.
          </p>
        </header>

        {/* Filter Tabs: All, Web, Mobile */}
        <div className="portfolio-filter-tabs" role="tablist" aria-label="Portfolio Categories">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
