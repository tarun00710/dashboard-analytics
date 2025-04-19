'use client';
import { DashboardData } from '@/utils/types';
import { BarChart as RBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function BarChart({data}:{data:DashboardData}) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RBarChart data={data.barChart}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </RBarChart>
      </ResponsiveContainer>
    </div>
  );
}