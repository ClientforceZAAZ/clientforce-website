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
                <h1 className="font-bold font-degular text-6xl text-center text-white max-w-[840px] leading-22">Deploy Your First Agent Today</h1>
                <p className=" text-4xl text-[#FFFFFF99] my-4">Launch Once—Sell Forever.</p> 
                <Link href="#"  className="font-bold text-2xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white">Get Started →
                </Link>
                <div className="mt-12 relative">
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
    </section>
  )
}
