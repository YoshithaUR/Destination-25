import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Link as RouterLink,
  useLocation as useRouterLocation,
  useNavigate as useRouterNavigate,
} from "react-router-dom";
import "./Navbar.css";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const location = useRouterLocation();
  const navigate = useRouterNavigate();
  const navItems = ["home", "about", "destinations", "contact", "gallery"];
  const linkRefs = useRef([]);

  // 🔹 Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev < navItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : navItems.length - 1
        );
      } else if (e.key === "Enter" && focusedIndex !== -1) {
        if (linkRefs.current[focusedIndex]) {
          linkRefs.current[focusedIndex].click();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, navItems.length]);

  useEffect(() => {
    if (show && focusedIndex === -1) {
      setFocusedIndex(0);
    }
  }, [show, focusedIndex]);

  // 🔹 Page detection
  const isPackagesPage = location.pathname === "/packages";
  const isPackageDetailPage =
    location.pathname.startsWith("/packages/") &&
    location.pathname !== "/packages";

  return (
    <>
      
      {/* 🔹 Top Bar */}
<div className="w-full bg-[#8A173B] text-white text-sm hidden sm:block">

  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">

    {/* LEFT — Social Media Icons */}
    <div className="flex items-center gap-4 mb-1 sm:mb-0 justify-center sm:justify-start">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1XjEbgs2kd/?mibextid=qi2Omg"
    className="text-gray-300 hover:text-red-800 transition-colors"
  >
    <svg className="w-6 h-6 " fill="currentColor" viewBox="0 0 24 24" >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/ceyloninfinite/"
    className="text-gray-300 hover:text-red-800 transition-colors"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27z"
        clipRule="evenodd"
      />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/106268570/admin/dashboard/"
    className="text-gray-300 hover:text-red-800 transition-colors"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM8 18H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 18h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V18h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V18z" />
    </svg>
  </a>
</div>


    {/* RIGHT — Contact Info */}
    <div className="flex items-center gap-6 text-gray-300">
      <span className="flex items-center gap-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884c-.016-1.073.816-1.987 1.889-2.003h2.073c.93 0 1.72.64 1.93 1.545l.45 1.94c.17.73-.15 1.49-.78 1.87l-1.1.66c1.02 2.04 2.66 3.68 4.7 4.7l.66-1.1c.38-.63 1.15-.95 1.87-.78l1.94.45c.9.21 1.54 1 1.54 1.93v2.07c-.02 1.07-.94 1.9-2.01 1.9C7.61 20 0 12.39 0 3.997c0-1.07.83-1.99 1.88-2.01h.12z"/>
        </svg>
        +94763624680
      </span>

      <span className="flex items-center gap-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.94 5.5A2 2 0 014.58 4h10.84a2 2 0 011.64.8L10 10.4 2.94 5.5zm14.12 1.76L10 12.6 2.94 7.26A2 2 0 002 9v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-.94-1.74z"/>
        </svg>
        info@ceylondestinations.com
      </span>
    </div>

  </div>
</div>


      {/* 🔹 Main Navbar */}
      <nav
        className={`fixed ${show ? "top-0" : "top-[20px]"} left-0 w-full h-[100px] flex justify-between items-center px-10 py-6 z-40 transition-all duration-500 ${
          show
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
       <div className="flex items-center gap-3 md:gap-4">

  <div
    className="rounded-full border-4 h-14 w-14 md:h-16 md:w-16 flex items-center justify-center shrink-0"
    style={{ borderColor: "#82233e" }}
  >
    <img
      src="/Untitled design (2).png"
      alt="Ceylon Destinations Logo"
      className="logo-img-full h-full w-full rounded-full object-cover"
    />
  </div>

  <h1 className="text-white font-bold text-lg md:text-xl tracking-wider whitespace-nowrap">
    Ceylon Destinations
  </h1>
</div>







        {/* Hamburger Menu Button for Mobile */}
        <button
          className="hamburger-menu md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-sm text-white">
          {isPackagesPage || isPackageDetailPage ? (
       <>
        <li className="hover:text-red-800 cursor-pointer">
          <RouterLink to="/">Home</RouterLink>
        </li>
         <li className="hover:text-red-800 cursor-pointer">
          <RouterLink to="/#about">About Us</RouterLink>
         </li>
        <li className="hover:text-red-800 cursor-pointer">
            <RouterLink to="/#destination">Destinations</RouterLink>
        </li>
        <li className="hover:text-red-800 cursor-pointer">
            <RouterLink to="/packages">Packages</RouterLink>
        </li>
        <li className="hover:text-red-800 cursor-pointer">
            <RouterLink to="/#contact">Contact Us</RouterLink>
        </li>
        <li className="hover:text-red-800 cursor-pointer">
            <RouterLink to="/gallery">Gallery</RouterLink>
        </li>
      </>
          ) : (
            <>
              <li className="hover:text-red-800 cursor-pointer">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li className="hover:text-red-800 cursor-pointer">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li className="hover:text-red-800 cursor-pointer">
                <ScrollLink
                  to="destination"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Destinations
                </ScrollLink>
              </li>
              <li className="hover:text-red-800 cursor-pointer">
                <RouterLink to="/packages">Packages</RouterLink>
              </li>
              <li className="hover:text-red-800 cursor-pointer">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
              <li className="hover:text-red-800 cursor-pointer">
                <RouterLink to="/gallery">Gallery</RouterLink>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md shadow-lg">
            <ul className="flex flex-col space-y-4 text-sm text-white p-6">
              {isPackagesPage || isPackageDetailPage ? (
                <>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/#destination" onClick={() => setIsMobileMenuOpen(false)}>Destinations</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/packages" onClick={() => setIsMobileMenuOpen(false)}>Packages</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</RouterLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <ScrollLink
                      to="about"
                      smooth={true}
                      duration={600}
                      offset={-70}
                      className="cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About Us
                    </ScrollLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <ScrollLink
                      to="destination"
                      smooth={true}
                      duration={600}
                      offset={-70}
                      className="cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Destinations
                    </ScrollLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/packages" onClick={() => setIsMobileMenuOpen(false)}>Packages</RouterLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={600}
                      offset={-70}
                      className="cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </ScrollLink>
                  </li>
                  <li className="hover:text-red-800 cursor-pointer">
                    <RouterLink to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</RouterLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
