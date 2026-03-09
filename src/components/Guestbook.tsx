"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

const sampleWishes = [
  { name: "John & Mary", message: "Congratulations on your beautiful journey together! Wishing you a lifetime of love and happiness." },
  { name: "Family Adeleke", message: "So happy for you both! May your home be filled with peace and laughter always." },
  { name: "Sarah Bello", message: "A match made in heaven. Can't wait to celebrate with you!" },
];

export default function Guestbook() {
  const [wishes, setWishes] = useState(sampleWishes);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setWishes([{ ...formData }, ...wishes]);
    setFormData({ name: "", message: "" });
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="guestbook" className="py-24 md:py-40 bg-champagne/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-gold mb-4 block">Wishes</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">Digital Guestbook</h2>
            <p className="text-charcoal-light font-light leading-relaxed mb-12">
              Leave a message for the beautiful couple. Your kind words and wishes will be 
              cherished forever as they start their new chapter.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-charcoal/60">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-ivory border border-gold/10 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-charcoal/60">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your heartfelt wishes..."
                  className="w-full bg-ivory border border-gold/10 px-6 py-4 rounded-sm focus:outline-none focus:border-gold transition-colors font-light resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-5 rounded-sm flex items-center justify-center gap-3 transition-all duration-500 uppercase tracking-widest text-xs",
                  isSuccess ? "bg-green-600 text-ivory" : "bg-gold text-ivory hover:bg-charcoal"
                )}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSuccess ? (
                  "Wishes Sent!"
                ) : (
                  <>
                    Send Wishes <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right: Scrolling Wishes */}
          <div className="relative h-[600px] overflow-hidden rounded-sm border border-gold/10 bg-ivory p-8">
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ivory to-transparent z-10" />
            
            <div className="space-y-8 animate-scroll-vertical">
              {[...wishes, ...wishes].map((wish, index) => (
                <div key={index} className="p-8 border-b border-gold/5 last:border-0 hover:bg-champagne/5 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <User size={14} />
                    </div>
                    <span className="font-serif italic text-charcoal">{wish.name}</span>
                  </div>
                  <p className="text-charcoal-light font-light leading-relaxed">
                    &quot;{wish.message}&quot;
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent z-10" />
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 40s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
