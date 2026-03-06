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

const stats = [
  { value: '30+', label: 'Years of Experience' },
  { value: '1,000+', label: 'Systems Installed' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '0', label: 'Subcontractors Used' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <Image
          src="/images/team-mission.jpg"
          alt="All American Alarm team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-32">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue mb-4 block">
            Our Story
          </span>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-electric-blue to-electric-blue/0 rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            ABOUT ALL AMERICAN ALARM
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto">
            Southwest Florida&apos;s trusted security partner since 2001.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8 bg-charcoal/80 border-y border-border-dark bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center relative">
                <div className="text-3xl md:text-4xl font-black text-electric-blue text-glow-blue mb-1">{stat.value}</div>
                <div className="text-sm text-medium-gray uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-navy relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
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
                {/* Pull Quote */}
                <div className="glass-card p-6 my-6 border-l-4 border-l-electric-blue">
                  <p className="text-electric-blue text-lg font-semibold italic">
                    &ldquo;Assuring your peace of mind with state of the art equipment, red carpet service, and lightning fast response… Because We Care!&rdquo;
                  </p>
                </div>
                <p>
                  Our goal is bold: <strong className="text-white">to be the largest security company in the state of
                  Florida.</strong> We&apos;re building toward that vision one satisfied customer at a time, delivering
                  state-of-the-art equipment, red carpet service, and lightning-fast response.
                </p>
              </div>
              <blockquote className="mt-8 glass-card p-6 border-l-4 border-l-gold">
                <p className="text-white text-lg italic">
                  &ldquo;We believe in how you do anything is how you do everything.&rdquo;
                </p>
                <footer className="mt-2 text-gold font-semibold">— Sy Ali, Owner</footer>
              </blockquote>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-card p-1">
              <Image
                src="/images/technicians.jpg"
                alt="All American Alarm technicians"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-28 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The People Behind the Protection"
            title="Our Team"
            subtitle="Every member of our team is an in-house employee — we never use subcontractors."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales & Design */}
            <div className="glass-card p-8 text-center group hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center mx-auto mb-5 border border-electric-blue/30">
                  <ShieldIcon className="w-8 h-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sales &amp; Design Team</h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-electric-blue to-transparent mx-auto mb-4" />
                <p className="text-medium-gray leading-relaxed">
                  Expert security specialists who assess your property and design custom solutions tailored to your
                  specific needs and budget.
                </p>
              </div>
            </div>

            {/* Administration */}
            <div className="glass-card p-8 text-center group hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center mx-auto mb-5 border border-electric-blue/30">
                  <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Administration</h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-electric-blue to-transparent mx-auto mb-4" />
                <p className="text-medium-gray leading-relaxed">
                  Professional support team managing day-to-day operations, scheduling, billing, and customer service so
                  you always have a person to call.
                </p>
              </div>
            </div>

            {/* Technician Team */}
            <div className="glass-card p-8 text-center group hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center mx-auto mb-5 border border-electric-blue/30">
                  <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Technician Team</h3>
                <div className="h-0.5 w-12 bg-gradient-to-r from-electric-blue to-transparent mx-auto mb-4" />
                <p className="text-medium-gray leading-relaxed">
                  In-house veteran technicians who install, maintain, and service every system. No subcontractors — ever.
                  Your security is always in expert hands.
                </p>
              </div>
            </div>
          </div>

          {/* Team photos */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card p-1">
              <Image src="/images/technicians.jpg" alt="Technician team" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-xl" />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-card p-1">
              <Image src="/images/worker.jpg" alt="Field technician at work" fill className="object-cover rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart — Single Column with Large Checkmarks */}
      <section className="py-20 md:py-28 bg-navy relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The All American Difference"
            title="What Sets Us Apart"
            subtitle="We're not your typical alarm company. Here's why businesses across Southwest Florida trust us."
          />
          <div className="max-w-2xl mx-auto space-y-4">
            {differentiators.map((item, i) => (
              <div key={i} className="glass-card flex items-center gap-5 p-5 hover:border-electric-blue/50 transition-all duration-300 group hover:shadow-[0_4px_20px_rgba(0,180,216,0.1)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-electric-blue/20 to-electric-blue/5 flex items-center justify-center border border-electric-blue/30 group-hover:border-electric-blue/60 transition-colors">
                  <CheckCircleIcon className="w-7 h-7 text-electric-blue" />
                </div>
                <span className="text-white font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 md:py-28 bg-charcoal relative bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            eyebrow="Giving Back"
            title="Community Involvement"
            subtitle="We believe in protecting our community both through our work and through active partnership with local organizations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,180,216,0.1)]">
              <h3 className="text-xl font-bold text-white mb-3">Community Cooperative</h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-electric-blue to-transparent mx-auto mb-4" />
              <p className="text-medium-gray leading-relaxed">
                Proud partner of the Community Cooperative, supporting local food banks and neighborhood services
                throughout Southwest Florida.
              </p>
            </div>
            <div className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,180,216,0.1)]">
              <h3 className="text-xl font-bold text-white mb-3">ACT — Abuse Counseling &amp; Treatment</h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-electric-blue to-transparent mx-auto mb-4" />
              <p className="text-medium-gray leading-relaxed">
                Supporting ACT in their mission to provide safety and support for survivors of domestic violence and
                sexual assault in our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
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
