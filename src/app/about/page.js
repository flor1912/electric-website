import Link from "next/link";

export const metadata = {
  title: "About Agon Electric | Toronto Electrician",
  description: "Learn about Agon Electric — trusted electrical contractor serving Toronto and the GTA.",
};

const values = [
  { icon: "🤝", title: "Honest Pricing", desc: "We give you a clear quote upfront. No hidden fees, no surprise charges — just transparent, fair pricing." },
  { icon: "⏱️", title: "Respect Your Time", desc: "We show up when we say we will. Your time matters, and we treat every job with urgency and professionalism." },
  { icon: "✅", title: "Quality Guaranteed", desc: "Every job is done to the highest standard. If something isn't right, we'll fix it — no questions asked." },
];

const areas = [
  "Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga",
  "Brampton", "Vaughan", "Richmond Hill", "Markham", "Pickering",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#111] to-[#1c1c1c] border-b border-dark-300 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="section-label">Our Story</span>
          <h1 className="section-title text-5xl mb-4">About Agon Electric</h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Honest, professional electrical work for Toronto homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Who We Are</span>
            <h2 className="font-condensed font-black text-3xl uppercase mb-5">Built on Trust &amp; Craftsmanship</h2>
            <div className="flex flex-col gap-4 text-gray-400 text-sm leading-relaxed">
              <p>
                Agon Electric was founded with one goal: to bring honest, professional electrical work to Toronto homeowners and businesses.
              </p>
              <p>
                With over 10 years of hands-on experience, we've built our reputation job by job — showing up on time, doing the work right and treating every home like our own.
              </p>
              <p>
                Whether it's a simple repair or a full panel upgrade, you can count on Agon Electric for quality work at a fair price.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col gap-4">
            {[
              ["📍", "Toronto Based", "Local team — fast response times across the GTA."],
              ["🏆", "10+ Years Experience", "Hundreds of satisfied residential and commercial clients."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="card flex items-start gap-4">
                <div className="text-2xl">{icon}</div>
                <div>
                  <div className="font-semibold text-sm text-white mb-1">{title}</div>
                  <div className="text-gray-500 text-xs">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">How We Work</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-condensed font-bold text-base uppercase mb-2">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-label">Where We Work</span>
          <h2 className="section-title mb-6">Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="bg-dark-100 border border-dark-300 text-gray-300 text-sm px-4 py-2 rounded">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
