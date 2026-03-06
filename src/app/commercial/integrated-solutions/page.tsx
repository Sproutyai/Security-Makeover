import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import { BoltIcon, ShieldIcon, CameraIcon, LockIcon, FireIcon, WifiIcon, BuildingIcon, CheckCircleIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Integrated Security Solutions',
  description:
    'One partner for everything — security, fire, surveillance, access control, networking, and cloud. Integrated commercial security solutions for Southwest Florida.',
};

export default function IntegratedSolutionsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            All-In-One Security
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            INTEGRATED SECURITY SOLUTIONS
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            One partner for everything: security, fire, surveillance, access, networking, and cloud — all working together.
          </p>
        </div>
      </section>

      {/* ── Why Integrated ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Smarter Approach"
            title="Why Integrated Security?"
            subtitle="Stop juggling multiple vendors, bills, and systems that don't talk to each other."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8" />}
              title="Single Vendor"
              description="One point of contact, one bill, one team that knows your entire system inside and out."
            />
            <FeatureCard
              icon={<BoltIcon className="w-8 h-8" />}
              title="Systems That Communicate"
              description="Your alarm triggers cameras. Access logs sync with surveillance. Fire systems notify security. Everything works together."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="Reduced Cost"
              description="Integrated solutions from one vendor cost less than piecing together systems from multiple providers."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="Unified Dashboard"
              description="Manage alarms, cameras, access control, and fire systems from a single app. Simplified management for your team."
            />
          </div>
        </div>
      </section>

      {/* ── What We Integrate ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Complete Solutions"
            title="What We Integrate"
            subtitle="Every component of your security ecosystem, designed and managed as one."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldIcon className="w-8 h-8" />, name: 'Security Alarms' },
              { icon: <CameraIcon className="w-8 h-8" />, name: 'Video Surveillance' },
              { icon: <LockIcon className="w-8 h-8" />, name: 'Access Control' },
              { icon: <FireIcon className="w-8 h-8" />, name: 'Fire Alarms' },
              { icon: <WifiIcon className="w-8 h-8" />, name: 'Networking' },
              { icon: <BoltIcon className="w-8 h-8" />, name: 'Cloud Storage' },
              { icon: <BuildingIcon className="w-8 h-8" />, name: 'Structured Wiring' },
              { icon: <CheckCircleIcon className="w-8 h-8" />, name: '24/7 Monitoring' },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-dark-surface border border-border-dark rounded-lg p-6 text-center hover:border-electric-blue/50 transition-colors"
              >
                <div className="text-electric-blue flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builders & Partners ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Builder Partnerships"
            title="For Builders & New Construction"
            subtitle="We partner with builders and developers to integrate security from the ground up."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Pre-Wiring for New Construction',
                desc: 'Get security infrastructure in place during the build phase — saves time, money, and ensures a cleaner installation.',
              },
              {
                title: 'Churches & Schools',
                desc: 'Customized security solutions for houses of worship and educational facilities with unique safety requirements.',
              },
              {
                title: 'Structured Wiring & Networking',
                desc: 'Low-voltage wiring, network infrastructure, and data cabling designed alongside your security system.',
              },
              {
                title: 'Preventative Disaster Planning',
                desc: 'Fire, flood, and intrusion detection systems integrated into your building plans from day one.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="One Call Does It All"
            title="Design Your Integrated Solution"
            subtitle="Tell us about your facility and we'll create a unified security plan that covers everything."
          />
          <ContactForm
            formType="quote"
            title="Request an Integrated Security Quote"
            subtitle="We'll assess your needs and design a complete, connected system."
          />
        </div>
      </section>
    </>
  );
}
