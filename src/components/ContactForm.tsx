'use client';

import { useState } from 'react';

interface ContactFormProps {
  formType?: 'contact' | 'quote' | 'deployment';
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ formType = 'contact', title, subtitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const serviceOptions = [
    'Mobile Surveillance Trailer',
    'Video Surveillance',
    'Access Control',
    'Alarm Systems',
    'Fire Alarm Systems',
    'Integrated Security Solution',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic — can integrate with API route later
    alert('Thank you! We will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dark-surface border border-border-dark rounded-lg p-8">
      {title && <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>}
      {subtitle && <p className="text-medium-gray mb-6">{subtitle}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text" name="name" placeholder="Full Name *" required
            value={formData.name} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
          <input
            type="email" name="email" placeholder="Email Address *" required
            value={formData.email} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel" name="phone" placeholder="Phone Number *" required
            value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
          <input
            type="text" name="company" placeholder="Company Name"
            value={formData.company} onChange={handleChange}
            className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
          />
        </div>
        <select
          name="service" value={formData.service} onChange={handleChange}
          className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
        >
          <option value="">Select a Service</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {formType === 'deployment' && (
          <>
            <input
              type="text" name="location" placeholder="Deployment Location / Address"
              className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors"
            />
            <select
              name="timeline"
              className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors"
            >
              <option value="">Deployment Timeline</option>
              <option value="asap">ASAP / Emergency</option>
              <option value="week">Within a Week</option>
              <option value="month">Within a Month</option>
              <option value="planning">Still Planning</option>
            </select>
          </>
        )}
        <textarea
          name="message" placeholder={formType === 'deployment' ? 'Tell us about your site and security needs...' : 'How can we help?'}
          rows={4}
          value={formData.message} onChange={handleChange}
          className="w-full px-4 py-3 bg-navy border border-border-dark rounded-lg text-white placeholder-medium-gray focus:border-electric-blue focus:outline-none transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full bg-red text-white font-bold py-4 rounded-full hover:bg-red-hover transition-colors uppercase tracking-wide text-lg"
        >
          {formType === 'deployment' ? 'Request Deployment' : formType === 'quote' ? 'Get Your Free Quote' : 'Send Message'}
        </button>
        <p className="text-medium-gray text-xs text-center">
          Or call us directly: <a href="tel:239-334-7447" className="text-electric-blue font-semibold">239-334-7447</a>
        </p>
      </form>
    </div>
  );
}
