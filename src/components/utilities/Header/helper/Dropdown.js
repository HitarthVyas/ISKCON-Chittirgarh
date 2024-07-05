"use client"
import Link from "next/link";
import { useState } from "react";

const Dropdown = ({ title, options }) => {
  // State to control the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Timer to delay closing the dropdown
  let closeTimer;

  // Function to clear the close timer
  const clearCloseTimer = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };

  // Function to handle mouse enter events
  const handleMouseEnter = () => {
    setIsOpen(true);
    clearCloseTimer();
  };

  // Function to handle mouse leave events
  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Adjust the delay time as needed
  };

  return (
    <div className="relative">
      {/* Div to toggle the dropdown */}
      <div
        className="inline-flex items-center cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>{title}</span>
        <svg
          className={`w-2.5 h-2.5 ml-1 transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 6"
        >
          <path
            fill="currentColor"
            d="M0 0l5 4 5-4H0z"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute z-10 w-40 mt-2 py-2 bg-gray-700 rounded-lg shadow-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="text-gray-200 p-0 text-center">
            {options.map((op, index) => (
              <li key={index}>
                <Link
                  href={op.link}
                  className="block p-2 hover:bg-gray-800 text-white hover:text-white hover:no-underline no-underline"
                  onMouseEnter={clearCloseTimer}
                  onMouseLeave={handleMouseLeave}
                >
                  {op.subtitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
