import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
 const [hoveredImage, setHoveredImage] = React.useState(null);
 
  const allDestinations = [
    {
      id: 1,
      name: "Sigiriya Rock Fortress",
      description: "Ancient rock fortress and palace ruin situated in the central Matale District.",
      image: "https://i.pinimg.com/736x/20/15/e9/2015e974ef15ba77ca9206d4166f764b.jpg",
      hoverImage: "/11.jpeg", 
      rating: 4.8,
      link: "/destinations/sigiriya-rock-fortress"
    },
    {
      id: 2,
      name: "Ella Rock",
      description: "Stunning hiking destination with panoramic views of the surrounding hills.",
      image: "https://i.pinimg.com/736x/21/5f/7a/215f7a6ca135ecafde0d31592a6c457d.jpg",
      hoverImage: "/ella.jpeg", 
      rating: 4.9,
      link: "/destinations/ella-rock"
    },
    {
      id: 3,
      name: "Yala National Park",
      description: "Famous wildlife reserve known for its leopard population and diverse fauna.",
      image: "https://i.pinimg.com/736x/29/a7/70/29a77078076cab3beb6bfccc073a0acc.jpg",
      hoverImage: "/yala.jpeg", 
      rating: 4.7,
      link: "/destinations/yala-national-park"
    },
    {
      id: 4,
      name: "Galle Fort",
      description: "UNESCO World Heritage site with well-preserved Dutch colonial architecture.",
      image: "https://i.pinimg.com/736x/42/6a/7c/426a7c600b8958994d16a273773a43b1.jpg",
      hoverImage: "/5.jpeg", 
      rating: 4.6,
      link: "/destinations/galle-fort"
    },
    {
      id: 5,
      name: "Adam's Peak",
      description: "Sacred mountain with a pilgrimage site at its summit, offering stunning sunrise views.",
      image: "https://i.pinimg.com/736x/4f/ca/f7/4fcaf7f3fa7753f8d381557712fe023c.jpg",
      hoverImage: "/adam.jpeg", 
      rating: 4.5,
      link: "/destinations/adams-peak"
    },
    {
      id: 6,
      name: "Mirissa Beach",
      description: "Popular beach destination known for whale watching and golden sand shores.",
      image: "https://i.pinimg.com/736x/86/1d/95/861d9595e4ca7d5b4cdb6e823c016f95.jpg",
      hoverImage: "/2.jpeg", 
      rating: 4.7,
      link: "/destinations/mirissa-beach"
    },
    {
      id: 7,
      name: "Kandy Temple",
      description: "Sacred Buddhist temple housing the Tooth Relic of the Buddha in the royal palace.",
      image: "https://i.pinimg.com/736x/dc/fc/9b/dcfc9bfc1fe8ad99432501bd20533bc7.jpg",
      hoverImage: "/kandyy.jpeg", 
      rating: 4.8,
      link: "/destinations/kandy-temple"
    },
    {
      id: 8,
      name: "Nuwara Eliya",
      description: "Picturesque hill country town known as 'Little England' for its colonial architecture.",
      image: "https://i.pinimg.com/1200x/71/2d/f7/712df76d0a1b7710ee416b9dcb00eaa1.jpg",
      hoverImage: "/eliya.jpeg", 
      rating: 4.4,
      link: "/destinations/nuwara-eliya"
    },
    {
      id: 9,
      name: "Dambulla Cave Temple",
      description: "Ancient cave temple complex with over 150 Buddha statues and stunning murals.",
      image: "https://i.pinimg.com/736x/29/87/ab/2987ab4ecc6d6fcde9063d882b44ea1f.jpg",
      hoverImage: "/dam.jpeg", 
      rating: 4.6,
      link: "/destinations/dambulla-cave-temple"
    },
    {
      id: 10,
      name: "Unawatuna Beach",
      description: "Beautiful crescent-shaped beach with coral reefs, perfect for swimming and snorkeling.",
      image: "https://i.pinimg.com/1200x/69/9b/f7/699bf70d68f5a93524346bb382da73e9.jpg",
      hoverImage: "/Unawatuna.jpeg", 
      rating: 4.5,
      link: "/destinations/unawatuna-beach"
    },
    {
      id: 11,
      name: "Horton Plains",
      description: "High-altitude plateau with diverse wildlife, endemic plants, and the famous World's End.",
      image: "https://i.pinimg.com/736x/28/de/9f/28de9f2b3257e65f9eaf62d42597606b.jpg",
      hoverImage: "/hortan.jpeg", 
      rating: 4.7,
      link: "/destinations/horton-plains"
    },
    {
      id: 12,
      name: "Anuradhapura",
      description: "Ancient city with well-preserved ruins of the first Sri Lankan capital and sacred Bodhi tree.",
      image: "https://i.pinimg.com/736x/bb/1c/d6/bb1cd672c9e59700a2ab78b6037bd0de.jpg",
      hoverImage: "/anu.jpeg", 
      rating: 4.6,
      link: "/destinations/anuradhapura"
    }
  ];

  // Our Services data
  const services = [
    {
      id: 1,
      title: "Mountain Adventures",
      description: "Experience the breathtaking beauty of Sri Lanka's mountain ranges with our guided hiking tours.",
      image: "m.jpeg"
    },
    {
      id: 2,
      title: "Beach Getaways",
      description: "Relax on pristine beaches and enjoy water sports in some of the most beautiful coastal areas.",
      image: "https://i.pinimg.com/736x/bd/11/a4/bd11a4f393343bcb5437c7d441794b50.jpg"
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description: "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image: "https://i.pinimg.com/736x/d0/fa/41/d0fa4158120c4e14449df5fadb529e2e.jpg"
    },
    {
      id: 4,
      title: "Cultural Tours",
      description: "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image: "https://i.pinimg.com/736x/7e/ab/41/7eab410bfce7c84db8dae4418a4806d7.jpg"
    },
    {
      id: 5,
      title: "City Exploration",
      description: "Discover the vibrant urban life, architecture, and nightlife of Sri Lanka's major cities.",
      image: "https://i.pinimg.com/736x/59/f7/ce/59f7ce96297ceb4903fbc6535557c6c4.jpg"
    },
    {
      id: 6,
      title: "Water Sports",
      description: "Dive into thrilling water activities including surfing, snorkeling, and boat trips in crystal clear waters.",
      image: "https://i.pinimg.com/736x/38/15/76/38157665dafc06ff8b479c6214645063.jpg"
    }
  ];

  // Get initial index from localStorage or default to 6 (Kandy Temple)
  const getInitialIndex = () => {
    if (typeof window !== 'undefined') {
      const lastClickedId = localStorage.getItem('lastClickedDestinationId');
      if (lastClickedId) {
        const index = allDestinations.findIndex(d => d.id === parseInt(lastClickedId));
        if (index !== -1) {
          return index;
        }
      }
    }
    return 6; // Default to Kandy Temple
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex());
  // responsive visible count: 1 on small, 2 on md, 4 on lg+
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [visibleDestinations, setVisibleDestinations] = useState(allDestinations.slice(getInitialIndex(), getInitialIndex() + getVisibleCount()));
  const [servicesIndex, setServicesIndex] = useState(0); // For services carousel
  const [visibleServices, setVisibleServices] = useState(services.slice(0, getVisibleCount()));
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [focusedService, setFocusedService] = useState(-1); // Track focused service card
  const navigate = useNavigate();

  // Handle destination click - save to localStorage
  const handleDestinationClick = (destination) => {
    localStorage.setItem('lastClickedDestinationId', destination.id);
    navigate(destination.link);
  };

  // Update visible destinations when index changes
  useEffect(() => {
    const newVisibleDestinations = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % allDestinations.length;
      newVisibleDestinations.push(allDestinations[index]);
    }
    setVisibleDestinations(newVisibleDestinations);
  }, [currentIndex, visibleCount]);

  // Update visibleCount on resize
  useEffect(() => {
    const handleResize = () => {
      const vc = getVisibleCount();
      setVisibleCount(vc);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ensure indices stay within bounds when visibleCount or data length changes
  useEffect(() => {
    setCurrentIndex((prev) => prev % allDestinations.length);
  }, [visibleCount, allDestinations.length]);

  useEffect(() => {
    setServicesIndex((prev) => prev % services.length);
  }, [visibleCount, services.length]);

  // Update visible services when servicesIndex or visibleCount changes
  useEffect(() => {
    const newVisible = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (servicesIndex + i) % services.length;
      newVisible.push(services[idx]);
    }
    setVisibleServices(newVisible);
  }, [servicesIndex, visibleCount, services]);

  // Handle keyboard navigation for service cards
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only handle arrow keys when not in a form input
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        
        if (services.length === 0) return;
        
        let newIndex = focusedService;
        
        // Calculate grid dimensions
        const cols = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const rows = Math.ceil(services.length / cols);
        
        // Calculate current row and column
        const currentRow = Math.floor(focusedService / cols);
        const currentCol = focusedService % cols;
        
        switch (e.key) {
          case 'ArrowRight':
            if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            } else if (currentCol < cols - 1 && focusedService < services.length - 1) {
              newIndex = focusedService + 1;
            }
            break;
            
          case 'ArrowLeft':
            if (focusedService > 0) {
              newIndex = focusedService - 1;
            }
            break;
            
          case 'ArrowDown':
            if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            } else if (currentRow < rows - 1) {
              newIndex = Math.min(focusedService + cols, services.length - 1);
            }
            break;
            
          case 'ArrowUp':
            if (focusedService >= cols) {
              newIndex = focusedService - cols;
            } else if (focusedService === -1) {
              newIndex = 0; // Start from first card if none focused
            }
            break;
        }
        
        if (newIndex !== focusedService) {
          setFocusedService(newIndex);
        }
      }
      
      // Handle Enter key to "click" the focused card
      if (e.key === 'Enter' && focusedService >= 0 && focusedService < services.length) {
        e.preventDefault();
        // In a real implementation, you might navigate to a service detail page
        console.log(`Service selected: ${services[focusedService].title}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedService, services]);

  // Reset focused service when services change
  useEffect(() => {
    setFocusedService(-1);
  }, [services]);

  const nextDestinations = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % allDestinations.length);
  };

  const prevDestinations = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - visibleCount + allDestinations.length) % allDestinations.length
    );
  };

  // Services carousel navigation (responsive step)
  const nextServices = () => {
    setServicesIndex((prevIndex) => (prevIndex + visibleCount) % services.length);
  };

  const prevServices = () => {
    setServicesIndex((prevIndex) => 
      (prevIndex - visibleCount + services.length) % services.length
    );
  };

  // Auto-move functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextDestinations();
      }, 3000); // Change slide every 3 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextDestinations();
        setIsAutoPlaying(false); // Pause autoplay when user interacts
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevDestinations();
        setIsAutoPlaying(false); // Pause autoplay when user interacts
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reset autoplay after a period of inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000); // Resume autoplay after 10 seconds of inactivity
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isAutoPlaying]);

 return (
    <div>
      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/f5/dc/ad/f5dcade41729a230001a5b1d03ead500.jpg')",
        }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 
            className="text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            ABOUT <span className="text-white-800">US</span>
          </h1>
          <p 
            className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to <span className="text-white-800 font-semibold">Ceylon Infinite Destinations</span> Your ultimate adventure travel partner! We're dreamers,
             wanderers, and storytellers united by one belief: the world is meant to be explored. 
            Join us as we turn ordinary trips into extraordinary tales
          </p>

          <p 
            className="text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
          Our mission is to guide you through Ceylon's untamed paradise—scaling emerald peaks that touch the clouds, 
          chasing roaring waterfalls, tracking wildlife through pristine jungles, and riding waves on sun-drenched shores.
           Adventure is calling.
          </p>

          <div 
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-red-900/20 transition">
              <h3 className="text-xl font-semibold text-white-800 mb-2">🌄 Our Vision</h3>
              <p>To make Ceylon the world's ultimate adventure destination while protecting the paradise that makes it extraordinary</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-red-900/20 transition">
              <h3 className="text-xl font-semibold text-white-800 mb-2">🧭 Our Mission</h3>
              <p>To guide you through Sri Lanka's hidden treasures—from cloud-kissed mountains to wild safaris—creating adventures that awaken your spirit.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-red-900/20 transition">
              <h3 className="text-xl font-semibold text-white-800 mb-2">🤝 Our Promise</h3>
              <p>Unforgettable journeys, eco-conscious travel, and authentic experiences that leave footprints only in your heart.</p>
            </div>
          </div>

          <Link to="/about-more">
            <button 
              className="mt-10 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-red-900 transition"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      
<section
  id="destination"
  className="py-16 bg-gradient-to-br from-gray-900 to-black"
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => setIsAutoPlaying(true)}
  data-aos="fade-up"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-4 text-white">
      POPULAR <span className="text-white-900">DESTINATIONS</span>
    </h2>
    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
      Explore the most breathtaking locations across Sri Lanka
    </p>

    <div className="relative">
      {/* Left Navigation Button */}
      <button
        onClick={() => {
          prevDestinations();
          setIsAutoPlaying(false);
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous destinations"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={() => {
          nextDestinations();
          setIsAutoPlaying(false);
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next destinations"
      >
        <ChevronRight size={24} />
      </button>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
        {visibleDestinations.map((destination, index) => (
          <div
  key={destination.id}
  className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-red-900/50"
  onClick={() => handleDestinationClick(destination)}
  data-aos="fade-up"
  data-aos-delay={index * 50}
>
  {/* Main Background */}
  <div 
    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 group-hover:opacity-30"
    style={{ 
      backgroundImage: `url(${destination.image})`,
    }}
  ></div>
  {/* Hover Image AFTER EFFECTS */}
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300"
    style={{
      backgroundImage: `url(${destination.hoverImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1
    }}
  ></div>
            
            
            {/* Gradient Overlay with Blue on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:bg-blue-900 transition-all duration-500"></div>
            
            {/* Yellow Border on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-900 rounded-2xl transition-all duration-500"></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </div>
            

            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-bold z-10 transform transition-all duration-300 group-hover:scale-110">
              ★ {destination.rating}
            </div>

            
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              {/* Title with Slide-up Animation */}
              <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                {destination.name}
              </h3>
              
              {/* Description with Fade-in Effect */}
              <p className="text-gray-300 text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 group-hover:mb-4">
                {destination.description}
              </p>
              
              {/* Explore Button - Appears on Hover */}
              
            </div>

            {/* Corner Accent - Decorative Element */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-red-900/0 border-r-[40px] border-r-transparent group-hover:border-t-red-900/80 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* SERVICES SECTION */}
<section 
  className="py-16 bg-gradient-to-br from-gray-800 to-gray-900"
  data-aos="fade-up"
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-4 text-white">
      OUR <span className="text-white-500">SERVICES</span>
    </h2>
    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
      Discover our range of exceptional travel services designed for your perfect Sri Lankan adventure
    </p>

    <div className="relative">
      {/* Left Navigation Button */}
      <button
        onClick={() => {
          prevServices();
        }}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous services"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Navigation Button */}
      <button
        onClick={() => {
          nextServices();
        }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next services"
      >
        <ChevronRight size={24} />
      </button>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
        {visibleServices.map((service, i) => (
          <div
            key={service.id}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/50"
            tabIndex={0}
            onFocus={() => setFocusedService(i)}
            onBlur={() => setFocusedService(-1)}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${service.image})`,
              }}
            ></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Yellow Border on Hover */}
            <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 ${
              focusedService === i 
                ? "border-red-500" 
                : "border-transparent group-hover:border-red-500"
            }`}></div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
 
              
              {/* Title with Slide-up Animation */}
              <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-y-[-4px] lg:truncate">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {service.description}
              </p>
              
              {/* Button */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};
export default About;