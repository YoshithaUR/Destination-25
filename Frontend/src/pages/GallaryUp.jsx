import axios from "axios";
import React, { useEffect, useState } from "react";

const GalleryUpload = () => {
  const [images, setImages] = useState([]);


  const [uploading, setUploading] = useState(false);

  // Fetch gallery images
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
    <section 
    id="memo"
    className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center py-12 px-6 overflow-hidden">
      {/* Title */}
       

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
       
      <h1 className="text-5xl font-bold mb-6  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-300 animate-pulse tracking-wider drop-shadow-[0_0_15px_rgba(255,255,100,0.3)]">
        Travel Gallery
      </h1>

     <label className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-yellow-500 transition mb-10">
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
    </section>
  );
};

export default GalleryUpload;
