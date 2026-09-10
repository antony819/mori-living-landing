"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    label: "One designer",
    detail: "Start to finish",
    description: "Your designer manages everything: layout, materials, contractors, timeline. One point of contact, no handoffs.",
  },
  {
    label: "Fixed price",
    detail: "No surprises",
    description: "HK$400K–1.2M depending on scope. The quote we give is the price you pay. No hidden fees, no change orders.",
  },
  {
    label: "8–12 weeks",
    detail: "Realistic timeline",
    description: "Design takes 2 weeks. Construction takes 6–10. We tell you exactly what happens when, and we stick to it.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-pale-stone">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
            How it works
          </h2>
          <p className="text-lg text-moss breathing max-w-2xl">
            Most people renovating for the first time don't know what to expect. Here's what you're paying for.
          </p>
        </motion.div>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border-l-2 border-aged-brass pl-8"
            >
              <div className="mb-3">
                <span className="font-display text-3xl text-forest">{benefit.label}</span>
                <span className="text-aged-brass ml-4 text-lg">{benefit.detail}</span>
              </div>
              <p className="text-base text-moss breathing max-w-xl">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
