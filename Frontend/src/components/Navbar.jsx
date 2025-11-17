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
          <button
            onClick={() => window.open("https://www.facebook.com/share/1XjEbgs2kd/?mibextid=qi2Omg", "_blank")}
            className="social-button"
          >
            <img src="/undefined (7).jpg" alt="facebook" />
          </button>

          <button
            onClick={() => window.open("https://www.linkedin.com/company/106268570/admin/dashboard/", "_blank")}
            className="social-button"
          >
            <img src="/undefined (8).jpg" alt="linkdin" />
          </button>

          <button
            onClick={() => window.open("https://www.instagram.com/ceyloninfinite/", "_blank")}
            className="social-button"
          >
            <img src="/undefined (9).jpg" alt="instagram" />
          </button>
        </div>

        {/* Right - Contact Info */}
        <div className="contact-info">
          <span>📞 +94763624680</span>
          <span>✉️ www.ceylondestinations.com
</span>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav
        className={`fixed top-[20px] left-0 w-full flex justify-between items-center px-10 py-6 z-40 transition-all duration-500 ${
          show
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
       <div className="logo-section flex items-center gap-2">
  {/* Increased size to h-28 w-28 (112px by 112px) */}
  <div className="rounded-full border-4 h-20 w-20 flex items-center justify-center" style={{ borderColor: '#82233e' }}>
    <img src="/Untitled design (2).png" alt="Smile Lanka Logo" className="logo-img-full h-full w-full rounded-full object-cover" />
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
