

export default function PageHero({
  badge,
  badgeIcon,
  badgeBg,
  headline,
  headlineStyle,
  description,
  descriptionStyle,
  primaryCTA,
  secondaryCTA,
  metrics,
  rightImage,
  floatingCards,
  leftBg = "bg-[#F6F6F6]",
  rightBg = "bg-[linear-gradient(45deg,#e3f5f7_0%,#e3f3f5_25%,#f6f6f6_50%,#99e9d2_60%,#88e6c6_85%,#2ddc7a_100%)]",
  rightBgImage
}) {
  return (
    <section className="relative overflow-hidden mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div
          className={`space-y-3 lg:pl-16 pt-8 lg:pt-16 ${leftBg} pb-8  px-8 lg:px-0`}
        >
          {badge && (
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-fit">
                <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#FF9D7C,#F437AB)]">
                  <div
                    className={` ${badgeBg ? badgeBg : "bg-white"} rounded-full px-3 py-1 flex items-center justify-center`}
                    style={{ background: badgeBg ? badgeBg : "white" }}
                  >
                    {badgeIcon}
                    <span className="text-xs sm:text-sm font-bold bg-linear-to-r from-black to-[#C521D1] bg-clip-text text-transparent">
                      {badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h1 className={`font-degular ${headlineStyle} font-extrabold mt-3`}>
            {headline}
          </h1>

          <p
            className={`font-degular font-medium mt-1.5 md:mt-4 text-lg text-[#676767] ${descriptionStyle}`}
          >
            {description}
          </p>

          <div className="flex flex-wrap mt-6 items-center gap-4 justify-center lg:justify-start">
            {primaryCTA}
            {secondaryCTA}
          </div>

          {metrics && (
            <div className="font-pjs flex items-center justify-center lg:justify-start flex-wrap gap-4 text-[10px] sm:text-[13px] text-gray-500 mt-4 md:mt-6 lg:mt-12 pb-8 lg:pb-0">
              {metrics}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div
          className={`hidden sm:block sm:relative ${rightBg} bg-cover bg-center `}
          style={{ backgroundImage: rightBgImage }}
        >
          {rightImage}
          {floatingCards}
        </div>
      </div>
    </section>
  );
}