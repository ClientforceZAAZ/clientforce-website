import Link from "next/link";
import Image from "next/image";
import AgentRoiCard from "./components/AgentRoiCard";
import GraphCard from "./components/GraphCard";
import SidebarCard from "./components/SideBarCard";
import AgentRoiLiveFeed from "./components/AgenRoiLiveFeed";





export default function AgentRoi() {
  return (
    <section className="relative">
        <div className="bg-cover bg-center pt-18 flex flex-col items-center justify-center z-10"
          style={{ backgroundImage: "url('/images/agent_roi_bg.png')" }}>
            <h1 className="mb-10 font-bebas text-center font-bold text-[50px] leading-12 text-white"><span className="block text-[#0EBE4F]">Calculate Your AI Agent ROI</span> See What’s Truly Possible</h1>
           <AgentRoiCard />

           <div className="bg-cover bg-center w-full mt-30 pt-12 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/images/agent_roi_bg2.png')" }}>   
                <h1 className="font-bold text-6xl font-degular text-center text-white max-w-[840px] leading-16">Simple, Honest Plans for Teams That Want Momentum</h1>
                <p className=" text-2xl text-[#FFFFFF99] my-6">Start With The Plan That Fits Today—Upgrade As You Scale.</p> 
                <Link href="#"  className="font-bold text-2xl bg-[#35E834] rounded-full px-8 py-2">View Pricing
                </Link>
                <div className="mt-16 relative">
                    <Image src="/images/agent_roi_bg3.png" width={840} height={525} />

                    
                    <div className="absolute inset-0">
                        <GraphCard />
                        <SidebarCard />
                         <div className="absolute bottom-[4%] right-[-54] w-[40%] z-30">
                            <AgentRoiLiveFeed />
                         </div>
                    </div>
                </div>  
           </div>
        </div>

        <Image src="/icons/agentRoi_topRight.svg" width={68} height={62} className="absolute top-60 right-18 z-0 pointer-events-none opacity-20" />
        <Image src="/icons/agentRoi_topLeft.svg" width={144} height={170} className="absolute top-55 left-0 z-0 pointer-events-none opacity-20" />
        <Image src="/icons/agentRoi_bottomRight.svg" width={150} height={55} className="absolute top-160 right-0 z-0 pointer-events-none opacity-20" />
        <Image src="/icons/agentRoi_bottomLeft.svg" width={122} height={100} className="absolute top-160 left-0 z-0 pointer-events-none opacity-20" />
    </section>
  )
}
