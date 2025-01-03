"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredBooks = [
  {
    id: 1,
    title: "A Silent Echo",
    author: "Jo Jo D'Souza",
    image: "/silent-echo.jpg",
    price: 14.99,
  },
  {
    id: 2,
    title: "Whispers of the Cosmos",
    author: "Rounik Chakraborty",
    image: "/whisper.jpg",
    price: 12.99,
  },
  {
    id: 3,
    title: "The Forgotten Key",
    author: "Kenneth Thomas",
    image: "/key.jpg",
    price: 16.99,
  },
  {
    id: 4,
    title: "Echoes of Eternity",
    author: "Barbara Jennings",
    image: "/echos.jpg",
    price: 19.99,
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <motion.div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={book.image}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <p className="text-lg font-bold text-blue-600">
                  ${book.price.toFixed(2)}
                </p>
                <Link href={`/books/${book.id}`}>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
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

export default FeaturedBooks;
