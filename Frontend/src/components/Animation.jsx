import React, { useEffect, useState } from "react";
import videoBg from "../assest/ani.mp4"; 

const Animation = ({ onFinish }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Step 1: Show text after 3 seconds
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 3000);

    // Step 2: Redirect to Hero after 6 seconds
    const finishTimer = setTimeout(() => {
      if (typeof onFinish === "function") {
        onFinish();
      }
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-110 contrast-110 saturate-120"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

      {/* Animated Text (only after 3s) */}
      {showText && (
        <>
          <h1 className="relative z-10 text-7xl md:text-9xl font-extrabold tracking-wider text-white uppercase animate-fadeInUp">
            Sri Lanka
          </h1>

          <p className="absolute bottom-20 text-gray-200 text-lg tracking-wide animate-fadeIn delay-500">
            The Pearl of the Indian Ocean
          </p>
        </>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 2s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 2.5s ease-in forwards;
        }
      `}</style>
    </section>
  );
};

export default Animation;
