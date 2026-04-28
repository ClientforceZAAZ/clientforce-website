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
      badge="Agencies"
      badgeIcon=""
      headline={<>
       Launch AI Sales <br /> As A Service
       <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-3 font-degular">(And Scale Without Hiring)</span>
    </>
    }
      headlineStyle="text-4xl sm:text-5xl lg:text-[80px] leading-8 sm:leading-10 md:leading-10 lg:leading-16 text-center lg:text-left"
      description={<><span className="font-bold">ClientForceAI Lets Your Agency Deploy Self-Running Sales Agents For Every Client</span>—Prospecting, Following Up, Calling, And Closing On Autopilot. Sell Retainers Or Performance Deals With Clear ROI Dashboards, White-Label Reports, And DFY Playbooks By Niche.</>}
      descriptionStyle="text-[#676767]  text-sm sm:text-lg text-center lg:text-left"
      primaryCTA={<PrimaryCTA variant="dark">Launch And Agent</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light" onClick={() => setIsVideoOpen(true)}>Watch 2-Minutes Demo</PrimaryCTA>}
      rightBg="bg-[#FFFFFF]"
      leftBg="bg-[#FFFFFF]"
      metrics=""
      rightImage={
          <>
            <div className="relative pl-0 lg:pl-10">
              <Image src="/images/agencies/solutions_rightBg_imgg.png" alt="Dashboard Preview" height={1198} width={950} className="w-full h-auto" priority />
            </div>
          </>
          }
      floatingCards=""
    />
     <VideoModal
                    isOpen={isVideoOpen}
                    onClose={() => setIsVideoOpen(false)}
                    mediaId="eu8l1vo7pz"
                  />
    </>
  );
}
