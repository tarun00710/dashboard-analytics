'use client'
import { ProtectedLayout } from "@/component/common/ProtectedLayout";
import { DashboardHeader } from "@/component/dashboard/Header";
import Sidebar  from "@/component/dashboard/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout>
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex w-64 flex-col border-r border-gray-200 bg-white">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="h-16 border-b bg-white">
          <DashboardHeader />
        </div>
           <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
     </ProtectedLayout>
  );
}
