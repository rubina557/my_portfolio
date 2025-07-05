import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavLink = ({ href, children, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="block py-2 px-3 text-cloud-white rounded hover:text-aqua-vibrant transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="bg-dark-nav fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cloud-white">
            Rubina Nazeer
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cloud-white rounded-lg md:hidden hover:bg-deep-cove focus:outline-none focus:ring-2 focus:ring-slate-gray"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-deep-cove rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-dark-nav md:bg-transparent">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
