"use client";

import { useEffect } from "react";

export default function Toast({
  show,
  type = "success",
  title,
  message,
  onClose,
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const config = {
    success: {
      bg: "bg-gradient-to-r from-[#0F4020] to-[#1B6B3A]",
      icon: "✅",
      bar: "bg-[#4ADE80]",
      iconBg: "bg-[#4ADE80]/20",
    },
    error: {
      bg: "bg-gradient-to-r from-[#7F1D1D] to-[#DC2626]",
      icon: "⚠️",
      bar: "bg-red-300",
      iconBg: "bg-red-300/20",
    },
  };

  const c = config[type] || config.success;

  return (
    <div
      className={`
        fixed right-6 top-6 z-[999]
        w-[320px] overflow-hidden
        rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        ${c.bg}
        animate__animated animate__fadeInDown
        animate__faster
      `}
    >
      <div className="flex items-start gap-3 p-4">
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center
            justify-center rounded-xl text-[1.2rem]
            ${c.iconBg}
          `}
        >
          {c.icon}
        </div>

        <div className="flex-1 pt-0.5">
          <p className="text-[0.92rem] font-semibold text-white leading-tight">
            {title}
          </p>
          {message && (
            <p className="mt-1 text-[0.8rem] text-white/70 leading-snug">
              {message}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="shrink-0 text-white/40 hover:text-white transition-colors duration-200 text-lg leading-none mt-0.5"
        >
          ✕
        </button>
      </div>

      <div className="h-[3px] w-full bg-white/10">
        <div
          className={`h-full ${c.bar} rounded-full`}
          style={{
            animation: "shrinkBar 4s linear forwards",
          }}
        />
      </div>
    </div>
  );
}
