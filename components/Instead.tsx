"use client";

import { motion } from "framer-motion";

export default function Instead() {
  return (
    <section className="relative">
      {/* Section divider - minimal */}
      <div className="py-20 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl text-moss"
        >
          Instead...
        </motion.p>
      </div>

      {/* Real project as window - full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] bg-gradient-to-br from-pale-stone via-aged-brass/20 to-moss/10"
      >
        {/* Placeholder for real photo - gradient with texture */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-moss/40">
            <p className="text-sm uppercase tracking-wider">Project photography</p>
            <p className="text-xs mt-2">Calm, functional space</p>
          </div>
        </div>

        {/* Caption - specific, not generic */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/90 to-transparent p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <p className="text-aged-brass text-sm tracking-wide mb-2">Sai Ying Pun, 520 sq ft</p>
            <p className="text-warm-paper font-display text-2xl md:text-3xl max-w-2xl">
              Compact studio transformed with hidden storage. Everything has a place.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
