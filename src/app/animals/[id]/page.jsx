'use client'

import { useAuth } from "@/context/AuthContext"
import { useEffect, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Toast from "@/components/Toast"
import LottieLoader from "@/components/LottieLoader"
import { animals } from '@/data/animals'

export default function AnimalDetailsPage() {
  const { id } = useParams()
  const router = useRouter()
  const { user } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [bookingLoading, setBookingLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState("")
  const [toastType, setToastType] = useState("success")
  
  const [pageLoading, setPageLoading] = useState(true)
  const [pageEntered, setPageEntered] = useState(false)
  
  const animal = animals.find(a => a.id === Number(id))

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false)
      setTimeout(() => setPageEntered(true), 50)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const pageSpring = useSpring({
    opacity: pageEntered ? 1 : 0,
    transform: pageEntered
      ? "translateY(0px)"
      : "translateY(20px)",
    config: { tension: 280, friction: 26 }
  })

  const handleBooking = async () => {
    if (!name || !email || !phone || !address) {
      setToastType("error")
      setToastMsg("Please fill in all required fields")
      setShowToast(true)
      return
    }

    setBookingLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setToastType("success")
    setToastMsg(`We will contact you at ${email} soon.`)
    setShowToast(true)
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setBookingLoading(false)
  }

  if (pageLoading) {
    return (
      <div className="min-h-screen bg-[#FAFAF5]">
        <LottieLoader
          message="Loading animal details..."
        />
      </div>
    )
  }

  if (!animal) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#6B6B6B] bg-[#FAFAF5]">
        Animal not found.
      </div>
    )
  }

  return (
    <>
      <Toast
        show={showToast}
        type={toastType}
        title={
          toastType === "error"
            ? "Missing Fields"
            : "Booking Confirmed!"
        }
        message={toastMsg}
        onClose={() => setShowToast(false)}
      />

      <main className="min-h-screen bg-[#FAFAF5] px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <animated.div style={pageSpring}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT COLUMN — Animal Image */}
            <div className="rounded-2xl overflow-hidden border border-[#E2E8E0] h-[420px] bg-[#D8EDD8] relative">
              {animal.image ? (
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
              ) : null}
              <div
                className="w-full h-full items-center justify-center text-[8rem] absolute inset-0"
                style={{ display: animal.image ? 'none' : 'flex' }}
              >
                {animal.icon}
              </div>
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

              <h1 className="font-display font-bold text-[2rem] text-[#1A1A1A] mb-3.5">
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

              <div className="font-display font-bold text-[2.4rem] text-[#0F4020] mb-6">
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

              {user ? (
                <div className="rounded-2xl border border-[#E2E8E0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <h2 className="mb-6 font-display text-[1.4rem] font-semibold text-[#1A1A1A]">
                    Book This Animal
                  </h2>

                  <div className="mb-4">
                    <label className="mb-[6px] block text-[0.9rem] font-semibold text-[#1A1A1A]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-[6px] block text-[0.9rem] font-semibold text-[#1A1A1A]">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-[6px] block text-[0.9rem] font-semibold text-[#1A1A1A]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="mb-[6px] block text-[0.9rem] font-semibold text-[#1A1A1A]">
                      Delivery Address
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Your full address..."
                      rows={3}
                      className="w-full resize-none rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleBooking}
                    disabled={bookingLoading}
                    className={`w-full rounded-xl bg-[#1B6B3A] py-[15px] text-[1rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#0F4020] hover:shadow-[0_4px_12px_rgba(27,107,58,0.3)] ${
                      bookingLoading ? "cursor-not-allowed opacity-70" : ""
                    }`}
                  >
                    {bookingLoading ? "Confirming..." : "Confirm Booking →"}
                  </button>
                </div>
              ) : (
                <div className="rounded-2xl border border-[#E2E8E0] bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <div className="mb-4 text-[2.5rem]">🔒</div>
                  <h2 className="mb-2 font-display text-[1.4rem] font-bold text-[#1A1A1A]">
                    Login Required
                  </h2>
                  <p className="mb-6 text-[0.88rem] text-[#6B6B6B]">
                    You need to be logged in to book an animal.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      href="/login"
                      className="rounded-[10px] bg-[#1B6B3A] px-7 py-[10px] text-[0.9rem] font-semibold text-white no-underline transition-all duration-200 hover:bg-[#0F4020]"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="rounded-[10px] border-[1.5px] border-[#E2E8E0] px-7 py-[10px] text-[0.9rem] font-semibold text-[#1A1A1A] no-underline transition-all duration-200 hover:border-[#1B6B3A] hover:text-[#1B6B3A]"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              )}
            </div>
            </div>
          </animated.div>
        </div>
      </main>
    </>
  )
}
