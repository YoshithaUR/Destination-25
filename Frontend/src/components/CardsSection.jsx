import React from "react";

const CardsSection = () => {
  const [hoveredImage, setHoveredImage] = React.useState(null);

  const cards = [
    {
      id: 1,
      title: "Mountain Adventures",
      description: "Experience breathtaking hikes through misty mountains and discover hidden waterfalls.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      delay: 100
    },
    {
      id: 2,
      title: "Beach Getaways",
      description: "Relax on pristine beaches with crystal clear waters and golden sand shores.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      delay: 200
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description: "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      delay: 300
    },
    {
      id: 4,
      title: "Cultural Tours",
      description: "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      delay: 400
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-900 to-black min-h-screen relative overflow-hidden transition-all duration-700"
    >
      {/* Full Page Background Image - Changes based on hovered card */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: hoveredImage ? `url(${hoveredImage})` : 'none',
          opacity: hoveredImage ? 1.0 : 0
        }}
      ></div>
      
      {/* Blue overlay to create dark blue effect */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          WHY CHOOSE <span className="text-yellow-500">Ceylon Destination</span>?
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          We offer unforgettable experiences with our expertly crafted adventure packages.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredImage(card.image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-yellow-500/50"
              style={{
                animationDelay: `${card.delay}ms`
              }}
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 group-hover:opacity-30"
                style={{ 
                  backgroundImage: `url(${card.image})`,
                }}
              ></div>
              
              {/* Dark Blue Overlay - Shows Full on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:bg-blue-900 transition-all duration-500"></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 rounded-2xl transition-all duration-500"></div>
              
              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                {/* Title with Slide-up Animation */}
                <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  {card.title}
                </h3>
                
                {/* Description with Fade-in Effect */}
                <p className="text-gray-300 text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 group-hover:mb-4">
                  {card.description}
                </p>
                
                {/* Call-to-Action Button - Appears on Hover */}
                <button className="mt-2 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-yellow-400">
                  Explore Now →
                </button>
              </div>
              
              {/* Corner Accent - Decorative Element */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-yellow-500/0 border-r-[40px] border-r-transparent group-hover:border-t-yellow-500/80 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;