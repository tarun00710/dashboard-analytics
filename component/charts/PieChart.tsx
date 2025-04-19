"use client";
import { DashboardData } from "@/types/types";
import { COLORS } from "@/utils/constants";
import {
  PieChart as RPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PieChart({ data }: { data: DashboardData }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RPieChart>
          <Pie
            data={data.pieChart}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.pieChart.map((_: any, index: number) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
             
          </Pie>
          <Tooltip />
        </RPieChart>
      </ResponsiveContainer>
    </div>
  );
}
