"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="font-medium text-lg">Mori Living</div>
            <div className="flex gap-4">
              <a
                href="https://wa.me/85212345678"
                className="hidden sm:block text-gray-600 hover:text-[#A8B89E] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="#contact"
                className="bg-[#A8B89E] text-white px-6 py-2 rounded-lg hover:bg-[#96a68c] transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
