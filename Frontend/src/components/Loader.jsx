import React from 'react';

const Loader = ({ isLoading = true }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-opacity-90 backdrop-blur-md flex items-center justify-center z-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-900 to-orange-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-ping animation-delay-5000"></div>
      </div>
      
      <div className="flex flex-col items-center relative z-10">
        {/* Enhanced spinner with company branding */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer ring with gradient */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-900 animate-spin-slow"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-r-blue-400 animate-spin-reverse animation-delay-200"></div>
          
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-orange-500 animate-spin animation-delay-400"></div>
          
          {/* Center logo with pulse animation */}
         <div className="absolute inset-0 flex items-center justify-center">
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-900 to-orange-500 flex items-center justify-center animate-pulse overflow-hidden border-2"
       style={{ borderColor: "#82233e" }}>
    <img 
      src="/Untitled design (2).png"
      alt="Logo"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>


        </div>
        
        {/* Company name and loading text with fade-in animation */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-wider">Ceylon Infinite Destinations</h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-300 text-base">Preparing your journey</span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-100"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-300"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
};

export default Loader;