import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/bsb.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Tombol menu untuk mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-sky-400 hover:bg-sky-500 hover:text-white focus:ring-2 focus:ring-sky-400 focus:outline-none focus:ring-inset"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="block h-6 w-6 text-sky-400"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Logo dan Menu */}
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo */}
            <div className="flex items-center" style={{ marginLeft: "48px" }}>
              <img alt="Logo BSB" src={logo} className="h-15 w-auto" 
              />
            </div>

            {/* Menu desktop */}
            <div className="hidden sm:flex space-x-6">
              <Link
                to="/"
                className="font-bold border-b-2 border-transparent px-3 py-2 text-sm text-sky-300 hover:text-sky-400 hover:border-sky-400"
              >
                Home
              </Link>

              {/* Dropdown Tentang */}
              <div className="relative group">
                <button className="flex items-center font-bold px-3 py-2 text-sm text-sky-300 hover:text-sky-400 border-b-2 border-transparent group-hover:border-sky-400 focus:outline-none">
                  Tentang
                  <svg
                    className="ml-1 h-4 w-4 text-sky-300 group-hover:text-sky-500 transition duration-200"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transform transition duration-200 z-50">
                  <Link
                    to="/tentang-sifina"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-sky-100"
                  >
                    Tentang SiFina
                  </Link>
                  <Link
                    to="/tentang-bsb"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-sky-100"
                  >
                    Tentang BSB
                  </Link>
                </div>
              </div>

              <Link
                to="/kontak"
                className="font-bold border-b-2 border-transparent px-3 py-2 text-sm text-sky-300 hover:text-sky-400 hover:border-sky-400"
              >
                Kontak
              </Link>

              <div className="hidden sm:block">
                <Link to={"/login"}>
                  <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md font-medium text-sm">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to={"/"}
                className="block px-3 py-2 rounded-md text-base font-medium text-sky-400 hover:text-sky-500 hover:bg-gray-100 hover:border-b-2 hover:border-sky-400"
              >
                Home
              </Link>

              <div className="space-y-1">
                <span className="block px-3 py-2 font-medium text-sky-400">
                  Tentang
                </span>
                <Link
                  to="/tentang-sifina"
                  className="block px-6 py-2 rounded-md text-sm text-gray-700 hover:bg-sky-100"
                >
                  Tentang SiFina
                </Link>
                <Link
                  to="/tentang-bsb"
                  className="block px-6 py-2 rounded-md text-sm text-gray-700 hover:bg-sky-100"
                >
                  Tentang BSB
                </Link>
              </div>

              <Link
                to={"/login"}
                className="block px-3 py-2 rounded-md text-base font-medium text-sky-400 hover:text-sky-500 hover:bg-gray-100 hover:border-b-2 hover:border-sky-400"
              >
                Kontak
              </Link>

              <Link to={"/login"}>
                <button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md font-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
