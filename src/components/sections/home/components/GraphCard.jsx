"use client";

import {
  AreaChart, Area, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react"

const CHART_DATA = [
  { month: "Jan", value: 900  },
  { month: "Feb", value: 10000 },
  { month: "Mar", value: 4000  },
  { month: "Apr", value: 6000  },
  { month: "May", value: 4000  },
  { month: "Jun", value: 1200  },
  { month: "Jul", value: 6000  },
  { month: "Aug", value: 8000  },
  { month: "Sep", value: 3000  },
  { month: "Oct", value: 7010  },
  { month: "Nov", value: 2000  },
  { month: "Dec", value: 4070  },
];

export default function GraphCard() {
  return (
    <div className="absolute right-[-54] top-36 w-[40%] rounded-2xl bg-white p-4 shadow-2xl border border-gray-300">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-black">
          Sequence Step Performance
        </span>
        <span className="rounded-full bg-gray-100 px-2 py-0.5 font-bold text-[10px] text-black">
          Sent <ChevronDown className="w-3 h-3 inline-block text-black" />
        </span>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={140}>
        <AreaChart
          data={CHART_DATA}
          margin={{ top: 4, right: 0, left: -32, bottom: 0 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#394CFF" stopOpacity={1} />
              <stop offset="100%" stopColor="#D9D9D900" stopOpacity={0.6} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 8, fill: "#00000099" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 8, fill: "#00000099" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              fontSize: 11,
              borderRadius: 8,
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 5, fill: "#6366f1" }}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}