"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";



export default function UnifiedInboxHero() {
  return (
    <section className='relative mt-21 pt-12 bg-cover bg-center bg-gradient-to-b from-white via-white/50 to-[#35E834]/22'>
        <div>
            <div className="flex items-center justify-center">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-white text-black rounded-full px-3 py-1 flex items-center justify-center">
                  <span className="text-sm font-bold">
                    Every Conversation. Every Channel. One Living Thread.
                  </span>
                </div>
              </div>
            </div>
            <h1 className=' text-[69px] font-bold font-degular text-black text-center'>Unified Inbox & Lead Timeline
            </h1>
            <p className=' font-medium text-lg text-[#00000099] text-center'><span className="font-bold text-black">Email, WhatsApp, LinkedIn, and Voice Calls</span> Are Stitched Into A Single, Clean <br /> Conversation View—Powered By AI That Prioritizes Hot Leads, Suggests The <br /> Next Best Step, And Keeps Your Pipeline Moving.</p>
            <div className="flex items-center justify-center gap-3 py-6">
                <PrimaryCTA variant="dark">Launch An Agent</PrimaryCTA>
                <PrimaryCTA variant="light">Watch 2-minutes Demo</PrimaryCTA>
            </div>
            <div>
                 <div className="flex items-center justify-center gap-2">
                    <span className="inline-block">
                        <Image
                        src="/images/face notifications.png"
                        alt="Logo"
                        width={140}
                        height={55}
                        />
                    </span>
                    <span className=" text-[#676767]">★★★★★ 2,000+ USERS</span>
                </div>
            </div>

            {/* Video Container */}
            <div className="relative mt-14">

                <div className="absolute left-[45%] top-[35%]">
                    <div className="relative flex items-center justify-center w-30 h-30">
                        {/* Pulse Ring */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-40 animate-ping"></span>

                        {/* Static Circle */}
                        <span className="relative inline-flex rounded-full bg-black shadow-md">
                            <img src="/icons/play_icon.svg" alt="Play" className="w-15 h-15" />
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <div className="p-4 bg-gradient-to-b from-[#17331B17] to-[#FFFFFF] rounded-2xl ">
                         <Image src="/images/unified-inbox/unified_inbox_hero.png" width={849} height={427} className=" " />
                    </div> 
                </div>
            </div>

        </div>

         <img src="/images/unified-inbox/unified_inbox_heroLeft.png"  className="absolute top-48 w-[254px] h-auto" />
         <img src="/images/unified-inbox/unified_inbox_heroRight.png"  className="absolute top-48 right-20 w-[180px]" />
    </section>
  )
}

