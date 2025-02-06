import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaPhoneAlt, FaEnvelope, FaTimes } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import scrollTop from "../helpers/scrollTop";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null); // Reference for the search input
  const { pathname } = useLocation();

  const headerBgColor =
    pathname === "/blog" 
      ? "bg-[#000000b8]"
      : isScrolled
      ? "bg-[#000000b8]"
      : "bg-[#000000b8]";

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (1 second)
      once: true, // Animation happens only once
    });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "" : "hidden";
    document.body.style.height = isDrawerOpen ? "" : "100vh";
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-linear shadow-xl ${headerBgColor}`}
    >
      <div className="flex justify-between items-center py-4 xs:py-6 px-4 lg:px-14 text-white">
        {/* Left side - Logo */}
        <Link
          to="/"
          onClick={scrollTop}
          className="text-3xl md:text-5xl font-bold"
        >
          <span className="text-[#a0810e]">N</span>euro
          <span className="text-[#a0810e]">C</span>ort
        </Link>

        <div className="flex items-center gap-x-5">
          <div className="">
            <ul className="w-full sm:flex hidden gap-x-5 md:gap-x-6 text-base md:text-xl font-medium">
              <li>
                <Link
                  to="/"
                  onClick={scrollTop}
                  className={`${
                    pathname === "/"
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  onClick={scrollTop}
                  className={`${
                    pathname === "/about-us"
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={scrollTop}
                  className={`${
                    pathname === "/services"
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  onClick={scrollTop}
                  className={`${
                    pathname === "/contact-us"
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={scrollTop}
                  className={`${
                    pathname === "/blog"
                      ? "text-yellow-500"
                      : "text-white hover:text-yellow-500"
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center space-x-4 relative">
            {/* Search Icon */}
            {/* <div
              className="relative w-8 xs:w-10 md:w-12 h-8 xs:h-10 md:h-12 rounded-full bg-[#a0810e] flex justify-center items-center cursor-pointer"
              onClick={toggleSearch}
            >
              <FaMagnifyingGlass className="text-base xs:text-lg sm:text-xl" />
            </div> */}

            {/* Search Input Box */}
            {/* {isSearchOpen && (
              <div
                ref={searchRef}
                className="w-56 sm:w-72 absolute top-full right-0 mt-2 p-2 bg-white text-black rounded-lg shadow-lg z-10"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border rounded-md focus:outline-none"
                />
              </div>
            )} */}

            {/* Hamburger / Close Icon */}
            <div
              onClick={toggleDrawer}
              className="sm:hidden rounded-full z-50 cursor-pointer"
            >
              {isDrawerOpen ? (
                <FaTimes className="text-base xs:text-xl sm:text-2xl" />
              ) : (
                <FaBars className="text-base xs:text-xl sm:text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Drawer (Full Width) */}
      {isDrawerOpen && (
        <div
          data-aos="fade"
          className="fixed top-0 left-0 w-full h-full bg-[#1f2937eb] shadow-lg z-40 p-4"
        >
          {/* Drawer Header with Close Icon */}
          <div className="w-full mb-14">
            {/* Logo inside drawer */}
            <Link
              to="/"
              onClick={toggleDrawer}
              className="text-2xl sm:text-3xl font-bold text-white"
            >
              <span className="text-[#a0810e]">N</span>euro
              <span className="text-[#a0810e]">C</span>ort
            </Link>
          </div>

          {/* Drawer Menu */}
          <div className="w-full text-white text-2xl flex justify-center items-center">
            <ul className="flex flex-col gap-y-4" onClick={toggleDrawer}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
