"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
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
];

export default function Instead() {
  return (
    <section className="relative">
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

      <div className="max-w-7xl mx-auto px-6 pb-32">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
            <Image
              src="/images/project-1.jpg"
              alt="Sai Ying Pun studio apartment with Japanese-inspired design"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
          <figcaption className="grid md:grid-cols-[1fr_2fr] gap-4 pt-5 border-t border-aged-brass/50">
            <p className="text-sm text-aged-brass tracking-wide">Sai Ying Pun · 420 sq ft</p>
            <p className="font-display text-2xl md:text-3xl text-forest">
              Compact studio transformed with hidden storage. Everything has a place.
            </p>
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mt-16 md:ml-[16%]">
          {projects.map((project, index) => (
            <motion.figure
              key={project.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className={index === 2 ? "col-span-2 md:col-span-1" : ""}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-pale-stone">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 28vw"
                />
              </div>
              <figcaption className="pt-3">
                <p className="text-[11px] uppercase tracking-[0.12em] text-aged-brass">{project.eyebrow}</p>
                <p className="font-display text-xl text-forest mt-1">{project.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
