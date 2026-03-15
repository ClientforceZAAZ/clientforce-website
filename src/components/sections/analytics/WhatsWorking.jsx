import Link from "next/link";
import Image from "next/image";
import DropOffResponseCard from "./components/DropOffResponseCard";





export default function WhatsWorking() {
  return (
    <section className="relative">
        <div className="bg-cover bg-center flex flex-col items-center justify-center z-10"
          style={{ backgroundImage: "url('/images/agent_roi_bg.png')" }}>

           <div className="bg-cover bg-center w-full pt-12 flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/images/agent_roi_bg2.png')" }}>   
                <p className=" text-[44px] font-degular text-white mt-4 mb-6">See Exactly What’s Working—And Scale It.</p> 
                <Link href="#"  className="font-bold text-2xl bg-[#35E834] rounded-full px-8 py-2 border-[3px] border-white" style={{
                    boxShadow: "0 0 18px 4px rgba(53,232,52,0.6), 0 0 40px 8px rgba(53,232,52,0.3)",
                    }}>Open Analytics & Optimize →
                </Link>
                <div className="mt-12 relative">
                    <Image src="/images/analytics/whats_working.png" width={840} height={525} />

                    
                    <div className="absolute inset-0">
                         
                         <div className="absolute bottom-[8%] left-[-110] z-30">
                                <DropOffResponseCard />
                         </div>
                         <div className="absolute top-[42%] right-[-140] z-30">
                               <img src="/images/analytics/card.png" alt=""  className="w-[300px]"/>
                         </div>
                    </div>
                </div>  
           </div>
        </div>
    </section>
  )
}
