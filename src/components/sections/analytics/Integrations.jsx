import Link from "next/link";
import Image from "next/image";

export default function WatchDemo() {
  return (
    <section className="relative py-5 sm:py-10 flex items-center justify-center">
      
      <div className="bg-cover bg-center bg-none lg:bg-[url('/images/watch_demo_bg.png')]">
        
        <div className="flex flex-col items-center justify-center px-10 sm:px-20 lg:px-60 py-0 lg:py-35">
          
          <Image
            src="/images/analytics/integrations.png"
            alt="Integrations"
            width={400}
            height={100}
            className="mb-4 sm:mb-5 lg:mb-6 w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] h-auto"
          />

          <div className="flex items-center justify-center mb-4">
            <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#08A541,#FF9D7C)]">
              <div className="bg-white text-black rounded-full px-4 py-1 flex items-center justify-center">
                <span className="text-base md:text-xl font-bold">
                  Exports & Integrations
                </span>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-2xl text-center mb-4 leading-6">
            CSV/JSON exports • Webhooks • Zapier/Make • CRM sync
            <br className="hidden lg:block" />
            (meetings, revenue, outcomes) • BI-friendly schema
          </p>

        </div>
      </div>

      {/* Decorative side images */}
      <Image
        src="/images/analytics/integration_left.png"
        alt="left decoration"
        width={400}
        height={400}
        className="hidden lg:block absolute left-0 w-[250px] xl:w-[400px]"
      />

      <Image
        src="/images/analytics/integration_right.png"
        alt="right decoration"
        width={400}
        height={400}
        className="hidden lg:block absolute right-0 w-[250px] xl:w-[400px]"
      />
      
    </section>
  );
}