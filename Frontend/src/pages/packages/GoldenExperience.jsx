import React from "react";

const GoldenExperience = () => {
  const packageData = {
    id: 2,
    name: "Golden Experience",
    description: "Ideal for travelers wanting a balanced mix of comfort and adventure",
    longDescription: "Our Golden Experience package offers the perfect balance between comfort and adventure. With 4-star accommodations, daily meals, and premium experiences, this package provides an excellent introduction to Sri Lanka's diverse attractions while ensuring a comfortable stay.",
    detailedInfo: [
      {
        title: "Premium Accommodations",
        content: "Stay in handpicked 4-star hotels that blend modern comfort with local charm. Each property offers excellent service, comfortable rooms with premium amenities, and convenient locations near major attractions. Enjoy daily breakfast and dinner at quality restaurants.",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Comprehensive Tours",
        content: "Experience Sri Lanka's highlights with our expertly planned tours that cover cultural sites, scenic landscapes, and wildlife reserves. Our professional guides provide in-depth knowledge about each destination, ensuring you gain a deeper understanding of the country's rich heritage.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Luxury Transportation",
        content: "Travel in comfort with our premium fleet of air-conditioned vehicles. Our experienced chauffeurs ensure smooth transfers between destinations, and all ground transportation is included in the package. Enjoy the scenic routes with panoramic windows for optimal views.",
        image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    price: "$1,499",
    duration: "7 days",
    rating: 4.7,
    bestTime: "December to March",
    inclusions: [
      "4-star accommodation for 6 nights",
      "Daily breakfast & dinner",
      "All major attractions visit",
      "Private transportation",
      "Professional tour guide",
      "Airport transfers",
      "Welcome dinner",
      "Cultural show tickets"
    ],
    exclusions: [
      "International flights",
      "Lunch",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Optional activities"
    ],
    facts: [
      "Balanced comfort and adventure",
      "4-star hotel accommodations",
      "Daily meals included",
      "Professional tour guide",
      "Private transportation"
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
            <div className="flex items-center bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="font-bold">{packageData.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{packageData.duration}</span>
            </div>
            <div className="bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-yellow-500 font-bold">{packageData.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-yellow-500">Discover {packageData.name}</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {packageData.longDescription}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {packageData.facts.map((fact, index) => (
                <div key={index} className="flex items-center bg-gray-800/50 p-3 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">What's Included in {packageData.name}</h2>
          
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
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">Package Details</h2>
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
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500">Photo Gallery</h2>
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
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your {packageData.name} package with Smile Sri Lanka and experience the magic of Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1">
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

export default GoldenExperience;