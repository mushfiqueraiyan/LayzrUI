import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Search,
  BookOpen,
  Wrench,
  MessageCircleIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    const isDark = saved === "dark";
    setDarkMode(isDark);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const nextTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);

    localStorage.setItem("theme", nextTheme);

    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 py-3 border-b border-gray-500 shadow-sm transition-colors duration-300 ${
        scroll ? "backdrop-blur-sm bg-black/20  text-white border-b-0" : ""
      }`}
    >
      <div className="flex justify-between items-center max-w-[1500px] mx-auto">
        {/* Left section: Logo + Links */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-1">
            <span className="font-semibold text-lg">Goat UI</span>
            <span className="text-xs  px-2 py-0.5 rounded ml-1">V 1.0</span>
          </Link>

          {/* Links */}
          <div className="hidden md:flex gap-6 ml-6 text-sm ">
            <NavLink
              to={"/docs"}
              className="flex items-center gap-1  hover:text-gray-400"
            >
              <BookOpen size={19} /> Docs
            </NavLink>
            <NavLink className="flex items-center gap-2 hover:text-gray-400">
              <Wrench size={19} /> Tools
            </NavLink>
            <NavLink className=" flex items-center gap-2 hover:text-gray-400">
              <MessageCircleIcon size={19} /> Support
            </NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center border border-gray-500 px-3 py-1.5 rounded text-sm">
            <Search size={16} className="mr-2 " />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none  w-32"
            />
            <span className="ml-4 text-gray-600 text-xs">Ctrl + K</span>
          </div>

          <a href="#" className="hover:opacity-80">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:opacity-80">
            <Github size={20} />
          </a>

          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
