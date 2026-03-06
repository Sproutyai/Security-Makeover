import Link from 'next/link';
import Image from 'next/image';
import PhoneCTA from './PhoneCTA';

const footerLinks = {
  services: [
    { name: 'Mobile Surveillance Trailers', href: '/mobile-surveillance-trailers' },
    { name: 'Video Surveillance', href: '/commercial/video-surveillance' },
    { name: 'Access Control', href: '/commercial/access-control' },
    { name: 'Alarm Systems', href: '/commercial/alarm-systems' },
    { name: 'Fire Alarm Systems', href: '/commercial/fire-alarms' },
    { name: 'Integrated Solutions', href: '/commercial/integrated-solutions' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/about/case-studies' },
    { name: 'Reviews', href: '/about/reviews' },
    { name: 'Service Areas', href: '/about/service-areas' },
    { name: 'FAQ', href: '/contact/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal relative bg-grid-pattern">
      {/* Gradient top edge replacing plain border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image src="/images/logo.png" alt="All American Alarm" width={180} height={38} className="h-9 w-auto mb-6" />
            <p className="text-medium-gray text-sm leading-relaxed mb-4">
              Southwest Florida&apos;s leader in mobile surveillance trailers and commercial security solutions. Protecting businesses since 2001.
            </p>
            <p className="text-medium-gray text-xs mb-6">
              FL License #EF20002028<br />
              FL License #EG13000164
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2 bg-dark-surface/80 border border-border-dark rounded-lg px-3 py-2">
                <div className="flex text-gold text-xs">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <div className="text-[10px] text-medium-gray leading-tight">
                  <span className="text-white font-semibold block">4.9/5</span>
                  Google Reviews
                </div>
              </div>
              {/* Trusted Since Badge */}
              <div className="flex items-center gap-2 bg-dark-surface/80 border border-border-dark rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div className="text-[10px] text-medium-gray leading-tight">
                  <span className="text-white font-semibold block">Trusted</span>
                  Since 2001
                </div>
              </div>
              {/* FL Licensed Badge */}
              <div className="flex items-center gap-2 bg-dark-surface/80 border border-border-dark rounded-lg px-3 py-2">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div className="text-[10px] text-medium-gray leading-tight">
                  <span className="text-white font-semibold block">FL Licensed</span>
                  & Insured
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + Newsletter */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-medium-gray mb-6">
              <PhoneCTA />
              <p>
                2030 Crawford Street<br />
                Fort Myers, FL 33901
              </p>
              <p>
                <span className="text-white font-semibold">Hours:</span><br />
                Mon–Fri: 8:00 AM – 4:00 PM<br />
                24/7 Emergency Monitoring
              </p>
            </div>

            {/* Newsletter signup */}
            <div className="mt-6">
              <h5 className="text-white font-semibold text-xs uppercase tracking-wide mb-3">Stay Updated</h5>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-navy/70 border border-border-dark rounded-lg text-white text-sm placeholder-medium-gray/60 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue/20 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-electric-blue hover:bg-electric-blue-hover text-white text-sm font-semibold rounded-lg transition-colors duration-200 flex-shrink-0"
                >
                  Join
                </button>
              </form>
              <p className="text-[11px] text-medium-gray/60 mt-2">Security tips & industry updates. No spam.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-dark/60 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-medium-gray">
          <p>&copy; {new Date().getFullYear()} All American Alarm. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">&ldquo;Because We Care&rdquo; — Serving Fort Myers, Naples &amp; Cape Coral</p>
        </div>
      </div>
    </footer>
  );
}
