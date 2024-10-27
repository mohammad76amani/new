import React from "react";
import NavbarOne from "../navbar-one/page";
import NavabarTwo from "../navbar-two/page";
import NavbarThree from "../navbar-three/page";
import NavbarFour from "../navbar-four/page";
import NavbarFive from "../navbar-five/page";
import NavbarSix from "../navbar-six/page";
import NavbarSeven from "../navbar-seven/page";
import NavbarEight from "../navbar-eight/page";

const Navbar = () => {
  return (
    <>
      <div className=" ">
        <NavbarOne />
      </div>
      <div className="my-14">
        <NavabarTwo />
      </div>
      <div className=" my-14">
        <NavbarThree />
      </div>
      <div className=" my-14">
        <NavbarFour />
      </div>
      <div className="my-14">
        <NavbarFive />
      </div>
      <div className=" my-14">
        <NavbarSix />
      </div>
      <div className=" my-14">
        <NavbarSeven />
      </div>
      <div className=" my-14">
        <NavbarEight />
      </div>
    </>
  );
};

export default Navbar;
