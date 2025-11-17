import React, { useEffect, useState } from "react";
import "./css/gallery.css";
import axios from "axios";
import videos from "../assest/Video/video.js";

const places = [
  { name: "Kandy", video: videos.kandy },
  { name: "Sigiriya", video: videos.sigiriye },
  { name: "Ella", video: videos.ella },
  { name: "Galle", video: videos.galle },
  { name: "Nuwara Eliya", video: videos.nuEliya },
];

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if user is logged in
  
  // Form states
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });

  // Fetch gallery images from backend
  useEffect(() => {
    axios.get("http://localhost:5000/gallery").then((res) => setImages(res.data));
    
    // Check if user is already logged in (from localStorage)
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Replace with your actual login API endpoint
      const res = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password
      });
      
      // If login successful
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setShowAuthModal(false);
      alert("Login successful!");
      
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    try {
      // Replace with your actual registration API endpoint
      const res = await axios.post("http://localhost:5000/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      // If registration successful, auto-login
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setShowAuthModal(false);
      alert("Registration successful!");
      
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Registration failed. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
  };

  // Handle upload button click
  const handleUploadClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
    }
  };

  // Upload handler (only works if logged in)
  const handleUpload = async (e) => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }

    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploading(true);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImages((prev) => [res.data.imageUrl, ...prev]);
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="gallery" data-aos="fade-in" className="bg-black text-white min-h-screen overflow-hidden">
      {/* ===== LOGIN/REGISTRATION MODAL ===== */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 max-w-md w-full relative border border-red-900/20 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Toggle between Login/Register */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 font-semibold transition-all ${
                  isLogin
                    ? "text-red-800 border-b-2 border-red-800"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 font-semibold transition-all ${
                  !isLogin
                    ? "text-red-800 border-b-2 border-red-800"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Register
              </button>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-red-800">
                  Welcome Back!
                </h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-red-900 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Login
                </button>
              </form>
            ) : (
              /* Registration Form */
              <form onSubmit={handleRegister} className="space-y-4">
                <h2 className="text-2xl font-bold text-center mb-6 text-red-800">
                  Create Account
                </h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-800 text-white"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-red-900 text-black font-bold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ===== VIDEOS SECTION ===== */}
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <h1
          className="text-5xl md:text-6xl font-bold text-red-800 mb-10 tracking-wider"
          data-aos="fade-down"
        >
          TRAVEL
        </h1>

        <div className="slider-container">
          <div className="slider">
            {places.concat(places).map((place, index) => (
              <div
                key={index}
                className="slide"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <video
                  className="rounded-xl w-full h-full object-cover"
                  src={place.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                <div className="caption">{place.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-10 text-sm text-gray-300 animate-pulse font-handwriting"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Pearl Of Indian Ocean
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

          .font-handwriting {
            font-family: 'Great Vibes', cursive;
            font-size: 1.8rem;
            letter-spacing: 1px;
            color: #f5e6ca;
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
          }
        `}</style>
      </div>

      {/* ===== IMAGE UPLOAD SECTION ===== */}
      <div
        id="memo"
        className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center py-12 px-6 overflow-hidden"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 via-orange-500 to-yellow-300 animate-pulse tracking-wider drop-shadow-[0_0_15px_rgba(255,255,100,0.3)]">
            Travel Gallery
          </h1>
          <p 
            className="text-gray-300 text-center max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Share your unforgettable moments with us and relive the magic of your Sri Lankan adventure.
          </p>

          {/* Show logout button if logged in */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="mb-4 text-sm text-gray-400 hover:text-red-800 transition"
            >
              Logout
            </button>
          )}

          {/* Upload Button */}
          {isLoggedIn ? (
            <label className="bg-white text-black px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-red-900 transition mb-10 inline-block">
              {uploading ? "Uploading..." : "Upload Your Image"}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
          ) : (
            <button
              onClick={handleUploadClick}
              className="bg-white text-black px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-red-900 transition mb-10 inline-block"
            >
              Upload Your Image
            </button>
          )}

          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
              {images.map((url, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl border border-gray-700"
                >
                  <img
                    src={url}
                    alt="Uploaded"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 mt-6">No images uploaded yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;