import React, { useState, useEffect } from 'react';
import { name, roles, tagline, cvPath, profileImage } from '../data/siteData';
import ImageWithFallback from '../components/ImageWithFallback';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const currentWord = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      // Typing forward
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, 90);
      } else {
        // Pause at the end of word
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1600);
      }
    } else {
      // Deleting backward
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }, 45);
      } else {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero-section" aria-label="Introduction">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Text & Buttons */}
          <div className="hero-content">
            <span className="hero-greeting">Welcome to my portfolio</span>
            <h1 className="hero-name">I'm {name}</h1>

            <div className="hero-role-line">
              <span>I am a</span>
              <span className="typewriter-container">
                <span className="typewriter-text">{currentText}</span>
                <span className="typewriter-cursor" aria-hidden="true">|</span>
              </span>
            </div>

            <p className="hero-statement">{tagline}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                HAVE A PROJECT?
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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

          {/* Right Column: Profile Photo */}
          <div className="hero-image-col">
            <div className="hero-image-wrapper">
              <ImageWithFallback
                src={profileImage}
                alt={`${name} portrait`}
                fallbackTitle={name}
                width="380"
                height="380"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
