import { animals } from "@/data/animals";

export default function AnimalsPage() {
  return (
    <section className="bg-[#FAFAF5] px-8 py-12">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="font-[var(--font-playfair)] text-[2rem] font-bold text-[#1A1A1A]">
          All Animals
        </h1>
        <p className="mt-2 text-[#6B6B6B]">
          Browse all currently listed animals in the marketplace.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="rounded-2xl border border-[#E2E8E0] bg-white p-6"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-[#D8EDD8] text-6xl">
                {animal.emoji}
              </div>
              <h2 className="font-[var(--font-playfair)] text-[1.35rem] font-semibold text-[#1A1A1A]">
                {animal.name}
              </h2>
              <p className="mt-2 text-sm text-[#6B6B6B]">
                {animal.type} · {animal.weight}kg · {animal.location} ·{" "}
                {animal.age}yr
              </p>
              <p className="mt-4 font-[var(--font-playfair)] text-[1.5rem] font-bold text-[#0F4020]">
                ৳{animal.price.toLocaleString("en-BD")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
