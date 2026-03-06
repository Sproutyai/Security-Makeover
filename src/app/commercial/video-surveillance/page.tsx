import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
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
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28">
        <Image
          src="/images/commercial-surveillance.jpg"
          alt="Commercial video surveillance system"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-4 block">
            Commercial Surveillance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            COMMERCIAL VIDEO SURVEILLANCE
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
            NDAA-compliant cameras with AI analytics, cloud backup, and remote viewing from anywhere.
          </p>
        </div>
      </section>

      {/* ── Key Features ── */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Key Features"
            title="Enterprise-Grade Surveillance Technology"
            subtitle="Built for security-conscious businesses that demand the best."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShieldIcon className="w-8 h-8" />}
              title="NDAA Compliant Products"
              description="Government and banking approved cameras and recording systems. Meet compliance requirements without compromise."
            />
            <FeatureCard
              icon={<ChartIcon className="w-8 h-8" />}
              title="AI-Powered Analytics"
              description="Intelligent motion detection, facial recognition, and object tracking. Your cameras don't just record — they think."
            />
            <FeatureCard
              icon={<WifiIcon className="w-8 h-8" />}
              title="Cloud Backup Storage"
              description="Never lose footage. Secure cloud storage ensures your recordings are safe even if on-site equipment is damaged or stolen."
            />
            <FeatureCard
              icon={<CameraIcon className="w-8 h-8" />}
              title="Remote Viewing"
              description="IOS & Android app access lets you view live feeds and playback recordings from any device, anywhere in the world."
            />
            <FeatureCard
              icon={<ClockIcon className="w-8 h-8" />}
              title="Night Vision"
              description="24/7 coverage regardless of lighting conditions. IR and low-light cameras ensure nothing is missed after dark."
            />
            <FeatureCard
              icon={<CheckCircleIcon className="w-8 h-8" />}
              title="Scalable Systems"
              description="From 4 cameras to 100+. Start with what you need and expand as your business grows — all on one unified platform."
            />
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
                className="bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-charcoal">
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
