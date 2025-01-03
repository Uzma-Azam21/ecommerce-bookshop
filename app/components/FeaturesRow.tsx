"use client";

import { motion } from "framer-motion";
import { Truck, Lock, DollarSign, RefreshCw } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping" },
  { icon: Lock, text: "Secure Payments" },
  { icon: DollarSign, text: "Best Price" },
  { icon: RefreshCw, text: "Free Returns" },
];

const FeaturesRow = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-full mr-4 shadow-md"
              >
                <feature.icon className="w-6 h-6 text-blue-600" />
              </motion.div>
              <span className="font-semibold">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesRow;
