"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              key={item.book.id}
              className="flex items-center border-b py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.book.image}
                alt={item.book.title}
                width={80}
                height={120}
                className="object-cover mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.book.title}</h3>
                <p className="text-gray-600">{item.book.author}</p>
                <p className="text-blue-600">${item.price.toFixed(2)}</p>
                {item.price < item.book.price && (
                  <p className="text-sm text-green-600">
                    You saved: $
                    {((item.book.price - item.price) * item.quantity).toFixed(
                      2
                    )}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.book.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded-md px-2 py-1 mr-4"
                />
                <button
                  onClick={() => removeFromCart(item.book.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <div className="mt-4 space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => {
                  // Implement checkout logic here
                  alert("Checkout functionality not implemented in this demo");
                }}
              >
                Checkout
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-red-700 transition-colors"
                onClick={clearCart}
              >
                Clear Cart
              </motion.button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
