import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, links }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-gray-900 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end text-gray-400 hover:text-white text-xl mb-8"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Navigation Links */}
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <NavLink
            to="/contact-us"
            onClick={onClose}
            className="mt-auto text-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Free Demo
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
