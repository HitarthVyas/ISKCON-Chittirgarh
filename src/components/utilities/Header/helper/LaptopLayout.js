import Link from "next/link";
import React from "react";
import { headerOptions } from "./headerData";
import Dropdown from "./Dropdown";

const LaptopLayout = ({ toggleDrawer }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-x-10">
          <Link
            href={"/"}
            className="text-white hover:text-white no-underline hover:no-underline absolute"
          >
            <img
              src="https://www.pngfind.com/pngs/m/34-347088_ios-appapp-store-iskcon-logo-png-transparent-png.png"
              className="h-14"
            />
          </Link>

          <div className="hidden lg:flex space-x-4">
            <ul className="flex m-0 flex-col lg:flex-row lg:items-center font-medium text-black">
              <li className="hover:bg-gray-200 px-1 rounded pl-5">
                <Link
                  href="/"
                  className="active:no-underline hover:no-underline text-black focus:no-underline hover:text-black active:text-black"
                >
                  <div className={`block py-1 px-2 rounded`}>Home</div>
                </Link>
              </li>
              {headerOptions.map((hopt, i) => (
                <li key={i}>
                  <div className="block py-1 px-2 rounded">
                    <Dropdown title={hopt.title} options={hopt.options} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center lg:space-x-4 space-x-2 mr-4">
          <Link
            href="/contact"
            className="hidden lg:block active:no-underline hover:no-underline text-black focus:no-underline hover:text-black active:text-black font-medium"
          >
            <div className={`block py-2 transition-all duration-150 px-2 rounded hover:bg-gray-300`}>Contact Us</div>
          </Link>
          <Link
            href={"/explore-more"}
            type="button"
            className="text-white hidden lg:block hover:no-underline hover:text-white bg-gradient-to-r hover:to-[#e75e16] hover:from-[#ffaf2f] xl:mr-5 to-[#9eadc6] from-[#2e5697] font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Donate
          </Link>

          <button
            type="button"
            className="lg:hidden inline-flex items-center lg:p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={toggleDrawer}
          >
            <svg
              className="w-7 h-7 text-black"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default LaptopLayout;
