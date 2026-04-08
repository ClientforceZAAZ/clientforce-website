
"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { MdOutlineLocalPhone } from "react-icons/md";

// ─── Menu Data ─────────────────────────────────────────────────────────────────

const PRODUCTS_ITEMS = [
  { icon: <Image src="/images/navbar/icons/user-add.svg" width={22} height={22} />, title: "Agents (AI Sales Agents)", description: "Streamline sales with round-the-clock prospecting, messaging, and deal booking.", href: "/agents" },
  { icon: <Image src="/images/navbar/icons/playbook.svg" width={18} height={18} />, title: "Playbooks (DFY)", description: "Automate AI sales campaigns with tailored playbooks and tools.", href: "/playbooks" },
  { icon: <Image src="/images/navbar/icons/lead_finder.svg" width={22} height={22} />, title: "Lead Finder & Capture", description: "Automate prospecting with ClientForce's Lead Acquisition Suite for efficiency.", href: "/lead-acquisition-suite" },
  { icon: <Image src="/images/navbar/icons/multichannell.svg" width={22} height={22} />, title: "Multichannel Outreach", description: "Integrate email, messaging, and AI for seamless meeting scheduling.", href: "/multichannel-outreach" },
  { icon: <Image src="/images/navbar/icons/mail-send.svg" width={22} height={22} />, title: "Unified Inbox", description: "Unified communication view with AI for managing leads and actions.", href: "/unified-inbox" },
  { icon: <Image src="/images/navbar/icons/dynamic.svg" width={22} height={22} />, title: "Dynamic Proposals", description: "Create tailored proposals automatically for every lead, effortlessly.", href: "/dynamic-proposals" },
  { icon: <Image src="/images/navbar/icons/analytics.svg" width={22} height={22} />, title: "Analytics & Reporting", description: "Transform interactions into insights and optimize with a click.", href: "/analytics" },
  { icon: <Image src="/images/navbar/icons/guardrailss.svg" width={22} height={22} />, title: "Guardrails & Compliance", description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.", href: "/guardrails" },
];

const SOLUTIONS_ITEMS = [
  { icon: <Image src="/images/navbar/icons/for_agencies.svg" width={45} height={45} />, title: "For Agencies", description: "Automate sales with self-running agents and clear ROI insights.", href: "/agencies", bg: "#EEF2FF" },
  { icon: <Image src="/images/navbar/icons/for_local.svg" width={45} height={45} />, title: "For Local Services", description: "Transform visitors into booked jobs with instant AI responses.", href: "/local-businesses", bg: "#F0FDF4" },
  { icon: <Image src="/images/navbar/icons/for_saas.svg" width={45} height={45} />, title: "For SaaS", description: "Streamlined SaaS solutions for prospecting, demos, trials, and retention.", href: "/saas-companies", bg: "#EFF6FF" },
  { icon: <Image src="/images/navbar/icons/for_b2b.svg" width={45} height={45} />, title: "For B2B", description: "Streamlined B2B solutions for outreach, qualification, and proposal management.", href: "/B2B", bg: "#F0FDF4" },
];

const RESOURCES_ITEMS = [
  { icon: <Image src="/images/navbar/icons/chat-bubble.svg" width={22} height={22} />, title: "How It Works", description: "Automate prospecting with ClientForce's Lead Acquisition Suite for efficiency.", href: "/how-it-works" },
  { icon: <Image src="/images/navbar/icons/company.svg" width={22} height={22} />, title: "Company", description: "Integrate email, messaging, and AI for seamless meeting scheduling.", href: "/company" },
  { icon: <Image src="/images/navbar/icons/case_studies.svg" width={22} height={22} />, title: "Case Studies", description: "Unified communication view with AI for managing leads and actions.", href: "/case-studies" },
  { icon: <Image src="/images/navbar/icons/integrationss.svg" width={22} height={22} />, title: "Integrations", description: "Transform interactions into insights and optimize with a click.", href: "/integrations" },
  { icon: <Image src="/images/navbar/icons/legal.svg" width={22} height={22} />, title: "Legal", description: "Create tailored proposals automatically for every lead, effortlessly.", href: "/legal" },
  { icon: <Image src="/images/navbar/icons/customer-support.svg" width={22} height={22} />, title: "Help Center", description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.", href: "https://clientforce.io/launch/go/resource-center" },
];

const NAV_ITEMS = [
  { label: "Products",  key: "products",  href: "/products"  },
  { label: "Solutions", key: "solutions", href: "/solutions" },
  { label: "Pricing",   key: "",          href: "/pricing"   },
  { label: "Resources", key: "resources", href: "#"          },
  { label: "Blog", key: "", href: "/blog"},
];

// ─── MenuItem ──────────────────────────────────────────────────────────────────

function MenuItem({ icon, title, description, href, bg }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#EFEFEF" : "transparent",
        border: "1px solid #E6E6E6",
        transition: "background 0.2s ease",
      }}
      className="flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer lg:w-full"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: bg || (hovered ? "#FFFFFF" : "#E6E6E6") }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-black">{title}</p>
        <p className="text-xs leading-snug mt-0.5" style={{ color: "#787878" }}>{description}</p>
      </div>
    </Link>
  );
}

