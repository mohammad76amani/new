"use client";
import React, { useState } from "react";

const NavbarEight = () => {
  // States to manage which parent is hovered
  const [openIndex, setOpenIndex] = useState(null);

  // Data for sidebar items and their children
  const sidebarItems = [
    {
      name: "Dashboard",
      children: ["Overview", "Stats", "Activity"],
    },
    {
      name: "Settings",
      children: ["Profile", "Account", "Billing"],
    },
    {
      name: "Help",
      children: ["Support", "Documentation", "Contact Us"],
    },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen " dir="rtl">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-1 transition-all duration-500 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-center text-2xl font-bold text-emerald-600">
          Logo
        </div>

        {/* Nav Items */}
        <nav>
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => setOpenIndex(index as any)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 rounded-md"
                >
                  <span>{item.name}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    height="10"
                    width="10"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#63E6BE"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 
                      0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                </a>

                {/* Child items - Show on hover */}
                {openIndex === index && (
                  <ul className="ml-4 mt-2 space-y-1 bg-gray-700 p-2 rounded-md">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a
                          href="#"
                          className="block px-4 py-1 hover:bg-gray-600 rounded-md"
                        >
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className={`hamburger-icon ${isSidebarOpen ? "open" : "false"}`}
        onClick={toggleMenu}
      >
        <span className="line line-1 "></span>
        <span className="line line-3"></span>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 text-2xl font-bold">Main Content Area</div>
    </div>
  );
};
export default NavbarEight;
