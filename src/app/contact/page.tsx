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
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-navy via-navy to-charcoal bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            Get in Touch
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            CONTACT US
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            Whether you need a mobile surveillance trailer deployed tomorrow or a full commercial security upgrade, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column — Contact Info */}
            <div className="pr-0 lg:pr-12">
              {/* Phone — Glowing */}
              <div className="mb-10">
                <h3 className="text-white font-bold text-lg mb-3">Call Us</h3>
                <a
                  href="tel:239-334-7447"
                  className="text-4xl md:text-5xl font-black text-electric-blue text-glow-blue hover:text-electric-blue-hover transition-colors"
                >
                  239-334-7447
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 mt-0.5">
                  <MapPinIcon className="w-5 h-5 text-electric-blue" />
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
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 mt-0.5">
                  <ClockIcon className="w-5 h-5 text-electric-blue" />
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
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 mt-0.5">
                  <ShieldIcon className="w-5 h-5 text-electric-blue" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Florida Licensed &amp; Insured</h3>
                  <p className="text-medium-gray">
                    FL License #EF20002028<br />
                    FL License #EG13000164
                  </p>
                </div>
              </div>

              {/* Map — Taller */}
              <div className="glass-card overflow-hidden p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.123456789!2d-81.8723!3d26.6406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2030+Crawford+Street+Fort+Myers+FL+33901!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="All American Alarm Office Location"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:flex items-stretch absolute left-1/2 top-0 bottom-0 -translate-x-1/2 py-8">
              <div className="w-px bg-gradient-to-b from-transparent via-electric-blue/30 to-transparent" />
            </div>

            {/* Right Column — Contact Form */}
            <div className="pl-0 lg:pl-12 mt-12 lg:mt-0">
              <ContactForm
                formType="contact"
                title="Send Us a Message"
                subtitle="We'll respond within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
