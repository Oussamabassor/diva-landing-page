import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    { to: "/nos-solutions", label: "Nos Solutions" },
    { to: "/nos-clients", label: "Nos Clients" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-teal-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0" onClick={closeMenu}>
            <div className="relative h-12 w-12 flex items-center justify-center">
              <img src={logo} alt="Diva Easy Logo" className="h-full w-full object-contain" />
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 whitespace-nowrap tracking-tight">
              Diva Easy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-teal-600 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-50 text-sm xl:text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium ml-2 text-sm xl:text-base"
            >
              Contact
            </Link>
          </div>

          {/* Tablet Menu (md:flex lg:hidden) */}
          <div className="hidden md:flex lg:hidden">
            <div className="flex space-x-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-teal-600 font-medium px-2 py-2 rounded-lg transition-all duration-300 hover:bg-teal-50 text-xs sm:text-sm"
                >
                  {link.label.split(' ')[0]}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-slate-900 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-xs sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-teal-50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden backdrop-blur-sm bg-white/95 border-t border-teal-100/50 max-h-96 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-lg hover:bg-teal-50 font-medium transition-all duration-300"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-gradient-to-r from-teal-500 to-slate-900 text-white px-3 py-2 rounded-lg hover:shadow-lg font-medium m-3 transition-all duration-300"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
