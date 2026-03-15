

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
    <section className="relative overflow-hidden mt-21">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className={`space-y-3 pl-16 pt-16 ${leftBg}`}>
          {badge && (
            <div className="inline-block">
              <div className="relative p-0.5 rounded-full bg-[linear-gradient(270deg,#F437AB,#08A541,#FF9D7C,#F437AB)]">
                <div className={` ${badgeBg ? badgeBg : "bg-white"} rounded-full px-3 py-1 flex items-center justify-center`} style={{ background: badgeBg ? badgeBg : "white"}}>
                  {badgeIcon}
                  <span className="text-sm font-bold bg-linear-to-r from-black to-[#C521D1] bg-clip-text text-transparent">
                    {badge}
                  </span>
                </div>
              </div>
            </div>
          )}

          <h1 className={`font-degular ${headlineStyle} font-extrabold`}>
            {headline}
          </h1>

          <p className={`font-degular font-medium text-lg text-[#676767] max-w-130 ${descriptionStyle}`}>
            {description}
          </p>

          <div className="flex flex-wrap mt-6 items-center gap-4">
            {primaryCTA}
            {secondaryCTA}
          </div>

          {metrics && (
            <div className="font-pjs flex flex-wrap gap-4 text-[13px] text-gray-500 mt-12">
              {metrics}
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className={`relative ${rightBg} bg-cover bg-center`} style={{  backgroundImage: rightBgImage }}>
      
           {rightImage}
          {floatingCards}
        </div>
      </div>
    </section>
  );
}