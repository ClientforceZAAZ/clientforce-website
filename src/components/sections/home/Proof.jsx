"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";



// Testimonial cards data

const TESTIMONIALS = [
  {
    id: "chidi",
    quote: '"We Booked 37 Qualified Meetings In 7 Days."',
    author: "— Chidi Okafor, Agency Owner",
    image: "/images/proof_chidi.png",
  },
  {
    id: "marisa",
    quote: '"$42,000 Closed From AI Voice Handling Objections."',
    author: "— Marisa Lane, B2B Consultant",
    image: "/images/proof_marisa.png",
  },
  {
    id: "alex",
    quote: '"120+ Personalized Proposals Sent—Zero Manual Work."',
    author: "— Alex K, SaaS Founder",
    image: "/images/proof_alex.png",
  },
];

// Brand and their logos data

const BRANDS = [
  { id: "fox",      label: "FOX",      image: "/icons/brand_icons/Fox.svg", width: 59, height: 25},
  { id: "google",   label: "Google",   image: "/icons/brand_icons/Google.svg",  width: 78, height: 25},
  { id: "walmart",  label: "Walmart",  image: "/icons/brand_icons/Walmart.svg",  width: 109, height: 26},
  { id: "adidas",   label: "Adidas",   image: "/icons/brand_icons/Adidas.svg",  width: 60, height: 40},
  { id: "pizzahut", label: "Pizza Hut",image: "/icons/brand_icons/Pizza Hut.svg",  width: 48, height: 48},
  { id: "philips",  label: "Philips",  image: "/icons/brand_icons/Philips.svg",  width: 90, height: 17},
  { id: "cnn",      label: "CNN",      image: "/icons/brand_icons/CNN.svg" ,  width: 62, height: 30},
  { id: "beanst",   label: "Beanst",   image: "/icons/brand_icons/Beanstalk.svg",  width: 80, height: 30},
];



// Testimonial card

function TestimonialCard({ quote, author, image, index, isVisible }) {
  return (
    <div
      style={{
        transitionDelay: isVisible ? `${index * 130}ms` : "0ms",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
      }}
      className=" group relative overflow-hidden rounded-2xl"
    >

      <div className="relative h-[380px] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={author}
          fill
          className="object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Gradient overlay so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="mb-2 text-xl font-bold leading-snug text-white">{quote}</p>
          <p className="text-sm text-white">{author}</p>
        </div>
      </div>
    </div>
  );
}


// Brand scrolling
function BrandScroller() {
  // Duplicate brands for seamless loop
  const items = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="relative mt-12 overflow-hidden">
      {/* Fade masks on left and right edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-6 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-6 bg-gradient-to-l from-white to-transparent" />

      <div className="flex w-full overflow-hidden py-5">
        <div
          className="flex shrink-0 items-center gap-12"
          style={{ animation: "brandScroll 30s linear infinite" }}
        >
          {items.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex shrink-0 items-center justify-center border border-gray-300 w-[160px] h-[95px]"
            >
              {/* If you have image files use the Image component below.
                  Otherwise replace with an <img> or inline SVG. */}
              <Image
                src={brand.image}
                alt={brand.label}
                width={brand.width}
                height={brand.height}
                className=" object-contain grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main section
export default function Proof() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white px-6 py-16 md:px-12">

      {/* Heading */}
      <h2 className="mb-14 text-center text-5xl font-extrabold text-black font-degular">
        ❤ Proof That Matters
      </h2>

      {/* Testimonial cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={t.id}
            quote={t.quote}
            author={t.author}
            image={t.image}
            index={i}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Brand scroller */}
      <BrandScroller />

      <style>{`
        @keyframes brandScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}