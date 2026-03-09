"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const rsvpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  attendance: z.enum(["yes", "no"]),
  guests: z.string().optional(),
  mealPreference: z.string().optional(),
  message: z.string().optional(),
});

type RSVPFormValues = z.infer<typeof rsvpSchema>;

export default function RSVP() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpSchema),
  });

  const onSubmit = async (data: RSVPFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/your-email@example.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Wedding RSVP from ${data.name}`,
        })
      });

      if (!response.ok) throw new Error("Form submission failed");
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 md:py-40 bg-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Be Our Guest</span>
          <h2 className="text-4xl md:text-6xl font-serif">RSVP</h2>
          <p className="mt-6 text-charcoal-light font-light italic">
            Please respond by February 28, 2026. We can&apos;t wait to celebrate with you!
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-champagne/10 border border-gold/20 p-12 text-center rounded-sm"
          >
            <div className="w-16 h-16 bg-gold text-ivory rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
            <p className="text-charcoal-light font-light">Your response has been received. We&apos;re so excited!</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-gold uppercase tracking-widest text-xs hover:underline"
            >
              Submit another response
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light">Full Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light">Email Address</label>
                <input
                  {...register("email")}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest font-light block">Will you be attending?</label>
              <div className="flex space-x-8">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="radio" value="yes" {...register("attendance")} className="accent-gold h-4 w-4" />
                  <span className="text-sm font-light uppercase tracking-widest group-hover:text-gold transition-colors">Yes, with pleasure</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="radio" value="no" {...register("attendance")} className="accent-gold h-4 w-4" />
                  <span className="text-sm font-light uppercase tracking-widest group-hover:text-gold transition-colors">Regretfully decline</span>
                </label>
              </div>
              {errors.attendance && <p className="text-red-500 text-[10px] uppercase tracking-tighter">{errors.attendance.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light">Number of Guests</label>
                <select
                  {...register("guests")}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light appearance-none"
                >
                  <option value="1">1 person</option>
                  <option value="2">2 persons</option>
                  <option value="3">3 persons</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-light">Meal Preference</label>
                <select
                  {...register("mealPreference")}
                  className="w-full bg-transparent border-b border-charcoal/20 py-3 focus:outline-none focus:border-gold transition-colors font-light appearance-none"
                >
                  <option value="standard">Standard</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-light">A message for the couple</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-transparent border border-charcoal/10 p-4 focus:outline-none focus:border-gold transition-colors font-light rounded-sm"
                placeholder="Share your wishes..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-charcoal text-ivory py-5 uppercase tracking-[0.3em] text-xs hover:bg-gold transition-all duration-500 disabled:bg-charcoal/50"
            >
              {isSubmitting ? "Sending..." : "Send RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
