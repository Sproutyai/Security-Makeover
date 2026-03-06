import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'All American Alarm | Mobile Surveillance Trailers & Commercial Security',
    template: '%s | All American Alarm',
  },
  description: 'Southwest Florida\'s leader in mobile surveillance trailers and commercial security. Rapid-deploy 24/7 monitoring for construction sites, events, and commercial properties. Call 239-334-7447.',
  keywords: ['mobile surveillance trailer', 'commercial security', 'Fort Myers', 'Naples', 'Cape Coral', 'Southwest Florida', 'construction site security', 'video surveillance'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://security-makeover.vercel.app',
    siteName: 'All American Alarm',
    title: 'All American Alarm | Mobile Surveillance Trailers & Commercial Security',
    description: 'Rapid-deploy surveillance for construction, events & commercial sites. 24/7 AI-powered monitoring across Southwest Florida.',
    images: [{ url: '/images/trailer-hero.jpg', width: 1200, height: 630, alt: 'All American Alarm Mobile Surveillance Trailer' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-navy text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
