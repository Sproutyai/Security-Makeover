import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
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
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <Image
          src="/images/industrial-perimeter.jpg"
          alt="Integrated commercial security system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            All-In-One Security
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
            Integrated Security{' '}
            <span className="text-electric-blue text-glow-blue">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            One partner for everything: security, fire, surveillance, access, networking, and cloud — all working together.
          </p>
        </div>
      </section>

      {/* ── Why Integrated ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Smarter Approach"
            title="Why Integrated Security?"
            subtitle="Stop juggling multiple vendors, bills, and systems that don't talk to each other."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <CheckCircleIcon className="w-8 h-8" />, title: 'Single Vendor', description: 'One point of contact, one bill, one team that knows your entire system inside and out.' },
              { icon: <BoltIcon className="w-8 h-8" />, title: 'Systems That Communicate', description: 'Your alarm triggers cameras. Access logs sync with surveillance. Fire systems notify security. Everything works together.' },
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'Reduced Cost', description: 'Integrated solutions from one vendor cost less than piecing together systems from multiple providers.' },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'Unified Dashboard', description: 'Manage alarms, cameras, access control, and fire systems from a single app. Simplified management for your team.' },
            ].map((f) => (
              <div key={f.title} className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group">
                <div className="text-electric-blue mb-5 w-14 h-14 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">{f.title}</h3>
                <p className="text-medium-gray leading-relaxed text-[15px]">{f.description}</p>
              </div>
            ))}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className="glass-card p-6 text-center hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-electric-blue flex justify-center mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-white font-bold text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builders & Partners ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
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
                className="glass-card p-6 border-t-2 border-t-electric-blue/30 hover:border-t-electric-blue transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{item.title}</h3>
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
