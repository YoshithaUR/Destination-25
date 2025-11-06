
import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));


app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Get all uploaded images
app.get("/gallery", (req, res) => {
  const directory = "./uploads";
  fs.readdir(directory, (err, files) => {
    if (err) return res.status(500).json({ error: "Unable to scan files" });

    const images = files.map(
      (file) => `http://localhost:${PORT}/uploads/${file}`
    );
    res.json(images);
  });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
