"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiTask } from "react-icons/bi";
import { PiChatCentered } from "react-icons/pi";

const SIDEBAR_ITEMS = [
  { icon: <Mail width={18} />, label: "Email"    },
  { icon: <FaWhatsapp size={20} />, label: "Whatsapp" },
  { icon: <PiChatCentered size={20} />, label: "SMS"      },
  { icon: <MdOutlineLocalPhone size={20} />, label: "Call"     },
  { icon: <SlSocialLinkedin size={20} />, label: "Linkedin" },
  { icon: <BiTask  size={20}/>, label: "Task"     },
];

// Only cycle through the first 3
const CYCLING_TABS = [0, 1, 2, 3, 4, 5];

export default function SidebarCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const currentPos = CYCLING_TABS.indexOf(prev);
        const nextPos    = (currentPos + 1) % CYCLING_TABS.length;
        return CYCLING_TABS[nextPos];
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-8 left-[-80] w-44 rounded-2xl bg-white p-3 shadow-2xl border border-gray-300">
      {SIDEBAR_ITEMS.map((item, i) => (
        <div
          key={item.label}
          style={{ transition: "background 0.4s ease" }}
          className={`mb-1 flex items-center gap-2.5 rounded-xl px-3 py-2 ${
            activeIndex === i ? "bg-green-500" : "border border-gray-200"
          }`}
        >
          <span className={`text-[10px] font-medium ${
              activeIndex === i ? "text-black" : "text-[#787878]"
            }`}>{item.icon}</span>
          <span
            style={{ transition: "color 0.4s ease" }}
            className={`text-sm font-medium ${
              activeIndex === i ? "text-black" : "text-[#787878]"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}