"use client";
import React, { useState } from "react";
import Link from "next/link";
const navbarLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];
const navbarLinks2 = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];
const NavbarFive = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">LOGO</div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        <ul className="hidden md:flex space-x-6 text-white">
          {navbarLinks.map((link) => (
            <li key={link.label}>
              <Link href="#" className="text-white hover:text-gray-400">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-yellow-300 rounded-xl p-4">fef</button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6">
          <button
            className="text-white text-4xl absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          {navbarLinks2.map((link) => (
            <Link
              key={link.label}
              href="#"
              className="text-white text-2xl hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarFive;
