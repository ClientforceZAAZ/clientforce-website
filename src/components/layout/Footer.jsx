

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FOOTER_LINKS = [
  {
    heading: "Services",
    color: "text-emerald-400",
    links: [
      { label: "Products",  href: "/products"  },
      { label: "Solutions", href: "/solutions" },
      { label: "Pricing",   href: "/pricing"   },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "About",
    color: "text-emerald-400",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Benefits",  href: "/benefits"  },
      { label: "Team",      href: "/team"      },
      { label: "Careers",   href: "/careers"   },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-white fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio")) return null;

  return (
    <footer className="bg-black px-6 py-12 md:px-16">
      <div className="mx-auto max-w-7xl">

        {/* ── Top row ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left — logo, description, email */}
          <div className="max-w-full lg:max-w-[380px]">
            <Image
              src="/icons/clientForceAi_logo.svg"
              width={148}
              height={28}
              alt="Clientforce AI"
            />
            <p className="text-white text-sm mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div className="flex items-center h-12 w-full max-w-xs mt-6 overflow-hidden rounded-xl bg-[#1f1f1f]">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 text-sm text-white placeholder-gray-500 outline-none"
              />
              <Image
                src="/icons/Submit_icon.svg"
                width={32}
                height={32}
                className="h-10 w-auto mr-1"
                alt="Submit"
              />
            </div>
          </div>

          {/* Right — link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 lg:gap-20">

            {/* Services + About */}
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <h4 className={`mb-5 text-sm font-semibold ${col.color}`}>
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Follow Us */}
            <div>
              <h4 className="mb-5 text-sm font-semibold text-emerald-400">
                Follow Us
              </h4>
              <ul className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="flex items-center gap-2.5 text-sm text-gray-400 transition hover:text-white"
                    >
                      {s.icon}
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* ── Divider ── */}
        <div className="my-8 h-px bg-gray-800" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <p>Copyright © 2025. Clientforce AI. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
            <Link href="#" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}