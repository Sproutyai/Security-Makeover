import ContactForm from '@/components/ContactForm';
import PhoneCTA from '@/components/PhoneCTA';
import { MapPinIcon, ClockIcon, ShieldIcon } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with All American Alarm. Call 239-334-7447 or send us a message. Located at 2030 Crawford Street, Fort Myers, FL 33901.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column — Contact Info */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-medium-gray text-lg mb-10 leading-relaxed">
              Whether you need a mobile surveillance trailer deployed tomorrow or a full commercial security upgrade, we&apos;re here to help.
            </p>

            {/* Phone */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <a
                href="tel:239-334-7447"
                className="text-3xl font-extrabold text-electric-blue hover:text-electric-blue-hover transition-colors"
              >
                239-334-7447
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-electric-blue flex-shrink-0 mt-1">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Our Office</h3>
                <p className="text-medium-gray">
                  2030 Crawford Street<br />
                  Fort Myers, FL 33901
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-electric-blue flex-shrink-0 mt-1">
                <ClockIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Business Hours</h3>
                <p className="text-medium-gray">
                  Monday – Friday: 8:00 AM – 4:00 PM<br />
                  <span className="text-electric-blue font-semibold">24/7 Emergency Monitoring</span>
                </p>
              </div>
            </div>

            {/* Licenses */}
            <div className="flex items-start gap-4 mb-10">
              <div className="text-electric-blue flex-shrink-0 mt-1">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Florida Licensed &amp; Insured</h3>
                <p className="text-medium-gray">
                  FL License #EF20002028<br />
                  FL License #EG13000164
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden border border-border-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789!2d-81.8723!3d26.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2030+Crawford+Street+Fort+Myers+FL+33901!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="All American Alarm Office Location"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div>
            <ContactForm
              formType="contact"
              title="Send Us a Message"
              subtitle="We'll respond within 24 hours."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
