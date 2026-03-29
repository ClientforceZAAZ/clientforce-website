"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";



function UseCaseCard({ title, description, image, index, isVisible }) {
  return (
    <div
      style={{
        transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-black"
    >
      {/* Image container — overflow hidden so scale stays clipped */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Text */}
      <div className="px-6 pt-7 pb-10">
        <p className=" text-lg font-bold text-white">{title}</p>
        <p className="text-lg font-light leading-6 text-white">{description}</p>
      </div>
    </div>
  );
}

export default function UseCases(
    {
  heading,
  highlightText,
  cards = [],
  bgColor,
}
) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`w-full bg-[#EEF9FA] px-6 py-6 sm:py-16 md:px-16 ${bgColor}`}>
      <h2 className={`mb-8 text-3xl sm:text-5xl font-bold text-black font-degular ${ cards.length === 4 ? "" : "text-center"}`}>{heading} <span className="text-[#787878]">
            {highlightText}
          </span></h2>

      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${ cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} `}>
        {cards.map((uc, i) => (
          <UseCaseCard
            key={uc.id}
            title={uc.title}
            description={uc.description}
            image={uc.image}
            index={i}
            isVisible={isVisible}
          />
        ))}
      </div>
    </section>
  );
}


