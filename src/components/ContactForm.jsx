import React, { useState } from 'react';
import { formspreeId } from '../data/siteData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    // Name min 3 chars
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    // Valid email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Subject min 8 chars
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 8) {
      newErrors.subject = 'Subject must be at least 8 characters.';
    }

    // Message required
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    // Check if user still has the placeholder formspreeId
    if (!formspreeId || formspreeId === 'YOUR_FORMSPREE_ID') {
      setTimeout(() => {
        setStatus('success');
        setStatusMessage(
          'Message simulated successfully! (To receive real client emails, add your actual Formspree ID to src/data/siteData.js).'
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 600);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you. Your message has been sent successfully. I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setStatusMessage(
          data?.error || 'There was an issue sending your message. Please reach out via WhatsApp or email directly.'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please try again or reach out directly at subhanranarana659@gmail.com.');
    }
  };

  return (
    <div className="form-card">
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-headings)', marginBottom: '1.25rem' }}>
        Send Message
      </h3>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {status === 'success' && (
          <div className="form-status-alert success" role="alert">
            {statusMessage}
          </div>
        )}

        {status === 'error' && (
          <div className="form-status-alert error" role="alert">
            {statusMessage}
          </div>
        )}

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={`form-input ${errors.name ? 'has-error' : ''}`}
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className="form-error-msg">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`form-input ${errors.email ? 'has-error' : ''}`}
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <span id="email-error" className="form-error-msg">
              {errors.email}
            </span>
          )}
        </div>

        {/* Subject Field (min 8 chars) */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject <span aria-hidden="true">*</span>
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className={`form-input ${errors.subject ? 'has-error' : ''}`}
            placeholder="e.g. Web Development Inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && (
            <span id="subject-error" className="form-error-msg">
              {errors.subject}
            </span>
          )}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={`form-textarea ${errors.message ? 'has-error' : ''}`}
            placeholder="Describe your project, timeline, or inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span id="message-error" className="form-error-msg">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
