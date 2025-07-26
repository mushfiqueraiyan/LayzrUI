import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cardData = [
  {
    id: 1,
    imageUrl: "Image 01",
    title: "AI Portrait with Floral Elements",
  },
  {
    id: 2,
    imageUrl: "Image 02",
    title: "Digital Human Surrounded by Flowers",
  },
  {
    id: 3,
    imageUrl: "Image 03",
    title: "AI-Generated Human with Floral Aura",
  },
  {
    id: 4,
    imageUrl: "Image 04",
    title: "Synthetic Portrait in Bloom",
  },
  {
    id: 5,
    imageUrl: "Image 05",
    title: "Virtual Being with Blossoms",
  },
  {
    id: 6,
    imageUrl: "Image 06",
    title: "AI Artistic Human with Flowers",
  },
  {
    id: 7,
    imageUrl: "Image 07",
    title: "Floral Digital Creation",
  },
  {
    id: 8,
    imageUrl: "Image 08",
    title: "Mystic AI Portrait with Flowers",
  },
  {
    id: 9,
    imageUrl: "Image 09",
    title: "Synthesized Human with Floral Beauty",
  },
];

export default function FirstCarousel() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(cardData.length / 2)
  );
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef(null);
  const autoplayDelay = 3000;

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % cardData.length);

  useEffect(() => {
    if (!isPaused)
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
    return () => clearInterval(autoplayIntervalRef.current);
  }, [isPaused, activeIndex]);

  const changeSlide = (newIndex) => {
    const newSafeIndex = (newIndex + cardData.length) % cardData.length;
    setActiveIndex(newSafeIndex);
    clearInterval(autoplayIntervalRef.current);
    if (!isPaused)
      autoplayIntervalRef.current = setInterval(goToNext, autoplayDelay);
  };

  const onDragEnd = (e, info) => {
    const threshold = 75;
    if (info.offset.x > threshold) changeSlide(activeIndex - 1);
    else if (info.offset.x < -threshold) changeSlide(activeIndex + 1);
  };

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div
        className="w-full max-w-5xl mx-auto p-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative flex flex-col rounded-3xl border border-white/10 bg-white dark:bg-neutral-900 p-4 pt-6">
          <div className="absolute left-4 top-6 rounded-xl border px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-white/80 bg-gray-100/80 dark:bg-black/20">
            <span className="mr-2">💫</span>Modern Carousel
          </div>

          <div className="relative w-full h-[280px] md:h-[400px] flex items-center justify-center overflow-hidden pt-12">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={onDragEnd}
              className="w-full h-full flex items-center justify-center"
            >
              {cardData.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  activeIndex={activeIndex}
                  totalCards={cardData.length}
                />
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={() => changeSlide(activeIndex - 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
            >
              <ArrowLeft className="text-white" />
            </button>

            <div className="flex items-center gap-2">
              {cardData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => changeSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-6 bg-purple-500"
                      : "w-2 bg-gray-300 dark:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSlide(activeIndex + 1)}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ card, index, activeIndex, totalCards }) {
  let offset = index - activeIndex;
  if (offset > totalCards / 2) offset -= totalCards;
  else if (offset < -totalCards / 2) offset += totalCards;
  const isVisible = Math.abs(offset) <= 1;

  return (
    <motion.div
      className="absolute w-1/2 md:w-1/3 h-[95%]"
      style={{ transformStyle: "preserve-3d" }}
      animate={{
        x: `${offset * 50}%`,
        scale: offset === 0 ? 1 : 0.8,
        zIndex: totalCards - Math.abs(offset),
        opacity: isVisible ? 1 : 0,
        transition: { type: "spring", stiffness: 260, damping: 30 },
      }}
      initial={false}
    >
      <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-gray-200 dark:bg-neutral-800">
        {/* <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/400x600/1e1e1e/ffffff?text=Image+Missing";
          }}
        /> */}
        <h1 className="text-white text-center mt-40 font-bold">
          {card.imageUrl}
        </h1>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h4 className="text-white text-lg font-semibold">{card.title}</h4>
        </div>
      </div>
    </motion.div>
  );
}
