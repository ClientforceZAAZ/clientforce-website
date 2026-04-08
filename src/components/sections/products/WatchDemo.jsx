import Link from "next/link";
import Image from "next/image";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

export default function WatchDemo() {
  return (
    <section className="py-0 lg:py-15 pl-6 flex items-center justify-center">
      <div
          className="bg-cover bg-center bg-none lg:bg-[url('/images/watch_demo_bg.png')] "
        >
          <div className="flex flex-col items-center justify-center px-8 sm:px-20 lg:px-55 py-6 sm:py-16 lg:py-42">
            {/* <h2 className="text-[#00000066] text-[40px] font-degular">Press Play</h2> */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl w-fit  lg:max-w-[686px] text-center font-degular ">Ready To See It Work?</h1>
            <p className="text-base  lg:text-[22px] text-[#676767] font-medium text-center font-dm mt-4 lg:mt-6">Launch Your First AI Agent In Minutes—Then Watch It Run 24/7.</p>

           <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-4 text-center sm:text-left">
  
  {/* Primary CTA */}
  <PrimaryCTA className="w-full sm:w-auto">Launch An Agent</PrimaryCTA>

  {/* Watch The Demo */}
  <Link
    href="#"
    className="flex items-center justify-center w-full sm:w-auto text-base lg:text-xl font-bold bg-radial from-[#35E834] from-20% to-[#D0F56B] hover:from-[#D0F56B] hover:from-10% hover:to-[#35E834] transition delay-100 duration-200 ease-in-out pl-1 pr-4 py-2 rounded-full font-degular leading-5"
  >
    <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10  mr-2">
      {/* Pulse Ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-black opacity-40 animate-ping"></span>

      {/* Static Circle */}
      <span className="relative inline-flex rounded-full bg-black shadow-md w-6 h-6 md:w-10 md:h-10 items-center justify-center flex">
        <Image src="/icons/play_icon.svg" width={40} height={40} alt="Play Icon" />
      </span>
    </div>
    Watch The Demo
  </Link>

  {/* See Pricing */}
  <Link
    href="#"
    className="flex items-center justify-center sm:justify-start font-bold text-base text-gray-400 hover:text-gray-500 gap-2 ml-0 sm:ml-2"
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
