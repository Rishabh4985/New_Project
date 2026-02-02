import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "About Us", path: "/about-us" },
  { label: "Contact Us", path: "/contact-us" },
];

const BRAND_NAME = "Biggies Corporation";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Brand */}
          <NavLink
            to="/"
            className="text-xl font-bold tracking-wide text-white hover:text-blue-400 transition"
          >
            {BRAND_NAME}
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}

            {/* CTA */}
            <NavLink
              to="/contact-us"
              className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Free Demo
            </NavLink>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
};

export default Navbar;
