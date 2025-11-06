import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const KandyTeample= () => {
  const navigate = useNavigate();
  
  // Destination details
  const destination = {
    id: 7,
  
  name: "Kandy Temple",
  description:
    "Sacred Buddhist temple housing the Tooth Relic of the Buddha in the royal palace.",
  longDescription:
    "The Temple of the Sacred Tooth Relic, known locally as Sri Dalada Maligawa, is one of the most sacred Buddhist temples in Sri Lanka. Located in the heart of Kandy, the temple enshrines a tooth relic of Lord Buddha, making it a deeply spiritual site for Buddhists around the world. The temple complex, with its golden-roofed shrine, intricate Kandyan architecture, and serene surroundings by Kandy Lake, stands as a symbol of Sri Lanka’s rich cultural and religious traditions. It also plays a central role in the annual Esala Perahera, a grand festival celebrated with traditional dances, drumming, and beautifully decorated elephants.",

  detailedInfo: [
    {
      title: "Historical and Religious Significance",
      content:
        "The Sacred Tooth Relic is believed to have been brought to Sri Lanka from India in the 4th century AD. Over the centuries, it became a symbol of sovereignty, with rulers claiming the right to govern only if they possessed the relic. The temple was built in the 16th century by King Wimaladharmasuriya I and remains one of the most important pilgrimage sites for Buddhists.",
      image:
        "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Architectural Splendor",
      content:
        "The temple complex showcases the grandeur of Kandyan architecture, featuring intricate wood carvings, golden decorations, and traditional frescoes. The main shrine is surrounded by beautiful courtyards, ponds, and smaller shrines. The golden canopy above the relic chamber adds to the temple’s majestic beauty and spiritual atmosphere.",
      image:
        "https://images.unsplash.com/photo-1575488652400-bb84c69c3b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Esala Perahera Festival",
      content:
        "One of Asia’s most spectacular festivals, the Kandy Esala Perahera is held annually in July or August to honor the Sacred Tooth Relic. The event features traditional Kandyan dancers, fire performances, drummers, and hundreds of elephants adorned with colorful garments, reflecting Sri Lanka’s deep-rooted cultural heritage.",
      image:
        "https://images.unsplash.com/photo-1625414075000-4161e2bc4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
  ],

  image:
    "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",

  gallery: [
    "https://images.unsplash.com/photo-1612438211389-cb4d1c1a8a2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1625414075000-4161e2bc4a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1575488652400-bb84c69c3b77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1603969172506-fd357c00d89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
  ],

  rating: 4.9,
  location: "Kandy, Central Province, Sri Lanka",
  bestTime: "December to April and July to August (Esala Perahera season)",
  activities: [
    "Temple Visit and Worship",
    "Cultural Exploration",
    "Attend Esala Perahera Festival",
    "Photography",
    "Explore Kandy Lake and nearby attractions",
  ],
  facts: [
    "Houses the sacred tooth relic of Lord Buddha",
    "Built in the 16th century by King Wimaladharmasuriya I",
    "Central to the annual Esala Perahera festival",
    "Symbol of sovereignty in ancient Sri Lanka",
    "UNESCO World Heritage Site since 1988",
  ],
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navbar */}
      <div className="pt-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center"
        data-aos="fade-in"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${destination.image}')`
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            data-aos="fade-down"
          >
            {destination.name}
          </h1>
          <p 
            className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {destination.description}
          </p>
          <div 
            className="flex justify-center items-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center bg-yellow-500/20 px-4 py-2 rounded-full">
              <span className="text-yellow-500 mr-2">★</span>
              <span className="font-bold">{destination.rating}/5.0</span>
            </div>
            <div className="bg-gray-700/50 px-4 py-2 rounded-full">
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section 
        className="py-16 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 
              className="text-4xl font-bold mb-6 text-yellow-500"
              data-aos="fade-up"
            >
              Discover {destination.name}
            </h2>
            <p 
              className="text-gray-300 text-lg mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {destination.longDescription}
            </p>
            <div 
              className="grid grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {destination.facts.map((fact, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-gray-800/50 p-3 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 50}
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{fact}</span>
                </div>
              ))}
            </div>
          </div>
          <div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section 
        className="py-16 px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Why Visit {destination.name}?
          </h2>
          
          <div className="space-y-20">
            {destination.detailedInfo.map((info, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 
                    className="text-3xl font-bold mb-6 text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {info.title}
                  </h3>
                  <p 
                    className="text-gray-300 text-lg mb-6 leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {info.content}
                  </p>
                  <button 
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Learn More
                  </button>
                </div>
                <div 
                  className={`rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
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

      {/* Gallery Section */}
      <section 
        className="py-16 px-6 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h2 
          className="text-4xl font-bold text-center mb-16 text-yellow-500"
          data-aos="fade-up"
        >
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.gallery.map((img, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <img 
                  src={img} 
                  alt={`${destination.name} ${index + 1}`}
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

      {/* Activities Section */}
      <section 
        className="py-16 px-6 bg-gray-900/50"
        data-aos="fade-up"
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-yellow-500"
            data-aos="fade-up"
          >
            Activities & Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destination.activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-yellow-500/10 transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition duration-300">
                  <div className="text-2xl">🌟</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{activity}</h3>
                <p className="text-gray-400">Experience the best of {destination.name} through {activity.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section 
        className="py-20 px-6"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-3xl p-12">
          <h2 
            className="text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready for Your Adventure?
          </h2>
          <p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Book your trip to {destination.name} with Smile Sri Lanka and experience the magic of this incredible destination.
          </p>
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button 
              className="bg-black hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Now
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition duration-300 backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KandyTeample;