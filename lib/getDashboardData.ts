import dashboardData from '@/mocks/dashBoardData.json';

export async function getDashboardData() {
  if (typeof window !== 'undefined') {
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  console.log("hello")
  return dashboardData;
}