import React from 'react';
import { whatsappNumber, whatsappMessage } from '../data/siteData';

export default function FloatingWhatsApp() {
  if (!whatsappNumber) return null;

  const encodedMessage = encodeURIComponent(whatsappMessage || 'Hello Subhan, I would like to discuss a project.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Direct message on WhatsApp"
      title="Direct message on WhatsApp"
    >
      <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
      {/* WhatsApp SVG Icon */}
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.212 8.212 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.45 0-2.88-.38-4.13-1.11l-.3-.17-3.12.82.83-3.04-.19-.31a8.204 8.204 0 0 1-1.25-4.42c0-4.54 3.7-8.24 8.24-8.24zm4.8 11.64c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.18.26-.69.86-.85 1.04-.16.18-.31.2-.57.07-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.46.07-.7.33-.24.26-.93.91-.93 2.22s.95 2.58 1.08 2.76c.13.17 1.87 2.85 4.53 4 2.66 1.15 2.66.77 3.14.72.48-.05 1.56-.64 1.78-1.26.22-.61.22-1.14.15-1.26-.06-.11-.23-.18-.49-.31z" />
      </svg>
    </a>
  );
}
