import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Separate dropdowns
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);

  const lastScrollRef = useRef(0);
  const desktopDropdownRef = useRef<HTMLLIElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDesktopDropdown(false);
    setOpenMobileDropdown(false);
  };

  const handleMobileDropdownLinkClick = () => {
    setOpenMobileDropdown(false);
    setTimeout(() => setIsMobileMenuOpen(false), 120);
  };

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollRef.current;

      if (current <= 0) setShow(true);
      else if (current > prev) setShow(false);
      else setShow(true);

      lastScrollRef.current = current;

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Desktop dropdown close
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDesktopDropdown(false);
      }

      // Mobile menu close
      const toggleButton = document.getElementById("mobile-menu-toggle");
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        toggleButton &&
        !toggleButton.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const services = [
    "web-development",
    "mobile-apps",
    "graphic-design",
    "software-development",
    "game-development",
    "seo-and-content-writing",
    "digital-marketing",
    "uiux-design",
  ];

  const prettyName = (txt: string) =>
    txt
      .replace(/-/g, " ")
      .replace("uiux design", "UI/UX Design")
      .replace("seo and content writing", "SEO and Content Writing");

  return (
    <nav
      className={`w-full bg-white shadow-md fixed top-0 left-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={handleLinkClick}>
          <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm text-[#2c5e2b] font-medium">
          <li>
            <Link to="/" className="hover:text-[#98bc62]" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#98bc62]" onClick={handleLinkClick}>
              About
            </Link>
          </li>

          {/* Desktop Dropdown */}
          <li className="relative" ref={desktopDropdownRef}>
            <button
              onClick={() => setOpenDesktopDropdown(!openDesktopDropdown)}
              className="flex items-center gap-1 hover:text-[#98bc62]"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${openDesktopDropdown ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDesktopDropdown && (
              <ul className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-lg border border-gray-200 py-2 z-50">
                {services.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="block px-4 py-2 hover:bg-[#98bc62] hover:text-white"
                      onClick={handleLinkClick}
                    >
                      {prettyName(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/portfolio" className="hover:text-[#98bc62]" onClick={handleLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/our-team" className="hover:text-[#98bc62]" onClick={handleLinkClick}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-[#98bc62]" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* ✅ Desktop Buttons (RESTORED) */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/contact-us"
            className="px-5 py-3 bg-[#2c5e2b] text-white rounded-full hover:bg-[#ffff] hover:text-[#2c5e2b] border hover:border-[#2c5e2b] transition"
            onClick={handleLinkClick}
          >
            Let's Talk Together
          </Link>

          <Link
            to="/portfolio"
            className="px-5 py-3 bg-[#2c5e2b] text-white rounded-full hover:bg-[#ffff] hover:text-[#2c5e2b] border hover:border-[#2c5e2b] transition"
            onClick={handleLinkClick}
          >
            Learn More
          </Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer" id="mobile-menu-toggle">
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (!isMobileMenuOpen) setOpenMobileDropdown(false);
            }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7 text-[#2c5e2b]" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-[#2c5e2b]" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed top-[68px] left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 border-t text-[#2c5e2b]">
          <li>
            <Link to="/" onClick={handleLinkClick} className="py-2 block">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick} className="py-2 block">About</Link>
          </li>

          {/* Mobile Dropdown */}
          <li>
            <button
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
              className="flex justify-between w-full py-2"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${openMobileDropdown ? "rotate-180" : ""
                  }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openMobileDropdown && (
              <ul className="pl-4 border-l border-[#98bc62] mt-2 space-y-2">
                {services.map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      onClick={handleMobileDropdownLinkClick}
                      className="block py-1 text-sm text-gray-600 hover:text-[#98bc62]"
                    >
                      {prettyName(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/portfolio" onClick={handleLinkClick} className="py-2 block">Portfolio</Link></li>
          <li><Link to="/our-team" onClick={handleLinkClick} className="py-2 block">Our Team</Link></li>
          <li><Link to="/contact-us" onClick={handleLinkClick} className="py-2 block">Contact</Link></li>
        </ul>

        {/* Mobile Buttons */}
        <div className="p-6 border-t space-y-3">
          <Link
            to="/contact-us"
            onClick={handleLinkClick}
            className="block text-center px-5 py-3 bg-[#2c5e2b] text-white rounded-full"
          >
            Let's Talk Together
          </Link>

          <Link
            to="/portfolio"
            onClick={handleLinkClick}
            className="block text-center px-5 py-3 border border-[#2c5e2b] text-[#2c5e2b] rounded-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  );
}
