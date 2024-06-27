import { SquareMenu } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function TopNavLink({ href, children }) {
  return (
    <NavLink
      to={href}
      className="text-white hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium"
      activeClassName="bg-blue-900"
    >
      {children}
    </NavLink>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="bg-orange-500 h-4 w-4 rounded-full mr-2"></span>
          <span className="text-lg sm:text-xl font-bold">MARKETPLACE</span>
        </div>
        <div className="hidden sm:flex space-x-4">
          <TopNavLink href="/">Home</TopNavLink>
          <TopNavLink href="/product">Products</TopNavLink>
          <TopNavLink href="/register">Register</TopNavLink>
          <TopNavLink href="/login">Login</TopNavLink>
        </div>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <SquareMenu />
          </button>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center mt-2">
          <TopNavLink href="/">Home</TopNavLink>
          <TopNavLink href="/product">Products</TopNavLink>
          <TopNavLink href="/register">Register</TopNavLink>
          <TopNavLink href="/login">Login</TopNavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
