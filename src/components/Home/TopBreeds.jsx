const breeds = [
  { icon: "🐄", name: "Deshi Local", type: "Cow" },
  { icon: "🐂", name: "Brahman", type: "Cow" },
  { icon: "🐐", name: "Black Bengal", type: "Goat" },
  { icon: "🐑", name: "Garole", type: "Sheep" },
  { icon: "🐄", name: "Sahiwal", type: "Cow" },
  { icon: "🐂", name: "Holstein", type: "Cow" },
  { icon: "🐐", name: "Jamunapari", type: "Goat" },
  { icon: "🐑", name: "Muzaffarnagari", type: "Sheep" },
];

export default function TopBreeds() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <span className="mb-[0.8rem] block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#1B6B3A]">
            Explore Variety
          </span>
          <h2 className="font-[var(--font-playfair)] text-[2.8rem] font-bold tracking-[-0.5px] text-[#1A1A1A]">
            Top Breeds Available
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-center text-base leading-[1.7] text-[#6B6B6B]">
            Explore popular livestock breeds trusted by buyers across
            Bangladesh
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {breeds.map((breed) => (
            <article
              key={breed.name}
              className="cursor-default rounded-[14px] border border-[#E2E8E0] bg-white px-6 py-[1.8rem] text-center transition-all duration-200 hover:border-[#1B6B3A] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            >
              <span className="mb-4 block text-[2.8rem]">{breed.icon}</span>
              <h3 className="mb-2 text-[0.95rem] font-semibold text-[#1A1A1A]">
                {breed.name}
              </h3>
              <span className="inline-block rounded-full bg-[#E8F5EE] px-3 py-[3px] text-[0.78rem] font-medium text-[#1B6B3A]">
                {breed.type}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
