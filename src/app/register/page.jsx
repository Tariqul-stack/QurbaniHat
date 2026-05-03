"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { registerWithEmail, loginWithGoogle } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      // Better Auth signUp.email takes name, email, password
      // photoURL can be passed as 'image' if the context supports it, 
      // but for now we follow the user's provided logic.
      await registerWithEmail(name, email, password);
      router.push("/login");
    } catch (err) {
      setError(err.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error(err);
      setError("Google sign-in failed. Try again.");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#EFF5F0] p-8">
      <div className="w-full max-w-[460px] rounded-[24px] border border-[#E2E8E0] bg-white p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
        <div className="text-center">
          <div className="mx-auto mb-[1.2rem] flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1B6B3A] text-[2rem]">
            🐄
          </div>
          <h1 className="mb-[0.4rem] font-display text-[2rem] font-bold text-[#1A1A1A]">
            Create Account
          </h1>
          <p className="mb-[1.8rem] text-[0.95rem] text-[#6B6B6B]">
            Join QurbaniHat today — it&apos;s free
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          className="mb-6 flex w-full items-center justify-center gap-[10px] rounded-full border-[1.5px] border-[#E2E8E0] bg-white p-[14px] text-[0.95rem] font-medium text-[#1A1A1A] transition-all duration-200 hover:border-[#C5D5C0]"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"
            />
            <path
              fill="#34A853"
              d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"
            />
            <path
              fill="#FBBC05"
              d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18z"
            />
            <path
              fill="#EA4335"
              d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="mb-[1.2rem] flex items-center gap-4">
          <span className="h-px flex-1 bg-[#E2E8E0]" />
          <span className="text-[0.82rem] text-[#9B9B9B]">
            or register with email
          </span>
          <span className="h-px flex-1 bg-[#E2E8E0]" />
        </div>

        <div className="mb-[1.2rem]">
          <label
            htmlFor="name"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ahmed Hassan"
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
        </div>

        <div className="mb-[1.2rem]">
          <label
            htmlFor="email"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
        </div>

        <div className="mb-[1.2rem]">
          <label
            htmlFor="photo-url"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Photo URL
          </label>
          <input
            id="photo-url"
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="https://..."
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
        </div>

        <div className="mb-[1.2rem]">
          <label
            htmlFor="password"
            className="mb-[6px] block text-[0.9rem] font-medium text-[#1A1A1A]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 6 characters"
            className="w-full rounded-xl border-[1.5px] border-[#E2E8E0] bg-white px-4 py-[13px] text-[0.92rem] text-[#1A1A1A] outline-none transition-colors duration-200 placeholder:text-[#9B9B9B] focus:border-[#1B6B3A] focus:shadow-[0_0_0_3px_rgba(27,107,58,0.08)]"
          />
        </div>

        {error && (
          <p className="mb-3 rounded-lg bg-red-50 px-4 py-3 text-[0.83rem] text-red-600 border border-red-100">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleRegister}
          disabled={loading}
          className={`mt-2 w-full rounded-xl bg-[#1B6B3A] p-[15px] text-base font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#0F4020] hover:shadow-[0_4px_12px_rgba(27,107,58,0.3)] ${
            loading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="mt-[1.2rem] text-center text-[0.88rem] text-[#6B6B6B]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-[#1B6B3A] no-underline hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
