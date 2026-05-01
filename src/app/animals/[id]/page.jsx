'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { animals } from '@/data/animals'

export default function AnimalDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  
  const animal = animals.find(a => a.id === Number(id))

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#6B6B6B] bg-[#FAFAF5]">
        Animal not found.
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAFAF5] px-8 py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN — Animal Image */}
          <div className="bg-[#D8EDD8] rounded-[20px] h-[420px] flex items-center justify-center border border-[#E2E8E0]">
            <span className="text-[8rem] select-none">{animal.icon}</span>
          </div>

          {/* RIGHT COLUMN — Animal Info */}
          <div className="flex flex-col">
            <Link 
              href="/animals" 
              className="inline-flex items-center gap-[6px] text-[0.88rem] text-[#6B6B6B] hover:text-[#1B6B3A] transition-colors mb-3.5"
            >
              <span>←</span>
              <span>Back to All Animals</span>
            </Link>

            <h1 className="font-[var(--font-playfair)] font-bold text-[2rem] text-[#1A1A1A] mb-3.5">
              {animal.name}
            </h1>

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#E8F5EE] text-[#1B6B3A] text-[0.78rem] font-medium px-3 py-1 rounded-full">
                {animal.type}
              </span>
              <span className="bg-[#FDF3E0] text-[#C8860A] text-[0.78rem] font-medium px-3 py-1 rounded-full">
                {animal.breed || "Local Breed"}
              </span>
              <span className="bg-[#E8F5EE] text-[#1B6B3A] text-[0.78rem] font-medium px-3 py-1 rounded-full">
                {animal.category || "Small Animal"}
              </span>
            </div>

            <div className="font-[var(--font-playfair)] font-bold text-[2.4rem] text-[#0F4020] mb-6">
              ৳{animal.price.toLocaleString()}
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-[#E2E8E0] rounded-[10px] p-4 lg:px-[1.2rem]">
                <div className="text-[0.72rem] font-bold tracking-[0.8px] uppercase text-[#9B9B9B] mb-[0.3rem]">
                  WEIGHT
                </div>
                <div className="text-[0.95rem] font-semibold text-[#1A1A1A]">
                  {animal.weight} kg
                </div>
              </div>
              <div className="bg-white border border-[#E2E8E0] rounded-[10px] p-4 lg:px-[1.2rem]">
                <div className="text-[0.72rem] font-bold tracking-[0.8px] uppercase text-[#9B9B9B] mb-[0.3rem]">
                  AGE
                </div>
                <div className="text-[0.95rem] font-semibold text-[#1A1A1A]">
                  {animal.age} Years
                </div>
              </div>
              <div className="bg-white border border-[#E2E8E0] rounded-[10px] p-4 lg:px-[1.2rem]">
                <div className="text-[0.72rem] font-bold tracking-[0.8px] uppercase text-[#9B9B9B] mb-[0.3rem]">
                  LOCATION
                </div>
                <div className="text-[0.95rem] font-semibold text-[#1A1A1A]">
                  {animal.location}
                </div>
              </div>
              <div className="bg-white border border-[#E2E8E0] rounded-[10px] p-4 lg:px-[1.2rem]">
                <div className="text-[0.72rem] font-bold tracking-[0.8px] uppercase text-[#9B9B9B] mb-[0.3rem]">
                  CATEGORY
                </div>
                <div className="text-[0.95rem] font-semibold text-[#1A1A1A]">
                  {animal.category || "Small Animal"}
                </div>
              </div>
            </div>

            {/* Description block */}
            <div className="bg-white border-l-[3px] border-[#1B6B3A] rounded-r-lg p-4 lg:px-[1.2rem] mb-8 text-[0.95rem] text-[#6B6B6B] leading-[1.7]">
              {animal.description || "No description available for this animal."}
            </div>

            {/* Booking section (Login Required Card) */}
            <div className="bg-white border border-[#E2E8E0] rounded-[16px] p-10 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <div className="text-[2.5rem] mb-4">🔒</div>
              <h2 className="font-[var(--font-playfair)] font-bold text-[1.4rem] text-[#1A1A1A] mb-2">
                Login Required
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] mb-6">
                You need to be logged in to book an animal.
              </p>
              <div className="flex items-center justify-center gap-[10px]">
                <Link 
                  href="/login" 
                  className="bg-[#1B6B3A] text-white px-7 py-2.5 rounded-[10px] text-[0.9rem] font-semibold hover:bg-[#0F4020] transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="bg-transparent border-[1.5px] border-[#E2E8E0] text-[#1A1A1A] px-7 py-2.5 rounded-[10px] text-[0.9rem] font-semibold hover:border-[#1B6B3A] hover:text-[#1B6B3A] transition-all"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
