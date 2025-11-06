import React from "react";

const PremiumLuxury = () => {
  const packageData = {
    id: 3,
    name: "Premium Luxury",
    description: "Ultimate experience with top-tier services and exclusive access",
    longDescription: "Our Premium Luxury package offers the ultimate Sri Lankan experience with 5-star accommodations, exclusive access to premium attractions, and personalized services. This package is designed for discerning travelers who seek the finest in comfort, service, and unique experiences.",
    detailedInfo: [
      {
        title: "Luxury Accommodations",
        content: "Indulge in the finest 5-star luxury hotels and resorts that exemplify elegance and sophistication. Each property offers world-class amenities including spas, fine dining restaurants, infinity pools, and impeccable service. Rooms feature premium furnishings, panoramic views, and all modern conveniences.",
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Exclusive Experiences",
        content: "Gain access to exclusive experiences unavailable to regular tourists, including private tours of historical sites, VIP treatment at attractions, and special cultural performances. Enjoy personalized itineraries crafted by our luxury travel specialists to match your interests.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Personalized Services",
        content: "Benefit from dedicated personal concierge services throughout your stay. Our luxury travel specialists handle all arrangements, from restaurant reservations to special requests. Enjoy 24/7 assistance from multilingual butlers and access to our network of premium partners.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    image: "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505228395891-9a51e7f86e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    price: "$2,799",
    duration: "10 days",
    rating: 4.9,
    bestTime: "December to March",
    inclusions: [
      "5-star luxury hotels for 9 nights",
      "All meals included",
      "VIP access to attractions",
      "Private chauffeur service",
      "Personal tour guide",
      "Spa & wellness treatments",
      "Airport VIP transfers",
      "24/7 concierge service",
      "Welcome champagne",
      "Special cultural performances",
      "Luxury gift package"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities over 15%",
      "Optional premium activities"
    ],
    facts: [
      "5-star luxury accommodations",
      "All meals included",
      "VIP access to attractions",
      "Personal concierge service",
      "Spa & wellness treatments"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${packageData.image}')`
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">{packageData.name}</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8">{packageData.description}</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center bg-blue-500/20 px-4 py-2 rounded-full">
              <span className="text-blue-400 mr-2">★</span>
              <span className="font-bold">{packageData.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{packageData.duration}</span>
            </div>
            <div className="bg-blue-500/20 px-4 py-2 rounded-full">
              <span className="text-blue-400 font-bold">{packageData.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-400">Discover {packageData.name}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {packageData.longDescription}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {packageData.facts.map((fact, index) => (
                <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={packageData.image} 
              alt={packageData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">What's Included in {packageData.name}</h2>
          
          <div className="space-y-20">
            {packageData.detailedInfo.map((info, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl font-bold mb-6 text-white">{info.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {info.content}
                  </p>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={info.image} 
                    alt={info.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Package Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400">What's Included</h3>
            <ul className="space-y-3">
              {packageData.inclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-400">What's Not Included</h3>
            <ul className="space-y-3">
              {packageData.exclusions.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 bg-gray-900/50">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageData.gallery.map((img, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <img 
                  src={img} 
                  alt={`${packageData.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">View Image</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Luxury Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your {packageData.name} package with Smile Sri Lanka and experience the ultimate Sri Lankan luxury.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
              Book Now - {packageData.price}
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumLuxury;