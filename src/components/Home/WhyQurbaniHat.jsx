import Link from "next/link";

const features = [
  {
    icon: "🔍",
    title: "Verified Listings",
    desc: "Every animal is verified by our team for health and authenticity before listing.",
  },
  {
    icon: "📍",
    title: "Local Pickup Available",
    desc: "Find animals near you with direct farm location details.",
  },
  {
    icon: "💬",
    title: "Secure Booking",
    desc: "Book safely with your account and get instant confirmation.",
  },
];

export default function WhyQurbaniHat() {
  return (
    <section className="bg-[#FDF3E0] px-8 py-16">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div>
          <span className="mb-[0.8rem] block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#1B6B3A]">
            Why Qurbanihat?
          </span>
          <h2 className="mb-6 max-w-[380px] font-display text-[2.2rem] font-bold leading-[1.18] tracking-[-0.5px] text-[#1A1A1A]">
            Your trusted Qurbani marketplace
          </h2>

          <div className="flex flex-col gap-[1.2rem]">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-3"
              >
                <span className="mt-[2px] text-[1.2rem]">{feature.icon}</span>
                <div>
                  <h3 className="text-[0.9rem] font-bold text-[#1A1A1A]">
                    {feature.title}
                  </h3>
                  <p className="mt-[3px] text-[0.85rem] leading-[1.6] text-[#6B6B6B]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8E0] bg-white px-8 py-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="mb-[1.2rem] text-[3.5rem] tracking-[4px]">
            🐄🐐🐑
          </div>
          <h3 className="mb-2 font-display text-[1.3rem] font-bold text-[#1A1A1A]">
            250+ Animals Available
          </h3>
          <p className="mb-6 text-[0.88rem] text-[#6B6B6B]">
            From farms across 12 districts of Bangladesh
          </p>
          <Link
            href="/animals"
            className="inline-flex w-full items-center justify-center rounded-[10px] bg-[#1B6B3A] px-6 py-[13px] text-[0.95rem] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[#0F4020]"
          >
            Explore Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
