import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react"; // or any hamburger icon

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-0"
        } overflow-hidden bg-red-500 text-white`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Navbar with toggle */}
        <div className="bg-white shadow p-4 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <Menu size={28} />
          </button>
          <h1 className="text-lg font-bold text-gray-700">Dashboard</h1>
        </div>

        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
