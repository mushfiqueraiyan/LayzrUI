import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const updateTheme = () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current);
    };

    updateTheme(); // Initial
    window.addEventListener("themeChange", updateTheme); // Listen to changes

    return () => {
      window.removeEventListener("themeChange", updateTheme); // Clean up
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="hidden md:hidden lg:block lg:sticky lg:top-0 z-10">
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
          <div
            className={`navbar sticky top-0 border-b-1 border-[#ffffff44] ${
              theme == "dark" ? "bg-black" : "bg-white"
            } w-full lg:hidden`}
          >
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
              <h1 className="font-bold text-xl">Layzr UI</h1>
            </div>
          </div>
          {/* Page content here */}
          <div className="">
            <Outlet />
          </div>
          {/* Page content here */}
        </div>
        <div className={`drawer-side mt-16  md:mt-17 lg:mt-0`}>
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className={`menu p-4 w-80 md:pt-5 min-h-full space-y-3 ${
              theme == "dark" ? "bg-black" : "bg-white"
            }  border-r-1  ${
              theme == "dark" ? "border-[#ffffff38]" : "border-gray-200"
            }`}
          >
            <NavLink
              to={"/admin"}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#1a1919f5] p-2 rounded-2xl"
                  : "p-2"
              }
            >
              Add New component
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#1a1919f5] p-2 rounded-2xl"
                  : "p-2"
              }
            >
              Manage Users
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isPending, isActive }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-[#1a1919f5] p-2 rounded-2xl"
                  : "p-2"
              }
            >
              Analysis
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
