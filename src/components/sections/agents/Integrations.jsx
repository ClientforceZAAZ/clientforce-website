import Link from "next/link";
import Image from "next/image";

export default function WatchDemo() {
  return (
    <section className="py-10 pl-6 flex items-center justify-center">
      <div
        className="bg-cover bg-center bg-none lg:bg-[url('/images/watch_demo_bg.png')]"
      >
        <div className="flex flex-col items-center justify-center px-10 sm:px-20 lg:px-60 py-0 lg:py-30">

        
            <Image
              src="/images/agents/integrations.svg"
              alt="Integrations"
              width={435}
              height={90}
              className="mb-4 sm:mb-5 lg:mb-6 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[435px] h-auto"
            />
            <div className="flex items-center justify-center mb-4">
                <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-white text-black rounded-full px-4 py-1 flex items-center justify-center">
                    <span className="text-base md:text-xl font-bold">Integrations</span>
                </div>
                </div>
            </div>
            <p className="text-base sm:text-lg md:text-2xl text-center mb-4 leading-6">Senders, calendars, CRMs, meeting tools, webhooks <br className="hidden lg:block" /> plug into what you already use.</p>

        </div>
      </div>
    </section>
  );
}
