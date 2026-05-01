"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { animals } from "@/data/animals";

const filters = [
  { label: "All", value: "all" },
  { label: "🐄 Cows", value: "Cow" },
  { label: "🐐 Goats", value: "Goat" },
  { label: "🐑 Sheep", value: "Sheep" },
];

const badgeClasses = {
  Cow: "bg-[#1B6B3A]",
  Goat: "bg-[#C8860A]",
  Sheep: "bg-[#C8860A]",
};

const sortOptions = [
  { value: "", label: "Sort by" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "weight", label: "Heaviest First" },
];

export default function AnimalsPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const [sortLabel, setSortLabel] = useState("Sort by");

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest("#sort-dropdown")) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered =
    activeFilter === "all"
      ? [...animals]
      : animals.filter((animal) => animal.type === activeFilter);

  if (sortValue === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "weight") {
    filtered.sort((a, b) => b.weight - a.weight);
  }

  const goToAnimal = (id) => {
    router.push(`/animals/${id}`);
  };

  return (
    <section className="bg-[#FAFAF5]">
      <div className="bg-[linear-gradient(135deg,#0F4020,#1B6B3A)] px-8 py-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="mb-2 font-display text-[2.4rem] font-bold text-white">
            All Animals
          </h1>
          <p className="text-[0.95rem] text-[rgba(255,255,255,0.7)]">
            Browse our full collection of verified livestock for Qurbani
          </p>
        </div>
      </div>

      <div className="border-b border-[#E2E8E0] bg-white px-8 py-4">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full border-[1.5px] px-[18px] py-2 text-[0.85rem] transition-all duration-200 ${isActive
                      ? "border-[#1B6B3A] bg-white font-semibold text-[#1B6B3A]"
                      : "border-[#E2E8E0] bg-white font-medium text-[#6B6B6B] hover:border-[#C5D5C0] hover:text-[#1B6B3A]"
                    }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div id="sort-dropdown" className="relative inline-block">
            <button
              type="button"
              onClick={() => setSortOpen(!sortOpen)}
              className={`flex min-w-[160px] cursor-pointer items-center justify-between gap-[10px] rounded-xl border-[1.5px] px-[18px] py-[10px] text-[0.88rem] font-medium text-[#1A1A1A] backdrop-blur-md transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] bg-white/15 ${sortOpen
                  ? 'border-[#1B6B3A] bg-white/25 shadow-[0_0_0_3px_rgba(27,107,58,0.1)]'
                  : 'border-white/35 hover:border-[#1B6B3A]/40 hover:bg-white/22'
                }`}
            >
              <span>{sortLabel}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B6B3A"
                strokeWidth="2.5"
                className={`transition-transform duration-[250ms] ease-in-out ${sortOpen ? 'rotate-180' : 'rotate-0'
                  }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {sortOpen && (
              <div
                className="absolute right-0 top-[calc(100%+8px)] z-[100] min-w-[210px] animate-in fade-in slide-in-from-top-1 rounded-2xl border border-[#4ADE80]/20 p-2 bg-[rgba(10,45,20,0.85)] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(74,222,128,0.12)]"
              >
                {sortOptions.map((option, index) => (
                  <div key={option.label}>
                    <button
                      type="button"
                      onClick={() => {
                        setSortValue(option.value);
                        setSortLabel(option.label);
                        setSortOpen(false);
                      }}
                      className={`flex w-full cursor-pointer items-center gap-[10px] rounded-[10px] px-[14px] py-[10px] text-[0.88rem] tracking-[0.1px] transition-all duration-150 hover:bg-[rgba(74,222,128,0.10)] hover:text-white ${option.value === sortValue
                          ? 'bg-[rgba(74,222,128,0.12)] font-semibold text-white'
                          : 'text-[rgba(255,255,255,0.80)]'
                        }`}
                    >
                      <span className="inline-block w-4">
                        {option.value === sortValue ? (
                          <span className="text-[0.82rem] font-bold text-[#4ADE80]">✓</span>
                        ) : null}
                      </span>
                      <span>{option.label}</span>
                    </button>
                    {index === 0 && (
                      <div className="mx-2 my-1 h-px bg-[#4ADE80]/15" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-68px-60px)] bg-[#FAFAF5] px-8 py-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filtered.map((animal) => (
            <article
              key={animal.id}
              onClick={() => goToAnimal(animal.id)}
              className="cursor-pointer overflow-hidden rounded-2xl border border-[#E2E8E0] bg-white transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative flex h-[200px] items-center justify-center rounded-t-[12px] bg-[#D8EDD8]">
                <span
                  className={`absolute left-3 top-3 rounded-md px-3 py-1 text-[0.75rem] font-semibold tracking-[0.3px] text-white ${badgeClasses[animal.type] || "bg-[#C8860A]"
                    }`}
                >
                  {animal.type}
                </span>
                <span className="text-[4.5rem]">{animal.icon}</span>
              </div>

              <div className="px-[1.2rem] pb-[1.4rem] pt-[1.2rem]">
                <h2 className="mb-[0.4rem] font-display text-[1.1rem] font-bold text-[#1A1A1A]">
                  {animal.name}
                </h2>

                <div className="flex flex-wrap items-center gap-[6px] text-[0.8rem] text-[#6B6B6B]">
                  <span>⚖️ {animal.weight}kg</span>
                  <span>·</span>
                  <span>📍 {animal.location}</span>
                  <span>·</span>
                  <span>🎂 {animal.age}yr</span>
                </div>

                <div className="my-[0.9rem] border-t border-[#E2E8E0]" />

                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-[1.2rem] font-bold text-[#0F4020]">
                    ৳{animal.price.toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      goToAnimal(animal.id);
                    }}
                    className="rounded-lg bg-[#E8F5EE] px-[18px] py-[7px] text-[0.82rem] font-medium text-[#1B6B3A] transition-all duration-200 hover:bg-[#1B6B3A] hover:text-white"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
