import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-white mb-3">
              Biggies Corporation
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering students through high-quality online tuition with
              expert mentors and flexible learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-white transition">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Biggies Corporation. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
