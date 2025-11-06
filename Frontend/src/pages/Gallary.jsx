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

  // Fetch gallery images from backend
  useEffect(() => {
    axios.get("http://localhost:5000/gallery").then((res) => setImages(res.data));
  }, []);

  // Upload handler
  const handleUpload = async (e) => {
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
      {/* ===== VIDEOS SECTION ===== */}
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <h1
          className="text-5xl md:text-6xl font-bold text-yellow-400 mb-10 tracking-wider"
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
          <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 animate-pulse tracking-wider drop-shadow-[0_0_15px_rgba(255,255,100,0.3)]">
            Travel Gallery
          </h1>
            <p 
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
           Share your unforgettable moments with us and relive the magic of your Sri Lankan adventure.
        </p>

          <label className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-yellow-500 transition mb-10 inline-block">
            {uploading ? "Uploading..." : "Upload Your Image"}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpload}
            />
          </label>

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
