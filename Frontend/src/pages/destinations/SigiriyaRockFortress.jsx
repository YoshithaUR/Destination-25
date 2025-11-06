import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const SigiriyaRockFortress = () => {
  const navigate = useNavigate();
  
  // Destination details
  const destination = {
    id: 1,
    name: "Sigiriya Rock Fortress",
    description: "Ancient rock fortress and palace ruin situated in the central Matale District.",
    longDescription: "Sigiriya or Sinhagiri (Lion Rock) is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.",
    detailedInfo: [
      {
        title: "Historical Significance",
        content: "Built by King Kashyapa I in the 5th century AD, Sigiriya served as the capital of his kingdom for 18 years. The site is famous for its ancient frescoes dating back to the 5th century, which are among the finest surviving examples of ancient Sri Lankan art.",
        image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "Architectural Marvel",
        content: "The fortress features advanced engineering techniques for its time, including a sophisticated water garden with fountains and channels. The Mirror Wall, made of highly polished white plaster, reflects like a mirror when polished. The Lion Gate, though now只剩石狮子的爪子，once featured a massive lion sculpture.",
        image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      {
        title: "UNESCO World Heritage Site",
        content: "Sigiriya was designated a UNESCO World Heritage Site in 1982. It is recognized for both its cultural and natural significance, representing a masterpiece of human ingenuity in an urban planning context.",
        image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      }
    ],
    image: "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1598532109210-4ef0c957b5d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    rating: 4.8,
    location: "Matale District, Central Province",
    bestTime: "December to March",
    activities: ["Hiking", "Historical Tours", "Photography", "Rock Climbing"],
    facts: [
      "Over 1,500 years old",
      "UNESCO World Heritage Site since 1982",
      "Home to ancient frescoes",
      "Former royal palace",
      "Advanced hydraulic engineering"
    ]
  };

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

export default SigiriyaRockFortress;