"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { MdOutlineLocalPhone } from "react-icons/md";

// Menu Data 
const PRODUCTS_ITEMS = [
  { icon: (<><Image src="/images/navbar/icons/user-add.svg" width={22} height={22} /></>), title: "Agents (AI Sales Agents)", description: "Streamline sales with round-the-clock prospecting, messaging, and deal booking.", href: "/agents" },
  { icon: (<><Image src="/images/navbar/icons/playbook.svg" width={18} height={18} /></>), title: "Playbooks (DFY)", description: "Automate AI sales campaigns with tailored playbooks and tools.", href: "/playbooks" },
  { icon: (<><Image src="/images/navbar/icons/lead_finder.svg" width={22} height={22} /></>), title: "Lead Finder & Capture", description: "Automate prospecting with ClientForce's Lead Acquisition Suite for efficiency.", href: "/lead-acquisition-suite" },
  { icon: (<><Image src="/images/navbar/icons/multichannell.svg" width={22} height={22} /></>), title: "Multichannel Outreach", description: "Integrate email, messaging, and AI for seamless meeting scheduling.", href: "/multichannel-outreach" },
  { icon:(<><Image src="/images/navbar/icons/mail-send.svg" width={22} height={22} /></>), title: "Unified Inbox", description: "Unified communication view with AI for managing leads and actions.", href: "/unified-inbox" },
  { icon: (<><Image src="/images/navbar/icons/dynamic.svg" width={22} height={22} /></>), title: "Dynamic Proposals", description: "Create tailored proposals automatically for every lead, effortlessly.", href: "/dynamic-proposals" },
  { icon:(<><Image src="/images/navbar/icons/analytics.svg" width={22} height={22} /></>), title: "Analytics & Reporting", description: "Transform interactions into insights and optimize with a click.", href: "/analytics" },
  { icon: (<><Image src="/images/navbar/icons/guardrailss.svg" width={22} height={22} /></>), title: "Guardrails & Compliance", description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.", href: "/guardrails" },
];

const SOLUTIONS_ITEMS = [
  { icon: (<><Image src="/images/navbar/icons/for_agencies.svg" width={45} height={45} /></>), title: "For Agencies", description: "Automate sales with self-running agents and clear ROI insights.", href: "/agencies", bg: "#EEF2FF" },
  { icon: (<><Image src="/images/navbar/icons/for_local.svg" width={45} height={45} /></>), title: "For Local Services", description: "Transform visitors into booked jobs with instant AI responses.", href: "/local-businesses", bg: "#F0FDF4" },
  { icon: (<><Image src="/images/navbar/icons/for_saas.svg" width={45} height={45} /></>), title: "For SaaS", description: "Streamlined SaaS solutions for prospecting, demos, trials, and retention.", href: "/saas-companies", bg: "#EFF6FF" },
  { icon: (<><Image src="/images/navbar/icons/for_b2b.svg" width={45} height={45} /></>), title: "For B2B", description: "Streamlined B2B solutions for outreach, qualification, and proposal management.", href: "/B2B", bg: "#F0FDF4" },
];

const RESOURCES_ITEMS = [
  { icon: (<><Image src="/images/navbar/icons/chat-bubble.svg" width={22} height={22} /></>), title: "How It Works", description: "Automate prospecting with ClientForce's Lead Acquisition Suite for efficiency.", href: "/how-it-works" },
  { icon: (<><Image src="/images/navbar/icons/company.svg" width={22} height={22} /></>), title: "Company", description: "Integrate email, messaging, and AI for seamless meeting scheduling.", href: "/company" },
  { icon: (<><Image src="/images/navbar/icons/case_studies.svg" width={22} height={22} /></>), title: "Case Studies", description: "Unified communication view with AI for managing leads and actions.", href: "/case-studies" },
   { icon:  (<><Image src="/images/navbar/icons/integrationss.svg" width={22} height={22} /></>), title: "Integrations", description: "Transform interactions into insights and optimize with a click.", href: "/integrations" },
  { icon: (<><Image src="/images/navbar/icons/legal.svg" width={22} height={22} /></>), title: "Legal", description: "Create tailored proposals automatically for every lead, effortlessly.", href: "/legal" },
  { icon:  (<><Image src="/images/navbar/icons/customer-support.svg" width={22} height={22} /></>), title: "Help Center", description: "ClientForce ensures compliance and deliverability for seamless 24/7 operations.", href: "/help" },
];

//  Each menu Item 
function MenuItem({ icon, title, description, href, bg, }) {
  const [hovered, setHovered] = useState(false);
  return (
    
    <Link href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#EFEFEF" : "transparent",
        border: "1px solid #E6E6E6",
        transition: "background 0.2s ease",
      }}
      className="flex items-center gap-3 px-2 py-2 rounded-xl cursor-pointer"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
        style={{ background: bg || (hovered ? "#FFFFFF" : "#E6E6E6") }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-black">{title}</p>
        <p className="text-xs leading-snug mt-0.5" style={{ color: "#787878"}}>{description}</p>
      </div>
    </Link>
  );
}

