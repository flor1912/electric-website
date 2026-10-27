"use client";
import Link from "next/link";
import { useState } from "react";

const services = [
  { icon: "🏠", title: "Residential & Commercial", desc: "Full electrical solutions for homes and businesses — new builds, renovations, and everything in between." },
  { icon: "⚡", title: "Panel Upgrades", desc: "Upgrade your electrical panel for increased capacity and modern safety standards." },
  { icon: "💡", title: "Lighting & Wiring", desc: "Indoor and outdoor lighting, pot lights, LED upgrades, smart lighting, and full rewiring." },
  { icon: "🔧", title: "Troubleshooting & Repairs", desc: "Fast diagnosis of electrical faults, flickering lights, tripped breakers, and more." },
];

const reasons = [
  { icon: "⏱️", title: "Fast Response", desc: "Same-day and emergency service available. We show up on time, every time." },
  { icon: "🛡️", title: "Guaranteed Work", desc: "Fully insured and backed by a satisfaction guarantee. No shortcuts, ever." },
];

export default function Home() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.target));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("done"); e.target.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111] to-[#1c1c1c] border-b-2 border-orange py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="font-condensed font-black text-6xl uppercase leading-none mb-4">
              Professional<br />
              <span className="text-orange">Electrical</span><br />
              Services
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              Installation, repairs, and upgrades for residential and commercial properties across Toronto and the GTA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Get a Free Quote →</Link>
              <a href="tel:4372987771" className="btn-outline">📞 (437) 298-7771</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[["500+", "Jobs Done"], ["10+", "Years Exp."], ["100%", "Satisfaction"]].map(([num, label]) => (
                <div key={label} className="bg-dark-100 border border-dark-300 border-t-2 border-t-orange rounded p-4 text-center">
                  <div className="font-condensed font-black text-3xl text-orange">{num}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quote form */}
          <div className="bg-dark-100 border border-dark-300 rounded-lg p-7">
            <h2 className="font-condensed font-bold text-xl uppercase text-orange mb-5">Request a Free Quote</h2>
            {status === "done" ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-condensed font-bold text-xl uppercase mb-2">Request Sent!</h3>
                <p className="text-gray-400 text-sm">We'll be in touch within a few hours.</p>
                <button onClick={() => setStatus("idle")} className="btn-outline mt-5 text-xs px-4 py-2">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Your Name</label>
                  <input name="name" type="text" placeholder="John Smith" required
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Phone Number</label>
                  <input name="phone" type="tel" placeholder="(416) 000-0000" required
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Service Needed</label>
                  <select name="service"
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange">
                    <option>Residential Electrical</option>
                    <option>Commercial Electrical</option>
                    <option>Panel Upgrade</option>
                    <option>Lighting Installation</option>
                    <option>Troubleshooting & Repairs</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Your Address</label>
                  <input name="address" type="text" placeholder="Toronto, ON"
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <button type="submit" disabled={status === "sending"}
                  className="btn-primary w-full text-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === "sending" ? "Sending..." : "Send Request →"}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">❌ Something went wrong. Please call us directly.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s) => (
              <div key={s.title} className="card border-l-4 border-l-orange hover:bg-dark-200 transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-condensed font-bold text-lg uppercase mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">The Agon Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="text-center p-6">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-condensed font-bold text-lg uppercase mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bar */}
      <section className="bg-orange py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <h2 className="font-condensed font-black text-3xl uppercase text-dark">Ready to Get Started?</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="tel:4372987771" className="font-semibold text-dark text-sm">📞 (437) 298-7771</a>
            <span className="text-dark/40 hidden sm:block">|</span>
            <Link href="/contact" className="bg-dark text-white font-bold uppercase text-sm px-5 py-2.5 rounded hover:bg-dark-100 transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
