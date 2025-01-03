"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Book } from "../lib/types";

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={book.image}
            alt={book.title}
            width={500}
            height={700}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{book.author}</p>
          <p className="text-2xl font-bold text-blue-600 mb-4">
            ${book.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-6">{book.description}</p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-4">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border rounded-md px-2 py-1 w-16"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BookDetails;
