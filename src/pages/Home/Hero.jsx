import { BookOpen, Wrench } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
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

  return (
    <div className="relative overflow-hidden">
      {/* 🔲 Grid background layer */}
      <div
        className="absolute inset-0 bg-center bg-repeat opacity-10 dark:opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/squared-metal.png')",
        }}
        aria-hidden="true"
      ></div>

      <section className="relative text-center py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animatedBox text-black dark:text-white">
            💫 Stunning UI Made Easy
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight ">
            Craft Modern{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Websites
            </span>{" "}
            Without the Hassle
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-md md:text-lg text-gray-700 dark:text-gray-400">
            Goat UI is a beautifully crafted Tailwind CSS component library
            designed to help you build elegant and responsive websites — fast,
            flexible, and delightful.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              className={`cursor-pointer  ${
                theme == "dark" ? "bg-white text-black" : "bg-black text-white"
              }  px-4 py-3 text-sm rounded-xl flex items-center gap-2 font-medium transition`}
            >
              <BookOpen size={20} /> Browse Components
            </button>
            <button
              className={`cursor-pointer border border-black ${
                theme == "dark" ? "border-white" : ""
              }  px-4 py-3 flex gap-2 items-center text-sm rounded-xl  transition-all duration-300 font-medium`}
            >
              <Wrench size={20} /> Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
