import Link from "next/link";

export const metadata = {
  title: "Reviews | Agon Electric Toronto",
  description: "See what our clients say about Agon Electric. Leave a Google review and help us grow.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#111] to-[#1c1c1c] border-b border-dark-300 py-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="section-label">What Clients Say</span>
          <h1 className="section-title text-5xl mb-4">Reviews</h1>
          <p className="text-gray-400 text-base leading-relaxed">
            We're just getting started online — but our work speaks for itself.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">⭐</div>
          <h2 className="font-condensed font-black text-3xl uppercase mb-4">
            Have We Worked For You?
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            If Agon Electric has done electrical work for you, we'd love a Google review. It takes 2 minutes and helps us grow our business — and helps other Toronto homeowners find a reliable electrician.
          </p>

          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            ⭐ Leave a Google Review
          </a>

          <p className="text-gray-600 text-xs mt-4">Opens Google Reviews in a new tab</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Coming Soon</span>
            <h2 className="section-title">Client Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card flex flex-col gap-3">
                <div className="text-orange text-sm">★★★★★</div>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "Add your first customer review here once you start collecting them."
                </p>
                <div className="border-t border-dark-300 pt-3 text-xs text-gray-500">
                  Happy Client · Toronto
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            Reviews will be added here as we collect them from Google.
          </p>
        </div>
      </section>

      <section className="bg-orange py-10 px-6 text-center">
        <h2 className="font-condensed font-black text-3xl uppercase text-dark mb-4">Ready to Experience the Agon Difference?</h2>
        <Link href="/contact" className="bg-dark text-white font-bold uppercase text-sm px-6 py-3 rounded hover:bg-dark-100 transition-colors">
          Get a Free Quote →
        </Link>
      </section>
    </>
  );
}
