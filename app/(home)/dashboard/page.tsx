import Card from "@/component/card/Card";
import ChartSkeleton from "@/component/card/CardSkeleton";
import AreaChart from "@/component/charts/AreaChart";
import BarChart from "@/component/charts/BarChart";
import LineChartComponent from "@/component/charts/LineChart";
import PieChart from "@/component/charts/PieChart";
import UserTable from "@/component/table/Table";
import { getDashboardData } from "@/lib/getDashboardData";
import { Suspense } from "react";

async function LineChartWithData() {
  const data = await getDashboardData();
  return <LineChartComponent data={data} />;
}

async function BarChartWithData() {
  const data = await getDashboardData();
  return <BarChart data={data} />;
}

async function PieChartWithData() {
  const data = await getDashboardData();
  return <PieChart data={data} />;
}

async function AreaChartWithData() {
  const data = await getDashboardData();
  return <AreaChart data={data} />;
}

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card title="Monthly Sales">
        <Suspense fallback={<ChartSkeleton />}>
          <LineChartWithData />
        </Suspense>
      </Card>

      <Card title="Revenue by Category">
        <Suspense fallback={<ChartSkeleton />}>
          <BarChartWithData />
        </Suspense>
      </Card>

      <Card title="Browser Distribution">
        <Suspense fallback={<ChartSkeleton />}>
          <PieChartWithData />
        </Suspense>
      </Card>

      <Card title="Daily Visits">
        <Suspense fallback={<ChartSkeleton />}>
          <AreaChartWithData />
        </Suspense>
      </Card>
      <div className="col-span-1 md:col-span-2">
        <Card title="User Data Table">
          <UserTable />
        </Card>
      </div>
    </div>
  );
}
