"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Full Design Service",
    description: "From concept sketches to final installation. One designer guides your entire journey.",
    icon: "✏️",
  },
  {
    title: "Quality Renovation",
    description: "Licensed contractors, premium materials, and meticulous execution. No shortcuts.",
    icon: "🔨",
  },
  {
    title: "Space Optimization",
    description: "Maximize every inch of your compact Hong Kong home with smart Japanese design.",
    icon: "📐",
  },
];

export default function Services() {
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
            Design + Build, Simplified
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for your renovation, managed by one trusted team
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
