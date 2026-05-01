"use client";

import { useRouter } from "next/navigation";

const stats = [
  { value: "250+", label: "Animals Listed" },
  { value: "48", label: "Verified Farms" },
  { value: "12+", label: "Districts Covered" },
];

export default function HeroSection() {
  const router = useRouter();

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured");
    featuredSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-[#0F4020] px-8 ">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='42' height='42' viewBox='0 0 42 42' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round'%3E%3Cpath d='M21 14v14M14 21h14'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "42px 42px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[-140px] top-[-120px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,134,10,0.15)_0%,rgba(200,134,10,0)_70%)]"
      />

      <div className="relative mx-auto grid max-w-[1200px] gap-16 py-20 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[rgba(200,134,10,0.4)] bg-[rgba(200,134,10,0.2)] px-5 py-2 text-[0.8rem] font-medium text-[#F5C842]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
            <span>Eid ul-Adha 2026 Collection Live</span>
          </div>

          <h1 className="max-w-[700px] font-display text-[3.2rem] font-bold leading-[1.15] tracking-[-0.5px] text-white">
            Premium Livestock for
            <br />
            Your <span className="text-[#F5A623]">Qurbani</span>
          </h1>

          <p className="mb-8 mt-8 max-w-[480px] text-[1.05rem] leading-[1.7] text-[rgba(255,255,255,0.7)]">
            Browse healthy, well-fed animals sourced from trusted farms across
            Bangladesh. Verified, safe, and ready for Qurbani.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => router.push("/animals")}
              className="inline-flex items-center justify-center rounded-xl bg-[#C8860A] px-8 py-[14px] text-base font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#A36E08]"
            >
              Browse Animals →
            </button>
            <button
              type="button"
              onClick={scrollToFeatured}
              className="inline-flex items-center justify-center rounded-xl border-[1.5px] border-[rgba(255,255,255,0.3)] bg-transparent px-8 py-[14px] text-base font-medium text-white transition-colors duration-200 hover:border-[rgba(255,255,255,0.6)]"
            >
              View Featured
            </button>
          </div>

          <div className="mt-10 border-t border-[rgba(255,255,255,0.12)] pt-10">
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[1.8rem] font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.8rem] text-[rgba(255,255,255,0.5)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden items-center justify-center md:flex">
          <div className="w-full max-w-[300px] rounded-[20px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.08)] p-8 text-center backdrop-blur-[10px]">
            <div className="mb-4 text-[5rem] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              🐄
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }} className=" text-[1.3rem] font-semibold text-white">
              Deshi Shahi Cow
            </h3>
            <p className="mt-2 text-[0.85rem] text-[rgba(255,255,255,0.6)]">
              280kg · Bogura Farm · 3 yrs
            </p>
            <span className="mt-4 inline-block rounded-full bg-[#C8860A] px-6 py-2 text-base font-semibold text-white">
              ৳1,20,000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