// ─── Desktop Dropdowns ─────────────────────────────────────────────────────────

function ProductsMenu() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
        {PRODUCTS_ITEMS.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
      <div className="hidden lg:flex w-fit flex-shrink-0 rounded-2xl p-5 flex-col" style={{ background: "linear-gradient(to bottom right, #FFFFFF, #C6FAFF)", border: "1px solid #ECECEC" }}>
        <p className="text-lg font-bold text-black leading-snug mb-1">Launch Once. <span className="font-normal">Sell Forever.</span></p>
        <p className="text-sm text-[#787878] mb-4">ClientForceAI's AI agents find leads <br /> and close sales 24/7.</p>
        <div className="flex-1 rounded-xl overflow-hidden relative mt-8">
          <Image src="/images/navbar/product_menu_demo.png" width={291} height={201} />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#D0F56B] text-black text-sm font-degular cursor-pointer font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="white"><path d="M3 2l5 3-5 3V2z" /></svg>
              </div>
              Watch The Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
        {SOLUTIONS_ITEMS.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
      <div className="hidden lg:flex w-fit flex-shrink-0 bg-[#F9FAFB] rounded-2xl p-5 flex-col justify-between" style={{ border: "1px solid #7878784D" }}>
        <div>
          <p className="text-lg font-bold text-black mb-1">Need Different Solutions?</p>
          <p className="text-sm text-black leading-snug">For teams of <span className="font-bold">400+</span> with advanced <br /> security, control and support?</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <PrimaryCTA variant="dark">Talk To Sales</PrimaryCTA>
          <PrimaryCTA variant="light">Watch Demo</PrimaryCTA>
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="flex gap-6">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
        {RESOURCES_ITEMS.map((item) => <MenuItem key={item.title} {...item} />)}
      </div>
      <div className="hidden lg:flex w-fit flex-shrink-0 rounded-2xl p-5 flex-col" style={{ background: "linear-gradient(to bottom right, #FFFFFF, #C6FAFF)", border: "1px solid #ECECEC" }}>
        <div className="mb-3">
          <Image src="/images/navbar/faces.png" width={135} height={40} alt="" />
        </div>
        <p className="text-sm font-bold text-black mb-1">Schedule a free call with our experts</p>
        <p className="text-xs mb-3" style={{ color: "#787878" }}>Need help getting started? Our team is ready to help.</p>
        <div className="space-y-1.5 mb-4">
          {["Personalized demo and onboarding", "Get Assistance on specific issues", "Get Ongoing support for your project"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 8 7" fill="none">
                  <path d="M1 3.5l2 2L7 1" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[13px]" style={{ color: "#787878" }}>{item}</span>
            </div>
          ))}
        </div>
        <button className="flex items-center justify-center gap-2 bg-black text-white text-base font-degular font-semibold px-4 py-2.5 rounded-xl hover:bg-gray-700 transition-colors mt-auto">
          <MdOutlineLocalPhone size={20} />
          Book A Free Call
        </button>
      </div>
    </div>
  );
}






// ─── Mobile accordion item ─────────────────────────────────────────────────────

function MobileNavItem({ item, activeMenu, setActiveMenu, onClose }) {
  const isOpen = activeMenu === item.key;

  const subItems = item.key === "products"
    ? PRODUCTS_ITEMS
    : item.key === "solutions"
    ? SOLUTIONS_ITEMS
    : item.key === "resources"
    ? RESOURCES_ITEMS
    : [];

  return (
    <div className="border-b border-gray-100">
      {item.key ? (
        <>
          <button
            onClick={() => setActiveMenu(isOpen ? null : item.key)}
            className="flex w-full items-center justify-between px-4 py-4 text-base font-medium text-gray-800"
          >
            {item.label}
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200 text-gray-400"
              style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* Accordion content */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              transition: "grid-template-rows 0.3s ease",
            }}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-2 px-4 pb-4">
                {subItems.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-2.5"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: sub.bg || "#E6E6E6" }}
                    >
                      {sub.icon}
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{sub.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className="flex w-full items-center px-4 py-4 text-base font-medium text-gray-800"
        >
          {item.label}
        </Link>
      )}
    </div>
  );
}

