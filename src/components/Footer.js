import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-dark-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="font-condensed font-black text-xl tracking-wide mb-3">
            <span className="text-orange">⚡</span> AGON <span className="text-orange">ELECTRIC</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Insured electrical contractor serving Toronto and the GTA.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-orange text-xs font-bold uppercase tracking-widest mb-3">Quick Links</p>
          <ul className="flex flex-col gap-2">
            {["/services", "/about", "/reviews", "/contact"].map((href) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-500 text-sm hover:text-orange transition-colors capitalize"
                >
                  {href.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-orange text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
          <ul className="flex flex-col gap-2 text-sm text-gray-500">
            <li>📞 (437) 298-7771</li>
            <li>
              <a
                href="https://wa.me/14372987771"
                className="hover:text-orange transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-dark-300 pt-6 text-center text-gray-600 text-xs">
        © {new Date().getFullYear()} <span className="text-orange">Agon Electric</span> · Toronto, ON · All rights reserved.
      </div>
    </footer>
  );
}
