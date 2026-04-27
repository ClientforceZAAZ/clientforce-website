import React from 'react';

const INTEGRATIONS = [
  {
    label: "Email Senders:",
    count: "3",
    bgColor: "#FFE6DE",
    borderColor: "#FFD1C4",
  },
  {
    label: "Calendars",
    count: "2",
    bgColor: "#BFF4FD",
    borderColor: "#A3E9F7",
  },
  {
    label: "Voice Numbers",
    count: "4",
    bgColor: "#F1FFCC",
    borderColor: "#E2F5B0",
  },
  {
    label: "Whatsapp",
    count: "6",
    bgColor: "#FFDDF2",
    borderColor: "#FFCCE9",
  },
];

export default function IntegrationsCards() {
  return (
    <section className="w-full px-8 lg:px-40 py-12 bg-[#F7F7F7]">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {INTEGRATIONS.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bgColor, borderColor: item.borderColor }}
            className="flex flex-col justify-center p-6 rounded-[1rem] border transition-transform hover:scale-[1.02] cursor-default shadow-sm"
          >
            <span className="text-gray-600 text-sm font-medium mb-1">
              {item.label}
            </span>
            <p className="text-black text-2xl font-bold tracking-tight">
              {item.count} <span className="font-bold">connected</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}