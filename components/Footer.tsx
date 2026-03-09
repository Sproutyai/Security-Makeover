import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-navy rounded-t-[50px] pt-[75px] pb-[10px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Subscribe */}
            <div>
              <h3 className="font-[var(--font-jakarta)] text-[22px] font-medium text-white mb-6">
                Subscribe Now
              </h3>
              <div className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white rounded-lg px-4 py-3 text-sm text-dark-text outline-none"
                />
                <button className="bg-cta-blue text-white text-sm font-medium rounded-lg px-5 py-3 hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* X/Twitter */}
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-[var(--font-jakarta)] text-[22px] font-medium text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#hero" className="text-white text-base hover:underline transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#system" className="text-white text-base hover:underline transition-all">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-white text-base hover:underline transition-all">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-white text-base hover:underline transition-all">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="font-[var(--font-jakarta)] text-[22px] font-medium text-white mb-6">
                Contact
              </h3>
              <p className="text-white text-base">(239) 233-7028</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-navy text-center py-5">
        <p className="text-white/50 text-sm">
          Copyright © 2026. LeapStack Systems. All rights reserved.
        </p>
      </div>
    </>
  );
}
