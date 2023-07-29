import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
      <main className="md:pl-72">
        <Navbar ></Navbar>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
