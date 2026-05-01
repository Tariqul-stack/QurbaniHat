import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "All Animals", href: "/animals" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const categories = [
  { label: "Cows", href: "#" },
  { label: "Goats", href: "#" },
  { label: "Sheep", href: "#" },
  { label: "Camels", href: "#" },
];

const contactItems = [
  "📞 +880 1800-000000",
  "✉️ info@qurbanihat.com",
  "📍 Dhaka, Bangladesh",
];

const socialLinks = ["f", "t", "in"];

const headingClass =
  "mb-4 text-[0.78rem] font-semibold uppercase tracking-[1.2px] text-[rgba(255,255,255,0.4)]";

const linkClass =
  "text-[0.85rem] text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-200 hover:text-white";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F4020] px-8 pb-6 pt-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-12">
          <div>
            <h2 className="mb-3 font-[var(--font-playfair)] text-[1.3rem] font-bold text-white">
              QurbaniHat
            </h2>
            <p className="max-w-[220px] text-[0.85rem] leading-[1.7] text-[rgba(255,255,255,0.5)]">
              Bangladesh&apos;s most trusted livestock marketplace for Qurbani
              season. Safe, verified, and convenient.
            </p>
          </div>

          <div>
            <h3 className={headingClass}>Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Categories</h3>
            <div className="flex flex-col gap-2">
              {categories.map((link) => (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Contact</h3>
            <div className="flex flex-col gap-2">
              {contactItems.map((item) => (
                <span
                  key={item}
                  className="cursor-pointer text-[0.85rem] text-[rgba(255,255,255,0.65)] transition-colors duration-200 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-[0.8rem] flex gap-[10px]">
              {socialLinks.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-[rgba(255,255,255,0.1)] text-[0.82rem] font-semibold text-[rgba(255,255,255,0.7)] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.2)]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(255,255,255,0.1)] pt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[0.8rem] text-[rgba(255,255,255,0.4)]">
            <span>© 2026 QurbaniHat. All rights reserved.</span>
            <span>Made with ❤️ for the Ummah</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
