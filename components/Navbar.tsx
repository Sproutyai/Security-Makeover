"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-navy z-50 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-7">
        {/* Logo */}
        <Link href="/" className="font-[var(--font-jakarta)] text-white text-2xl font-bold tracking-tight">
          LeapStack
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-5">
          <li>
            <Link href="#hero" className="font-[var(--font-jakarta)] text-white text-lg font-semibold hover:opacity-80 transition-opacity">
              Home
            </Link>
          </li>
          <li>
            <Link href="#system" className="font-[var(--font-jakarta)] text-white text-lg font-semibold hover:opacity-80 transition-opacity">
              Services
            </Link>
          </li>
          <li>
            <Link href="#faq" className="font-[var(--font-jakarta)] text-white text-lg font-semibold hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="#faq"
          className="hidden md:inline-block bg-cta-blue text-white font-[var(--font-jakarta)] text-base font-normal rounded-full px-6 py-4 hover:opacity-90 transition-opacity"
        >
          Book A Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="#hero" onClick={() => setMenuOpen(false)} className="text-white text-lg font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="#system" onClick={() => setMenuOpen(false)} className="text-white text-lg font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="#faq" onClick={() => setMenuOpen(false)} className="text-white text-lg font-semibold">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-block bg-cta-blue text-white text-base rounded-full px-6 py-4"
          >
            Book A Call
          </Link>
        </div>
      )}
    </nav>
  );
}
