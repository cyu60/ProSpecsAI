import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gradient-to-r from-purple-600 to-indigo-600">
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
