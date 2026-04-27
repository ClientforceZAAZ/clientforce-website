
"use client";

import { useEffect, useState } from "react";

const W = 400;
const H = 370;

const POSITIONS = {
  agent:       { x: W * 0.5,  y: 80  },
  prospecting: { x: W * 0.38, y: 155 },
  messaging:   { x: W * 0.72, y: 155 },
  proposing:   { x: W * 0.25, y: 240 },
  calling:     { x: W * 0.5,  y: 240 },
  closing:     { x: W * 0.75, y: 240 },
  e2e:         { x: W * 0.5,  y: 320 },
};


const NEXT_ACTIONS = [
  "Voice Call in 2 mins",
  "Send Follow-up Email",
  "Book Discovery Call",
  "Send Proposal",
  "Schedule Demo",
];


const NODES = [
  { id: "agent",       label: "AI Sales Agents",  icon: (<><img src="/icons/ai_sales_agent.svg" alt="ai_sales_agent" /></>), color: "#1f2937", textColor: "#ffffff", borderColor: "#4b5563" },
  { id: "prospecting", label: "Auto Prospecting",  icon: (<><img src="/icons/auto_prospectingg.svg" alt="ai_sales_agent" /></>), color: "#D0F56B", textColor: "#000000", borderColor: "#86efac" },
  { id: "messaging",   label: "Messaging",         icon:(<><img src="/icons/messagingg.svg" alt="ai_sales_agent" /></>), color: "#FFC3C3", textColor: "#000000", borderColor: "#f9a8d4" },
  { id: "proposing",   label: "Proposing",         icon: (<><img src="/icons/proposing.svg" alt="ai_sales_agent" /></>), color: "#E1ABFF", textColor: "#000000", borderColor: "#c4b5fd" },
  { id: "calling",     label: "Calling",           icon: (<><img src="/icons/calls.svg" alt="ai_sales_agent" /></>), color: "#A7B0FE", textColor: "#000000", borderColor: "#93c5fd" },
  { id: "closing",     label: "Closing",           icon:(<><img src="/icons/calls.svg" alt="ai_sales_agent" /></>), color: "#A2EBF8", textColor: "#000000", borderColor: "#67e8f9" },
  { id: "e2e",         label: "End to end, 24/7",  icon: (<><img src="/icons/end_to_end.svg" alt="ai_sales_agent" /></>), color: "#A1FBBF", textColor: "#000000", borderColor: "#0EBE4F" },
];

const SEQUENCE = ["agent", "prospecting", "messaging", "proposing", "calling", "closing", "e2e"];

// Single sequential chain — 6 connections only
const CONNECTIONS = [
  {
    id: "agent-prospecting",
    from: "agent", to: "prospecting",
    glowColor: "#86efac",
    path: (p1, p2) =>
      `M ${p1.x} ${p1.y + 16} C ${p1.x - 20} ${p1.y + 50}, ${p2.x + 30} ${p2.y - 30}, ${p2.x} ${p2.y - 16}`,
  },
  {
    id: "prospecting-messaging",
    from: "prospecting", to: "messaging",
    glowColor: "#f9a8d4",
   path: (p1, p2) => 
  `M ${p1.x} ${p1.y} C ${p1.x + 30} ${p1.y}, ${p2.x - 30} ${p2.y}, ${p2.x} ${p2.y}`,
  },
  {
    id: "messaging-proposing",
    from: "messaging", to: "proposing",
    glowColor: "#c4b5fd",
    path: (p1, p2) =>
      `M ${p1.x} ${p1.y + 16} C ${p1.x - 30} ${p1.y + 40}, ${p2.x + 40} ${p2.y - 30}, ${p2.x} ${p2.y - 16}`,
  },
  {
    id: "proposing-calling",
    from: "proposing", to: "calling",
    glowColor: "#93c5fd",
    path: (p1, p2) =>
      `M ${p1.x + 16} ${p1.y} C ${p1.x + 40} ${p1.y}, ${p2.x - 40} ${p2.y}, ${p2.x - 16} ${p2.y}`,
  },
  {
    id: "calling-closing",
    from: "calling", to: "closing",
    glowColor: "#67e8f9",
    path: (p1, p2) =>
      `M ${p1.x + 16} ${p1.y} C ${p1.x + 40} ${p1.y}, ${p2.x - 40} ${p2.y}, ${p2.x - 16} ${p2.y}`,
  },
  {
    id: "closing-e2e",
    from: "closing", to: "e2e",
    glowColor: "#0EBE4F",
    path: (p1, p2) =>
      `M ${p1.x} ${p1.y + 16} C ${p1.x - 20} ${p1.y + 40}, ${p2.x + 40} ${p2.y - 30}, ${p2.x} ${p2.y - 16}`,
  },
];

