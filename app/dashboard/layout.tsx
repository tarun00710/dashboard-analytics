
import { DashboardHeader } from "@/component/dashboard/DashboardHeader";
import { Sidebar } from "@/component/dashboard/SideBar";


export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar on the left */}
        <div className="hidden md:flex w-64 flex-col border-r border-gray-200 bg-white">
          <Sidebar />
        </div>
  
        {/* Right section: Header + Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <div className="h-16 border-b bg-white">
            <DashboardHeader />
          </div>
  
          {/* Scrollable content */}
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    );
  }
  
  
  