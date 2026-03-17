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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
            <div className="relative z-10">
                <div className="w-16 h-16 bg-gold text-ivory rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Check size={32} />
                </div>
                <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
                <p className="text-charcoal-light font-light">Your response has been received. We&apos;re so excited!</p>
                <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:underline"
                >
                Submit another response
                </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 rounded-3xl shadow-2xl border border-gold/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
                <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Full Name</label>
                    <input
                    {...register("name")}
                    className="w-full glass-input px-4 py-4 rounded-xl font-light text-charcoal border-gold/10"
                    placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-[9px] uppercase tracking-widest font-bold">{errors.name.message}</p>}
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Email Address</label>
                    <input
                    {...register("email")}
                    className="w-full glass-input px-4 py-4 rounded-xl font-light text-charcoal border-gold/10"
                    placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-[9px] uppercase tracking-widest font-bold">{errors.email.message}</p>}
                </div>
                </div>

                <div className="space-y-5">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold block">Will you be attending?</label>
                <div className="flex space-x-12">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" value="yes" {...register("attendance")} className="accent-gold h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-gold transition-colors">Yes, with pleasure</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="radio" value="no" {...register("attendance")} className="accent-gold h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-gold transition-colors">Regretfully decline</span>
                    </label>
                </div>
                {errors.attendance && <p className="text-red-500 text-[9px] uppercase tracking-widest font-bold">{errors.attendance.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Number of Guests</label>
                    <select
                    {...register("guests")}
                    className="w-full glass-input px-4 py-4 rounded-xl font-light text-charcoal border-gold/10 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEFGMzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                    >
                        <option value="1">1 person</option>
                        <option value="2">2 persons</option>
                        <option value="3">3 persons</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">Meal Preference</label>
                    <select
                    {...register("mealPreference")}
                    className="w-full glass-input px-4 py-4 rounded-xl font-light text-charcoal border-gold/10 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNENEFGMzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"
                    >
                        <option value="standard">Standard</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </div>
                </div>

                <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">A message for the couple</label>
                <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full glass-input p-4 rounded-xl font-light text-charcoal border-gold/10"
                    placeholder="Share your wishes..."
                />
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal text-ivory py-6 rounded-xl uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-gold transition-all duration-500 disabled:bg-charcoal/50 shadow-xl transform active:scale-[0.98]"
                >
                {isSubmitting ? "Sending..." : "Send RSVP"}
                </button>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}
