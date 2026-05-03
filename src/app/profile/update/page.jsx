"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { authClient } from "@/lib/auth-client";

const isValidUrl = (value) => {
  if (!value.trim()) return false;

  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export default function UpdateProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [photoTouched, setPhotoTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const displayName = nameTouched ? name : user?.name || "";
  const displayPhotoURL = photoTouched ? photoURL : user?.photo || "";

  const initials = useMemo(() => {
    if (!displayName.trim()) return user?.initials || "?";

    return displayName
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() || "")
      .join("") || "?";
  }, [displayName, user?.initials]);

  const handleUpdate = async () => {
    setError("");
    setSuccess(false);

    const nextName = displayName.trim();
    const nextPhotoURL = displayPhotoURL.trim();

    if (!nextName) {
      setError("Name cannot be empty");
      return;
    }

    setLoading(true);
    try {
      await authClient.updateUser({
        name: nextName,
        image: nextPhotoURL || null,
      });
      setSuccess(true);
      setTimeout(() => {
        router.push("/profile");
      }, 1500);
    } catch (err) {
      setError(err.message || "Update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#E2E8E0] border-t-[#1B6B3A]" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const showPreviewImage = isValidUrl(displayPhotoURL);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FAFAF5] px-8 py-12">
      <div className="w-full max-w-[480px] rounded-[20px] border border-[#E2E8E0] bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <Link
          href="/profile"
          className="mb-6 block text-[0.85rem] text-[#6B6B6B] no-underline transition-colors duration-200 hover:text-[#1B6B3A]"
        >
          ← Back to Profile
        </Link>

        <h1 className="mb-[0.4rem] font-[var(--font-playfair)] text-[1.6rem] font-bold text-[#1A1A1A]">
          Update Information
        </h1>
        <p className="mb-8 text-[0.88rem] text-[#6B6B6B]">
          Update your name and profile photo
        </p>

        <div className="mb-8 text-center">
          {showPreviewImage ? (
            <Image
              src={displayPhotoURL}
              alt="avatar"
              width={80}
              height={80}
              unoptimized
              className="mx-auto mb-[0.8rem] h-20 w-20 rounded-full border-[3px] border-[#E2E8E0] object-cover"
            />
          ) : (
            <div className="mx-auto mb-[0.8rem] flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#E2E8E0] bg-[#C8860A] font-[var(--font-playfair)] text-[2rem] font-bold text-white">
              {initials}
            </div>
          )}
        </div>

        <div className="mb-[1.2rem]">
          <label
            htmlFor="full-name"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Full Name
          </label>
          <input
            id="full-name"
            type="text"
            value={displayName}
            onChange={(e) => {
              setNameTouched(true);
              setName(e.target.value);
            }}
            placeholder="Your full name"
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] px-4 py-[13px] text-[0.92rem] outline-none transition-colors duration-200 focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="photo-url"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Photo URL
          </label>
          <input
            id="photo-url"
            type="url"
            value={displayPhotoURL}
            onChange={(e) => {
              setPhotoTouched(true);
              setPhotoURL(e.target.value);
            }}
            placeholder="https://your-photo-url.com/photo.jpg"
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] px-4 py-[13px] text-[0.92rem] outline-none transition-colors duration-200 focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
          <p className="mb-0 mt-1 text-[0.78rem] text-[#9B9B9B]">
            Enter a direct link to your profile image
          </p>
        </div>

        {error && (
          <p className="mb-4 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-[0.83rem] text-red-600">
            {error}
          </p>
        )}

        {success && (
          <p className="mb-4 rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-[0.83rem] text-[#1B6B3A]">
            ✅ Profile updated successfully!
          </p>
        )}

        <button
          type="button"
          onClick={handleUpdate}
          disabled={loading}
          className="w-full rounded-xl bg-[#1B6B3A] px-4 py-[13px] text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#0F4020] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </div>
    </section>
  );
}
