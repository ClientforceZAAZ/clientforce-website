"use client";



import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";
import HeroFlowDiagram from "@/components/sections/home/components/HeroFlowDiagram";
import VideoModal from "@/components/ui/VideoModal";

import { useState } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <PageHero
      badge="Your Self-Running Sales Agents"
      badgeIcon={<img src="/icons/Lightning Bolt.svg" alt="lightning bolt icon" className="inline-block w-7" />}
      headline={<>Launch Once. <br /> Sell 24/7. <span className="hidden lg:inline-block"><Image src="/images/face notifications.png" alt="Logo" width={140} height={55} /></span></>}
      headlineStyle="text-5xl sm:text-[80px] leading-10 sm:leading-18 text-center lg:text-left"
      description={<>Deploy AI Agents That Refill Your Pipeline, Personalize Outreach, And <br className="hidden sm:block" /> Close Deals On Autopilot—Multichannel, 24/7.</>}
      descriptionStyle="text-sm sm:text-lg text-center lg:text-left"
      primaryCTA={<PrimaryCTA variant="dark">Launch My First Agent</PrimaryCTA>}
      secondaryCTA={<PrimaryCTA variant="light" onClick={() => setIsVideoOpen(true)}>
            Watch 2-Minutes Demo</PrimaryCTA>}
      metrics={<>
        <span>★★★★★ 2,000+ USERS</span>
        <span className="flex items-center gap-1"><img src="/icons/video_icon.svg" alt="video call icon" className="h-3 sm:h-6" />37 Meetings in 7 Days</span>
        <span className="flex items-center gap-1"><img src="/icons/phone.svg" alt="Ai call icon" className="h-3 sm:h-6" />$42k Closed Via AI Voice</span>
      </>}
      rightBg="bg-[#F6F6F6]"
      rightImage={
        <div className=" pl-0 lg:pl-6">
          <HeroFlowDiagram />
        </div>
      }
      floatingCards={null}
    />
    <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        mediaId="eu8l1vo7pz" // Your primary explainer ID
      />
    </>
  );
}
