"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavbarTwo = () => {
  const [navTwo, setNavTwo] = useState(false);

  const handleNavTwo = () => {
    setNavTwo(!navTwo);
  };

  const navItems2 = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
    // { id: 6, text: "Login" },
  ];
  return (
    <nav className="bg-yellow-400 p-4 mx-auto">
      <div className="bg-transparent flex justify-between items-center h-14 max-w-[1240px] mx-auto px-4 text-white">
        <div className="text-white text-lg font-bold hover:text-slate-500">
          Digital
        </div>

        {/* Desktop Navigation */}

        <ul className="hidden md:flex">
          {navItems2.map((item) => (
            <li key={item.id} className="text-white hover:text-slate-500 mx-3">
              <Link href="#">{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNavTwo} className="block md:hidden">
          {navTwo ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            navTwo
              ? "fixed md:hidden right-0 top-0 w-[38%] h-full border-r border-r-gray-500 bg-yellow-400 ease-in-out duration-500"
              : "ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <h1 className="w-full text-2xl m-4 font-bold text-white">Digital</h1>

          {/* Mobile Navigation Items */}
          {navItems2.map((item) => (
            <li
              key={item.id}
              className="p-3 border-b items-center rounded-md hover:bg-white hover:text-black duration-300  cursor-pointer border-gray-400"
            >
              <Link href="#"> {item.text}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center">
          <div className="">
            <input
              type="text"
              className="bg-slate-50 text-gray-600 rounded-md pl-4 pr-10 py-2 focus:outline-none hidden md:block"
              placeholder="Search..."
            />
          </div>
          {/* <div className=" mx-3 overflow-hidden">
            <button className=" hover:text-gray-600 hover:bg-white p-2 rounded-lg">
              Log In
            </button>
          </div>
          <div className="overflow-hidden">
            <button className=" hover:text-gray-600 hover:bg-white p-2 rounded-lg">
              Sigh Up
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarTwo;
