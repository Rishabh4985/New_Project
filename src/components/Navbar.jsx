import React, { useState } from "react";

const Navbar = ({ links, brand }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Brand */}
        <h1 className="text-lg font-semibold tracking-wide">
          {brand}
        </h1>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li
              key={link}
              className="cursor-pointer text-sm font-medium hover:text-gray-300 transition"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3">
          {links.map((link) => (
            <li
              key={link}
              className="border-b border-gray-700 pb-2 text-sm cursor-pointer hover:text-gray-300"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
