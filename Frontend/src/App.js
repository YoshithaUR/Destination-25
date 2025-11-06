import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contac";
import Animation from "./components/Animation";
import Gallery from "./pages/Gallary";
import GalleryUpload from "./pages/GallaryUp";
import ReadMoreAbout from "./pages/ReadMoreAbout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"

const App = () => {


  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div id="home">
                <Hero />
              </div>
              <div id="packages" 
             >
                {/* <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-4xl font-bold mb-10">Adventure Packages</h1>
                  <p className="text-xl text-gray-300">Explore our exciting adventure packages.</p>
                </div> */}
              </div>
              <div id="about">
                <About />
              </div>
              <div id="destinations">
               <Gallery/>
              </div>
              <div id="contac">
                <Contact />
              </div>
              <div id="gallary">
                <Gallery />
              </div>
              <div id="gallery-upload">
                <GalleryUpload />
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/gallery-upload" element={<GalleryUpload />} />
          <Route path="/about-more" element={<ReadMoreAbout />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;