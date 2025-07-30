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
        <ShoppingCart size={22} /> Add to cart
      </button>

      <button
        className="border border-blue-500 py-1 pl-1 pr-3 text-white   rounded-full  flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out"
      >
        <div className="p-2 bg-blue-500 rounded-full text-white">
          <ShoppingCart size={22} />
        </div>
        Add to cart
      </button>

      <button
        className="border border-blue-500 py-1 px-1 rounded-full text-white flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out"
      >
        <div className="p-2 bg-blue-500 rounded-full text-white">
          <ShoppingBasket size={22} />
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
                className={`bg-blue-500 px-5 py-3 rounded-md text-white flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <ShoppingCart size={22} /> Add to cart
              </button>

              <button
                className={`border border-blue-500 py-1 pl-1 pr-3   rounded-full ${
                  theme == "dark" ? "text-white" : "text-black"
                } flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <div className="p-2 bg-blue-500 rounded-full text-white">
                  <ShoppingCart size={22} />
                </div>
                Add to cart
              </button>

              <button
                className={`border border-blue-500 py-1 px-1 rounded-full ${
                  theme == "dark" ? "text-white" : "text-black"
                } flex items-center gap-2 cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`}
              >
                <div className="p-2 bg-blue-500 rounded-full text-white">
                  <ShoppingBasket size={22} />
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
