"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  flatSize: string;
  startDate: string;
  budget?: string;
  message?: string;
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form data:", data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 px-6 bg-forest">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl text-warm-paper mb-6">
              We'll call you tomorrow
            </h2>
            <p className="text-lg text-aged-brass breathing mb-8">
              Someone from Mori will contact you within 24 hours to schedule your consultation.
            </p>
            <p className="text-sm text-pale-stone">
              Need to talk sooner?{" "}
              <a href="https://wa.me/85212345678" className="underline hover:text-aged-brass transition-colors">
                WhatsApp +852 1234 5678
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-pale-stone">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
            Book consultation
          </h2>
          <p className="text-lg text-moss breathing">
            Free, no obligation. We'll answer your questions and show you similar projects. Takes about an hour.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Your name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors"
              placeholder="Sarah Chen"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-forest">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Phone or WhatsApp
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors"
              placeholder="9123 4567"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-forest">{errors.phone.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Flat size (sq ft)
              </label>
              <input
                {...register("flatSize", { required: "Flat size is required" })}
                type="text"
                className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors"
                placeholder="520"
              />
              {errors.flatSize && (
                <p className="mt-2 text-sm text-forest">{errors.flatSize.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                When do you want to start
              </label>
              <select
                {...register("startDate", { required: "Start date is required" })}
                className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors"
              >
                <option value="">Choose timing</option>
                <option value="1-2months">1–2 months</option>
                <option value="3-6months">3–6 months</option>
                <option value="planning">Just planning</option>
              </select>
              {errors.startDate && (
                <p className="mt-2 text-sm text-forest">{errors.startDate.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Budget (optional)
            </label>
            <select
              {...register("budget")}
              className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors"
            >
              <option value="">Prefer not to say</option>
              <option value="400-600k">HK$400K–600K</option>
              <option value="600-800k">HK$600K–800K</option>
              <option value="800k+">HK$800K+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">
              Anything else (optional)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-4 bg-warm-paper border border-aged-brass/30 text-ink focus:outline-none focus:border-forest transition-colors resize-none"
              placeholder="Small bedroom needs clever storage..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-forest text-warm-paper py-5 text-base font-medium hover:bg-moss transition-colors duration-300"
          >
            Book consultation — it's free
          </button>

          <p className="text-center text-sm text-moss">
            Or{" "}
            <a
              href="https://wa.me/85212345678"
              className="underline hover:text-forest transition-colors"
            >
              message on WhatsApp
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
