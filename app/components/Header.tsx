"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </motion.svg>
            <span className="text-2xl font-bold">Libris Haven</span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="/shop" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/bestsellers" className="hover:text-gray-300">
            Bestsellers
          </Link>
          <Link href="/deals" className="hover:text-gray-300">
            Deals
          </Link>
          <Link href="/new-arrivals" className="hover:text-gray-300">
            New Arrivals
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </motion.div>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-700 py-2"
        >
          <Link href="/shop" className="block px-4 py-2 hover:bg-gray-600">
            Shop
          </Link>
          <Link
            href="/bestsellers"
            className="block px-4 py-2 hover:bg-gray-600"
          >
            Bestsellers
          </Link>
          <Link href="/deals" className="block px-4 py-2 hover:bg-gray-600">
            Deals
          </Link>
          <Link
            href="/new-arrivals"
            className="block px-4 py-2 hover:bg-gray-600"
          >
            New Arrivals
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
