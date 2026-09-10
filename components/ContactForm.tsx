"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  flatSize: string;
  startDate: string;
  budget: string;
  message?: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    // In production, send to API
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-6 bg-[#A8B89E]">
        <div className="max-w-2xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-light mb-4">Thank You!</h2>
            <p className="text-lg mb-6">
              We'll contact you within 24 hours to schedule your free consultation.
            </p>
            <p className="text-sm opacity-90">
              Prefer to chat now? WhatsApp us at +852 1234 5678
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-gray-600">
            No obligation. Just honest advice about your renovation.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none"
                placeholder="e.g. Sarah Chen"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone / WhatsApp *
              </label>
              <input
                {...register("phone", { required: "Phone is required" })}
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none"
                placeholder="e.g. 9123 4567"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flat Size (sq ft) *
                </label>
                <input
                  {...register("flatSize", { required: "Flat size is required" })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none"
                  placeholder="e.g. 520"
                />
                {errors.flatSize && (
                  <p className="mt-1 text-sm text-red-600">{errors.flatSize.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date *
                </label>
                <select
                  {...register("startDate", { required: "Start date is required" })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none"
                >
                  <option value="">Select timing</option>
                  <option value="asap">ASAP (1-2 months)</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="planning">Just planning</option>
                </select>
                {errors.startDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range (optional)
              </label>
              <select
                {...register("budget")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none"
              >
                <option value="">Prefer not to say</option>
                <option value="400-600k">HK$400K - 600K</option>
                <option value="600-800k">HK$600K - 800K</option>
                <option value="800k+">HK$800K+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anything else? (optional)
              </label>
              <textarea
                {...register("message")}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A8B89E] focus:border-transparent outline-none resize-none"
                placeholder="e.g. I love minimalist Japanese design and need help with a small bedroom..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A8B89E] text-white py-4 rounded-lg font-medium hover:bg-[#96a68c] transition-colors"
            >
              Book Free Consultation
            </button>

            <p className="text-center text-sm text-gray-500">
              Or WhatsApp us directly at{" "}
              <a
                href="https://wa.me/85212345678"
                className="text-[#A8B89E] hover:underline"
              >
                +852 1234 5678
              </a>
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
