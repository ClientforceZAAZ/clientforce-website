import Link from "next/link";
import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

export default function WatchDemo() {
  return (
    <section className="py-15 pl-6 flex items-center justify-center">
      <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/images/watch_demo_bg.png')" }}
        >
          <div className="flex flex-col items-center justify-center px-50 py-40">
            {/* <h2 className="text-[#00000066] text-[40px] font-degular">Press Play</h2> */}
            <h1 className="font-bold text-6xl  max-w-[686px] text-center font-degular">Ready to See It Work?</h1>
            <p className="text-[22px] text-[#676767] font-medium text-center font-dm mt-6">Launch Your First AI Agent In Minutes—Then Watch It Run 24/7.</p>

            <div className="flex items-center justify-center mt-5 gap-4">
              <PrimaryCTA>Launch An Agent</PrimaryCTA>
              <Link href="#" className="flex items-center text-xl font-bold bg-radial from-[#35E834] from-20% to-[#D0F56B] hover:from-[#D0F56B] hover:from-10% hover:to-[#35E834] transition delay-100 duration-200 ease-in-out pl-1 pr-4 rounded-full font-degular">

                   <div className="relative flex items-center justify-center w-13 h-13">
                        {/* Pulse Ring */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-40 animate-ping"></span>

                        {/* Static Circle */}
                        <span className="relative inline-flex rounded-full bg-black shadow-md">
                            <Image src="/icons/play_icon.svg" width={40} height={40} />
                        </span>
                    </div>
                    Watch The Demo
              </Link>
              <Link
                  href="#"
                  className="flex items-center justify-center font-bold text-base text-gray-400 hover:text-gray-500 gap-2 ml-2"
                >
                  <LuCircleDollarSign size={20} />
                  See Pricing
                  <FaArrowRightLong />
              </Link>

            </div>
          </div>            
      </div>
    </section>
  )
}
