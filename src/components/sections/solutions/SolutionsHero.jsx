"use client";

import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import AnalyticsHeroCard from "@/components/sections/analytics/components/AnalyticsHeroCard";
import PageHero from "@/components/sections/shared/PageHero";
import VideoModal from "@/components/ui/VideoModal";

import { useState } from "react";

export default function Hero() {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
       <PageHero
      badge="Solutions"
      badgeIcon=""
      headline={
        <>
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom, #F039AA 60%, #2CA44A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Deploy AI
          </span>
          <br className="hidden lg:block" />{" "}
          <span className="" style={{ color: "#2CA44A" }}>
            Agents
          </span>{" "}
          For Every <br className=" block lg:hidden" /> Revenue Goal
        </>
      }
      headlineStyle=" text-3xl sm:text-5xl lg:text-[76px] leading-8 sm:leading-10 md:leading-12 lg:leading-16 text-center lg:text-left"
      description={
        <>
          Launch Purpose-Built AI Sales Agents That{" "}
          <span className="font-bold">
            Prospect, Follow Up, Call, And Close
          </span>{" "}
          For The Specific Outcome You Care About. Pick <br className="hidden lg:block" /> Your Goal Below —
          ClientForceAI Orchestrates The Entire Campaign <br className="hidden lg:block"/> End-To-End,
          24/7.
        </>
      }
      descriptionStyle="text-[#676767] text-sm sm:text-lg text-center lg:text-left"
      primaryCTA={<PrimaryCTA variant="dark">Launch And Agent</PrimaryCTA>}
      secondaryCTA={
        <PrimaryCTA variant="light" onClick={() => setIsVideoOpen(true)}>Watch 2-Minutes Demo</PrimaryCTA>
      }
      rightBg="bg-[#FFFFFF]"
      leftBg="bg-[#FFFFFF]"
      metrics=""
      rightImage={
        <>
          <div className="relative pl-0 lg:pl-10">
            <Image
              src="/images/solutions/solutions_rightBg_imgg.png"
              alt="Dashboard Preview"
              height={1198}
              width={950}
              className="w-full h-auto"
              priority
            />
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
