import {
  ShoppingBagIcon,
  ShoppingBasket,
  ShoppingCart,
  Eye,
  CodeIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import CodeLayout from "../../../layouts/CodeLayout";

const CartBtn = () => {
  const [tab, setTab] = useState("preview");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const updateTheme = () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current);
    };

    updateTheme(); // Initial
    window.addEventListener("themeChange", updateTheme);

    return () => {
      window.removeEventListener("themeChange", updateTheme);
    };
  }, []);

  const code = ` 
       <button
                className="bg-blue-500 px-5 py-3 rounded-md text-white flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out"
              >
                <svg
                  width="30px"
                  height="27px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="#fff"
                  fill="none"
                >
                  <polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79" />
                  <path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22" />
                  <circle cx="24.95" cy="51.61" r="3.53" />
                  <circle cx="46.04" cy="51.61" r="3.53" />
                </svg>
                Add to cart
              </button>

              <button
                className="border border-blue-500 py-1 pl-1 pr-3   rounded-full  flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out"
              >
                <div className="p-2 bg-blue-500 rounded-full text-white">
                  <svg
                    width="28px"
                    height="25px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3"
                    stroke="#fff"
                    fill="none"
                  >
                    <polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79" />
                    <path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22" />
                    <circle cx="24.95" cy="51.61" r="3.53" />
                    <circle cx="46.04" cy="51.61" r="3.53" />
                  </svg>
                </div>
                Add to cart
              </button>

              <button
                className="border border-blue-500 py-1 px-1 rounded-full flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out"
              >
                <div className="p-2 bg-blue-500 rounded-full text-white">
                  <svg
                    width="28px"
                    height="25px"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.91485 21.5689C9.96933 21.896 10.2785 22.117 10.6053 22.0625L11.3944 21.9309C11.7213 21.8763 11.9421 21.567 11.8876 21.2399L11.1398 16.7496C11.0853 16.4225 10.7762 16.2016 10.4493 16.2561L9.6602 16.3877C9.33334 16.4422 9.11252 16.7516 9.167 17.0787L9.91485 21.5689Z"
                      fill="#fff"
                    />
                    <path
                      d="M16.1121 21.2399C16.0577 21.567 16.2785 21.8763 16.6053 21.9309L17.3944 22.0625C17.7213 22.117 18.0304 21.896 18.0849 21.5689L18.8328 17.078C18.8873 16.7509 18.6665 16.4415 18.3396 16.387L17.5505 16.2554C17.2237 16.2009 16.9145 16.4219 16.8601 16.749L16.1121 21.2399Z"
                      fill="#fff"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M21.2371 8.98725H6.52918L12.1736 3.69163C12.4557 3.42702 12.4699 2.9837 12.2055 2.70145L11.7952 2.2634C11.5308 1.98115 11.0878 1.96685 10.8057 2.23146L3.82708 8.77885C3.76176 8.84014 3.71079 8.91101 3.67433 8.98725H2C1.44772 8.98725 1 9.43531 1 9.988V13.991C1 14.5437 1.44772 14.9918 2 14.9918H2.42519L4.56603 25.0493C4.68403 25.6037 5.1733 26 5.73969 26H22.2586C22.825 26 23.3143 25.6037 23.4323 25.0493L25.5731 14.9918H26C26.5523 14.9918 27 14.5437 27 13.991V9.988C27 9.43531 26.5523 8.98725 26 8.98725H24.2757C24.2341 8.90663 24.176 8.83282 24.102 8.77108L16.1775 2.16238C15.8805 1.9147 15.4391 1.95486 15.1916 2.25208L14.8075 2.71336C14.56 3.01057 14.6001 3.4523 14.8971 3.69998L21.2371 8.98725ZM3.6 10.9888C3.26863 10.9888 3 11.2576 3 11.5892V12.3898C3 12.7214 3.26863 12.9903 3.6 12.9903H24.4C24.7314 12.9903 25 12.7214 25 12.3898V11.5892C25 11.2576 24.7314 10.9888 24.4 10.9888H3.6ZM4.65025 15.8382C4.55747 15.4024 4.88958 14.9918 5.33489 14.9918H22.6634C23.1087 14.9918 23.4408 15.4024 23.3481 15.8382L21.7291 23.4439C21.6603 23.7673 21.3749 23.9985 21.0445 23.9985H6.95382C6.62342 23.9985 6.33802 23.7673 6.26918 23.4439L4.65025 15.8382Z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
    `;

  return (
    <>
      <div className="p-4 mt-10 space-y-4 rounded-xl  ">
        <div>
          <h2 className="text-2xl font-bold ">Add to cart</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Button that adds selected items to the shopping cart, streamlining
            the purchasing process.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center ${
              theme == "dark" ? "bg-[#1E293B]" : "bg-gray-200"
            } p-1 rounded-full w-fit`}
          >
            <button
              onClick={() => setTab("preview")}
              className={`flex  items-center gap-1 px-4 py-1.5 text-sm rounded-full transition ${
                tab === "preview"
                  ? "dark:bg-[#020617] bg-gray-400 text-black dark:text-white cursor-pointer"
                  : "cursor-pointer "
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setTab("code")}
              className={`flex items-center gap-1 px-4 py-1.5 text-sm rounded-full transition ${
                tab === "code"
                  ? "bg-[#020617] text-white cursor-pointer"
                  : "cursor-pointer"
              }`}
            >
              <CodeIcon className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
        {/* Tab Content */}
        <div className="border border-gray-600 p-8 rounded-xl">
          {tab === "preview" ? (
            <div className="flex flex-col md:flex-col lg:flex-row gap-5 justify-center items-center">
              <button
                className={`bg-blue-500 px-4 py-2 rounded-md text-white flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <svg
                  width="30px"
                  height="27px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="#fff"
                  fill="none"
                >
                  <polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79" />
                  <path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22" />
                  <circle cx="24.95" cy="51.61" r="3.53" />
                  <circle cx="46.04" cy="51.61" r="3.53" />
                </svg>
                Add to cart
              </button>

              <button
                className={`border border-blue-500 py-1 pl-1 pr-3   rounded-full ${
                  theme == "dark" ? "text-white" : "text-black"
                } flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <div className="p-1 bg-blue-500 rounded-full text-white">
                  <svg
                    width="28px"
                    height="25px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3"
                    stroke="#fff"
                    fill="none"
                  >
                    <polyline points="4.62 9.96 15.34 9.96 21.71 37.85 49.69 37.85 56.17 16.35 16.67 15.79" />
                    <path d="M51.73,44.35H21.67a3.21,3.21,0,0,1-3.28-3.28c0-3.22,3.32-3.22,3.32-3.22" />
                    <circle cx="24.95" cy="51.61" r="3.53" />
                    <circle cx="46.04" cy="51.61" r="3.53" />
                  </svg>
                </div>
                Add to cart
              </button>

              <button
                className={`border border-blue-500 py-1 px-1 rounded-full ${
                  theme == "dark" ? "text-white" : "text-black"
                } flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <div className="p-2 bg-blue-500 rounded-full text-white">
                  <svg
                    width="28px"
                    height="25px"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.91485 21.5689C9.96933 21.896 10.2785 22.117 10.6053 22.0625L11.3944 21.9309C11.7213 21.8763 11.9421 21.567 11.8876 21.2399L11.1398 16.7496C11.0853 16.4225 10.7762 16.2016 10.4493 16.2561L9.6602 16.3877C9.33334 16.4422 9.11252 16.7516 9.167 17.0787L9.91485 21.5689Z"
                      fill="#fff"
                    />
                    <path
                      d="M16.1121 21.2399C16.0577 21.567 16.2785 21.8763 16.6053 21.9309L17.3944 22.0625C17.7213 22.117 18.0304 21.896 18.0849 21.5689L18.8328 17.078C18.8873 16.7509 18.6665 16.4415 18.3396 16.387L17.5505 16.2554C17.2237 16.2009 16.9145 16.4219 16.8601 16.749L16.1121 21.2399Z"
                      fill="#fff"
                    />
                    <path
                      clip-rule="evenodd"
                      d="M21.2371 8.98725H6.52918L12.1736 3.69163C12.4557 3.42702 12.4699 2.9837 12.2055 2.70145L11.7952 2.2634C11.5308 1.98115 11.0878 1.96685 10.8057 2.23146L3.82708 8.77885C3.76176 8.84014 3.71079 8.91101 3.67433 8.98725H2C1.44772 8.98725 1 9.43531 1 9.988V13.991C1 14.5437 1.44772 14.9918 2 14.9918H2.42519L4.56603 25.0493C4.68403 25.6037 5.1733 26 5.73969 26H22.2586C22.825 26 23.3143 25.6037 23.4323 25.0493L25.5731 14.9918H26C26.5523 14.9918 27 14.5437 27 13.991V9.988C27 9.43531 26.5523 8.98725 26 8.98725H24.2757C24.2341 8.90663 24.176 8.83282 24.102 8.77108L16.1775 2.16238C15.8805 1.9147 15.4391 1.95486 15.1916 2.25208L14.8075 2.71336C14.56 3.01057 14.6001 3.4523 14.8971 3.69998L21.2371 8.98725ZM3.6 10.9888C3.26863 10.9888 3 11.2576 3 11.5892V12.3898C3 12.7214 3.26863 12.9903 3.6 12.9903H24.4C24.7314 12.9903 25 12.7214 25 12.3898V11.5892C25 11.2576 24.7314 10.9888 24.4 10.9888H3.6ZM4.65025 15.8382C4.55747 15.4024 4.88958 14.9918 5.33489 14.9918H22.6634C23.1087 14.9918 23.4408 15.4024 23.3481 15.8382L21.7291 23.4439C21.6603 23.7673 21.3749 23.9985 21.0445 23.9985H6.95382C6.62342 23.9985 6.33802 23.7673 6.26918 23.4439L4.65025 15.8382Z"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            <CodeLayout code={code} />
          )}
        </div>
      </div>
    </>
  );
};

export default CartBtn;
