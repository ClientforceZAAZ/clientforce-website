

"use client"

import Link from "next/link"


export default function CTA({
  href = "#",
  children,
  variant = "dark",
  darkIcon = null,
  lightIcon = null,
  className = "",
}) {

  const variants = {
    dark: {
      background:
        "bg-[linear-gradient(90deg,#6d6f46,#3c413c,#3d423e,#3e5548,#3a7d47)]",
      text: "text-white",
      extension: "bg-[#0AD855]",
      border: "",
    },
    light: {
      background: "bg-white",
      text: "text-[#00000099]",
      extension: "bg-[#d4d4d4]",
      border: "border border-black",
    },
  }

  const selected = variants[variant]

  return (
    <div className="relative inline-block group">
      
      {/* Bottom extension */}
      <span
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-[-7.5] w-[97%] h-3 bg-[#0AD855] rounded-md transition-all duration-300 group-hover:mt-[-12] ${selected.extension}`}
      ></span>

      <Link
        href={href}
        className={`relative inline-flex items-center justify-center px-2 sm:px-4 py-3 rounded-md font-bold transition-transform duration-300 hover:-translate-y-1 ${selected.text} ${selected.border} ${className}`}
      >
        {/* Background layer */}
        <span
          className={`absolute inset-0 rounded-lg ${selected.background}`}
        ></span>

        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
            { variant === "light" && (<img src="/icons/Play.svg" alt="playIcon" className="h-5 md:h-8" />) }
            {children}
            { variant === "dark" && (<img src="/icons/forward.svg" alt="forwardIcon" className="h-5 md:h-8" />) }
        </span>
      </Link>
    </div>
  )
}