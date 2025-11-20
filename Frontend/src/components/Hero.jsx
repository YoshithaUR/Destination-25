import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "ella.jpeg",
    title: "Ella(Hill Country)",
    subtitle: "Where Mist Meets Mountains",
    description:
      "A breathtaking town surrounded by tea plantations, waterfalls, and rolling hills. Enjoy the scenic train ride, hike Little Adam’s Peak, and capture the view from the Nine Arches Bridge.",
  },
  {
    id: 2,
    img: "Coconut Tree Hill is a unique cliff situated in….jpeg",
    title: "Mirissa (Coastal Paradises)",
    subtitle: "Golden sands and gentle waves",
    description:
      "A sun-soaked beach town famous for whale watching, surfing, and unforgettable sunsets. Perfect for travelers seeking relaxation and seaside adventure.",
  },
  {
    id: 3,
    img: "Kandy.jpeg",
    title: "Kandy(Cultural Heritage)",
    subtitle: "The heart of Sri Lankan tradition",
    description:
      "Home to the Temple of the Sacred Tooth Relic, Kandy blends spiritual heritage with natural beauty, offering visitors a glimpse into the island’s royal past.",
  },
  {
    id: 4,
    img: "yala.jpeg",
    title: "Yala National Park(Wildlife Adventures)",
    subtitle: "Into the wild heart of Sri Lanka",
    description:
      "Experience thrilling safaris in Sri Lanka’s most famous national park, where elephants, leopards, and exotic birds roam free in their natural habitat.",
  },
  {
    id: 5,
    img: "Immerse yourself in the ancient wonders of the….jpeg",
    title: "Sigiriya Rock Fortress(Ancient Wonders)",
    subtitle: "The Lion Rock of the kings",
    description:
      "A UNESCO World Heritage site rising majestically from the plains, Sigiriya is an architectural marvel and ancient citadel that tells stories of royal glory and artistry.",
  },
];

const backgroundImages = [
  "Train ride in Sri Lanka.jpeg",
  "The Beach Town of Mirissa, Sri Lanka.jpeg",
  "Kandy lies in the center of Sri Lanka and it is….jpeg",
  "Beyond its beaches and temples, Sri Lanka is among….jpeg",
  "Visiting Sigiriya Rock Fortress in Sri Lanka.jpeg",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setCurrentBg((prev) =>
      prev === backgroundImages.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setCurrentBg((prev) =>
      prev === 0 ? backgroundImages.length - 1 : prev - 1
    );
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.6 },
    }),
  };

  const bgVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }),
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={backgroundImages[currentBg]}
          src={backgroundImages[currentBg]}
          alt="Background"
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Slide Text */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl md:max-w-2xl px-4 text-center md:text-left md:ml-16"
        >
          <p className="uppercase text-xs md:text-sm tracking-widest text-gray-300">
            {slides[currentSlide].subtitle}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight text-white">
            {slides[currentSlide].title}
          </h1>

          <p className="text-gray-300 mt-4 text-xs md:text-sm md:max-w-lg">
            {slides[currentSlide].description}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-black px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-red-900 transition"
          >
            EXPLORE MORE
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Slide Thumbnails & Arrows */}
      <div className="absolute bottom-6 md:bottom-16 left-0 right-0 flex items-center justify-center md:justify-end px-4 md:px-10 space-x-4 md:space-x-6 z-20">
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={prevSlide}
          className="p-2 md:p-3 bg-white/20 rounded-full hover:bg-red-900 transition"
        >
          <ChevronLeft size={22} />
        </motion.button>

        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={slides[currentSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-xl w-40 h-56 md:w-64 md:h-[24rem] shadow-2xl"
          >
            <img
              src={slides[currentSlide].img}
              alt="Slide Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-red-800 rounded-xl pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={nextSlide}
          className="p-2 md:p-3 bg-white/20 rounded-full hover:bg-red-900 transition"
        >
          <ChevronRight size={22} />
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;