// ─── Main Navbar ───────────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeMenu, setActiveMenu]   = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [mobileMenu, setMobileMenu]   = useState(null);

  const pathname = usePathname();

  if (pathname.startsWith("/studio")) return null;

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="bg-white font-dm fixed top-0 w-full border-b border-gray-200" style={{ zIndex: 100 }}>

      {/* ── Main bar ── */}
      <nav className="mx-auto flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/Logo.svg" alt="Logo" width={140} height={56} />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-2 lg:gap-8 font-medium text-[#787878] text-base">

{NAV_ITEMS.map((item) => (
  <li
    key={item.label}
    onMouseEnter={() => { 
      if (item.key) {
        setActiveMenu(item.key);  // Has dropdown: set active menu
      } else {
        setActiveMenu(null);       // No dropdown: close any open dropdown
      }
      setHoveredItem(item.label);
    }}
    onMouseLeave={() => setHoveredItem(null)}
    className="cursor-pointer"
    style={{
      backgroundColor: hoveredItem === item.label ? "#A4A4A41F" : "",  // Check against label
      border: hoveredItem === item.label ? "1px solid #DBD9DF" : "1px solid transparent",
      color: hoveredItem === item.label ? "black" : "",
      padding: "6px 12px",
      borderRadius: "8px",
      transition: "color 0.2s, background-color 0.2s, border-color 0.2s",
    }}
  >
    <Link href={item.href} className="flex items-center gap-0.5">
      {item.label}
      {item.key && (  // Only show chevron if key exists
        <ChevronDown
          className="w-4 h-4 transition-transform duration-200"
          style={{ transform: activeMenu === item.key ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      )}
    </Link>
  </li>
))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-4 font-bold flex-shrink-0">
          <Link href="https://app.clientforce.io/login">
            <button className="text-sm lg:text-base bg-[#F0F0F0] px-4 lg:px-6 py-2.5 lg:py-3 rounded-md cursor-pointer shadow-sm hover:bg-gray-200 transition-colors">
              Login
            </button>
          </Link>
          <Link href="https://clientforce.io/launch/join">
            <button className="bg-[#35E834] text-black px-2.5 py-2.5 rounded-md text-sm lg:text-base cursor-pointer shadow-md flex items-center gap-2 hover:brightness-110 transition-all">
              Sign Up
              <Image src="/icons/signUpArrow.svg" alt="arrow" width={28} height={28} />
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-gray-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

    
      {/* ── Desktop dropdown ── */}
{activeMenu && (
  <div
    onMouseLeave={() => setActiveMenu(null)}
    style={{ animation: "dropdownIn 0.2s ease" }}
    className="absolute left-0 w-full bg-white shadow-lg overflow-x-hidden"
  >
    <div
      className=" max-w-2xl lg:max-w-5xl mt-2 mb-10 mx-auto px-3 md:px-6 py-6 rounded-2xl"
      style={{ border: "12px solid #F0F0F0" }}
    >
      {activeMenu === "products"  && <ProductsMenu />}
      {activeMenu === "solutions" && <SolutionsMenu />}
      {activeMenu === "resources" && <ResourcesMenu />}
    </div>
  </div>
)}

      {/* ── Mobile menu drawer ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: mobileOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
      >
        <div className="overflow-y-auto max-h-[80vh]">

          {/* Nav items with accordions */}
          {NAV_ITEMS.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              activeMenu={mobileMenu}
              setActiveMenu={setMobileMenu}
              onClose={() => setMobileOpen(false)}
            />
          ))}

          {/* Auth buttons */}
          <div className="flex flex-col gap-3 p-4 border-t border-gray-100">
            <Link href="https://app.clientforce.io/login">
              <button className="w-full text-base font-bold bg-[#F0F0F0] px-6 py-3 rounded-md cursor-pointer shadow-sm hover:bg-gray-200 transition-colors">
                Login
              </button>
            </Link>
            
            <Link href="https://clientforce.io/launch/join">
              <button className="w-full bg-[#35E834] text-black px-4 py-3 rounded-md text-base font-bold cursor-pointer shadow-md flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                Sign Up
                <Image src="/icons/signUpArrow.svg" alt="arrow" width={28} height={28} />
              </button>
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}