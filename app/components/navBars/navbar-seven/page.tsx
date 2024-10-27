"use client";
import React, { useState } from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/outline";
const navLinks = [
  { name: "Home", href: "#", icon: HomeIcon, id: 1 },
  { name: "Profile", href: "#", icon: UserIcon, id: 2 },
  { name: "Settings", href: "#", icon: CogIcon, id: 3 },

];
const NavbarSeven = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Logo */}
        <div className="text-center text-3xl text-red-600 font-bold">Logo</div>

        {/* Nav Items */}
        <nav>
          <ul className="mt-10 space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <HomeIcon className="h-6 w-6 mr-2" /> Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <UserIcon className="h-6 w-6 mr-2" /> Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <CogIcon className="h-6 w-6 mr-2" /> Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 mr-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-200 p-4 flex items-center justify-center md:hidden">
          <div className=" font-bold flex flex-row items-center">
            <h2 className="text-2xl text-red-600">Logo</h2>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-black hover:text-gray-600 mx-4 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="p-10 text-2xl font-bold">Main Content Area</div>
      </div>
    </div>
  );
};
export default NavbarSeven;
