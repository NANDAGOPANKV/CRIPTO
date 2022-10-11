import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToogle } from "./ThemeToogle";
// hamburger menu
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [hamburgerMenuToogle, setHamburgerMenuToogle] = useState(false);

  // show side bar
  const handleNav = () => {
    setHamburgerMenuToogle(!hamburgerMenuToogle);
  };

  // returnig
  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold  ">
      <Link to="/">
        <h1 className="text-2xl ">FINDMYCOIN</h1>
      </Link>
      <div className=" hidden md:block ">
        <ThemeToogle />
      </div>
      <div className="hidden md:block ">
        <Link className="p-4 hover:text-accent " to="/signin">
          SignIn
        </Link>
        <Link
          className="bg-button text-btnText px-5 py-2 rounded-3xl shadow-lg hover:shadow-2xl  "
          to="/signup"
        >
          SignUp
        </Link>
      </div>
      {/* Menu btn HamburgerMenu */}
      <div
        className=" block md:hidden  cursor-pointer z-10  "
        onClick={handleNav}
      >
        {hamburgerMenuToogle ? (
          <AiOutlineClose size={35} />
        ) : (
          <AiOutlineMenu size={35} />
        )}
      </div>
      {/* mobileMenu */}

      <div
        className={
          hamburgerMenuToogle
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10  "
            : " fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300  "
        }
      >
        <ul className=" w-full p-4">
          <li className=" border-b py-6    ">
            <Link to="/">Home</Link>
          </li>
          <li className=" border-b py-6    ">
            <Link to="/account">Account</Link>
          </li>
          <li className=" py-6    ">
            <ThemeToogle />
          </li>
        </ul>
        <div className=" flex flex-col w-full p-4   ">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-primary border border-secondary rounded-2xl shadow-2xl   ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-3 p-2 bg-button rounded-2xl text-btnText shadow-xl  ">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
};
