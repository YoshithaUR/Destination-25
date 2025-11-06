import { Link } from "react-router-dom";
import  { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation as useRouterLocation, useNavigate as useRouterNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const location = useRouterLocation();
  const navigate = useRouterNavigate();
  const navItems = ["home", "about", "destinations", "contact", "gallery"];
  const linkRefs = useRef([]);

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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setFocusedIndex(prev => (prev < navItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setFocusedIndex(prev => (prev > 0 ? prev - 1 : navItems.length - 1));
      } else if (e.key === "Enter" && focusedIndex !== -1) {
        // Trigger click on Enter key
        if (linkRefs.current[focusedIndex]) {
          linkRefs.current[focusedIndex].click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, navItems.length]);

  // Set initial focus to first item when navbar becomes visible
  useEffect(() => {
    if (show && focusedIndex === -1) {
      setFocusedIndex(0);
    }
  }, [show, focusedIndex]);

  // Check if we're on a destination page
  const isDestinationPage = location.pathname.startsWith('/destinations');
  const isPackagesPage = location.pathname === '/packages';
  const isPackageDetailPage = location.pathname.startsWith('/packages/') && location.pathname !== '/packages';

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 transition-all duration-500 ${
        show
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo - Always show company name */}
      <h1 className="text-white font-bold text-xl tracking-wider">
        Smile Lanka
      </h1>

      {/* Links - Updated to remove Images link */}
      <ul className="flex space-x-10 text-sm text-white">
        {isPackagesPage || isPackageDetailPage ? (
          <>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/" className="block h-full w-full">
                Home
              </RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/packages" className="block h-full w-full">
                Packages
              </RouterLink>
            </li>
            {/* Added Gallery link for package pages */}
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/gallery" className="block h-full w-full">
                Gallery
              </RouterLink>
            </li>
          </>
        ) : (
          <>
            <li className="hover:text-yellow-400 cursor-pointer">
              {/* Changed from ScrollLink to RouterLink for consistent navigation */}
              <RouterLink to="/" className="block h-full w-full">
                Home
              </RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="about" smooth={true} duration={600} offset={-70} className="block h-full w-full">
                About Us
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="destination" smooth={true} duration={600} offset={-70} className="block h-full w-full">
                Destinations
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/packages" className="block h-full w-full">
                Packages
              </RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="contact" smooth={true} duration={600} offset={-70} className="block h-full w-full">
                Contact Us
              </ScrollLink>
            </li>
            {/* Added Gallery link for regular pages */}
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/gallery" className="block h-full w-full">
                Gallery
              </RouterLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;