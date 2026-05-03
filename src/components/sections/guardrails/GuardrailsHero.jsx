"use client";

import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";
import VideoModal from "@/components/ui/VideoModal";

import { useState } from "react";

export default function Hero() {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
  <>
      <PageHero
      badge="Guardrails & Compliance"
      badgeIcon=""
      badgeBg="bg-[#627332]"
      badgeTextColor="text-white"
      BadgeBorder="bg-white"
      headline={<>Scale Outreach Safely.  Protect Reputation. Stay  Compliant, By Default.</>}
      headlineStyle="text-4xl sm:text-5xl lg:text-[55px] leading-8 sm:leading-12 lg:leading-14 text-center lg:text-left text-white"
      description={<>ClientForce bakes deliverability, consent, and policy controls into every step so your Agents can run 24/7 without risking spam flags, fines, or brand damage.</>}
      descriptionStyle="text-black text-sm sm:text-lg text-center lg:text-left leading-4 sm:leading-5 sm:leading-6 text-white"
      primaryCTA={<PrimaryCTA variant="dark">Get Started</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light" onClick={() => setIsVideoOpen(true)}>Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg="bg-gradient-to-b from-[#627332] from-60% to-[#010101]"
      leftBg="bg-gradient-to-b from-[#627332] from-60% to-[#010101]"
      metrics={<>
        <span className="text-white">★★★★★ 2,000+ USERS</span>
      </>}
      rightImage={
          <>
            <div className="relative pt-17 pb-0 pl-10">
              <Image src="/images/guardrails/guardrails_rightBg_img1.png" alt="Dashboard Preview" height={1198} width={950} className="w-full h-auto" priority />
            </div>
          </>
          }
    />
     <VideoModal
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(false)}
            mediaId="eu8l1vo7pz"
          />
  </>
  );
}
