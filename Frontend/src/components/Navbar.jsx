import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Link as RouterLink,
  useLocation as useRouterLocation,
  useNavigate as useRouterNavigate,
} from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [show, setShow] = useState(false);
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
      <div className="top-bar">
        {/* Left - Social Media Buttons */}
        <div className="social-buttons">
           <a href="https://www.facebook.com/share/1XjEbgs2kd/?mibextid=qi2Omg" className="text-gray-300 hover:text-red-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>

          <a href="https://www.instagram.com/ceyloninfinite/" className="text-gray-300 hover:text-red-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>

          <a href="https://www.linkedin.com/company/106268570/admin/dashboard/" className="text-gray-300 hover:text-red-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zM8 18H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 18h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V18h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66V18z"/>
                </svg>
              </a>
        </div>

        {/* Right - Contact Info */}
<div className="contact-info">
  <span>📞 +94763624680</span>
  <span>✉️ info@ceylondestinations.com</span>
</div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        className={`fixed top-[20px] left-0 w-full h-[80px] flex justify-between items-center px-10 py-6 z-40 transition-all duration-500 ${
          show
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
       <div className="logo-section flex items-center gap-2">
  {/* Increased size to h-28 w-28 (112px by 112px) */}
  <div className="rounded-full border-4 h-16 w-16 flex items-center justify-center"
     style={{ borderColor: '#82233e' }}>
  <img
    src="/Untitled design (2).png"
    alt="Ceylon Destinations Logo"
    className="logo-img-full h-full w-full rounded-full object-cover"
  />
</div>

  <h1 className="text-white font-bold text-xl tracking-wider">Ceylon Destinations</h1>
</div>






        <ul className="flex space-x-10 text-sm text-white">
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
      </nav>
    </>
  );
};

export default Navbar;
