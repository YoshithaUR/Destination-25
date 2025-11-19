import React from "react";

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
            <span className="text-4xl"></span>
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

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white/5 p-5 rounded-xl text-gray-200 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
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

      {/* CTA Button */}
      <div className="flex justify-center">
        <a
          href="YOUR_GOOGLE_REVIEW_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          View All Google Reviews
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;