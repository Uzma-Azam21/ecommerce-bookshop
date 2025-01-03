"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Libris Haven
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4 text-lg">
            Libris Haven is your sanctuary for exceptional books, where every
            page turns into an adventure. Founded in 2024, we&apos;ve quickly become
            a favorite destination for book lovers of all genres.
          </p>
          <motion.p
            className="mb-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our mission is to connect readers with their next great read,
            whether it&apos;s a thrilling bestseller, a thought-provoking
            non-fiction work, or a hidden gem waiting to be discovered.
          </motion.p>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            At Libris Haven, we believe in the power of stories to inspire,
            educate, and transform. That&apos;s why we curate our collection
            with care, ensuring a diverse range of voices and perspectives.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
        >
          <Image
            src="/bookshop.jpg"
            alt="Libris Haven Bookstore"
            fill
            objectFit="cover"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Our Store</h2>
            <p>A cozy haven for book lovers</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