function TravellingDot({ pathData, color, duration, visible }) {
  if (!visible) return null;
  return (
    <circle r="3" fill={color}>
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" path={pathData} />
    </circle>
  );
}

export default function HeroFlowDiagram() {
  const [visibleNodes,       setVisibleNodes]       = useState([]);
  const [visibleConnections, setVisibleConnections] = useState([]);
  const [activeNode,         setActiveNode]         = useState(null);
  const [cardVisible,        setCardVisible]        = useState(false);
  const [e2eLineVisible,     setE2eLineVisible]     = useState(false);
  const [actionIndex, setActionIndex] = useState(0);

  useEffect(() => {
    const timeouts = [];
    let cycleInterval;

    SEQUENCE.forEach((nodeId, i) => {
      // Reveal node
      const nt = setTimeout(() => {
        setVisibleNodes((prev) => [...prev, nodeId]);
        setActiveNode(nodeId);

        // Reveal outgoing connection 600ms after node appears
        const ct = setTimeout(() => {
          const outgoing = CONNECTIONS
            .filter((c) => c.from === nodeId)
            .map((c) => c.id);
          setVisibleConnections((prev) => [...prev, ...outgoing]);

          if (nodeId === "e2e") {
            setTimeout(() => setE2eLineVisible(true), 500);
          }
        }, 600);
        timeouts.push(ct);

      }, i * 1100);
      timeouts.push(nt);
    });

    // Show card after full sequence
    const cardT = setTimeout(() => {
      setCardVisible(true);
    }, SEQUENCE.length * 1100 + 800);
    timeouts.push(cardT);

    // Start cycling active highlight after full sequence
    const cycleStartT = setTimeout(() => {
      let idx = 0;
      cycleInterval = setInterval(() => {
        setActiveNode(SEQUENCE[idx % SEQUENCE.length]);
        idx++;
      }, 1400);
    }, SEQUENCE.length * 1100 + 1000);
    timeouts.push(cycleStartT);
    
    const actionInterval = setInterval(() => {
  setActionIndex((prev) => (prev + 1) % NEXT_ACTIONS.length);
}, 2500);

    return () => {
      timeouts.forEach(clearTimeout);
      if (cycleInterval) clearInterval(cycleInterval);
       clearInterval(actionInterval);
    };


  }, []);

  // Vertical line path from e2e down to card area
  const e2ePos    = POSITIONS["e2e"];
  const e2eLinePath = `M ${e2ePos.x} ${e2ePos.y + 16} L ${e2ePos.x} ${H}`;

  return (
    <div
      className="relative w-full h-full min-h-[565px] bg-cover bg-center overflow-hidden flex flex-col"
      style={{ backgroundImage: "url('/images/hero_right_bg.png')" }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/25 rounded-2xl" /> */}

      {/* SVG layer */}
      <div className="relative z-10 flex-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 6 sequential connections */}
          {CONNECTIONS.map((conn) => {
            const p1        = POSITIONS[conn.from];
            const p2        = POSITIONS[conn.to];
            const pathD     = conn.path(p1, p2);
            const isVisible = visibleConnections.includes(conn.id);
            const isActive  = activeNode === conn.to && isVisible;

            return (
              <g key={conn.id}>
                {/* Base line */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                />
                {/* Glow line when active */}
                <path
                  d={pathD}
                  fill="none"
                  stroke={conn.glowColor}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  filter="url(#glow)"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.5s ease",
                  }}
                />
                {/* Travelling dot */}
                <TravellingDot
                  pathData={pathD}
                  color={isActive ? conn.glowColor : "rgba(255,255,255,0.3)"}
                  duration={2.5}
                  visible={isVisible}
                />
              </g>
            );
          })}

          {/* Vertical line e2e → card */}
          <line
            x1={e2ePos.x} y1={e2ePos.y + 16}
            x2={e2ePos.x} y2={H}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            style={{
              opacity: e2eLineVisible ? 1 : 0,
              transition: "opacity 0.8s ease",
            }}
          />
          <TravellingDot
            pathData={e2eLinePath}
            color="rgba(14,190,79,0.8)"
            duration={1.5}
            visible={e2eLineVisible}
          />
        </svg>

        {/* Node pills */}
        <div className="absolute inset-0">
          {NODES.map((node) => {
            const pos       = POSITIONS[node.id];
            const isVisible = visibleNodes.includes(node.id);
            const isActive  = activeNode === node.id;

            return (
              <div
                key={node.id}
                style={{
                  position:   "absolute",
                  left:       `${(pos.x / W) * 100}%`,
                  top:        `${(pos.y / H) * 100}%`,
                  transform:  "translate(-50%, -50%)",
                  opacity:    isVisible ? 1 : 0,
                  scale:      isVisible ? "1" : "0.5",
                  transition: "opacity 0.6s ease, scale 0.6s ease",
                  zIndex:     20,
                }}
              >
                <div
                  style={{
                    background:   node.color,
                    border:       `1.5px solid ${isActive ? "#ffffff" : node.borderColor}`,
                    color:        node.textColor,
                    borderRadius: "14px",
                    padding:      "8px 16px",
                    display:      "flex",
                    alignItems:   "center",
                    gap:          "7px",
                    fontSize:     "14px",
                    fontWeight:   "700",
                    whiteSpace:   "nowrap",
                    boxShadow: isActive
                      ? `0 0 0 2px ${node.borderColor}55, 0 0 20px 6px ${node.borderColor}55`
                      : "0 2px 8px rgba(0,0,0,0.25)",
                    transition:   "box-shadow 0.5s ease, border-color 0.5s ease",
                  }}
                >
                  {node.icon}
                  {node.label}
                  {node.id === "agent" && (
                    <span style={{
                      width: "8px", height: "8px",
                      borderRadius: "50%",
                      background: "#0EBE4F",
                      display: "inline-block",
                      animation: "heroPulse 2s infinite",
                    }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

     {/* Demo Booking Agent card */}
<div
  className="relative z-20 mx-5 mb-5"
  style={{
    opacity:    cardVisible ? 1 : 0,
    transform:  cardVisible ? "translateY(0)" : "translateY(14px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  }}
>
  <div
    className="backdrop-blur-sm rounded-2xl px-4 py-4 border border-gray-600/50"
    style={{ background: "rgba(20, 35, 20, 0.88)" }}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#2a3a2a] border border-gray-600 flex items-center justify-center text-xl flex-shrink-0">
          <img src="/icons/demo_booking_agent.svg" alt="" />
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Demo Booking Agent</p>
          <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
            Status:{" "}
            <span className="text-green-400 font-medium">Running</span>
            {/* Spinning circle */}
            <svg
              width="12" height="12"
              viewBox="0 0 12 12"
              style={{ animation: "spinnerRotate 1.2s linear infinite", marginLeft: "2px" }}
            >
              <circle
                cx="6" cy="6" r="4.5"
                fill="none"
                stroke="rgba(74,222,128,0.25)"
                strokeWidth="1.5"
              />
              <path
                d="M 6 1.5 A 4.5 4.5 0 0 1 10.5 6"
                fill="none"
                stroke="#4ade80"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 bg-green-500/15 border border-green-500/40 rounded-full px-3 py-1.5">
        <span style={{
          width: "7px", height: "7px",
          borderRadius: "50%",
          background: "#0EBE4F",
          display: "inline-block",
          animation: "heroPulse 2s infinite",
        }} />
        <span className="text-green-400 text-xs font-semibold">Activated</span>
      </div>
    </div>

    <div className="mt-3 pt-3 border-t border-gray-600/40">
      <p className="text-gray-400 text-xs flex items-center gap-1">
        Next Action:{" "}
        <span
          key={actionIndex}
          className="text-white font-semibold"
          style={{ animation: "actionFadeIn 0.5s ease" }}
        >
          {NEXT_ACTIONS[actionIndex]}
        </span>
      </p>
    </div>
  </div>
</div>

<style>{`
  @keyframes heroPulse {
    0%, 100% { opacity: 1;   transform: scale(1);   }
    50%       { opacity: 0.4; transform: scale(1.5); }
  }
  @keyframes spinnerRotate {
    from { transform: rotate(0deg);   }
    to   { transform: rotate(360deg); }
  }
  @keyframes actionFadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0);   }
  }
`}</style>

    </div>
  );
}