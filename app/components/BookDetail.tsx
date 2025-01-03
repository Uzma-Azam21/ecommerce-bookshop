"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Book } from "../lib/types";
import { useRouter, useSearchParams } from "next/navigation";

interface BookDetailProps {
  book: Book;
}

const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const discountedPrice = searchParams.get("discountedPrice")
    ? parseFloat(searchParams.get("discountedPrice")!)
    : null;

  const handleAddToCart = () => {
    const priceToUse = discountedPrice || book.price;
    addToCart(book, quantity, priceToUse);
    alert(
      `Added ${quantity} ${quantity === 1 ? "copy" : "copies"} of "${
        book.title
      }" to the cart at $${priceToUse.toFixed(2)} each`
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => router.back()}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md p-4"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src={book.image}
              alt={book.title}
              layout="fill"
              objectFit="contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{book.author}</p>
          <div className="flex items-center mb-4">
            <p className="text-2xl font-bold text-blue-600 mr-4">
              ${(discountedPrice || book.price).toFixed(2)}
            </p>
            {discountedPrice && (
              <p className="text-lg text-gray-500 line-through">
                ${book.price.toFixed(2)}
              </p>
            )}
          </div>
          {discountedPrice && (
            <p className="text-green-600 font-semibold mb-4">
              You save: ${(book.price - discountedPrice).toFixed(2)} (20% off)
            </p>
          )}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(book.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-600">{book.rating.toFixed(1)}</span>
          </div>
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

export default BookDetail;
