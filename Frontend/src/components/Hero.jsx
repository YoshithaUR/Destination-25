import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "Ravana Falls In Ella, Sri Lanka - Complete Guide (2025).jpeg",
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
    img: "YALA NATIONAL PARK 10 Places Not to Miss in….jpeg",
    title: "Yala National Park(Wildlife Adventures)",
    subtitle: "nto the wild heart of Sri Lanka",
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

  // Next & previous slide handlers
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setCurrentBg((prev) => (prev === backgroundImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setCurrentBg((prev) => (prev === 0 ? backgroundImages.length - 1 : prev - 1));
  }, []);

  // Auto-change slide every 5s
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // Motion variants
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
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-start overflow-hidden"
    >
      {/* Background slide animation */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Dynamic Text Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl ml-16"
        >
          <p className="uppercase text-sm tracking-widest text-gray-300">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-5xl font-bold mt-3 leading-tight text-white">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-300 mt-4 text-sm">
            {slides[currentSlide].description}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            EXPLORE MORE
          </motion.button>
        </motion.div>
      </AnimatePresence>

      {/* Slides Section */}
      <div className="absolute bottom-16 right-10 flex items-center space-x-6 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={prevSlide}
          className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition-colors duration-300"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="flex space-x-6">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={slides[currentSlide].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl w-64 h-[24rem] shadow-2xl"
            >
              <img
                src={slides[currentSlide].img}
                alt={`Slide ${slides[currentSlide].id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-2xl pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={nextSlide}
          className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition-colors duration-300"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
