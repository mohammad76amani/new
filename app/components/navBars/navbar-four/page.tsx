import Link from "next/link";
import React from "react";
const navMenu = [
    {
      label: "First Link",
      href: "#",
    },
    {
      label: "Second Link",
      href: "#",
    },
    {
      label: "Third Link",
      href: "#",
    },
    {
      label: "Fourth Link",
      href: "#",
    },
]

const NavbarFour = () => {
  return (
    <div className=" flex sm:flex-row flex-col p-5 items-center justify-between bg-gray-600">
      <Link href='#' className="flex font-bold items-center text-white">
        Logo
      </Link>
      <div className="flex flex-wrap items-center text-base justify-center">
        {navMenu.map((item, index) => (
          <Link key={index} href={item.href} className="mx-5 border-2 my-2 border-cyan-700 p-2 rounded-2xl hover:text-gray-900 font-bold hover:bg-yellow-400 text-blue-400">
            {item.label}
          </Link>
        ))}
      </div>
      <button className=" text-white items-center rounded-xl my-2 bg-yellow-400 border-0 py-2 px-3">
        Click Me
      </button>
    </div>
  );
};

export default NavbarFour;
