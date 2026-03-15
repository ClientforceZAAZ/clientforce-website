"use client";

import { useEffect, useRef, useState } from "react";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── Card primitive ───────────────────────────────────────────────────────────
function GridCard({ children, delay, visible, className = "" }) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

// ─── FeatureGrid ──────────────────────────────────────────────────────────────
/**
 * Props
 * ─────
 * heading        – JSX or string for the section title
 * accentColor    – Tailwind-safe CSS color string for card gradient tint  (default "#D0F56B21")
 * borderColor    – card border color                                       (default "#FFFFFF0D")
 * background     – section background CSS value
 *
 * leftCard       – { title, description, image, imageAlt, imageClass }
 * topRightCard   – { title, description, image, imageAlt, imageClass }
 * bottomCards    – array of exactly 2 objects:
 *                  { title, description, image, imageAlt, imageClass,
 *                    imagePosition: "top" | "bottom" (default "bottom") }
 */
export default function FeatureGrid({
  heading,
  accentColor = "#D0F56B21",
  borderColor = "#FFFFFF0D",
  background = "linear-gradient(to bottom, #000000, #0F2212)",
  leftCard,
  topRightCard,
  bottomCards = [],
}) {
  const [ref, visible] = useVisible();

  const cardBase = `bg-linear-to-b from-[#FFFFFF0D] from-60% border rounded-2xl overflow-hidden`;
  const cardStyle = (extra = "") =>
    `${cardBase} ${extra}`;

  // Inline style for per-card gradient tint + border
  const cardInlineStyle = {
    background: `linear-gradient(to bottom, #FFFFFF0D 60%, ${accentColor})`,
    borderColor: borderColor,
    borderWidth: "1px",
    borderStyle: "solid",
  };

  return (
    <section
      className="w-full px-6 lg:px-20 py-20"
      style={{ background }}
    >
      <div ref={ref}>
        {/* Heading */}
        {heading && (
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(-16px)",
              transition: "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s",
            }}
            className="mb-10 flex justify-center"
          >
            {heading}
          </div>
        )}

        <div className="grid grid-cols-9 gap-6">

          {/* ── Left tall card ──────────────────────────────────────── */}
          {leftCard && (
            <GridCard
              delay="0.1s"
              visible={visible}
              className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6"
              style={cardInlineStyle}  // applied via wrapper below
            >
              <div
                className="col-span-3 rounded-2xl overflow-hidden flex flex-col justify-center px-8 py-6 h-full"
                style={cardInlineStyle}
              >
                <div>
                  <h3 className="text-white font-bold text-xl leading-snug">{leftCard.title}</h3>
                  <p className="text-sm text-[#FFFFFF99] mt-1">{leftCard.description}</p>
                </div>
                {leftCard.image && (
                  <div className="overflow-hidden mt-auto flex items-center justify-center">
                    <img
                      src={leftCard.image}
                      alt={leftCard.imageAlt || ""}
                      className={leftCard.imageClass || "object-cover rounded-t-xl h-[400px]"}
                    />
                  </div>
                )}
              </div>
            </GridCard>
          )}

          {/* ── Right column ────────────────────────────────────────── */}
          <div className="col-span-6 flex flex-col gap-6">

            {/* Top right card */}
            {topRightCard && (
              <GridCard delay="0.2s" visible={visible} className="w-full">
                <div
                  className="rounded-2xl overflow-hidden flex flex-row gap-4 p-6"
                  style={cardInlineStyle}
                >
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl leading-snug">{topRightCard.title}</h3>
                    <p className="text-sm text-[#FFFFFF99] mt-1">{topRightCard.description}</p>
                  </div>
                  {topRightCard.image && (
                    <div className="flex-shrink-0">
                      <img
                        src={topRightCard.image}
                        alt={topRightCard.imageAlt || ""}
                        className={topRightCard.imageClass || "object-contain rounded-lg w-[330px]"}
                      />
                    </div>
                  )}
                </div>
              </GridCard>
            )}

            {/* Bottom two cards */}
            {bottomCards.length > 0 && (
              <div className="flex gap-6">
                {bottomCards.slice(0, 2).map((card, i) => (
                  <GridCard
                    key={i}
                    delay={`${0.3 + i * 0.1}s`}
                    visible={visible}
                    className="flex-1"
                  >
                    <div
                      className={`rounded-2xl overflow-hidden flex flex-col p-6 h-full ${
                        card.imagePosition === "top" ? "items-center" : "items-center"
                      }`}
                      style={cardInlineStyle}
                    >
                      {card.imagePosition === "top" && card.image && (
                        <div className="flex-shrink-0 mb-4">
                          <img
                            src={card.image}
                            alt={card.imageAlt || ""}
                            className={card.imageClass || "object-contain rounded-lg"}
                          />
                        </div>
                      )}

                      <div className={card.imagePosition === "top" ? "mt-auto" : "flex-1"}>
                        <h3 className="text-white font-bold text-xl leading-snug">{card.title}</h3>
                        <p className="text-sm text-[#FFFFFF99] mt-1">{card.description}</p>
                      </div>

                      {card.imagePosition !== "top" && card.image && (
                        <div className="flex-shrink-0 mt-4">
                          <img
                            src={card.image}
                            alt={card.imageAlt || ""}
                            className={card.imageClass || "object-contain rounded-lg"}
                          />
                        </div>
                      )}
                    </div>
                  </GridCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}