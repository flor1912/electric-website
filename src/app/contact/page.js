"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("done");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#111] to-[#1c1c1c] border-b border-dark-300 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="section-label">Reach Out</span>
          <h1 className="font-condensed font-black text-5xl uppercase mb-4">Contact Us</h1>
          <p className="text-gray-400 text-base leading-relaxed">
            Ready to get started? Reach us by phone, WhatsApp, or fill out the form and we'll get back to you within a few hours.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact methods */}
          <div className="flex flex-col gap-5">
            <h2 className="font-condensed font-bold text-2xl uppercase mb-2">Get In Touch</h2>

            {[
              { icon: "📞", label: "Phone", value: "(437) 298-7771", href: "tel:4372987771" },
              { icon: "💬", label: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/14372987771" },
              { icon: "📍", label: "Address", value: "397 RL Roxton Rd, Toronto, ON M6G 3R3", href: "https://maps.google.com/?q=397+RL+Roxton+Rd+Toronto+ON" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card flex items-start gap-4 hover:border-orange transition-colors group"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-sm text-white group-hover:text-orange transition-colors">{item.value}</div>
                </div>
              </a>
            ))}

            {/* Google Maps embed — replace src with your real embed URL from Google Maps */}
            <div className="bg-dark-100 border border-dark-300 rounded h-48 flex items-center justify-center text-gray-600 text-sm">
              <span>📍 Paste your Google Maps embed here</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-100 border border-dark-300 rounded-lg p-7">
            <h2 className="font-condensed font-bold text-xl uppercase text-orange mb-5">Send Us a Message</h2>

            {/* Success state */}
            {status === "done" ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-condensed font-bold text-xl uppercase mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">We'll get back to you within a few hours.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline mt-6 text-xs px-4 py-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Full Name *</label>
                  <input name="name" type="text" placeholder="John Smith" required
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Phone Number *</label>
                  <input name="phone" type="tel" placeholder="(416) 000-0000" required
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Email</label>
                  <input name="email" type="email" placeholder="john@email.com"
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
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Your Address</label>
                  <input name="address" type="text" placeholder="Toronto, ON"
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange" />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Preferred Contact</label>
                  <select name="preferred_contact"
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange">
                    <option>Phone Call</option>
                    <option>WhatsApp</option>
                    <option>Email</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide block mb-1">Message</label>
                  <textarea name="message" rows={3} placeholder="Describe your electrical issue or project..."
                    className="w-full bg-dark border border-dark-300 text-white px-3 py-2.5 rounded text-sm focus:outline-none focus:border-orange resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full text-center mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message →"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center mt-1">
                    ❌ Something went wrong. Please call us at (437) 298-7771.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
