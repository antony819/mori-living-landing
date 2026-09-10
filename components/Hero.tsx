"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-balance leading-tight">
            Your stress-free renovation
            <br />
            <span className="text-[#A8B89E]">starts here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Japanese-inspired design for compact Hong Kong homes. One dedicated designer, from concept to completion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-[#A8B89E] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#96a68c] transition-colors text-center"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/85212345678?text=Hi, I'd like to learn more about Mori Living's design services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-[#A8B89E] transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div>
              <div className="text-2xl font-light text-gray-800">100+</div>
              <div>Projects Completed</div>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>
              <div className="text-2xl font-light text-gray-800">8-12</div>
              <div>Weeks Average</div>
            </div>
            <div className="hidden sm:block text-gray-300">|</div>
            <div>
              <div className="text-2xl font-light text-gray-800">HK$400K-1.2M</div>
              <div>Typical Projects</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
