"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "Sai Ying Pun, 520 sq ft",
    quote: "I was terrified of renovation scams. Mori's fixed pricing and weekly updates gave me complete peace of mind. My designer was with me every step.",
    project: "Full renovation",
    budget: "HK$580K",
  },
  {
    name: "Michael Wong",
    location: "Taikoo Shing, 680 sq ft",
    quote: "They made our tiny flat feel spacious and calming. The Japanese aesthetic was exactly what we wanted. Finished in 9 weeks, on budget.",
    project: "Living + Kitchen redesign",
    budget: "HK$420K",
  },
  {
    name: "Emily Lau",
    location: "Quarry Bay, 450 sq ft",
    quote: "First-time buyer, first renovation. I had no idea where to start. Mori guided everything from layout to light fixtures. Zero stress.",
    project: "Complete interior",
    budget: "HK$750K",
  },
];

export default function Testimonials() {
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
            Trusted By 100+ Homeowners
          </h2>
          <p className="text-gray-600">
            Real projects, real results, real peace of mind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="mb-4">
                <div className="flex items-center gap-1 mb-4 text-[#A8B89E]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.project} · {testimonial.budget}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
