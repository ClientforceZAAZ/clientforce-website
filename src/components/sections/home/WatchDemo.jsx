import Link from "next/link";
import Image from "next/image";

export default function WatchDemo() {
  return (
    <section className=" py-0 lg:py-10 pl-6 flex items-center justify-center">
      <div
          className="bg-cover bg-center bg-none lg:bg-[url('/images/watch_demo_bg.png')] "
          // style={{ backgroundImage: "url('/images/watch_demo_bg.png')" }}
        >
          <div className="flex flex-col items-center justify-center px-8 sm:px-20 lg:px-61 py-6 lg:py-32">
            <h2 className="text-[#00000066] text-3xl lg:text-[40px] font-degular">Press Play</h2>
            <h1 className="font-bold text-4xl lg:text-6xl w-fit  lg:max-w-[686px] text-center font-degular ">Watch one setup turn into <br className="block lg:hidden" /> a 24/7 sales machine.</h1>
            <p className="text-base lg:text-lg text-[#676767] text-center font-dm mt-6">See an Agent find leads, send messages, place a live call, <br className="hidden sm:block" /> and book a meeting—no manual follow-up.</p>
            <div className="flex items-center justify-center mt-4">
              <Link href="#" className="flex items-center text-xl font-bold bg-radial from-[#35E834] from-20% to-[#D0F56B] hover:from-[#D0F56B] hover:from-10% hover:to-[#35E834] transition delay-100 duration-200 ease-in-out pl-2 pr-4 rounded-full font-degular">

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
            </div>
          </div>            
      </div>
    </section>
  )
}
