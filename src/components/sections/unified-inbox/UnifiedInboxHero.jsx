"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";



export default function UnifiedInboxHero() {
  return (
    <section className="relative mt-18 lg:mt-21 pt-12 bg-cover bg-center bg-gradient-to-b from-white via-white/50 to-[#35E834]/22">
      <div>
        <div className="flex items-center justify-center">
          <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
            <div className="bg-white text-black rounded-full px-3 py-1 flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold">
                Every Conversation. Every Channel. One Living Thread.
              </span>
            </div>
          </div>
        </div>
        <h1 className=" text-3xl sm:text-5xl lg:text-[69px] font-bold mt-2 sm:mt-4 font-degular text-black text-center">
          Unified Inbox & Lead Timeline
        </h1>
        <p className="px-10 font-medium text-xs sm:text-base md:text-lg text-[#00000099] text-center mt-2 sm:mt-4 leading-4 sm:leading-6">
          <span className="font-bold text-black">
            Email, WhatsApp, LinkedIn, and Voice Calls
          </span>{" "}
          Are Stitched Into A Single, Clean <br className="hidden sm:block" /> Conversation View—Powered By
          AI That Prioritizes Hot Leads, Suggests The <br className="hidden sm:block" /> Next Best Step, And
          Keeps Your Pipeline Moving.
        </p>
        <div className="flex items-center justify-center gap-3 py-6  md:py-10">
          <PrimaryCTA variant="dark">Launch An Agent</PrimaryCTA>
          <PrimaryCTA variant="light">Watch 2-minutes Demo</PrimaryCTA>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 mb-10 lg:mb-20">
            <span className="relative inline-block w-[100px] sm:w-[120px] md:w-[140px] aspect-[140/55]">
              <Image
                src="/images/face notifications.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </span>
            <span className="text-[#676767] text-sm sm:text-base">
              ★★★★★ 2,000+ USERS
            </span>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative mt-14">
          <div className="absolute  left-[40%] sm:left-[45%] top-[35%]">
            <div className="relative flex items-center justify-center w-20 sm:w-30 h-20 sm:h-30">
              {/* Pulse Ring */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-40 animate-ping"></span>

              {/* Static Circle */}
              <span className="relative inline-flex rounded-full bg-black shadow-md">
                <img
                  src="/icons/play_icon.svg"
                  alt="Play"
                  className="w-15 h-15"
                />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="p-4 bg-gradient-to-b from-[#17331B17] to-[#FFFFFF] rounded-2xl ">
              <Image
                src="/images/unified-inbox/unified_inbox_hero.png"
                width={849}
                height={427}
                className=" "
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="/images/unified-inbox/unified_inbox_heroLeft.png"
        className="hidden sm:block sm:absolute top-48 w-[254px] h-auto -z-10 lg:z-0"
      />
      <img
        src="/images/unified-inbox/unified_inbox_heroRight.png"
        className="hidden sm:block sm:absolute top-48 right-20 w-[180px] -z-10 lg:z-0"
      />
    </section>
  );
}

