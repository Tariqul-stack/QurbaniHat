import { notFound } from "next/navigation";
import { animals } from "@/data/animals";

export default async function AnimalDetailsPage({ params }) {
  const { id } = await params;
  const animal = animals.find((item) => item.id === id);

  if (!animal) {
    notFound();
  }

  return (
    <section className="bg-[#FAFAF5] px-8 py-16">
      <div className="mx-auto max-w-[1200px] rounded-[20px] border border-[#E2E8E0] bg-white p-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="flex h-[320px] items-center justify-center rounded-[20px] bg-[#D8EDD8] text-[7rem]">
            {animal.emoji}
          </div>

          <div>
            <span className="inline-flex rounded-md bg-[#E8F5EE] px-3 py-1 text-sm font-semibold text-[#1B6B3A]">
              {animal.type}
            </span>
            <h1 className="mt-4 font-[var(--font-playfair)] text-[2.3rem] font-bold text-[#1A1A1A]">
              {animal.name}
            </h1>
            <p className="mt-3 text-lg text-[#6B6B6B]">
              {animal.weight}kg · {animal.location} · {animal.age} years old
            </p>
            <p className="mt-6 font-[var(--font-playfair)] text-[2rem] font-bold text-[#0F4020]">
              ৳{animal.price.toLocaleString("en-BD")}
            </p>
            <p className="mt-6 max-w-[520px] text-base leading-7 text-[#6B6B6B]">
              Premium livestock sourced from a trusted Bangladeshi farm. This
              detail page is now in place so the featured cards can navigate to
              a real animal view instead of a 404.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
