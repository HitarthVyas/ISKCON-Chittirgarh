"use client";

import Link from "next/link";
import { Accordion } from "rsuite";
import { headerOptions } from "./headerData";
import { useState } from "react";

const TabLayout = ({ closeDrawer }) => {
  const [openPanel, setOpenPanel] = useState(null);

  const handleAccordionToggle = (eventKey) => {
    setOpenPanel(openPanel === eventKey ? null : eventKey);
  };

  return (
    <div
      className="bg-[#e5b776] fixed top-0 right-0 w-64 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll"
    >
      <ul className="flex flex-col p-4">
        <button type="button" className="self-end p-2" onClick={closeDrawer}>
          <svg
            className="w-7 h-7 text-white"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <Link
          href={"/explore-more"}
          className="w-full flex justify-center pt-5 hover:no-underline no-underline hover:text-white text-white"
        >
          <button
            type="button"
            className="text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Donate
          </button>
        </Link>

        <div className="pt-10">
          <Accordion>
            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/"
                className={`hover:text-black text-black hover:no-underline no-underline ${""}`}
              >
                Home
              </Link>
            </div>
            {headerOptions.map((hopt, i) => (
              <Accordion.Panel
                key={i}
                header={hopt.title}
                eventKey={i} // Use a unique event key for each panel
                expanded={openPanel === i} // Set expanded prop based on controlled state
                onSelect={() => handleAccordionToggle(i)}
              >
                {hopt.options.map((option, ind) => (
                  <div key={ind} className="p-[2px] font-bold text-[14px]">
                    <Link
                      href={option.link}
                      className={`hover:text-black text-black hover:no-underline no-underline`}
                    >
                      {option.subtitle}
                    </Link>
                  </div>
                ))}
              </Accordion.Panel>
            ))}
            <div className="p-[10px] font-bold text-[16px]">
              <Link
                href="/contact"
                className={`hover:text-black text-black hover:no-underline no-underline`}
              >
                Contact Us
              </Link>
            </div>
            <hr className="m-0 mx-[20px]" />
          </Accordion>
        </div>
      </ul>
    </div>
  );
};

export default TabLayout;
