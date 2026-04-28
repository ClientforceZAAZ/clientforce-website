"use client";

import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import PageHero from "@/components/sections/shared/PageHero";
import VideoModal from "@/components/ui/VideoModal";

import { useState } from "react";

export default function LocalBusinessesHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <PageHero
        badge="B2B (Mid-Market & Enterprise)"
        badgeIcon=""
        headline={
          <>
            <span className="text-[#09B708]">
              Account-Smart <br className="hidden lg:block" /> Pipeline Creation
            </span>{" "}
            With Autonomous Multi-Channel Orchestration
          </>
        }
        headlineStyle="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-6 sm:leading-8 md:leading-10 lg:leading-13 text-center lg:text-left"
        description={
          <>
            <span className="font-bold">
              {" "}
              ClientForceAI Turns Your Website Visitors And Local Searches Into
              Booked Jobs
            </span>{" "}
            With Instant Replies, Smart Follow-Ups, And AI Voice Callbacks—So
            You Never Miss Another Opportunity.
          </>
        }
        descriptionStyle="text-[#676767]  text-sm sm:text-lg text-center lg:text-left lg:mb-12 leading-5 sm:leading-7"
        primaryCTA={<PrimaryCTA variant="dark">Launch And Agent</PrimaryCTA>}
        secondaryCTA={
          <PrimaryCTA variant="light" onClick={() => setIsVideoOpen(true)}>
            Watch 2-Minutes Demo
          </PrimaryCTA>
        }
        rightBg="bg-[#FFFFFF]"
        leftBg="bg-[#FFFFFF]"
        metrics=""
        rightImage={
          <>
            <div className="relative pl-0 lg:pl-10">
              <Image
                src="/images/b2b/b2b_right_hero.png"
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
