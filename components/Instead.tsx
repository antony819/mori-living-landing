"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
        className="relative h-[70vh]"
      >
        {/* Real project photo */}
        <Image
          src="/images/project-1.jpg"
          alt="Sai Ying Pun studio apartment with Japanese-inspired design"
          fill
          className="object-cover"
          priority
        />

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
