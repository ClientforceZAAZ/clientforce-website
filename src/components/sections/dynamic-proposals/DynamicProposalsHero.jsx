"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";



export default function DynamicProposalsHero() {
  return (
    <section className='mt-21 pt-12 bg-cover bg-center' style={{ backgroundImage: "url('/images/dynamic-proposals/dynamic_proposal_hero_bg.png')"}}>
        <div>
            <div className="flex items-center justify-center mb-2">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-[#010201] text-white rounded-full px-3 py-1 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">
                    Products
                  </span>
                </div>
              </div>
            </div>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold font-degular text-white text-center'>Dynamic Proposals <span className="text-[#787878]">(At Scale)</span> 
            </h1>
            <p className='px-10 font-medium text-xs sm:text-base md:text-lg text-[#FFFFFF99] text-center mt-2 sm:mt-4 leading-4 sm:leading-6'>Send Customized, On-Brand Proposals To Thousands—Auto-Built From Your <br className="hidden md:block" /> Offer Docs, Tailored To Each Lead, And Tracked End-To-End.</p>
            <div className="flex items-center justify-center gap-3 py-5 md:py-10">
                <PrimaryCTA variant="dark">Launch An Agent</PrimaryCTA>
                <PrimaryCTA variant="light">Watch 2-minutes Demo</PrimaryCTA>
            </div>
            <div>
                <div className="flex items-center justify-center gap-2">
                    <span className=" text-[#676767] text-sm sm:text-base">★★★★★ 2,000+ USERS</span>
                </div>
            </div>

            {/* Video Container */}
            <div className="relative mt-14">

                <div className="absolute left-[38%] sm:left-[40%] md:left-[45%] top-[35%]">
                    <div className="relative flex items-center justify-center w-20 sm:w-30 h-20 sm:h-30">
                        {/* Pulse Ring */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-40 animate-ping"></span>

                        {/* Static Circle */}
                        <span className="relative inline-flex rounded-full bg-black shadow-md">
                            <img src="/icons/play_icon.svg" alt="Play" className="w-15 h-15" />
                        </span>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <div className="p-4 bg-gradient-to-b from-[#545f55] to-[#17331B17] rounded-2xl ">
                         <Image src="/images/dynamic-proposals/dynamic_proposal_hero.png" width={849} height={427} className=" " />
                    </div> 
                </div>
            </div>

        </div>
    </section>
  )
}


