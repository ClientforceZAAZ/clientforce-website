


import Image from "next/image";

export default function AllSimpleSteps({ heading, steps, bgColor }) {
  return (
    <section className={`py-8 sm:py-16 relative ${bgColor} px-4 md:px-8`}>

      <h1 className="font-degular font-bold text-4xl sm:text-5xl md:text-6xl text-center mb-6 md:mb-12">
        {heading}
      </h1>

      <div className="max-w-5xl mx-auto px-2 md:px-4 space-y-6">
        {steps.map((step, i) => {
          const isReversed = i % 2 !== 0;

          // Connector line config per step matching the HTML exactly
          const connectorConfig = [
            null, // step 0 has no connector above it
            { side: "left",  top: "-top-[70%]", flip: false }, // step 1 — line on left
            { side: "right", top: "top-[50%]",  flip: true  }, // step 2 — line on right, flipped
            // { side: "right", top: "-top-[50%]", flip: false }, // step 3 — line on right
          ];

          const connector = connectorConfig[i];

          return (
            <div
              key={i}
              className={`relative flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-6 md:gap-10 bg-[#ffffff] text-black border border-gray-300 rounded-3xl p-6 md:p-8`}
              style={{ zIndex: 1 }}
            >
              {/* Step image */}
              <div className="flex-shrink-0 z-10">
                <Image
                  src={step.image}
                  alt={`step ${i + 1}`}
                  width={280}
                  height={288}
                  className="h-56 md:h-72 w-auto object-contain"
                />
              </div>

              {/* Text content */}
              <div
                className={`relative z-20 max-w-[400px] ${
                  isReversed ? "mr-0 lg:mr-auto" : "ml-0 lg:ml-auto"
                }`}
              >
                {/* Badge icon */}
                <Image
                  src={step.badgeIcon}
                  alt={`step badge ${i + 1}`}
                  width={130}
                  height={50}
                />

                <h3 className="mt-4 font-bold text-xl md:text-[25px] font-degular leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-black leading-relaxed">
                  {step.description1}
                </p>

                {step.description2 && (
                  <p className="mt-2 text-sm md:text-base text-black leading-relaxed">
                    {step.description2}
                  </p>
                )}
              </div>

              {/* Connector line — hidden on mobile, shown lg+ */}
              {connector && (
                <div
                  className={`hidden lg:block absolute -z-10 ${
                    connector.side === "left"
                      ? "-left-[7%]"
                      : "-right-[7%]"
                  } ${connector.top}`}
                >
                  <Image
                    src="/images/line.png"
                    alt=""
                    width={60}
                    height={400}
                    className={`opacity-70 ${connector.flip ? "scale-x-[-1]" : ""}`}
                    style={{ height: "400px", width: "auto" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}