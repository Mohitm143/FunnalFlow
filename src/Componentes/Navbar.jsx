import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-white absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold  text-white hover:text-cyan-400 cusor-pointer">
          FunnelFlow
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/purifiers"
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Purifiers
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;