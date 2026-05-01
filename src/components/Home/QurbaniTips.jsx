const tips = [
  {
    icon: "✅",
    title: "Animal Requirements",
    description:
      "The animal must be healthy, free from disease, and meet the minimum age: goats/sheep 1 year, cows 2 years, camels 5 years.",
  },
  {
    icon: "🕐",
    title: "Timing of Qurbani",
    description:
      "Qurbani is performed after Eid prayer on 10th Dhul Hijjah and continues through 12th Dhul Hijjah before sunset.",
  },
  {
    icon: "🤲",
    title: "Niyyah & Dua",
    description:
      "Make the intention (niyyah) clearly in your heart before slaughtering and recite Bismillah and Allahu Akbar.",
  },
];

export default function QurbaniTips() {
  return (
    <section className="relative overflow-hidden bg-[#0F4020] px-8 py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-center">
          <span className="mb-[0.8rem] block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[rgba(255,255,255,0.45)]">
            Guidance
          </span>
          <h2 className="font-[var(--font-playfair)] text-[2.8rem] font-bold tracking-[-0.5px] text-white">
            Qurbani Tips
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-center text-base leading-[1.7] text-[rgba(255,255,255,0.6)]">
            Essential guidance for a valid and blessed Qurbani
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tips.map((tip) => (
            <article
              key={tip.title}
              className="rounded-[14px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.07)] p-[1.8rem]"
            >
              <span className="mb-[1.2rem] block text-[2rem]">{tip.icon}</span>
              <h3 className="mb-[0.6rem] text-[1.05rem] font-bold text-white">
                {tip.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.7] text-[rgba(255,255,255,0.6)]">
                {tip.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
