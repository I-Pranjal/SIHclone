import React, { useState } from 'react';
import { navbar } from '../assets/data.jsx';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or use any icon lib

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">SIH</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navbar.map((nav, key) => (
            <div
              className="relative group"
              key={key}
              onMouseEnter={() => setActiveDropdown(key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={nav.link}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {nav.menu}
              </Link>
              {activeDropdown === key && (
                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 z-50 min-w-[150px]">
                  {nav.subheading.map((heading, i) => (
                    <a
                      href={heading.href}
                      key={i}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                      {heading.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navbar.map((nav, key) => (
            <div key={key}>
              <Link
                to={nav.link}
                className="block py-2 font-semibold text-gray-800"
              >
                {nav.menu}
              </Link>
              <div className="pl-4">
                {nav.subheading.map((heading, i) => (
                  <a
                    href={heading.href}
                    key={i}
                    className="block text-sm py-1 text-gray-600 hover:text-blue-600"
                  >
                    {heading.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
