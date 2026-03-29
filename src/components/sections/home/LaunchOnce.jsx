import PrimaryCTA from "@/components/ui/PrimaryCTA";
import Image from "next/image";

export default function LaunchOnce() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center py-10 sm:py-20 lg:py-30 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-degular">
          Launch once. <span className="text-[#0AD855]">Sell forever.</span>
        </h1>
        <p className="text-lg lg:text-2xl max-w-full lg:max-w-[422px] text-center mt-2 sm:mt-6 lg:mt-8">
          Deploy your first AI Sales Agent today then watch it work 24/7.
        </p>
        <div className="flex flex-wrap items-center justify-center mt-6 lg:mt-8 gap-4">
          <PrimaryCTA variant="dark">Launch My First Agent</PrimaryCTA>
          <PrimaryCTA variant="light">Watch 2-Minutes Demo</PrimaryCTA>
        </div>
      </div>
      <Image src="/icons/launch_once_icon_left.svg" width={222} height={311} className="absolute top-20 left-0 hidden lg:block -z-10" />
      <Image src="/icons/launch_once_icon_right.svg" width={220} height={160} className="absolute top-38 right-0 hidden lg:block -z-10" />
    </section>
  );
}
