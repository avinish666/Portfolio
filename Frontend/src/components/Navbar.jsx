import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50
      bg-white/90 dark:bg-slate-950/90
      backdrop-blur-lg
      border-b border-gray-200 dark:border-slate-800
      transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold text-slate-900 dark:text-white"
          >
            Avinish
            <span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-gray-300
                hover:text-blue-500
                transition-colors duration-300
                font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full
              border border-gray-300 dark:border-slate-700
              flex items-center justify-center
              text-slate-700 dark:text-gray-300
              hover:text-blue-500
              hover:border-blue-500
              transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Hire Me */}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700
              text-white px-5 py-2.5 rounded-lg
              font-semibold transition-all duration-300
              hover:scale-105"
            >
              Hire Me
            </a>

          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">

            <button
              onClick={toggleTheme}
              className="text-slate-700 dark:text-gray-300 text-xl"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700 dark:text-gray-300 text-2xl"
              aria-label="Open menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-slate-800 py-5">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 dark:text-gray-300
                  hover:text-blue-500 py-2 transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-700
                text-white text-center py-3 rounded-lg
                font-semibold"
              >
                Hire Me
              </a>

            </div>
          </div>
        )}

      </div>
    </motion.nav>
  );
}