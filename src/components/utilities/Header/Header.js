"use client";

import LaptopLayout from "./helper/LaptopLayout";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import TabLayout from "./helper/TabLayout";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log(isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {isDrawerOpen && (
          <div
            className="fixed inset-0 z-10 bg-gray-900 opacity-50 transition-opacity duration-300"
            onClick={closeDrawer}
          />
        )}
      </div>

      <nav className="fixed bg-white w-full z-[1000]">
        <div className="p-2 m-auto max-w-screen-2xl">
          <LaptopLayout toggleDrawer={toggleDrawer} />

          {isDrawerOpen && (
            <TabLayout closeDrawer={closeDrawer} />
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
