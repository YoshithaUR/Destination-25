import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const handleCreateTrip = () => {
    navigate("/create-trip");
  };

  const packages = [
    {
      id: 1,
      name: "4 Nights 5 Days Tour",
      description: "A short journey covering key cultural and scenic highlights",
      price: "Starting from $650",
      duration: "5 days",
      image: "",
      features: [
        "Colombo city tour",
        "Sigiriya Rock Fortress visit",
        "Dambulla Cave Temple",
        "Kandy city tour",
        "Private transport and guide",
        "Airport transfers"
      ],
      link: "4n-5d-tour"
    },
    {
      id: 2,
      name: "6 Nights 7 Days Tour",
      description: "A balanced journey through cultural sites, hill country, and nature",
      price: "Starting from $950",
      duration: "7 days",
      image: "",
      features: [
        "Colombo and Kandy visits",
        "Tea factory and plantation tour",
        "Nuwara Eliya sightseeing",
        "Ella attractions",
        "Private transport",
        "Daily breakfast"
      ],
      popular: true,
      link: "6n-7d-tour"
    },
    {
      id: 3,
      name: "13 Nights 14 Days Complete Tour",
      description: "A full exploration of Sri Lanka's cultural, natural, and coastal attractions",
      price: "Starting from $1,950",
      duration: "14 days",
      image: "",
      features: [
        "Colombo city tour",
        "Sigiriya and Polonnaruwa",
        "Kandy Temple of the Tooth",
        "Nuwara Eliya and Horton Plains",
        "Ella sightseeing",
        "Yala safari",
        "Galle Fort and Bentota beaches",
        "Airport transfers"
      ],
      link: "14-day-complete-tour"
    },
    {
      id: 4,
      name: "Special 6 Nights 7 Days Package",
      description: "A curated experience combining heritage, nature, and comfort",
      price: "Starting from $1,150",
      duration: "7 days",
      image: "",
      features: [
        "Kandy and hill country highlights",
        "Cultural visits and temples",
        "Scenic landscapes and waterfalls",
        "Coastal relaxation",
        "Private transport",
        "24/7 support"
      ],
      link: "special-6n-7d-package"
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" data-aos="fade-down">
          Our <span className="text-red-500">Adventure</span> Packages
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
          Discover our carefully crafted adventure packages designed to give you the ultimate Sri Lankan experience.
        </p>

        {/* Create Your Own Trip Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleCreateTrip}
            className="group relative px-8 py-4 bg-white text-red-600 font-bold rounded-full text-lg border-2 border-red-600 shadow-lg hover:bg-red-600 hover:text-white hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <span>Create Your Own Trip</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>

        {/* Package Cards - WITH CREATIVE ANIMATIONS (SINGLE RED COLOR) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Link
              to={`/packages/${pkg.link}`}
              key={pkg.id}
              className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-red-500/50 bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-2 font-bold text-sm z-20 shadow-lg">
                  ⭐ MOST POPULAR ⭐
                </div>
              )}

              {/* Background Image with Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                ></div>
                
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-red-600 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold z-10 transform transition-all duration-300 group-hover:scale-110 shadow-lg">
                  {pkg.duration}
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </div>
              </div>

              {/* Red Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500 rounded-2xl transition-all duration-500 pointer-events-none"></div>

              {/* Content Section */}
              <div className={`relative bg-gray-800 p-6 ${pkg.popular ? 'pt-8' : ''}`}>
                
                {/* Title with Slide-up Animation */}
                <h3 className="text-2xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-y-[-4px]">
                  {pkg.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-red-500 font-bold text-xl">
                    {pkg.price}
                  </span>
                </div>

                {/* Features - Always Visible but Compact */}
                <ul className="mb-6 space-y-2">
                  {pkg.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg
                        className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 3 && (
                    <li className="text-sm text-red-400 font-semibold ml-7">
                      +{pkg.features.length - 3} more features
                    </li>
                  )}
                </ul>

                {/* Button */}
                <button className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  View Details →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;