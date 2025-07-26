import React, { useEffect, useState } from "react";
import { Settings2 } from "lucide-react";
import { Eye, Code as CodeIcon } from "lucide-react";
import CodeLayout from "../../layouts/CodeLayout";
import SocialLoginBtn from "./SocialLoginBtn";

const NormalBtn = () => {
  const [tab, setTab] = useState("preview");
  const [theme, setTheme] = useState("light");

  const buttons = [
    { label: "Button 1", className: "bg-blue-500 text-white cursor-pointer" },
    {
      label: "Button 2",
      className: "border border-blue-500 text-blue-500 cursor-pointer",
    },
    {
      label: "Button 3",
      className:
        "bg-black text-white hover:bg-gray-100 hover:text-black transition cursor-pointer",
    },
    {
      label: "Button 4",
      className: "border border-white  cursor-pointer",
    },
    { label: "Button 5", className: "bg-red-500 text-white cursor-pointer" },
    {
      label: "Button 6",
      className: "border border-red-500  cursor-pointer",
    },
  ];

  const code = `
<button className="bg-blue-500 text-white px-4 py-2 rounded">Button 1</button>

<button className="border border-blue-500 text-blue-500 px-4 py-2 rounded">Button 2</button>

<button className="bg-black text-white px-4 py-2 rounded">Button 3</button>

<button className="border border-black text-black px-4 py-2 rounded">Button 4</button>

<button className="bg-red-500 text-white px-4 py-2 rounded">Button 5</button>

<button className="border border-red-500 text-black px-4 py-2 rounded">Button 6</button>
  `;

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

  return (
    <div className="p-6 space-y-4   shadow px-10">
      <div>
        <h2 className="text-2xl font-bold ">Normal Button</h2>
        <p className="text-gray-600 mt-1 text-sm">
          Buttons like this are used a lot on our websites and are very easy to
          create but you can copy the codes from here to save your time.
        </p>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center ${
            theme === "dark"
              ? "bg-[#1f1f1f] text-white"
              : "bg-gray-200 text-black"
          } p-1 rounded-full w-fit`}
        >
          <button
            onClick={() => setTab("preview")}
            className={`flex  items-center gap-1 px-4 py-1.5 text-sm rounded-full transition ${
              tab === "preview"
                ? "dark:bg-black bg-gray-400 text-black dark:text-white cursor-pointer"
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
                ? "bg-black text-white cursor-pointer"
                : "cursor-pointer"
            }`}
          >
            <CodeIcon className="w-4 h-4" />
            Code
          </button>
        </div>
        <button className="p-2 rounded border">
          <Settings2 className="w-4 h-4" />
        </button>
      </div>

      {/* Tab Content */}
      <div className="border border-gray-600 rounded-lg px-4 py-8">
        {tab === "preview" ? (
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded font-medium ${btn.className}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        ) : (
          <CodeLayout code={code} />
        )}
      </div>

      <SocialLoginBtn />
    </div>
  );
};

export default NormalBtn;
