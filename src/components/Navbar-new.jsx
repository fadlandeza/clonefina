import React from "react";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/img/bsb.png";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "Pages",
    dropdown: true,
    items: [
      { name: "Item 1", path: "/pages-1" },
      { name: "Item 2", path: "/pages-2" },
      { name: "Item 3", path: "/pages-3" },
    ],
  },
  {
    name: "Blog",
    dropdown: true,
    items: [
      { name: "Blog 1", path: "/blog-1" },
      { name: "Blog 2", path: "/blog-2" },
      { name: "Blog 3", path: "/blog-3" },
    ],
  },
  { name: "Shop", path: "/shop" },
  {
    name: "Portofolio",
    dropdown: true,
    items: [
      { name: "Portofolio 1", path: "/portofolio-1" },
      { name: "Portofolio 2", path: "/portofolio-2" },
      { name: "Portofolio 3", path: "/portofolio-3" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

export default function NavbarNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // ubah threshold sesuai kebutuhan
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        scrolled ? "bg-white shadow-md" : "md:bg-transparent md:shadow-none bg-white"
      } text-black px-4 py-2`}
    >
      <div className="container px-10 sm:px-6 md:px-8 lg:px-10 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-1">
          <img alt="Logo BSB" src={logo} className="h-14 w-auto" />
        </div>

        {/* Hamburger Button - only on mobile */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <a
                  href={item.path}
                  className="cursor-pointer inline-flex items-center gap-1 border-b-2 border-transparent hover:border-[#f1d632] hover:text-[#f1d632] transition"
                >
                  {item.name}
                </a>
              ) : (
                <>
                  <span className="cursor-pointer inline-flex items-center gap-1 border-b-2 border-transparent hover:border-[#f1d632] hover:text-[#f1d632] transition">
                    {item.name}
                    <ChevronDownIcon className="w-3 h-3 text-[#f1d632]" />
                  </span>
                  <ul className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.path}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#f1d632]"
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="flex items-center gap-1 px-4 py-1 border border-gray-500 text-gray-500 rounded-full text-sm hover:bg-[#f1d632] hover:text-white transition">
            <FiSearch />
            Search
          </button>
          <button className="bg-indigo-950 px-4 py-1 rounded-full text-sm font-semibold text-white hover:opacity-90 transition">
            Sign Up For Free
          </button>
        </div>
      </div>

      {/* Menu Mobile (Hamburger Menu) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2 bg-white">
          {menuItems.map((item, index) => (
            <div key={index}>
              {!item.dropdown ? (
                <a
                  href={item.path}
                  className="block py-2 px-4 border-b border-gray-100 hover:bg-gray-100 rounded transition"
                >
                  {item.name}
                </a>
              ) : (
                <div>
                  <span className="block py-2 px-4 font-medium text-gray-700">
                    {item.name}
                  </span>
                  <div className="pl-6">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="block py-1 px-2 text-sm text-gray-600 hover:text-[#f1d632] transition"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex flex-col gap-2 mt-4">
            <button className="flex items-center justify-center gap-1 px-4 py-2 border border-gray-500 text-gray-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
              <FiSearch />
              Search
            </button>
            <button className="bg-indigo-950 px-4 py-2 rounded-full text-sm font-semibold text-white hover:opacity-90 transition">
              Sign Up For Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
