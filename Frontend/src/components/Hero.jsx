import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, img: "https://i.pinimg.com/1200x/44/c3/c3/44c3c36798711d7f91f1eec2e1d09ba0.jpg" },
  { id: 2, img: "https://i.pinimg.com/736x/7b/97/1c/7b971c3754a345667c8105e902ef305a.jpg" },
  { id: 3, img: "https://i.pinimg.com/736x/a5/47/de/a547de5c2c5de7e2e527861d2cf04706.jpg" },
  { id: 4, img: "https://i.pinimg.com/736x/ff/ed/bd/ffedbd1c6de62f65fcd82bee539aa289.jpg" },
  { id: 5, img: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg" },
];

const backgroundImages = [
  "https://images.unsplash.com/photo-1598152642931-bf0e8635fdf8?auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1170&q=80",
  "https://images.pexels.com/photos/16508231/pexels-photo-16508231.jpeg",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1170&q=80",
  "https://i.pinimg.com/736x/74/f7/5e/74f75eb6e231c942012bbdb6466dc861.jpg",
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

  // Auto-change slide every 5s (background changes automatically with it)
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  // Variants for slide motion
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.7, 
        ease: [0.43, 0.13, 0.23, 0.96],
        opacity: { duration: 0.5 }
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      transition: { 
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96]
      },
    }),
  };

  // Fade transition for background with directional slide
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

      {/* Text Content */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl ml-16"
      >
        <p className="uppercase text-sm tracking-widest text-gray-300">
          Embark On The Journey Of A Lifetime
        </p>
        <h1 className="text-5xl font-bold mt-3 leading-tight">
          TRAVEL FAR, <br />
          <span className="text-yellow-400">FIND YOURSELF</span>
        </h1>
        <p className="text-gray-300 mt-4 text-sm">
          Explore the world's most stunning destinations across mountains,
          jungles, deserts and oceans. Experience unforgettable adventures and
          stories to cherish forever.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          START YOUR ADVENTURE
        </motion.button>
      </motion.div>

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
              className="relative overflow-hidden rounded-2xl w-80 h-[32rem] shadow-2xl"
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