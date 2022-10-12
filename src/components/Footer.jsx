import React from "react";
// icons
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import { ThemeToogle } from "./ThemeToogle";

export const Footer = () => {
  return (
    <div className="rounded-div text-primary mt-8 pt-8 mb-3">
      <div className="grid md:grid-cols-2">
        {/* Support to leagal */}
        <div className=" flex justify-evenly uppercase w-full md:max-w-[300px]  ">
          <div>
            <h2  className="font-bold cursor-default"  >Support</h2>
            <ul>
              <li className="text-sm py-2  " >Help Center</li>
              <li className="text-sm py-2 cursor-default " >Contact Us</li>
              <li className="text-sm py-2 cursor-default " >API Staus</li>
              <li className="text-sm py-2 cursor-default " >API Documentaion</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold cursor-default"  >Info</h2>
            <ul>
              <li className="text-sm py-2 cursor-default " >About Us</li>
              <li className="text-sm py-2 cursor-default " >Careers</li>
              <li className="text-sm py-2 cursor-default " >Invest</li>
              <li className="text-sm py-2 cursor-default " >Legal</li>
            </ul>
          </div>
        </div>
        {/* Support to leagal */}
        {/* theme Toogle to Icons */}
        <div className="text-right  ">
          <div className=" flex justify-end w-full ">
            <div className=" w-full md:w-[300px] py-4 relative  ">
              <div className="flex justify-center  md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem] sm:items-center  ">
                <ThemeToogle />
              </div>
              <p className="text-center md:text-end">Sign up for letest crypto news</p>
              <div className="py-3">
                <form>
                  <input className=" bg-primary border border-input p-2 mr-2 w-full rounded-2xl shadow-2xl  md:w-auto  " type="email" placeholder=" Enter your email" />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2  ">SignUp</button>
                </form>
              </div>
              <div className="flex items-center justify-between py-5 text-accent ">
                <AiOutlineInstagram />
                <FaFacebookF />
                <FaGithub />
                <FaTiktok />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
        {/* theme Toogle to Icons */}
      </div>
      <p className="text-center py-6 ">Powered by Coin Gecko</p>
    </div>
  );
};
