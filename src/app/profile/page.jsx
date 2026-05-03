"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LottieLoader from "@/components/LottieLoader";
import { useAuth } from "@/context/AuthContext";

const infoRows = (user) => [
  { label: "Full Name", value: user?.name || "—" },
  { label: "Email", value: user?.email || "—" },
  { label: "Member Since", value: "May 2025" },
  { label: "Bookings Made", value: "0" },
];

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <LottieLoader
        fullScreen={true}
        message="Loading your profile..."
      />
    );
  }

  if (!user) {
    return null;
  }

  return (
    <section className="min-h-screen bg-[#FAFAF5] px-8 py-12">
      <div className="mx-auto max-w-[700px]">
        <div className="overflow-hidden rounded-[20px] border border-[#E2E8E0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          <div className="h-[120px] bg-[linear-gradient(135deg,#0F4020,#2E8B57)]" />

          <div className="px-8 pb-8">
            {user.photo ? (
              <Image
                src={user.photo}
                alt={user.name || "Profile"}
                width={80}
                height={80}
                unoptimized
                className="-mt-10 h-20 w-20 rounded-full border-4 border-white bg-[#C8860A] object-cover"
              />
            ) : (
              <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#C8860A] font-[var(--font-playfair)] text-[2rem] font-bold text-white">
                {user?.initials || "?"}
              </div>
            )}

            <h1 className="mb-[0.3rem] mt-[0.8rem] font-[var(--font-playfair)] text-[1.5rem] font-bold text-[#1A1A1A]">
              {user?.name || "Guest"}
            </h1>
            <p className="text-[0.9rem] text-[#6B6B6B]">{user?.email || ""}</p>

            <div className="my-6 border-t border-[#E2E8E0]" />

            <div>
              {infoRows(user).map((row, index, rows) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between py-4 ${
                    index !== rows.length - 1 ? "border-b border-[#E2E8E0]" : ""
                  }`}
                >
                  <span className="text-[0.83rem] text-[#6B6B6B]">
                    {row.label}
                  </span>
                  <span className="text-[0.92rem] font-semibold text-[#1A1A1A]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => router.push("/profile/update")}
              className="mt-6 rounded-[10px] bg-[#1B6B3A] px-6 py-[10px] text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-[#0F4020]"
            >
              Update Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
