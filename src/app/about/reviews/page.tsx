import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import TestimonialCard from '@/components/TestimonialCard';
import StatCounter from '@/components/StatCounter';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Reviews',
  description:
    'See what Southwest Florida businesses say about All American Alarm. 4.9-star Google rating with 25+ years of trusted commercial security service.',
};

const reviews = [
  {
    quote: 'Your company is the one rare gem in our community.',
    author: 'Tracy Galloway',
    role: 'CCMI',
    rating: 5 as const,
  },
  {
    quote: 'The mobile surveillance trailer was on our construction site within 24 hours. Zero theft since deployment — that alone saved us more than the cost of the service.',
    author: 'Mike R.',
    role: 'General Contractor, Fort Myers',
    rating: 5 as const,
  },
  {
    quote: 'Sy and his team upgraded our entire alarm and camera system. Professional from start to finish, and the DMP system is rock-solid.',
    author: 'Jennifer L.',
    role: 'Property Manager, Naples',
    rating: 5 as const,
  },
  {
    quote: 'We switched from a national provider to All American Alarm and the difference is night and day. Local team, real people answering the phone, and the owner actually cares.',
    author: 'David K.',
    role: 'Restaurant Owner, Cape Coral',
    rating: 5 as const,
  },
  {
    quote: 'The access control system they installed simplified our employee management completely. No more re-keying when someone leaves.',
    author: 'Sarah M.',
    role: 'Office Manager, Bonita Springs',
    rating: 5 as const,
  },
  {
    quote: 'Had them install fire alarm and surveillance for our church. They worked within our budget and the system has been flawless for three years.',
    author: 'Pastor James W.',
    role: 'Community Church, Lehigh Acres',
    rating: 5 as const,
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '1000+', label: 'Systems Installed' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '24/7', label: 'Monitoring' },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Testimonials
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            WHAT OUR CLIENTS SAY
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            Don&apos;t take our word for it — hear from the businesses we protect.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-extrabold italic leading-tight mb-8">
            &ldquo;Your company is the one rare gem in our community.&rdquo;
          </blockquote>
          <div>
            <div className="text-electric-blue font-bold text-lg">Tracy Galloway</div>
            <div className="text-medium-gray">CCMI</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy border-y border-border-dark">
        <div className="max-w-5xl mx-auto px-6">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Client Reviews"
            title="Trusted by Businesses Across SWFL"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <TestimonialCard
                key={i}
                quote={review.quote}
                author={review.author}
                role={review.role}
                rating={review.rating}
              />
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="mt-12 text-center">
            <p className="text-medium-gray mb-4">
              See all of our reviews on Google
            </p>
            <a
              href="https://www.google.com/maps/place/All+American+Alarm/@26.6378,-81.8726,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-electric-blue font-semibold hover:text-electric-blue-hover transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              View All Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Experience the Difference Yourself
          </h2>
          <p className="text-medium-gray text-lg mb-8">
            Join hundreds of Southwest Florida businesses that trust All American Alarm for their security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact/quote" variant="primary" size="lg">
              Get a Free Quote
            </CTAButton>
            <a
              href="tel:239-334-7447"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-bold rounded-full border-2 border-white text-white hover:bg-white hover:text-navy transition-all duration-200 uppercase tracking-wide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              239-334-7447
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
