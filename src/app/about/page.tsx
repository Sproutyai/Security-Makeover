import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import { ShieldIcon, CheckCircleIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about All American Alarm — Southwest Florida\'s trusted security partner since 2001. Meet owner Sy Ali and our in-house team of veteran technicians.',
};

const differentiators = [
  'Speak to the owner of the company directly',
  'No subcontractors, ever — all in-house technicians',
  'American-made products (DMP)',
  '24/7 Five Diamond Monitoring',
  'Local people serving local people',
  'Florida licensed & insured (#EF20002028, #EG13000164)',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <Image
          src="/images/team-mission.jpg"
          alt="All American Alarm team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            ABOUT ALL AMERICAN ALARM
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            Southwest Florida&apos;s trusted security partner since 2001.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Founded in 2001"
                title="Our Story"
                align="left"
              />
              <div className="space-y-5 text-medium-gray leading-relaxed">
                <p>
                  All American Alarm was founded in 2001 by <strong className="text-white">Syed Ali (Sy Ali)</strong>,
                  who has been in the alarm and security business since 1992 — bringing over 30 years of hands-on
                  experience to every project we undertake.
                </p>
                <p>
                  Our goal is bold: <strong className="text-white">to be the largest security company in the state of
                  Florida.</strong> We&apos;re building toward that vision one satisfied customer at a time, delivering
                  state-of-the-art equipment, red carpet service, and lightning-fast response.
                </p>
                <p>
                  Our mission is simple: <em className="text-electric-blue">&ldquo;Assuring your peace of mind with
                  state of the art equipment, red carpet service, and lightning fast response… Because We
                  Care!&rdquo;</em>
                </p>
              </div>
              <blockquote className="mt-8 border-l-4 border-electric-blue pl-6 py-2">
                <p className="text-white text-lg italic">
                  &ldquo;We believe in how you do anything is how you do everything.&rdquo;
                </p>
                <footer className="mt-2 text-electric-blue font-semibold">— Sy Ali, Owner</footer>
              </blockquote>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/technicians.jpg"
                alt="All American Alarm technicians"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The People Behind the Protection"
            title="Our Team"
            subtitle="Every member of our team is an in-house employee — we never use subcontractors."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales & Design */}
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8 text-center">
              <div className="text-electric-blue text-4xl mb-4">
                <ShieldIcon className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sales &amp; Design Team</h3>
              <p className="text-medium-gray leading-relaxed">
                Expert security specialists who assess your property and design custom solutions tailored to your
                specific needs and budget.
              </p>
            </div>

            {/* Administration */}
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8 text-center">
              <div className="text-electric-blue text-4xl mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Administration</h3>
              <p className="text-medium-gray leading-relaxed">
                Professional support team managing day-to-day operations, scheduling, billing, and customer service so
                you always have a person to call.
              </p>
            </div>

            {/* Technician Team */}
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8 text-center">
              <div className="text-electric-blue text-4xl mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technician Team</h3>
              <p className="text-medium-gray leading-relaxed">
                In-house veteran technicians who install, maintain, and service every system. No subcontractors — ever.
                Your security is always in expert hands.
              </p>
            </div>
          </div>

          {/* Team photos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image src="/images/technicians.jpg" alt="Technician team" fill className="object-cover" />
            </div>
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
              <Image src="/images/worker.jpg" alt="Field technician at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The All American Difference"
            title="What Sets Us Apart"
            subtitle="We're not your typical alarm company. Here's why businesses across Southwest Florida trust us."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-dark-surface border border-border-dark rounded-lg p-6">
                <CheckCircleIcon className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            eyebrow="Giving Back"
            title="Community Involvement"
            subtitle="We believe in protecting our community both through our work and through active partnership with local organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-3">Community Cooperative</h3>
              <p className="text-medium-gray leading-relaxed">
                Proud partner of the Community Cooperative, supporting local food banks and neighborhood services
                throughout Southwest Florida.
              </p>
            </div>
            <div className="bg-dark-surface border border-border-dark rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-3">ACT — Abuse Counseling &amp; Treatment</h3>
              <p className="text-medium-gray leading-relaxed">
                Supporting ACT in their mission to provide safety and support for survivors of domestic violence and
                sexual assault in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Get to Know Us
          </h2>
          <p className="text-medium-gray text-lg mb-8">
            Schedule a visit to our Fort Myers office and meet the team that will protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Contact Us
            </CTAButton>
            <CTAButton href="/contact/quote" variant="outline" size="lg">
              Get a Free Quote
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
