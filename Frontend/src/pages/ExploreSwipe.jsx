import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Slides for destinations — images are served from the project's `public/` folder
const slides = [
  { id: "adams-peak", title: "Adam's Peak", img: "/adam.jpeg", desc: "Sacred mountain and pilgrimage site." },
  { id: "anuradhapura", title: "Anuradhapura", img: "/m.jpeg", desc: "Ancient sacred city with ruins and stupas." },
  { id: "dambulla-cave-temple", title: "Dambulla", img: "/da.jpeg", desc: "Rock temple complex with painted caves." },
  { id: "ella-rock", title: "Ella Rock", img: "/ella.jpeg", desc: "Scenic hike with panoramic hill-country views." },
  { id: "galle-fort", title: "Galle Fort", img: "/5.jpeg", desc: "UNESCO fort with colonial architecture and sea views." },
  { id: "horton-plains", title: "Horton Plains", img: "/hortan.jpeg", desc: "Highland plateau with World's End viewpoint." },
  { id: "kandy-temple", title: "Kandy Temple", img: "/kandyy.jpeg", desc: "Home to the Temple of the Tooth Relic." },
  { id: "mirissa-beach", title: "Mirissa Beach", img: "/The Beach Town of Mirissa, Sri Lanka.jpeg", desc: "Beach town famous for whale watching." },
  { id: "nuwara-eliya", title: "Nuwara Eliya", img: "/eliya.jpeg", desc: "Tea plantations and colonial hill station." },
  { id: "sigiriya-rock-fortress", title: "Sigiriya", img: "/Visiting Sigiriya Rock Fortress in Sri Lanka.jpeg", desc: "Ancient rock fortress and UNESCO site." },
  { id: "unawatuna-beach", title: "Unawatuna Beach", img: "/Unawatuna.jpeg", desc: "Popular golden-sand beach near Galle." },
  { id: "yala-national-park", title: "Yala NP", img: "/yala.jpeg", desc: "Wildlife park known for leopards and elephants." },
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
};

const ExploreSwipe = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const navigate = useNavigate();

  const paginate = useCallback(
    (newDir) => {
      setDir(newDir);
      setIndex((i) => (i + newDir + slides.length) % slides.length);
    },
    [setIndex]
  );

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paginate]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="max-w-4xl w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold">Explore Destinations</h2>
         
        </div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full z-20"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence initial={false} custom={dir} mode="wait">
              <motion.div
                key={slides[index].id}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (offset.x > 100) paginate(-1);
                  else if (offset.x < -100) paginate(1);
                }}
                className="bg-gray-900 w-full h-96 md:h-[28rem] flex md:flex-row flex-col"
              >
                <div className="md:w-1/2 w-full h-56 md:h-auto">
                  <img src={slides[index].img} alt={slides[index].title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold">{slides[index].title}</h3>
                    <p className="text-gray-300 mt-3">{slides[index].desc}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigate(`/destinations/${slides[index].id}`)}
                      className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-red-900 transition"
                    >
                      Read more
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                      {slides.map((s, i) => (
                        <button
                          key={s.id}
                          onClick={() => setIndex(i)}
                          className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
                          aria-label={`Go to ${s.title}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full z-20"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSwipe;
