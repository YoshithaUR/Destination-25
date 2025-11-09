import React from "react";
import { Link } from "react-scroll";

const CardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Mountain Adventures",
      description: "Experience breathtaking hikes through misty mountains and discover hidden waterfalls.",
      image: "/1.jpeg",
      delay: 100
    },
    {
      id: 2,
      title: "Beach Getaways",
      description: "Relax on pristine beaches with crystal clear waters and golden sand shores.",
      image: "/2.jpeg",
      delay: 200
    },
    {
      id: 3,
      title: "Wildlife Safaris",
      description: "Embark on thrilling safaris to see elephants, leopards, and other wildlife in their natural habitats.",
      image: "/3.jpeg",
      delay: 300
    },
    {
      id: 4,
      title: "Cultural Tours",
      description: "Discover ancient temples, historical sites, and experience the rich culture of Sri Lanka.",
      image: "/4.jpeg",
      delay: 400
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          className="text-4xl font-bold text-center mb-4 text-white"
          data-aos="fade-up"
        >
          WHY CHOOSE <span className="text-yellow-500">Ceylon Destination</span>?
        </h2>
        <p 
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We offer unforgettable experiences with our expertly crafted adventure packages.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl overflow-hidden shadow-xl bg-gray-800 hover:bg-gray-700 transition-all group relative h-64"
              data-aos="fade-up"
              data-aos-delay={card.delay}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-4">
                <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                <p className="text-gray-200 text-xs">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;