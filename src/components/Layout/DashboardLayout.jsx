import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Navbar2 from "../Navbar2";
import { SideBar2 } from "../SideBar2";
import { useSidebarContext } from "../../Context/ContextLayout.jsx";
import { DropdownSidebar2 } from "../DropdownSidebar2.jsx";

export const Layout = ({ active, children }) => {
  const { pathname } = useLocation();

  const { sidebarOpen } = useSidebarContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <div className="w-full flex flex-col lg:relative">
        <Navbar2 />
      </div>

      <div className="xl:hidden w-full bg-white">
        <DropdownSidebar2 active={active} />
      </div>

      {/* Sidebar and Content */}
      <div className="flex flex-grow">
        {/* Sidebar for larger screens */}

        <div
          className={`hidden xl:block min-w-64 2xl:min-w-80`}
        >
          <SideBar2 active={active} />
        </div>

        {/* Main Content Area */}
        <main className=" w-full px-[10px] md:p-[32px] bg-white lg:bg-[#fbfbfb]">
          {children}
        </main>
      </div>
    </div>
  );
};