// Products Dropdown 
function ProductsMenu() {
  return (
    <div className="flex gap-6">
      {/* Left — 2 col grid */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {PRODUCTS_ITEMS.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
      {/* Right — promo panel */}
      <div
        className=" w-fit flex-shrink-0 rounded-2xl p-5 flex flex-col"
        style={{
          background: "linear-gradient(to bottom right, #FFFFFF, #C6FAFF)",
          border: "1px solid #ECECEC",
        }}
      >
        <p className="text-lg font-bold text-black leading-snug mb-1">
          Launch Once. <span className=" font-normal">Sell Forever.</span>
        </p>
        <p className="text-sm text-[#787878] mb-4">
          ClientForceAI's AI agents find leads <br /> and close sales 24/7.
        </p>
        <div className="flex-1  rounded-xl overflow-hidden relative mt-8">
          <Image src="/images/navbar/product_menu_demo.png" width={291} height={201} />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#D0F56B] text-black text-sm font-degular cursor-pointer font-bold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform">
              <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
                  <path d="M3 2l5 3-5 3V2z" />
                </svg>
              </div>
              Watch The Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Solutions Dropdown 
function SolutionsMenu() {
  return (
    <div className="flex gap-6">
      {/* Left — 2x2 grid */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {SOLUTIONS_ITEMS.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
      {/* Right — CTA panel */}
      <div className="w-fit flex-shrink-0 bg-[#F9FAFB] rounded-2xl p-5 flex flex-col justify-between" style={{ border: "1px solid #7878784D"}}>
        <div>
          <p className="text-lg font-bold text-black mb-1">Need Different Solutions?</p>
          <p className="text-sm text-black leading-snug">For teams of <span className="font-bold text-black">400+</span> with advanced <br /> security, control and support?</p>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <PrimaryCTA variant="dark">Talk To Sales</PrimaryCTA>
          <PrimaryCTA variant="light">Watch Demo</PrimaryCTA>
        </div>
      </div>
    </div>
  );
}

// Resources Dropdown
function ResourcesMenu() {
  return (
    <div className="flex gap-6">
      {/* Left col */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {RESOURCES_ITEMS.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div>
      {/* Right col */}
      {/* <div className="flex-1 flex flex-col gap-1">
        {RESOURCES_ITEMS_RIGHT.map((item) => (
          <MenuItem key={item.title} {...item} />
        ))}
      </div> */}
      {/* Right CTA panel */}
      <div className="w-fit flex-shrink-0 rounded-2xl p-5 flex flex-col" style={{
          background: "linear-gradient(to bottom right, #FFFFFF, #C6FAFF)",
          border: "1px solid #ECECEC",
        }}>
        {/* Avatars */}
        <div className=" mb-3">
          <Image src="/images/navbar/faces.png" width={135} height={40} alt="" />
        </div>
        <p className="text-sm font-bold text-black mb-1">Schedule a free call with our experts</p>
        <p className="text-xs mb-3" style={{ color: "#787878"}}>Need help getting started? Our team is ready to help.</p>
        <div className="space-y-1.5 mb-4">
          {["Personalized demo and onboarding", "Get Assistance on specific issues", "Get Ongoing support for your project"].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded border-2 border-gray-700 flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 8 7" fill="none">
                  <path d="M1 3.5l2 2L7 1" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[13px]" style={{ color: "#787878"}}>{item}</span>
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




// Main Navbar 
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [ hoveredItem, setHoveredItem] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);


  const NAV_ITEMS = [
    { label: "Products", key: "products", href: "/products" },
    { label: "Solutions", key: "solutions", href: "/solutions" },
    { label: "Pricing", key: "", href: "/pricing" },
    { label: "Resources", key: "resources", href: "#" },
  ];

  return (
    <header
      className="bg-white font-dm fixed top-0 w-screen border-b border-gray-200"
      style={{ zIndex: 100 }}
    >
      <nav className="max-w-8xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold flex-shrink-0">
          <Image src="/Logo.svg" alt="Logo" width={150} height={60} />
        </div>

        {/* Middle Nav */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-[#787878] text-base">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              onMouseEnter={() => {
                setActiveMenu(item.key);
                setHoveredItem(item.key);
              }}
              onMouseLeave={() => setHoveredItem(null)}
              className="cursor-pointer"
              style={{
                backgroundColor: hoveredItem === item.key ? "#A4A4A41F" : "",
                border: hoveredItem === item.key ? "1px solid #DBD9DF" : "",
                color: hoveredItem === item.key ? "black" : "",
                padding: "6px 12px",
                borderRadius: "8px",
                transition:
                  "color 0.2s, background-color 0.2s, border-color 0.2s",
              }}
            >
              <Link href={ item.href } className="flex items-center gap-0.5">
                {item.label}
                {item.key && (
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-200"
                    style={{
                      transform:
                        activeMenu === item.key
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4 font-bold flex-shrink-0">
          <button className="text-base bg-[#F0F0F0] px-6 py-3 rounded-md cursor-pointer shadow-sm hover:bg-gray-200 transition-colors">
            Login
          </button>
          <button className="bg-[#35E834] text-black px-2.5 py-2.5 rounded-md text-base cursor-pointer shadow-md flex items-center gap-2 hover:brightness-110 transition-all">
            Sign Up
            <Image
              src="/icons/signUpArrow.svg"
              alt="arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
      </nav>

      {/* Dropdown */}
      {activeMenu && (
        <div
          onMouseLeave={() => setActiveMenu(null)}
          style={{ animation: "dropdownIn 0.2s ease" }}
          className="absolute left-0 w-full bg-white shadow-lg"
        >
          <div
            className="max-w-5xl mt-2 mb-10 mx-auto px-6 py-6 rounded-2xl"
            style={{ background: "", border: "12px solid #F0F0F0" }}
          >
            {activeMenu === "products" && <ProductsMenu />}
            {activeMenu === "solutions" && <SolutionsMenu />}
            {activeMenu === "resources" && <ResourcesMenu />}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}