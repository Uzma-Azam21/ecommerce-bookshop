"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { books } from "../lib/data";

const newArrivals = books.filter((book) =>
  [
    "The Silent Patient",
    "Think and Grow Rich",
    "Rich Dad Poor Dad",
    "The Ten Thousand Doors of January",
  ].includes(book.title)
);

const NewArrivals = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((book, index) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-[280px] mx-auto w-full"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative w-full h-[280px]">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                />
                <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  New
                </div>
              </div>
              <div className="p-3 flex flex-col">
                <h3
                  className="text-lg font-semibold truncate"
                  title={book.title}
                >
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{book.author}</p>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(book.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                  <span className="ml-1 text-gray-600 text-sm">
                    {book.rating}
                  </span>
                </div>
                <p className="text-lg font-bold text-blue-600 mb-2">
                  ${book.price.toFixed(2)}
                </p>
                <Link href={`/books/${book.id}`} className="mt-auto">
                  <button className="w-full bg-blue-600 text-white py-1.5 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
