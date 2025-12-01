import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // --- States ---
  const [show, setShow] = useState(true); // For hiding/showing the navbar on scroll
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For toggling mobile menu
  const [openDropdown, setOpenDropdown] = useState(false); // For managing the services dropdown

  // --- Refs ---
  const lastScrollRef = useRef(0);
  // Ref for the desktop services dropdown <li> element
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  // Ref for the main mobile menu container <div>
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Helper function to close both the mobile menu and the dropdown on any link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(false);
  };

  // --- Scroll Logic: HIDE ON SCROLL DOWN / SHOW ON SCROLL UP ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const lastScroll = lastScrollRef.current;
      const scrollThreshold = 5;

      if (currentScroll <= 0) {
        // Always show at the very top of the page
        setShow(true);
      } else if (Math.abs(currentScroll - lastScroll) < scrollThreshold) {
        // Ignore tiny movements
        return;
      } else if (currentScroll > lastScroll) {
        // Scrolling down: Hide the navbar
        setShow(false);
      } else {
        // Scrolling up: Show the navbar
        setShow(true);
      }

      // Update the reference for the next scroll event
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Close dropdown/mobile menu when clicking outside ---
  useEffect(() => {
    // FIX: Using the correct global MouseEvent type for TypeScript
    const handleClickOutside = (e: MouseEvent) => {
      // 1. Close desktop dropdown
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }

      // 2. Close mobile menu
      // Check if the click is outside the mobile menu AND outside the toggle button
      const mobileToggleElement = document.getElementById("mobile-menu-toggle");
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        mobileToggleElement &&
        !mobileToggleElement.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`w-full bg-white shadow-md fixed top-0 left-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Link to={"/"} onClick={handleLinkClick}>
            {" "}
            <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm text-[#2c5e2b] font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>

          {/* ▼ DESKTOP DROPDOWN HERE */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 hover:text-[#98bc62] transition"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                <li>
                  <Link
                    to="/web-development"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-apps"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/graphic-design"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Graphic Design
                  </Link>
                </li>
                 <li>
                  <Link
                    to="/software-development"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Softwate Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/game-development"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/seo-&-content-writing"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    SEO & Content Writing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Digital Marketing"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ui-ux-design"
                    className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white transition"
                    onClick={handleLinkClick}
                  >
                    UI-UX Design
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/portfolio"
              className="hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className="hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to={"/contact-us"}
            className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            onClick={handleLinkClick}
          >
            Let's Talk Together
          </Link>

          <Link
            to={"/portfolio"}
            className="px-5 py-3 border bg-[#2c5e2b] hover:border-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#ffff] hover:text-[#2c5e2b] transition"
            onClick={handleLinkClick}
          >
            Learn More
          </Link>
        </div>

        {/* Mobile menu icon and Toggler */}
        <div className="md:hidden cursor-pointer" id="mobile-menu-toggle">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon (X)
              <svg
                className="w-7 h-7 text-[#2c5e2b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-7 h-7 text-[#2c5e2b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU CONTAINER 📱 */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-[68px] left-0 w-full h-auto bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 text-[#2c5e2b] font-medium border-t border-gray-100">
          <li>
            <Link
              to="/"
              className="block py-2 hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>

          {/* Services Dropdown in Mobile */}
          <li className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex justify-between items-center w-full py-2 hover:text-[#98bc62] transition"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown && (
              <ul className="pl-4 border-l border-[#98bc62] mt-2 space-y-2">
                {/* FIX: Clicking these links closes BOTH menus */}
                <li>
                  <Link
                    to="/web-development"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mobile-apps"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/graphic-design"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/software-development"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Software-development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/game-development"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Game Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/seo-&-content-writing"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digital-marketing"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    Digital-marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ui-ux-design"
                    className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    onClick={handleLinkClick}
                  >
                    UI-UX Design
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/portfolio"
              className="block py-2 hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/our-team"
              className="block py-2 hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="block py-2 hover:text-[#98bc62] transition"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Buttons */}
        <div className="flex flex-col space-y-3 p-6 pt-4 border-t border-gray-100">
          <Link
            to={"/contact-us"}
            className="text-center px-5 py-3 border bg-[#2c5e2b] rounded-full text-sm text-white hover:bg-[#98bc62] transition"
            onClick={handleLinkClick}
          >
            Let's Talk Together
          </Link>
          <Link
            to={"/portfolio"}
            className="text-center px-5 py-3 border border-[#2c5e2b] rounded-full text-sm text-[#2c5e2b] hover:bg-gray-100 transition"
            onClick={handleLinkClick}
          >
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  );
}
