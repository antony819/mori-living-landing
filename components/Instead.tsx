"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    image: "/images/project-1.jpg",
    alt: "Sai Ying Pun studio apartment",
    eyebrow: "Sai Ying Pun · 420 sq ft",
    title: "Everything has a place",
  },
  {
    image: "/images/project-2.jpg",
    alt: "Open-plan Japanese-inspired living room in Taikoo Shing",
    eyebrow: "Taikoo Shing · 680 sq ft",
    title: "Room to breathe",
  },
  {
    image: "/images/project-3.jpg",
    alt: "Minimalist custom joinery in a Mid-Levels apartment",
    eyebrow: "Mid-Levels · 550 sq ft",
    title: "Quietly considered",
  },
  {
    image: "/images/project-4.jpg",
    alt: "Space-efficient apartment with Japanese room dividers in Kennedy Town",
    eyebrow: "Kennedy Town · 480 sq ft",
    title: "More from less",
  },
  {
    image: "/images/project-5.jpg",
    alt: "Japanese-inspired dining area",
    eyebrow: "Wan Chai · 520 sq ft",
    title: "Daily rituals",
  },
  {
    image: "/images/project-6.jpg",
    alt: "Minimalist bathroom with natural materials",
    eyebrow: "Causeway Bay · 380 sq ft",
    title: "Quiet sanctuary",
  },
  {
    image: "/images/project-7.jpg",
    alt: "Calm home office workspace",
    eyebrow: "Sheung Wan · 450 sq ft",
    title: "Focused clarity",
  },
];

export default function Instead() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-display text-3xl md:text-4xl text-moss mb-4">
            Instead...
          </p>
          <p className="text-base text-aged-brass">Recent projects across Hong Kong</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-6 px-6 md:px-12 pb-8"
            style={{ width: "max-content" }}
          >
            {projects.map((project, index) => (
              <motion.figure
                key={project.image}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="flex-shrink-0 w-[85vw] md:w-[480px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-pale-stone group">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 480px"
                  />
                </div>
                <figcaption className="pt-4 border-t border-aged-brass/30 mt-4">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-aged-brass mb-1">
                    {project.eyebrow}
                  </p>
                  <p className="font-display text-2xl text-forest">{project.title}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-warm-paper to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-warm-paper to-transparent pointer-events-none" />
      </div>

      <div className="text-center mt-12 px-6">
        <p className="text-sm text-moss">
          Scroll to see more →
        </p>
      </div>
    </section>
  );
}
