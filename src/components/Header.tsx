'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PhoneCTA from './PhoneCTA';
import CTAButton from './CTAButton';

const navigation = [
  {
    name: 'Mobile Surveillance',
    href: '/mobile-surveillance-trailers',
    children: [
      { name: 'How It Works', href: '/mobile-surveillance-trailers/how-it-works' },
      { name: 'Features & Technology', href: '/mobile-surveillance-trailers/features' },
      { name: 'Industries We Serve', href: '/mobile-surveillance-trailers/industries' },
    ],
  },
  {
    name: 'Commercial Security',
    href: '/commercial',
    children: [
      { name: 'Video Surveillance', href: '/commercial/video-surveillance' },
      { name: 'Access Control', href: '/commercial/access-control' },
      { name: 'Alarm Systems', href: '/commercial/alarm-systems' },
      { name: 'Fire Alarm Systems', href: '/commercial/fire-alarms' },
      { name: 'Integrated Solutions', href: '/commercial/integrated-solutions' },
    ],
  },
  {
    name: 'About',
    href: '/about',
    children: [
      { name: 'Our Story', href: '/about' },
      { name: 'Case Studies', href: '/about/case-studies' },
      { name: 'Reviews', href: '/about/reviews' },
      { name: 'Service Areas', href: '/about/service-areas' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Top bar with phone and license */}
      <div className="hidden md:block bg-charcoal border-b border-border-dark">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex justify-between items-center text-xs text-medium-gray">
          <span>FL License #EF20002028 | Serving Southwest Florida Since 2001</span>
          <PhoneCTA className="text-xs" />
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo.png" alt="All American Alarm" width={200} height={42} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link href={item.href} className="text-white hover:text-electric-blue transition-colors font-medium text-sm uppercase tracking-wide py-2">
                {item.name}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-charcoal border border-border-dark rounded-lg shadow-xl py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link key={child.name} href={child.href} className="block px-4 py-2.5 text-sm text-medium-gray hover:text-white hover:bg-navy transition-colors">
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <PhoneCTA />
          <CTAButton href="/contact/quote" size="sm">Get a Quote</CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-charcoal border-t border-border-dark">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block text-white font-semibold text-lg py-2">
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.name} href={child.href} onClick={() => setMobileOpen(false)} className="block text-medium-gray pl-4 py-1.5 text-sm hover:text-electric-blue">
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-border-dark">
              <PhoneCTA className="mb-3" />
              <CTAButton href="/contact/quote" size="md" className="w-full text-center">Get a Quote</CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
