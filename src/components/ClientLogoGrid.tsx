import Image from 'next/image';

const clients = [
  { name: 'Dunkin Donuts', src: '/images/clients/dunkin-donuts.png' },
  { name: 'FGCU', src: '/images/clients/fgcu.png' },
  { name: 'Salvation Army', src: '/images/clients/salvation-army.png' },
  { name: 'Sun Splash', src: '/images/clients/sun-splash.png' },
  { name: 'Colonial Country Club', src: '/images/clients/colonial-country-club.png' },
  { name: 'Clive Daniel', src: '/images/clients/clive-daniel.png' },
  { name: 'Service Master', src: '/images/clients/service-master.png' },
  { name: 'Rib City', src: '/images/clients/rib-city.png' },
  { name: 'Community Cooperative', src: '/images/clients/community-cooperative.png' },
  { name: 'Adams Homes', src: '/images/clients/adams-homes.png' },
  { name: 'Deroma', src: '/images/clients/deroma.png' },
  { name: 'Hibiscus House', src: '/images/clients/hibiscus-house.png' },
];

export default function ClientLogoGrid() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-medium-gray text-sm font-semibold uppercase tracking-widest mb-10">
          Trusted by Leading Organizations Across Southwest Florida
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image
                src={client.src}
                alt={client.name}
                width={140}
                height={60}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
