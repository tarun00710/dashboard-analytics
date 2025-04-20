// app/dashboard/page.jsx
import Card from "@/component/card/Card";
import ChartSkeleton from "@/component/card/CardSkeleton";
import AreaChart from "@/component/charts/AreaChart";
import BarChart from "@/component/charts/BarChart";
import LineChartComponent from "@/component/charts/LineChart";
import PieChart from "@/component/charts/PieChart";
import ErrorBoundary from "@/component/error/ErrorBoundary";
import UserTable from "@/component/table/Table";
import { getDashboardData } from "@/lib/getDashboardData";
import { Suspense } from "react";

async function DashboardContent() {
  const data = await getDashboardData();
  return (
    <>
      <Card title="Monthly Sales">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <LineChartComponent data={data} />
        </ErrorBoundary>
      </Card>

      <Card title="Revenue by Category">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <BarChart data={data} />
        </ErrorBoundary>
      </Card>

      <Card title="Browser Distribution">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <PieChart data={data} />
        </ErrorBoundary>
      </Card>

      <Card title="Daily Visits">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <AreaChart data={data} />
        </ErrorBoundary>
      </Card>
      <div className="col-span-1 md:col-span-2">
        <Card title="User Data Table">
          <UserTable />
        </Card>
      </div>
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 md:p-6">
      <Suspense fallback={
        <>
          <Card title="Monthly Sales"><ChartSkeleton /></Card>
          <Card title="Revenue by Category"><ChartSkeleton /></Card>
          <Card title="Browser Distribution"><ChartSkeleton /></Card>
          <Card title="Daily Visits"><ChartSkeleton /></Card>
          <div className="col-span-1 md:col-span-2">
            <Card title="User Data Table"><ChartSkeleton /></Card>
          </div>
        </>
      }>
        <DashboardContent />
      </Suspense>
    </div>
  );
}