"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroImages[currentIndex]}
            alt="Japanese-inspired interior design in Hong Kong"
            fill
            className="object-cover"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-paper/60 via-warm-paper/80 to-warm-paper" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-12 text-balance leading-[1.05] text-forest">
            Mori Living
          </h1>
          
          <p className="text-lg md:text-xl text-moss mb-16 max-w-2xl mx-auto breathing">
            One designer. Fixed price. 520–680 sq ft Hong Kong flats transformed in 8–12 weeks.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-forest text-warm-paper px-10 py-5 text-base font-medium tracking-wide hover:bg-moss transition-colors duration-300"
          >
            Book consultation — it's free
          </motion.a>

          <div className="mt-8">
            <a
              href="https://wa.me/85212345678?text=I'd like to book a free consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-moss hover:text-forest transition-colors underline decoration-pale-stone"
            >
              Or message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-aged-brass/50"></div>
      </motion.div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-aged-brass w-8"
                : "bg-pale-stone hover:bg-aged-brass/50"
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
