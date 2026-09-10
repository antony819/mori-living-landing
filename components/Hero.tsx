"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      {/* Massive negative space - Japanese ma principle */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hook the pain point directly */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-12 text-balance leading-[1.1] text-forest">
            Your renovation
            <br />
            doesn't have to
            <br />
            feel like this.
          </h1>
          
          {/* Single line of specific reassurance */}
          <p className="text-lg md:text-xl text-moss mb-16 max-w-2xl mx-auto breathing">
            One designer. Fixed price. 520–680 sq ft Hong Kong flats transformed in 8–12 weeks.
          </p>

          {/* Single clear action */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-forest text-warm-paper px-10 py-5 text-base font-medium tracking-wide hover:bg-moss transition-colors duration-300"
          >
            Book consultation — it's free
          </motion.a>

          {/* Quiet WhatsApp alternative - not competing */}
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

      {/* Scroll indicator - subtle, not decorated */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-pale-stone"></div>
      </motion.div>
    </section>
  );
}
