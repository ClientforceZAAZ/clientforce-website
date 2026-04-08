"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";
import dynamic from "next/dynamic";


const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function AgentsHero() {
  return (
    <section className='mt-18 lg:mt-21 pt-12 bg-cover bg-center' style={{ backgroundImage: "url('/images/dfy/dfy_hero_bg.png')"}}>
        <div>
            <div className="flex items-center justify-center mb-2">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-[#010201] text-white rounded-full px-3 py-1 flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold">
                    DFY Playbooks & Templates Library (All Industries)
                  </span>
                </div>
              </div>
            </div>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl font-bold font-degular text-white text-center'>Launch In Minutes. 
               <span className="block text-[#D0F56B]">Sell Like A Pro. </span>
            </h1>
            <p className=' px-10 font-medium text-xs sm:text-base text-[#FFFFFFCC] text-center mt-2 sm:mt-4 leading-4 sm:leading-6'>Deploy End-To-End,  <span className="text-[#6BE8FD]">Goal-Based AI Sales Campaigns</span> Built For Your Industry—Complete With Sequences, <br className="hidden lg:block" /> Scripts, Proposals, Widgets, Finder Rules, And Guardrails. Pick A Playbook, Answer A Few Prompts, Upload <br className="hidden lg:block" /> Your PDFs, And Your Agent Is Ready To <span className=" text-[#6BE8FD]">Prospect, Engage, Call, And Close</span> On Autopilot.</p>
            <div className="flex items-center justify-center gap-3 py-10">
                <PrimaryCTA variant="dark">Browse The Library</PrimaryCTA>
                <PrimaryCTA variant="light">Deploy A Playbook</PrimaryCTA>
            </div>
          
            {/* Video Container */}
            <div className="relative mt-8">

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
                         <Image src="/images/agents/agentHero.png" width={849} height={427} className=" " />
                    </div> 
                </div>
            </div>

        </div>
    </section>
  )
}


