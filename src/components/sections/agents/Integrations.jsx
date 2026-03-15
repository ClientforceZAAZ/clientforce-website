import Link from "next/link";
import Image from "next/image";

export default function WatchDemo() {
  return (
    <section className="py-10 pl-6 flex items-center justify-center">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: "url('/images/watch_demo_bg.png')" }}
      >
        <div className="flex flex-col items-center justify-center px-60 py-28">

        
            <Image src="/images/agents/integrations.svg" width={435} height={90} className="mb-6" />
            <div className="flex items-center justify-center mb-4">
                <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
                <div className="bg-white text-black rounded-full px-4 py-1 flex items-center justify-center">
                    <span className="text-xl font-bold">Integrations</span>
                </div>
                </div>
            </div>
            <p className="text-2xl text-center mb-4">Senders, calendars, CRMs, meeting tools, webhooks <br /> plug into what you already use.</p>

        </div>
      </div>
    </section>
  );
}
