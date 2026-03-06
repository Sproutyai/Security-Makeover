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
    <footer className="bg-charcoal border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image src="/images/logo.png" alt="All American Alarm" width={180} height={38} className="h-9 w-auto mb-6" />
            <p className="text-medium-gray text-sm leading-relaxed mb-4">
              Southwest Florida&apos;s leader in mobile surveillance trailers and commercial security solutions. Protecting businesses since 2001.
            </p>
            <p className="text-medium-gray text-xs">
              FL License #EF20002028<br />
              FL License #EG13000164
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-medium-gray text-sm hover:text-electric-blue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-medium-gray">
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
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-medium-gray">
          <p>&copy; {new Date().getFullYear()} All American Alarm. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">&ldquo;Because We Care&rdquo; — Serving Fort Myers, Naples &amp; Cape Coral</p>
        </div>
      </div>
    </footer>
  );
}
