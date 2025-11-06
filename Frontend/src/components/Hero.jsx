import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, img: "https://i.pinimg.com/1200x/44/c3/c3/44c3c36798711d7f91f1eec2e1d09ba0.jpg" },
  { id: 2, img: "https://i.pinimg.com/736x/7b/97/1c/7b971c3754a345667c8105e902ef305a.jpg" },
  { id: 3, img: "https://i.pinimg.com/736x/a5/47/de/a547de5c2c5de7e2e527861d2cf04706.jpg" },
  { id: 4, img: "https://i.pinimg.com/736x/ff/ed/bd/ffedbd1c6de62f65fcd82bee539aa289.jpg" },
  { id: 5, img: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg" },
];

// Background images that correspond to the carousel images
const backgroundImages = [
  "https://images.unsplash.com/photo-1598152642931-bf0e8635fdf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.pexels.com/photos/16508231/pexels-photo-16508231.jpeg",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://i.pinimg.com/736x/74/f7/5e/74f75eb6e231c942012bbdb6466dc861.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slideDirection, setSlideDirection] = useState("next"); // Track slide direction for animation

  const nextSlide = useCallback(() => {
    setSlideDirection("next");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setSlideDirection("prev");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Auto-move functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Get the two images to display (current and next)
  const getVisibleSlides = () => {
    const nextIndex = (current + 1) % slides.length;
    return [slides[current], slides[nextIndex]];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-start overflow-hidden"
    >
      {/* Background with smooth transition */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
        <img
          src={backgroundImages[current]}
          alt="hero bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl ml-16">
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
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          START YOUR ADVENTURE
        </button>
      </div>

      {/* Slider */}
      <div className="absolute bottom-20 right-10 flex items-center space-x-6">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex space-x-4">
          {visibleSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`
                relative overflow-hidden rounded-xl transition-all duration-500 transform-gpu
                ${index === 0 ? 'w-32 h-64 scale-110 z-10' : 'w-28 h-56 opacity-80'}
              `}
              style={{
                transformStyle: 'preserve-3d',
                transform: index === 0 ? 'rotateY(0deg) scale(1.1)' : 'rotateY(10deg) scale(0.9)',
                boxShadow: index === 0
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                  : '0 10px 20px -5px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
              }}
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{
                  transform: index === 0 ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              {index === 0 && (
                <div
                  className="absolute inset-0 border-2 border-yellow-400 rounded-xl pointer-events-none"
                  style={{
                    transform: 'translateZ(20px)',
                    boxShadow: '0 0 20px rgba(255, 217, 0, 0.5)',
                  }}
                />
              )}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-white text-xs font-semibold">
                  {slide.id}/5
                </span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 rounded-full hover:bg-yellow-400 transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <span className="text-sm ml-2 text-white">
          {current + 1} / {slides.length}
        </span>
      </div>
    </section>
  );
  };
export default Hero;

