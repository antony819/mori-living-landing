"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Sai Ying Pun Studio",
    size: "420 sq ft",
    budget: "HK$480K",
    description: "Compact studio transformed with hidden storage and multi-functional furniture",
    image: "/images/project-1.jpg",
  },
  {
    title: "Taikoo Shing 2BR",
    size: "680 sq ft",
    budget: "HK$820K",
    description: "Open-plan living with Japanese sliding doors and natural wood accents",
    image: "/images/project-2.jpg",
  },
  {
    title: "Mid-Levels Flat",
    size: "550 sq ft",
    budget: "HK$1.1M",
    description: "Minimalist sanctuary with custom joinery and integrated lighting",
    image: "/images/project-3.jpg",
  },
  {
    title: "Kennedy Town 1BR",
    size: "480 sq ft",
    budget: "HK$580K",
    description: "Clever space division creating distinct zones without walls",
    image: "/images/project-4.jpg",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600">
            Compact Hong Kong homes, transformed
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/70 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm mb-1 opacity-90">
                    {project.size} · {project.budget}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block text-[#A8B89E] hover:text-[#96a68c] font-medium"
          >
            See your home here? Let's talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
