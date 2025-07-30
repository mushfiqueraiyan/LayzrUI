import { BookOpen, Wrench } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

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

  // Button animation

  const customCss = `
   
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className="relative overflow-hidden">
      {/* 🔲 Grid background layer */}
      <div
        className={`absolute inset-0 bg-center bg-repeat  ${
          theme == "dark" ? "opacity-12" : "opacity-5 invert"
        }  z-0`}
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/f8/48/e4/f848e49527f4186bd0d86a917d2567d7.jpg')",
        }}
        aria-hidden="true"
      ></div>

      <section className="relative text-center py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Animated Button */}
          <div className="flex items-center justify-center font-sans">
            <style>{customCss}</style>
            <button className="relative flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "conic-gradient(from var(--angle), transparent 25%, #3448fd, transparent 50%)",
                  animation: "shimmer-spin 2.5s linear infinite",
                }}
              />
              <span className="relative z-1 inline-flex text-sm items-center justify-center w-full h-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
                💫 Stunning UI Made Easy
              </span>
            </button>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight ">
            Craft Modern{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Websites
            </span>{" "}
            Without the Hassle
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-md md:text-lg text-gray-700 dark:text-gray-400">
            Layzr UI is a beautifully crafted Tailwind CSS component library
            designed to help you build elegant and responsive websites — fast,
            flexible, and delightful.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={"/docs"}
              className={`cursor-pointer  ${
                theme == "dark" ? "bg-white text-black" : "bg-black text-white"
              }  px-6 py-3 text-sm rounded-lg flex items-center gap-2 font-medium transition`}
            >
              <BookOpen size={20} /> Browse Components
            </Link>
            <Link
              className={`cursor-pointer border border-black ${
                theme == "dark" ? "border-gray-500" : ""
              }  px-6 py-3 flex gap-2 items-center text-sm rounded-lg  transition-all duration-300 font-medium`}
            >
              <Wrench size={20} /> Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
