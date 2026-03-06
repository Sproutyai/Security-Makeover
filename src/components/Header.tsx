'use client';

import { useState, useEffect, useRef } from 'react';
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [mobileMenuHeight, setMobileMenuHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      setMobileMenuHeight(mobileMenuRef.current.scrollHeight);
    } else {
      setMobileMenuHeight(0);
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,180,216,0.15),0_4px_20px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar with phone and license */}
      <div
        className={`hidden md:block border-b border-border-dark/50 transition-all duration-300 ${
          scrolled ? 'bg-charcoal/80 backdrop-blur-sm' : 'bg-charcoal/60'
        }`}
      >
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
              <Link
                href={item.href}
                className="text-white hover:text-electric-blue transition-colors font-medium text-sm uppercase tracking-wide py-2 flex items-center gap-1"
              >
                {item.name}
                {item.children && (
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-all group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="glass-card rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,180,216,0.1)] py-2 min-w-[240px] overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-medium-gray hover:text-white hover:bg-electric-blue/10 transition-all duration-200"
                      >
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
          <CTAButton href="/contact/quote" size="sm" variant="primary">
            Get a Quote
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 hover:text-electric-blue transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu — smooth height/opacity transition */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: mobileMenuHeight,
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div ref={mobileMenuRef} className="glass border-t border-electric-blue/10">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white font-semibold text-lg py-2 hover:text-electric-blue transition-colors"
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-medium-gray pl-4 py-1.5 text-sm hover:text-electric-blue transition-colors"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-border-dark/50">
              <PhoneCTA className="mb-3" />
              <CTAButton href="/contact/quote" size="md" className="w-full text-center">
                Get a Quote
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
