"use client";
import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { title: "Home", url: "#" },
  { title: "About", url: "#" },
  { title: "Services", url: "#" },
  { title: "Contact", url: "#" },
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> },
];
interface NavbarProps {
  styles?: React.CSSProperties;
}
const bgColor = "bg-gray-800";
const modalColor = "bg-gray-900";

const NavbarThree = (styles:NavbarProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };
  return (
    <>
      {!isMobile ? (
        // Laptop Navbar Code Here
        <nav className={` ${bgColor}`}>
          <div className="flex justify-between mx-auto items-center py-4 px-24" style={styles.styles}>
            <div className="text-white font-bold text-xl">Logo</div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li key={index} className="text-white text-sm">
                  <Link href="#"> {link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex text-white gap-6 items-center cursor-pointer">
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav className={` ${bgColor} py-4 px-4`}>
          <div className="mx-auto flex justify-between items-center ">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
              {iconList.map((item, index) => (
                <div
                  key={index}
                  onClick={
                    index === iconList.length - 1
                      ? handleBarsIconClick
                      : undefined
                  }
                >
                  {item.icon}
                </div>
              ))}
              <FaBars
                onClick={handleBarsIconClick}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className={`absolute inset-0 ${modalColor}`} />
              <FaTimes
                className="absolute top-6 right-4 text-white cursor-pointer"
                onClick={toggleModal}
                style={{ fontSize: "16px" }}
              />
              <div className="relative bg-gray-900 w-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                  {navLinks.map((link, index) => (
                    <span
                      key={index}
                      className="text-white font-light text-2xl cursor-pointer"
                    >
                      <Link href="#"> {link.title}</Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default NavbarThree;
