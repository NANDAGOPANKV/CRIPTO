import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/theme/ThemeContext";

export const ThemeToogle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-3">
      {theme === "dark" ? (
        <div  className="flex items-center cursor-pointer  "  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiSun  className="text-primary text-2xl mr-3 "  /> Light Moode
        </div>
      ) : (
        <div className="flex items-center cursor-pointer  "  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <HiMoon className="text-primary text-2xl mr-3 "   /> Dark Moode
        </div>
      )}
    </div>
  );
};
