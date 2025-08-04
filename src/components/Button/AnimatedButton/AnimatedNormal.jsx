import React, { useState } from "react";
import CodeLayout from "../../../layouts/CodeLayout";
import useTheme from "../../../hooks/useTheme";
import { CodeIcon, Eye } from "lucide-react";

const AnimatedNormal = () => {
  const theme = useTheme();
  const [tab, setTab] = useState("preview");

  const code = `
            <button className="bg-green-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition transform active:scale-95 hover:shadow-lg">
              Bounce Click
            </button>
            
            <button className="relative cursor-pointer px-6 py-3 text-white font-semibold rounded-md border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-black transition duration-300">
                Slide Fill
              </span>
            </button>

            <button className="relative cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 shadow-2xl hover:shadow-blue-300">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-300  blur-sm"></span>
              Hover Glow
            </button>`;

  return (
    <div className="p-4 mt-10 space-y-4 rounded-xl  ">
      <div>
        <h2 className="text-2xl font-bold ">Animated Normal</h2>
        <p className="text-gray-600 mt-1 text-sm">
          Button that adds selected items to the shopping cart, streamlining the
          purchasing process.
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
            <button className="bg-green-500 cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition transform active:scale-95 hover:shadow-lg">
              Bounce Click
            </button>
            <button className="relative cursor-pointer px-6 py-3 text-white font-semibold rounded-md border border-white group overflow-hidden">
              <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative z-10 group-hover:text-black transition duration-300">
                Slide Fill
              </span>
            </button>
            <button className="relative cursor-pointer px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 shadow-2xl hover:shadow-blue-300">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-300  blur-sm"></span>
              Hover Glow
            </button>
          </div>
        ) : (
          <CodeLayout code={code} />
        )}
      </div>
    </div>
  );
};

export default AnimatedNormal;
