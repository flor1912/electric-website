import Link from "next/link";

export const metadata = {
  title: "Electrical Services Toronto | Agon Electric",
  description: "Full range of electrical services in Toronto — residential, commercial, panel upgrades, lighting, and repairs.",
};

const services = [
  {
    icon: "🏠",
    title: "Residential Electrical",
    desc: "Whether you're renovating your home or building new, our licensed electricians handle every job safely and to Ontario Electrical Safety Code standards. From basement wiring to whole-home electrical upgrades.",
    items: ["New home wiring", "Basement finishing electrical", "Kitchen & bathroom circuits", "EV charger installation", "Smoke detector installation"],
  },
  {
    icon: "🏢",
    title: "Commercial Electrical",
    desc: "We work with business owners, property managers, and contractors across Toronto to deliver reliable commercial electrical installations and maintenance.",
    items: ["Office & retail fit-outs", "Commercial panel upgrades", "Emergency lighting", "Data & communication wiring", "Parking lot lighting"],
  },
  {
    icon: "⚡",
    title: "Panel Upgrades & Circuit Breakers",
    desc: "Older panels can be a safety hazard and may not handle modern electrical loads. We upgrade your electrical panel to current standards — safely and efficiently.",
    items: ["100A to 200A upgrades", "Federal Pacific panel replacement", "Circuit breaker replacement", "Sub-panel installation", "Load balancing"],
  },
  {
    icon: "💡",
    title: "Lighting Installation & Wiring",
    desc: "From pot lights to smart lighting systems, we design and install lighting solutions that are both beautiful and energy-efficient.",
    items: ["Pot light installation", "LED retrofits & upgrades", "Smart lighting (Lutron, Hue)", "Outdoor & landscape lighting", "Chandelier & fixture installation"],
  },
  {
    icon: "🔧",
    title: "Troubleshooting & Repairs",
    desc: "Electrical problems can be dangerous. Our team diagnoses and fixes issues fast — so you're not left in the dark.",
    items: ["Tripped breaker diagnosis", "Flickering light repair", "Dead outlet repair", "GFCI outlet replacement", "Electrical fault finding"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#111] to-[#1c1c1c] border-b border-dark-300 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="section-label">What We Offer</span>
          <h1 className="section-title text-5xl mb-4">Our Services</h1>
          <p className="text-gray-400 text-base leading-relaxed">
            From small repairs to full electrical installations — licensed, insured, and done right.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {services.map((s) => (
            <div key={s.title} className="card border-l-4 border-l-orange">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <h2 className="font-condensed font-bold text-2xl uppercase">{s.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{s.desc}</p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-orange">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange py-10 px-6 text-center">
        <h2 className="font-condensed font-black text-3xl uppercase text-dark mb-4">Don't See What You Need?</h2>
        <p className="text-dark/70 text-sm mb-6">We handle all types of electrical work. Get in touch and we'll help.</p>
        <Link href="/contact" className="bg-dark text-white font-bold uppercase text-sm px-6 py-3 rounded hover:bg-dark-100 transition-colors">
          Contact Us →
        </Link>
      </section>
    </>
  );
}
