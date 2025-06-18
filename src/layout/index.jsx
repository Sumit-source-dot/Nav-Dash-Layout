import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";

const HomeLayout = () => {
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

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* ✅ Your real Navbar here */}
        <div className="flex items-center justify-between bg-white shadow p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <Menu size={28} />
          </button>
          <Navbar />
        </div>

        {/* Page content */}
        <main className="container mx-auto px-4 py-6">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
