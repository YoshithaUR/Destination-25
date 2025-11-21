import React, { useState, useEffect } from "react";

const GoogleReviews = () => {
  const reviews = [
    {
      text: "Absolutely amazing service! Highly professional team and well organized tours. The attention to detail made our trip unforgettable.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "Best travel experience ever! The guides were knowledgeable and friendly. Highly recommend!",
      author: "John D.",
      rating: 5
    },
    {
      text: "Exceptional value and incredible memories. Every moment was perfectly planned.",
      author: "Emma L.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div
      className="mt-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl"
      data-aos="fade-up"
      data-aos-delay="120"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-3xl font-bold flex items-center gap-3 mb-2">
            Google Reviews
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-yellow-400 text-2xl">
              ★★★★★
            </div>
            <span className="text-gray-300 font-semibold">5.0 Rating</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">250+</p>
          <p className="text-sm text-gray-400">Happy Travelers</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-lg mb-6">
        See what our travelers say about their unforgettable experiences with us!
      </p>

      {/* Reviews Carousel (show only 1 review at a time) */}
      <div className="overflow-hidden">
        <div className="transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="flex gap-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full bg-white/5 p-5 rounded-xl text-gray-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-sm mb-3 italic">"{review.text}"</p>
                <p className="text-xs text-gray-400 font-semibold">– {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6">
        <a
          href="YOUR_GOOGLE_REVIEW_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          View All Google Reviews
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;
