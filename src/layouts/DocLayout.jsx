import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet, useNavigate } from "react-router";
import { Cross, CrossIcon } from "lucide-react";

const DocLayout = () => {
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

  const navigate = useNavigate();

  const handleIntro = () => {
    navigate("/docs");
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
            className={`navbar sticky top-0 border-b-1 z-10 border-[#ffffff44] ${
              theme == "dark" ? "bg-[#010313]" : "bg-white"
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
          <div className="flex">
            <div className="w-full md:w-full lg:w-4/5">
              <Outlet />
            </div>
            <div
              className={`w-1/5 border-l-1 sticky top-30 p-5 ${
                theme == "dark" ? "border-gray-600" : "border-gray-200"
              } hidden md:hidden lg:block`}
            >
              <h1>Under Construction 🏗️</h1>
            </div>
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
            className={`menu p-4 w-80 md:pt-5 min-h-full overflow-y-auto ${
              theme == "dark" ? "bg-[#010313]" : "bg-white"
            }  border-r-1  ${
              theme == "dark" ? "border-[#ffffff38]" : "border-gray-200"
            }`}
          >
            <li>
              <details open>
                <summary className="font-bold">Getting Started</summary>
                <ul className="border-l-1 border-[#ffffff44] ">
                  <li>
                    <NavLink
                      onClick={handleIntro}
                      className={`flex justify-between items-center`}
                    >
                      <span>Introduction</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/docs/installation"}
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? ` p-1 px-3 mt-2 rounded-md flex justify-between ${
                              theme == "dark"
                                ? "bg-[#1E293B]"
                                : "bg-black text-white"
                            } items-center`
                          : " flex justify-between items-center mt-2"
                      }
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
                <ul className="border-l-1  border-[#ffffff44]">
                  {[
                    "Loaders",
                    "Theme Controller",
                    "Pagination",
                    "Authentication",
                  ].map((item) => (
                    <li key={item}>
                      <NavLink
                        to={"/"}
                        className={({ isPending, isActive }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? ` p-1 px-3  rounded-md flex justify-between ${
                                theme == "dark"
                                  ? "bg-[#1E293B]"
                                  : "bg-black text-white"
                              } items-center`
                            : " flex justify-between items-center "
                        }
                      >
                        <span>{item}</span>
                        {/* <span className="badge badge-xs badge-outline text-blue-500 border-blue-500">
                    Tool
                  </span> */}
                      </NavLink>
                    </li>
                  ))}
                  <summary
                    className={`font-bold mt-2 ${
                      theme == "dark" ? "text-gray-400" : ""
                    }`}
                  >
                    Data input
                  </summary>
                  <ul className="border-l-1 border-[#ffffff44]">
                    {["Input", "Text Area", "Select", "CheckBox"].map(
                      (item) => (
                        <li>
                          <NavLink
                            to={`/docs/components/${item.split(" ").join("-")}`}
                            key={item}
                            className={({ isPending, isActive }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? ` p-1 px-3  rounded-md flex justify-between ${
                                    theme == "dark"
                                      ? "bg-[#1E293B]"
                                      : "bg-black text-white"
                                  } items-center`
                                : " flex justify-between items-center"
                            }
                          >
                            {item}
                          </NavLink>
                        </li>
                      )
                    )}
                  </ul>
                  {["Hero", "Carousel", "Divider"].map((item) => (
                    <li key={item}>
                      <NavLink
                        to={"/"}
                        key={item}
                        className={({ isPending, isActive }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? ` p-1 px-3  rounded-md flex justify-between ${
                                theme == "dark"
                                  ? "bg-[#1E293B]"
                                  : "bg-black text-white"
                              } items-center`
                            : " flex justify-between items-center "
                        }
                      >
                        <span>{item}</span>
                        <span className="badge badge-xs badge-success">
                          New
                        </span>
                      </NavLink>
                    </li>
                  ))}

                  <summary
                    className={`font-bold mt-2 ${
                      theme == "dark" ? "text-gray-400" : ""
                    } mb-2`}
                  >
                    Button
                  </summary>
                  <ul className="border-l-1 border-[#ffffff44]">
                    <li>
                      <NavLink
                        to={"/docs/components/button"}
                        className={({ isPending, isActive }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? ` p-1 px-3  rounded-md flex justify-between ${
                                theme == "dark"
                                  ? "bg-[#1E293B]"
                                  : "bg-black text-white"
                              } items-center`
                            : " flex justify-between items-center "
                        }
                      >
                        Button
                      </NavLink>
                    </li>

                    <li>
                      <a>Animated Button</a>
                    </li>
                    <li>
                      <a>Dropdown</a>
                    </li>

                    <li>
                      <a className="flex justify-between items-center">
                        <span>Drawer</span>
                        <span className="badge badge-xs badge-success">
                          New
                        </span>
                      </a>
                    </li>
                  </ul>
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
