"use client";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";
import dynamic from "next/dynamic";


const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function AgentsHero() {
  return (
    <section className='mt-21 pt-12 bg-cover bg-center' style={{ backgroundImage: "url('/images/agents/agentHero_bg.png')"}}>
        <div>
            <div className="flex items-center justify-center mb-2">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-[#010201] text-white rounded-full px-3 py-1 flex items-center justify-center">
                  <span className="text-sm font-bold">
                    Products
                  </span>
                </div>
              </div>
            </div>
            <h1 className=' text-7xl font-bold font-degular text-[#787878] text-center'>Deploy AI Sales Agents 
                {/* Typewriter headline */}
                <div className="text-white flex items-center justify-center gap-3">
                    <span className="inline-block">That</span>
                <Typewriter
                    options={{
                    strings: [
                        "Sell End-to-End",
                        "Close Deals 24/7",
                        "Fill Your Pipeline",
                        "Book More Meetings",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 80,
                    }}
                />
                </div>
            </h1>
            <p className=' font-medium text-lg text-[#FFFFFF99] text-center mt-4'>Set it up once. Your Agents auto-prospect, message across channels, place <br /> calls, send dynamic proposals, and book deals—24/7.</p>
            <div className="flex items-center justify-center gap-3 py-10">
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
                    <div className="p-4 bg-gradient-to-b from-[#545f55] to-[#17331B17] rounded-2xl ">
                         <Image src="/images/agents/agentHero.png" width={849} height={427} className=" " />
                    </div> 
                </div>
            </div>

        </div>
    </section>
  )
}


