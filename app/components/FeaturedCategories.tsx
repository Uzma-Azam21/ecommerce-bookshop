"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Suspense & Thrill", image: "/suspense.jpg" },
  { name: "Spiritual", image: "/spiritual.jpg" },
  { name: "Psychological", image: "/psyco.jpg" },
  { name: "Self Help", image: "/selfhelp.jpg" },
  { name: "History", image: "/history.png" },
  { name: "Science Fiction", image: "/sci-fic.jpg" },
  { name: "Mental Health", image: "/mental-health.jpg" },
];

const FeaturedCategories = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (containerRef.current && !isPaused) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 30);
  }, [isPaused]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, startAutoSlide]);

  const handleDragStart = () => {
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Categories
        </h2>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
            <motion.div
              className="flex gap-6 py-4 px-4"
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="relative min-w-[280px] h-[200px] rounded-lg shadow-md flex-shrink-0"
                  whileHover={{ scale: isDragging ? 1 : 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/category/${category.name
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    <div className="relative h-full w-full rounded-lg overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity hover:bg-opacity-50">
                        <h3 className="text-white text-xl font-semibold text-center px-4">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCategories;
