"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const weeks = [
  { week: 1, milestone: "Consultation", description: "We meet at your flat" },
  { week: 2, milestone: "Design proposal", description: "3D renders + quote" },
  { week: 3, milestone: "Contract signed", description: "Deposit paid" },
  { week: 4, milestone: "Construction starts", description: "Site handover" },
  { week: 8, milestone: "Midpoint check", description: "Walk-through visit" },
  { week: 12, milestone: "Handover", description: "Keys back to you" },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-warm-paper">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
            What happens when
          </h2>
          <p className="text-lg text-moss breathing">
            Every project is different, but the timeline is the same. Here's what to expect.
          </p>
        </motion.div>

        {/* Timeline scrubber */}
        <div className="relative mb-16">
          <div className="h-px bg-aged-brass/30 w-full"></div>
          <motion.div
            className="absolute top-0 left-0 h-px bg-forest"
            style={{ width: progressWidth }}
          ></motion.div>
          
          {/* Week markers */}
          <div className="relative flex justify-between mt-4">
            {[1, 4, 8, 12].map((week) => (
              <div key={week} className="text-center">
                <div className="text-sm text-aged-brass">Week {week}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-12">
          {weeks.map((item, index) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-8 items-start"
            >
              <div className="flex-shrink-0 w-16 text-right">
                <span className="text-sm text-aged-brass tabular-nums">Week {item.week}</span>
              </div>
              <div className="flex-1 border-l-2 border-aged-brass/30 pl-8 pb-8">
                <h3 className="font-display text-2xl text-forest mb-2">
                  {item.milestone}
                </h3>
                <p className="text-moss">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
