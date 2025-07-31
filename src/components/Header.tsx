import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme, type Theme } from "../Context/ThemeContext";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleTheme(theme: Theme) {
    setTheme(theme);
    setMobileOpen(false);
  }

  const themeClasses =
    "fixed z-50 top-0 left-0 w-full px-6 py-3 flex items-center justify-between border-b border-b-black/20";
  const theme2Classes =
    "flex-col w-[10vw] sm:min-w-[150px] sm:w-[15vw] p-2 py-4 items-center border-r border-r-white/20";

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <header
        className={`${
          theme !== "theme2" ? themeClasses : theme2Classes
        } shadow bg-[var(--text-color)] text-[var(--bg-color)]`}
      >
        <h1
          className={`text-xl font-bold ${
            theme === "theme2" ? "hidden sm:block" : ""
          }`}
        >
          🌈 Theme App
        </h1>
        {/* Hamburger icon */}
        <div
          className="flex sm:hidden flex-col items-center gap-1 cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <span className="h-1 w-5 bg-[var(--bg-color)]"></span>
          <span className="h-1 w-5 bg-[var(--bg-color)]"></span>
          <span className="h-1 w-5 bg-[var(--bg-color)]"></span>
        </div>
        {/* Desktop Nav */}
        <nav
          className={`hidden sm:flex ${
            theme === "theme2" ? "flex-col mt-8" : ""
          } items-center gap-4`}
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <select
            value={theme}
            onChange={(e) => handleTheme(e.target.value as Theme)}
            className="p-1 cursor-pointer rounded bg-[var(--bg-color)] text-[var(--text-color)]"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-[var(--text-color)] text-[var(--bg-color)] z-100 p-4 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className={`flex justify-between items-center mb-6`}>
          <h2 className="text-xl font-bold">🌈 Theme App</h2>
          <button onClick={toggleMobileMenu} className="text-lg">
            ✕
          </button>
        </div>
        <nav className="flex flex-col gap-4 items-center">
          <Link to="/" onClick={toggleMobileMenu} className="hover:underline">
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="hover:underline"
          >
            Contact
          </Link>
          <select
            value={theme}
            onChange={(e) => handleTheme(e.target.value as Theme)}
            className="p-1 w-min cursor-pointer rounded bg-[var(--bg-color)] text-[var(--text-color)]"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </nav>
      </div>
    </>
  );
}
