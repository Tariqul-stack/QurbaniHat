"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/animals", label: "All Animals" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgb(226,232,224)] bg-white/96 backdrop-blur-md">
      <div className="mx-auto grid h-23.5 w-full grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-4 justify-self-start no-underline"
        >
          <div className="flex h-13.5 w-13.5 items-center justify-center rounded-xl bg-linear-to-br from-[rgb(27,107,58)] to-[rgb(46,139,87)] text-[23px] shadow-[0_8px_18px_rgba(27,107,58,0.18)]">
            🐄
          </div>
          <span
            className="font-display text-[2.05rem] font-bold leading-none tracking-[-0.04em] text-[rgb(15,64,32)]"
          >
            Qurbani<span className="text-[rgb(200,134,10)]">Hat</span>
          </span>
        </Link>

        {/* NAV LINKS — desktop */}
        <div className="hidden items-center justify-center gap-10 justify-self-center md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[0.95rem] no-underline transition-colors duration-200 ${isActive(href)
                ? "font-semibold text-[rgb(27,107,58)]"
                : "font-medium text-[rgb(107,107,107)] hover:text-[rgb(27,107,58)]"
                }`}
            >
              {label}
            </Link>
          ))}
          {user && (
            <Link
              href="/profile"
              className={`text-[0.95rem] no-underline transition-colors duration-200 ${isActive("/profile")
                ? "font-semibold text-[rgb(27,107,58)]"
                : "font-medium text-[rgb(107,107,107)] hover:text-[rgb(27,107,58)]"
                }`}
            >
              My Profile
            </Link>
          )}
        </div>

        {/* AUTH BUTTONS — desktop */}
        <div className="hidden items-center justify-end gap-6 justify-self-end md:flex">
          {user ? (
            <>
              <Link href="/profile">
                <div
                  title={user.name}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-[rgb(27,107,58)] text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
                >
                  {user.initials}
                </div>
              </Link>
              <button
                onClick={logout}
                className="inline-flex h-13 cursor-pointer items-center justify-center rounded-[14px] border-[1.5px] border-[rgb(197,213,192)] bg-transparent px-7 text-[0.95rem] font-semibold text-[rgb(26,26,26)] transition-all duration-200 hover:border-[rgb(27,107,58)] hover:text-[rgb(27,107,58)]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex h-13 min-w-28 items-center justify-center rounded-2xl border-[1.5px] border-[rgb(197,213,192)] bg-transparent px-8 text-[0.95rem] font-semibold text-[rgb(26,26,26)] no-underline transition-all duration-200 hover:border-[rgb(27,107,58)] hover:text-[rgb(27,107,58)]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex h-13 min-w-30.5 items-center justify-center rounded-2xl bg-[#376F3C] px-8 text-[0.95rem] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:bg-[rgb(15,64,32)] hover:shadow-[0_4px_12px_rgba(27,107,58,0.3)]"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* HAMBURGER — mobile */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.25 rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-[rgb(26,26,26)] transition-all duration-300 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[rgb(26,26,26)] transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-[rgb(26,26,26)] transition-all duration-300 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-[rgb(226,232,224)] bg-white px-6 py-4 md:hidden flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`py-2 text-sm no-underline transition-colors duration-200 ${isActive(href)
                ? "font-semibold text-[rgb(27,107,58)]"
                : "font-medium text-[rgb(107,107,107)]"
                }`}
            >
              {label}
            </Link>
          ))}
          {user && (
            <Link
              href="/profile"
              onClick={() => setMobileOpen(false)}
              className="py-2 text-sm font-medium no-underline text-[rgb(107,107,107)]"
            >
              My Profile
            </Link>
          )}
          <div className="flex flex-col gap-2 border-t border-[rgb(226,232,224)] pt-3">
            {user ? (
              <>
                <span className="text-sm font-medium text-[rgb(27,107,58)]">
                  👤 {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="rounded-lg border-[1.5px] border-[rgb(197,213,192)] bg-transparent px-5 py-2 text-left text-sm font-medium text-[rgb(26,26,26)]"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border-[1.5px] border-[rgb(197,213,192)] py-2 text-center text-sm font-medium text-[rgb(26,26,26)] no-underline"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-[rgb(27,107,58)] py-2 text-center text-sm font-medium text-white no-underline"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
