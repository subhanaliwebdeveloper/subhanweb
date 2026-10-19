import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../data/siteData';

function AnimatedCounter({ value, suffix = '', duration = 1200 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If user prefers reduced motion, set value directly
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value, 10);
          if (isNaN(end) || end <= 0) {
            setCount(value);
            return;
          }

          const totalSteps = 30;
          const stepTime = Math.max(16, Math.floor(duration / totalSteps));
          const increment = end / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [value, duration]);

  return (
    <span ref={elementRef} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="stats-banner" aria-label="Development Statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix || ''}
              />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
