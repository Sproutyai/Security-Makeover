import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { CameraIcon, ShieldIcon, WifiIcon, CheckCircleIcon, ClockIcon, ChartIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Video Surveillance & AI',
  description:
    'NDAA-compliant commercial video surveillance with AI analytics, cloud backup, and remote viewing. Serving Southwest Florida businesses.',
};

export default function VideoSurveillancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
        <Image
          src="/images/commercial-surveillance.jpg"
          alt="Commercial video surveillance system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Commercial Surveillance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase">
            Commercial Video{' '}
            <span className="text-electric-blue text-glow-blue">Surveillance</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            NDAA-compliant cameras with AI analytics, cloud backup, and remote viewing from anywhere.
          </p>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Key Features"
            title="Enterprise-Grade Surveillance Technology"
            subtitle="Built for security-conscious businesses that demand the best."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldIcon className="w-8 h-8" />, title: 'NDAA Compliant Products', description: 'Government and banking approved cameras and recording systems. Meet compliance requirements without compromise.' },
              { icon: <ChartIcon className="w-8 h-8" />, title: 'AI-Powered Analytics', description: "Intelligent motion detection, facial recognition, and object tracking. Your cameras don't just record — they think." },
              { icon: <WifiIcon className="w-8 h-8" />, title: 'Cloud Backup Storage', description: 'Never lose footage. Secure cloud storage ensures your recordings are safe even if on-site equipment is damaged or stolen.' },
              { icon: <CameraIcon className="w-8 h-8" />, title: 'Remote Viewing', description: 'IOS & Android app access lets you view live feeds and playback recordings from any device, anywhere in the world.' },
              { icon: <ClockIcon className="w-8 h-8" />, title: 'Night Vision', description: '24/7 coverage regardless of lighting conditions. IR and low-light cameras ensure nothing is missed after dark.' },
              { icon: <CheckCircleIcon className="w-8 h-8" />, title: 'Scalable Systems', description: 'From 4 cameras to 100+. Start with what you need and expand as your business grows — all on one unified platform.' },
            ].map((f) => (
              <div key={f.title} className="glass-card p-8 hover:border-electric-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,180,216,0.15)] group">
                <div className="text-electric-blue mb-5 w-14 h-14 flex items-center justify-center bg-electric-blue/10 rounded-xl group-hover:bg-electric-blue/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{f.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Applications"
            title="How Businesses Use Video Surveillance"
            subtitle="More than just cameras — a complete visual intelligence system."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Employee Safety',
                desc: 'Monitor workspaces, parking lots, and common areas to ensure your team feels safe and protected at all times.',
              },
              {
                title: 'Off-Site Viewing',
                desc: 'Business owners can check in on operations from home, on vacation, or from any location with a mobile device.',
              },
              {
                title: 'Preventing Lawsuits',
                desc: 'Slip-and-fall documentation, workplace incident recording, and liability protection with clear video evidence.',
              },
              {
                title: 'Theft Deterrent',
                desc: 'Visible cameras reduce crime by up to 50%. Protect your property before incidents happen.',
              },
              {
                title: 'Loss Prevention',
                desc: 'Monitor inventory, assets, and cash handling to minimize shrinkage and internal theft.',
              },
              {
                title: 'Operations Insight',
                desc: 'Use video analytics to understand traffic patterns, peak hours, and operational efficiency.',
              },
            ].map((app) => (
              <div
                key={app.title}
                className="glass-card p-6 border-t-2 border-t-electric-blue/30 hover:border-t-electric-blue transition-all duration-300 hover:-translate-y-1 group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">{app.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-28 bg-charcoal bg-grid-pattern">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Get Started"
            title="Schedule a Free Video Surveillance Assessment"
            subtitle="Our team will evaluate your property and design a camera system tailored to your needs."
          />
          <ContactForm
            formType="quote"
            title="Request Your Assessment"
            subtitle="No obligation — we'll design a custom solution for your business."
          />
        </div>
      </section>
    </>
  );
}
