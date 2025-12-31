import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import lightLogo from '../assets/light-logo.png';
import darkLogo from '../assets/dark-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/qui-sommes-nous", label: "Qui Sommes Nous" },
    { to: "/nos-services", label: "Nos Services" },
    // { to: "/nos-solutions", label: "Nos Solutions" },
    { to: "/nos-clients", label: "Nos Clients" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 border-b border-teal-100/50 dark:border-teal-900/50 shadow-sm transition-colors duration-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0" onClick={closeMenu}>
            <div className="relative h-12 w-12 flex items-center justify-center">
              <img src={isDark ? darkLogo : lightLogo} alt="Diva Easy Logo" className="h-full w-full object-contain" />
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300 whitespace-nowrap tracking-tight">
              Diva Easy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium px-2 py-2 rounded-lg transition-all duration-300 hover:bg-teal-50 dark:hover:bg-slate-800 text-sm xl:text-base"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-6 w-px bg-teal-200 dark:bg-teal-800"></div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-sm xl:text-base"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Tablet Menu (md:flex lg:hidden) */}
          <div className="hidden md:flex lg:hidden items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium px-2 py-2 rounded-lg transition-all duration-300 hover:bg-teal-50 dark:hover:bg-slate-800 text-xs sm:text-sm"
              >
                {link.label.split(' ')[0]}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-600 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium ml-3 text-xs sm:text-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-600 focus:ring-offset-2 dark:focus:ring-offset-slate-950 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-teal-100/50 dark:border-teal-900/50 shadow-lg z-40 max-h-screen overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-4 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 font-medium transition-all duration-300"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-teal-100/30 dark:border-teal-900/30 my-2 pt-2">
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-teal-500 to-slate-900 text-white px-4 py-3 rounded-lg hover:shadow-lg font-medium transition-all duration-300 text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
