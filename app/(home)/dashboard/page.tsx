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

// eslint-disable-next-line
async function ChartWithData({ ChartComponent }:{ChartComponent: React.ComponentType<{ data: any }>}) {
  const data = await getDashboardData();
  return <ChartComponent data={data} />;
}

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card title="Monthly Sales">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <Suspense fallback={<ChartSkeleton />}>
            <ChartWithData ChartComponent={LineChartComponent} />
          </Suspense>
        </ErrorBoundary>
      </Card>
      
      <Card title="Revenue by Category">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <Suspense fallback={<ChartSkeleton />}>
            <ChartWithData ChartComponent={BarChart} />
          </Suspense>
        </ErrorBoundary>
      </Card>
      
      <Card title="Browser Distribution">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <Suspense fallback={<ChartSkeleton />}>
            <ChartWithData ChartComponent={PieChart} />
          </Suspense>
        </ErrorBoundary>
      </Card>
      
      <Card title="Daily Visits">
        <ErrorBoundary fallback={<p className="text-red-500">Chart error!</p>}>
          <Suspense fallback={<ChartSkeleton />}>
            <ChartWithData ChartComponent={AreaChart} />
          </Suspense>
        </ErrorBoundary>
      </Card>
      
      <div className="col-span-1 md:col-span-2">
        <Card title="User Data Table">
          <UserTable />
        </Card>
      </div>
    </div>
  );
}