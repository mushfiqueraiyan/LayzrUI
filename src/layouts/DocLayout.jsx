import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";
import { Cross, CrossIcon } from "lucide-react";

const DocLayout = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <div className="hidden md:hidden lg:block">
        <Navbar />
      </div>
      <div className="drawer lg:drawer-open ">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          onClick={handleToggle}
        />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="navbar border-b-1 border-[#ffffff44] w-full lg:hidden">
            <div className="flex-none ">
              {toggle ? (
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              ) : (
                <label
                  htmlFor="my-drawer-2"
                  aria-label="open sidebar"
                  className="cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              )}
            </div>
            <div className="mx-2 flex-1 px-2 lg:hidden">
              <h1 className="font-bold text-xl">Goat UI</h1>
            </div>
          </div>
          {/* Page content here */}
          <div className="">
            <Outlet />
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side mt-17 md:mt-17 lg:mt-0">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 md:pt-5 min-h-full  border-r-1  border-[#ffffff38]">
            <li>
              <details open>
                <summary className="font-bold">Getting Started</summary>
                <ul className="border-l-1 border-[#ffffff44]">
                  <li>
                    <a className="flex justify-between items-center">
                      <span>Introduction</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                    </a>
                  </li>
                  <li>
                    <NavLink
                      to={"/docs/installation"}
                      className="flex justify-between items-center"
                    >
                      <span>Installation</span>
                      {/* <span className="badge badge-xs badge-warning text-white">
                  Updated
                </span> */}
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>

            {/* Components */}
            <li>
              <details open>
                <summary className="font-bold">Components</summary>
                <ul className="border-l-1 border-[#ffffff44]">
                  {[
                    "Loaders",
                    "Patterns Collection",
                    "Color Palette",
                    "Gradient",
                  ].map((item) => (
                    <li key={item}>
                      <a className="flex justify-between items-center">
                        <span>{item}</span>
                        {/* <span className="badge badge-xs badge-outline text-blue-500 border-blue-500">
                    Tool
                  </span> */}
                      </a>
                    </li>
                  ))}
                  {[
                    "Marquee",
                    "Code Profile",
                    "Portfolio",
                    "Orbiting Circles",
                    "Network",
                  ].map((item) => (
                    <li>
                      <NavLink
                        to={`/docs/components/${item.trim(" ")}`}
                        key={item}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                  {["Video Text", "Image Swiper", "Divider"].map((item) => (
                    <li key={item}>
                      <a className="flex justify-between items-center">
                        <span>{item}</span>
                        <span className="badge badge-xs badge-success">
                          New
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {/* Button */}
            <li>
              <details open>
                <summary className="font-bold">Button</summary>
                <ul className="border-l-1 border-[#ffffff44]">
                  <li>
                    <NavLink to={"/docs/components/button"}>Button</NavLink>
                  </li>
                  <li>
                    <a>Modern Button</a>
                  </li>
                  <li>
                    <a>Retro Button</a>
                  </li>
                  <li>
                    <a>Dropdown</a>
                  </li>
                  <li>
                    <a className="flex justify-between items-center">
                      <span>Shimmer Button</span>
                      <span className="badge badge-xs badge-success">New</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex justify-between items-center">
                      <span>Drawer</span>
                      <span className="badge badge-xs badge-success">New</span>
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocLayout;
