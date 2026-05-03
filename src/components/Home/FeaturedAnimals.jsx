"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AnimatedCard from "@/components/AnimatedCard";
import LottieLoader from "@/components/LottieLoader";
import { animals } from "@/data/animals";

const typeBadgeClasses = {
  Cow: "bg-[#1B6B3A]",
  Goat: "bg-[#C8860A]",
  Sheep: "bg-[#C8860A]",
};

export default function FeaturedAnimals() {
  const router = useRouter();
  const [sectionLoading, setSectionLoading] = useState(true);
  const featuredAnimals = animals.slice(0, 4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSectionLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const goToAnimal = (id) => {
    router.push(`/animals/${id}`);
  };

  return (
    <section id="featured" className="bg-[#FAFAF5] px-8 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <span className="mb-[0.8rem] block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#1B6B3A]">
            Handpicked For You
          </span>
          <h2 className="font-display text-[2.8rem] font-bold tracking-[-0.5px] text-[#1A1A1A]">
            Featured Animals
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-center text-base leading-[1.7] text-[#6B6B6B]">
            Healthy, well-fed livestock from verified farms — perfect for your
            Qurbani needs.
          </p>
        </div>

        {sectionLoading ? (
          <div className="mt-12">
            <LottieLoader message="Loading featured animals..." />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredAnimals.map((animal, index) => (
              <AnimatedCard
                key={animal.id}
                delay={index * 100}
                onClick={() => goToAnimal(animal.id)}
                className="group overflow-hidden rounded-2xl border border-[#E2E8E0] bg-white"
              >
                <div className="relative h-[200px] overflow-hidden bg-[#D8EDD8]">
                  {animal.image ? (
                    <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="absolute inset-0 items-center justify-center text-[5rem]"
                    style={{ display: animal.image ? 'none' : 'flex' }}
                  >
                    {animal.icon}
                  </div>
                  <span
                    className={`absolute left-3 top-3 rounded-md px-3 py-1 text-[0.75rem] font-semibold text-white ${typeBadgeClasses[animal.type] || "bg-[#C8860A]"
                      }`}
                  >
                    {animal.type}
                  </span>
                </div>

                <div className="p-[1.2rem]">
                  <h3 className="mb-2 font-display text-[1.15rem] font-semibold text-[#1A1A1A]">
                    {animal.name}
                  </h3>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[0.82rem] text-[#6B6B6B]">
                    <span className="flex items-center gap-1">⚖️ {animal.weight}kg</span>
                    <span className="flex items-center gap-1">📍 {animal.location}</span>
                    <span className="flex items-center gap-1">🎂 {animal.age}yr</span>
                  </div>

                  <div className="mt-4 border-t border-[#E2E8E0] pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-[1.3rem] font-bold text-[#0F4020]">
                        ৳{animal.price.toLocaleString("en-BD")}
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
                </div>
              </AnimatedCard>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => router.push("/animals")}
            className="inline-flex items-center justify-center rounded-xl bg-[#1B6B3A] px-9 py-[14px] text-base font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#0F4020]"
          >
            View All Animals →
          </button>
        </div>
      </div>
    </section>
  );
}
