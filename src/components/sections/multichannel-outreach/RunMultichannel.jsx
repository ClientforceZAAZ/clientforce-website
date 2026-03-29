import Link from "next/link";
import Image from "next/image";
import AgentRoiCard from "../home/components/AgentRoiCard";
import GraphCard from "../home/components/GraphCard";
import SidebarCard from "../home/components/SideBarCard";
import AgentRoiLiveFeed from "../home/components/AgenRoiLiveFeed";





export default function DeployAgent() {
  return (
    <section className="relative">
        <div className="bg-cover bg-center flex flex-col items-center justify-center z-10"
          style={{ backgroundImage: "url('/images/agent_roi_bg.png')" }}>

           <div className="bg-cover bg-center w-full pt-12 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/images/agent_roi_bg2.png')" }}>   
                <h1 className="px-4 font-normal font-degular text-2xl sm:text-4xl md:text-5xl mb-8 text-center text-white max-w-[840px] leading-8 sm:leading-10 md:leading-13">Run Multichannel Outreach That <br className="hidden sm:block" /> Actually Gets Replies →</h1>
                <Link href="#"  className="font-bold text-lg md:text-2xl bg-[#35E834] rounded-full px-4 md:px-8 py-1 md:py-2 border-[3px] border-white hover:scale-105 transition-all ease-in-out">Get Started →
                </Link>
                <div className="mt-12 relative">
                    <Image src="/images/multichannel-outreach/run_multichannel_bg.png" width={840} height={525} />
                </div>  
           </div>
        </div>
    </section>
  )
}
