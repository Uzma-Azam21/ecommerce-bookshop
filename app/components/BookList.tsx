"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Book } from "../lib/types";

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, index) => (
        <motion.div
          key={book.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-[280px] mx-auto w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
          </div>
          <div className="p-3 flex flex-col">
            <h3 className="text-lg font-semibold truncate" title={book.title}>
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm mb-1">{book.author}</p>
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
  );
};

export default BookList;
