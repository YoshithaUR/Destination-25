import React from "react";

const CardsSection = () => {
  const [hoveredImage, setHoveredImage] = React.useState(null);

  // Mobile slider state
  const [mobileIndex, setMobileIndex] = React.useState(0);

  const nextCard = () => {
    setMobileIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setMobileIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const cards = [
    {
      id: 1,
      title: "Mountain Adventures",
      description:
        "Experience breathtaking hikes through misty mountains and discover hidden waterfalls.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      hoverImage: "/1.jpeg",
      delay: 100,
    },
    {
      id: 2,
      title: "Beach Getaways",
      description:
        "Relax on pristine beaches with crystal clear waters and golden sand shores.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      hoverImage: "/2.jpeg",
      delay: 200,
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description:
        "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      hoverImage: "/3.jpeg",
      delay: 300,
    },
    {
      id: 4,
      title: "Cultural Tours",
      description:
        "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image:
        "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
      hoverImage: "/4.jpeg",
      delay: 400,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Full Page Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: hoveredImage ? `url(${hoveredImage})` : "none",
          opacity: hoveredImage ? 1.0 : 0,
        }}
      ></div>

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Sri Lanka  4K Cinematic Travel Film - Lalit Choudhary Films (1080p, h264).mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Blue overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          WHY CHOOSE <span className="text-white-900">Ceylon Destination</span>?
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          We offer unforgettable experiences with our expertly crafted adventure
          packages.
        </p>

        {/* DESKTOP / TABLET GRID VIEW */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredImage(card.image)}
              onMouseLeave={() => setHoveredImage(null)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-red-900/50"
              style={{ animationDelay: `${card.delay}ms` }}
            >
              {/* Original Card Code */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 group-hover:opacity-30"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:bg-blue-900 transition-all duration-500"></div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-900 rounded-2xl transition-all duration-500"></div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${card.hoverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-100 max-h-32 transition-all duration-500 mb-4">
                  {card.description}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-t-red-900/0 border-r-[40px] border-r-transparent group-hover:border-t-red-900/80 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW — SINGLE CARD CAROUSEL */}
        <div className="md:hidden relative w-full flex items-center justify-center">
         

          {/* MOBILE SINGLE CARD */}
          <div className="w-[90%]">
            {(() => {
              const card = cards[mobileIndex];
              return (
                <div
                  key={card.id}
                  className="group relative h-80 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm opacity-100 max-h-32 transition-all duration-500 mb-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
 {/* LEFT ARROW */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full"
          >
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
          </button>
          {/* RIGHT ARROW */}
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full"
          >
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
