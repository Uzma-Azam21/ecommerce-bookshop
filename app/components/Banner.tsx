"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    id: 1,
    title: "Winter Reading Sale!",
    subtitle: "50% OFF on bestsellers",
    image: "/wintersale.jpg",
  },
  {
    id: 2,
    title: "Discover Your Next Adventure",
    subtitle: "Explore our vast collection of thrilling reads",
    image: "/discover.jpg",
  },
  {
    id: 3,
    title: "Join Our Reading Challenge",
    subtitle: "Win exciting prizes and expand your literary horizons",
    image: "/win.jpg",
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={banners[currentBanner].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={banners[currentBanner].image}
            alt={banners[currentBanner].title}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl mx-auto">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {banners[currentBanner].title}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {banners[currentBanner].subtitle}
              </motion.p>
              <motion.button
                className="bg-blue-600 text-white py-2 px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentBanner ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
