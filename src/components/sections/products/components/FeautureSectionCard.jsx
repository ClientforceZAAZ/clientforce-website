"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useVisible(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FeatureCard({ icon, title, description, delay = "0s", visible, className }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
      className={`flex items-start gap-3 bg-white rounded-2xl p-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#0000001A] hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-shadow duration-300 ${className}`}
    >
      <div className="w-9 h-9 rounded-xl bg-[#E1E1E1] border border-gray-100 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-black">{title}</p>
        <p className="text-[12px] text-[#787878] mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function FeatureSection({
  title,
  subtitle,
  features,
  image,
  imageAlt = "",
  textBg = "bg-white",
  imageBg = "bg-[#EEF9F3]",
  FeatureSectionBg,
  borderSetting,
  reverse = false,
}) {
  const [ref, visible] = useVisible(0.15);

  return (
    <section ref={ref} className={`rounded-3xl overflow-hidden shadow-xl mb-14 mt-4 px-10 py-6 bg-cover bg-center ${ borderSetting }`} style={{  backgroundImage: FeatureSectionBg}}>
      <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} items-stretch gap-8`}>

        {/* Text Side */}
        <div className={`flex-1  flex flex-col justify-center`}>
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : reverse ? "translateX(30px)" : "translateX(-30px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <h2 className="text-3xl lg:text-[35px] font-bold text-black leading-tight">
              {title}
            </h2>
            <p className="text-[18px] text-[#787878] mt-1 mb-2 leading-relaxed max-w-sm">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, i) => (
                <FeatureCard
                key={feature.title}
                {...feature}
                delay={`${0.2 + i * 0.1}s`}
                visible={visible}
                className={feature.fullWidth ? "sm:col-span-2" : ""}
                />
            ))}
          </div>
        </div>

        {/* Image Side */}
        <div
          className={`flex-1 flex items-center justify-center`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={800}
            quality={100}
            className="w-full h-full object-contain drop-shadow"
          />
        </div>

      </div>
    </section>
  );
}