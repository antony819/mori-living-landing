"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Share your vision, budget, and timeline. We'll assess if we're the right fit.",
    duration: "1 hour",
  },
  {
    number: "02",
    title: "Design Proposal",
    description: "Receive 3D renderings, material selections, and a fixed-price quotation.",
    duration: "1-2 weeks",
  },
  {
    number: "03",
    title: "Contract & Deposit",
    description: "Clear terms, project timeline, and payment schedule. Start date confirmed.",
    duration: "3-5 days",
  },
  {
    number: "04",
    title: "Construction",
    description: "Weekly updates, site visits, and quality checks. Your designer oversees everything.",
    duration: "6-10 weeks",
  },
  {
    number: "05",
    title: "Handover",
    description: "Final walkthrough, snagging list, and your dream home ready to move in.",
    duration: "1 week",
  },
];

export default function Process() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Your Journey With Us
          </h2>
          <p className="text-gray-600">
            Transparent process, clear timeline, no surprises
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#A8B89E] text-white flex items-center justify-center text-xl font-light">
                {step.number}
              </div>
              <div className="flex-1 bg-white p-6 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">{step.title}</h3>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
