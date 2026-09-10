"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I was afraid of contractors disappearing mid-job. Mori handled everything. My designer visited the site every week and sent me photos. I never worried.",
    name: "Sarah Chen",
    location: "Sai Ying Pun",
    size: "520 sq ft",
    cost: "HK$580K",
  },
  {
    quote: "The quote was HK$820K. The final invoice was HK$820K. No surprises, no 'unforeseen issues'. They said 10 weeks, it took 10 weeks.",
    name: "Michael Wong",
    location: "Taikoo Shing",
    size: "680 sq ft",
    cost: "HK$820K",
  },
  {
    quote: "First flat, first renovation. I didn't know where to start. My designer explained every decision: why this tile, why that layout. I understood everything.",
    name: "Emily Lau",
    location: "Quarry Bay",
    size: "450 sq ft",
    cost: "HK$750K",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
            What people say
          </h2>
          <p className="text-lg text-moss breathing">
            Three recent projects. All first-time renovators.
          </p>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-aged-brass/30 pt-8"
            >
              <p className="font-display text-2xl md:text-3xl text-forest mb-8 breathing leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-moss">
                <span className="font-medium text-ink">{testimonial.name}</span>
                <span>{testimonial.location}</span>
                <span>{testimonial.size}</span>
                <span className="text-aged-brass">{testimonial.cost}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
