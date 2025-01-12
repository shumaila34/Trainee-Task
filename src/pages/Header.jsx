import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">DAX University</div>
        <nav className="flex space-x-4">
          <Link to="/home" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white">
            About
          </Link>
          <Link to="/login" className="text-gray-400 hover:text-white">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
