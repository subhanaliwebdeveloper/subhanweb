import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import ProjectsSection from './sections/ProjectsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy([
    'home',
    'about',
    'services',
    'portfolio',
    'contact'
  ]);

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a href="#main-content" className="sr-only focus-visible:not-sr-only">
        Skip to main content
      </a>

      {/* 1. Sticky Navbar */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Sections in Exact Order */}
      <main id="main-content">
        {/* 2. Hero (Home) */}
        <HeroSection />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Services */}
        <ServicesSection />

        {/* 5. Stats Counters */}
        <StatsSection />

        {/* 6. Portfolio */}
        <ProjectsSection />

        {/* 7. Testimonials (Rendered ONLY if testimonials array is not empty) */}
        <TestimonialsSection />

        {/* 8. Contact */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />
    </>
  );
}
