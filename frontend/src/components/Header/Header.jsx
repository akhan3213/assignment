import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import log from "../../assets/log.png";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },

    {
      name: "About",
      link: "/about",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gray-800 lg:px-24 md:px-14 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="flex flex-1">
                <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
                  Software Sathi
                </Link>
                <img
                  src={log}
                  alt="logo"
                  className=" h-10 text-3xl text-orange-500 font-semibold tracking-[0.1rem]"
                />
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-400 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 text-[1.5rem] font-medium
                   tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
