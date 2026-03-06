import Image from 'next/image';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import FeatureCard from '@/components/FeatureCard';
import PhoneCTA from '@/components/PhoneCTA';
import {
  CameraIcon,
  SunIcon,
  WifiIcon,
  ShieldIcon,
  BoltIcon,
  CheckCircleIcon,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Features & Technology',
  description:
    'Military-grade surveillance technology: PTZ cameras, AI-powered detection, solar power, LTE connectivity, and 24/7 professional monitoring. All American Alarm mobile trailers.',
};

const cameraTech = [
  'Pan-tilt-zoom (PTZ) cameras with 30× optical zoom',
  'Night vision / infrared (IR) capabilities — full clarity in total darkness',
  '4K ultra-high-definition resolution',
  'AI-powered motion detection and object classification',
  'License Plate Recognition (LPR) available',
  'Thermal imaging add-on for perimeter detection',
];

const powerConnectivity = [
  'High-efficiency solar panels with battery storage',
  'Diesel generator backup for extended cloudy periods',
  'LTE cellular connectivity — works anywhere with cell signal',
  'Redundant data transmission for guaranteed uptime',
];

const monitoringAlerts = [
  '24/7 professional monitoring center',
  'Real-time push notifications to your phone',
  'Two-way audio for live intervention',
  'Video recording & cloud backup',
  'Custom alert zones and schedules',
  'Integration with local law enforcement',
];

const physicalSpecs = [
  'Weatherproof / hurricane-rated enclosure',
  'Telescoping mast — 20+ feet of elevation',
  'Towable with standard trailer hitch',
  'Built-in LED lighting & strobe deterrents',
  'Tamper-proof design with anti-theft features',
  'Compact footprint — fits in a single parking space',
];

export default function FeaturesPage() {
  return (
    <>
      {/* ════════════════════════════════════════════ HERO */}
      <section className="relative bg-navy pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-navy" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-electric-blue mb-4">
            Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6">
            Features &{' '}
            <span className="text-electric-blue">Technology</span>
          </h1>
          <p className="text-lg md:text-xl text-medium-gray max-w-2xl mx-auto leading-relaxed">
            Military-grade surveillance technology made accessible for
            commercial sites.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════ CAMERA TECHNOLOGY */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
                Optics
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Camera Technology
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed mb-8">
                Our trailers are equipped with the latest in surveillance
                camera technology — the same systems used to protect critical
                infrastructure and military installations.
              </p>
              <ul className="space-y-4">
                {cameraTech.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CameraIcon className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-border-dark">
              <Image
                src="/images/trailer-product-1.png"
                alt="Mobile Surveillance Trailer with PTZ cameras"
                fill
                className="object-contain bg-navy p-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ POWER & CONNECTIVITY */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-96 rounded-lg overflow-hidden border border-border-dark">
              <Image
                src="/images/trailer-product-2.png"
                alt="Solar-powered mobile surveillance unit"
                fill
                className="object-contain bg-navy p-6"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-widest text-electric-blue mb-3 block">
                Autonomous Operation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Power & Connectivity
              </h2>
              <p className="text-medium-gray text-lg leading-relaxed mb-8">
                No power outlet? No internet? No problem. Our trailers are
                designed to operate completely independently — anywhere
                there&apos;s a cell signal.
              </p>
              <ul className="space-y-4">
                {powerConnectivity.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <SunIcon className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ MONITORING & ALERTS */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Intelligence"
            title="Monitoring & Alerts"
            subtitle="Real-time professional monitoring with instant alerts — your site is never unattended."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringAlerts.map((item, i) => {
              const icons = [
                <ShieldIcon key="s" className="w-8 h-8" />,
                <WifiIcon key="w" className="w-8 h-8" />,
                <CheckCircleIcon key="c1" className="w-8 h-8" />,
                <CameraIcon key="cam" className="w-8 h-8" />,
                <BoltIcon key="b" className="w-8 h-8" />,
                <ShieldIcon key="s2" className="w-8 h-8" />,
              ];
              return (
                <div
                  key={item}
                  className="bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors"
                >
                  <div className="text-electric-blue text-3xl mb-3">
                    {icons[i]}
                  </div>
                  <p className="text-white font-semibold">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ PHYSICAL SPECS */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Built Tough"
            title="Physical Specifications"
            subtitle="Engineered for Florida's harshest conditions — from hurricanes to relentless heat."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {physicalSpecs.map((spec) => (
              <div
                key={spec}
                className="flex items-start gap-4 bg-dark-surface border border-border-dark rounded-lg p-6 hover:border-electric-blue/50 transition-colors"
              >
                <CheckCircleIcon className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ TECH SPECS TABLE */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            eyebrow="At a Glance"
            title="Technical Summary"
          />
          <div className="bg-dark-surface border border-border-dark rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <tbody className="divide-y divide-border-dark">
                {[
                  ['Camera System', '360° PTZ with 30× zoom, 4K, IR night vision'],
                  ['AI Analytics', 'Motion detection, object classification, LPR'],
                  ['Power', 'Solar + battery + diesel generator backup'],
                  ['Connectivity', 'LTE cellular with redundant transmission'],
                  ['Mast Height', '20+ feet telescoping'],
                  ['Enclosure', 'Hurricane-rated, tamper-proof steel'],
                  ['Transport', 'Standard trailer hitch, single parking space'],
                  ['Monitoring', '24/7 professional center + remote app access'],
                  ['Audio', 'Two-way PA system with live intervention'],
                  ['Storage', 'On-board NVR + cloud backup'],
                ].map(([label, value]) => (
                  <tr key={label} className="hover:bg-navy/30 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-electric-blue font-semibold whitespace-nowrap">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ CTA */}
      <section className="bg-navy py-20 md:py-28 border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            See the Technology in Action
          </h2>
          <p className="text-medium-gray text-lg mb-10">
            Schedule a free demo or site assessment and see exactly how our
            mobile surveillance trailers will protect your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <CTAButton href="/contact/deployment" size="lg">
              Request a Demo
            </CTAButton>
            <CTAButton href="/mobile-surveillance-trailers" variant="outline" size="lg">
              Back to Overview
            </CTAButton>
          </div>
          <PhoneCTA className="justify-center" />
        </div>
      </section>
    </>
  );
}
