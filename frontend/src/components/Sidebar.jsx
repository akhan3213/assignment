import React, { useState } from "react";
import control from "../assets/control.png";
import logo from "../assets/logo.png";
import Dashboard from "./Dashboard";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      src: "Chart_fill",
      action: () => setShowDashboard(!showDashboard),
    },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-60" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-gray-700 relative`}
      >
        <img
          src={control}
          alt="control"
          className={`absolute cursor-pointer
        rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${
          !open && "rotate-180"
        }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            } `}
          >
            Designer
          </h1>
        </div>
        <ul>
          {Menus.map((menu, index) => (
            <li
              key={index}
              onClick={menu.action}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md
          ${menu.gap ? "mt-9" : "mt-2"} `}
            >
              <img src={`./src/assets/${menu.src}.png`} alt="menu" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {showDashboard && <Dashboard />}
    </div>
  );
};

export default Sidebar;
