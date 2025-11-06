import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CardsSection from "./components/CardsSection.jsx";
import DestinationPage from "./pages/destinations/DestinationPage.jsx";
import Footer from "./components/Footer.jsx";
import Packages from "./pages/Packages.jsx";
import Gallery from "./pages/Gallary.jsx";
import GalleryUpload from "./pages/GallaryUp.jsx";
import Loader from "./components/Loader.jsx";
import PackageTemplate from "./pages/packages/PackageTemplate.jsx";
import ReadMoreAbout from "./pages/ReadMoreAbout.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize AOS animations
    if (!loading) {
      AOS.init({
        duration: 1000,
        once: false, // Changed to false so animations replay on scroll
        easing: 'ease-out-cubic',
      });
    }
  }, [loading]);

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans flex flex-col">
        <Loader isLoading={loading} />
        {!loading && (
          <>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <CardsSection />
                    <About />
                    <Contact />
                  </>
                } />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/:id" element={<PackageTemplate />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery-upload" element={<GalleryUpload />} />
                <Route path="/destinations/:id" element={<DestinationPage />} />
                <Route path="/about-more" element={<ReadMoreAbout />} />
                <Route path="*" element={
                  <>
                    <Hero />
                    <CardsSection />
                    <About />
                    <Contact />
                  </>
                } />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;