"use client";
import { DashboardData } from "@/types/types";
import {
  AreaChart as RAreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AreaChart({ data }: { data: DashboardData }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RAreaChart data={data.areaChart}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="visits"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </RAreaChart>
      </ResponsiveContainer>
    </div>
  );
}


