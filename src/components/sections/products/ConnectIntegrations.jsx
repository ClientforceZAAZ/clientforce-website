"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryCTA from "@/components/ui/PrimaryCTA";

function useVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const INTEGRATIONS = [
  {
    id: "email",
    label: "Email & Calendar",
    sublabel: "(Gmail/Workspace, Microsoft 365)",
    delay: "0.1s",
    icon: (
      <Image src="/images/products/icons/email_calendar.svg" width={130} height={70} />
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp Providers",
    sublabel: null,
    delay: "0.2s",
    bg: "bg-[#E8F5E8]",
    icon: (
         <div className=" px-8 py-3 rounded-2xl bg-[#FFFFFF3D] flex items-center justify-center">
            <Image src="/images/products/icons/soft plush whatsapp icon.svg" width={60} height={78} />
         </div>
        
    ),
  },
  {
    id: "voice",
    label: "Voice/SMS",
    sublabel: "(Numbers, Reputation Checks)",
    delay: "0.3s",
    icon: (
         <Image src="/images/products/icons/info 5.svg" width={140} height={87} />
    ),
  },
  {
    id: "webforms",
    label: "Web Forms & Sites",
    sublabel: "(Widgets, Embeds)",
    delay: "0.4s",
    icon: (
      <Image src="/images/products/icons/webForm.svg" width={140} height={87} />
    ),
  },
];






export default function ConnectIntegrations() {
  const [ref, visible] = useVisible(0.15);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[480px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/products/connectIntegrations_bg.png')" }}
    >
      {/* Heading */}
      <div
        className="text-center pt-12 pb-8"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-20px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        <h2 className="text-3xl lg:text-[50px] font-degular font-bold text-black">
          Connect What You Already Use
        </h2>
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row gap-6 px-12">

        {/* Person Image */}
        <div
          className="w-[45%] flex-shrink-0"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <Image
            src="/images/products/connectIntegrations_man.png"
            alt="Person using phone"
            width={986}
            height={982}
            quality={100}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Integration Cards + CTAs */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-5">
            {INTEGRATIONS.slice(0, 3).map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} visible={visible} />
            ))}
          </div>

          {/* Bottom Row — 1 card + 2 CTAs */}
          <div className="flex items-center gap-6 mt-6">
            <div className="">
              <IntegrationCard integration={INTEGRATIONS[3]} visible={visible} />
            </div>

            {/* CTA Buttons */}
            <div
              className="flex items-center gap-3 mb-2"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.5s",
              }}
            >
              <PrimaryCTA variant="dark">See All Integrations</PrimaryCTA>
              <PrimaryCTA variant="light">Talk To Sales</PrimaryCTA>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function IntegrationCard({ integration, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${integration.delay}, transform 0.55s ease ${integration.delay}, box-shadow 0.25s ease`,
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.12)"
          : "0 4px_16px rgba(0,0,0,0.07)",
      }}
      className="bg-transparent py-4 px-6 rounded-2xl border flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex items-center justify-center w-full">
        {integration.icon}
      </div>
      <div className="text-center">
        <p className="text-base font-bold text-black">{integration.label}</p>
        {integration.sublabel && (
          <p className="text-sm text-black mt-0.5 px-4">{integration.sublabel}</p>
        )}
      </div>
    </div>
  );
}