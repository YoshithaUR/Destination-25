import React from "react";

const ReadMoreAbout = () => {
  return (
    <section className="w-full bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center flex items-center justify-center relative h-screen w-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621847473222-d85c022cbf07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1325')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Discover <span className="text-yellow-400">Sri Lanka</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-200">
            A paradise island where ancient culture, breathtaking landscapes, and
            golden beaches meet — Smile Lanka invites you to explore the soul of
            adventure.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          Our Story
        </h2>
        <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-8">
          Born from a love for exploration and a deep connection to the island’s
          natural beauty, Smile Lanka was founded to showcase the true spirit of
          Sri Lanka. From misty mountain trails to vibrant coastal towns, we craft
          journeys that touch your heart and awaken your adventurous soul.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Authentic Experiences",
              text: "We connect travelers with real Sri Lankan life — from local food tours to traditional village stays.",
              img: "https://i.pinimg.com/736x/c3/89/6d/c3896d054ccc22c7a94b1fb2a4e9649a.jpg",
            },
            {
              title: "Adventure & Nature",
              text: "Whether it’s hiking through Ella’s trails or diving in Hikkaduwa, every trip is a new adventure.",
              img: "https://i.pinimg.com/736x/93/ba/50/93ba50c6e8e4606cfd76880e2ae4ef36.jpg",
            },
            {
              title: "Sustainability First",
              text: "We promote eco-tourism by supporting local communities and protecting the island’s ecosystems.",
              img: "https://i.pinimg.com/1200x/0d/83/4f/0d834ffc5fbf368b4558f3aa4bcf9db5.jpg",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative bg-yellow-400 py-20 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">
          “Travel not to escape life, but for life not to escape you.”
        </h2>
        <p className="text-lg font-medium">— Smile Lanka Team</p>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {
              name: "Kavindu Perera",
              role: "Adventure Guide",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Dilani Fernando",
              role: "Cultural Expert",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Ruwan Silva",
              role: "Nature Specialist",
              img: "https://randomuser.me/api/portraits/men/48.jpg",
            },
            {
              name: "Nimali Jayasuriya",
              role: "Travel Planner",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-yellow-400/10 transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-400"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-black/90 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Explore Sri Lanka with Us?
        </h2>
        <p className="text-gray-400 mb-8">
          Let us create your next unforgettable adventure — tailored just for you.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default ReadMoreAbout;
