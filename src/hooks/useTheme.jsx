import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const updateTheme = () => {
      const current =
        document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(current);
    };

    updateTheme(); // Initial check
    window.addEventListener("themeChange", updateTheme);

    return () => {
      window.removeEventListener("themeChange", updateTheme);
    };
  }, []);

  return theme;
};

export default useTheme;
