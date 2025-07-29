import React, { useEffect, useState } from "react";
import {
  Eye,
  Code as CodeIcon,
  Facebook,
  GithubIcon,
  Twitter,
  AppleIcon,
  Linkedin,
  Mail,
  Slack,
  X,
} from "lucide-react";

import CodeLayout from "../../../layouts/CodeLayout";

const SocialLoginBtn = () => {
  const [tab, setTab] = useState("preview");
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

  const code = `
import React from 'react';

const SocialLoginBtn = () => {

  return (
    <div className="space-y-2">
      {/* Email */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 
          0 012.25 17.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25M21.75 6.75v.243a2.25 2.25 0 01-1.07 
          1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Login with Email
      </button>

      {/* Google */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/color/48/google-logo.png" className="w-4 h-4" />
        Continue with Google
      </button>

      {/* GitHub */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-glyphs/30/github.png" className="w-4 h-4 invert" />
        Continue with GitHub
      </button>

      {/* Facebook */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-filled/50/facebook-new.png" className="w-4 h-4 invert" />
        Login with Facebook
      </button>

      {/* X */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-glyphs/30/twitterx.png" className="w-4 h-4 invert" />
        Login with X
      </button>

      {/* Apple */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-filled/50/mac-os.png" className="w-4 h-4 invert" />
        Login with Apple
      </button>

      {/* Microsoft */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-filled/50/microsoft.png" className="w-4 h-4" />
        Login with Microsoft
      </button>

      {/* Slack */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-filled/50/slack-new.png" className="w-4 h-4" />
        Login with Slack
      </button>

      {/* LinkedIn */}
      <button className="flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors duration-300 hover:bg-white/10">
        <img src="https://img.icons8.com/ios-filled/50/linkedin.png" className="w-4 h-4" />
        Login with LinkedIn
      </button>
    </div>
  );
};

export default SimpleButton;
`;

  const buttons = [
    {
      label: "Login with Email",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75M21.75 6.75A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25M21.75 6.75v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      label: "Continue with Google",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://img.icons8.com/color/48/google-logo.png"
          className="w-4 h-4"
        />
      ),
    },
    {
      label: "Continue with GitHub",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://img.icons8.com/ios-glyphs/30/github.png"
          className="w-4 h-4 invert"
        />
      ),
    },
    {
      label: "Login with Facebook",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/50/facebook-new.png"
          className="w-4 h-4 invert"
        />
      ),
    },
    {
      label: "Login with X",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/768px-X_icon.svg.png"
          className="w-4 h-4 invert"
        />
      ),
    },
    {
      label: "Login with Apple",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://img.icons8.com/ios-filled/50/mac-os.png"
          className="w-4 h-4 invert"
        />
      ),
    },
    {
      label: "Login with Microsoft",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/2048px-Microsoft_icon.svg.png"
          className="w-4 h-4"
        />
      ),
    },
    {
      label: "Login with Slack ",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/1200px-Slack_icon_2019.svg.png"
          className="w-4 h-4"
        />
      ),
    },
    {
      label: "Login with LinkedIn",
      className: `border  ${
        theme == "dark" ? "border-gray-800" : "border-gray-300"
      } rounded-md cursor-pointer active:scale-95 transition transform duration-150 ease-in-out`,
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          className="w-4 h-4"
        />
      ),
    },
  ];

  return (
    <div className="p-4 mt-10 space-y-4 rounded-xl  ">
      <div>
        <h2 className="text-2xl font-bold ">Social Login Buttons</h2>
        <p className="text-gray-600 mt-1 text-sm">
          Commonly used in auth flows, these social login buttons are styled
          like the platforms they represent.
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
          <div className="flex flex-wrap justify-center gap-3 text-center max-w-2xl mx-auto">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded  ${btn.className}`}
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>
        ) : (
          <CodeLayout code={code} />
        )}
      </div>
    </div>
  );
};

export default SocialLoginBtn;
